import { NextResponse } from 'next/server'

export async function POST(request) {
  const payload = await request.json()
  console.log('[cms-event]: ', payload)
  return new Response(null, { status: 204 })
}
