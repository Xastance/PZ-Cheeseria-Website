const seedData = (db) => {
    const cheeses = [
        {
            made_from: 'Cow',
            country_of_origin: 'England',
            family: 'Hard',
            type: 'Cheddar',
            texture: 'Firm',
            color: 'Yellow',
            flavour: 'Sharp and tangy',
            aroma: 'Mild, slightly earthy',
            is_vegetarian: 0,
            price_per_kilo: 12.5,
            description: 'Cheddar is a versatile, sharp, and tangy cheese. It can be enjoyed melted in sandwiches or grated over pasta, making it a favourite in many households.',
            image_url: 'Cheddar.jpg'
        },
        {
            made_from: 'Cow',
            country_of_origin: 'France',
            family: 'Soft',
            type: 'Brie',
            texture: 'Creamy',
            color: 'White',
            flavour: 'Mild and buttery',
            aroma: 'Earthy with mushroom notes',
            is_vegetarian: 1,
            price_per_kilo: 18.0,
            description: 'Brie is a soft cheese with a buttery texture and mild flavour. It\'s best served with fresh bread, fruits, and nuts, and pairs beautifully with light wines.',
            image_url: 'Brie.jpg'
        },
        {
            made_from: 'Cow',
            country_of_origin: 'Netherlands',
            family: 'Semi-Hard',
            type: 'Gouda',
            texture: 'Smooth',
            color: 'Yellow',
            flavour: 'Sweet and nutty',
            aroma: 'Buttery and mild',
            is_vegetarian: 0,
            price_per_kilo: 15.0,
            description: 'Gouda is known for its rich, buttery, and slightly sweet flavour. It can be enjoyed as part of a cheese platter or melted into dishes for extra creaminess.',
            image_url: 'Gouda.jpg'
        },
        {
            made_from: 'Cow',
            country_of_origin: 'France',
            family: 'Blue',
            type: 'Blue Cheese',
            texture: 'Crumbly',
            color: 'Blue',
            flavour: 'Strong, pungent',
            aroma: 'Sharp, earthy',
            is_vegetarian: 0,
            price_per_kilo: 20.0,
            description: 'Blue cheese has a distinctive appearance and flavour. With its blue veins and sharp taste, it works well crumbled over salads or paired with sweet fruits.',
            image_url: 'Blue.jpg'
        },
        {
            made_from: 'Sheep',
            country_of_origin: 'Greece',
            family: 'Fresh',
            type: 'Feta',
            texture: 'Crumbly',
            color: 'White',
            flavour: 'Salty and tangy',
            aroma: 'Fresh, slightly sharp',
            is_vegetarian: 1,
            price_per_kilo: 10.0,
            description: 'Feta is a brined cheese known for its crumbly texture and tangy flavour. It\'s commonly used in Mediterranean dishes such as salads and pastries.',
            image_url: 'Feta.jpg'
        },
        {
            made_from: 'Cow',
            country_of_origin: 'Italy',
            family: 'Hard',
            type: 'Parmesan',
            texture: 'Grainy',
            color: 'Yellow',
            flavour: 'Sharp, umami',
            aroma: 'Nutty, rich',
            is_vegetarian: 0,
            price_per_kilo: 22.0,
            description: 'Parmesan is a hard, granular cheese with a rich, umami flavour. It\'s commonly grated over pasta, risotto, or soups to add a savoury depth of flavour.',
            image_url: 'Parmesan.jpg'
        },
        {
            made_from: 'Cow',
            country_of_origin: 'France',
            family: 'Soft',
            type: 'Camembert',
            texture: 'Creamy',
            color: 'White',
            flavour: 'Mild, fruity',
            aroma: 'Earthy with hints of mushrooms',
            is_vegetarian: 1,
            price_per_kilo: 17.0,
            description: 'Camembert is a creamy cheese similar to Brie but with a slightly stronger, fruitier flavour. It pairs well with apples, honey, and rustic bread.',
            image_url: 'Camembert.jpg'
        },
        {
            made_from: 'Cow',
            country_of_origin: 'Switzerland',
            family: 'Semi-Hard',
            type: 'Swiss',
            texture: 'Firm',
            color: 'Pale Yellow',
            flavour: 'Mild, nutty',
            aroma: 'Mild, sweet',
            is_vegetarian: 0,
            price_per_kilo: 19.0,
            description: 'Swiss cheese is known for its characteristic holes and mild, nutty flavour. It\'s a great melting cheese, ideal for sandwiches and fondues.',
            image_url: 'Swiss.jpg'
        },
        {
            made_from: 'Cow',
            country_of_origin: 'USA',
            family: 'Semi-Hard',
            type: 'Monterey Jack',
            texture: 'Smooth',
            color: 'White',
            flavour: 'Mild, buttery',
            aroma: 'Light, creamy',
            is_vegetarian: 1,
            price_per_kilo: 14.0,
            description: 'Monterey Jack is a mild, buttery cheese that melts easily, making it perfect for quesadillas, grilled cheese, or casseroles.',
            image_url: 'Monterey Jack.jpg'
        },
        {
            made_from: 'Goat',
            country_of_origin: 'Cyprus',
            family: 'Fresh',
            type: 'Halloumi',
            texture: 'Firm',
            color: 'White',
            flavour: 'Salty, tangy',
            aroma: 'Mild',
            is_vegetarian: 1,
            price_per_kilo: 16.0,
            description: 'Halloumi is a unique cheese that holds its shape when grilled or fried. Its salty, tangy flavor makes it a popular choice for salads or as a meat alternative.',
            image_url: 'Halloumi.jpg'
        },
        {
            made_from: 'Unknown',
            country_of_origin: 'Bikini Bottom',
            family: 'Fictional',
            type: 'SpongeBob SquareCheese',
            texture: 'Spongy',
            color: 'Yellow',
            flavour: 'Cheddar-like, with hints of seawater',
            aroma: 'Salty, with a touch of pineapple',
            is_vegetarian: 1,
            price_per_kilo: 99.99,
            description: `There has been a long-standing debate in Bikini Bottom and beyond: Is SpongeBob really an ocean sponge, or could he be an unusually animated block of cheese? With his distinct yellow hue, square shape, and the occasional holes in his body, many have pointed out his resemblance to a fine cheddar cheese. And let\'s not forget that SpongeBob lives in a pineapple, a classic pairing for cheese! While some argue that his bubbly personality and love for jellyfishing point towards him being a sponge, true cheese connoisseurs know that he might just be the most entertaining cheese to ever exist.`,
            image_url: 'SpongeBob.png'
        }

    ];

    cheeses.forEach((cheese) => {
        db.run(`
     INSERT INTO cheese (made_from, country_of_origin, family, type, texture, color, flavour, aroma, is_vegetarian, price_per_kilo, description, image_url)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
     `, [
            cheese.made_from,
            cheese.country_of_origin,
            cheese.family,
            cheese.type,
            cheese.texture,
            cheese.color,
            cheese.flavour,
            cheese.aroma,
            cheese.is_vegetarian,
            cheese.price_per_kilo,
            cheese.description,
            cheese.image_url
        ], (err) => {
            if (err) {
                console.error("Error inserting cheese data:", err.message);
            } else {
                console.log("Cheese data inserted successfully.");
            }
        });
    });
};

module.exports = seedData;

