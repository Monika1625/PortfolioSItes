fetch('http://localhost/portfolio/JSON/Data.json').then((response)=>response.json()).then(data=>{
	
	console.log(data[0].bioDataSection[0].bioDataImage);
	
	document.getElementById("nav").innerHTML+=`
		<div class="container-fluid">
			<div class="main-div-nav">
				<div class="Nav-logo">
					<a href="${data[0].nav[0].navLogoLink}">
							${data[0].nav[0].navLogo}
						</a>
						<span class="animate__animated animate__rubberBand animate__repeat-2 animate__fast">
							${data[0].nav[0].navLogoText}</span>
					</div><!--end logo-->
				
				<div class="nav-bar">
					<ul class="navbar-list">
						
					</ul>
				</div><!--end nav-bar-->
				
				<div class="mobile-navbar-btn">
					<ion-icon name="menu-outline" class="mobile-nav-icon"></ion-icon>
					<ion-icon name="close-outline" class="mobile-nav-icon"></ion-icon>
				</div><!--end mobile-nav-bar-->
			
			</div><!--end main-->
		</div><!--end container-->
	`;
	
	/*----map for Navbar----*/
	data[0].nav[1].navTab.map((val,index)=>{
		document.querySelector(".nav-bar>ul").innerHTML+=`
			<li>
				<a href="${val.navTabLink}" class="navbar-links">
					${val.navTabName}
				</a>
			</li>
		`;
	});
			
			/*----for mobile Btn---*/
			
		let mainDiv=document.querySelector(".main-div-nav");
		let MobileBtn=document.querySelector(".mobile-navbar-btn");
		
			MobileBtn.addEventListener("click",()=>{
				mainDiv.classList.toggle("active");
			});
	
	
	/*-------------For Sticky Nav Bar----------------------*/
		/*let hero=document.querySelector("hero-section-data").innerHTML;
			
			
		const observer= new IntersectionObserver((entries)=>{
			const ent=entries[0];
			console.log(ent);
		},
		{
			root:null,
			thresholds:0,
		});
	
		observer.observe(hero);*/
		
		
	/*/--------------------Hero Section--------------*/
	
	document.querySelector("#hero-section .container").innerHTML+=`
		<div class="grid grid-column-two">
			<div class="hero-section-data">
				<span class="hero-top-data">
					${data[0].heroSection[0].heroText}
				</span>
				<h1 class="hero-heading">${data[0].heroSection[0].heroHeading}</h1>
				<p class="hero-para">${data[0].heroSection[0].heroPara}</p>
				<div>
					<a href="${data[0].heroSection[0].heroButtonLink}" class="Button btn-contact-me">
						${data[0].heroSection[0].heroButton}
					</a>
				</div>
			</div>
			<div class="hero-section-image">
				<figure>
					<img src="${data[0].heroSection[0].heroImage}" alt="hero-image">
				</figure>
			</div>
		</div><!--end grid-->
	`;
	
	/*/--------------------Bio Data Section--------------*/
	
	
	document.querySelector("#mybiodata-section .container").innerHTML+=`
		<div class="grid grid-column-two">
			
			<div class="bio-image">
				<figure>
					<img src="${data[0].bioDataSection[0].bioDataImage}" alt="Bio data Image"/>
				</figure>
			</div><!--end bio image-->
			
			<!--right side-->
			
			<div class="bio-data">
				<h2 class="common-heading">${data[0].bioDataSection[0].bioDataHeading}</h2>
				<p>${data[0].bioDataSection[0].bioDataPara}</p>
				<p>${data[0].bioDataSection[0].bioDataParaa}</p>
				
				<div class="bio-data-stats">
					
					<div class="bio-stats">
						<h3>${data[0].bioDataSection[0].bioH3Design[0].bioStats}</h3>
							<div class="bio-progress-bar">
								<span>${data[0].bioDataSection[0].bioH3Design[0].biopercentage}</span>
							</div>
					</div><!--end bio-stats-->
					
					<div class="bio-stats">
						<h3>${data[0].bioDataSection[0].bioH3Design[1].bioStats}</h3>
							<div class="bio-progress-bar bio-progress-2">
								<span>${data[0].bioDataSection[0].bioH3Design[1].biopercentage}</span>
							</div>
					</div><!--end bio-stats-->
					
					<div class="bio-stats">
						<h3>${data[0].bioDataSection[0].bioH3Design[2].bioStats}</h3>
							<div class="bio-progress-bar bio-progress-3">
								<span>${data[0].bioDataSection[0].bioH3Design[2].biopercentage}</span>
							</div>
					</div><!--end bio-stats-->
					
					<div class="bio-stats">
						<h3>${data[0].bioDataSection[0].bioH3Design[3].bioStats}</h3>
							<div class="bio-progress-bar bio-progress-4">
								<span>${data[0].bioDataSection[0].bioH3Design[3].biopercentage}</span>
							</div>
					</div><!--end bio-stats-->
					
					<div class="bio-stats">
						<h3>${data[0].bioDataSection[0].bioH3Design[4].bioStats}</h3>
							<div class="bio-progress-bar bio-progress-5">
								<span>${data[0].bioDataSection[0].bioH3Design[4].biopercentage}</span>
							</div>
					</div><!--end bio-stats-->
					
				</div><!--end biodata Stats-->
				
				<div class="bio-data-btn">
					<a href="#" class="Button">
						${data[0].bioDataSection[0].bioDownloadButton}
					</a>
				</div><!--end bio Btn-->
				
			</div><!--end Bio data-->
			
		</div><!--end grid-->
	`;
	
	
	
	/*data[0].bioDataSection[0].bioH3Design.forEach(function(val,index){
		document.querySelector(".bio-data-stats").innerHTML+=`
			<h3>${val.bioStats}</h3>
			<div class="bio-progress-bar">
				<span>${val.biopercentage}</span>
			</div>
		`;
	});*/
	
		/*/===========-
					-------------------PortFolio Section-------------
		-====*/
	
	document.querySelector("#portfolio-section .container").innerHTML+=`
		<h2 class="common-heading">${data[0].portfolioSection[0].portHeading}</h2>
		<p>${data[0].portfolioSection[0].portPara}</p>
		
		<div class="port-btns">
			<div class="Button p-btn" data-btn-name="1">	
				${data[0].portfolioSection[0].portButtons[0].portBtn}
			</div>
			<div class="Button p-btn" data-btn-name="2">
				${data[0].portfolioSection[0].portButtons[1].portBtn}
			</div>
			<div class="Button p-btn" data-btn-name="3">
				${data[0].portfolioSection[0].portButtons[2].portBtn}
			</div>
		</div><!--end port-btns-->
		
		<div class="grid grid-column-three portfolio-image">
			
			<div class="img-overlay p-btn--1 p-btn--3">
				<img src="${data[0].portfolioSection[0].portImages[0].portImg}" alt="portfolio-image"/>
				<div class="overlay">
					<a class="common-heading" href="${data[0].portfolioSection[0].portImages[0].portLink}" target="_blank">
						${data[0].portfolioSection[0].portImages[0].portProject}
					</a>
				</div>
			</div><!--end imgoverlay1-->
			
			<div class="img-overlay p-btn--2">
				<img src="${data[0].portfolioSection[0].portImages[1].portImg}" alt="portfolio-image"/>
				<div class="overlay">
					<a class="common-heading" href="${data[0].portfolioSection[0].portImages[1].portLink}" target="_blank">
						${data[0].portfolioSection[0].portImages[1].portProject}
					</a>
				</div>
			</div><!--end imgoverlay2-->
			
			<div class="img-overlay p-btn--3">
				<img src="${data[0].portfolioSection[0].portImages[2].portImg}" alt="portfolio-image"/>
				<div class="overlay">
					<a class="common-heading" href="${data[0].portfolioSection[0].portImages[2].portLink}" target="_blank">
						${data[0].portfolioSection[0].portImages[2].portProject}
					</a>
				</div>
			</div><!--end imgoverlay3-->
			
			<div class="img-overlay p-btn--1 p-btn--2">
				<img src="${data[0].portfolioSection[0].portImages[3].portImg}" alt="portfolio-image"/>
				<div class="overlay">
					<a class="common-heading" href="${data[0].portfolioSection[0].portImages[3].portLink}" target="_blank">
						${data[0].portfolioSection[0].portImages[3].portProject}
					</a>
				</div>
			</div><!--end imgoverlay4-->
			
			<div class="img-overlay p-btn--2 p-btn--1">
				<img src="${data[0].portfolioSection[0].portImages[4].portImg}" alt="portfolio-image"/>
				<div class="overlay">
					<a class="common-heading" href="${data[0].portfolioSection[0].portImages[4].portLink}" target="_blank">
						${data[0].portfolioSection[0].portImages[4].portProject}
					</a>
				</div>
			</div><!--end imgoverlay5-->
			
			<div class="img-overlay p-btn--3 p-btn--2">
				<img src="${data[0].portfolioSection[0].portImages[5].portImg}" alt="portfolio-image"/>
				<div class="overlay">
					<a class="common-heading" href="${data[0].portfolioSection[0].portImages[5].portLink}" target="_blank">
						${data[0].portfolioSection[0].portImages[5].portProject}
					</a>
				</div>
			</div><!--end imgoverlay6-->
			
			
		</div><!--end grid-->
	`;
	
	/*-------------for portfolio Buttons------------*/
	
	
	const port_btn=document.querySelector(".port-btns");
	const p_btn=document.querySelectorAll(".p-btn");
	const p_img_overlay=document.querySelectorAll(".img-overlay");
	
	port_btn.addEventListener("click",(e)=>{
		const p_btn_clicked=e.target;
		//console.log(p_btn_clicked);
		
		p_btn.forEach((curElem)=>curElem.classList.remove("p-btn-active"));
		p_btn_clicked.classList.add("p-btn-active");
		
		//to get the port button number using data attributes
		
		const btn_num=p_btn_clicked.dataset.btnName;
		console.log(btn_num);
		
		const img_active=document.querySelectorAll(`.p-btn--${btn_num}`);
		console.log(img_active);
		
		p_img_overlay.forEach((curElem)=>curElem.classList.add("p-image-not-active"));
		
		img_active.forEach((curElem)=>curElem.classList.remove("p-image-not-active"));
	});
	
			/*****--======Work data Section -------------========*/
	
	
	document.querySelector("#workdata-section .container").innerHTML+=`
		<div class="grid grid-column-four">
			
		</div><!--end grid-->
	`;
	
	data[0].workData.map(function(val,index){
		document.querySelector("#workdata-section .grid-column-four").innerHTML+=`
			<div class="workcounterdata">	
				<h2 class="count-number" data-number="${val.workCounter}">0+</h2>
				<p>${val.workHeading}</p>	
			</div>
		`;
	});
	
	
		//Animate count Number
		
		const countNum=document.querySelectorAll(".count-number");
		const speed=200;
			
			countNum.forEach((curElem)=>{
				const updateNumber=()=>{
					const targetNumber=parseInt(curElem.dataset.number);  //to use data attributes we use dataset
					//console.log(targetNumber);
					
					const intialNum=parseInt(curElem.innerText);
					//console.log(intialNum);
					
					const incrementNum=Math.trunc(targetNumber/speed);
					//console.log(incrementNum);
					
					if(intialNum<targetNumber){
						curElem.innerHTML=`${intialNum+incrementNum}+`;
						
						setTimeout(updateNumber,10);
					}
				};
				
				updateNumber();
			});
		
		
		
	/*****--======Service  Section -------------========*/
	
	document.querySelector("#service-section .container").innerHTML+=`
		<h2 class="common-heading">${data[0].serviceSection[0].serviceHeading}</h2>
		<p>${data[0].serviceSection[0].servicePara}</p>
		
		
		<div class="grid grid-column-three">
			
		</div><!--end grid-->
		
	`;	
	
		data[0].serviceSection[1].serviceTab.map(function(val,index){
			document.querySelector("#service-section .grid").innerHTML+=`
				<div class="service-Box">
					<ion-icon name="${val.serviceIcon}" class="service-icon"></ion-icon>
					<h3>${val.serviceHead}</h3>
					<p>${val.servicesubpara}</p>
				</div>
			`;
		});
		
		/*------------------==For Testnimonial----------*/
		
		  /* document.querySelector("#testimonial-section .container").innerHTML+=`
			 <h2 class="common-heading">${data[0].testiMonial[0].testHeading}</h2>
			 <div class="swiper mySwiper container">
				 <div class="swiper-wrapper">
				 
						 <div class="swiper-slide">
						
						 </div>
						 
				   </div><!--end swiper-wrapper-->
				   
				   <div class="swiper-pagination"></div>
			 </div><!--end Swiper-->
		 `;
		
		 data[0].testiMonial[1].testTab.map(function(val,index){
			 document.querySelector(".swiper-slide").innerHTML+=`
				 <div class="swiper-client-msg">
					<p>${val.testPara}</p>
				 </div>
				
				 <div class="swiper-client-data grid grid-column-two">
					 <figure>
					 <img src="${val.testImg}">
					 </figure>
					 <div class="client-data-details">
					 <p>${val.testName}</p>
						 <p>${val.testDesi}</p>
					 </div>
				 </div><!--end swiper-client-data-->
			 `;
		 });*/
		
		/* code for silder*/
		
		console.log();
		
	  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
		 autoplay:{
			delay:3500,
			disableOnInteraction:false,
		 },
	 pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

	const widthSize=window.matchMedia("(max-width:790px)");
	const myJsMedia=()=>{
		if(widthSize.matches){
			new Swiper(".mySwiper", {
			  slidesPerView: 1,
			  spaceBetween: 30,
			});
    
		}//end if
		else{
			new Swiper(".mySwiper", {
			  slidesPerView: 2,
			  spaceBetween: 30,
			});
		}
	};	//end myJsMedia
	
		myJsMedia(widthSize);
		widthSize.addEventListener("change",myJsMedia);

	/*  ===========For Freelancing----------=====*/
	
	document.querySelector("#free-section").innerHTML+=`
		<div class="overlay-free">
			<div class="container">
				<h2>${data[0].freesection[0].freeheading}</h2>
					<p>${data[0].freesection[0].freepara}</p>
					<a href="${data[0].freesection[0].freebtnlink}" class="Button">
						${data[0].freesection[0].freebtn}
					</a>
			</div>
		</div>
	`;
	
	/*  ===========For Freelancing----------=====*/
	
	document.querySelector("#contact-section .container").innerHTML+=`
		<h2 class="common-heading">Contact US</h2>
		<div class="section-contact-main contact-container">
			<form action="#">
				<div class="grid grid-column-two">
					<div>
						<label for="username"></label>
						<input type="text" name="username" id="username" placeholder="Name" autocomplete="off" required />
					</div>
					<div>
						<label for="email"></label>
						<input type="email" name="email" id="email" placeholder="Email" autocomplete="off" required/>
					</div>
				</div><!--end grid-->
				
				<div>
					<label for="Subject"></label>
					<input type="text" name="subject" placeholder="Subject" required/>
				</div>
				
				<div>
					<label for="textarea"></label>
					<textarea name="textarea" id="textArea" placeholder="Message" min="8"></textarea>
				</div>
				
				<div>
					<input type="submit" value ="Send Message" name="submit" class="Button">
				</div>
			</form>
		</div>
	`;
		
	/*  ===========For Freelancing----------=====*/
	
	document.querySelector("#footer .container").innerHTML+=`
		<div class="grid grid-column-four">
		
			<div class="f-about">
				<h3>${data[0].footer[0].footerHeading1}</h3>
				<p>${data[0].footer[0].footerpara}</p>
			</div><!--end f-about-->
			
			<div class="f-links">
				<h3>${data[0].footer[1].footerHeading2}</h3>
				<ul>
				</ul>
			</div><!--end flinks-->
			
			<div class="f-services">
				<h3>${data[0].footer[2].footerHeading3}</h3>
				<ul>
				</ul>
			</div><!--end f-services-->
			
			<div class="f-questions">
				<h3>${data[0].footer[3].footerHeading4}</h3>
				<ul>
				</ul>
			</div><!--end f-services-->
			
			
			
		</div><!--end grid-->
		
		<div class="f-social-icons">
				
		</div><!--end f-social-icons-->
			
			<div class="f-credits">
				<p>${data[0].footer[4].fsmpara}</p>
			</div><!--end f-credits-->
	`;
	
	/* for Links*/
	
	data[0].footer[1].footerlinkTab.map(function(val,index){
		document.querySelector(".f-links >ul").innerHTML+=`
		<li>
				<span><ion-icon name="chevron-forward-outline"></ion-icon></span>
				<a href="${val.footerLink}">
					${val.footerTab}
				</a>
			
		</li>
		`;
	});
	
	/* for Services*/
	
	data[0].footer[2].footerService.map(function(val,index){
		document.querySelector(".f-services >ul").innerHTML+=`
		<li>
			<span><ion-icon name="chevron-forward-outline"></ion-icon></span>
				<a href="${val.footerSLink}">
					${val.footerSTab}
				</a>
			
		</li>
		`;
	});
	
	/* for have a  Questions*/
	
	data[0].footer[3].footerSmlinks.map(function(val,index){
		document.querySelector(".f-questions >ul").innerHTML+=`
		<li>
			
				<a href="${val.flink}" target="_blank">
					<span class="${val.ficons}"></span>
					${val.ftext}
				</a>
			
		</li>
		`;
	});
	
	/* for Socail Icon*/
	
	data[0].footer[4].fsmlink.map(function(val,index){
		document.querySelector(".f-social-icons").innerHTML+=`
			<a href="${val.flink}" target="_blank">
				<ion-icon name="${val.ficons}" class="icon"></ion-icon>
			</a>
		`;
	});
	
	
	/*Scroll TO top Button*/
	const footer=document.getElementById("footer");
	const scrollElement=document.createElement("div");
	const nav= document.getElementById("nav");
	
	scrollElement.classList.add("scroll-top-style");
	scrollElement.innerHTML=`<ion-icon name="arrow-up-sharp" class="scroll-top"></ion-icon>`;	
	
	footer.after(scrollElement);
	
	const scrollTop=()=>{
		nav.scrollIntoView({behavior:"smooth"});
	};
	scrollElement.addEventListener("click",scrollTop);
	
	
	
	
	
}) 	//End Fetch Data