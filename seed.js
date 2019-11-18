//Destructure Schemas models
const {Aircraft} = require('./server/db/models')
const {Country} = require('./server/models')

const {db} = require('./server/db/_db')

const aircraftList = [{
  make: 'Lockheed Martin',
  model: 'SR-71 Blackbird',
  year: 1990,
  type: 'Reconoissance',
  cost: 1200,
  imageUrl: '/images/SR-71.jpg',
  description: 'The fastest plane the world has seen',
  countryId: 1,
}, {
  make: 'Lockheed Martin',
  model: 'U-2',
  year: 1991,
  type: 'Reconoissance',
  cost: 2100,
  imageUrl: '/images/U-2.jpg',
  description: 'This plane will do some damage',
  countryId: 2
}, {
  make: 'Boeing',
  model: 'B-52 Stratofortress',
  year: 1995,
  type: 'Bomber',
  cost: 35100,
  imageUrl: '/images/B-52.jpg',
  description: 'The Beast with all its glory',
  countryId: 2
}, {
  make: 'Boeing',
  model: 'B-29 Superfortresss',
  year: 2000,
  type: 'Bomber',
  cost: 2500,
  imageUrl: '/images/B-29.jpg',
  description: 'Flies like a fly',
  countryId: 4
}, {
  make: 'Northrup Grumman',
  model: 'F6F Hellcat',
  year: 1942,
  type: 'Attack',
  cost: 500,
  imageUrl: '/images/F6F.jpg',
  description: 'Buy it as soon as possible',
  countryId: 2
}];

const countryList = [{
  name: 'South Africa',
  GFI: 3.2
}, {
  name: 'Egypt',
  GFI: 5.0
}, {
  name: 'Saudi Arabia',
  GFI: 6.0
}, {
  name: 'USA',
  GFI: 9.0
}, {
  name: 'Argentina',
  GFI: 3.0
}];

const seed = () =>
  Promise.all(countriesList.map(country =>
    Country.create(country))
  )
    .then(() =>
      Promise.all(aircraftList.map(aircraft =>
        Aircraft.create(aircraft))
      ))

seed()
  .then(() => db.close())
  .catch(err => console.log('the seed error:', err))
