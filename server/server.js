const express = require("express");
const cors = require("cors"); 
const fetch = require("node-fetch");
const VientoDelSurNet = require("./schema/vientodelsur.model");

const app = express();

app.use(cors());
app.use(express.json()); 



// =============================
//  Nodemailer Configuration
// =============================
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER, // Gmail address
    pass: process.env.EMAIL_PASS    //  16-character App Password
  }
});
// =============================
//  Nodemailer Configuration
// =============================





// =============================
//  Routes
// =============================

// Root
app.get("/", (req, res) => {
  res.send("root joseplorenzini.com project");
});

// Get all posts
app.get("/posts", async (req, res) => {
  try {
    const items = await VientoDelSurNet.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
   return ;
});  // get all posts

// email post "/api/submit-form"  
app.post("/api/submit-form", async (req, res) => {
  const mensaje = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  }
  const { name, email, message } = req.body;

  // Prepare the email content
  const mailOptions = {
    from: process.env.EMAIL_USER,      // email 1
    to: process.env.EMAIL_USER,        // Receive the notifications
    replyTo: email,                    // Allows you to hit "Reply" to message the user directly
    subject: `New Message from ${name} (joselorenzini.com)`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
          ${message}
        </div>
      </div>
    `
  }; // mailOptions() Prepare the email content

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    console.log("Form Data Received:", { name, email, message });
  console.log("Mensaje Object:", mensaje);
  res.status(200).json({ status: "Form data received successfully" });
  } catch (error) {
    console.error("❌ Email Error:", error);
    res.status(500).json({ status: "Error sending email", error: error.message });
  }

  return ;
}); // email post "/api/submit-form" ; 

 app.get("/api/chile-elections", async (req, res) => {
  try {
    const response = await fetch(
      "https://gamma-api.polymarket.com/events?slug=chile-presidential-election"
    );

    if (!response.ok) {
      throw new Error("External API returned " + response.status);
    }

    const data = await response.json();
    res.json(data);

  } catch (error) {
    console.error("Election API ERROR:", error);
    res.status(500).send("Error fetching election data");
  }
   return ;
});


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));