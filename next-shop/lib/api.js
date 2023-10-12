export class ApiError extends Error {
  constructor(url, status) {
    super(`request to ${url} failed with status ${status}`)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError)
    }
    this.name = 'ApiError'
    this.status = status
  }
}

export async function fetchJson(url) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new ApiError(url, response.status)
  }
  return await response.json()
}
