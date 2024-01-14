import { db } from '@/lib/db'

export async function getComments(slug) {
  return await db.comment.findMany({
    where: { slug },
  })
}
