<?php

/*
  Plugin Name: Latex Quiz Block 2023
  Version: 1.0
  Author: Simphiwe Hlophe
*/

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

// This is the declaration of the class. Constructor initializes scrips,
class LatexQuizBlock{
    function __construct() {
        add_action('init', array($this, 'adminAssets'));
    }

    //This is a function to load styles and scripts
    function adminAssets() {
        wp_register_style('quizeditcss', plugin_dir_url(__FILE__) . 'build/index.css');
        wp_register_script('ournewquizblock', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks','wp-element','wp-editor'));
        register_block_type('simp/my-latex-quiz',array(
            'editor_script' =>'ournewquizblock',
            'editor_style' =>'quizeditcss',
            'render_callback' =>array($this, 'theHTML')
        ));
    }
    //call back function to return dynamic html for a dynamic guttenburg block.
    function theHTML($attributes){
        ob_start(); ?>
            '<p> Today the sky is'  . <?php echo esc_html($attributes['skyColor']) ?>. ' and the grass is ' .<?php echo esc_html( $attributes['grassColor']) ?>. '!!!</p>';
       <?php return ob_get_clean();

    }

}



$latexQuizBlock = new LatexQuizBlock();