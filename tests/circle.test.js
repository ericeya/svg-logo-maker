const Circle = require('../lib/circle')

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

describe('Color validation', () => {
    it('should be color validated for shape', () => {
        const shapeColor = () => {
            new Circle('Circle', 'redd')
        } 
        expect(shapeColor).toThrow('Please enter a valid color')
    })

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