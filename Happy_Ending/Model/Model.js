const mongoose=require('mongoose');
const productSchema=new mongoose.Schema(
    {
        name:String,
        mobile:Number,
        email:String,
        product_name:String,
        place:String
    },{timestamps:true}
)
module.exports = mongoose.model('users',productSchema);