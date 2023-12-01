import { readdir, readFile } from 'node:fs/promises'
import matter from 'gray-matter'
import { marked } from 'marked'
import qs from 'qs'

const CMS_URL = 'http://localhost:1337'

export async function getFeaturedReview() {
  const reviews = await getReviews()
  return reviews[0]
}

export async function getReview(slug) {
  const url =
    `${CMS_URL}/api/reviews?` +
    qs.stringify(
      {
        filters: { slug: { $eq: slug } },
        fields: ['slug', 'title', 'subtitle', 'publishedAt', 'body'],
        populate: { image: { fields: ['url'] } },
        pagination: { pageSize: 1, withCount: false },
      },
      { encodeValuesOnly: true }
    )
  console.log('getReview: ', url)

  const response = await fetch(url)
  const { data } = await response.json()
  const {
    attributes: { title, publishedAt, image, body },
  } = data[0]

  return {
    slug,
    title,
    data: publishedAt.slice(0, 'yyyy-mm-dd'.length),
    image: CMS_URL + image.data.attributes.url,
    body: marked(body),
  }
}

export async function getReviews() {
  const url =
    `${CMS_URL}/api/reviews?` +
    qs.stringify(
      {
        fields: ['slug', 'title', 'subtitle', 'publishedAt'],
        populate: { image: { fields: ['url'] } },
        sort: ['publishedAt:desc'],
        pagination: { pageSize: 6 },
      },
      { encodeValuesOnly: true }
    )
  console.log('getReviews: ', url)

  const response = await fetch(url)
  const { data } = await response.json()

  return data.map(({ attributes: { slug, title, publishedAt, image } }) => ({
    slug,
    title,
    data: publishedAt.slice(0, 'yyyy-mm-dd'.length),
    image: CMS_URL + image.data.attributes.url,
  }))
}

export async function getSlugs() {
  const files = await readdir('./content/reviews')
  return files.map((filename) => filename.replace('.md', ''))
}
