const movies = require('../models/Movies');

module.exports = {
  getAllMovies: (req, res) => {
    res.json({
      message: "success get data movies",
      data: movies
    })
  },

  getMovieByID: (req, res) => {
    const { id } = req.params
  
    const movie = movies.find(item => item.id == id )
  
    res.json({
      message: "success get data by id",
      data: movie
    })
  },

  addMovie:  (req, res) => {
    const data = req.body
  
    movies.push(data)
    res.json({
      message: "success add data movies",
      data
    })
  }
}