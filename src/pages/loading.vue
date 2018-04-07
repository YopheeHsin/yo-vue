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
		<yo-loading type="circle" color="white" size="30px" />
	</div>
	<div>
		<yo-loading type="gradient-circle" color="black" size="16px" />
		<yo-loading type="gradient-circle" color="white" />
	</div>
</div>
</template>

<script>
import yoLoading from '../components/yo-loading'

export default {
	components: {
		yoLoading
	}
}
</script>

<style lang="less">
.demo-loading {
	text-align: center;

	.yo-loading {
		display: inline-block;
		margin: 20px 10px;
		padding: 10px;

		&--white {
			background-color: rgba(0, 0, 0, .5);
			border-radius: 3px;
		}
	}
}
</style>
