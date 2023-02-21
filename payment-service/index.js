const { initialize } = require('helios-opentelemetry-sdk');

initialize({
    apiToken: "",       // TODO: Insert API token from Helios.
    serviceName: "payment-service", // TODO: Insert service name.
    enable: true,                // Defaults to false if omitted.
    environment: "development",  // Defaults to process.env.NODE_ENV if omitted.
});


const express = require('express');
const app = express();
const port = 3000;

app.post('/payment', (req, res) => {
  // In a real implementation, this would process the payment and return a payment ID
  const paymentId = 'abc123';
  res.json({ paymentId });
});

app.listen(port, () => {
  console.log(`Payment service listening at http://localhost:${port}`);
});
