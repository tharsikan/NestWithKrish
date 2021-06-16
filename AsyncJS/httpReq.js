fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));

// DOMelement.addEventListener(click, cb); 

// const request = new XMLHttpRequest();   
// request.addEventListener('readystatechange', ()=> {     
//     if(request.readyState === 4 && request.status === 200){
//         console.log(request.responseText);
//     }else if(request.readyState === 4){
//         console.log('error in your url');
//     }
// });
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
// request.send();

const getTodos = (callback) => {
    const request = new XMLHttpRequest();   
    request.addEventListener('readystatechange', ()=> {     
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            callback(data, undefined);
        }else if(request.readyState === 4){
            callback(undefined, 'coluld not fetch data');
        }
    });
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
    request.send();
}
getTodos((data, error) => {
    console.log('callback firead');
    console.log(data, error);
})