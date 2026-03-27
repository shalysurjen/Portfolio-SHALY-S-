const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Sends a notification email to you when someone fills the contact form.
 * @param {{ name:string, email:string, subject:string, message:string }} data
 */
const sendContactNotification = async ({ name, email, subject, message }) => {
  await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: process.env.MAIL_TO,
    replyTo: email,
    subject: `📬 Message: ${subject || '(no subject)'} — from ${name}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0f172a;color:#e2e8f0;border-radius:12px;overflow:hidden;">
        
        <!-- Header -->
        <div style="background:linear-gradient(135deg,#38bdf8,#818cf8);padding:28px 32px;">
          <h1 style="margin:0;font-size:22px;color:#fff;letter-spacing:-0.5px;">
            📬 New Portfolio Message
          </h1>
          <p style="margin:6px 0 0;color:rgba(255,255,255,0.85);font-size:14px;">
            Someone reached out via your portfolio contact form
          </p>
        </div>

        <!-- Body -->
        <div style="padding:32px;">

          <!-- Sender info -->
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr>
              <td style="padding:10px 14px;background:#1e293b;border-radius:8px 8px 0 0;border-bottom:1px solid #334155;">
                <span style="font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:.5px;">Name</span><br/>
                <span style="font-size:15px;font-weight:600;color:#f1f5f9;">${name}</span>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 14px;background:#1e293b;border-bottom:1px solid #334155;">
                <span style="font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:.5px;">Email</span><br/>
                <a href="mailto:${email}" style="font-size:15px;color:#38bdf8;text-decoration:none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 14px;background:#1e293b;border-radius:0 0 8px 8px;">
                <span style="font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:.5px;">Subject</span><br/>
                <span style="font-size:15px;color:#f1f5f9;">${subject || '—'}</span>
              </td>
            </tr>
          </table>

          <!-- Message -->
          <div style="background:#1e293b;border-radius:8px;padding:18px;border-left:3px solid #38bdf8;">
            <span style="font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:10px;">Message</span>
            <p style="margin:0;font-size:15px;color:#cbd5e1;line-height:1.7;white-space:pre-wrap;">${message}</p>
          </div>

          <!-- Reply CTA -->
          <div style="margin-top:28px;text-align:center;">
            <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject || 'Your message')}"
               style="display:inline-block;background:linear-gradient(135deg,#38bdf8,#818cf8);color:#fff;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;">
              Reply to ${name} →
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="padding:16px 32px;border-top:1px solid #1e293b;text-align:center;">
          <p style="margin:0;font-size:12px;color:#475569;">
            Sent from your portfolio contact form • ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
          </p>
        </div>

      </div>
    `,
  });
};

module.exports = { sendContactNotification };