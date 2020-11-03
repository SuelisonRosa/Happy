const Database = require('./database/db');
const saveDayCareCenter = require('./database/saveDayCareCenter');
 
module.exports = {

    index(req, res,) {
        return res.render('index')
    },

    async dayCareCenter(req, res) {
        
        const id = req.query.id

        try {
            const db = await Database;
            const results = await db.all(`SELECT * FROM dayCareCenters WHERE id = "${id}"`)
            const dayCareCenter = results[0]

            dayCareCenter.images = dayCareCenter.images.split(",")
            dayCareCenter.firstImage = dayCareCenter.images[0]

            if(dayCareCenter.open_on_weekends == "0") {
                dayCareCenter.open_on_weekends = false
            } else {
                dayCareCenter.open_on_weekends = true
            }


            return res.render('day-care-center', {dayCareCenter})
        } catch (error) {
            console.log(error)

            return res.send('Erro no banco de dados!')
        }
    },

    async dayCareCenters(req, res) {
        try {
            const db = await Database;
            const dayCareCenters = await db.all("SELECT * FROM dayCareCenters")
            return res.render('day-care-centers', {dayCareCenters})

        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados!')
        }
    
    },

    createDayCareCenter(req, res) {
        return res.render('create-day-care-center')
        },
        
    saveDayCareCenter(req, res) {
        console.log(req.body)
    }

}