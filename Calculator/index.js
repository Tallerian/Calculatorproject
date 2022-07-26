console.log('hello worlds');

let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', e => {
    switch(e.target.innerText){
        case'C':
            display.innerText = '';
            break; // we break to remove C in the display box
        
        case 'DEL':
            console.log(e.target.innerText);
            display.innerText = display.innerText.slice(0,-4); //To remove DEL+the prev entered
            break;
        
        case '=':
            try{
                display.innerText=eval(display.innerText);
            } catch{
                display.innerText = "Syntax Error";
            }
            break;
        default:
            display.innerText = display.innerText + e.target.innerText;
    }
    })
});