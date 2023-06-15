document.getElementById('second').style.display = 'none';

let button = document.getElementById('btn1');

button.addEventListener('mouseover', ()=> {
    button.style.backgroundColor = 'lightgrey'
    button.style.color = 'white'
})

button.addEventListener('mouseleave', ()=> {
    button.style.backgroundColor = 'rgb(40, 46, 56)'
    button.style.color = 'rgb(128, 136, 149)'
})

button.addEventListener('click', ()=> {
    button.style.backgroundColor = 'rgb(236, 125, 53)';
    button.style.color = 'white';
    document.getElementById('rate').innerHTML = 'You selected 1 out of 5'

   
    
})
let button1 = document.getElementById('btn2');

button1.addEventListener('mouseover', ()=> {
    button1.style.backgroundColor = 'lightgrey'
    button1.style.color = 'white'
})

button1.addEventListener('mouseleave', ()=> {
    button1.style.backgroundColor = 'rgb(40, 46, 56)'
    button1.style.color = 'rgb(128, 136, 149)'
})

button1.addEventListener('click', ()=> {
    button1.style.backgroundColor = 'rgb(236, 125, 53)'
    button1.style.color = 'white'
    document.getElementById('rate').innerHTML = 'You selected 2 out of 5'

})

let button2 = document.getElementById('btn3');

button2.addEventListener('mouseover', ()=> {
    button2.style.backgroundColor = 'lightgrey'
    button2.style.color = 'white'
})

button2.addEventListener('mouseleave', ()=> {
    button2.style.backgroundColor = 'rgb(40, 46, 56)'
    button2.style.color = 'rgb(128, 136, 149)'
})

button2.addEventListener('click', ()=> {
    button2.style.backgroundColor = 'rgb(236, 125, 53)'
    button2.style.color = 'white'
    document.getElementById('rate').innerHTML = 'You selected 3 out of 5'


})

let button3 = document.getElementById('btn4');


button3.addEventListener('mouseover', ()=> {
    button3.style.backgroundColor = 'lightgrey'
    button3.style.color = 'white'
})

button3.addEventListener('mouseleave', ()=> {
    button3.style.backgroundColor = 'rgb(40, 46, 56)'
    button3.style.color = 'rgb(128, 136, 149)'
})

button3.addEventListener('click', ()=> {
    button3.style.backgroundColor = 'rgb(236, 125, 53)'
    button3.style.color = 'white'
    document.getElementById('rate').innerHTML = 'You selected 4 out of 5'

    
})

let button4 = document.getElementById('btn5');

button4.addEventListener('mouseover', ()=> {
    button4.style.backgroundColor = 'lightgrey'
    button4.style.color = 'white'
})

button4.addEventListener('mouseleave', ()=> {
    button4.style.backgroundColor = 'rgb(40, 46, 56)'
    button4.style.color = 'rgb(128, 136, 149)'
})

button4.addEventListener('click', ()=> {
    button4.style.backgroundColor = 'rgb(236, 125, 53)'
    button4.style.color = 'white'
    document.getElementById('rate').innerHTML = 'You selected 5 out of 5'

   

})

let submitbtn = document.getElementById('submit1');

submitbtn.addEventListener('mouseover', () => {
    submitbtn.style.backgroundColor = 'white';
    submitbtn.style.color = 'rgb(236, 125, 53)'
})
submitbtn.addEventListener('mouseleave', () => {
    submitbtn.style.backgroundColor = 'rgb(236, 125, 53)';
    submitbtn.style.color = 'white'
    
})
submitbtn.addEventListener('click', () => {
    document.getElementById('first').style.display = 'none';
    document.getElementById('second').style.display = 'flex';
})









