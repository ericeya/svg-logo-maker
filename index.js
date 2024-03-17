const inquirer = require('inquirer')
const validate = require('./lib/validateColor')

inquirer
    .prompt([
        {
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
        console.log(validate.validateColor(response.shapeColor))
    })