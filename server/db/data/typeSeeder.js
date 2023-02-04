const pokeTypeData = require('./types.json');
const { Type, User } = require('../index.js');


const seedType = async () => {
  try {


    await Type.deleteMany({});

    await User.deleteMany({});
    User.insertMany([{ firstName: 'Jean', wins: 89, losses: 38, draws: 1 },
      { firstName: 'Boolean', wins: 83, losses: 47, draws: 1 },
      { firstName: 'Billy', wins: 19, losses: 37, draws: 1 },
      { firstName: 'Bob', wins: 89, losses: 40, draws: 0 },
      { firstName: 'Billy-Bob', wins: 93, losses: 38, draws: 3 },
      { firstName: 'Bobby-Billy', wins: 32, losses: 32, draws: 3 },
      { firstName: 'Fred', wins: 19, losses: 0, draws: 0 },
    ]);


    await Type.insertMany(pokeTypeData.types);

    console.log('Database seeded successfully');
  } catch (err) {
    console.error('Error in seedType typeSeeder.js: ', err);
  }
};

seedType();

