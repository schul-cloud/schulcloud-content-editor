<template>
	<div class="wrapper">
		<BaseSelect
			:label="$lang.edit.form.entrypointSelector"
			:options="options"
			:value="value"
			:disabled="disabled || !files.length"
			@input="$emit('input', $event)"
			name="Entrypoint"
		/>
	</div>
</template>

<script>
import BaseSelect from "@/components/base/BaseSelect";

export default {
	components: {
		BaseSelect,
	},
	props: {
		value: {
			type: String,
			default: "",
			required: true,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		files: {
			type: Array,
			default: () => [],
		},
	},
	computed: {
		options() {
			return this.files.map((elem) => {
				let obj = {};
				obj.key = "/" + elem;
				obj.value = elem;
				return obj;
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.wrapper {
	margin: 0.5rem 0 1rem;
}
</style>
