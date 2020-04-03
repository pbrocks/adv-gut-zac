<?php

namespace Adv_Gut_Zac\Example_Blocks;

add_filter(
	'block_categories',
	function( $categories, $post ) {
		return array_merge(
			$categories,
			[
				[
					'slug'  => 'adv-gut-zac',
					'icon'  => 'wordpress-alt',
					'title' => __( 'JS for WP - Advanced Blocks', 'adv-gut-zac' ),
				],
			],
			[
				[
					'slug'  => 'recommended',
					'icon'  => 'star-filled',
					'title' => __( 'Recommended Blocks', 'adv-gut-zac' ),
				],
			]
		);
	},
	10,
	2
);
