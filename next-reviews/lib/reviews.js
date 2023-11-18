import { readdir, readFile } from 'node:fs/promises'
import matter from 'gray-matter'
import { marked } from 'marked'

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
  const slugs = await getSlugs()

  const reviews = await Promise.all(slugs.map(getReview))
  reviews.sort((a, b) => b.date.localeCompare(a.date))
  return reviews
}

export async function getSlugs() {
  const files = await readdir('./content/reviews')
  return files.map((filename) => filename.replace('.md', ''))
}
