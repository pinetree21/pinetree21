
/*this is a comment*/
//this is also a comment with no line break
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/shoreham.png') {
      myImage.setAttribute ('src','images/Vege.png');
    } else {
      myImage.setAttribute ('src','images/shoreham.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Shoreham is rad, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Shoreham is rad, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
