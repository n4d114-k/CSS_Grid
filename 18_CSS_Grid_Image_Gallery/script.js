const GALLERY = document.querySelector('.gallery');
const OVERLAY = document.querySelector('.overlay');
const OVERLAY_IMAGE = OVERLAY.querySelector('img');
const OVERLAY_CLOSE = OVERLAY.querySelector('.close');


function generateHTML([h, v]) {
  return `
  <div class="item h${h} v${v}">
    <img src="../assets/images/image_gallery/${randomNumber(12)}.jpg">
    <div class="item__overlay">
      <button>View →</button>
    </div>
  </div>
  `;
}


function randomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}


function handleClick(ev) {
  const src = ev.currentTarget.querySelector('img').src;
  OVERLAY_IMAGE.src = src;
  OVERLAY.classList.add('open');
}


function close() {
  OVERLAY.classList.remove('open');
}


const DIGITS = Array.from({ length: 50 }, () => [randomNumber(4), randomNumber(4)])
    .concat([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1],
       [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]])
const HTML = DIGITS.map(generateHTML).join('');


GALLERY.innerHTML = HTML;


const ITEMS = document.querySelectorAll('.item');


ITEMS.forEach(item => item.addEventListener('click', handleClick));


OVERLAY_CLOSE.addEventListener('click', close);
