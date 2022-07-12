const bands = require('express').Router();
const db = require('../models');
const {Band} = db

//FIND ALL BANDS
bands.get('/', async (req, res) => {
    try{
        const foundBands = await Band.findAll()
        res.status(200).json(foundBands)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//FIND SPECIFIC BAND
bands.get('/:id', async (req, res) => {
    try{
        const foundBand = await Band.findOne({
            where: { band_id: req.params.id}
        })
        res.status(500).json(foundBand)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//POST A BAND
bands.post('/', async (req, res) => {
    try{
        const newBand = Band.create(req.body)
        res.status(200).json({
            message:'Successfully inserted a new band',
            data: newBand
        })
    }
    catch(err){
        res.status(500).json(err)
    }
})

//UPDATE A BAND
bands.put('/:id', async (req, res) => {
    try{
        const updatedBand = await Band.update(req.body, {
            where: { band_id: req.params.id}
        })
        res.status(200).json({
            messge: `Successfully updated ${updatedBand} band(s)`
        })
    }
    catch(err){
        res.status(500).json(err)
    }
})

//DELETE BAND
bands.delete('/:id', async(req, res) => {
    try{
        const deletedBand = await Band.destroy({
            where: {band_id: req.params.id}
        })
        res.status(200).json({
            message: `Sucessfully deleted ${deletedBand} band(s)`
        })
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = bands;