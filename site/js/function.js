
function slide(){
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
