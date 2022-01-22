// Object property shorthand

const name = 'kolawole'
const userAge = 23

const user = {
    name,
    age: userAge,
    location: 'Abuja'
};

// console.log(user);

// Object destructuring

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const {'label':productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating);

const transaction = (type, { label, stock, rating }) => {
    console.log(type, label, stock, rating)
}

transaction('order', product)