<template>
	<BaseInput
		:value="value"
		:label="getLabel"
		:error="error"
		@input="$emit('input', $event)"
		name="title"
		type="text"
		placeholder="Malen nach Zahlen"
	/>
</template>

<script>
import BaseInput from "@/components/base/BaseInput";

export default {
	components: {
		BaseInput,
	},
	props: {
		value: {
			type: String,
			required: true,
		},
		error: {
			type: String,
			default: "",
		},
		withoutLabel: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		getLabel: function() {
			if (!this.withoutLabel) return this.$lang.edit.form.title;
			else return "";
		},
	},
};
</script>
