const Product = require('./Product.js');
const ProductTag = require('./ProductTag.js');
const Tag = require('./Tag.js');
const Category = require('./Category.js');

Product.belongsTo(Category, {
  // Define the third table needed to store the foreign keys
  foreignKey: "category_id", 
  onDelete: "CASCADE",
});

Category.hasMany(Product, {
  // Define the third table needed to store the foreign keys
  foreignKey: "category_id", 
});

Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    foreignKey: "product_id"
  },
});

Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    foreignKey: "tag_id"
  },
});

module.exports = { Product, Category, Tag, ProductTag };
