  // Set the negative margin on the top menu for slide-menu pages
  var $selector = $('#topMenu');
  if ($selector.length > 0) {
    $selector.css("margin-top", $selector.height() * -1);
  }
  
  // Watch for clicks to show the sidebar
  $selector = $('#sidebarButton');
  if ($selector.length > 0) {
    $('#sidebarButton').click(function(e){
      e.preventDefault();
      $('body').toggleClass('active');
    });
  }
  
  // Watch for clicks to show the menu for slide-menu pages
  $selector = $('#menuButton');
  if ($selector.length > 0)  {
    $('#menuButton').click(function(e){
      e.preventDefault();
      $('body').toggleClass('active-menu');
    });
  }
  
  // Adjust sidebars and sizes when resized
  $(window).resize(function() {
  	$('body').removeClass('active');	
  	var $selector = $('#topMenu');
  	if ($selector.length > 0) {
    	$selector.css("margin-top", $selector.height() * -1);
  	}
  });
  
  
  // Switch panels for the paneled nav on mobile
  $selector = $('#switchPanels');
  if ($selector.length > 0)  {
    $('#switchPanels dd').click(function(e){
      e.preventDefault();
      $(this).toggleClass('active').siblings().removeClass('active');
      var switchToPanel = $(this).children('a').attr('href');
      /* window.location.hash = switchToPanel; */
      var switchToIndex = $(switchToPanel).index();
      console.log(switchToIndex);
      $(switchToPanel).parent().css("left", (switchToIndex * (-100) + '%'));
    });
  }