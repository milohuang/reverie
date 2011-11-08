<?php get_header(); ?>

	<!-- Row for main content area -->
	<div id="content" class="row">
	
		<div id="main" class="eight columns" role="main">
			<div class="post-box">
				<?php get_template_part('loop', 'page'); ?>
			</div>
		</div><!-- /#main -->

		<aside id="sidebar" class="four columns" role="complementary">
			<div class="sidebar-box">
				<?php get_sidebar(); ?>
			</div>
		</aside><!-- /#sidebar -->

	</div><!-- End content row -->
	
<?php get_footer(); ?>