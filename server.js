const express = require('express')
const bodyParser = require('body-parser')

const PORT = 8001

const app = express()

app.use(bodyParser.json())

app.post('/calculate', (request, response) => {
    const {operation, num1, num2} = request.body

    let result = 0

    switch(operation) {
        case 'add':
            result = num1 + num2
            break
        case 'subtract':
            result = num1 - num2
            break
        case 'multiply':
            result = num1 * num2
            break
        case 'divide':
            if(num2 == 0) {
                response.status(400).json({ error: 'Cannot divide by zero' })
            } else {
                result = num1 / num2
            }
        default:
            response.status(400).json({ error: 'Invalid Operation' })

    }
})