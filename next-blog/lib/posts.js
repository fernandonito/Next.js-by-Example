import { readFile } from 'fs/promises'

export async function getPost(slug) {
  const data = await readFile(`content/posts/${slug}.json`, 'utf-8')
  return JSON.parse(data)
}
