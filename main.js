const handleClick = function(id){
    console.log("Element Clicked")
    document.getElementById(id).style.color = "blue";
}

function delayHandleClick (Id){
    setTimeout(() => handleClick(Id),3000);
}