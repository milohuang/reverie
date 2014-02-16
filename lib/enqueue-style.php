<?php
/*********************
Enqueue the proper CSS
if you use Sass.
*********************/
if( ! function_exists( 'reverie_enqueue_style' ) ) {
	function reverie_enqueue_style()
	{
		// foundation stylesheet
		wp_register_style( 'reverie-foundation-stylesheet', get_stylesheet_directory_uri() . '/css/app.css', array(), '' );

		// Register the main style
		wp_register_style( 'reverie-stylesheet', get_stylesheet_directory_uri() . '/css/style.css', array(), '', 'all' );
		
		wp_enqueue_style( 'reverie-foundation-stylesheet' );
		wp_enqueue_style( 'reverie-stylesheet' );
		
	}
}
add_action( 'wp_enqueue_scripts', 'reverie_enqueue_style' );
?>
