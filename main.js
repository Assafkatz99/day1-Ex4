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

{
  let fav_foods = ["Hummus", "Pasta", "Pizza", "Ice Cream"]
  const food_list = document.getElementById("food_list")
  food_list.innerHTML = "<ol>"
  for (let i = 0; i < fav_foods.length; i++){
    

    if (fav_foods[i] === "Pasta"){
      food_list.innerHTML += `<li><span style="font-family: 'Courier New', Courier, monospace;" >${fav_foods[i]}</span></li>`
    }
    else if (fav_foods[i] === "Pizza"){
      food_list.innerHTML += `<li><strong>${fav_foods[i]}</strong></li>`
    }
    else {
      food_list.innerHTML += `<li>${fav_foods[i]}</li>`
    }

  }
  food_list.innerHTML += "</ol>"
}
