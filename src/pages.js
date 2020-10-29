module.exports = {

    index(req, res,) {
        return res.render('index')
    },

dayCareCenter(req, res) {
    return res.render('day-care-center')
},

dayCareCenters(req, res) {
    return res.render('day-care-centers')
},

createDayCareCenter(req, res) {
    return res.render('create-day-care-center')
    }
}
