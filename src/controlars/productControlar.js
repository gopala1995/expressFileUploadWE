const express = require("express")
const path = require("path")



const router = express.Router()

const Product = require("../models/product.model")

router.get("",async(req,res)=>{
  console.log(path.join(__dirname, '../uploadsFile'));
    const products = await Product.find().lean().exec()
    return res.send(products)
})

router.post("",async(req,res)=>{
    const product = await Product.create(req.body)
    return res.send(product)
})
module.exports = router