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
