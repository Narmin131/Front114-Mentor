fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

let myUrl = "https://dummyjson.com/products";

const getData = () => {
  fetch(myUrl)
    .then((res) => res.json())
    .then((response) => console.log(response.products));
};
getData();

const getCountriesInfo = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => console.log(data));
};

getCountriesInfo();

const getInfo = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data.products);
  } catch (err) {
    console.log(err);
  }
};
getInfo();

// function sum(a, b) {
//   return a * b;
// }

function sum(a, b) {
  console.log(a * b);
}

let myResult = sum(5, 6);
console.log(myResult);

async function exampleFetch() {
  const response = await fetch('https://reqres.in/api/users');
  const json = await response.json();
  console.log(json.data);
}

exampleFetch()