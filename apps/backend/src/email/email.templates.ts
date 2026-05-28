export const emailTemplates = {
  enrollment: (data: { userName: string; courseTitle: string; courseUrl: string; unsubscribeUrl: string }) => ({
    subject: `You're enrolled in "${data.courseTitle}"`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2>Welcome to ${data.courseTitle}!</h2>
        <p>Hi ${data.userName},</p>
        <p>You've successfully enrolled. Start learning now:</p>
        <a href="${data.courseUrl}" style="background:#4F46E5;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;display:inline-block">Go to Course</a>
        <p style="margin-top:40px;font-size:12px;color:#999">
          <a href="${data.unsubscribeUrl}">Unsubscribe</a>
        </p>
      </div>`,
  }),

  completion: (data: { userName: string; courseTitle: string; credentialUrl: string; unsubscribeUrl: string }) => ({
    subject: `Congratulations! You completed "${data.courseTitle}"`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2>🎉 Course Completed!</h2>
        <p>Hi ${data.userName},</p>
        <p>You've completed <strong>${data.courseTitle}</strong>. Your credential is ready:</p>
        <a href="${data.credentialUrl}" style="background:#059669;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;display:inline-block">View Credential</a>
        <p style="margin-top:40px;font-size:12px;color:#999">
          <a href="${data.unsubscribeUrl}">Unsubscribe</a>
        </p>
      </div>`,
  }),

  credentialIssued: (data: { userName: string; courseTitle: string; txHash: string; unsubscribeUrl: string }) => ({
    subject: `Your blockchain credential for "${data.courseTitle}" is ready`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2>🏆 Credential Issued on Stellar</h2>
        <p>Hi ${data.userName},</p>
        <p>Your credential for <strong>${data.courseTitle}</strong> has been recorded on the Stellar blockchain.</p>
        <p>Transaction: <code>${data.txHash}</code></p>
        <p style="margin-top:40px;font-size:12px;color:#999">
          <a href="${data.unsubscribeUrl}">Unsubscribe</a>
        </p>
      </div>`,
  }),

  waitlistJoined: (data: { userName: string; courseTitle: string; position: number; courseUrl: string; unsubscribeUrl: string }) => ({
    subject: `You're on the waitlist for "${data.courseTitle}"`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2>You're on the waitlist!</h2>
        <p>Hi ${data.userName},</p>
        <p>You've been added to the waitlist for <strong>${data.courseTitle}</strong>.</p>
        <p>Your current position: <strong>#${data.position}</strong></p>
        <p>We'll automatically enroll you and send you an email as soon as a spot opens up. No action needed.</p>
        <a href="${data.courseUrl}" style="background:#6366f1;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;display:inline-block">View Course</a>
        <p style="margin-top:40px;font-size:12px;color:#999">
          <a href="${data.unsubscribeUrl}">Unsubscribe</a>
        </p>
      </div>`,
  }),

  waitlistEnrolled: (data: { userName: string; courseTitle: string; courseUrl: string; unsubscribeUrl: string }) => ({
    subject: `Great news — you've been enrolled in "${data.courseTitle}"!`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2>🎉 A spot opened up for you!</h2>
        <p>Hi ${data.userName},</p>
        <p>A spot became available in <strong>${data.courseTitle}</strong> and you've been automatically enrolled from the waitlist.</p>
        <a href="${data.courseUrl}" style="background:#059669;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;display:inline-block">Start Learning</a>
        <p style="margin-top:40px;font-size:12px;color:#999">
          <a href="${data.unsubscribeUrl}">Unsubscribe</a>
        </p>
      </div>`,
  }),
};
