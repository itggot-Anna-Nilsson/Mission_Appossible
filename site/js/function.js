function slide(){
  var element = document.getElementById("navi");
  element.classList.toggle("menu");
  element.classList.toggle("menuOut");
  console.log("slide");

}

function pic(){
  var element = document.getElementById("ham");
  element.classList.remove("black");
  element.classList.add("white");
  console.log("pic");

}
//alert("hello")
