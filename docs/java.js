// !preview r2d3 data=c(0.3, 0.6, 0.8, 0.95, 0.40, 0.20)
//
// r2d3: https://rstudio.github.io/r2d3
//

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
