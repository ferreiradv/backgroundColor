let inputColor = document.querySelector('#color');

inputColor.addEventListener('input',(e)=>{
    let color = e.target.value;
    document.body.style.backgroundColor = color;
});