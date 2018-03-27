const express = require("express");
const mongoose = require("mongoose");
const app = express();
const DB_URL = "mongodb://127.0.0.1:27017/imooc";

mongoose.connect(DB_URL);
mongoose.connection.on("connected", () => {
    console.log("mongoose connected");
})
const User = mongoose.model('user', new mongoose.Schema({
    username: { type: String, require: true },
    age: { type: Number, require: true }
}));


//新增数据
// User.create({
//     username: "bbb",
//     age: 19
// }, (err, doc) => {
//     if (!err) {
//         console.log(doc);
//     } else {
//         console.log(err)
//     }
// })




app.listen(9093, () => {
    console.log("listen 9093");
})
app.get('/', (req, res) => {
    // User.updateMany({ username: "bbb" }, { "$set": { age: 100 } }, (err, doc) => {
    //     res.json(doc);
    // })
    // User.remove({ name: "aaa" }, (err, doc) => {
    //     res.json(doc);
    // })
    User.find({},(err,doc)=>{
        res.json(doc);
    })
    // res.json({ name: "危险流浪者", place: "香港" });
})
