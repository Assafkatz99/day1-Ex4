const handleClick = function(id){
    // console.log("Element Clicked")
    document.getElementById(id).style.color = "blue";
}

function delayHandleClick (Id){
    setTimeout(() => handleClick(Id),3000);
}

function darnkModeFunction() {
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
    document.querySelector('.header').classList.remove('dark-mode-header');
    document.querySelector('.Headline').classList.remove('dark-mode-Headline');
    document.querySelector('.footer').classList.remove('dark-mode-footer');
  } else {
    document.body.classList.add('dark-mode');
    document.querySelector('.header').classList.add('dark-mode-header');
    document.querySelector('.Headline').classList.add('dark-mode-Headline');
    document.querySelector('.footer').classList.add('dark-mode-footer');
  }
}
