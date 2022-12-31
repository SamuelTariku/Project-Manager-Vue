<template>
	<div>
		<div v-for="(task, index) in tasks" :key="index" class="task-item">
			<div>{{ task.name }}</div>
			<div>in-progress</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		tasks: {
			type: Array,
			default: () => [],
		},
	},
};
</script>
<style scoped>
.task-item {
	background-color: var(--secondary-color);
	padding: 10px 40px;
	margin: 15px 0;
	border-radius: 8px;
	border: 1px var(--primary-color) solid;
	display: flex;
	justify-content: space-between;
}
</style>
