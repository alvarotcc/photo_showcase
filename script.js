const galleries = {
    pasta1: ['imagens/Pasta1/1.webp', 'imagens/Pasta1/2.webp', 'imagens/Pasta1/3.webp'],
    pasta2: ['imagens/Pasta2/1.webp', 'imagens/Pasta2/2.webp', 'imagens/Pasta2/3.webp'],
    pasta3: ['imagens/Pasta3/img1.jpg', 'imagens/Pasta3/img2.jpg', 'imagens/Pasta3/img3.jpg']
};

function openGallery(folder) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '<button id="close-gallery" onclick="closeGallery()">Fechar</button>'; // Reinicia galeria com botão
    if (!galleries[folder]) {
        gallery.innerHTML += '<p>Galeria não encontrada.</p>';
        gallery.style.display = 'flex';
        return;
    }

    galleries[folder].forEach((imgSrc) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = 'Foto da galeria';
        img.onclick = () => openLightbox(imgSrc);
        gallery.appendChild(img);
    });

    gallery.style.display = 'flex';
}

function closeGallery() {
    const gallery = document.getElementById('gallery');
    gallery.style.display = 'none';
}

function openLightbox(imgSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imgSrc;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
