 const {Category}  = require("../models/index");

exports.getAllCategories = async (req, res, next) => {
    const categories = await Category.findAll();
    res.json(categories);
};
exports.getCategoryById = async (req, res, next) => {};
exports.createCategory = async (req, res, next) => {};
exports.deleteCategoryById = async (req, res, next) => {};
exports.updateCategoryById = async (req, res, next) => {};