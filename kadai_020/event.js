const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  //この一文が正解　text.textContent = 'ボタンをクリックしました';
  const h2 = document.createElement('h2');
  h2.textContent = 'ボタンをクリックしました';
  text.appendChild(h2);
  //text.remove();
  
  text.textContent = 'ボタンをクリックしました';
})
