import './less/index.less'

// on load

window.addEventListener("load", (event) =>{
    alert('Your page has loaded successfully!');
});

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
    link.addEventListener('mouseover', (event) =>{
        link.style.color = 'red';
    })
    link.addEventListener('mouseout', (event) =>{
        link.style.color = '';
    })
});

// double click

const images = document.querySelectorAll('.img-content img');
let originSize = true;
const shrink = (event, img) => {
        img.style.width = '50%';
        originSize = false;
}
const expand = (event, img) => {
        img.style.width = '100%';
        originSize = true;
}

images.forEach(img =>{
    if(originSize === true){
        img.addEventListener('dblclick', (event) => shrink(event, img))
    }
    else{
        img.addEventListener('dblclick', (event) => expand(event, img))
    }
    
});

// zoom on wheel





// key press down