import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, eventType, date, message } = await req.json();
    console.log('[contact] Incoming request:', { name, email, eventType, date, message });

    if (!process.env.RESEND_API_KEY) {
      console.error('[contact] RESEND_API_KEY is missing from environment');
      return NextResponse.json({ error: 'Mail configuration missing' }, { status: 500 });
    }
    console.log('[contact] RESEND_API_KEY found, initializing send...');

    const [internalResult, confirmationResult] = await Promise.allSettled([
      // Internal notification to Atheva team
      resend.emails.send({
        from: 'Atheva Contact <bookings@atheva.in>',
        to: ['bookings@atheva.in'],
        replyTo: email,
        subject: `New Contact Enquiry from ${name}`,
        html: `
          <div style="font-family:Arial,sans-serif;background:#0d0d0d;color:#fff;padding:40px;">
            <h2 style="color:#C5A059;letter-spacing:3px;font-weight:400;">NEW ENQUIRY</h2>
            <table style="width:100%;border-collapse:collapse;margin-top:20px;">
              <tr><td style="padding:10px 0;border-bottom:1px solid #222;color:#888;width:140px;">Name</td><td style="padding:10px 0;border-bottom:1px solid #222;">${name}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #222;color:#888;">Email</td><td style="padding:10px 0;border-bottom:1px solid #222;">${email}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #222;color:#888;">Event Type</td><td style="padding:10px 0;border-bottom:1px solid #222;">${eventType || '—'}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #222;color:#888;">Preferred Date</td><td style="padding:10px 0;border-bottom:1px solid #222;">${date || '—'}</td></tr>
            </table>
            <div style="margin-top:24px;padding:16px 20px;background:#111;border-left:3px solid #C5A059;">
              <p style="margin:0;color:#ccc;line-height:1.7;">${message}</p>
            </div>
          </div>
        `,
      }),
      // Confirmation to the user
      resend.emails.send({
        from: 'Atheva by Chowk <bookings@atheva.in>',
        to: [email],
        subject: 'We received your message – Atheva',
        html: `
          <div style="font-family:Arial,sans-serif;background:#f9f7f4;padding:40px;text-align:center;">
            <h1 style="color:#C5A059;letter-spacing:5px;font-weight:400;font-family:Georgia,serif;">ATHEVA</h1>
            <p style="color:#888;letter-spacing:3px;font-size:11px;text-transform:uppercase;">by Chowk</p>
            <h2 style="color:#1a1a1a;font-family:Georgia,serif;font-weight:400;margin-top:32px;">Dear ${name},</h2>
            <p style="color:#666;line-height:1.8;max-width:440px;margin:16px auto;">
              Thank you for reaching out. We have received your message and will get back to you within <strong style="color:#C5A059;">24 hours</strong>.
            </p>
            <a href="https://www.atheva.in" style="display:inline-block;background:#C5A059;color:#fff;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;padding:14px 36px;text-decoration:none;margin-top:24px;">Visit Atheva →</a>
            <p style="margin-top:40px;font-size:10px;color:#bbb;letter-spacing:1px;text-transform:uppercase;">Atheva by Chowk · WZ-24/1 FF Left Side Mukharjee Park, New Delhi – 110018</p>
          </div>
        `,
      }),
    ]);

    console.log('[contact] Internal email result:', internalResult);
    console.log('[contact] Confirmation email result:', confirmationResult);

    if (internalResult.status === 'rejected') {
      console.error('[contact] Internal email FAILED:', internalResult.reason);
    }
    if (confirmationResult.status === 'rejected') {
      console.error('[contact] Confirmation email FAILED:', confirmationResult.reason);
    }

    const anyFailed = internalResult.status === 'rejected' || confirmationResult.status === 'rejected';
    if (anyFailed) {
      return NextResponse.json({ error: 'One or more emails failed to send' }, { status: 500 });
    }

    console.log('[contact] Both emails sent successfully');
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: unknown) {
    console.error('[contact] Unexpected error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: 'Failed to send email', details: errorMessage }, { status: 500 });
  }
}
