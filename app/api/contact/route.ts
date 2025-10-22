import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, positions } = body

    // Validate required fields
    if (!name || !email || !company || !positions) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Check if environment variables are set
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.FROM_EMAIL || !process.env.TO_EMAIL) {
      console.error('Missing environment variables:', {
        SMTP_HOST: !!process.env.SMTP_HOST,
        SMTP_USER: !!process.env.SMTP_USER,
        SMTP_PASS: !!process.env.SMTP_PASS,
        FROM_EMAIL: !!process.env.FROM_EMAIL,
        TO_EMAIL: !!process.env.TO_EMAIL
      })
      return NextResponse.json(
        { error: 'Email configuration is missing. Please check environment variables.' },
        { status: 500 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: `New Contact Form Submission - ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #B3262F; border-bottom: 2px solid #B3262F; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Positions Looking For:</strong> ${positions}</p>
          </div>
          
          <div style="background-color: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #2d5a2d;">
              <strong>Submission Time:</strong> ${new Date().toLocaleString()}
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 14px;">
              This email was sent from the MARS Returnship contact form.
            </p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Company: ${company}
        Positions Looking For: ${positions}
        
        Submission Time: ${new Date().toLocaleString()}
        
        This email was sent from the MARS Returnship contact form.
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
