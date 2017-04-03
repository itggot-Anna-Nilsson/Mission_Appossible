
function slide(){
  var darkbox = document.querySelector("#darkbox");
  if(!darkbox.classList.contains('opacity50') && !darkbox.classList.contains('opacity0')){
    darkbox.classList.toggle('opacity0');
    darkbox.classList.remove('darkbox');
  }
  else {
    darkbox.classList.toggle('opacity0');
    darkbox.classList.toggle('opacity50');
    darkbox.classList.remove('darkbox');
  }

  var element = document.querySelector("#navi");
  console.log("slide");
  if(!element.classList.contains('menuhidden') && !element.classList.contains('menuvisible')){
    element.classList.toggle('menuvisible');
  }
  else {
    element.classList.toggle('menuvisible');
    element.classList.toggle('menuhidden');
  }
}

var x = location.pathname.split('/');
var y = x[x.length - 1];
var z = document.querySelector("a[href='" + y + "']");
z.classList.add('current_page');
