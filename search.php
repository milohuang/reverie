<?php get_header(); ?>
	<div id="content" class="row">	
		<div id="main" class="eight columns" role="main">
			<div class="post-box">
				<h1><?php _e('Search Results for', 'reverie'); ?> "<?php echo get_search_query(); ?>"</h1>
				<hr>				
				<?php get_template_part('loop', 'search'); ?>
			</div>
		</div><!-- /#main -->		
		<aside id="sidebar" class="four columns" role="complementary">
			<div class="sidebar-box">
				<?php get_sidebar(); ?>
			</div>
		</aside><!-- /#sidebar -->		
	</div><!-- /#content -->
<?php get_footer(); ?>