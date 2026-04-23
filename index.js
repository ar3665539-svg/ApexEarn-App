const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('ApexEarn Backend is Live! 🚀');
});

// ইউজারের ইনকাম চেক করার জন্য একটি সিম্পল রাস্তা (API)
app.get('/api/check', (req, res) => {
  res.json({ status: "success", message: "Server is connected to your app!" });
});

module.exports = app;
