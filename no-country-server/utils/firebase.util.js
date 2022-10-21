const { initializeApp } = require("firebase/app");
const dotenv = require("dotenv");
const {
  getStorage,
  uploadBytes,
  getDownloadURL,
  ref,
} = require("firebase/storage");
const { NftImg } = require("../models/nftImg.model");

dotenv.config({ path: "./config.env" });

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  appId: process.env.FIREBASE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

const uploadNftImgs = async (imgs, nftId) => {
  const imgsPromises = imgs.map(async (img) => {
    const [originalName, ext] = img.originalname.split(".");

    const filename = `nfts/${nftId}/${originalName}-${Date.now()}.${ext}`;
    const imgRef = ref(storage, filename);

    const streamedImg = await uploadBytes(imgRef, img.buffer);

    await NftImg.create({
      nftId,
      imgUrl: streamedImg.metadata.fullPath,
    });
  });

  await Promise.all(imgsPromises);
};

const getNftsImgsUrls = async (nfts) => {
  const nftsWithImgsPromises = nfts.map(async (nft) => {
    const nftImgsPromises = nft.nftImgs.map(async (nftImg) => {
      const imgRef = ref(storage, nftImg.imgUrl);
      const imgUrl = await getDownloadURL(imgRef);

      nftImg.imgUrl = imgUrl;
      return nftImg;
    });

    const nftImgs = await Promise.all(nftImgsPromises);

    nft.nftImgs = nftImgs;
    return nft;
  });

  return await Promise.all(nftsWithImgsPromises);
};

module.exports = { storage, uploadNftImgs, getNftsImgsUrls };
