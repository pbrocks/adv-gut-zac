<?php

namespace Adv_Gut_Zac\Example_Blocks;

define( 'ADVGUTZAC_REST_NAMESPACE', 'adv-gut-zac/v1' );
define( 'ADVGUTZAC_BLOCK_SETTING', 'advgutzac_global_block_setting' );

add_action( 'rest_api_init', __NAMESPACE__ . '\custom_endpoints' );
/**
 * Create custom endpoints for block settings
 */
function custom_endpoints() {

	register_rest_route(
		ADVGUTZAC_REST_NAMESPACE,
		'block-setting/',
		[
			'methods'  => \WP_REST_Server::READABLE,
			'callback' => __NAMESPACE__ . '\get_block_setting',
		]
	);

	register_rest_route(
		ADVGUTZAC_REST_NAMESPACE,
		'block-setting/',
		[
			'methods'             => \WP_REST_Server::EDITABLE,
			'callback'            => __NAMESPACE__ . '\update_block_setting',
			'permission_callback' => __NAMESPACE__ . '\check_permissions',
		]
	);

}

function get_block_setting() {

	$block_setting = get_option( ADVGUTZAC_BLOCK_SETTING );

	$response = new \WP_REST_Response( $block_setting );
	$response->set_status( 200 );

	return $response;
}

function update_block_setting( $request ) {

	$new_block_setting = $request->get_body();
	update_option( ADVGUTZAC_BLOCK_SETTING, $new_block_setting );

	$block_setting = get_option( ADVGUTZAC_BLOCK_SETTING );
	$response      = new \WP_REST_Response( $block_setting );
	$response->set_status( 201 );

	return $response;

}

function check_permissions() {
	return current_user_can( 'edit_posts' );
}
