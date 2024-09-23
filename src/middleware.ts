import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname == "/") {
    console.log("aquir")
    console.log(request.url)
    return NextResponse.redirect(new URL("/home", request.url))
  }
}