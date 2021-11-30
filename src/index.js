import './less/index.less'

// on click event
const signupButton = document.querySelectorAll('.content-pick .btn');

signupButton.forEach(btn => {
    btn.addEventListener('click', (event)=>{
        btn.textContent = 'Thank you!';
    }) 
 });

 // on mouseover and mouseout

 const links = document.querySelectorAll('nav a');
 
 links.forEach(link => {
    link.addEventListener('mouseover', event =>{
        link.style.color = 'red';
    })
    link.addEventListener('mouseout', event =>{
        link.style.color = '';
    })
 });

 