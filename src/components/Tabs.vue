<template>
	<nav class="">
		<ul class="tabs" style="overflow-y: auto">
			<li
				v-for="(tab, index) in Object.keys(tabs)"
				:key="index"
				class="tab-box"
				:class="active == index ? 'active' : 'inactive'"
				@click="clickTab(index)"
				style="cursor: pointer"
			>
				<p class="" style="margin: 0">
					{{ getTab(tab) }}
				</p>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: "Tabs",
	props: {
		active: {
			type: Number,
			default: 0,
		},
		tabs: {
			type: Object,
			default: () => {},
		},
	},
	methods: {
		clickTab(index) {
			this.$emit("tab-click", index);
		},
		getTab(tab) {
			if (Object.keys(this.tabs).length == 0) {
				return tab;
			}
			return this.tabs[tab];
		},
	},
};
</script>

<style>
.active {
	/* background-color: var(--secondary-color); */
	border: 1px var(--primary-color) solid;
}
.inactive {
	color: grey;
}
.tabs {
	list-style-type: none;
	margin: 0;
	padding: 0;
	display: flex;
}
.tabs > li {
	border-radius: 10px 10px 0 0;
	width: 100%;
	text-align: center;
	padding: 15px 0;
}
</style>
