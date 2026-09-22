import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_ftqygwn";
const TEMPLATE_ID = "template_q6h926d";

// Get this from EmailJS → Account → General → Public Key
const PUBLIC_KEY = "buQXScswgQ3aMG3ih";

export async function sendMatchEmail({
  toEmail,
  itemName,
  matchScore,
  itemType,
}) {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        to_email: toEmail,
        item_name: itemName,
        match_score: matchScore,
        item_type: itemType,
      },
      {
        publicKey: PUBLIC_KEY,
      }
    );

    console.log("Match email sent:", response.status);

    return true;
  } catch (error) {
    console.log("Match email error:", error);
    return false;
  }
}