
new simpleParallax( parallaxBackground, {
	delay: 1.6,
	transition: 'cubic-bezier(0,0,0,1)',
	scale: 1.5,
	orientation: 'right'
});
new simpleParallax( stacksParallaxBackground, {
	orientation: 'up',
	delay:1.3,
	scale: 1.3,
	transition: 'cubic-bezier(0,0,0,1)',
});




// const createParallaxEffect= ({
// 	background, 
// 	orientation= 'up'
// })=>{
// 	new simpleParallax( background, {
// 		delay: 1.6,
// 		transition: 'cubic-bezier(0,0,0,1)',
// 		scale: 1.3,
// 		orientation,
// 	});
// }
// createParallaxEffect({background: parallaxBackground, orientation: 'right'});
// createParallaxEffect({ background: stacksParallaxBackground, orientation: 'right'});

let projectsCardArray = [];

class projectsCardClass {
	constructor(
		projectName,
		projectImg, 
		delay,
		demoUrl,
		repoUrl
	){
		this.projectName = projectName,
		this.projectImg = projectImg,
		this.delay = delay,
		this.demoUrl = demoUrl,
		this.repoUrl = repoUrl
	};
	
}



const dataCardPusher = (name, itemImg, delay, demoUrl, repoUrl)=>{
	projectsCardArray.push(new projectsCardClass(
		name,
		itemImg,
		delay,
		demoUrl,
		repoUrl
	))
}
dataCardPusher('Sam Movies','../public/SamMovies.png', 500, 'https://samuemj19-sam-movies.netlify.app/' ,'https://github.com/samuelmj19/Platzi-movie' )
dataCardPusher('StarBucks Clone','../public/StarBucks-clone.png', 500, 'https://samuelmj19.github.io/StarBucks-clone/' ,'https://github.com/samuelmj19/StarBucks-clone' )
dataCardPusher('Sam Shop','../public/SamShop.png', 500, 'https://samuelmj19-samshop.netlify.app/' ,'https://github.com/samuelmj19/SamShop' )
dataCardPusher('Twitter Clone','../public/Twitter-clone.png', 0, 'https://samuelmj19.github.io/twitter-clone/' ,'https://github.com/samuelmj19/twitter-clone/tree/master' )
dataCardPusher('Clock','../public/Clock.png', 500, 'https://samuelmj19.github.io/clock/' ,'https://github.com/samuelmj19/clock' )
dataCardPusher('Sam Weather','../public/sm-weather.png', 500, 'https://samuelmj19-sam-weather.netlify.app/' ,'https://github.com/samuelmj19/sm-weather' )
dataCardPusher('PokeDex','../public/Pokedex.png', 500, 'https://samuelmj19.github.io/PokeDex/' ,'https://github.com/samuelmj19/PokeDex' )
dataCardPusher('RPS MINI GAME','../public/RPS.png', 500, 'https://samuelmj19.github.io/Piedra-papel-tiejera/' ,'https://github.com/samuelmj19/Piedra-papel-tiejera' )

function projectsCardsMaker(){
	projectsCardArray.forEach(card =>{
		const divContainer = document.createElement('div');
		const articleProjectCard = document.createElement('article');
		const cardImg = document.createElement('img');
		const cardName = document.createElement('h3');
		const btnContainer = document.createElement('div');
		const hoverBackground = document.createElement('div');
		const DemoBtn = document.createElement('a');
		const RepoBtn = document.createElement('a');

		divContainer.setAttribute('data-aos', 'fade-up');
		divContainer.setAttribute('data-aos-anchor-placement', 'bottom-bottom');
		divContainer.setAttribute('data-aos-delay', card.delay);

		articleProjectCard.classList.add('projects-card');

		hoverBackground.classList.add('projects-card-hover_background')

		cardImg.classList.add('projects-card-img');
		cardImg.setAttribute('src', card.projectImg);
		cardImg.setAttribute('loading', 'lazy');

		cardName.innerText = card.projectName;

		// btnContainer.classList.add('project-card-btn-container');
		// DemoBtn.classList.add('project-card-btn');
		DemoBtn.setAttribute('href', card.demoUrl)
		DemoBtn.setAttribute('target', '_blank')
		DemoBtn.style.height= '100%'
		// DemoBtn.innerHTML= 'Demo';
		// RepoBtn.classList.add('project-card-btn');
		// RepoBtn.innerHTML= 'Repo';
		// RepoBtn.setAttribute('href', card.repoUrl)
		

		DemoBtn.appendChild(cardImg);
		// btnContainer.appendChild(RepoBtn);
		articleProjectCard.appendChild(hoverBackground);
		articleProjectCard.appendChild(DemoBtn);
		articleProjectCard.appendChild(cardName);
		articleProjectCard.appendChild(btnContainer);
		divContainer.appendChild(articleProjectCard);
		projectsCardContainer.appendChild(divContainer);

	// 	projectsCardContainer.innerHTML +=`<div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
	// 	<article  class="projects-card">
	// 			<img src="${card.projectImg}" alt="" class="projects-card-img">
	// 			<h3>${card.projectName}</h3>
	// 			<div class="project-card-btn-container">
	// 				<Button class="project-card-btn">Demo</Button>
	// 				<Button class="project-card-btn">Repo</Button>
	// 			</div>
	// 		</article>
	// </div>`
})}		

projectsCardsMaker();
console.log(projectsCardArray)


stacksBackground.addEventListener('mousemove', function(e){
	let x = e.offsetX;
	let y = e.offsetY;
	let particles = document.createElement('span');
	particles.classList.add('particles')
	particles.style.left = (x) + 'px'
	particles.style.top = y + 'px'

	let size = Math.random() * 3;
	particles.style.width = 2 + size+'px';
	particles.style.height = 2 + size+'px';

	let transformValue = Math.random() * 360;
	particles.style.transform = `rotate(${transformValue}deg)`;

	stacksBackground.appendChild(particles);

	setTimeout(()=>{
		particles.remove()
	}, 2000)
})