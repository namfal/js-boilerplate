import Image from './js.png'

const img = document.createElement('img')
img.src = Image
img.classList.add('small-img')

const div = document.createElement('div')

div.appendChild(img)
document.querySelector('body').appendChild(div)
