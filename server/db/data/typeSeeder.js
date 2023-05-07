const pokeTypeData = require('./types.json');
const { Type, User } = require('../index.js');


const seedType = async () => {
  try {


    await Type.deleteMany({});

    await User.deleteMany({});
    User.insertMany([{ firstName: 'Jean', wins: 3, losses: 2},
      { firstName: 'Boolean', wins: 3, losses: 4 },
      { firstName: 'Billy', wins: 1, losses: 3 },
      { firstName: 'Bob', wins: 4, losses: 4 },
      { firstName: 'Billy-Bob', wins: 5, losses: 4 },
      { firstName: 'Bobby-Billy', wins: 4, losses: 5 },
      { firstName: 'Fred', wins: 3, losses: 4 },
    ]);


    await Type.insertMany(pokeTypeData.types);

    console.log('Database seeded successfully');
  } catch (err) {
    console.error('Error in seedType typeSeeder.js: ', err);
  }
};

seedType();

