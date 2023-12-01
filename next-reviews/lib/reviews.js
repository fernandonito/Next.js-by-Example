import { readdir, readFile } from 'node:fs/promises'
import matter from 'gray-matter'
import { marked } from 'marked'
import qs from 'qs'

export async function getFeaturedReview() {
  const reviews = await getReviews()
  return reviews[0]
}

export async function getReview(slug) {
  const text = await readFile(`./content/reviews/${slug}.md`, 'utf-8')
  const {
    content,
    data: { title, date, image },
  } = matter(text)
  const body = marked(content)

  return { slug, title, date, image, body }
}

export async function getReviews() {
  // const slugs = await getSlugs()

  // const reviews = await Promise.all(slugs.map(getReview))
  // reviews.sort((a, b) => b.date.localeCompare(a.date))
  // return reviews
  const url =
    'http://localhost:1337/api/reviews?' +
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
  return data.map(({ attributes: { slug, title } }) => ({
    slug,
    title,
  }))
}

export async function getSlugs() {
  const files = await readdir('./content/reviews')
  return files.map((filename) => filename.replace('.md', ''))
}
