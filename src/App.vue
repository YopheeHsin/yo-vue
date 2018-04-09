<template>
<div>
	<yo-cell title="loading" is-link to="/loading" />
	<yo-cell title="icon" is-link to="/icon" />
	<yo-cell title="stepper" is-link to="/stepper" />
	<yo-cell title="collapse" is-link to="/collapse" />
</div>
</template>

<script>
import yoCell from './components/yo-cell'
export default {
	name: 'App',

	components: {
		yoCell
	}
}
</script>
