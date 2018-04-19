<template>
<div class="yo-tab" :class="`yo-tab--${type}`">
	<div ref="wrap" class="yo-tab__wrap" :class="[
		`yo-tab__wrap--${position}`,
		{
			'yo-tab--scrollable': scrollable,
			'yo-hairline--top-bottom': type === 'line'
		}
	]">
		<div ref="nav" class="yo-tab__nav" :class="`yo-tab__nav--${type}`">
			<div v-if="type === 'line'" class="yo-tab__nav-bar" :style="navBarStyle" />
			<div ref="tabs" v-for="(tab, index) in tabs" :key="index"
				class="yo-tab" :class="{
					'yo-tab--active': index === curActive,
					'yo-tab--disabled': tab.disabled
				}"
				@click="onClick(index)"
			>
				<yo-node v-if="tab.$slots.title" :node="tab.$slots.title" />
				<span v-else class="yo-ellipsis">{{ tab.title }}</span>
			</div>
		</div>
	</div>
	<div ref="content" class="yo-tab__content">
		<slot />
	</div>
</div>
</template>

<script>
export default {
	name: 'yo-tab-list'
}
</script>
