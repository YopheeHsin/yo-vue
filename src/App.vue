<template>
<div>
	<yoCell title="loading" isLink to="/loading" />
	<yoCell title="icon" isLink to="/icon" />
	<yoCell title="stepper" isLink to="/stepper" />
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
