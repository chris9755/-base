const arrow = document.querySelector('.fas')
const btn = document.querySelector('.arrow')
const img = document.querySelector('.item1')

function showImage(){
    img.classList.toggle('show')

    if(img.classList.contains('show')){
        arrow.style.rotate = '180deg'
    }else{
        arrow.style.rotate = '0deg';
    }
}

btn.addEventListener('click', showImage)

