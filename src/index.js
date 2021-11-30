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

// double click

const images = document.querySelectorAll('.img-content img');

const shrink = (event, img) => {
    img.style.width = '50%';
}

images.forEach(img =>{
    img.addEventListener('dblclick', (event) => shrink(event, img))
});

// zoom on wheel





// key press down