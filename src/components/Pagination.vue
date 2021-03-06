<template>
	<div class="pagination">
		<BaseButton
			:disabled="config.page == 1"
			:raised="config.page != 1"
			:round-shape="true"
			@click="config.page -= 1"
			styling="secondary"
			class="pagination-button"
		>
			<i class="material-icons">arrow_back</i>
		</BaseButton>

		<div :raised="true" class="page-number" styling="primary">
			<input
				v-model.lazy="pageString"
				:max="maxPages"
				type="number"
				min="1"
				aria-label="Eingabe der aktuellen Seite"
			/>
		</div>

		<BaseButton
			:disabled="config.page == maxPages"
			:raised="config.page != maxPages"
			:round-shape="true"
			@click="config.page += 1"
			styling="secondary"
			class="pagination-button"
		>
			<i class="material-icons">arrow_forward</i>
		</BaseButton>
	</div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton";

export default {
	components: {
		BaseButton,
	},
	props: {
		config: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			pageString: "1", // needed to display current page (only strings allowed for v-model)
		};
	},
	computed: {
		maxPages() {
			return Math.ceil(this.config.totalEntrys / this.config.itemsPerPage) || 1;
		},
	},
	watch: {
		"config.page": function() {
			if (this.config.scroll) {
				window.scroll(this.config.scroll);
			}
			this.pageString = this.config.page.toString();
			this.$emit("pageChanged", this.config.page);
		},
		pageString(to, from) {
			if (to) {
				const newPage = Number.parseInt(this.pageString);
				if (newPage < 1) {
					this.pageString = "1";
				} else if (newPage > this.maxPages) {
					this.pageString = this.maxPages.toString();
				} else {
					this.config.page = newPage;
				}
			}
		},
	},
	created() {
		this.pageString = this.config.page.toString();
	},
};
</script>

<style lang="scss" scoped>
.pagination {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin-top: 2rem;

	.pagination-button {
		font-size: 0;
		line-height: 0;
	}
}
[disabled] {
	visibility: hidden;
}
.page-number {
	height: 40px;
	padding: 0;
	margin: 0;
	font-family: inherit;
	font-size: 14px;
	font-weight: 500;
	color: #fff;
	text-transform: uppercase;
	background: rgba(255, 255, 255, 0);
	background-color: var(--primaryColor);
	border: none;
	border-radius: 2px;
	box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
		0 1px 5px 0 rgba(0, 0, 0, 0.12);
	transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	&:hover,
	&:focus {
		background: var(--accentColor);
	}
	input {
		width: 100%;
		max-width: 88px;
		height: 40px;
		padding: 0;
		margin: 0;
		font-size: 1.2em;
		font-weight: bold;
		line-height: 1em;
		color: inherit;
		text-align: center;
		background: transparent;
		border: none;
		outline: none;
		&::-webkit-inner-spin-button,
		&::-webkit-outer-spin-button {
			margin: 0;
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
		}
	}
}
</style>
