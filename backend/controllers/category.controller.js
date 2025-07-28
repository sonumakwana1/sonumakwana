import "../models/connection.js";
import url from 'url';
import { v2 as cloudinary } from 'cloudinary';
import CategorySchemaModel from "../models/category.model.js";
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env

// Cloudinary configuration using env variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// ✅ SAVE
export const save = async (req, res) => {
  try {
    const category = await CategorySchemaModel.find();
    const l = category.length;
    const _id = l === 0 ? 1 : category[l - 1]._id + 1;

    const caticon = req.files.caticon;

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(caticon.tempFilePath, {
      folder: "project_images",
    });

    const cDetails = {
      ...req.body,
      _id: _id,
      caticonnm: result.secure_url,
    };

    await CategorySchemaModel.create(cDetails);
    res.status(201).json({ status: true });

  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, error: error.message });
  }
};

// ✅ FETCH
export const fetch = async (req, res) => {
  try {
    let condition_obj = url.parse(req.url, true).query.condition_obj;
    condition_obj = condition_obj ? JSON.parse(condition_obj) : {};

    const pList = await CategorySchemaModel.find(condition_obj);
    if (pList.length > 0)
      res.status(200).json(pList);
    else
      res.status(404).json({ status: "Resource not found" });

  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};

// ✅ DELETE
export const deleteCategory = async (req, res) => {
  try {
    if (!req.body || !req.body.condition_obj)
      return res.status(400).json({ status: "Please enter valid condition" });

    const condition_obj = JSON.parse(req.body.condition_obj);
    const cDetails = await CategorySchemaModel.findOne(condition_obj);

    if (!cDetails)
      return res.status(404).json({ status: "Requested resource not available" });

    await CategorySchemaModel.deleteOne(condition_obj);
    res.status(200).json({ status: "OK" });

  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};

// ✅ UPDATE
export const update = async (req, res) => {
  try {
    if (!req.body || !req.body.condition_obj || !req.body.content_obj)
      return res.status(400).json({ status: "Please enter valid condition" });

    const condition = JSON.parse(req.body.condition_obj);
    const content = JSON.parse(req.body.content_obj);

    const pDetails = await CategorySchemaModel.findOne(condition);

    if (!pDetails)
      return res.status(404).json({ status: "Requested resource not available" });

    await CategorySchemaModel.updateOne(condition, { $set: content });
    res.status(200).json({ msg: "OK" });

  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};
