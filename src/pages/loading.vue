<template>
<div class="demo-loading">
	<div>
		<yo-loading color="black" />
		<yo-loading color="white" />
	</div>
	<div>
		<yo-loading type="spinner" color="black" />
		<yo-loading type="spinner" color="white" />
	</div>
	<div>
		<yo-loading type="circle" color="black" />
		<yo-loading type="circle" color="white" />
	</div>
	<div>
		<yo-loading type="gradient-circle" color="black" />
		<yo-loading type="gradient-circle" color="white" />
	</div>
</div>
</template>

<script>
import YoLoading from '../components/yo-loading'

export default {
	components: {
		YoLoading
	}
}
</script>

<style lang="sass">
@import '../css/common/var'

.demo-loading
	text-align: center

	.yo-loading
		display: inline-block
		margin: 20px 10px
		padding: 10px

		&--white
			background-color: $mask
			border-radius: 3px
</style>
