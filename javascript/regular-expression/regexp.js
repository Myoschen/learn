const regex = /(\w+)\.jpg/g;
const test = 'File name: cat.jpg, test.jpg';
const [matched, matched2] = regex.exec(test);
const fileName = matched[1];

console.log(matched); // cat.jpg
console.log(matched2); // cat
console.log(test.search(regex)) // 11
console.log(test.match(regex)) // ['cat.jpg', 'test.jpg']

const regex2 = new RegExp(/\B(?=(\d{3})+(?!\d))/g);
console.log('123456789'.replace(regex2, ',')) // 123,456,789