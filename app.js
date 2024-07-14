
//Car Rotator on Scroll	
var $container = $(document);
var $bgImage = $(".test");

$container.scroll(function(event) {
	var position = $container.scrollTop();
	setBgImage(position);
});


// preload the given total amount of iamges
function create(totalImages) {
	for (var i = 1; i < totalImages; i++) {
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
	
    imageNum = parseInt(position  / 100 * 5);

	//console.log("IMG: " + imageNum + ", Position: " + position);
	
    $bgImage.find("img").hide().eq(imageNum).show()
}


function getImgUrl(num){
	if(num > 9){
		return "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/"+num+".png"; 
	}else{
		return "https://res.cloudinary.com/dewn0wy2s/image/upload/v1592668487/360/"+num+".png"; 
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
	
	