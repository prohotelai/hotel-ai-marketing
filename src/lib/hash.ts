// Isolated Marketing Layer – No Core Access
// IP hashing utility for privacy-compliant tracking (no PII storage)

import { createHash } from 'crypto';

/**
 * Hash an IP address using SHA-256 for privacy compliance
 * We never store raw IP addresses - only hashed versions
 */
export function hashIp(ip: string): string {
  // Add a salt to prevent rainbow table attacks
  const salt = process.env.IP_HASH_SALT || 'marketing-layer-salt-v1';
  return createHash('sha256')
    .update(ip + salt)
    .digest('hex')
    .substring(0, 32); // Truncate for storage efficiency
}

/**
 * Get client IP from request headers
 * Handles various proxy scenarios (Vercel, Cloudflare, etc.)
 */
export function getClientIp(headers: Headers): string | null {
  // Priority order for IP detection
  const ipHeaders = [
    'x-forwarded-for',
    'x-real-ip',
    'cf-connecting-ip', // Cloudflare
    'x-vercel-forwarded-for', // Vercel
  ];

  for (const header of ipHeaders) {
    const value = headers.get(header);
    if (value) {
      // x-forwarded-for can contain multiple IPs, take the first one
      const ip = value.split(',')[0].trim();
      if (ip) return ip;
    }
  }

  return null;
}
