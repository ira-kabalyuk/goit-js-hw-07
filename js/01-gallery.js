import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');


const item = galleryItems.map(({preview, original, description}) => 
  `<div class="gallery__item">
  <a href="${original}" class="gallery__link">
  <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">  
  </a>
  </div>`
).join("");

gallery.insertAdjacentHTML("afterbegin", item);

gallery.addEventListener('click', onclick);

let instance;

function onclick(event) {
  event.preventDefault();
  
  if (event.target.nodeName !== 'IMG') {
    return;
  }  

  instance = basicLightbox.create(`
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`);
  instance.show()
}

document.addEventListener('keydown', onCloseModal);

function onCloseModal(event) {
  if (event.key === 'Escape') {
  
  instance.close();
  }
}