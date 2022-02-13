function newImage(imgFile, left, bottom) {
    let image = document.createElement('img');
    image.src = imgFile;
    image.style.position = 'fixed';
    image.style.left = left + 'px';
    image.style.bottom = bottom + 'px';
    document.body.append(image);
    return image;
}

newImage('assets/green-character.gif', 100, 100);
newImage('assets/pine-tree.png', 450, 200);


newImage('assets/tree.png', 200, 300);
newImage('assets/pillar.png', 350, 100);
newImage('assets/crate.png', 150, 200);
newImage('assets/well.png', 500, 425);

let sword = newImage('assets/sword.png', 500, 405);
sword.addEventListener('click', () => {
    sword.remove();
})