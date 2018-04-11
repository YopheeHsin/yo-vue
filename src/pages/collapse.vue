<template>
<div class="demo-collapse">
	<yo-collapse-list v-model="activeNames" accordion>
		<yo-collapse-item name="1">
			<div slot="title">寻隐者不遇 <yo-icon name="map-pin" /></div>
			<p>松下问童子，言师采药去。<br>
			只在此山中，云深不知处。</p>
		</yo-collapse-item>
		<yo-collapse-item title="问刘十九" name="2">
			<p>绿蚁新醅酒，红泥小火炉。<br>
			晚来天欲雪，能饮一杯无？</p>
		</yo-collapse-item>
		<yo-collapse-item title="近试上张水部" name="3">
			<p>洞房昨夜停红烛，待晓堂前拜舅姑。<br>
			妆罢低声问夫婿，画眉深浅入时无。</p>
		</yo-collapse-item>
	</yo-collapse-list>
</div>
</template>

<script>
import YoIcon from '../components/yo-icon'
import YoCollapseList from '../components/yo-collapse-list'
import YoCollapseItem from '../components/yo-collapse-item'

export default {
	components: {
		YoIcon,
		YoCollapseList,
		YoCollapseItem
	},

	data() {
		return {
			activeNames: '1'
		}
	}
}
</script>

<style lang="less">
.demo-collapse {
	p {
		margin: 0;
		font-size: 14px;
	}
}
</style>
