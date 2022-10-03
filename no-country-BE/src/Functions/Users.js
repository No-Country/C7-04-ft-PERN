require("dotenv").config();
const { Op } = require("sequelize");
const { Nfts, Users, Supports, sequelize } = require("../db.js");
const { auth } = require("../firebase");
const {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} = require("firebase/auth");

const getAllUsers = async (req, res, next) => {
  res.send(
    await Users.findAll({
      include: {
        model: Supports,
      },
    })
  );
};

const getUserByName = async (req, res) => {
  const { Name } = req.params;
  try {
    const usersBox = await Users.findAll({
      where: {
        Name: {
          [Op.iLike]: "%" + Name + "%",
        },
      },
      include: {
        model: Supports,
      },

      attributes: {
        exclude: ["Password", "Token"],
      },
    });
    res.send(usersBox);
  } catch (error) {
    res.status(400).send(error.stack);
  }
};

const getUserById = async (req, res) => {
  let ID = req.params.id;
  console.log(ID);
  try {
    const userBox = await Users.findOne({
      where: {
        ID,
      },
      include: [{ model: Nfts }],
    });
    res.send(userBox);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.stack);
  }
};

const getUserByID2 = async (req, res) => {
  const userID = req.params.id;
  try {
    let user = await Users.findByPk(userID);
    res.send(user);
  } catch (error) {
    res.status(400).send(error.stack);
  }
};

const registerUser = async (req, res) => {
  const { Username, Email } = req.body;
  let reGex = /\S+@\S+\.\S+/;
  let validateEmail = reGex.test(Email);

  if (!Username) {
    return res.status(400).send("Please Provide an Username!!");
  } else if (!Email || !validateEmail) {
    return res.status(400).send("Please Provide a VALID Email");
  } else {
    try {
      let foundOrCreate = await Users.findAll({
        where: {
          Username,
        },
      });
      console.log(foundOrCreate);
      if (!foundOrCreate[0]) {
        createUserWithEmailAndPassword(auth, Email);
        Users.create(req.body);
        return res.send(`Created Succesfully`);
      } else {
        return res.status(400).send("User already exist");
      }
    } catch (error) {
      res.status(400).send(error);
    }
  }
};

const loginRequest = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    signInWithEmailAndPassword(auth, email, password);
    const user_ = await Users.findAll({
      where: {
        Username: username,
      },
    });
    if (user_[0].isBan) {
      return res.status(400).send("This account has been banned");
    }
    if (user_[0]) {
      return res.send(user_[0]);
    } else {
      return res.status(400).send("Username or Password Invalid");
    }
  } catch (error) {
    return res.status(400).send("Username or Password invalid");
  }
};

const deleteUser = async (req, res) => {
  try {
    console.log(req.body.email);
    const targetUser = await Users.findOne({
      where: {
        Email: req.body.email,
      },
    });
    console.log(targetUser);
    await targetUser.destroy();
    console.log(targetUser);
    return res.send(`User Deleted`);
  } catch (error) {
    res.status(404).send(error.stack);
  }
};

const getPartnerCreatedEvents = async (req, res) => {
  const { ID } = req.params;
  try {
    const Partner = await Users.findByPk(ID);
    const allPartnerEvents = Partner.CreatedEvents;
    res.send(allPartnerEvents);
  } catch (error) {
    res.status(400).send(error.stack);
  }
};

const updateCart = async (req, res) => {
  const { IdUser /*, idEvento*/ } = req.params;

  try {
    let user = await Users.findByPk(IdUser);
    user.Cart = req.body;
    user.save();
    res.send("Event added to User Cart");
  } catch (error) {
    res.status(400).send(error.stack);
  }
};

const updateHistory = async (req, res) => {
  const { userID } = req.params;
  const nfts = req.body;

  try {
    let user = await Users.findByPk(userID);
    let oldhistory = user.shoppingHistory;

    let newHistory = oldhistory.slice();
    nfts.forEach((ev) => {
      newHistory.push(ev);
    });

    user.shoppingHistory = newHistory;
    user.save();
    res.send("Shopping history updated");
  } catch (error) {
    res.status(400).send(error.stack);
  }
};

const banUser = async (req, res) => {
  console.log(req.body.data);
  try {
    let banned = await Users.update(
      {
        isBan: req.body.data.ban,
      },
      {
        where: {
          Email: req.body.data.email,
        },
      }
    );
    console.log(banned);
    return res.send("User Banned");
  } catch (error) {
    return res.status(400).send("Error");
  }
};

const updateUser = async (req, res) => {
  let { id } = req.params;
  let { data } = req.body;

  try {
    if (req.body.data.Email || req.body.data.Username) {
      let found = await Users.findOne({
        where: data,
      });

      if (found) {
        return res.status(400).send("Username or Email already Exist");
      }
    } else {
      let updated = await Users.update(req.body.data, {
        where: {
          ID: id,
        },
      });

      return res.send("User Updated");
    }
  } catch (error) {
    return res.status(400).send("Error");
  }
};

const updateFavourite = async (req, res) => {
  console.log("updateFavourite");
  const { userID } = req.params;
  try {
    let user = await Users.findByPk(userID);
    user.Favourites = req.body;
    user.save();
    res.send("Nft added to User Cart");
  } catch (error) {
    res.status(400).send(error.stack);
  }
};

const logOut = (req, res) => {
  signOut(auth);
  res.send("User has sign out");
};

module.exports = {
  getAllUsers,
  getUserByName,
  getUserById,
  getUserByID2,
  deleteUser,
  getPartnerCreatedEvents,
  loginRequest,
  registerUser,
  updateCart,
  updateHistory,
  logOut,
  banUser,
  updateUser,
  updateFavourite,
};
