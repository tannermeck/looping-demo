export function renderBlueSquareRedCircle(){
    //return html element that is:
    //<div class="blue square"
    //    <div class="red cirlce"
    const blueSquare = document.createElement('div');
    blueSquare.classList.add('blue');
    blueSquare.classList.add('square');
    const redCircle = document.createElement('div');
    redCircle.classList.add('red');
    redCircle.classList.add('circle');

}
