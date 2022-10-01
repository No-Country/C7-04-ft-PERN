/* aca van a entrar todas lar rutas que empiecen con: /event.    Entonces no hace falta repetirlo en cada ruta */

const express = require("express");
const routes = express.Router();
const F = require("../Functions/Nfts");

routes.get("/allNfts", F.getAllEvents);
routes.get("/name/:Name", F.getNftByName);
routes.get("/id/:ID", F.getNftById);

routes.post("/", F.createNft);

routes.put("/", F.modifyNft);
routes.put("/updateQuantity", F.updateQuantity);
routes.put("/update/:id", F.updateNft);

routes.put("/delete", F.deleteNft);

routes.get("/", (req, res) => {
  res.send("Bienvenidos a NcStore NFT! ");
});

module.exports = routes;
