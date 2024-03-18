// import a js file to test with below code
const Triangle = require('../lib/triangle')

// Test all the instances for class and parameters are working fine with this describe block.
describe('Instantiate', () => {
    it ('should be instantiated as class of Triangle', () => {
        const triangle = new Triangle()
        expect(triangle).toBeInstanceOf(Triangle)
    })

    it ('should be shape of triangle', () => {
        const shape = 'Triangle'
        const triangle = new Triangle(shape)
        expect(triangle.shape).toBe(shape)
    })

    it ('should be color of the triangle', () => {
        const shapeColor = 'Red'
        const triangle = new Triangle(
            'Triangle',
            shapeColor
        )
        expect(triangle.shapeColor).toBe(shapeColor)
    })

    it ('should be text to go in the middle', () => {
        const text = 'ABC'
        const triangle = new Triangle(
            'Triangle',
            'Red',
            text
        )
        expect(triangle.text).toBe(text)
    })
    it ('should be the textColor', () => {
        const textColor = 'white'
        const triangle = new Triangle(
            'Triangle',
            'Red',
            'ABC',
            textColor
        )
        expect(triangle.textColor).toBe(textColor)
    })
})

// Testing if the color validation is working properly when wrong color is entered.
describe('Color validation', () => {
    // Tests for regular color entry
    it('should be color validated for shape', () => {
        const shapeColor = () => {
            new Triangle('Triangle', 'redd')
        } 
        expect(shapeColor).toThrow('Please enter a valid color')
    })

    // Tests for hexcode validity with given regex in the validateColor.js that's imported to shape.js then to triangle.js
    it('should be color validated with hexcodes as well for shape', () => {
        const shapeColor = () => {
            new Triangle('Triangle', "#fffffff")
        }
        expect(shapeColor).toThrow('Please enter a valid color')
    })

    it('should be color validated for shape text', () => {
        const textColor =  () => {
            new Triangle('Triangle', 'red', 'ABC', 'redd')
        expect(textColor).toThrow('Please enter a valid color')
        }
    })

    it('should be color validated with hexcodes as well for shape text', () => {
        const textColor =  () => {
            new Triangle('Triangle', 'red', 'ABC', '#fff00000')
        expect(textColor).toThrow('Please enter a valid color')
        }
    })
})

// Test for ensuring text is less than 4 letters.
describe('Text validation', () => {
    it('should be less than 4 letters', () => {
        const text = () => {
            new Triangle(
                'Triangle',
                'Red',
                'ABCD'
                )
        }
        expect(text).toThrow('Please enter 3 letters or less')
    })
})

// Test for confirming valid html lines are rendered when color/text are chosen properly.
describe('Rendering text', () => {
    it('should return a valid html txt for svg file for triangle', () => {
        const color = 'Red'
        const triangle = new Triangle(
            'Triangle',
            color
             )
        expect(triangle.render()).toBe(`<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`)
    })
    it('should return a valid html txt for three letter txt inside the shape', () => {
        const text = 'ABC'
        const triangle = new Triangle(
            'Triangle',
            'Red',
            text,
            'white'
        )
        expect(triangle.renderText()).toBe(`<text x='50%' y='70%' fill='white' font-weight='bold' font-size='60' dominant-baseline='middle' text-anchor='middle'>${text}</text>`)
    })
    it('should return a valid html txt for three letter txt inside the shape with correct color', () => {
        const textColor = 'white'
        const triangle = new Triangle(
            'Triangle',
            'Red',
            'ABC',
            textColor
        )
        expect(triangle.renderText()).toBe(`<text x='50%' y='70%' fill='${textColor}' font-weight='bold' font-size='60' dominant-baseline='middle' text-anchor='middle'>ABC</text>`)
    })
})