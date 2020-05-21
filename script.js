let date = new Date().toLocaleTimeString();
let clock = document.getElementsByClassName('clock')
clock[0].innerHTML = date;
// its an array and will return the date. InnerHtml is linking the class and the return value from the javascript
// innner html is  a property oh HTML element which can be targeted to get return or value 
setInterval(function(){
    let date = new Date().toLocaleTimeString();
    let clock = document.getElementsByClassName('clock')
    clock[0].innerHTML = date;
    },1000)
