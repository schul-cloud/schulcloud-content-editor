<template>
	<Fragment>
		<tr v-if="replace !== undefined">
			<td style="text-align: right;">
				<div v-if="search" class="divider">
					{{ $lang.resourceManagement.bulk.search }}
				</div>
				<div>{{ $lang.resourceManagement.bulk.replace }}</div>
			</td>
			<td v-for="coloumn in visibleColoumns" :key="coloumn">
				<BulkEditInput
					v-if="search"
					v-model="search[coloumn]"
					:attribute="coloumn"
					:class="{ divider: search }"
				/>
				<BulkEditInput
					v-model="replace[coloumn]"
					:attribute="coloumn"
					:validate-required="true"
				/>
			</td>
			<!-- ACTIONS -->
			<td :rowspan="1" style="text-align: right;">
				<BaseButton
					@click="$emit('submit', replace)"
					type="button"
					class="action"
				>
					<i class="material-icons">
						check
					</i>
				</BaseButton>
				<BaseButton @click="$emit('delete')" type="button" class="action">
					<i class="material-icons">
						delete
					</i>
				</BaseButton>
			</td>
		</tr>
		<!-- EMPTY ROW (SPACER) -->
		<tr v-if="replace !== undefined" class="spacer"></tr>
	</Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";

import BaseButton from "@/components/base/BaseButton";
import BulkEditInput from "./BulkEditInput";

export default {
	components: {
		Fragment,
		BaseButton,
		BulkEditInput,
	},
	props: {
		replace: {
			type: Object,
			default: undefined,
		},
		search: {
			type: Object,
			default: undefined,
		},
		visibleColoumns: {
			type: Array,
			default: () => [],
		},
	},
	watch: {
		visibleColoumns: function(to) {
			Object.keys(this.replace || {}).forEach((key) => {
				if (!this.visibleColoumns.includes(key)) {
					this.replace[key] = undefined;
				}
			});
		},
	},
};
</script>

<style lang="scss" scoped>
td {
	position: relative;
	padding: 0 4px;
	overflow: hidden;
	overflow-x: auto;
	white-space: nowrap;
	border: 1px solid #333;
	&:focus-within:not(:last-of-type) {
		box-shadow: inset 0 0 0 2px var(--primaryColor);
	}
}
.divider {
	border-bottom: 1px solid #333;
}
.action {
	padding: 0;
	margin: 0 0.25em;
}
.spacer {
	height: 2rem;
}
</style>
