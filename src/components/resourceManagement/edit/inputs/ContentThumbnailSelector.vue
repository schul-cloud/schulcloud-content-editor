<template>
	<BaseSelect
		:label="$lang.edit.form.thumbnailSelector"
		:options="options"
		:value="value"
		:disabled="disabled || !files.length"
		@input="$emit('input', $event)"
		name="Thumbnail"
	/>
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
		resourceId: {
			type: String,
			required: true,
		},
	},
	computed: {
		options() {
			return [
				{ key: "", value: this.$lang.edit.form.thumbnailAutogenerate },
				...this.files.map((elem) => {
					let obj = {};
					obj.key = "/" + elem;
					obj.value = elem;
					return obj;
				}),
			];
		},
	},
};
</script>
