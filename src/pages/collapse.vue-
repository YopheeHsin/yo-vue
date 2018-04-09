<template>
<div class="demo-collapse">
	<yo-collapse-list v-model="activeNames" accordion>
		<yo-collapse-item title="有赞微商城" name="1">
			提供多样店铺模板，快速搭建网上商城
		</yo-collapse-item>
		<yo-collapse-item name="2">
			<div slot="title">有赞零售<yo-icon name="bullseye" /></div>
			网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
		</yo-collapse-item>
		<yo-collapse-item title="有赞美业" name="3">
			线上拓客，随时预约，贴心顺手的开单收银
		</yo-collapse-item>
	</yo-collapse-list>
</div>
</template>

<script>
import yoIcon from '../components/yo-icon'
import yoCollapseList from '../components/yo-collapse-list'
import yoCollapseItem from '../components/yo-collapse-item'

export default {
	data() {
		return {
			activeNames: '1'
		}
	},

	components: {
		yoIcon,
		yoCollapseList,
		yoCollapseItem
	}
}
</script>

<style lang="less">
.demo-collapse {
	// text-align: center;

	// .yo-loading {
	// 	display: inline-block;
	// 	margin: 20px 10px;
	// 	padding: 10px;

	// 	&--white {
	// 		background-color: rgba(0, 0, 0, .5);
	// 		border-radius: 3px;
	// 	}
	// }
}
</style>
