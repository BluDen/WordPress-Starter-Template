<?php
add_theme_support( 'title-tag' );

function enqueue_styles_and_scripts() {
    wp_enqueue_style( 'app-bundle-style', get_template_directory_uri() . '/dist/styles/app.bundle.css' );
    wp_enqueue_script( 'app-bundle-script', get_template_directory_uri() . '/dist/scripts/app.bundle.js', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'enqueue_styles_and_scripts' );