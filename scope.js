var persons = [{
    name: 'Nam',
    job: 'Dev'
}, {
    name: 'Duong',
    job: 'Tester'
}]
for (let i = 0; i < persons.length; i++) {
    let item = persons[i]
    console.log(item.name + " " + item.job)

}

var person = {
    name: 'Nam',
    job: 'Dev',
    phone: 0866633805,
    company: 'Nodemy',
    group: ['Nodejs.vn', 'Nodejs Viet Nam'],
    website: 'http://nodemy.vn'
}
for (var key in person) {
    console.log(person[key])
}