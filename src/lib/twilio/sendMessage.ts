import twilioClient from "./twilio";

export default async function sendMessage() {
  try {
    const { sid } = await twilioClient.messages.create({
      body: "Hello from Twilio!",
      to: process.env.TWILIO_TO_NUMBER!!,
      from: process.env.TWILIO_FROM_NUMBER!!,
    });

    return sid;
  } catch (error) {
    console.error("Error sending message: ", error);
  }
}
