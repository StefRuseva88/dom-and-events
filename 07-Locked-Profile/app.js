function lockedProfile() {
    let buttons = document.getElementsByTagName("button");
    let radioButtons = document.querySelectorAll("input[type='radio']");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', showInfo);
    }

    function showInfo(event) {
        let lockRadioButton = event.target.parentNode.children[2];
        let hiddenDiv = event.target.previousElementSibling;

        if(lockRadioButton.checked == false) {
            if(event.target.textContent == "Hide it") {
                hiddenDiv.style.display = "none";
                event.target.textContent = "Show more";
            }
            else {
                hiddenDiv.style.display = "inline";
                event.target.textContent = "Hide it";
            }
        }
    }
}