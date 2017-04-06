
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


if(y == 'favorites.html'){
  document.querySelector('#title').innerHTML = 'Favorites';
}
else if(y == 'maps.html'){
  document.querySelector('#title').innerHTML = 'Map';
}
else if(y == 'add_location.html'){
  document.querySelector('#title').innerHTML = 'Add Location';
}
else if(y == 'recent.html'){
  document.querySelector('#title').innerHTML = 'Recent';
}
else if(y == 'settings.html'){
  document.querySelector('#title').innerHTML = 'Settings';
}

function onoff() {
  document.querySelector('#instant').classList.toggle('on');
  document.querySelector('#instant').classList.toggle('off');
  document.querySelector('#delay').classList.toggle('on');
  document.querySelector('#delay').classList.toggle('off');
}

function settings_locations() {
  document.querySelector('#locations_on').classList.toggle('on');
  document.querySelector('#locations_on').classList.toggle('off');
  document.querySelector('#locations_off').classList.toggle('on');
  document.querySelector('#locations_off').classList.toggle('off');
}

function settings_quantum(){
  document.querySelector('#quantum_on').classList.toggle('on');
  document.querySelector('#quantum_on').classList.toggle('off');
  document.querySelector('#quantum_off').classList.toggle('on');
  document.querySelector('#quantum_off').classList.toggle('off');
}

function settings_oxygen() {
  document.querySelector('#oxygen_on').classList.toggle('on');
  document.querySelector('#oxygen_on').classList.toggle('off');
  document.querySelector('#oxygen_off').classList.toggle('on');
  document.querySelector('#oxygen_off').classList.toggle('off');
}
