function sum(n1, n2){   
    console.log('hello ;)')
    var sumPro = new Promise(function 
    executer(res, rej){
        console.log('how are u')
        setTimeout(()=>res(n1+n2),12000); 
    })
    return sumPro;
};
console.log(1);                       
const sumPromise = sum(12,23);          
                                    
                                        
const isPromise = sumPromise.then((val)=>{
    val = val-10;                        
    console.log(val);                     
});
isPromise.catch((res)=>console.log);
console.log(2);
console.log(3);