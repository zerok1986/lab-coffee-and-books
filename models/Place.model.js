const { Schema, model } = require('mongoose')

const placeSchema = new Schema(
  {
    name: {
      type: String,
    },
    type: {
      type: String,
      required: true,
      enum: ['coffee shop', 'bookstore'],
    },
    location: {
      type: {
        type: String,
      },
      coordinates: [Number],
    },
  },
  {
    timestamps: true,
  }
)

const User = model('Place', placeSchema)

module.exports = User
