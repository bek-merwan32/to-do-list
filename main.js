const inputBox = document.querySelector('.add input');
const btntBox = document.querySelector('.add i'); 
const todoList = document.querySelector('.tasks ul'); 
const num = document.querySelector('.number');
const clrAll = document.querySelector('.clrAll');









let x = 0;
let y = -1;
num.innerHTML = x ;
inputBox.onkeyup = ()=> {
    let usreData = inputBox.value;
    if (usreData.trim() != 0 ){
        btntBox.classList.add('active');
        btntBox.onclick = ()=>{
            localStorage.setItem( usreData , y);
            y--;
            inputBox.value = '';
            myfunction();
        }
    }else{
        btntBox.classList.remove('active');
    }
}

clrAll.onclick=()=>{
    localStorage.clear();
    myfunction();
    num.innerHTML = myfunc();
}
myfunction();


function myfunction() {
    todoList.innerHTML = '';
    btntBox.classList.remove('active');
    for (let index = 0; index < localStorage.length; index++) {
        x = localStorage.key(index);
        a = parseInt(localStorage.getItem(x))
        if (a < 0) {
            if (x != '') {
                todoList.innerHTML += `<div class="todo"><li class="list" > ${x} <button  onclick=" localStorage.removeItem('${x}'); localStorage.setItem( '${x}' , ${index});  myfunction(); ";  class="done"><i class="fas fa-check"></i></button>   <button onclick="localStorage.removeItem('${x}');myfunction();"><i class="fas fa-trash-alt"></i></button></li></div>`;
           }
        } 
    }
    todoList.innerHTML += '<hr/>';
    todoList.innerHTML += '<hr/>';
    for (let index = 0; index < localStorage.length; index++) {
        x = localStorage.key(index);
        a = parseInt(localStorage.getItem(x))
        if (a >= 0) {
            if (x != '') {
                todoList.innerHTML += `<div class="todo"><li class="list" id="done" > ${x} <button onclick="localStorage.removeItem('${x}');myfunction();"><i class="fas fa-trash-alt"></i></button></li></div>`;
           }
        } 
    }
    num.innerHTML = myfunc();
}

function myfunc() {
    let c = 0;
    for (let index = 0; index < localStorage.length; index++) {
        x = localStorage.key(index);
        a = parseInt(localStorage.getItem(x))
        if (a < 0) {
            if (x != '') {
                c++;
           }
        } 
    }
    return c;
}


gsap.from('.container',{duration:2, y :'-100%',ease:'elastic'});
gsap.from('li',{duration:1.5,x:-1000,stagger:0.2,delay:2,ease:'power4'});
gsap.from('hr',{duration:1,opacity:0,delay:2.3});