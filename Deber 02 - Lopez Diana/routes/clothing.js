const express = require('express');
const router = express.Router();
const Clothing = require('../model/clothing');

//GET ALL CLOTHING IN A SPECIFIC STORE
router.get('/:storeID/clothing', async (req, res)=>{
    try{
        const clothings = await Clothing.find({storeCode: req.params.storeID});
        res.json(clothings);
    }catch(err){
        res.json({message: err});
    }
});

//POST NEW CLOTHING
router.post('/:storeID/clothing',async (req,res) =>{
    const clothing = new Clothing({
        code: req.body.code,
        name: req.body.name,
        price: req.body.price,
        size: req.body.size,
        stock: req.body.stock,
        topSelling: req.body.topSelling,
        storeCode: req.params.storeID
    });
        
    try{
        const saveClothing = await clothing.save();
        res.json(saveClothing);
    } catch (err) {
        res.json({message : err});
    }
});

//GET SPECIFIC CLOTHING
router.get('/:storeID/clothing/:clothingID', async (req, res) =>{
    try{
        const clothing = await Clothing.findOne({code: req.params.clothingID, storeCode: req.params.storeID});
        res.json(clothing);
    }catch(err){
        res.json({message: err});
    }
});

//DELETE SPECIFIC CLOTHING 
router.delete('/:storeID/clothing/:clothingID', async (req, res) =>{
    try{
        const clothing = await Clothing.deleteOne({code: req.params.clothingID, storeCode: req.params.storeID});
        res.json(clothing);
    } catch (err) {
        res.json({message: err});
    }
});

//UPDATE SPECIFIC CLOTHING
router.patch('/:storeID/clothing/:clothingID', async (req,res) => {
    try{
        const clothing = await Clothing.updateOne({code: req.params.clothingID, storeID: req.params.storeID},
        { $set: {
            code: req.params.clothingID,
            name: req.body.name,
            price: req.body.price,
            size: req.body.size,
            stock: req.body.stock,
            topSelling: req.body.topSelling   
        }});
        res.json(clothing);
    } catch (err){
        res.json({message: err});
    }
});

module.exports = router;