		<footer id="content-info" role="contentinfo">
			<div class="row">
				<?php dynamic_sidebar("Footer"); ?>
			</div>
			<div class="row">
				<div class="four columns">
					&copy; 2008-<?php echo date('Y'); ?> All rights reserved.
					<br>
					<?php bloginfo('name'); ?> is powered by <a href="http://themefortress.com/reverie/" title="Reverie Framework">Reverie Framework</a>.
				</div>
				<?php wp_nav_menu(array('theme_location' => 'utility_navigation', 'container' => false, 'menu_class' => 'eight columns footer-nav')); ?>
			</div>
		</footer>
			
	</div><!-- Container End -->

	<!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if offline -->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="<?php echo get_template_directory_uri(); ?>/js/libs/jquery-1.6.4.min.js"><\/script>')</script>
	
	<!-- Included JS Files of Foundation -->
	<script src="<?php echo get_template_directory_uri(); ?>/js/foundation.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/app.js"></script>
	
	<!-- Prompt IE 6 users to install Chrome Frame. Remove this if you want to support IE 6.
	     chromium.org/developers/how-tos/chrome-frame-getting-started -->
	<!--[if lt IE 7]>
		<script defer src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
		<script defer>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
	<![endif]-->
	
	<?php wp_footer(); ?>
</body>
</html>