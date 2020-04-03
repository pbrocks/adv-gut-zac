<?php

namespace Adv_Gut_Zac\Example_Blocks;

$option_name = 'advgutzac_global_block_setting';

if ( get_option( $option_name ) === false ) {
	update_option( $option_name, '' );
}

