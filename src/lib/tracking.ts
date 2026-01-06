// Isolated Marketing Layer – No Core Access
// Tracking utilities for analytics (isolated from Core SaaS)

import prisma from './prisma';
import { hashIp, getClientIp } from './hash';

export type TrackingEventType = 'pageView' | 'qrScan' | 'registration';

interface TrackingData {
  type: TrackingEventType;
  publicHotelId?: string;
  path?: string;
  userAgent?: string;
  ip?: string;
}

/**
 * Track an event in the isolated marketing database
 * All PII is hashed before storage
 */
export async function trackEvent(data: TrackingData): Promise<void> {
  // Skip tracking in development by default
  if (process.env.NODE_ENV === 'development' && process.env.ENABLE_DEV_TRACKING !== 'true') {
    console.log('[Tracking] Skipped in development:', data.type);
    return;
  }

  try {
    await prisma.trackingEvent.create({
      data: {
        type: data.type,
        publicHotelId: data.publicHotelId || null,
        path: data.path || null,
        userAgent: data.userAgent?.substring(0, 500) || null, // Truncate long user agents
        hashedIp: data.ip ? hashIp(data.ip) : null,
      },
    });
  } catch (error) {
    // Fail silently for tracking - never break the user experience
    console.error('[Tracking] Error:', error);
  }
}

/**
 * Track a page view from request headers
 */
export async function trackPageView(
  path: string,
  headers: Headers,
  publicHotelId?: string
): Promise<void> {
  const ip = getClientIp(headers);
  const userAgent = headers.get('user-agent');

  await trackEvent({
    type: 'pageView',
    path,
    publicHotelId,
    ip: ip || undefined,
    userAgent: userAgent || undefined,
  });
}

/**
 * Track a QR code scan
 */
export async function trackQrScan(
  publicHotelId: string,
  headers: Headers
): Promise<void> {
  const ip = getClientIp(headers);
  const userAgent = headers.get('user-agent');

  await trackEvent({
    type: 'qrScan',
    publicHotelId,
    ip: ip || undefined,
    userAgent: userAgent || undefined,
  });
}

/**
 * Track a registration submission
 */
export async function trackRegistration(headers: Headers): Promise<void> {
  const ip = getClientIp(headers);
  const userAgent = headers.get('user-agent');

  await trackEvent({
    type: 'registration',
    ip: ip || undefined,
    userAgent: userAgent || undefined,
  });
}
