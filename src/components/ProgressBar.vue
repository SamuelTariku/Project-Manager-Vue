<template>
	<div>
		<div class="progress-bar">
			<div :style="{ width: value + '%' }">
				<div class="progress-text">{{ value }}%</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "ProgressBar",
	props: {
		value: {
			type: Number,
			default: 0,
		},
	},
};
</script>
<style>
.progress-bar {
	/* margin: 0 0px; */
	min-width: 20px;
	min-height: 20px;
	border-radius: 10px;
	/* overflow: hidden; */
	text-align: center;
	background: black;
	border: 1px var(--primary-color) solid;
	display: flex;
	padding: 0 5px;
	align-items: center;
}

.progress-bar > div {
	/* width: 100%; */
	height: 5px;
	border-radius: 10px;
	background: var(--primary-color);
	display: flex;
	justify-content: flex-end;
}
.progress-text {
	margin: 0;
	padding: 5px;
	position: relative;
	top: -6px;
	left: 25px;
	height: 8px;
	border: 1px var(--primary-color) solid;
	background: black;
	border-radius: 15px;
	font-size: 8px;
}
</style>
