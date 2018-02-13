console.log('Aloitus');
var intervalli = setInterval(function(){
  console.log('-');
},10);
$(document).ready(function(){
  setTimeout(function(){
    clearInterval(intervalli);
  },1000);

  console.log('Toimii');
});
