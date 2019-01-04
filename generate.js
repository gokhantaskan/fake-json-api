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