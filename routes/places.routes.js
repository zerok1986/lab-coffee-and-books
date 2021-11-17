const router = require('express').Router()
const Places = require('../models/Place.model')

router.get('/', (req, res, next) => {
  Places.find()
    .then((places) => {
      res.render('places/list', { places })
    })
    .catch((err) => console.error(err))
})

router.get('/create', (req, res, next) => {
  res.render('places/create')
})

router.post('/create', (req, res, next) => {
  const { name, type, lat, lng } = req.body

  const location = {
    type: 'Point',
    coordinates: [lat, lng],
  }

  Places.create({ name, type, location })
    .then(() => res.redirect('/places'))
    .catch((err) => console.error(err))
})

router.get('/edit/:id', (req, res, next) => {
  const { id } = req.params

  Places.findById(id)
    .then((place) => {
      let isCoffeeShop = false
      place.type === 'coffee shop' ? (isCoffeeShop = true) : false
      res.render('places/edit', { place, isCoffeeShop })
    })
    .catch((err) => console.error(err))
})

router.post('/edit/:id', (req, res, next) => {
  const { id } = req.params
  const { name, type, lat, lng } = req.body

  const location = {
    type: 'Point',
    coordinates: [lat, lng],
  }

  Places.findByIdAndUpdate(id, { name, type, location })
    .then(() => res.redirect('/places'))
    .catch((err) => console.error(err))
})

router.get('/delete/:id', (req, res, next) => {
  const { id } = req.params

  Places.findByIdAndDelete(id)
    .then(() => res.redirect('/places'))
    .catch((err) => console.log(err))
})

router.get('/map', (req, res, next) => {
  const APIKey = process.env.API_KEY
  res.render('places/map', { APIKey })
})

module.exports = router
