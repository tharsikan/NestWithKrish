(function attachEventListener(){
    let count = 0;
    document.getElementById('mybutton')
    .addEventListener('click', ()=>{
        console.log('clicked '+ ++count);
    });
})();