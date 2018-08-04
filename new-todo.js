//Create variable and select todo list
var list = document.getElementsByTagName("li");
//Create eventListener for hover and click events
for(var i = 0; i < list.length; i++){
    //Add action for when mouse is over individual lists
    list[i].addEventListener("mouseover", function(){
        this.classList.add("selected");
    });
    //Add action for when mouse leaves individual list //mouseleave works here too
    list[i].addEventListener("mouseout", function(){
        this.classList.remove("selected");
    });
    //Add action for when an item is clicked
    list[i].addEventListener("click", function(){
        this.classList.toggle("done");
    });
}