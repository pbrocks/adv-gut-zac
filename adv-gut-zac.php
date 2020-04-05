<?php
/**
 * Plugin Name:     Adv_Gut_Zac
 * Plugin URI:      https://github.com/pbrocks/adv-gut-zac
 * Description:     Custom blocks for WordPress.
 * Author:          pbrocks
 * Author URI:      https://github.com/pbrocks
 * Text Domain:     adv-gut-zac
 * Domain Path:     /languages
 * Version:         0.1.1
 *
 * @package adv_gut_zac
 */

namespace Adv_Gut_Zac\Example_Blocks;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Gets this plugin's absolute directory path.
 *
 * @since  2.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_directory() {
	return __DIR__;
}

/**
 * Gets this plugin's URL.
 *
 * @since  2.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_url() {
	static $plugin_url;

	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}

	return $plugin_url;
}

add_action( 'plugins_loaded', __NAMESPACE__ . '\load_adv_gut_zac_init' );
/**
 * load_adv_gut_zac_init
 *
 * Acticvate php files found in folders
 *
 * @return null
 */
function load_adv_gut_zac_init() {
	if ( file_exists( __DIR__ . '/inc' ) && is_dir( __DIR__ . '/inc' ) ) {
		foreach ( glob( __DIR__ . '/inc/*.php' ) as $filename ) {
			include $filename;
		}
	}
}


function adv_gut_zac_editor_assets() {
	$url = untrailingslashit( plugin_dir_url( __FILE__ ) );

	// Scripts.
	wp_enqueue_script(
		'adv-gut-zac-js',
		$url . '/build/index.js',
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-plugins',
			'wp-edit-post',
		)
	);
	// Styles.
	wp_enqueue_style(
		'adv-gut-zac-editor-css',
		$url . '/build/editor.css',
		array( 'wp-edit-blocks' )
	);
}

add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\adv_gut_zac_editor_assets' );

/**
 * [adv_gut_zac_assets] Hook assets into the editor.
 *
 * @return [type] [description]
 */
function adv_gut_zac_assets() {
	$url = untrailingslashit( plugin_dir_url( __FILE__ ) );

	wp_enqueue_style(
		'adv-gut-zac-frontend-css',
		$url . '/build/style.css'
	);
}

add_action( 'enqueue_block_assets', __NAMESPACE__ . '\adv_gut_zac_assets' );

/**
 * Adding a block category creates a Panel
 */
function create_adv_gut_zac_panel( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug'  => 'adv-gut-zac',
				'title' => __( 'Gather Blocks Panel', 'adv-gut-zac' ),
			),
		)
	);
}
add_filter( 'block_categories', __NAMESPACE__ . '\create_adv_gut_zac_panel', 10, 2 );
