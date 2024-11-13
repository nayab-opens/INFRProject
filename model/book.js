// MVC --> Model , View , Controller (Routers)
let mongoose = require('mongoose')
// create a model class
let bookModel = mongoose.Schema({
    product:String,
    category:String,
    price:Number,
    color:String,
    metal:String,
    size:Number

},
{
    collection:"Bio_books"
}
)
module.exports = mongoose.model('Book',bookModel)