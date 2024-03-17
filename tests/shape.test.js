const Shape = require('../lib/shape');

describe('Shape', () => {
    describe('Instantiate', () => {
        it ('should be instance of Shape class', () => {
            const shape = new Shape();
            expect(shape).toBeInstanceOf(Shape)
        })
    })
})

describe('Shape', () => {
    describe('Instantiate', () => {
        it ('should match the value entered', () => {
            const result = 'Triangle'
            const shape = new Shape(result);
            expect(shape.shape).toBe(result)
        })
    })
})