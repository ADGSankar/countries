const request = require('request')
const fs = require('fs')
request('https://restcountries.eu/rest/v2/all', (err, res, data) => {
    console.log(data)
    fs.writeFileSync('countries.json', data)
    data = JSON.parse(data)
    data.forEach(country => {
        const options = {
            'encoding': null,
            'url': country.flag
        }
        request(options, (err, res, data) => {
            let temp = country.flag.split('/')
            const fileName = 'flags/' + temp[temp.length - 1]
            fs.writeFileSync(fileName, data);
        })

    })
})