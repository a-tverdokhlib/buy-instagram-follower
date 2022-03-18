const fs = require('fs')

import dbConnect from './lib/dbConnect'
var offerModel = require('./models/offer')

export const offerRepo = {
  find: (x) => findOffer(x),
  create,
  update,
  delete: _delete,
}

async function findOffer(where) {
  const offer = await offerModel.findOne(where)
  return offer
}

async function create(offer) {
  const newOffer = new offerModel(offer)
  const addedOne = await newOffer.save()
  return addedOne
}

async function update(id, params) {
  await offerModel.update(
    { service_id: id },
    {
      $set: {
        startDate: params.startDate,
        endDate: params.endDate,
        discount: params.discount,
      },
    },
  )
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
async function _delete(id) {}
