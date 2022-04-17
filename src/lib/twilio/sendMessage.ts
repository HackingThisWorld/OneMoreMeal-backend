import twilioClient from "./twilio";

export default async function sendMessage(message: string, number: string) {
  try {
    const { sid } = await twilioClient.messages.create({
      body: message,
      to: `+91${number}`,
      from: process.env.TWILIO_FROM_NUMBER!!,
    });

    return sid;
  } catch (error) {
    console.error("Error sending message: ", error);
  }
}
