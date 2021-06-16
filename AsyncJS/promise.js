// new Promise((resolve)=>{
//     var x =100;
//     setTimeout(()=> console.log(++x),0);
//     resolve(++x);
//     setTimeout(()=> console.log(x++, "normal"),0);
// }).then(console.log);

// new Promise((resolve, reject)=>{
//     resolve("resolved");
// }).then(console.log).catch(console.log).finally(console.log('final call'));

// new Promise((resolve, reject)=>{
//     resolve("resolved");
// }).finally(console.log('final call')).then(console.log).catch(console.log);
// var x = 1;
// let promise = new Promise(function (resolve, reject){
//     setTimeout(resolve(++x), 100000000);
// });
// promise.then(function (result){
//     alert(result);
//     return result *2;
// });
// promise.then(function (result){
//     alert(result);
//     return result *2;
// });
// promise.then(function (result){
//     alert(result);
//     return result *2;
// });

// new Promise((resolve, reject)=>{
//     reject("rejected");resolve("resolved");
// }).then(console.log).catch(e=> console.log(e+"hi"));

new Promise((resolve, reject)=>{
    reject();
    console.log("after");
}).then(()=>console.log("resolved")).catch(()=> console.log("Rejected"));


function successCallback(result) {
  console.log("Audio file ready at URL: " + result);
}
function failureCallback(error) {
  console.error("Error generating audio file: " + error);
}
createAudioFileAsync(audioSettings, successCallback, failureCallback);


// createAudioFileAsync(audioSettings).then(successCallback, failureCallback);





























// new Promise((resolve, reject) => {
//     setTimeout(() => resolve("result"), 1000)
//   })
//     .finally(() => console.log("Promise ready"))
//     .then(result => console.log(result));


// class Person{
//     constructor(executer){
//         executer();
//     }
//     _state =0;
//     _result = 0;
//     setResult(value){
//         this._result = _result;
//     }
// }

// let PersonP = function (executer){
//     executer();
//     this._state = 0;
//     this._result = 0;
// };
// PersonP.prototype.setResult = function (value) {
//     this._result = value;
// }

// new PersonP(()=>{
//     var x =100;
//     setTimeout(()=> console.log(x++),0);
//     setTimeout(()=> console.log(++x),0);
// });

