// import a js file to test with below code.
const Circle = require('../lib/circle')

// Test all the instances for class and parameters are working fine with this describe block.
describe('Instantiate', () => {
    it ('should be instantiated as class of Circle', () => {
        const circle = new Circle()
        expect(circle).toBeInstanceOf(Circle)
    })

    it ('should be shape of circle', () => {
        const shape = 'Circle'
        const circle = new Circle(shape)
        expect(circle.shape).toBe(shape)
    })

    it ('should be color of the circle', () => {
        const shapeColor = 'Red'
        const circle = new Circle(
            'Circle',
            shapeColor
        )
        expect(circle.shapeColor).toBe(shapeColor)
    })

    it ('should be text to go in the middle', () => {
        const text = 'ABC'
        const circle = new Circle(
            'Circle',
            'Red',
            text
        )
        expect(circle.text).toBe(text)
    })
    it ('should be the textColor', () => {
        const textColor = 'white'
        const circle = new Circle(
            'Circle',
            'Red',
            'ABC',
            textColor
        )
        expect(circle.textColor).toBe(textColor)
    })
})

// Testing if the color validation is working properly when wrong color is entered.
describe('Color validation', () => {
    // Tests for regular color entry
    it('should be color validated for shape', () => {
        const shapeColor = () => {
            new Circle('Circle', 'redd')
        } 
        expect(shapeColor).toThrow('Please enter a valid color')
    })

    // Tests for hexcode validity with given regex in the validateColor.js that's imported to shape.js then to circle.js
    it('should be color validated with hexcodes as well for shape', () => {
        const shapeColor = () => {
            new Circle('Circle', "#fffffff")
        }
        expect(shapeColor).toThrow('Please enter a valid color')
    })

    it('should be color validated for shape text', () => {
        const textColor =  () => {
            new Circle('Circle', 'red', 'ABC', 'redd')
        expect(textColor).toThrow('Please enter a valid color')
        }
    })

    it('should be color validated with hexcodes as well for shape text', () => {
        const textColor =  () => {
            new Circle('Circle', 'red', 'ABC', '#fff00000')
        expect(textColor).toThrow('Please enter a valid color')
        }
    })
})

// Test for ensuring text is less than 4 letters.
describe('Text validation', () => {
    it('should be less than 4 letters', () => {
        const text = () => {
            new Circle(
                'Circle',
                'Red',
                'ABCD'
                )
        }
        expect(text).toThrow('Please enter 3 letters or less')
    })
})

// Test for confirming valid html lines are rendered when color/text are chosen properly.
describe('Rendering text', () => {
    it('should return a valid html txt for svg file for circle', () => {
        const color = 'Red'
        const circle = new Circle(
            'Circle',
            color
             )
        expect(circle.render()).toBe(`<circle cx="100" cy="100" r="95" fill="${color}"/>`)
    })
    it('should return a valid html txt for three letter txt inside the shape', () => {
        const text = 'ABC'
        const circle = new Circle(
            'Circle',
            'Red',
            text,
            'white'
        )
        expect(circle.renderText()).toBe(`<text x='100' y='53%' fill="white" font-weight='bold' font-size='80' dominant-baseline='middle' text-anchor='middle'>${text}</text>`)
    })
    it('should return a valid html txt for three letter txt inside the shape with correct color', () => {
        const textColor = 'white'
        const circle = new Circle(
            'Circle',
            'Red',
            'ABC',
            textColor
        )
        expect(circle.renderText()).toBe(`<text x='100' y='53%' fill="${textColor}" font-weight='bold' font-size='80' dominant-baseline='middle' text-anchor='middle'>ABC</text>`)
    })
})