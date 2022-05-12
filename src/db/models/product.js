const{ Schema, model } =require( 'mongoose');

const ProductSchema = new Schema(
  {
    id: { type: Number, required: true },
    title: {type: String, required: true},
    oldPrice: {type: Number, required: true},
    newPrice: {type: Number, required: true},
    image: {type: String, required: true},
    category: {type: String, required: true},
    content: {type: String},
    type: {type: String, required: true},
    comment: {type: Array, required: true},
  },
);

module.exports =  model('Product', ProductSchema);