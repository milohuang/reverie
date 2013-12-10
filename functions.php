<?php
/*
Author: Zhen Huang
URL: http://themefortress.com/

This place is much cleaner. Put your theme specific codes here,
anything else you may wan to use plugins to keep things tidy.

*/

/*
1. lib/clean.php
  - head cleanup
	- post and images related cleaning
*/
require_once('lib/clean.php'); // do all the cleaning and enqueue here

/*
2. lib/enqueue-style.php
    - enqueue Foundation and Reverie CSS
*/
require_once('lib/enqueue-style.php');

/*
3. lib/foundation.php
	- add pagination
*/
require_once('lib/foundation.php'); // load Foundation specific functions like top-bar
/*
4. lib/nav.php
	- custom walker for top-bar and related
*/
require_once('lib/nav.php'); // filter default wordpress menu classes and clean wp_nav_menu markup
/*
5. lib/presstrends.php
    - add PressTrends, tracks how many people are using Reverie
*/
require_once('lib/presstrends.php'); // load PressTrends to track the usage of Reverie across the web, comment this line if you don't want to be tracked

/**********************
Add theme supports
 **********************/
function reverie_theme_support() {
    // Add language supports.
    load_theme_textdomain('reverie', get_template_directory() . '/lang');

    // Add post thumbnail supports. http://codex.wordpress.org/Post_Thumbnails
    add_theme_support('post-thumbnails');
    // set_post_thumbnail_size(150, 150, false);
    add_image_size( 'fd-lrg', 1024, 99999);
    add_image_size( 'fd-med', 768, 99999);
    add_image_size( 'fd-sm', 320, 9999);

    // rss thingy
    add_theme_support('automatic-feed-links');

    // Add post formarts supports. http://codex.wordpress.org/Post_Formats
    add_theme_support('post-formats', array('aside', 'gallery', 'link', 'image', 'quote', 'status', 'video', 'audio', 'chat'));

    // Add menu supports. http://codex.wordpress.org/Function_Reference/register_nav_menus
    add_theme_support('menus');
    register_nav_menus(array(
        'primary' => __('Primary Navigation', 'reverie'),
        'additional' => __('Additional Navigation', 'reverie'),
        'utility' => __('Utility Navigation', 'reverie')
    ));

    $menuname = 'Reverie Menu';
    $menulocation = 'additional';
    // Does the menu exist already?
    $menu_exists = wp_get_nav_menu_object( $menuname );

    // If it doesn't exist, let's create it.
    if( !$menu_exists){
        $menu_id = wp_create_nav_menu($menuname);

        // Set up default Reverie links and add them to the menu.
        $reverie_menu = wp_update_nav_menu_item($menu_id, 0, array(
            'menu-item-title' =>  __('Made with Love in Reverie'),
            'menu-item-url' => home_url( '/' ), 
            'menu-item-status' => 'publish'));

        wp_update_nav_menu_item($menu_id, 0, array(
            'menu-item-title' =>  __('Reverie Official Website'),
            'menu-item-url' => 'http://themefortress.com/reverie/',
            'menu-item-parent-id' => $reverie_menu,
            'menu-item-status' => 'publish'));

        wp_update_nav_menu_item($menu_id, 0, array(
            'menu-item-title' =>  __('Reverie Support Forum'),
            'menu-item-url' => 'http://themefortress.com/forum/',
            'menu-item-parent-id' => $reverie_menu,
            'menu-item-status' => 'publish'));

        wp_update_nav_menu_item($menu_id, 0, array(
            'menu-item-title' =>  __('Reverie Github Repo'),
            'menu-item-url' => 'https://github.com/milohuang/reverie/',
            'menu-item-parent-id' => $reverie_menu,
            'menu-item-status' => 'publish'));

        wp_update_nav_menu_item($menu_id, 0, array(
            'menu-item-title' =>  __('ZURB Foundation'),
            'menu-item-url' => 'http://foundation.zurb.com/',
            'menu-item-parent-id' => $reverie_menu,
            'menu-item-status' => 'publish'));

        // Grab the theme locations and assign our newly-created menu
        // to the Reverie menu location.
        if( !has_nav_menu( $menulocation ) ){
            $locations = get_theme_mod('nav_menu_locations');
            $locations[$menulocation] = $menu_id;
            set_theme_mod( 'nav_menu_locations', $locations );
        }
    }

    // Add custom background support
    add_theme_support( 'custom-background',
        array(
            'default-image' => '',  // background image default
            'default-color' => '', // background color default (dont add the #)
            'wp-head-callback' => '_custom_background_cb',
            'admin-head-callback' => '',
            'admin-preview-callback' => ''
        )
    );
}
add_action('after_setup_theme', 'reverie_theme_support'); /* end Reverie theme support */

// create widget areas: sidebar, footer
$sidebars = array('Sidebar');
foreach ($sidebars as $sidebar) {
    register_sidebar(array('name'=> $sidebar,
        'before_widget' => '<article id="%1$s" class="panel widget %2$s">',
        'after_widget' => '</article>',
        'before_title' => '<h4>',
        'after_title' => '</h4>'
    ));
}
$sidebars = array('Footer');
foreach ($sidebars as $sidebar) {
    register_sidebar(array('name'=> $sidebar,
        'before_widget' => '<div class="large-3 columns"><article id="%1$s" class="panel widget %2$s">',
        'after_widget' => '</article></div>',
        'before_title' => '<h4>',
        'after_title' => '</h4>'
    ));
}

// return entry meta information for posts, used by multiple loops.
if(!function_exists('reverie_entry_meta')) :
    function reverie_entry_meta() {
        echo '<span class="byline author">'. __('Written by', 'reverie') .' <a href="'. get_author_posts_url(get_the_author_meta('ID')) .'" rel="author" class="fn">'. get_the_author() .', </a></span>';
        echo '<time class="updated" datetime="'. get_the_time('c') .'" pubdate>'. get_the_time('F jS, Y') .'</time>';
    }
endif;
?>