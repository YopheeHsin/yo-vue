<template>
<div class="demo-test">
	<yo-test v-model="test" />
	<p>{{ test }}</p>
</div>
</template>

<script>
import YoTest from '../components/yo-test'

export default {
	components: {
		YoTest
	},

	data() {
		return {
			test: 1,
		}
	}
}
</script>

<style lang="less">
.demo-test {

}
</style>
