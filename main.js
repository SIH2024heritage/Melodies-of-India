import "./base.css";
import './style.css';

import app from './app'

app();

document.querySelector('.button-74').addEventListener('click', sayAlert);
document.querySelector('.navbar a:nth-child(3)').addEventListener('click', sayAlert);
document.querySelector('.navbar a:nth-child(2)').addEventListener('click', sayAlert);
document.querySelector('.navbar a:nth-child(1)').addEventListener('click', sayAlert);
document.querySelector('.navbar a:nth-child(4)').addEventListener('click', sayAlert);

function sayAlert() {
  alert("work in progress");
  console.log("hiii");
}
// document.getElementById("intro-link").addEventListener("click", function (e) {
//     e.preventDefault();

    
//     document.getElementById("page2").scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// document.getElementById("intro-link").addEventListener("click", function (e) {
//     e.preventDefault(); 
    
//     const page2 = document.getElementById("page2");
//     const offset = 100; 

//     window.scrollTo({
//       top: page2.offsetTop - offset,
//       behavior: "smooth"
//     });
//   });