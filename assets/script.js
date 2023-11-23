const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
	
]

let arrowLeft   = document.querySelector('.arrow_left')
let arrowRight  = document.querySelector('.arrow_right')
let img 		= document.querySelector('.banner-img')
let dots 		= document.querySelector('.dots')
let p 			= document.querySelector('p')


// index des éléments affichés
let indexShowSlide	= 0

// Création des points de repere

for(let i=0; i<slides.length; i++){
	let dot = document.createElement('div')
	dot.className ='dot'
	dots.append(dot)
}

// fonction de mise à jour du point de repere

function showSlide(indexOfElement){
		// mettre à jour l'image
		img.src = slides[indexOfElement].image
		p.innerHTML=slides[indexOfElement].tagLine
	
		// mettre à jour le point de repère
		for(let index in dots.children){
	
			if(index == indexOfElement){
				dots.children[index].className = 'dot dot_selected'
			}else{
				dots.children[index].className = 'dot'
			}
		}

}
// ***********les evenements**************


// Le boutton suivant
arrowRight.addEventListener('click', ()=> {
	// incrementé les index pour les images et pour les points de repère
	indexShowSlide	= (indexShowSlide +1 ) % slides.length

	showSlide(indexShowSlide)
})

// le boutton précédent
arrowLeft.addEventListener('click', ()=> {
	// incrementé l' ndex pour les images et pour les points de repère
	indexShowSlide	= (indexShowSlide-1 + slides.length)%slides.length

	showSlide(indexShowSlide)
})


// on appelle la fonction ici pour montrer toujours le premier repere
showSlide(indexShowSlide)