class Shape { 
    constructor(shape, shapeColor) {
        this.shape = shape
        this.shapeColor = shapeColor
    }
}

const abc = new Shape('Triangle')

console.log(abc)
module.exports = Shape