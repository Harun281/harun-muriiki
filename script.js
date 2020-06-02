//$(document).ready(function(){
  //  $('').hide();
//});



//hide navbar on scroll
var prevScrollPos = window.pageYOffset;
window.onscroll = function(){
    var currentScrollPos = window.pageYOffset;
    if(this.prevScrollPos > currentScrollPos){
        document.getElementsByClassName('mynav').style.top = '0';

    }else{
        document.getElementsByClassName('mynav').style.top = '-50px';
    }
    prevScrollPos = currentScrollPos;
};