import Link from 'next/link'
import Image from 'next/image'
import Heading from '@/components/Heading'
import { getReviews } from '@/lib/reviews'

export const metadata = {
  title: 'Reviews',
}

const PAGE_SIZE = 6

export default async function ReviewsPage({ searchParams }) {
  const page = parsePageParam(searchParams.page)
  const { reviews, pageCount } = await getReviews(PAGE_SIZE, page)
  console.log('[ReviewsPage] rendering:', page)
  return (
    <>
      <Heading>Reviews</Heading>
      <div className="flex gap-2 pb-3">
        <Link href={`/reviews?page=${page - 1}`}>&lt;</Link>
        <span>
          Page {page} of {pageCount}
        </span>
        <Link href={`/reviews?page=${page + 1}`}>&gt;</Link>
      </div>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map((review, index) => (
          <li
            key={review.slug}
            className="bg-white border rounded shadow w-80 hover:shadow-xl"
          >
            <Link href={`/reviews/${review.slug}`}>
              <Image
                src={review.image}
                alt={review.title}
                priority={index < 3}
                width="320"
                height="180"
                className="rounded-t"
              />
            </Link>
            <h2 className="font-semibold font-orbitron py-1 text-center">
              {review.title}
            </h2>
          </li>
        ))}
      </ul>
    </>
  )
}

function parsePageParam(paramValue) {
  if (paramValue) {
    const page = parseInt(paramValue)
    if (isFinite(page) && page > 0) {
      return page
    }
  }
  return 1
}
