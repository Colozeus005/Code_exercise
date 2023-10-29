function increase(event) {
    document.body.style.setProperty('--space', event.target.value);
  }
  document.getElementById('range').addEventListener('input', increase);


const input = document.getElementById('background');

function hexToRgb(hex) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function change() {
  let color = input.value;
  let { r, g, b } = hexToRgb(color);
  document.documentElement.style.setProperty('--red', r);
  document.documentElement.style.setProperty('--green', g);
  document.documentElement.style.setProperty('--blue', b);
  console.log(color);
}

input.addEventListener('input', change);
input.addEventListener('change', change);

function setTheme() {
  const root = document.documentElement;
  const newTheme = root.className === 'dark' ? 'light' : 'dark';
  root.className = newTheme;
  
  document.querySelector('.theme-name').textContent = newTheme;
}

document.querySelector('.theme-toggle').addEventListener('click', setTheme)