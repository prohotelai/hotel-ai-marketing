// Isolated Marketing Layer – No Core Access
// Middleware for tracking page views

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Skip tracking for API routes, static files, and internal routes
  const pathname = request.nextUrl.pathname;
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/locales') ||
    pathname.includes('.') // Static files
  ) {
    return response;
  }

  // Track page view (fire and forget - don't wait for response)
  // We use a separate API call to avoid blocking the request
  // The tracking is done client-side via the tracking API
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - locales (translation files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|locales).*)',
  ],
};
