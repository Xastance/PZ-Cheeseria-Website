exports.getAll = (db, callback) => {
    const sql = 'SELECT * FROM cheese WHERE isActive = 1';
    db.all(sql, [], callback);
};

exports.getById = (db, id, callback) => {
    const sql = 'SELECT * FROM cheese WHERE id = ? AND isActive = 1';
    db.get(sql, [id], callback);
};

exports.create = (db, cheese, callback) => {
    const { made_from, country_of_origin, family, type, texture, color, flavour, aroma, is_vegetarian, price_per_kilo, description, image_url } = cheese;
    const sql = `
    INSERT INTO cheese (made_from, country_of_origin, family, type, texture, color, flavour, aroma, is_vegetarian, price_per_kilo, description, image_url)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
    db.run(sql, [made_from, country_of_origin, family, type, texture, color, flavour, aroma, is_vegetarian, price_per_kilo, description, image_url], callback);
};

exports.update = (db, id, cheese, callback) => {
    const { made_from, country_of_origin, family, type, texture, color, flavour, aroma, is_vegetarian, price_per_kilo, description, image_url } = cheese;
    const sql = `
    UPDATE cheese SET made_from = ?, country_of_origin = ?, family = ?, type = ?, texture = ?, color = ?, flavour = ?, aroma = ?, is_vegetarian = ?, price_per_kilo = ?, description = ?, image_url = ?
    WHERE id = ? AND isActive = 1
  `;
    db.run(sql, [made_from, country_of_origin, family, type, texture, color, flavour, aroma, is_vegetarian, price_per_kilo, description, image_url, id], callback);
};

exports.delete = (db, id, callback) => {
    const sql = 'UPDATE cheese SET isActive = 0 WHERE id = ?';
    db.run(sql, [id], callback);
};
