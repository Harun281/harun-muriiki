//$(document).ready(function(){
  //  $('').hide();
//});

document.getElementById('projects').innerHTML = '';

//hide navbar on scroll
var prevScrollPos = window.pageYOffset;


window.addEventListener('scroll', () =>{
    var currentScrollPos = window.pageYOffset;
    if(this.prevScrollPos > currentScrollPos){
        document.getElementsByClassName('mynav').style.top = '0';

    }else{
        document.getElementsByClassName('.mynav').style.top = '-50px';
    }
    prevScrollPos = currentScrollPos;
});