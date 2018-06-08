<template lang="pug">
el-form.main-form(:model="model" label-position="left" label-width="160px")
	el-form-item(label="NAME")
		el-input(v-model="model.name")
	el-form-item(label="EMAIL")
		el-input(v-model="model.email")
	el-form-item(label="ADDRESS") {{ model.address }}
	el-form-item(label="REGISTERED")
		el-date-picker(type="date" placeholder="选择日期" v-model="model.registered")
	el-form-item(label="FAVORITE FRUIT")
		el-radio-group(v-model="model.favoriteFruit")
			el-radio(label="apple")
			el-radio(label="banana")
			el-radio(label="strawberry")
	el-form-item(label="FRIENDS")
</template>

<script>
export default {
	props: ['model']
}
</script>

<style lang="sass">
.main-form
	width: 600px
</style>
