const pokeTypeData = require('./types.json');
const { Type } = require('../index.js');


const seedType = async () => {
  try {
    

    await Type.deleteMany({});

    
    await Type.insertMany(pokeTypeData.types);

    console.log('Database seeded successfully');
  } catch (err) {
    console.error('Error in seedType typeSeeder.js: ', err);
  }
};

seedType();

