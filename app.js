// import functions and grab DOM elements
const squares = document.querySelectorAll('.square');
const button = document.getElementById('make-red');
const circleButton = document.getElementById('make-circles');
const mainSection = document.querySelector('main-section');

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  //PSEUDO CODE
  //Grab all blue squares
  //remove blue class and add red class
button.addEventListener('click', () => {
    for (let square of squares){
        square.classList.add('red');
        square.classList.remove('blue');
    }
});
// Add red circles
circleButton.addEventListener('click', () => {
    for (const s of squares) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('red');
        newDiv.classList.add('circle');
        s.appendChild(newDiv);

    }
});
// Create 6 blue squares when the page loads
for (let i = 0; i < 6; i++){
    let blueSquare = document.createElement('div');
    blueSquare.classList.add('square');
    blueSquare.classList.add('blue');
    mainSection.append(blueSquare);
}