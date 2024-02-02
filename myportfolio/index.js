var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
var event = document.getElementsByClassName("active-link");
function openTab(tabName){
for(tabLink of tabLinks){
tabLink.classList.remove("active-link");

}


for(tabContent of  tabContents){


    tabContent.classList.remove("active-tab");

}
 addEventListener;{
 document.getElementById(tabName).classList.add("active-tab");
}
}


var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";

}
function closemenu(){
    sidemenu.style.right = "0";
}