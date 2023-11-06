const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let arrowLeft   = document.querySelector('.arrow_left')
let arrowRight  = document.querySelector('.arrow_right')
let img 		= document.querySelector('.banner-img')
let dots 		= document.querySelectorAll('.dot')
let dotSelected = 0
// index de l'image affichée
let indexImg	= 0
let p 			= document.querySelector('p')
console.log(arrowLeft)
console.log(arrowRight)
console.log(img)
console.log(dots)

// ***********les evenements**************


// Le boutton suivant
arrowRight.addEventListener('click', ()=> {
	// incrementé les index pous les images et pour les points de repère
	dotSelected = (dotSelected +1) % dots.length
	indexImg	= (indexImg +1 ) % slides.length

	// mette à jour la source d'image
	img.src = slides[indexImg].image
	p.innerHTML=slides[indexImg].tagLine

	// mettre à jour le point de repère
	for(let index in dots){

		if(index == dotSelected){
			dots[index].className = 'dot dot_selected'
		}else{
			dots[index].className = 'dot'
		}
	}

})

// le boutton précédent
arrowLeft.addEventListener('click', ()=> {
	// incrementé les index pous les images et pour les points de repère
	dotSelected = (dotSelected-1 + dots.length) % dots.length

	indexImg	= (indexImg-1 + slides.length)%slides.length

	// mette à jour la source d'image
	img.src = slides[indexImg].image
	p.innerHTML=slides[indexImg].tagLine

		// mettre à jour le point de repère
	for(let index in dots){

		if(index == dotSelected){
			dots[index].className = 'dot dot_selected'
		}else{
			dots[index].className = 'dot'
		}
	}

})