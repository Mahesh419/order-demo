const { initialize } = require('helios-opentelemetry-sdk');

initialize({
    apiToken: "",       // TODO: Insert API token from Helios.
    serviceName: "user-service", // TODO: Insert service name.
    enable: true,                // Defaults to false if omitted.
    environment: "development",  // Defaults to process.env.NODE_ENV if omitted.
});

const express = require('express');
const app = express();
const port = 3001;

app.get('/users/:userId', (req, res) => {
  // In a real implementation, this would fetch user details from a database
  const user = { id: req.params.userId, name: 'John Doe', email: 'john.doe@example.com' };
  res.json(user);
});

app.listen(port, () => {
  console.log(`User service listening at http://localhost:${port}`);
});
