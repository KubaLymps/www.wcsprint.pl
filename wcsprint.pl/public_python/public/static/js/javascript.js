const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const fullscreen = document.createElement('div');
    fullscreen.classList.add('fullscreen');

    const img = document.createElement('img');
    img.src = item.querySelector('img').src;
    fullscreen.appendChild(img);

    document.body.appendChild(fullscreen);

    fullscreen.addEventListener('click', () => {
      fullscreen.remove();
    });
  });
});
