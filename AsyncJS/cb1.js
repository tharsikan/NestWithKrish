console.log('start');
setTimeout(function cbT() {
    console.log('time out');
}, 5000);
fetch('https://api.netflix.com')
.then(function cbF(){
    console.log('CB netfilix');
})
// 10000000000000 lines of code
console.log('end');

// function main(y){
//     console.log('main');
//     y('hello');
// }
// function outer(){
//     var num = 12;
//     main(cb);
// }
// outer();
// function cb(n){
//     console.log(n, num);
// }