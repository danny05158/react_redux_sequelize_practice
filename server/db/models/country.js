const Sequelize = require('sequelize');
//Destructure DB
const { db } = require('../_db');

// Define Country Schema
const Country = db.define('country', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  GFI: {
    type: Sequelize.INTEGER,
  },
  flagUrl: {
    type: Sequelize.INTEGER,
    defaultValue:
      'https://upload.wikimedia.org/wikipedia/commons/9/98/Portugal_Presidential_Flag.png'
  }
});

Country.getTopFive = function () {
  return Country.findAll({
    limit: 5,
    order: [['GFI', 'ASC']],
  });
}

module.exports = Country;
