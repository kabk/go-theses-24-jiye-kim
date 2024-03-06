$( document ).ready( function( ) {

    const rellax = new Rellax('.rellax', { center: true } );

	// Get the navbar
	const navbar = document.getElementById( 'navbar' );
	const page = document.getElementById( 'page' );

	// var subtitle = document.getElementId("subtitle");

	// Get the offset position of the navbar
	const sticky = page.offsetTop;

	const chapters = document.querySelectorAll( '.chapter' );
	

	function updateScroll( ) {

	
		
		// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position

		if ( window.pageYOffset >= sticky ) {
			navbar.classList.add("sticky");

			document.getElementById("navbar").innerHTML = 
			'<a href="#c1"><strong>1</strong></a> <a href="#c2"><strong>2</strong></a> <a href="#c3"><strong>3</strong></a> <a href="#c4"><strong>4</strong></a>';
			
			// subtitle.classList.add("sticky");

		} else {
			navbar.classList.remove("sticky");

			document.getElementById("navbar").innerHTML = 
			'<ul> <li><a href="#intro">Introduction</a></li> <li><a href="#c1"><strong>1</strong> <br> In the Shadows of Achievement</a></li> <li><a href="#c2"><strong>2</strong> <br> Psychological Barrier to Productivity</a></li> <li><a href="#c3"><strong>3</strong> <br> Resistance to Change Exposed in Individuals’ Cognition and Behaviors</a></li> <li><a href="#c4"><strong>4</strong> <br> Seeking Balance through Doing Nothing</a></li> <li><a href="#con">Conclusion</a></li> <li><a href="#Bibliography">Bibliography</a></li> </ul>';

			// subtitle.classList.remove("sticky");
		}
	}
	
	// When the user scrolls the page, execute updateScroll
	window.onscroll = updateScroll;

// 	const current = 0;
// 	for (var i = 0; i < document.links.length; i++) {
// 		if (document.links[i].href === document.URL) {
// 			current = i;
// 		}
// 	}
// 	
// 	document.links[current].className = 'current';
} );