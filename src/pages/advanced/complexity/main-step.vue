<template lang="pug">
.main-step
	el-button-group.step-type
		el-button(
			:type="formData.type === 'manual' ? 'primary' : 'secondary'"
			size="medium"
		) 手动
		el-button(
			:type="formData.type === 'automatic' ? 'primary' : 'secondary'"
			size="medium"
		) 自动
	el-form(
		label-width="160px"
	)
		el-form-item(
			label="重复次数"
		)
			.times-slider-container
				el-slider.times-slider(
					v-model="formData.frequency.times"
					:step="1"
					:min="1"
					:max="25"
					@change="onSliderChange"
				)
				.times-slider-mark
					span(v-for="n in 25" :key="n") {{ n === 1 || n%5 === 0 ? n : '' }}
		el-form-item(
			label="名称"
		)
			.round-list
				el-input.round-item(
					v-for="(round, index) in formData.frequency.rounds"
					:key="index"
					v-model="formData.frequency.rounds[index]"
					:placeholder="'重复' + (index + 1)"
				) {{ round }}
		el-form-item(
			label="重复类型"
			v-show="formData.frequency.times > 1"
		)
			el-radio-group(
				v-model="formData.frequency.rate"
				@change="onRateChange"
			)
				el-radio(label="noInterval") 不限制
				el-radio(label="sameInterval") 均匀
				el-radio(label="differentInterval" v-show="formData.frequency.times > 2") 非均匀
		el-form-item(
			label="间隔时间"
			v-show="formData.frequency.times > 1 && formData.frequency.rate !== 'noInterval'"
		)
			| {{ formData.frequency.rate === 'sameInterval' ? '每' : '隔' }}&nbsp;
			el-input.rate-info(
				v-model="formData.frequency.rate_info.num"
				:placeholder="rateInfoPlaceholder"
			)
				el-select(v-model="formData.frequency.rate_info.unit" slot="append")
					el-option(label="天" value="day")
					el-option(label="月" value="month")
					el-option(label="年" value="year")
			| &nbsp;进行一次
		el-form-item(
			label="时间范围"
		)
			| 前&nbsp;
			el-input.time-range(v-model.number='formData.frequency.time_range[0]')
			| &nbsp;天开始，后&nbsp;
			el-input.time-range(v-model.number='formData.frequency.time_range[1]')
			| &nbsp;天结束
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
	data() {
		return {
			isformDataInit: true,
			formData: {}
		}
	},

	computed: {
		...mapGetters(['activeStepId', 'activeStep']),

		rateInfoPlaceholder() {
			const frequency = this.formData.frequency

			let ph = ''
			if (frequency.rate === 'differentInterval') {
				const times = frequency.times
				const _arr = []
				for(let i = 1; i < times; i++) {
					_arr.push(i)
				}
				ph = `逗号分隔, 如: ${_arr.join(',')}`
			}
			return ph
		}
	},

	watch: {
		activeStepId() {
			this.initFormData()
		},

		formData: {
			handler(step) {
				if (this.isformDataInit) {
					this.isformDataInit = false
					return
				}
				this.setMainStep(this._.cloneDeep(step))
			},
			deep: true
		}
	},

	methods: {
		...mapMutations({
			setMainStep: 'TASKS_SET_MAIN_STEP'
		}),

		initFormData() {
			this.isformDataInit = true
			this.formData = this._.cloneDeep(this.activeStep)
		},

		onSliderChange(val) {
			const frequency = this.formData.frequency

			const rounds = frequency.rounds
			const l = rounds.length
			if (val > l) {
				for(let i = 0; i < val - l; i++) {
					rounds.push('')
				}
			} else if(val < l) {
				rounds.splice(val, l - val)
			}

			frequency.rate = 'noInterval'
			frequency.rate_info.num = ''
			frequency.rate_info.unit = 'day'
		},

		onRateChange() {
			this.formData.frequency.rate_info.num = ''
		}
	},

	created() {
		this.initFormData()
	}
}
</script>

<style lang="sass" scoped>
.main-step
	/deep/ .el-form-item__label
		padding-right: 30px
	.step-type
		display: block
		width: 300px
		margin: 20px auto 50px
		.el-button
			width: 150px
	.times-slider-container
		padding-left: 10px
	.times-slider
		width: 500px
	.times-slider-mark
		display: flex
		justify-content: space-between
		position: relative
		top: -10px
		left: -7px
		width: 514px
		span
			position: relative
			width: 15px
			text-align: center
			&:before
				content: ''
				position: absolute
				top: 0
				left: 7px
				width: 1px
				height: 6px
				background-color: #d8d8d8
	.round-item
		width: 150px
		margin: 0 10px 10px 0
	.rate-info
		width: 250px
		/deep/ .el-input-group__append
			width: 24px
			background-color: #fff
	.time-range
		width: 50px
</style>
