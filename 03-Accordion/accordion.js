function toggle() {
    let textDiv = document.getElementById('extra');
    let button = document.getElementsByClassName('button')[0];
    if (button.textContent === 'More') {
        textDiv.style.display = 'block';
        button.textContent = 'Less';
    }
    else {
        textDiv.style.display = 'none';
        button.textContent = 'More';
    }
}