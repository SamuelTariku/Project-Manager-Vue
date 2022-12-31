<template>
	<div style="height: 100%">
		<!-- Tab Navigation -->
		<Tabs :tabs="tabs" @tab-click="setActive" :active="active" />

		<!-- View Body -->
		<div class="tabs-content">
			<div
				v-for="(tab, index) in Object.keys(tabs)"
				:key="index"
				v-show="index == active"
			>
				<slot :name="tab"></slot>
			</div>
		</div>
	</div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";

export default {
	name: "TabView",

	components: {
		Tabs,
	},
	props: {
		tabs: {
			type: Object,
			default: () => {},
		},
	},

	data() {
		return {
			active: 0,
		};
	},

	methods: {
		setActive(index) {
			this.active = index;
		},
	},
};
</script>

<style>
.tabs-content {
	border: 1px var(--primary-color) solid;
	height: calc(100% - 50px);
	overflow-y: auto;
}
</style>
