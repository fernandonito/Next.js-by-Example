import { Suspense } from 'react'
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getReview, getSlugs } from '@/lib/reviews'
import CommentForm from '@/components/CommentForm'
import CommentList from '@/components/CommentList'
import Heading from '@/components/Heading'
import ShareButtons from '@/components/ShareButtons'
import CommentListSkeleton from '@/components/CommentListSkeleton'

export async function generateStaticParams() {
  const slugs = await getSlugs()
  // console.log('[ReviewPage] generateStaticParams', slugs)
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug)
  if (!review) return notFound()
  return {
    title: review.title,
  }
}

export default async function ReviewPage({ params: { slug } }) {
  console.log('[ReviewPage] rendering', slug)
  const review = await getReview(slug)
  if (!review) return notFound()
  return (
    <>
      <Heading>{review.title}</Heading>
      <p className="font-semibold pb-3">{review.subtitle}</p>
      <div className="flex gap-3 items-baseline">
        <p className="italic pb-2">{review.date}</p>
        <ShareButtons />
      </div>
      <Image
        src={review.image}
        alt={review.title}
        priority
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className="max-w-screen-sm prose prose-slate"
      />
      <section className="border-dashed border-t max-w-screen-sm mt-3 py-3">
        <h2 className="font-bold flex gap-2 items-center text-xl">
          <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />
          Comments
        </h2>
        <CommentForm slug={slug} title={review.title} />
        <Suspense fallback={<CommentListSkeleton />}>
          <CommentList slug={slug} />
        </Suspense>
      </section>
    </>
  )
}
