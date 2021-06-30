class Airport {
  constructor (name, planes){
      this.name = name
      this.planes = []
  }
  addPlane (plane){
      this.planes.push(plane)
  }
}

module.exports = Airport