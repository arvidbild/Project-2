//variables 
var studentItem = document.getElementsByClassName("student-item cf");
var page = document.querySelector(".page");
var pagination = document.createElement("div");

var numberofStudents = document.querySelectorAll(".student-item.cf").length;
var numberofPages = Math.ceil(numberofStudents/10); 

/*  
functions
*/

//Start with showing 10 studens
function showstudents() {     
    
for(var i = 10; i < studentItem.length; i++) {
    
    studentItem[i].style.display = "none"; 
}
};

// Add Pagination  
function addpageButtons(numberofPages) {
    
    //create the unordered list
    var ul = document.createElement("ul");

    //Giving attribute to be able to select the div
    pagination.setAttribute("class","pagination");


    //add the ul the the bottom of the page
    page.appendChild(pagination);
    pagination.appendChild(ul); 
    
    
            //add the appropiate number of links to the bottom of page
            for (var i = 1; i <= numberofPages; i++) {
        
            // dynamic number of buttons
            var button = document.createElement("li");
            ul.appendChild(button);
        
            //add links to the buttons 
            var pageLink = document.createElement("a");
            pageLink.setAttribute("href","#");
            pageLink.innerHTML = i;
            button.appendChild(pageLink);
    }    
};

function button() {
  var buttonpressed =  event.target.innerHTML;   
    
if (buttonpressed == 1) {
        for(var i = 0; i < studentItem.length; i++)  {      studentItem[i].style.display = "none"; 
}
        for(var i = 0; i < 10; i++) {
        studentItem[i].style.display = "block";    
}
    }
else if (buttonpressed == numberofPages) {
        for(var i = 0; i < studentItem.length; i++)  { 
        studentItem[i].style.display = "none"; 
}
    
        for (var i = (numberofPages-1) *10; i < studentItem.length; i++) {
        studentItem[i].style.display = "block"; 
} 
    }
else {
        for(var i = 0; i < studentItem.length; i++)  {     studentItem[i].style.display = "none"; 
}
        for(var i = buttonpressed*10-1 ; i > buttonpressed*10-11; i--) {
        studentItem[i].style.display = "block"; 
}
    
            }
        }

/*
Program starts here
*/

//show only ten students on page load
showstudents();

//initialize the pagination
addpageButtons(numberofPages);

//eventlistener on which button is clicked -- execute function "button"
document.querySelector(".pagination").addEventListener("click", button);
                                                        

