'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {

    uri: process.env.MONGOLAB_URI
    //uri: 'mongodb://localhost/data/db'
    //uri: 'mongodb://localhost/angulartube-dev'
  },

  // Seed database on startup
  seedDB: false

};
