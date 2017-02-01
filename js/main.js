var links = document.getElementsByTagName('a');
var sliderLinks = document.querySelectorAll('.sliderLink');
var slides = document.querySelectorAll('.slide');
function noClick(e) {
	e.preventDefault();
	return false;
}
function sliderClick(e) {
    e.preventDefault();
    var position = ['1%', '21%', '41%', '61%', '81%'];
    for (var j = 0 ; j < sliderLinks.length; j++) {
        if (this == sliderLinks[j]) {
        	document.querySelector('.progressbar__scroll').style.left = position[j];
            for (var k = 0 ; k < slides.length; k++) {
                if (j != k) {
                    slides[k].style.display = 'none';
				}
                if (j == k) {
                    slides[k].style.display = 'block';
				}

            }
        }

    }
}
(function () {
	for (var i = 0 ; i < links.length; i++) {
		links[i].addEventListener("click", noClick, false);
	}
    for (var j = 0 ; j < sliderLinks.length; j++) {
        sliderLinks[j].addEventListener("click", sliderClick, false);
    }

})();