# Creating fake JSON API

## Dependencies

- "[faker](https://github.com/marak/Faker.js/)": "^4.1.0" 
- "[lodash](https://github.com/lodash/lodash)": "^4.17.11" 
- "[json-server](https://github.com/typicode/json-server)": "^0.14.2"

## Example Function

An example function to generate fake JSON database

```javascript
module.exports = function () {
  var faker = require("faker");
  var _ = require("lodash");
  return {
    person: _.times(20, function (n) {
      return {
        id: n + 1,
        name: faker.name.firstName(),
        surname: faker.name.lastName(),
        username: faker.internet.userName(),
        password: faker.internet.password(6),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        company:  faker.company.companyName(),
                  //+ ", " 
                  //+ faker.company.companySuffix(),
        title: faker.name.jobTitle(),
        avatar: faker.image.avatar(),
        about: faker.lorem.paragraph(3)
      }
    })
  }
}
```

## JSON Server and the Output

I created `npm run generate` script to generate JSON file on `localhost:3000` with the help of [json-server](https://pages.github.com/)
