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


const imgArr =[
  {
    imgLink : "https://upload.wikimedia.org/wikipedia/commons/9/94/2013_Australian_Open_-_Guillaume_Rufin.jpg",
    description : "Tennis is a racquet sport played by two or four players in which a ball is hit back and forth across a net.",
    id : "imgNum1"
  },
  {
    imgLink : "http://reneeroaming.com/wp-content/uploads/2020/08/Best-National-Park-Road-Trip-Itinerary-Grand-Teton-National-Park-Van-Life-819x1024.jpg",
    description : "Roadtripping is the act of traveling long distances by car, often for leisure or vacation.",
    id : "imgNum2"
  },
  {
    imgLink : "https://www.goya.com/media/7864/hummus.jpg?quality=80",
    description : "Hummus is a Middle Eastern dip made from chickpeas, tahini, lemon juice, and spices.",
    id : "imgNum3"
  },
]

function sendImgArrToHtmlUsingId (imgarr, elementsId){
  let htmlCode = ""
  for (let i = 0; i < imgarr.length; i++){
    htmlCode += "<div>"
    htmlCode += `<img id= ${imgarr[i].id} src=${imgarr[i].imgLink} /><p style = "width :130px" >${imgarr[i].description}</p>`
    // console.log(document.getElementById(imgarr.id).clientWidth)
    // htmlCode += `<img id= ${imgarr[i].id} src=${imgarr[i].imgLink} />`
    // htmlCode += `<p style="width: ${document.getElementById(imgarr[i].id).clientWidth}px;">${imgarr[i].description}</p>`
    htmlCode += "</div>"
  }
  document.getElementById(elementsId).innerHTML = htmlCode
}

sendImgArrToHtmlUsingId(imgArr,"imgSection")