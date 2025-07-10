import { type NextRequest, NextResponse } from "next/server"

// Simple implementation using EmailJS or similar service
export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // For immediate implementation, you can use EmailJS
    // This sends the email directly from the client side
    // Add this script to your HTML head: https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js

    // Or use a simple webhook service like Formspree
    const formspreeResponse = await fetch("https://formspree.io/f/xdkogkvo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _replyto: email,
        _subject: `Portfolio Contact from ${name}`,
        _template: "table",
      }),
    })

    if (formspreeResponse.ok) {
      return NextResponse.json({ success: true })
    } else {
      throw new Error("Failed to send email")
    }
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
