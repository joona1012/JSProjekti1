// Listan tehtävän poistonapin lisääminen
var list = document.getElementsByTagName("LI");
var i;
for (i = 0; i < list.length; i++) {
  var span = document.createElement("SPAN");
  var del = document.createTextNode("Remove");
  span.className = "remove";
  span.appendChild(del);
  list[i].appendChild(span);
}

// Listan tehtävän poisto (piilotus)
var deltask = document.getElementsByClassName("remove");
var i;
for (i = 0; i < deltask.length; i++) {
  deltask[i].onclick = function() {
    var div = this.parentElement;
      div.style.display = "none";
}}

// Tehty tehtävä listalla yliviivataan klikkaamalla
var checklist = document.querySelector('ul');
checklist.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }s
}, false);

// Uuden tehtävän lisääminen/jos kenttä on tyhjä, ilmoitetaan alertilla
function newTask() {
  var li = document.createElement("li");
  var iValue = document.getElementById("addTodo").value;
  var k = document.createTextNode(iValue);
  li.appendChild(k);
  if (iValue === '') {
    alert("You didn't add a task!");
  } else {
    document.getElementById("task").appendChild(li);
  }
  document.getElementById("addTodo").value = "";
  var span = document.createElement("SPAN");
  var del = document.createTextNode("Remove");
  span.className = "remove";
  span.appendChild(del);
  li.appendChild(span);
    for (i = 0; i < deltask.length; i++) {
      deltask[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
}}
}
