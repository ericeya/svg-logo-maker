// import all the required module and classes

const inquirer = require('inquirer')
const validate = require('./lib/validateColor')
const Triangle = require('./lib/triangle')
const Circle = require('./lib/circle')
const Square = require('./lib/square')
const fs = require('fs')

// using inquirer to collect user input data.
inquirer
    .prompt([
        {
            // This input is for getting the 3 letter text. It also validates if the letter is three or less.
            type: "input",
            message: "Enter three or less letters for the logo text: ",
            name: "text",
            validate: (input) => {
                if(input.length > 3) {
                    return `Please enter 3 letters or less`
                }
                return true
            }
        },
        {
            // This input is for the color of the text which the color is verified by imported function from validateColors.js
            type: "input",
            message: "Enter the color for the text: ",
            name: "textColor",
            validate: (input) => {
                if (!validate.validateColor(input)) {
                    return `Please enter a valid color`
                } 
                return true
            }
        },
        {
            // This will give list of shapes for user to choose from. Saved value will later then be compared.
            type: "list",
            message: "Choose the shape of the logo: ",
            name: "shape",
            choices: ['Circle', 'Square', 'Triangle']
        },
        {
            // This input will confirm color of the shape with the validation of color as well.
            type: "input",
            message: "Enter the color for the shape",
            name: "shapeColor",
            validate: (input) => {
                if (!validate.validateColor(input)) {
                    return `Please enter a valid color`
                } 
                return true
            }
        }
    ])
    .then((response) => {
        let newShape;
        // This if statements will classify the shape and render correct classes.
        if (response.shape === 'Circle') {
            newShape = new Circle(response.shape, response.shapeColor, response.text, response.textColor)
        } else if (response.shape === 'Square') {
            newShape = new Square(response.shape, response.shapeColor, response.text, response.textColor)
        } else {
            newShape = new Triangle(response.shape, response.shapeColor, response.text, response.textColor)
        }
        // newLogo is the generic svg template with the details of the shape and text being rendered from the class's render methods.
        const newLogo = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${newShape.render()}
    ${newShape.renderText()}
</svg>
        `
        // This will write the file to the examples folder with logo.svg file.
        fs.writeFile(`./examples/${response.text}-${response.shapeColor}-logo.svg`, newLogo, (err) => { if (err) { console.log(err)} else {console.log(`Generated ${response.text}-${response.shapeColor}-logo.svg`)}})

    })