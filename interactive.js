//making dynamic greeting

let greeting = document.querySelector('.dynamic-greeting');
let timeNow = new Date().getHours();

  if (timeNow >= 5 && timeNow < 12) {
   greeting.innerHTML='Good Morning!'
  } else if (timeNow >=12 && timeNow < 18) {
   greeting.innerHTML='Good Afternoon!'
  } else {
    greeting.innerHTML='Good Evening!'
  }
  //making current time appear 

let now = new Date();

let hour = now.getHours();

let minute = now.getMinutes().toString().padStart(2, '0');

let htmlTime = document.querySelector('.time');
htmlTime.innerHTML=`${hour}:${minute}`;



//the total function

const gameData = [
  {
    name: 'Carz',
    rate: '92%',
    played: 'Last Week',
    users: '5998'
  },{
    name: 'Space Belt',
    rate: '70%',
    played: 'Two Weeks Ago',
    users: '674'
  },{
    name: 'Ski G',
    rate: '86%',
    played: 'Last Month',
    users: '468'
  },{
    name: 'Space Craft',
    rate: '41%',
    played: '5 Months Ago',
    users: '46'
  },{
    name: 'Street Basketball III',
    rate: '98%',
    played: 'Last Hour',
    users: '1119'
  },
];

function theHover (){

  for (let i=0; i<5; i++){

  const theData = gameData[i];
  const{name, rate, played, users}=theData;

  let thePic = document.querySelector(`.game-pic-${i}`);
  
  
  thePic.addEventListener('mouseenter',()=>
   
   thePic.innerHTML=` 
   
   <img class="game-pic${i} hover-pic" src="./assets/game ${i}.jpg" />
  <div class="hover-style" >name: ${name}</div>
  <div class="hover-style" >rate: ${rate}</div>
  <div class="hover-style" >played: ${played}</div>
  <div class="hover-style" >users: ${users}</div>`
  );
  
  thePic.addEventListener('mouseleave',()=>
  
  thePic.innerHTML=`<img class="game-pic${i}" src="./assets/game ${i}.jpg" />`
  );
  
  }
  }
  theHover();
