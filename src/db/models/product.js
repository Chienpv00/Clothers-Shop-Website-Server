const { Schema, model } = require('mongoose');

const sizeSchema = new Schema({
    name: { type: String, required: true },
    soldOut: { type: Boolean, required: true },
});

const ProductSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    thumbnail: { type: String, required: true },
    // subImage: {type: Array},
    category: { type: String, required: true },
    description: { type: String },
    type: { type: String, required: true },
    material: { type: String, required: true },
    form: { type: String, required: true }, 
    color: { type: String, required: true },
    madeBy: { type: String, required: true },
    sizes: [sizeSchema],
    soldOut: { type: Boolean, required: true },
    commentId: { type: Array },
});



module.exports = model('Product', ProductSchema);
