let okno = document.querySelector('.okno')
let box = document.querySelector('.box')
let svg = document.querySelector('.svg')
let bx = document.querySelector('.bx')
let menyu = document.querySelector('.menyu')
let svg1 = document.querySelector('.svg1')
let cont = document.querySelector('.conteiner')
let b = document.querySelector('.b')


okno.addEventListener('click', () => {
    box.style.display = 'block'
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.47)'
    okno.style.filter = 'blur(2px)'
})

svg.addEventListener('click', () => {
    box.style.display = 'none'
    document.body.style.backgroundColor = '#fff'
    okno.style.filter = 'blur()'

})

// b.addEventListener('click', (e) => {
    
//     console.log(e.target);
//     if (e.target === b) {
//         box.style.display = 'block'
//         console.log('click');
//         document.body.style.overflow = ''
//     }
// })

bx.addEventListener('click', () => {
    menyu.style.positionAbsolute
    menyu.style.right = '0'
    bx.style.display = 'none'
    okno.style.filter = 'blur(2px)'
})

svg1.addEventListener('click', () => {
    menyu.style.positionAbsolute
    menyu.style.right = '-500px'
    bx.style.display = 'block'
    okno.style.filter = 'blur()'
})

