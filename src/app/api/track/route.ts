// Isolated Marketing Layer – No Core Access
// Tracking API route - records analytics events

import { NextRequest, NextResponse } from 'next/server';
import { trackEvent, type TrackingEventType } from '@/lib/tracking';
import { getClientIp } from '@/lib/hash';

interface TrackingRequestBody {
  type: TrackingEventType;
  publicHotelId?: string;
  path?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: TrackingRequestBody = await request.json();

    // Validate event type
    const validTypes: TrackingEventType[] = ['pageView', 'qrScan', 'registration'];
    if (!validTypes.includes(body.type)) {
      return NextResponse.json(
        { error: 'Invalid event type' },
        { status: 400 }
      );
    }

    const ip = getClientIp(request.headers);
    const userAgent = request.headers.get('user-agent');

    await trackEvent({
      type: body.type,
      publicHotelId: body.publicHotelId,
      path: body.path,
      ip: ip || undefined,
      userAgent: userAgent || undefined,
    });

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error('Tracking error:', error);
    // Fail silently for tracking - never break user experience
    return NextResponse.json(
      { success: true }, // Return success even on error
      { status: 200 }
    );
  }
}
