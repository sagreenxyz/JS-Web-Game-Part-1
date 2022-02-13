function newImage(imgFile, left, bottom) {
    let image = document.createElement('img');
    image.src = imgFile;
    image.style.position = 'fixed';
    image.style.left = left + 'px';
    image.style.bottom = bottom + 'px';
    document.body.append(image);
    return image;
}

function newItem(itemFile, left, bottom) {
    let item = newImage(itemFile, left, bottom);
    item.addEventListener('dblclick', () => {
        item.remove();
    });
}

for (let x = 0; x < window.innerWidth; x += 100) {
    for (let y = 0; y < window.innerHeight; y += 100) {
        let imgFile;
        newImage((y / window.innerHeight < 0.5) ? 'assets/grass.png' : 'assets/sky.png', x, y);
    }
}

newImage('assets/green-character.gif', 100, 100);
newImage('assets/pine-tree.png', 450, 200);

newImage('assets/tree.png', 200, 300);
newImage('assets/pillar.png', 350, 100);
newImage('assets/crate.png', 150, 200);
newImage('assets/well.png', 500, 425);

newItem('assets/sword.png', 500, 405);
newItem('assets/shield.png', 165, 185);
newItem('assets/staff.png', 600, 100);
