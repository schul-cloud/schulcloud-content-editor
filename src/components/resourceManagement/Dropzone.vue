<template>
	<div
		id="dropzone"
		:class="{ 'dropzone-over': dragging }"
		@dragstart.prevent="handleDragover"
		@dragover.prevent="handleDragover"
		@dragleave.prevent="handleDragleave"
		@drop="handleDropEvent"
		v-on="$listeners"
	>
		<slot></slot>
	</div>
</template>
<script>
export default {
	data() {
		return {
			dragging: false,
		};
	},
	methods: {
		handleDragover(event) {
			event.dataTransfer.dropEffect = "copy";
			this.dragging = true;
		},
		handleDragleave(event) {
			this.dragging = false;
		},
		handleDropEvent(event) {
			this.dragging = false;
		},
	},
};
</script>
<style lang="scss" scoped>
#dropzone {
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100px;
	margin: 1em auto;
	border: 2px dashed black;
	border-radius: 8px;
}

.dropzone-over {
	background: #eee;
}
</style>
