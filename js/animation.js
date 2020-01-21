		var wwidth = window.innerWidth;

		if (wwidth>=2560) {
			var tween = TweenMax.to('#globo', 2, {transform: 'scale(2) translateY(20px) translateX(330px) rotate(10deg)', ease: Linear.easeNone});
			var tween1 = TweenMax.to('#globo', 2, {transform: 'scale(2) translateY(-80px) translateX(400px)  rotate(8deg)', ease: Linear.easeNone});

			// init ScrollMagic Controller
			var controller = new ScrollMagic.Controller();


			// Scale Scene
			var scale_scene = new ScrollMagic.Scene({
			  offset: 480,
			  triggerElement: '#trigger',
			  triggerHook: 0.6,
			  duration: 480
			})
			.setTween(tween)
			
			.addTo(controller);

			var scale_scene = new ScrollMagic.Scene({
			  offset: 720,
			  triggerElement: '#trigger',
			  triggerHook: 0.6,
			  duration: 360
			})
			.setTween(tween1)
			
			.addTo(controller);

			scale_scene = new ScrollMagic.Scene({
			  triggerElement: '#trigger',
			  offset: 600,
			  triggerHook: 0.6,
			  
			})
			.setClassToggle("#img4", "animation")
			
			.addTo(controller);

			scale_scene = new ScrollMagic.Scene({
			  triggerElement: '#trigger',
			  offset: 840,
			  triggerHook: 0.6,
			  
			})
			.setClassToggle("#img5", "animation")
			
			.addTo(controller);

			scale_scene = new ScrollMagic.Scene({
			  triggerElement: '#trigger',
			  offset: 1320,
			  triggerHook: 0.6,
			  
			})
			.setClassToggle("#img1", "shake")
			
			.addTo(controller);

			scale_scene = new ScrollMagic.Scene({
			  triggerElement: '#trigger',
			  offset: 1320,
			  triggerHook: 0.6,
			  
			})
			.setClassToggle("#img3", "shake")
			
			.addTo(controller);

		}

		else if(wwidth<2560 && wwidth>=1440){
			var tween = TweenMax.to('#globo', 2, {transform: 'scale(2) translateY(20px) translateX(330px) rotate(10deg)', ease: Linear.easeNone});
			var tween1 = TweenMax.to('#globo', 2, {transform: 'scale(2) translateY(-40px) translateX(365px)  rotate(0deg)', ease: Linear.easeNone});

			// init ScrollMagic Controller
			var controller = new ScrollMagic.Controller();


			// Scale Scene
			var scale_scene = new ScrollMagic.Scene({
			  offset: 120,
			  triggerElement: '#trigger',
			  triggerHook: 0.6,
			  duration: 480
			})
			.setTween(tween)
			
			.addTo(controller);

			var scale_scene = new ScrollMagic.Scene({
			  offset: 720,
			  triggerElement: '#trigger',
			  triggerHook: 0.6,
			  duration: 360
			})
			.setTween(tween1)
			
			.addTo(controller);

			scale_scene = new ScrollMagic.Scene({
			  triggerElement: '#trigger',
			  offset: 600,
			  triggerHook: 0.6,
			  
			})
			.setClassToggle("#img4", "animation")
			
			.addTo(controller);

			scale_scene = new ScrollMagic.Scene({
			  triggerElement: '#trigger',
			  offset: 840,
			  triggerHook: 0.6,
			  
			})
			.setClassToggle("#img5", "animation")
			
			.addTo(controller);

			scale_scene = new ScrollMagic.Scene({
			  triggerElement: '#trigger',
			  offset: 1320,
			  triggerHook: 0.6,
			  
			})
			.setClassToggle("#img1", "shake")
			
			.addTo(controller);

			scale_scene = new ScrollMagic.Scene({
			  triggerElement: '#trigger',
			  offset: 1320,
			  triggerHook: 0.6,
			  
			})
			.setClassToggle("#img3", "shake")
			
			.addTo(controller);

		}

		else if(wwidth<1440 && wwidth>=1025){
			var tween = TweenMax.to('#globo', 2, {transform: 'scale(2) translateY(20px) translateX(280px) rotate(10deg)', ease: Linear.easeNone});
			var tween1 = TweenMax.to('#globo', 2, {transform: 'scale(2) translateY(-40px) translateX(365px)  rotate(0deg)', ease: Linear.easeNone});

			// init ScrollMagic Controller
			var controller = new ScrollMagic.Controller();


			// Scale Scene
			var scale_scene = new ScrollMagic.Scene({
			  offset: 120,
			  triggerElement: '#trigger',
			  triggerHook: 0.6,
			  duration: 480
			})
			.setTween(tween)
			
			.addTo(controller);

			var scale_scene = new ScrollMagic.Scene({
			  offset: 720,
			  triggerElement: '#trigger',
			  triggerHook: 0.6,
			  duration: 360
			})
			.setTween(tween1)
			
			.addTo(controller);

			scale_scene = new ScrollMagic.Scene({
			  triggerElement: '#trigger',
			  offset: 600,
			  triggerHook: 0.6,
			  
			})
			.setClassToggle("#img4", "animation")
			
			.addTo(controller);

			scale_scene = new ScrollMagic.Scene({
			  triggerElement: '#trigger',
			  offset: 840,
			  triggerHook: 0.6,
			  
			})
			.setClassToggle("#img5", "animation")
			
			.addTo(controller);

			scale_scene = new ScrollMagic.Scene({
			  triggerElement: '#trigger',
			  offset: 1320,
			  triggerHook: 0.6,
			  
			})
			.setClassToggle("#img1", "shake")
			
			.addTo(controller);

			scale_scene = new ScrollMagic.Scene({
			  triggerElement: '#trigger',
			  offset: 1320,
			  triggerHook: 0.6,
			  
			})
			.setClassToggle("#img3", "shake")
			
			.addTo(controller);

		}

		else if(wwidth<=1024 && wwidth>=992){
			var tween = TweenMax.to('#globo', 2, {transform: 'scale(2) translateY(20px) translateX(230px) rotate(10deg)', ease: Linear.easeNone});
			var tween1 = TweenMax.to('#globo', 2, {transform: 'scale(2) translateY(-40px) translateX(290px)  rotate(0deg)', ease: Linear.easeNone});

			// init ScrollMagic Controller
			var controller = new ScrollMagic.Controller();


			// Scale Scene
			var scale_scene = new ScrollMagic.Scene({
			  offset: 240,
			  triggerElement: '#trigger',
			  triggerHook: 0.6,
			  duration: 480
			})
			.setTween(tween)
			
			.addTo(controller);

			var scale_scene = new ScrollMagic.Scene({
			  offset: 720,
			  triggerElement: '#trigger',
			  triggerHook: 0.6,
			  duration: 360
			})
			.setTween(tween1)
			
			.addTo(controller);

			scale_scene = new ScrollMagic.Scene({
			  triggerElement: '#trigger',
			  offset: 600,
			  triggerHook: 0.6,
			  
			})
			.setClassToggle("#img4", "animation")
			
			.addTo(controller);

			scale_scene = new ScrollMagic.Scene({
			  triggerElement: '#trigger',
			  offset: 840,
			  triggerHook: 0.6,
			  
			})
			.setClassToggle("#img5", "animation")
			
			.addTo(controller);

			scale_scene = new ScrollMagic.Scene({
			  triggerElement: '#trigger',
			  offset: 1320,
			  triggerHook: 0.6,
			  
			})
			.setClassToggle("#img1", "shake")
			
			.addTo(controller);

			scale_scene = new ScrollMagic.Scene({
			  triggerElement: '#trigger',
			  offset: 1320,
			  triggerHook: 0.6,
			  
			})
			.setClassToggle("#img3", "shake")
			
			.addTo(controller);

		}

		else if(wwidth<992 && wwidth>=769){
			var tween = TweenMax.to('#globo', 2, {transform: 'scale(2) translateY(20px) translateX(230px) rotate(10deg)', ease: Linear.easeNone});
			var tween1 = TweenMax.to('#globo', 2, {transform: 'scale(2) translateY(-40px) translateX(290px)  rotate(0deg)', ease: Linear.easeNone});

			// init ScrollMagic Controller
			var controller = new ScrollMagic.Controller();


			// Scale Scene
			var scale_scene = new ScrollMagic.Scene({
			  offset: 600,
			  triggerElement: '#trigger',
			  triggerHook: 0.6,
			  duration: 480
			})
			.setTween(tween)
			
			.addTo(controller);

			var scale_scene = new ScrollMagic.Scene({
			  offset: 1080,
			  triggerElement: '#trigger',
			  triggerHook: 0.6,
			  duration: 360
			})
			.setTween(tween1)
			
			.addTo(controller);

			scale_scene = new ScrollMagic.Scene({
			  triggerElement: '#trigger',
			  offset: 1200,
			  triggerHook: 0.6,
			  
			})
			.setClassToggle("#img4", "animation")
			
			.addTo(controller);

			scale_scene = new ScrollMagic.Scene({
			  triggerElement: '#trigger',
			  offset: 1440,
			  triggerHook: 0.6,
			  
			})
			.setClassToggle("#img5", "animation")
			
			.addTo(controller);

			scale_scene = new ScrollMagic.Scene({
			  triggerElement: '#trigger',
			  offset: 1680,
			  triggerHook: 0.6,
			  
			})
			.setClassToggle("#img1", "shake")
			
			.addTo(controller);

			scale_scene = new ScrollMagic.Scene({
			  triggerElement: '#trigger',
			  offset: 1680,
			  triggerHook: 0.6,
			  
			})
			.setClassToggle("#img3", "shake")
			
			.addTo(controller);

		}

		