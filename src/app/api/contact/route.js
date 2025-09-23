import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();

    const { name, email, subject, message } = data;

 
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

 
   let mailOptions = {
  from: email,
  to: process.env.EMAIL_USER,
  subject: ` New Contact Form Message: ${subject}`,
  html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
      <div style="background: #4CAF50; color: white; padding: 15px 20px; font-size: 20px;">
        📬 New Contact Form Submission
      </div>
      <div style="padding: 20px;">
        <p style="margin: 0; font-size: 16px;"><strong>Name:</strong> ${name}</p>
        <p style="margin: 0; font-size: 16px;"><strong>Email:</strong> ${email}</p>
        <p style="margin: 0; font-size: 16px;"><strong>Subject:</strong> ${subject}</p>
        <p style="margin-top: 15px; font-size: 16px;"><strong>Message:</strong></p>
        <div style="background: #f9f9f9; border-left: 4px solid #4CAF50; padding: 10px; margin-top: 5px; white-space: pre-line;">
          ${message}
        </div>
      </div>
      <div style="background: #f1f1f1; text-align: center; padding: 10px; font-size: 12px; color: #777;">
        This message was sent from your portfolio contact form.
      </div>
    </div>
  `,
};

 
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}
