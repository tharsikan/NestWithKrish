var fetchP = fetch('https://jsonplaceholder.typicode.com/todos/1')
console.log(fetchP);
for(i=0;i<100000000;i++){}
console.log(fetchP);
fetchP.then(function onFulFill(response){response.json()})
  .then(json => console.log(json))
