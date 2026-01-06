// Marketing Layer - Redirect API
// All registration requests should go to the core SaaS app

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // Return redirect instruction to client
  return NextResponse.json(
    { 
      redirect: 'https://hotel-ai-saas-amber.vercel.app/register',
      message: 'Please complete registration at the main application'
    },
    { status: 307 }
  );
}

export async function GET() {
  // Redirect GET requests
  return NextResponse.redirect('https://hotel-ai-saas-amber.vercel.app/register', 307);
}
