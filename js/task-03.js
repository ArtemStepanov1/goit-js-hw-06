const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesEl = document.querySelector('.gallery');

const makeImages = (image) => {
  const {url, alt} = image;
  return `<li class = "gallery__item"><img src=${url} alt="${alt}" class="gallery__img" width = "600px" height = "400"/></li>`;
};

const makeImagesList = images.map(makeImages).join("");
console.log(makeImagesList);
imagesEl.insertAdjacentHTML("afterbegin", makeImagesList);

imagesEl.style.cssText = 'display: flex; list-style: none';

const galleryItemEl = document.querySelectorAll('.gallery__item');
console.log(galleryItemEl);

const itemEl = galleryItemEl.forEach(elem => elem.style.margin = "30px");

