
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
    var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false;}
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function(e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) { //up
      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

/*An array containing all the photographers names in the world:*/
var photographers = ["Amar Ramesh", "Audi Venkatesh", "Avinash Gowariker", "Joseph Radhik", "Photriya"];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), photographers);

var contactusUser = function () {
  
  var name1 =$("name1").value;
  var email1=$("email1").value;
  var contact1 = $("contact1").value;
  var website1 =$("website1").value;
  var isValid = true;
 
  if (name1 == "" ) {
    $("name1_error").firstChild.nodeValue = "Please enter valid name";
    isValid = false;
  } else {
    $("name1_error").firstChild.nodeValue = "";
  }   
  if (email1 == "" || email1.indexOf("@")== -1 ){
    $("email1_error").firstChild.nodeValue = "Please enter valid email";
    isValid = false;
  } else {
    $("email1_error").firstChild.nodeValue ="";
  } 
   
  if(contact1 == "" || contact1.length !== 10){
    $("contact1_error").firstChild.nodeValue= "Please enter valid phone number";
    isValid = false;
  }else{
    $("contact1_error").firstChild.nodeValue=" ";
  }
  if (website1 == "" || website1.indexOf(".")== -1) {
    $("website1_error").firstChild.nodeValue = "Please enter valid website";
    isValid = false;
  } else {
    $("website1_error").firstChild.nodeValue = " ";
  } 
  if (isValid) {
  
        alert("Success! We have received your details.One of us will be contacting you shortly.  ");
  }
}
var suggestionUser = function () {
  
  var name2 =$("name2").value;
  var email2=$("email2").value;
  var contact2 = $("contact2").value;
  var website2 =$("website2").value;
  var isValid = true;
 
  if (name2 == "" ) {
    $("name2_error").firstChild.nodeValue = "Please enter valid name";
    isValid = false;
  } else {
    $("name2_error").firstChild.nodeValue = "";
  }  
  if (email2 == "" || email2.indexOf("@")== -1 ){
    $("email2_error").firstChild.nodeValue = "Please enter valid email";
    isValid = false;
  } else {
    $("email2_error").firstChild.nodeValue ="";
  } 
   
  if(contact2 == "" || contact2.length !== 10){
    $("contact2_error").firstChild.nodeValue= "Please enter valid phone number";
    isValid = false;
  }else{
    $("contact2_error").firstChild.nodeValue=" ";
  }
  if (website2 == "" || website2.indexOf(".")== -1) {
    $("website2_error").firstChild.nodeValue = "Please enter valid website";
    isValid = false;
  } else {
    $("website2_error").firstChild.nodeValue = " ";
  } 
  if (isValid) {
  
        alert("Success! We have received your message.One of us will be contacting you shortly.");
  }
}

function searchphotographer(){
  var getsearchvalue = document.getElementById('myInput').value.toLowerCase();
  console.log(getsearchvalue);
  console.log("11111111111");

  if(getsearchvalue == "amar ramesh" || getsearchvalue == "amarramesh"){
    window.location = "Amar-Ramesh-About.html";
  }

  else if(getsearchvalue == "audi venkatesh" || getsearchvalue == "audivenkatesh"){
    window.location = "Audi-Venkatesh-About.html";
  }

  else if(getsearchvalue == "avinash gowariker" || getsearchvalue == "avinashgowariker"){
    window.location = "Avinash-Gowariker-About.html";
  }

  else if(getsearchvalue == "joseph radhik" || getsearchvalue == "josephradhik"){
    window.location = "Joseph-Radhik-About.html";
  }

  else if(getsearchvalue == "photriya"){
    window.location = "Photriya-About.html";
  }
  else {
    alert("not found");
  }
}

