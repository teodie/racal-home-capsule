export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { fullName, email, date, time, phone } = body

    const message = `
  🗓️ New Appointment

  👨🏻‍💼 Name: ${fullName}
  📞 Phone: ${phone}
  📧 Email: ${email}
  🗓️ Date: ${date}
  🕒 Time: ${time}
  `

    await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message
      })
    })


    return Response.json({ success: true})
  } catch (error) {
    return Response.json(
      {success: false},
      {status: 500}
    )
  }
}