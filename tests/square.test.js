// import a js file to test with below code.
const Square = require('../lib/square')

// Test all the instances for class and parameters are working fine with this describe block.
describe('Instantiate', () => {
    it ('should be instantiated as class of Square', () => {
        const square = new Square()
        expect(square).toBeInstanceOf(Square)
    })

    it ('should be shape of square', () => {
        const shape = 'Square'
        const square = new Square(shape)
        expect(square.shape).toBe(shape)
    })

    it ('should be color of the square', () => {
        const shapeColor = 'Red'
        const square = new Square(
            'Square',
            shapeColor
        )
        expect(square.shapeColor).toBe(shapeColor)
    })

    it ('should be text to go in the middle', () => {
        const text = 'ABC'
        const square = new Square(
            'Square',
            'Red',
            text
        )
        expect(square.text).toBe(text)
    })
    it ('should be the textColor', () => {
        const textColor = 'white'
        const square = new Square(
            'Square',
            'Red',
            'ABC',
            textColor
        )
        expect(square.textColor).toBe(textColor)
    })
})

// Testing if the color validation is working properly when wrong color is entered.
describe('Color validation', () => {
    // Tests for regular color entry
    it('should be color validated for shape', () => {
        const shapeColor = () => {
            new Square('Square', 'redd')
        } 
        expect(shapeColor).toThrow('Please enter a valid color')
    })

    // Tests for hexcode validity with given regex in the validateColor.js that's imported to shape.js then to square.js
    it('should be color validated with hexcodes as well for shape', () => {
        const shapeColor = () => {
            new Square('Square', "#fffffff")
        }
        expect(shapeColor).toThrow('Please enter a valid color')
    })

    it('should be color validated for shape text', () => {
        const textColor =  () => {
            new Square('Square', 'red', 'ABC', 'redd')
        expect(textColor).toThrow('Please enter a valid color')
        }
    })

    it('should be color validated with hexcodes as well for shape text', () => {
        const textColor =  () => {
            new Square('Square', 'red', 'ABC', '#fff00000')
        expect(textColor).toThrow('Please enter a valid color')
        }
    })
})

// Test for ensuring text is less than 4 letters.
describe('Text validation', () => {
    it('should be less than 4 letters', () => {
        const text = () => {
            new Square(
                'Square',
                'Red',
                'ABCD'
                )
        }
        expect(text).toThrow('Please enter 3 letters or less')
    })
})

// Test for confirming valid html lines are rendered when color/text are chosen properly.
describe('Rendering text', () => {
    it('should return a valid html txt for svg file for square', () => {
        const color = 'Red'
        const square = new Square(
            'Square',
            color
             )
        expect(square.render()).toBe(`<rect x='49' y='0' width='200' height='200' stroke='red' fill='${color}'/>`)
    })
    it('should return a valid html txt for three letter txt inside the shape', () => {
        const text = 'ABC'
        const square = new Square(
            'Square',
            'Red',
            text,
            'white'
        )
        expect(square.renderText()).toBe(`<text x='49%' y='53%' fill='white' font-weight='bold' font-size='100' dominant-baseline='middle' text-anchor='middle'>${text}</text>`)
    })
    it('should return a valid html txt for three letter txt inside the shape with correct color', () => {
        const textColor = 'white'
        const square = new Square(
            'Square',
            'Red',
            'ABC',
            textColor
        )
        expect(square.renderText()).toBe(`<text x='49%' y='53%' fill='${textColor}' font-weight='bold' font-size='100' dominant-baseline='middle' text-anchor='middle'>ABC</text>`)
    })
})