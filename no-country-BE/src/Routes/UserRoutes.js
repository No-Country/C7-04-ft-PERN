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
  banUser,
  updateCart,
  updateHistory,
  updateUser,
  updateFavourite,
  logOut,
} = require("../Functions/Users.js");

routes.put("/all", getAllUsers); // --------------------Working
routes.get("/name/:Name", getUserByName); // -----------Working
routes.put("/getUserById/:id", getUserById); //---------Working   //
routes.get("/getUserByID2/:id", getUserByID2);
routes.get("/partner/:ID", getPartnerCreatedEvents); // Working
routes.post("/register", registerUser);
routes.post("/login", loginRequest);
routes.put("/banUnban", banUser);
routes.put("/update/:id", updateUser);
routes.put("/updateCart/:IdUser", updateCart);
routes.put("/updateHistory/:userID", updateHistory);
routes.put("/updateFavourite/:userID", updateFavourite);
routes.get("/logout", logOut);
routes.delete("/delete", deleteUser); // ------------------Working

module.exports = routes;
