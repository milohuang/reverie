<form role="search" method="get" id="searchform" class="nice custom" action="<?php echo home_url('/'); ?>">
	<label class="visuallyhidden" for="s"><?php _e('Search for:', 'reverie'); ?></label>
	<input type="text" value="" name="s" id="s" class="input-text" placeholder="<?php _e('Search', 'reverie'); ?>">
	<input type="submit" id="searchsubmit" value="<?php _e('Search', 'reverie'); ?>" class="white nice button radius">
</form>
