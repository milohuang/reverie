		</section><!-- End Main Section -->

		<section id="sidebar-off" role="complementary">
			<nav id="sideMenu" role="navigation">
		    	<?php
		    	    wp_nav_menu( array(
		    			'theme_location' => 'primary',
		    			'depth' => 2,
		    			'items_wrap' => '<ul class="nav-bar">%3$s</ul>',
		    			'fallback_cb' => 'reverie_menu_fallback', // workaround to show a message to set up a menu
		    			'walker' => new reverie_walker()
		    		) );
		    	?>											
		   	</nav>
		</section>
		
		</div><!-- End Off-Canvas Row -->
		
		<footer id="content-info" role="contentinfo">
			<div class="row">
				<?php dynamic_sidebar("Footer"); ?>
			</div>
			<div class="row">
				<div class="four columns">
					&copy; 2008-<?php echo date('Y'); ?> All rights reserved.
					<br>
					Powered by <a href="http://themefortress.com/reverie/" rel="nofollow" title="Reverie Framework">Reverie Framework</a>.
				</div>
				<div class="eight columns">
					<?php wp_nav_menu(array('theme_location' => 'utility', 'container' => false, 'menu_class' => 'inline-list right')); ?>
				</div>
			</div>
		</footer>
			
	</div><!-- Container End -->
	
	<!-- Prompt IE 6 users to install Chrome Frame. Remove this if you want to support IE 6.
	     chromium.org/developers/how-tos/chrome-frame-getting-started -->
	<!--[if lt IE 7]>
		<script defer src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
		<script defer>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
	<![endif]-->
	
	<?php wp_footer(); ?>
</body>
</html>