
const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categoriesController");
const {isAdmin}= require("../middlewares/adminMiddleware");

router.get("" ,isAdmin,categoriesController.getAllCategories);
router.get("/:id", categoriesController.getCategoryById);
router.post("", categoriesController.createCategory);
router.put("/:id", categoriesController.updateCategoryById);
router.delete("/:id", categoriesController.deleteCategoryById);

module.exports = router;