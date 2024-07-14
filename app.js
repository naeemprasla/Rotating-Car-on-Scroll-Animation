AOS.init();

//Car Rotator on Scroll	
var $container = $(document);
var $bgImage = $(".test");

$container.scroll(function(event) {
	var position = $container.scrollTop();
	setBgImage(position);
});


// preload the given total amount of iamges
function create(totalImages) {
	for (var i = 0; i < totalImages; i++) {
        var img = $('<img/>')
        img[0].src = getImgUrl(i);
        $bgImage.append(img)
    }
    setBgImage(0)
}

create(60);

function setBgImage(position){
	var imageNum;
	var lineCount = 0;
	
    imageNum = parseInt(position  / 100 * 6);

	//console.log("IMG: " + imageNum + ", Position: " + position);
	
    $bgImage.find("img").hide().eq(imageNum).show()
}


function getImgUrl(num){
	if(num > 9){
		return "/images/image (" + num + ").jpg"; 
	}else{
		return "/images/image (" + num + ").jpg"; 
	}
     
}
	
	
	
//Hero Text Marquee on scroll
const second = document.getElementById("second")

const container = document.getElementById("container")
//const rect = container.getBoundingClientRect()

const animate = (element,position) => {
     element.style.transform = `translateX(${position}px)`
} 

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;
    
   window.requestAnimationFrame(function() {
      animate(second,lastKnownScrollPosition*-.5)     
    });
});
	
	