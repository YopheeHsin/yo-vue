<template>
<div class="demo-tab">
	<yo-tab-list>
		<yo-tab-item v-for="index in 8" :title="'选项 ' + index" :key="index">
			内容 {{ index }}
		</yo-tab-item>
	</yo-tab-list>
</div>
</template>

<script>
import YoTabList from '../components/yo-tab-list'
import YoTabItem from '../components/yo-tab-item'

export default {
	components: {
		YoTabList,
		YoTabItem
	}
}
</script>

<style lang="less">
.demo-tab {

}
</style>
