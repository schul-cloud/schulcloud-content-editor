﻿<template>
	<article>
		<BaseCard>
			<template slot="media">
				<img
					:src="
						data.fullThumbnail ||
							data.thumbnail ||
							'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
					"
					:alt="'Thumbnail for ~' + data.title + '~'"
				/>
			</template>
			<template slot="head">
				<h2 class="title">{{ data.title || "Titel" }}</h2>
				<div class="tags">
					<i class="material-icons">label</i>
					<span
						v-for="(tag, index) in (data.tags || []).slice(
							0,
							this.$config.card.displayedTags
						)"
						:key="`${index}-${tag}`"
					>
						{{ tag }},
					</span>
				</div>
			</template>
			<template slot="body">
				{{ (data.description || "Beschreibung...").substring(0, 300) }}
				{{ (data.description || "").length > 300 ? "..." : "" }}
			</template>
			<template slot="footer">
				<div class="button_wrapper">
					<div class="provider-name">{{ providerName }}</div>
					<div>
						<BaseButton
							v-if="data._id"
							@click="dialog.active = true"
							styling="secondary"
						>
							{{ $lang.buttons.open }}
						</BaseButton>
						<RouterLink
							v-if="readOnly != true"
							:to="{
								name: 'resourceManagement/edit',
								params: { id: data._id },
							}"
						>
							<BaseButton styling="secondary">
								{{ $lang.buttons.edit }}
							</BaseButton>
						</RouterLink>
					</div>
				</div>
			</template>
		</BaseCard>
		<BaseConfirm
			:active.sync="dialog.active"
			v-bind="dialog"
			@confirm="onConfirm"
		/>
	</article>
</template>

<script>
const BaseConfirm = () => import("@/components/base/BaseConfirm");
import BaseCard from "@/components/base/BaseCard";
import BaseButton from "@/components/base/BaseButton";
import { mapGetters, mapActions } from "vuex";
import api from "@/mixins/api.js";

export default {
	components: {
		BaseButton,
		BaseCard,
		BaseConfirm,
	},
	mixins: [api],
	props: {
		data: {
			type: Object,
			required: true,
		},
		readOnly: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			dialog: {
				active: false,
				title: this.$lang.contentCard.dialog.title,
				content: this.$lang.contentCard.dialog.content,
				confirmText: this.$lang.contentCard.dialog.confirm,
				cancelText: this.$lang.contentCard.dialog.cancle,
			},
			providerName: "",
		};
	},
	computed: {
		...mapGetters("user", {
			userInfo: "GET_USER",
		}),
	},
	created() {
		this.getProvider();
	},
	methods: {
		onConfirm() {
			window.open(
				this.$config.API.contentServerUrl +
					this.$config.API.viewContentPath +
					this.data._id,
				"_blank"
			);
		},
		getProvider() {
			return this.$_providerGetById(this.userInfo.providerId)
				.then((provider) => {
					this.providerName = provider.name;
				})
				.catch((error) => {
					this.providerName = "";
				});
		},
	},
};
</script>

<style lang="scss" scoped>
span {
	vertical-align: middle;
}
.tags {
	color: #666;
}
.button_wrapper {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>
