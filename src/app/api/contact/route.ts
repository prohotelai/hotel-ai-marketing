// Isolated Marketing Layer – No Core Access
// Contact form API route - sends emails via Resend

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema } from '@/lib/validations';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: validationResult.error.errors },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validationResult.data;

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_your_api_key_here') {
      console.log('Contact form submission (Resend not configured):', { name, email, subject, message });
      // In development without Resend, just log and return success
      return NextResponse.json(
        { success: true, message: 'Message received (email delivery disabled in dev)' },
        { status: 200 }
      );
    }

    // Initialize Resend with API key (lazy initialization)
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email via Resend
    // Email addresses are configurable via environment variables
    const fromEmail = process.env.EMAIL_FROM || 'Hotel AI SaaS <onboarding@resend.dev>';
    const toEmail = process.env.EMAIL_TO || 'hello@hotelaissas.com';
    
    const { error: sendError } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (sendError) {
      console.error('Resend error:', sendError);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
}
