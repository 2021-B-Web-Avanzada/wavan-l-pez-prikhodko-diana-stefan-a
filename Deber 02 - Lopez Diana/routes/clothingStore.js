const express = require('express');
const router = express.Router();
const ClothingStore = require('../model/clothingStore');

//GET ALL STORES
router.get('/', async (req, res) =>{
    try{
        const clothingStores = await ClothingStore.find();
        res.json(clothingStores);
    }catch(err){
        res.json({message: err});
    }
});

//POST NEW STORE
router.post('/', async (req,res)=>{
    const clothingStore = new ClothingStore({
        code: req.body.code,
        name: req.body.name,
        address: req.body.address,
        telephone: req.body.telephone,
        wholesaler: req.body.wholesaler
    });

    try{
        const saveClothingStore = await clothingStore.save();
        res.json(saveClothingStore);
    } catch(err){
        res.json({message: err});
    }
});

//GET SPECIFIC STORE
router.get('/:storeID', async (req, res) =>{
    try{
        const clothingStore = await ClothingStore.findOne({code: req.params.storeID});
        res.json(clothingStore);
    }catch(err){
        res.json({message: err});
    }
});

//DELETE SPECIFIC STORE
router.delete('/:storeID', async (req, res) =>{
    try{
        const clothingStore = await ClothingStore.deleteOne({code: req.params.storeID});
        res.json(clothingStore);
    }catch(err){
        res.json({message: err});
    }
});

//UPDATE SPECIFIC STORE
router.patch('/:storeID', async (req, res) =>{
    try{
        const clothingStore = await ClothingStore.updateOne({code: req.params.storeID},
            {$set: {
                code: req.body.code,
                name: req.body.name,
                address: req.body.address,
                telephone: req.body.telephone,
                wholesaler: req.body.wolesaler
            }});
        res.json(clothingStore);
    }catch(err){
        res.json({message: err});
    }
});


module.exports = router;