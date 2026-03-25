import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function buildInternalEmail(data: {
  firstName: string; lastName: string; email: string; phone: string;
  checkIn: string; checkOut: string; guests: string; specialRequests: string;
}) {
  const rows = (pairs: string[][]) => pairs.map(([label, value]) => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #1e1e1e;width:140px;">
        <p style="margin:0;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#555;font-weight:700;">${label}</p>
      </td>
      <td style="padding:10px 0;border-bottom:1px solid #1e1e1e;">
        <p style="margin:0;font-size:14px;color:#fff;font-weight:600;">${value}</p>
      </td>
    </tr>`).join('');

  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#0d0d0d;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0d0d0d;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#111;border:1px solid #222;border-radius:4px;overflow:hidden;">
        <tr><td style="background:#0a0a0a;padding:32px 40px;border-bottom:3px solid #C5A059;text-align:center;">
          <h1 style="margin:0 0 4px;font-size:28px;color:#C5A059;font-family:Georgia,serif;letter-spacing:4px;font-weight:400;">ATHEVA</h1>
          <p style="margin:0;font-size:10px;letter-spacing:4px;text-transform:uppercase;color:#666;font-weight:700;">by Chowk · New Booking Request</p>
        </td></tr>
        <tr><td style="padding:32px 40px 0;">
          <p style="margin:0 0 16px;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#C5A059;font-weight:700;">Guest Information</p>
          <table width="100%" cellpadding="0" cellspacing="0">
            ${rows([['Full Name', `${data.firstName} ${data.lastName}`], ['Email', data.email], ['Phone', data.phone]])}
          </table>
        </td></tr>
        <tr><td style="padding:28px 40px 0;">
          <p style="margin:0 0 16px;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#C5A059;font-weight:700;">Stay Details</p>
          <table width="100%" cellpadding="0" cellspacing="0">
            ${rows([['Check-in', data.checkIn || '—'], ['Check-out', data.checkOut || '—'], ['Guests', data.guests]])}
          </table>
        </td></tr>
        <tr><td style="padding:28px 40px 36px;">
          <p style="margin:0 0 10px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#555;font-weight:700;">Special Requests</p>
          <div style="background:#0a0a0a;border-left:3px solid #C5A059;padding:16px 20px;">
            <p style="margin:0;font-size:14px;color:#ccc;line-height:1.7;">${data.specialRequests || 'None provided.'}</p>
          </div>
        </td></tr>
        <tr><td style="background:#0a0a0a;padding:20px 40px;border-top:1px solid #1e1e1e;text-align:center;">
          <p style="margin:0;font-size:10px;color:#333;letter-spacing:1px;text-transform:uppercase;">Atheva by Chowk · WZ-24/1 FF Left Side Mukharjee Park, New Delhi – 110018</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function buildConfirmationEmail(firstName: string) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#f9f7f4;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f7f4;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border:1px solid #e8e0d5;border-radius:4px;overflow:hidden;">
        <tr><td style="background:#1a1a1a;padding:40px;text-align:center;border-bottom:3px solid #C5A059;">
          <h1 style="margin:0 0 6px;font-size:30px;color:#C5A059;font-family:Georgia,serif;letter-spacing:5px;font-weight:400;">ATHEVA</h1>
          <p style="margin:0;font-size:10px;letter-spacing:4px;text-transform:uppercase;color:#888;font-weight:700;">by Chowk</p>
        </td></tr>
        <tr><td style="padding:48px 48px 32px;text-align:center;">
          <p style="margin:0 0 8px;font-size:13px;letter-spacing:2px;text-transform:uppercase;color:#C5A059;font-weight:700;">Booking Request Received</p>
          <h2 style="margin:0 0 20px;font-size:28px;font-family:Georgia,serif;color:#1a1a1a;font-weight:400;">Dear ${firstName},</h2>
          <p style="margin:0 auto 28px;font-size:15px;color:#666;line-height:1.8;max-width:440px;">
            Thank you for choosing Atheva. We have received your booking request and our hospitality team will reach out within <strong style="color:#C5A059;">24 hours</strong> to confirm your reservation.
          </p>
          <a href="https://www.atheva.in" style="display:inline-block;background:#C5A059;color:#fff;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;padding:14px 36px;text-decoration:none;border-radius:2px;margin-bottom:36px;">Visit Atheva →</a>
        </td></tr>
        <tr><td style="padding:0 48px;"><div style="height:1px;background:#f0ebe3;"></div></td></tr>
        <tr><td style="padding:28px 48px;text-align:center;">
          <p style="margin:0 0 6px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#aaa;font-weight:700;">Need assistance?</p>
          <a href="mailto:bookings@atheva.in" style="font-size:14px;color:#C5A059;font-weight:700;text-decoration:none;">bookings@atheva.in</a>
        </td></tr>
        <tr><td style="background:#f9f7f4;padding:20px 48px;border-top:1px solid #e8e0d5;text-align:center;">
          <p style="margin:0 0 4px;font-size:10px;color:#bbb;letter-spacing:1px;text-transform:uppercase;">Atheva by Chowk · Chowk Entertainment Pvt. Ltd.</p>
          <p style="margin:0;font-size:10px;color:#bbb;letter-spacing:1px;text-transform:uppercase;">WZ-24/1 FF Left Side Mukharjee Park, New Delhi – 110018</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, checkIn, checkOut, guests, specialRequests } = body;

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'Mail configuration missing' }, { status: 500 });
    }

    await Promise.all([
      resend.emails.send({
        from: 'Atheva Bookings <bookings@atheva.in>',
        to: ['bookings@atheva.in'],
        subject: `New Booking Request: ${firstName} ${lastName}`,
        html: buildInternalEmail({ firstName, lastName, email, phone, checkIn, checkOut, guests, specialRequests }),
        replyTo: email,
      }),
      resend.emails.send({
        from: 'Atheva by Chowk <bookings@atheva.in>',
        to: [email],
        subject: 'Your booking request has been received – Atheva',
        html: buildConfirmationEmail(firstName),
      }),
    ]);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: unknown) {
    console.error('Resend error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: 'Failed to send email', details: errorMessage }, { status: 500 });
  }
}
