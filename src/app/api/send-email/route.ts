import * as nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, message, time, contactMethod, recaptchaToken } =
    body;

  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY!;
  const recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`;

  try {
    const recaptchaResponse = await fetch(recaptchaUrl, { method: "POST" });
    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return new Response(
        JSON.stringify({ message: "reCAPTCHA verification failed" }),
        {
          status: 400,
        },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const clinicMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CLINIC_EMAIL || "serena@blakepsychology.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPreferred Contact Method: ${contactMethod}\nPreferred Time: ${time}\n\nMessage:\n${message}`,
      html: `<h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Preferred Contact Method:</strong> ${contactMethod}</p>
        <p><strong>Preferred Time:</strong> ${time}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>`,
    };

    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting Dr. Serena Blake",
      text: `Dear ${name},\n\nThank you for reaching out...`,
      html: `<h2>Thank you for contacting Dr. Serena Blake</h2>
        <p>Dear ${name},</p>
        <p>Thank you for reaching out...</p>`,
    };

    await transporter.sendMail(clinicMailOptions);
    await transporter.sendMail(clientMailOptions);

    return new Response(
      JSON.stringify({ message: "Emails sent successfully" }),
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Error sending email" }), {
      status: 500,
    });
  }
}
