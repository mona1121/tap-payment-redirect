export default function handler(req, res) {
  if (req.method === 'GET') {
    const { status, message } = req.query;
    // Handle the status (success or failure) here
    
    if (status === 'success') {
      // Payment was successful
      res.status(200).send('Payment Success! Thank you for your purchase.');
    } else {
      // Payment failed
      res.status(400).send('Payment Failed. Please try again.');
    }
  } else {
    res.status(404).send('Not Found');
  }
}
