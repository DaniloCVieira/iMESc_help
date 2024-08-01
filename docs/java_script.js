var image = document.getElementById("likes"),
    button = document.getElementById("pause");

if (image.classList && image && button) {
    button.onclick = function() {
        if (this.value == 'pause') {
            image.classList.add('pause');
            this.value = 'play';
        } else {
            image.classList.remove('pause');
            this.value = 'pause';
        }
    };
}

