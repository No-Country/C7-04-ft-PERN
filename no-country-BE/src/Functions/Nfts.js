const { Op } = require("sequelize");
const { Nfts, Users, sequelize } = require("../db.js");

const getAllNfts = async (req, res, next) => {
  res.send(
    await Nfts.findAll({
      include: {
        model: Users,
      },
    })
  );
};

const deleteNft = async (req, res) => {
  console.log(req.body.data.ID);
  try {
    const trash = await Nfts.findOne({
      where: {
        ID: req.body.data.ID,
      },
    });
    console.log(trash);
    const trash2 = trash;
    await trash.update({ isErased: req.body.data.veredict });
    res.send(`Nft ${trash2.Name} deleted successfully`);
  } catch (error) {
    res.status(404).send(error.stack);
  }
};

const createNft = async (req, res) => {
  try {
    console.log(req.body);
    const created = await Nfts.create(req.body.event);
    const userToAdd = await Users.findOne({
      where: { Email: req.body.Email },
    });
    if (!userToAdd) {
      return res.status(400).send("This partner doesnt exist");
    }
    created.addUsers(userToAdd);
    res.send(created);
  } catch (error) {
    res.status(400).send(error.stack);
  }
};

const modifyNft = async (req, res, next) => {
  return "Nft Modified";
};
const getNftByName = async (req, res) => {
  const { Name } = req.params;

  try {
    const found = await Nfts.findAll({
      where: {
        Name: {
          [Op.iLike]: "%" + Name + "%",
        },
        /* el Op.iLike sirve para buscar algo parecido a lo que yo le pida. El i sirve para indicar que sea case Insensitive. 
				El % sirve para decir que puede haber algo antes y/o después del Name (por eso lo pongo antes y después) */
      },
    });
    res.send(found);
  } catch (error) {
    res.status(400).send(error.stack);
  }
};

const getNftById = async (req, res) => {
  const ID = req.params;

  try {
    const found = await Nfts.findOne({
      where: ID,
      include: {
        model: Users,
      },
    });
    res.send(found);
  } catch (error) {
    res.status(400).send(error.stack);
  }
};

const updateQuantity = async (req, res) => {
  const { ID, newStock } = req.body;
  try {
    let NftRef = await Nfts.findOne({ where: { ID: ID } });

    await Nfts.update(
      {
        Quantity: NftRef.Quantity + newStock,
        InitialQtty: NftRef.InitialQtty + newStock,
      },
      {
        where: {
          ID: ID,
        },
      }
    );
    return res.send("Stock updated");
  } catch (error) {
    console.log(error.stack);
    return res.status(400).send("Something went wrong");
  }
};

const updateNft = async (req, res) => {
  let { id } = req.params;
  let { data } = req.body;
  console.log(req.body, id);
  try {
    if (req.body.data.Name) {
      let found = await Nfts.findOne({
        where: data,
      });

      if (found) {
        return res.status(400).send("This Nft name already Exist");
      }
    }

    if (req.body.data.Quantity) {
      let NftRef = await Nfts.findOne({ where: { ID: id } });
      console.log(eventRef.Quantity);
      let totalQuantity = await Nfts.update(
        {
          Quantity: NftRef.Quantity - data.Quantity,
          InitialQtty: NftRef.InitialQtty - data.Quantity,
        },
        {
          where: {
            ID: id,
          },
        }
      );
      console.log(totalQuantity);
      return res.send("Nft Updated");
    }

    let updated = await Nfts.update(data, {
      where: {
        ID: id,
      },
    });
    console.log(updated);
    return res.send("Event Updated");
  } catch (error) {
    return res.status(400).send("Error");
  }
};

module.exports = {
  getAllNfts,
  deleteNft,
  createNft,
  modifyNft,
  getNftByName,
  getNftById,
  updateQuantity,
  updateNft,
};
