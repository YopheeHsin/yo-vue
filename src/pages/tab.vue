<template>
<div class="demo-tab">
	<yo-tab-list sticky swipeable>
		<yo-tab-item title="水龙吟">
			<p>似花还似非花，也无人惜从教坠。<br>
			抛家傍路，思量却是，无情有思。<br>
			萦损柔肠，困酣娇眼，欲开还闭。<br>
			梦随风万里，寻郎去处，又还被、莺呼起。</p>
			<p>不恨此花飞尽，恨西园、落红难缀。<br>
			晓来雨过，遗踪何在？一池萍碎。<br>
			春色三分，二分尘土，一分流水。<br>
			细看来，不是杨花，点点是离人泪。</p>
		</yo-tab-item>
		<yo-tab-item title="鹊桥仙">
			<p>纤云弄巧，飞星传恨，银汉迢迢暗度。<br>
			金风玉露一相逢，便胜却人间无数。</p>
			<p>柔情似水，佳期如梦，忍顾鹊桥归路。<br>
			两情若是久长时，又岂在朝朝暮暮。</p>
		</yo-tab-item>
		<yo-tab-item title="卜算子">
			<p>驿外断桥边，寂寞开无主。<br>
			已是黄昏独自愁，更著风和雨。</p>
			<p>无意苦争春，一任群芳妒。<br>
			零落成泥碾作尘，只有香如故。</p>
		</yo-tab-item>
		<yo-tab-item title="一剪梅">
			<p>红藕香残玉簟秋。<br>
			轻解罗裳，独上兰舟。<br>
			云中谁寄锦书来，雁字回时，月满西楼。</p>
			<p>花自飘零水自流。<br>
			一种相思，两处闲愁。<br>
			此情无计可消除，才下眉头，却上心头。</p>
		</yo-tab-item>
		<yo-tab-item title="丑奴儿">
			<p>少年不识愁滋味，爱上层楼。<br>
			爱上层楼。<br>
			为赋新词强说愁。</p>
			<p>今识尽愁滋味，欲说还休。<br>
			欲说还休。<br>
			却道天凉好个秋。</p>
		</yo-tab-item>
		<yo-tab-item title="虞美人">
			<p>少年听雨歌楼上。<br>
			红烛昏罗帐。<br>
			壮年听雨客舟中。<br>
			江阔云低、断雁叫西风。</p>
			<p>而今听雨僧庐下。<br>
			鬓已星星也。<br>
			悲欢离合总无情。<br>
			一任阶前、点滴到天明。</p>
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
	.yo-tab-item {
		padding: 5px 15px;
		line-height: 1.8em;
		font-size: 14px;
	}
}
</style>
