function newImage(imgFile, left, bottom) {
    let greenCharacter = document.createElement('img')
    greenCharacter.src = imgFile
    greenCharacter.style.position = 'fixed'
    greenCharacter.style.left = left + 'px'
    greenCharacter.style.bottom = bottom + 'px'
    document.body.append(greenCharacter)
}

newImage('assets/green-character.gif', 100, 100);
newImage('assets/pine-tree.png', 450, 200);


newImage('assets/tree.png', 200, 300);
newImage('assets/pillar.png', 350, 100);
newImage('assets/crate.png', 150, 200);
newImage('assets/well.png', 500, 425);