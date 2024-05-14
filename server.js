const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = 8001

const app = express()

app.use(cors())
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
            break
        default:
            result = num1 + num2
    }

    response.json({ result })
})

app.listen(PORT, () => {
    console.log('Server is running...')
})