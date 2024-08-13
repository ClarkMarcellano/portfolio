const myIcon = document.querySelector('#icon');

myIcon.onclick = () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')){
        myIcon.src = "images/Light-mode-icon.png";
    }else{
        myIcon.src = "images/Night-mode-icon.png";
    }
}
