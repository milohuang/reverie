<?php
/*
Template Name: Full Width
*/
get_header(); ?>

	<!-- Row for main content area -->
	<div id="content" class="row">
	
		<div id="main" class="twelve columns" role="main">
			<div class="post-box">
				<?php get_template_part('loop', 'page'); ?>
			</div>
		</div><!-- /#main -->
		
	</div><!-- End content row -->
	
<?php get_footer(); ?>