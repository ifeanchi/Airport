class Bags {
    constructor (weight) {
        if (!weight) {
            throw  new Error('bags must have a weight')
        }
        this.weight = weight
    }
}
module.exports = Bags