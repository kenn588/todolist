


// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click' , function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// Create a new list item when clicking on the "Add" button
var lis;
var edit;
function newElement() {
  var li = document.createElement("li");
  li.className="lis";
  var inputValue = document.getElementById("myInput").value;
  var fchild=document.createElement("SPAN");
  fchild.className="fchild";
  fchild.innerHTML=inputValue;
  //var t = document.createTextNode(inputValue);
  li.appendChild(fchild);
  lis=document.getElementsByClassName('lis');

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    //alert(inputValue);

  }


  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  var span2 = document.createElement("SPAN");
  span.className = "close";
  span2.className = "edit";
  span2.innerHTML="Edit";
  li.appendChild(span2);
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      lis=document.getElementsByTagName('lis');
    }
  }
  edit=document.getElementsByClassName('edit');
  for(let z=0; z<lis.length;z++){
  edit[z].onclick=()=>{
    var val=prompt("Update Value",lis[z].firstChild.innerHTML);
    if (val!== null) {
      if (val.length>0) {
          lis[z].firstChild.innerHTML=val;
          console.log(z);

        }
        else
          alert("To Do not updated. Update was empty!!! Please try again");
      }
    }
}
  for(let h=0;h<lis.length;h++){
    lis[h].onclick=(t)=>{
      console.log(lis[h].firstChild.innerHTML);
    }
  }

}
// // get all elements
// var element = document.querySelectorAll('.list li');
// // convert NodeList into an array
// // for older browser use [].slice.call(element)
// Array.from(element)
//   // iterate over the element
//   .forEach(function(ele, i) {
//     // generate and set id
//     ele.setAttribute("id", 'item' + (i + 1));
//   })

document.addEventListener("keydown",(key)=>{if(key.keyCode==13){
  document.getElementsByClassName('addBtn')[0].click();
}})

function afficheBonjour(){
  console.log("BONJOUR");
}

function clickme(){ {
            console.log(lis);
          }

}