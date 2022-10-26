
window.addEventListener('DOMContentLoaded', () => {
  
  let color1 = document.querySelector('.color1');
  let color2 = document.querySelector('.color2');
  let color3 = document.querySelector('.color3');
  let color4 = document.querySelector('.color4');
  let color5 = document.querySelector('.color5');
  
  let textColor1 = document.querySelector('.text-color1');
  let textColor2 = document.querySelector('.text-color2');
  let textColor3 = document.querySelector('.text-color3');
  let textColor4 = document.querySelector('.text-color4');
  let textColor5 = document.querySelector('.text-color5');
  
  function setColor() {
    // masukkan kode warna kedalam variabel lebih dahulu
    let c1 = getRandomColor();
    let c2 = getRandomColor();
    let c3 = getRandomColor();
    let c4 = getRandomColor();
    let c5 = getRandomColor();
    // set warna menjadi sebuah background
    setBackgroundColor(color1, c1);
    setBackgroundColor(color2, c2);
    setBackgroundColor(color3, c3);
    setBackgroundColor(color4, c4);
    setBackgroundColor(color5, c5);
    // set kode warna kedalam bentuk text
    textColor1.innerText = c1;
    textColor2.innerText = c2;
    textColor3.innerText = c3;
    textColor4.innerText = c4;
    textColor5.innerText = c5;
  }
  
  setColor();
  
  function setBackgroundColor(element, color) {
    return element.style.background = color;
  }
  
  function getRandomColor() {
    let string = '0123456789abcdef';
    let result = '#';
    for ( let i = 0; i < 6; i++ ) {
      result += string[Math.floor(Math.random() * string.length)];
    }
    return result;
  }
  
  // tombol generate
  const generate = document.querySelector('.generate');
  generate.addEventListener('click', setColor);
  
});