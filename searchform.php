<form role="search" method="get" id="searchform" action="<?php echo home_url('/'); ?>">
	<div class="row collapse">
		<div class="small-8 columns">
			<input type="text" value="" name="s" id="s" placeholder="<?php esc_attr_e('Search', 'reverie'); ?>">
		</div>
		<div class="small-4 columns">
			<input type="submit" id="searchsubmit" value="<?php esc_attr_e('Search', 'reverie'); ?>" class="prefix button">
		</div>
	</div>
</form>