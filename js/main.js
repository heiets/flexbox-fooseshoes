var links = document.getElementsByTagName('a');
var sliderLinks = document.querySelectorAll('.sliderLink');
var slides = document.querySelectorAll('.slide');
var menuButton = document.querySelector('.showMenu');
function noClick(e) {
	e.preventDefault();
	return false;
}
function showMenu() {
    var ul = document.getElementsByClassName('menuUl')[0]
    if (ul.getAttribute('class') == 'menuUl menuHide') {
        ul.setAttribute('class','menuUl menuShow');
        menuButton.setAttribute('class','showMenu active');
    }
    else {
        menuButton.setAttribute('class','showMenu no-active');
        ul.setAttribute('class','menuUl menuHide');
    }
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
    menuButton.addEventListener("click", showMenu, false);
	for (var i = 0 ; i < links.length; i++) {
	    if (links[i].className != 'vklink') links[i].addEventListener("click", noClick, false);
	}
    for (var j = 0 ; j < sliderLinks.length; j++) {
        sliderLinks[j].addEventListener("click", sliderClick, false);
    }
})();