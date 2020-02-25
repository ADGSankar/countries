const fs = require('fs')

const data = JSON.parse(fs.readFileSync('countries.json'))

data.forEach(country => {
    let temp = country.flag.split('/')
    country.flag = 'data/' + temp[temp.length - 1]
})

fs.writeFileSync('countriesJSON.json', JSON.stringify(data))