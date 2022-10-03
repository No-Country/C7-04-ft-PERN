const express = require("express");
const routes = express.Router();

const UserRoutes = require("./UserRoutes");
const NftRoutes = require("./NftRoutes");

routes.use(express.json());
//routes.use(cors());

routes.use("/user", UserRoutes);
routes.use("/nft", NftRoutes);

/* Aca pueden ir otras rutas que sólo se usen 1 vez. Por ejemplo: */

module.exports = routes;
