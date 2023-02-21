const { initialize, createCustomSpan  } = require('helios-opentelemetry-sdk');

initialize({
    apiToken: "",       // TODO: Insert API token from Helios.
    serviceName: "order-service", // TODO: Insert service name.
    enable: true,                // Defaults to false if omitted.
    environment: "development",  // Defaults to process.env.NODE_ENV if omitted.
});

const express = require('express');
const app = express();
const axios = require('axios');
const port = 3002;

// A simulated bottleneck in the order service
function simulateBottleneck() {
  const start = Date.now();
  while (Date.now() - start < 700) {
    // Do nothing for 5 seconds to simulate a long-running query
  }
}

app.get('/orders/:orderId', async (req, res) => {
  const orderId = req.params.orderId;

  // Fetch user details from user service
  const user = await axios.get(`http://user:3001/users/${orderId}`);

  // Simulate bottleneck
  createCustomSpan("Order service database query span", {}, simulateBottleneck);


  // Process payment with payment service
  const payment = await axios.post('http://payment:3000/payment', {});

  // In a real implementation, this would fetch order details from a database
  const order = { id: orderId, user: user.data, payment: payment.data };

  res.json(order);
});

app.listen(port, () => {
  console.log(`Order service listening at http://localhost:${port}`);
});
