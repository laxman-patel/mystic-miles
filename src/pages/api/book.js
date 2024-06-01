import twilio from "twilio";

const accountSid ='ACd71ca9077160f2feb2ed7ba6d5249ec9';
const authToken = 'd2051424b3ae41516fd5e1218740c36e';
const client = new twilio(accountSid, authToken);

async function sendWhatsAppMessage(to, message) {
  try {
    const response = await client.messages.create({
      body: message,
      from: 'whatsapp:+919509564845', // Your Twilio Sandbox Number
      to: `whatsapp:+91${to}`,
    });
    console.log(`Message sent to ${to}: ${response.sid}`);
    return `Message sent to ${to}: ${response.sid}`
  } catch (error) {
    console.error(`Failed to send message: ${error}`);
    return error;
  }
}

const handler = async(req, res) => {
    const data = {
        carModel: req.body.carModel,
        contact:req.body.contact,
        name: req.body.name,
    }

    const msg = `Mystic Miles confirms your reservation, ${data.name}.  Vehicle: ${data.carModel}.  For any inquiries, please reply to this message or call +91 9509564845.  We look forward to a smooth ride!`;

   const response = await sendWhatsAppMessage(data.contact, msg);

    res.status(200).json({"message": response});
}

export default handler;