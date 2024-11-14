export default function handler(req, res) {
    const status = req.query.status;
    
    // Redirect to your Flutter app's page based on payment status
    if (status === 'CAPTURED') {
      res.redirect('payready://payment-success');
    } else {
      res.redirect('payready://payment-failed');
    }
  }
  