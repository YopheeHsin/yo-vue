<template>
<div>
	<yo-cell-group border>
		<yo-cell title="loading" is-link to="/loading" />
		<yo-cell title="icon" is-link to="/icon" />
		<yo-cell title="stepper" is-link to="/stepper" />
		<yo-cell title="collapse" is-link to="/collapse" />
		<yo-cell title="pagination" is-link to="/pagination" />
		<yo-cell title="switch" is-link to="/switch" />
	</yo-cell-group>
</div>
</template>

<script>
import YoCellGroup from './components/yo-cell-group'
import YoCell from './components/yo-cell'

export default {
	name: 'App',

	components: {
		YoCellGroup,
		YoCell
	}
}
</script>
