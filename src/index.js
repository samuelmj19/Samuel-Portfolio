

new simpleParallax(parallaxBackground, {
	delay: 1.6,
	transition: 'cubic-bezier(0,0,0,1)',
    scale: 1.5
});

let projectsCardArray = [];

class projectsCardClass {
	constructor(
		projectName,
		projectImg, 
		delay
	){
		this.projectName = projectName,
		this.projectImg = projectImg,
		this.delay = delay
	};
	
}



const dataCardPusher = (name, itemImg, delay)=>{
	projectsCardArray.push(new projectsCardClass(
		name,
		itemImg,
		delay
	))
}
dataCardPusher('youtube','https://www.youtube.com/img/desktop/yt_1200.png', 500)
dataCardPusher('inazuma', '../public/20220621020225.png', 750)
dataCardPusher('Lyue', '../public/20220621020547.png', 1000)
dataCardPusher('Enkanomya', '../public/20220621020851.png', 1250)
dataCardPusher('Mi casa', '../public/20220621020851.png', 1500)
dataCardPusher('konoha', '../public/20220621021040.png',1750)

function projectsCardsMaker(){
	projectsCardArray.forEach(card =>{
		const divContainer = document.createElement('div');
		const articleProjectCard = document.createElement('article');
		const cardImg = document.createElement('img');
		const cardName = document.createElement('h3');
		const btnContainer = document.createElement('div');
		const DemoBtn = document.createElement('Button');
		const RepoBtn = document.createElement('Button');

		divContainer.setAttribute('data-aos', 'fade-up');
		divContainer.setAttribute('data-aos-anchor-placement', 'bottom-bottom');
		divContainer.setAttribute('data-aos-delay', card.delay);

		articleProjectCard.classList.add('projects-card');

		cardImg.classList.add('projects-card-img');
		cardImg.setAttribute('src', card.projectImg);

		cardName.innerText = card.projectName;

		btnContainer.classList.add('project-card-btn-container');
		DemoBtn.classList.add('project-card-btn');
		DemoBtn.innerHTML= 'Demo';
		RepoBtn.classList.add('project-card-btn');
		RepoBtn.innerHTML= 'Repo';

		btnContainer.appendChild(DemoBtn);
		btnContainer.appendChild(RepoBtn);
		articleProjectCard.appendChild(cardImg);
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