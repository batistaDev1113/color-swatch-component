// grab container where preview appears
const preview = document.querySelector('.container-preview'); 
// grab espan inside of preview section
const spanColorInfo = document.querySelector('.container-preview span');

// element with color description
const colorName = document.getElementById('color-name');
// element with color in hex value
const hexValue = document.getElementById('hex');
//element with color in rgb value
const rgbValue = document.getElementById('rgb');
// grab parent element where the color childs live
const colorSection = document.querySelector('.container-color-section')


//listen for click event on parent element and grab the className fo the element clicked
colorSection.addEventListener('click', function(e) {
  switch(e.target.className) {
    case "color-red":
      preview.style.background = "#E63946";
      colorName.innerText = "Color Name: Imperial Red";
      hexValue.innerText = "HEX: #E63946";
      rgbValue.innerText = "RGB: 230,57,70"
      break;
    case "color-blue":
      preview.style.background = "#1D3557";
      colorName.innerText = "Color Name: Prussian Blue";
      hexValue.innerText = "HEX: #1D3557";
      rgbValue.innerText = "RGB: 29,53,87"
      break;
    case "color-purple":
      preview.style.background = "#7400b8";
      colorName.innerText = "Color Name: Purple";
      hexValue.innerText = "HEX: #7400b8";
      rgbValue.innerText = "RGB: 116,0,184"
      break;
    case "color-yellow":
      preview.style.background = "#fcbf49";
      colorName.innerText = "Color Name: Maximum Yellow Red";
      hexValue.innerText = "HEX: #fcbf49";
      rgbValue.innerText = "RGB: 252,191,73"
      break;
    case "color-aqua":
      preview.style.background = "#72efdd";
      colorName.innerText = "Color Name: Turquoise";
      hexValue.innerText = "HEX: #72efdd";
      rgbValue.innerText = "RGB: 114,239,221"
      break;
    case "color-slate-blue":
      preview.style.background = "#5E60CE";
      colorName.innerText = "Color Name: Slate Blue";
      hexValue.innerText = "HEX: #5E60CE";
      rgbValue.innerText = "RGB: 94,96,206"
      break;
      default:
        preview.style.background = "#edf6f9";
  }
});

// I could've also use nested if else statements like below to achieve the same result
/*colorSection.addEventListener('click', function(e){
  if(e.target.className == "color-red") {
    preview.style.background = "red";
  } else if(e.target.className == "color-blue"){
    preview.style.background = "blue";
  } else if(e.target.className == "color-purple") {
    preview.style.background = "purple";
  } else if(e.target.className == "color-yellow") {
    preview.style.background = "yellow";
  }
});*/