const { onRequest } = require("firebase-functions/v2/https");
const nodemailer = require("nodemailer");

// ===============================
// GMAIL CONFIGURATION
// ===============================

// We will add the Gmail credentials securely later.
// DO NOT put your normal Gmail password here.

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// ===============================
// SEND MATCH EMAIL
// ===============================

exports.sendMatchEmail = onRequest(
  async (req, res) => {
    try {
      const {
        email,
        itemName,
        matchScore,
        itemType,
      } = req.body;

      // Validate required data
      if (!email || !itemName) {
        return res.status(400).json({
          success: false,
          message:
            "Email and item name are required.",
        });
      }

      const subject =
        "FindBack - Possible Match Found";

      const message =
        itemType === "LOST"
          ? `
Your lost item may have a possible match on FindBack.

Item:
${itemName}

Match Score:
${matchScore}%

Please open FindBack to view the possible match and verify the item.

FindBack
Kongu Engineering College Lost & Found
`
          : `
A possible owner may have been found for an item you reported on FindBack.

Item:
${itemName}

Match Score:
${matchScore}%

Please open FindBack to view the possible match and continue the verification process.

FindBack
Kongu Engineering College Lost & Found
`;

      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: email,
        subject: subject,
        text: message,
      });

      return res.status(200).json({
        success: true,
        message: "Email sent successfully.",
      });
    } catch (error) {
      console.error(
        "Email sending error:",
        error
      );

      return res.status(500).json({
        success: false,
        message: "Failed to send email.",
      });
    }
  }
);