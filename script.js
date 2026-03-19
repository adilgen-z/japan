 function locomotiveScroll() {
   gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


}
locomotiveScroll();
 function loadingAnimation(){
   
 var tl = gsap.timeline()

 tl.from(".line h1" ,{
     y: 150,
     stagger: 0.25,
    duration: 0.6,
    delay: 0.5,

 });



 tl.from('.line1-part1',{ 
 opacity: 0,

 onStart: function(){
 var h5timer = document.querySelector(".line1-part1 h5");
 var counter = 0;
 setInterval(function(){
     if(counter<100){
         h5timer.innerHTML = counter++;

     }else{
         h5timer.innerHTML = counter;
     }
 }, 25);
 }
 });
 tl.to('.line h2',{
     animationName: 'anime',
     opacity: 1,
     delay: -.5,
 })
 tl.to(".line2 h5",{
    opacity: 1,

 }, "-=.5")
   tl.to('.loader', {
  y: -1600,
     opacity: 0,
     duration: 3,
     delay: 3,
        ease: 'power1.out',
 })

 tl.to('.loader',{
     display: 'none',
 })
tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1",{
    y: 50,
    opacity: 0,
stagger: 0.2,
duration: 0.6,
}, "-=3")
tl.from(".hero", {
    opacity: 0,
}, "-=3.2")
tl.from( ".page2", {
 opacity: 0,
}, "-=1.5")
tl.set(".page6-content h1", {
  opacity: 1
});

 }
      loadingAnimation();
function cursorAnimation() {
   Shery.mouseFollower({
skew: true,
ease: "cubic-bezier(0.23, 1, 0.320, 1)",
duuration: .5,
   });



//video animation
var videoContainer = document.querySelector(".video-container");
var video = document.querySelector(".video-container video");
videoContainer.addEventListener("mouseenter", function(){

videoContainer.addEventListener("mousemove", function(dets){
  gsap.to(".mousefollower", {
opacity:0,
  })
  gsap.to(".video-cursor" , {
left: dets.x - 450,
y: dets.y - 55,
  })
})

})
videoContainer.addEventListener("mouseleave", function(){
gsap.to(".mousefollower", {
  opacity: 1,

})
gsap.to(".video-cursor", {
  left: "70%",
y: 0,
 
})
})
videoContainer.addEventListener("click", function(){

  if (video.paused) {

    video.play();
    videoContainer.classList.add("hide-bg");
    video.style.opacity = 1;

    document.querySelector(".video-cursor").innerHTML = `<i class="ri-pause-large-fill"></i>`;

    gsap.to(".video-cursor", {
      scale: .6,
    });

  } else {

    video.pause();
    videoContainer.classList.remove("hide-bg");
    video.style.opacity = 0;

    document.querySelector(".video-cursor").innerHTML = `<i class="ri-play-large-fill"></i>`;

    gsap.to(".video-cursor", {
      scale: 1,
    });

  }

});



 //video for anime
 var videoContainer2 = document.querySelector(".video-container2");
var video2 = videoContainer2.querySelector(".video-container2 video");


videoContainer2.addEventListener("mouseenter", function(){
    videoContainer2.addEventListener("mousemove", function(dets){
        gsap.to(".mousefollower", {
opacity:0,
  })
        gsap.to(".video-cursor2", {
            left: dets.x - 700,
            y: dets.y - 150,
        })
    })
})

videoContainer2.addEventListener("mouseleave", function(){
     gsap.to(".mousefollower", {
opacity:1,
  })
    gsap.to(".video-cursor2", {
        left: "70%",
        y: 0,
    })
})

videoContainer2.addEventListener("click", function(){
  
 

    if(video2.paused){
        video2.play()
         videoContainer2.classList.add("hide-bg"); /////////
        video2.style.opacity = 1
        document.querySelector(".video-cursor2").innerHTML = `<i class="ri-pause-large-fill"></i>`
        gsap.to(".video-cursor2", {
            scale: .6,
        }) 
       
    } else {
        video2.pause()
        videoContainer2.classList.remove("hide-bg");
        video2.style.opacity = 0
        document.querySelector(".video-cursor2").innerHTML = `<i class="ri-play-large-fill"></i>`
        gsap.to(".video-cursor2", {
            scale: 1,
        })
    
    }
})
//video for gaming
var videoContainer3 = document.querySelector(".video-container3");
var video3 = videoContainer3.querySelector(".video-container3 video");


videoContainer3.addEventListener("mouseenter", function(){
    videoContainer3.addEventListener("mousemove", function(dets){
        gsap.to(".mousefollower", {
opacity:0,
  })
        gsap.to(".video-cursor3", {
          left: dets.x - 150,
         y: dets.y - 210,
        })
    })
})

videoContainer3.addEventListener("mouseleave", function(){
     gsap.to(".mousefollower", {
opacity:1,
  })
    gsap.to(".video-cursor3", {
        left: "70%",
        y: 0,
    })
})

videoContainer3.addEventListener("click", function(){
    if(video3.paused){
 videoContainer3.classList.add("hide-bg");
        video3.play()

        video3.style.opacity = 1
        document.querySelector(".video-cursor3").innerHTML = `<i class="ri-pause-large-fill"></i>`
        gsap.to(".video-cursor3", {
            scale: .6,
        }) 

    } else {
        video3.pause()
         videoContainer3.classList.remove("hide-bg");
        video3.style.opacity = 0
        document.querySelector(".video-cursor3").innerHTML = `<i class="ri-play-large-fill"></i>`
        gsap.to(".video-cursor3", {
            scale: 1,
        })
     
    }
})
//video for cars
var videoContainer4 = document.querySelector(".video-container4");
var video4 = videoContainer4.querySelector(".video-container4 video");


videoContainer4.addEventListener("mouseenter", function(){
    videoContainer4.addEventListener("mousemove", function(dets){
        gsap.to(".mousefollower", {
            opacity:0,
        })
        gsap.to(".video-cursor4", {
             left: dets.x - 700,
            y: dets.y - 150,
        })
    })
})

videoContainer4.addEventListener("mouseleave", function(){
    gsap.to(".mousefollower", {
        opacity:1,
    })
    gsap.to(".video-cursor4", {
        left: "70%",
        y: 0,
    })
})

videoContainer4.addEventListener("click", function(){
    if(video4.paused){
        video4.play()
         videoContainer4.classList.add("hide-bg");
        video4.style.opacity = 1
        document.querySelector(".video-cursor4").innerHTML = `<i class="ri-pause-large-fill"></i>`
        gsap.to(".video-cursor4", {
            scale: .6,
        }) 
      
    } else {
        video4.pause()
         videoContainer4.classList.remove("hide-bg");
        video4.style.opacity = 0
        document.querySelector(".video-cursor4").innerHTML = `<i class="ri-play-large-fill"></i>`
        gsap.to(".video-cursor4", {
            scale: 1,
        })
        
    }
})
}
if (!window.matchMedia("(max-width: 600px)").matches) {
  cursorAnimation(); // desktop only
}


 function mobileVideoToggle() {

  if (!window.matchMedia("(max-width: 600px)").matches) return;

  const container = document.querySelector(".video-container");
  const video = container.querySelector("video");
  const cursor = container.querySelector(".video-cursor");

  container.addEventListener("click", function () {

    if (video.paused) {

      // ▶️ play
      video.play();
      container.classList.add("hide-bg");
      video.style.opacity = 1;

      cursor.style.opacity = "0";

    } else {

      // ⏸ pause
      video.pause();
      container.classList.remove("hide-bg");
      video.style.opacity = 0;

      cursor.style.opacity = "1";

      // reset position
      cursor.style.left = "50%";
      cursor.style.top = "50%";
      cursor.style.transform = "translate(-50%, -50%)";
    }

  });
 }

mobileVideoToggle();

function mobileVideo2() {

  if (!window.matchMedia("(max-width: 600px)").matches) return;

  const container = document.querySelector(".video-container2");
  const video = container.querySelector("video");
  const cursor = container.querySelector(".video-cursor2");

  container.addEventListener("click", function () {

    if (video.paused) {

      video.play();
      container.classList.add("hide-bg");
      video.style.opacity = 1;

      cursor.style.opacity = "0";

    } else {

      video.pause();
      container.classList.remove("hide-bg");
      video.style.opacity = 0;

      cursor.style.opacity = "1";

      cursor.style.top = "50%";
      cursor.style.left = "50%";
      cursor.style.transform = "translate(-50%, -50%)";
    }

  });
}
mobileVideo2();
function mobileVideo3() {

  if (!window.matchMedia("(max-width: 600px)").matches) return;

  const container = document.querySelector(".video-container3");
  const video = container.querySelector("video");
  const cursor = container.querySelector(".video-cursor3");

  container.addEventListener("click", function () {

    if (video.paused) {

      video.play();
      container.classList.add("hide-bg");
      video.style.opacity = 1;

      cursor.style.opacity = "0";

    } else {

      video.pause();
      container.classList.remove("hide-bg");
      video.style.opacity = 0;

      cursor.style.opacity = "1";

      cursor.style.top = "50%";
      cursor.style.left = "50%";
      cursor.style.transform = "translate(-50%, -50%)";
    }

  });
}
mobileVideo3();

function mobileVideo4() {

  if (!window.matchMedia("(max-width: 600px)").matches) return;

  const container = document.querySelector(".video-container4");
  const video = container.querySelector("video");
  const cursor = container.querySelector(".video-cursor4");

  container.addEventListener("click", function () {

    if (video.paused) {

      video.play();
      container.classList.add("hide-bg");
      video.style.opacity = 1;

      cursor.style.opacity = "0";

    } else {

      video.pause();
      container.classList.remove("hide-bg");
      video.style.opacity = 0;

      cursor.style.opacity = "1";

      cursor.style.top = "50%";
      cursor.style.left = "50%";
      cursor.style.transform = "translate(-50%, -50%)";
    }

  });
}
mobileVideo4();

function sheryAnimation() {
  Shery.imageEffect(".img-div, .img-div2, .img-div3, .img-div4", {
style: 5,
config:{"a":{"value":0.92,"range":[0,30]},"b":{"value":-0.98,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7575832123347138},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0.02,"range":[0,0.5]},"shapeRadius":{"value":0.06,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.12,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.31,"range":[0,10]},"metaball":{"value":0.486759,"range":[0,2],"_gsap":{"id":6}},"discard_threshold":{"value":0.56,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.49,"range":[0,2]},"noise_scale":{"value":7.5,"range":[0,100]}},
gooey: true, 

})
}
sheryAnimation();
function flagAnimation(){
  document.addEventListener("mousemove", function(dets){
    gsap.to(".flag", {
      x: dets.x,
      y: dets.y,
      
    })
    })
    document.querySelector("#hero3").addEventListener("mouseenter", function(){
      gsap.to(".flag", {
    opacity: 1,
      })
      })
    document.querySelector("#hero3").addEventListener("mouseleave", function(){
      gsap.to(".flag", {
    opacity: 0,
      })
      })
}
flagAnimation();
function textAnimation(){
const translations = [
  { id: 1, english: "Tokyo", japanese: "東京" },
  { id: 2, english: "Kyoto", japanese: "京都" },
  { id: 3, english: "Osaka", japanese: "大阪" },
  { id: 4, english: "Hokkaido", japanese: "北海道" },
  { id: 5, english: "Okinawa", japanese: "沖縄" },
  { id: 6, english: "Saga", japanese: "佐賀" }
]

const page4Box = document.querySelector('.page4-box');
translations.forEach(item => {
    const boxEl = document.querySelector(`#box-elem-${item.id}`);
   
    const headEl = boxEl.querySelector('h4');
    
    boxEl.addEventListener("mouseenter", function(){
        headEl.textContent = item.japanese;
    });
    
    boxEl.addEventListener("mouseleave", function(){
        headEl.textContent = item.english;
    });
 
});



   page4Box.addEventListener("mouseover", function(){
 gsap.to(".mousefollower", {
            opacity:0,
        })
   });

   page4Box.addEventListener("mouseleave", function(){
 gsap.to(".mousefollower", {
            opacity:1,
        })
   });

Shery.makeMagnet("#magneteffect h5");
Shery.makeMagnet("#magneteffect h4");


 var elems = document.querySelectorAll(".box-elem")
   
    elems.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
    var bgImg = ele.getAttribute("data-img")
    page4Box.style.backgroundImage = `url(${bgImg})`
    })
    })













}
textAnimation()

function page6textanimation(){
    var text = document.querySelector(".textanimation");
  let isAnimating = false;
  
  text.addEventListener("mouseenter", function () {
    if (isAnimating) return;
    isAnimating = true;
  
    
    gsap.from(".textanimation", {
      opacity: 0,
      ease: "power1.out",
      onComplete: function () {
        // Kill any previous textillate instance
        $(".textanimation").textillate('stop').textillate('out');
  
        // Restart textillate fresh
        $(".textanimation")
          .textillate({
            in: { effect: "fadeIn", delayScale: .7 },
            loop: false
          })
          .textillate("in");
  
        // Add stroke/font after spans exist
        $(".textanimation").on("inAnimationBegin.tlt", function () {
          text.classList.add("hover-font");
        });
      }
    });
  });
  
  text.addEventListener("mouseleave", function () {
    text.classList.remove("hover-font");
    isAnimating = false; 
  });
}

  page6textanimation(); // desktop only

function playOneVideoAtATime() {

  const videos = document.querySelectorAll("video");

  videos.forEach((video) => {

    video.addEventListener("play", function () {

      videos.forEach((otherVideo) => {

        if (otherVideo !== video) {

          otherVideo.pause();

          // 🔥 FIX: reset cursor UI
          const container = otherVideo.closest("[class*='video-container']");
          const cursor = container?.querySelector("div[class*='video-cursor']");

          if (cursor) {
            cursor.innerHTML = `<i class="ri-play-large-fill"></i>`;
            cursor.style.opacity = "1";
            gsap.to(cursor, {
  scale: 1,
})
          }

          // also remove bg state if you added it
          container?.classList.remove("hide-bg");
          otherVideo.style.opacity = 0;
           gsap.to(otherVideo, {
  scale: 1,
})
        }

      });

    });

  });

}

playOneVideoAtATime();
