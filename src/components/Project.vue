<template>
	<div class="project" @click="$router.push('/project')">
		<!-- image -->
		<img src="" />

		<!-- project detail -->
		<div class="detail">
			<div>
				<h3>Project 1</h3>
			</div>
			<progress-bar :value="20"></progress-bar>
			<div class="update-time">Last Update: 12:50 PM</div>
		</div>
	</div>
</template>
<script>
import ProgressBar from "./ProgressBar.vue";

export default {
	components: {
		ProgressBar,
	},
};
</script>
<style scoped>
.project {
	background-color: var(--secondary-color);
	border: 1px var(--primary-color) solid;
	border-width: 0px 3px;
	border-radius: 10px;
	padding: 20px px;
	margin: 20px 0;
	display: flex;
	cursor: pointer;
}
.project img {
	border: 1px var(--primary-color) solid;
	width: 80px;
	height: 80px;
	margin: 0px 20px;
}
.detail {
	padding: 0px;
	width: 100%;
}

.detail h3 {
	padding: 0;
	margin: 0px 0;
}

.detail > * {
	margin-bottom: 15px;
}

.update-time {
	font-size: 12px;
}
</style>
