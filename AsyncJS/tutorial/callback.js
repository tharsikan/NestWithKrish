// const div = document.querySelector('div');
// const button = document.querySelector('button');

// const setContent = (content) => {
//     div.textContent = content;
// }

// const auth = cb =>{     // after ⏱ auth give me result.
//     setContent("auth....");
//     setTimeout(()=>{
//         console.log('hi 1');
//         return 'executing afetr time.. ';
//     },2000)
// }

const fetchUser = cb =>{     
    setContent("fetch....");
    setTimeout(()=>{
        cb({name: 'thsikan'}) // after ⏱ completion execute cb with the result.
    },2000)
}
// cause callback hell
// button.addEventListener('click',()=>{
//     auth(result=>{
//         if(result){     
//             fetchUser(user=>{
//                 setContent(user.name);
//             })
//         }
//     })
// })
const auth = cb =>{     // after ⏱ auth give me result.
    console.log('auth...start');
    let x = 12;
    setTimeout(()=>{
        console.log('hi 1'+x);
        cb(true);
        // return 'executing afetr time.. ';
    },2000);
    console.log('auth...finish');
}


var a = 10;
var ab =12;
console.log('1');
console.log('2');
console.log(
auth((value)=>{
console.log('it is '+value);
}));
console.log('3');
console.log('4');
console.log('5');