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

const lastImg = document.querySelector('.content-destination img');

let scale = 1;
function zoom(event, img){
    event.preventDefault();
    scale += event.deltaY * -0.01;

    scale = Math.min(Math.max(0.125, scale), 4); //restricts scale
    img.style.transform = `scale(${scale})`; //scale transform
}

lastImg.addEventListener('wheel', (event) =>{
    zoom(event, lastImg);
});


// select text

// function logSelection(event) {
//     const log = document.querySelector('.intro p');
//     const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
//     log.style.color = 'red';
//   }

// const textLog = document.querySelector('.intro h2');

//     textLog.addEventListener('select', logSelection);

const textLog = document.querySelectorAll('.container p');

textLog.forEach(txt => {
    txt.addEventListener('select', (event) =>{
        txt.style.color = 'red';
    })
});

//Could not get this to work as planned


// key press down
document.addEventListener('keydown', (event) =>{
    if(event.key === 'Escape'){
        alert(`${event.key} is not a valid input`);
    }
});