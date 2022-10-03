class PaymentController {
  constructor(subscriptionService) {
    this.subscriptionService = subscriptionService;
  }

  async getPaymentLink(req, res) {
    try {
      await this.subscriptionService.createPayment();
      return res.json(payment);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Failed to create a payment" });
    }
  }

  async getsubscriptionLink(req, res) {
    try {
      const subscription = this.subscriptionService.createSubscription();
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Failed to create a subscription" });
    }
  }
}

module.exports = PaymentController;
