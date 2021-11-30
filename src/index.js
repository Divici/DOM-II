import './less/index.less'

// on click event
const signupButton = document.querySelectorAll('.content-pick .btn');

signupButton.forEach(btn => {
    btn.addEventListener('click', (event)=>{
        btn.textContent = 'Thank you!';
    }) 
 });
