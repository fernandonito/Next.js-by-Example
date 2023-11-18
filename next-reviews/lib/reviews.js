import { readdir, readFile } from 'node:fs/promises'
import matter from 'gray-matter'
import { marked } from 'marked'

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
  const files = await readdir('./content/reviews')
  const slugs = files.map((filename) => filename.replace('.md', ''))

  const reviews = await Promise.all(slugs.map(getReview))
  return reviews
}
