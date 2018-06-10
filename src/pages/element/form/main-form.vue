<template lang="pug">
el-form.main-form(:model="formData" label-position="left" label-width="160px")
	el-form-item(label="NAME")
		el-input(v-model="formData.name")
	el-form-item(label="EMAIL")
		el-input(v-model="formData.email")
	el-form-item(label="ADDRESS") {{ formData.address }}
	el-form-item(label="REGISTERED")
		el-date-picker(type="date" placeholder="选择日期" v-model="formData.registered")
	el-form-item(label="FAVORITE FRUIT")
		el-radio-group(v-model="formData.favoriteFruit")
			el-radio(label="apple")
			el-radio(label="banana")
			el-radio(label="strawberry")
	el-form-item(label="FRIENDS")
		friends(v-model="formData.friends")
</template>

<script>
import Friends from './friends'
export default {
	components: { Friends },

	props: {
		model: Object
	},

	data() {
		return {
			formData: this._.cloneDeep(this.model)
		}
	},

	watch: {
		model(val) {
			this.formData = this._.cloneDeep(val)
		},

		formData: {
			handler(val) {
				this.$emit('update', val)
			},
			deep: true
		}
	}
}
</script>

<style lang="sass">
.main-form
	width: 600px
</style>
