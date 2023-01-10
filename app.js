document.onload(func());


function func(){
let container = document.getElementById('frame')
for (let i = 0; i <= 1023; i++) {
    let boxes = document.createElement('div');
    boxes.id = 'box'
    container.appendChild(boxes);

    boxes.addEventListener("pointermove", function () {

        boxes.style.backgroundColor = 'white'

    })
  
}
}





