function saveDayCareCenter(db, dayCareCenter) {
  return db.run(`
    INSERT INTO dayCareCenters (
        lat,
        lng, 
        name, 
        about,
        whatsapp, 
        images, 
        instructions,
        opening_hours, 
        open_on_weekends
    ) VALUES (
        "${dayCareCenter.lat}",
        "${dayCareCenter.lng}",
        "${dayCareCenter.name}",
        "${dayCareCenter.about}",
        "${dayCareCenter.whatsapp}",
        "${dayCareCenter.images}",
        "${dayCareCenter.instructions}",
        "${dayCareCenter.opening_hours}",
        "${dayCareCenter.open_on_weekends}"
    );
`);
}

module.exports = saveDayCareCenter;
