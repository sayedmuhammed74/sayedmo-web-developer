import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ message: 'All fields are required' }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // HTML email
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
        <div style="background: #0d6efd; padding: 15px; text-align: center;">
          <img src="https://sayedmo.vercel.app/logo.jpg" alt="Logo" style="max-height: 50px;"/>
        </div>
        <div style="padding: 20px;">
          <h2 style="color: #0d6efd;">📩 New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
            </tr>
          </table>
          <h3 style="margin-top: 20px; color: #0d6efd;">Message:</h3>
          <p style="line-height: 1.5; background: #f8f9fa; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
        <div style="background: #f1f1f1; text-align: center; padding: 10px; font-size: 12px; color: #777;">
          This message was sent from your portfolio contact form.
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIEVER,
      subject: `New message from ${name}`,
      html: htmlContent,
    });

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ message: 'Something went wrong', error }),
      { status: 500 }
    );
  }
}
