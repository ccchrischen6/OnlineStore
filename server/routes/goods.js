var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');

//link to mongodb
mongoose.connect('mongodb://35.220.175.244:27017/demo');

mongoose.connection.on("conected", function () {
  console.log("MongoDB connected success.")
});

mongoose.connection.on("error", function () {
  console.log("MongoDB connected fail")
});

mongoose.connection.on("disconnected", function () {
  console.log("MongoDB disconnected")
});


router.get("/", function (req, res, next) {
  Goods.find({}, function (err, doc) {
    if(err){
      res.json({
        status:'1',
        msg:err.message
      })
    }else{
      res.json({
        status:'0',
        msg:'',
        result:{
          count:doc.length,
          list:doc
        }
      })
    }
  })
});

module.exports = router;
