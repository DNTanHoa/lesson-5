/*
 * This function is used for control slide
 * @param: time for show image cyclely
 * @ret: promise
*/
function controlSlide(time){
	let index = 0;
	var images = document.getElementsByClassName("imagesOfSlide");
	let timer = setInterval(function(){
		displayImage(index++);
		if(index>(images.length-1)){
			index = 0;
		}
		console.log(index);
	},time);
	var nextSlide = document.getElementById('nextSlide');
	nextSlide.addEventListener('click',function(){
		if(index>=(images.length-1)){
			index = 0;
			displayImage(index);
		}
		else{
			index++;
			displayImage(index);
		}
	});
	var backSlide = document.getElementById('backSlide');
	backSlide.addEventListener('click',function(){
		if (index>0) {
			index--;
			displayImage(index);
		}
		else{
			index = images.length-1;
			displayImage(index);
		}
	});
}
/*
 * this image is used to show image with image index
 * @param: image index;
 * @retval: none;
*/
function displayImage(imageIndex){
	var images = [];
	images = document.getElementsByClassName("imagesOfSlide");
	for(var image of images){
		image.style.display = "none";
	}
	images[imageIndex].style.display = "block";
	var sliderText = document.getElementById('sliderText');
	switch(imageIndex){
		case 0:
			sliderText.setAttribute("align","left")
			break;
		case images.length-1:
			sliderText.setAttribute("align","right");			
			break;
		default:
			sliderText.setAttribute("align","center");
	}
}
function showTop(){
	var showButton = document.getElementById('showTop');
	let flag = 0;
	showButton.addEventListener('click',function(){
		var topContent = document.getElementById('topContact');
		if (flag) {
			topContent.style.display = "none";
			flag = 0;
		}
		else{
			topContent.style.display = "block";
			flag = 1;
		}
	});
}
/*
 * for dispalay multislide
*/
function showSlide(index){
  var slides = document.getElementsByClassName('slideItem');
  for(var slide of slides){
    slide.style.display = "none";
  }
  slides[index].style.display = "flex";
  slides[index].style.display = "-ms-flex";
}
function timeDelay(time){
  let index = 0;
  var slides = document.getElementsByClassName('slideItem');
  setInterval(function(){
    if(index >= slides.length-1){
      index = 0;
    }
    showSlide(index++);
  },time)
}
showSlide(0);
timeDelay(5000);
displayImage(0);
controlSlide(5000);
showTop();
