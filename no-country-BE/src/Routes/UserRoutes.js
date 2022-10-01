/* aca van a entrar todas lar rutas que empiecen con: /user.    Entonces no hace falta repetirlo en cada ruta */
const express = require("express");
const routes = express.Router();

const {
  getAllUsers,
  getUserByName,
  getUserById,
  getUserByID2,
  deleteUser,
  getPartnerCreatedEvents,
  loginRequest,
  registerUser,
  validateAdmin,
  validatePartner,
  banUser,
  updateCart,
  updateHistory,
  updateUser,
  updateFavourite,
} = require("../Functions/Users.js");

routes.put("/all", validateAdmin, getAllUsers); // --------------------Working
routes.get("/name/:Name", getUserByName); // -----------Working
routes.put("/getUserById/:id", getUserById); //---------Working   // al final queda con PUT ? si sale algun error, cambiar aqui.
routes.get("/getUserByID2/:id", getUserByID2);
routes.get("/partner/:ID", getPartnerCreatedEvents); // Working
routes.post("/partner/validate", validatePartner, (req, res) => {
  res.send("Verified");
});

routes.post("/register", registerUser);
routes.post("/login", loginRequest);
routes.put("/banUnban", validateAdmin, banUser);
routes.put("/update/:id", updateUser);

routes.put("/updateCart/:IdUser", updateCart);
routes.put("/updateHistory/:userID", updateHistory);
routes.put("/updateFavourite/:userID", updateFavourite);

routes.delete("/delete", validateAdmin, deleteUser); // ------------------Working

module.exports = routes;
