//Defining an aircraft- model

const Sequelize = require('sequelize');

//destructure DB
const {db} = require('../_db');


const Aircraft = db.define('aircraft', {
  make: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  model: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  year: {
    type: Sequelize.INTEGER,
    validate: {
      max: 2019,
      min: 1930
    },
  },
  cost: {
    type: Sequelize.DECIMAL,
    get() {
      return this.getDataValue('costs') + 'm';
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    },
    defaultValue: ''
  },
  type: {
    type: Sequelize.STRING,
    values: ['Attack', 'Bomber', 'Transport', 'Versatile', 'Reconoissance', 'Rescue']
  },
  description: {
    type: Sequelize.TEXT
  }
});

Aircraft.getAircraftByType = input => {
  return Aircraft.findAll({
    where: {
      type: input,
    },
  });
};


module.exports = Country, Aircraft;
