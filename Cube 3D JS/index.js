const cube = document.querySelector('.cube');
const container = document.querySelector('.cube-container');

// Turn cube on mousemove
container.addEventListener('mousemove', (e) => {

    rotY = e.clientX;
    rotZ = e.clientY;

    cube.style.animation = 'none';
    cube.style.transform = 'rotateY(' + rotY + 'deg) rotateZ(' + rotZ + 'deg)';
    cube.style.transition = '0.5s ease-out';

    container.addEventListener('mouseleave', () => {
        cube.style.animation = 'spin 1500s infinite linear';
    });
});

// Turning cube using arrow
document.body.addEventListener('click', function(e) {

    //Pick a random face
    const classes =['front', 'back', 'top', 'bottom', 'right', 'left'];
    classToUse = classes[Math.floor(Math.random() * classes.length)];

// insure to pick a new class each time
if (cube.classList.contains(classToUse)) {
    classToUse = classes[Math.floor(Math.random() * classes.length)];
}

    // ADD Class to show random face
    if(e.target.classlist.container('arrow')){
        cube.classList.remove('front', 'back', 'top', 'bottom', 'right', 'left');
        cube.classList.add(classToUse);
        cube.style.animation = 'none';
        cube.style.transition = '1.2s ease';
    }
})

// Restart animation whien leaving arrow
document.querySelector('arrow').forEach(item => {
    item.addEventListener('mouseleave', () => {
        cube.style.animation = 'spin 1500s infinite linear';
        cube.classList.remove('front', 'back', 'top', 'bottom', 'right', 'left');

    });
});






