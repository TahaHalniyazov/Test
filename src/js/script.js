function toggleDropdown() {
    let dropdownContent = document.querySelector('.dropdown-content');
    let rotateSVG = document.querySelector('.rotateSVG');

    
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.opacity = '0';
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
        setTimeout(() => {
            dropdownContent.style.opacity = '1';
        }, 0);
    }

    
    let currentRotation = parseInt(rotateSVG.getAttribute('data-rotation') || 0);
    let newRotation = (currentRotation + 180) % 360;

    
    rotateSVG.style.transform = 'rotate(' + newRotation + 'deg)';
    rotateSVG.setAttribute('data-rotation', newRotation);
}
