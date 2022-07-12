const events = require('express').Router();
const db = require('../models');
const {Event} = db;
const {Op} = require('sequelize');

//FIND ALL EVENTS
events.get('/', async (req, res) => {
    try{
        const foundEvents = await Event.findAll({
            order: [['start_time', 'ASC']],
            where: {
                name: {[Op.like]: `%${req.query.name ? req.query.name : ''}%`}
            }
        })
        res.status(200).json(foundEvents)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//FIND SPECIFIC EVENT
events.get('/:id', async (req, res) => {
    try{
        const foundEvent = await Event.findOne({
            where: { event_id: req.params.id}
        })
        res.status(500).json(foundEvent)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//POST A EVENT
events.post('/', async (req, res) => {
    try{
        const newEvent = Event.create(req.body)
        res.status(200).json({
            message:'Successfully inserted a new event',
            data: newEvent
        })
    }
    catch(err){
        res.status(500).json(err)
    }
})

//UPDATE A EVENT
events.put('/:id', async (req, res) => {
    try{
        const updatedEvent = await Event.update(req.body, {
            where: { event_id: req.params.id}
        })
        res.status(200).json({
            messge: `Successfully updated ${updatedEvent} event(s)`
        })
    }
    catch(err){
        res.status(500).json(err)
    }
})

//DELETE EVENT
events.delete('/:id', async(req, res) => {
    try{
        const deletedEvent = await Event.destroy({
            where: {event_id: req.params.id}
        })
        res.status(200).json({
            message: `Sucessfully deleted ${deletedEvent} event(s)`
        })
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = events;