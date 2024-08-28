const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
      type:Number ,
      required:true,
    },
    work:{
        type:String,
        enum:['chief','spicy','sour'],
        required:true,
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:[String],
        default:false
    },
    num_sales:{
        type:Number,
        default:0,
    }
})

const menuItem = mongoose.model('menuItem',menuItemSchema);
module.exports=menuItem;