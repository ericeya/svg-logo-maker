const Shape = require('../lib/shape');

describe('Shape', () => {
    describe('Instantiate', () => {
        it ('should be an instance of Shape class', () => {
            const shape = new Shape();
            expect(shape).toBeInstanceOf(Shape)
        })
    })
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

describe('Shape', () => {
    describe('Initialize shape', () => {
        it ('should set the shape properly', () => {
            const result = 'Triangle'
            const shape = new Shape(result);
            expect(shape.shape).toEqual(result)
        })
    })
})

describe('Shape', () => {
    describe('Initialize color of the shape', () => {
        it ('should set the shapeColor properly', () => {
            const color = 'blue'
            const shape = new Shape(
                'Triangle',
                'blue');
            expect(shape.shapeColor).toEqual(color)
        })
    })
})

describe('Shape', () => {
    describe('Initialize text', () => {
        it ('should set the text properly', () => {
            const text = 'ABC'
            const shape = new Shape(
                'Triangle',
                'blue',
                'ABC'
            );
            expect(shape.text).toEqual(text)
        })
    })
})

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
    })
})


describe('Shape', () => {
    describe('Initialize textColor', () => {
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
    })
})

describe('Shape', () => {
    describe('Validate textColor', () => {
        const  cb = () => {
            new Shape(
            'Triangle',
            'bluee',
            'ABC',
            'white')
            }
        expect(cb).toThrowError('Please enter a valid color')
        })
    })

describe('Shape', () => {
    describe('Validate textColor', () => {
        const  cb = () => {
            new Shape(
            'Triangle',
            'bluee',
            'ABC',
            'white')
            }
        expect(cb).toThrowError('Please enter a valid color')
        })
    })


