



let container = document.getElementById('frame')
for (let i = 0; i <= 1023; i++) {
    let box = document.createElement('div');
    box.classList.add('box')
    container.appendChild(box)

  box.addEventListener('mousemove', function () {

        box.style.backgroundColor = 'white'
    })
}




