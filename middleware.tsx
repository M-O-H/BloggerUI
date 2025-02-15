import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
	const cookies = request.cookies.get('token')
	if (!cookies)
		return NextResponse.redirect(new URL('/auth/signin', request.url));
	return NextResponse.next();
}

export const config = {
	matcher: ['/new/:path*'],
}
