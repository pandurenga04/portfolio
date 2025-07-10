import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Create email content
    const emailContent = {
      to: "pandurengasrinivasang@gmail.com",
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 10px;">
          <div style="background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #333; margin-bottom: 20px; text-align: center; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
              New Portfolio Contact Message
            </h2>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #667eea; margin-bottom: 5px;">From:</h3>
              <p style="margin: 0; font-size: 16px; color: #333;"><strong>${name}</strong></p>
              <p style="margin: 5px 0 0 0; color: #666;">${email}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #667eea; margin-bottom: 10px;">Message:</h3>
              <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea;">
                <p style="margin: 0; line-height: 1.6; color: #333;">${message.replace(/\n/g, "<br>")}</p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; font-size: 14px; margin: 0;">
                This message was sent from your portfolio website contact form.
              </p>
              <p style="color: #666; font-size: 12px; margin: 10px 0 0 0;">
                Sent on ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
        New Portfolio Contact Message
        
        From: ${name} (${email})
        
        Message:
        ${message}
        
        Sent on ${new Date().toLocaleString()}
      `,
    }

    // For development/demo purposes, we'll use a simple email service
    // In production, you would integrate with services like:
    // - Resend (recommended)
    // - SendGrid
    // - Nodemailer with Gmail SMTP
    // - EmailJS

    // Simulate email sending (replace with actual email service)
    console.log("Email would be sent:", emailContent)

    // For now, we'll use a simple webhook or email service
    // Here's an example using a webhook service like Formspree or similar:

    const emailResponse = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _replyto: email,
        _subject: `Portfolio Contact: Message from ${name}`,
      }),
    })

    if (!emailResponse.ok) {
      throw new Error("Failed to send email")
    }

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
