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
    
            return pagination; 
};


//if button 1 is pressed show 1-10

function button1() {
    
    //select the first button
   var a = document.getElementsByTagName("a");
    var button_1 = a[0];
        
    //onclick show the first ten students 
    
    button_1.onclick = function() {                     
       
for(var i = 0; i < studentItem.length; i++) {
    studentItem[i].style.display = "none";    
}
        
for(var i = 0; i < 10; i++) {
    studentItem[i].style.display = "block";         
}
 };    
};

//if button 2 is pressed show 11-20

function button2() {
        
    //select the first button
   var a = document.getElementsByTagName("a");
    var button_2 = a[1];
        
//onclick 
    
    button_2.onclick = function() {     
            
for(var i =0 ; i < studentItem.length; i++)  {  
    studentItem[i].style.display = "none"; 
}
        
for(var i = 10; i < 20; i++) {
 studentItem[i].style.display = "block";   
}
            
    };    
}

//if button 3 is pressed show 21-30
function button3() {
        
    //select the first button
   var a = document.getElementsByTagName("a");
    var button_3 = a[2];
    
//onclick 
    
    button_3.onclick = function() {             
        
for(var i = 0; i < studentItem.length; i++)  {  
    studentItem[i].style.display = "none";
}
            
 for(var i = 20; i < 30; i++) {
    studentItem[i].style.display = "block"    
}

    };    
};

//if button 4 is pressed show 31-40
function button4() {
        
    //select the first button
   var a = document.getElementsByTagName("a");
    var button_4 = a[3];
        
    //onclick 
    
    button_4.onclick = function() {         
        
for(var i = 0; i < studentItem.length; i++)  {  
    studentItem[i].style.display = "none"; 
}
            
 for(var i = 30; i < 40; i++) {
    studentItem[i].style.display = "block";    
}

    };    
}

//if button 5 is pressed show 41-50
function button5() {
        
    //select the first button
   var a = document.getElementsByTagName("a");
    var button_5 = a[4];
        
//onclick 
    
    button_5.onclick = function() {             
        
for(var i = 0; i < studentItem.length; i++)  {  
    studentItem[i].style.display = "none"; 
}
            
 for(var i = 40; i < 50; i++) {
    studentItem[i].style.display = "block";    
}
    };    
};

//if button 6 is pressed show 51-60
function button6() {
        
    //select the first button
   var a = document.getElementsByTagName("a");
    var button_6 = a[5];
        
//onclick 
    
    button_6.onclick = function() {     
            
for(var i = 0; i < studentItem.length; i++)  {  
    studentItem[i].style.display = "none"; 
}
            
 for(var i = 50; i < 60; i++) {
    studentItem[i].style.display = "block";    
}
};    
};

//if button 7 is pressed show 61-70
function button7() {
        
    //select the first button
   var a = document.getElementsByTagName("a");
    var button_7 = a[6];
        
    //onclick 
    
    button_7.onclick = function() {             
        
for(var i = 0; i < studentItem.length; i++)  {          
    studentItem[i].style.display = "none"; 
}
            
 for(var i = 60; i < studentItem.length; i++) {
    studentItem[i].style.display = "block";    
}
    };    
};


/*
Program starts here
*/

//show only ten students on page load
showstudents();

//initialize the pagination
addpageButtons(numberofPages);

//call function which excute onclick
button1();
button2();
button3();
button4();
button5();
button6();
button7();



