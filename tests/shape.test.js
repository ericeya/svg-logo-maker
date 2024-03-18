// import shape.js to test
const Shape = require('../lib/shape');

// Test block for instantiate of the class
describe('Shape', () => {
    describe('Instantiate', () => {
        it ('should be an instance of Shape class', () => {
            const shape = new Shape();
            expect(shape).toBeInstanceOf(Shape)
        })
    })
})

// test block for parameters being properly set
describe('Shape', () => {
    describe('Initialize parameters', () => {
        it ('should set the shape properly', () => {
            const result = 'Triangle'
            const shape = new Shape(result);
            expect(shape.shape).toEqual(result)
        })
        it ('should set the shapeColor properly', () => {
            const color = 'blue'
            const shape = new Shape(
                'Triangle',
                'blue');
            expect(shape.shapeColor).toEqual(color)
        })
        it ('should set the textColor properly', () => {
            const textColor = 'White'
            const shape = new Shape(
                'Triangle',
                'blue',
                'ABC',
                'White'
            );
            expect(shape.textColor).toBe(textColor)
        })
        it ('should set the shapeColor properly', () => {
            const color = 'blue'
            const shape = new Shape(
                'Triangle',
                'blue');
            expect(shape.shapeColor).toEqual(color)
        })
       
    })
})


// test block for testing text entry
describe('Shape', () => {
    describe('Validate text', () => {

        it ('should confirm text is 3 letters or less', () => {
            const text = 'AB'
            const shape = new Shape(
                'Triangle',
                'blue',
                'AB'
            );
            expect(shape.text).toBe(text)
        })
        it ('should confirm text is 3 letters or less', () => {
            const  cb = () => {
                new Shape(
                'Triangle',
                'blue',
                'ABCD',
                'white')
                }
            expect(cb).toThrowError('Please enter 3 letters or less')
        })
    })
})


// test block for validating color for both shape and text.
describe('Shape', () => {
    describe('Validate Color', () => {
        it('should validate a color for shape when wrong color entered', ()=> {
            const  cb = () => {
                new Shape(
                'Triangle',
                'bluee',
                'ABC',
                'white')
                }
            expect(cb).toThrowError('Please enter a valid color')
            })
        it('should validate a color for text when wrong color entered', ()=> {
            const  cb = () => {
                new Shape(
                'Triangle',
                'blue',
                'ABC',
                'whitee')
                }
            expect(cb).toThrowError('Please enter a valid color')
            })
        })
    })



