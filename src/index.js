const image = document.getElementsByClassName('profile-background');
new simpleParallax(image, {
	delay: 1.6,
	transition: 'cubic-bezier(0,0,0,1)',
    scale: 1.5
});