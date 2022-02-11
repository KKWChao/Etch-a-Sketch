// Declarables

const game_div = document.getElementById('game');
const game_container_div = document.getElementById('game-container');
const reset_Button = document.getElementById('reset');
const color_Button = document.getElementById('colorChange');
let userRange_input = document.getElementById('userRange');

//               Game Logic



// resetter

function resetter() {
  reset_Button.addEventListener("click", () =>{ 
    document.getElementById("gridItem").style.background = '';
  })
}

// remove child divs for div resizing
function clearOut() {
  while (game_container_div.hasChildNodes()) {
    game_container_div.removeChild(game_container_div.firstChild)
  }
}

// Random Color 
function randomColor() {
  let x = Math.floor(Math.random()* 256)
  let y = Math.floor(Math.random()* 256)
  let z = Math.floor(Math.random()* 256)

  return "rgb("+ x + "," + y + "," + z +")"
}




// Div Creator
function divCreator(userInput) {
  clearOut()
  let gridArea = userInput * userInput;

  game_container_div.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
  game_container_div.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;

  for (i=0; i<gridArea; i++) {
    const gridItem = document.createElement('div');
    color_Button.addEventListener('change', () => {
      
      if (color_Button.checked) {
        gridItem.addEventListener('mouseover', () => {
          gridItem.style.background = randomColor();
        })

      } else {
        gridItem.addEventListener('mouseover', () => {
          gridItem.style.background = 'black'
        })
      }
    })

    gridItem.addEventListener('mouseover', () => {
      gridItem.style.background = 'black'
    })

    reset_Button.addEventListener('click', () => {
      gridItem.style.background = 'lightgray'
    })

    game_container_div.append(gridItem);
  }
}



//             Main Function

function main() {

  divCreator(10);

  userRange_input.addEventListener('change',()=>{
    divCreator(document.getElementById('userRange').value);
  })

  userRange_input.addEventListener('input',()=>{
    divCreator(document.getElementById('userRange').value);
  })
  
  console.log(color_Button.value)
  randomColor();
};

main();