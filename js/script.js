//Task One

var collect = document.querySelector("#tag-line").innerHTML + "\n--------------------------------------------\n";
var bgMainContent = document.querySelector(".bg-main-content");
var headings = bgMainContent.getElementsByTagName("h2");

for (var i = 0; i < headings.length; i++) {
    collect += headings[i].innerHTML + "\n";
}

alert(collect);


//Task Two

var when_to_launch = bgMainContent.getElementsByClassName("box")[12].children;

var collectAgain = when_to_launch[0].innerHTML + "\n------------------\n";

for (var j = 1; j < when_to_launch.length; j++) {
    collectAgain += when_to_launch[j].innerHTML + "\n\n";
}

alert(collectAgain);