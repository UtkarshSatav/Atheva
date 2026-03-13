import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, checkIn, checkOut, guests, specialRequests } = body;

    // Check if configuration exists
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email credentials missing in environment variables');
      return NextResponse.json({ error: 'Email system not configured. Please set EMAIL_USER and EMAIL_PASS.' }, { status: 500 });
    }

    // Sanitize password (remove spaces if any)
    const sanitizedPass = process.env.EMAIL_PASS.replace(/\s/g, '');

    // NOTE: You need to set EMAIL_USER and EMAIL_PASS in your .env file
    // For Gmail, you might need an App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Standard service, can be changed to custom SMTP
      auth: {
        user: process.env.EMAIL_USER,
        pass: sanitizedPass,
      },
    });

    const mailOptions = {
      from: `"ATHEVA Website" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: 'bookings@atheva.in',
      cc: process.env.EMAIL_USER, // Send a copy to the sender to verify it works
      subject: `New Booking Request: ${firstName} ${lastName}`,
      html: `
        <div style="font-family: 'serif', sans-serif; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          <div style="background-color: #1a1a1a; padding: 20px; text-align: center;">
            <h1 style="color: #C5A059; margin: 0; font-size: 24px; letter-spacing: 2px;">ATHEVA</h1>
            <p style="color: #fff; margin: 5px 0 0; font-size: 12px; text-transform: uppercase; letter-spacing: 3px;">by Chowk</p>
          </div>
          <div style="padding: 30px; background-color: #fff;">
            <h2 style="color: #333; font-size: 20px; margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Booking Inquiry</h2>
            
            <div style="margin-bottom: 20px;">
              <p style="margin: 5px 0;"><strong style="color: #C5A059;">Guest Name:</strong> ${firstName} ${lastName}</p>
              <p style="margin: 5px 0;"><strong style="color: #C5A059;">Email:</strong> ${email}</p>
              <p style="margin: 5px 0;"><strong style="color: #C5A059;">Phone:</strong> ${phone}</p>
            </div>

            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
              <h3 style="margin-top: 0; font-size: 16px; color: #333;">Stay Details</h3>
              <p style="margin: 5px 0;"><strong>Check-in:</strong> ${checkIn}</p>
              <p style="margin: 5px 0;"><strong>Check-out:</strong> ${checkOut}</p>
              <p style="margin: 5px 0;"><strong>Guests:</strong> ${guests}</p>
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="margin-top: 0; font-size: 16px; color: #333;">Special Requests</h3>
              <p style="font-style: italic; color: #555;">${specialRequests || 'No special requests provided.'}</p>
            </div>
          </div>
          <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #888;">
            <p style="margin: 0;">This email was sent from the ATHEVA Booking Form.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 500 });
  }
}
