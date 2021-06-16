const button = document.querySelector('button');
const div = document.querySelector('div');

const setText = (text) => {
    div.textContent = text;
}

const auth = () => {
    const authp = new Promise((resolve, reject)=>{
        setText('auth...');
        setTimeout(()=>resolve(true),2000);
    })
    return authp;
}

const fetch = () => {
    const fetchp = new Promise((resolve, reject)=>{
        setText('fetch...');
        setTimeout(()=>resolve({name: 'thaikan'}),2000); // after ⏱ completion
    })
    return fetchp;
}

button.addEventListener('click', () => {
    auth()
    .then(
        isAuth=>{
            if(isAuth){
                return fetch()
            }
        }
    )
    .then(
        user=>{
            setText(user.name)
        }
    )
});
