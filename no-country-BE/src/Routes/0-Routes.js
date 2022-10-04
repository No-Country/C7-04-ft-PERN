const express = require("express");
const PaymentController = require("../PaymentControllers/PaymentController");
const PaymentService = require("../PaymentControllers/PaymentServices");
const routes = express.Router();
const paymentInstance = new PaymentController(new PaymentService());
const UserRoutes = require("./UserRoutes");
const NftRoutes = require("./NftRoutes");

routes.use(express.json());
//routes.use(cors());

routes.use("/user", UserRoutes);
routes.use("/nft", NftRoutes);

/* Aca pueden ir otras rutas que sólo se usen 1 vez. Por ejemplo: */
routes.get("/payments", (req, res) => {
  try {
    paymentInstance.getPaymentLink(req, res);
  } catch (error) {
    console.log("hola");
  }
});
module.exports = routes;
