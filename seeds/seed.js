const DB = require('../models/index')

DB.sequelize.sync({force: true}).then(async function() {


    await DB.Band.create({
        name: 'test_band_1',
        genre: 'super cool',
        available_start_time: '2022-01-17T04:33:12.000Z',
        end_time: '2022-01-17T05:33:12.000Z'
    })

    await DB.Event.create({
        name: 'Lollapalooza',
        date: '2022-01-17',
        start_time: '2022-01-17T04:33:12.000Z',
        end_time: '2022-01-17T05:33:12.000Z'

    })

    await DB.MeetGreet.create({
        event_id: 1,
        band_id: 1,
        meet_start_time: '2022-01-17T04:33:12.000Z',
        meet_end_time: '2022-01-17T05:33:12.000Z'
    })
    
    await DB.Stage.create({
        stage_name: 'Main Stage'
    })

    await DB.StageEvent.create({
        stage_id: 1,
        event_id: 1
    })
    
    await DB.SetTime.create({
        event_id: 1,
        stage_id: 1,
        band_id: 1,
        start_time: '2022-01-17T04:33:12.000Z',
        end_time: '2022-01-17T05:33:12.000Z'
    })

})