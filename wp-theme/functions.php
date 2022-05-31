<?php
function add_portalead_scripts() {
  wp_enqueue_style( 'style', get_stylesheet_uri() );
  
  wp_enqueue_style( 'global', get_template_directory_uri() . '/css/global.css', array(), '1.1', 'all');
  
  wp_enqueue_script( 'scripts', get_template_directory_uri() . '/js/scripts.js', array ( 'jquery' ), 1.1, true);
  
    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
      wp_enqueue_script( 'comment-reply' );
    }
}
add_action( 'wp_enqueue_scripts', 'add_portalead_scripts' );
?>