<template>
	<div class="dashboard">
		<div class="titleBox">
			<img src="" alt="img" />
			<div>
				<h1>Project Title</h1>
				<progress-bar :value="50"></progress-bar>
			</div>
		</div>
		<div class="content">
			<tab-view
				:tabs="{
					tasks: 'Tasks',
					history: 'History',
					detail: 'Detail',
				}"
			>
				<template v-slot:tasks>
					<div class="tab-view">
						<task-list :tasks="tasks" />
					</div>
				</template>
			</tab-view>
		</div>
	</div>
</template>
<script>
import ProgressBar from "@/components/ProgressBar.vue";
import TabView from "@/components/TabView.vue";
import TaskList from "@/components/TaskList.vue";

export default {
	name: "ProjectDashboard",
	components: {
		ProgressBar,
		TabView,
		TaskList,
	},

	data() {
		return {
			tasks: [
				{
					name: "something",
				},
				{
					name: "else",
				},
				{
					name: "another",
				},
				{
					name: "something",
				},
				{
					name: "else",
				},
				{
					name: "another",
				},
				{
					name: "something",
				},
				{
					name: "else",
				},
				{
					name: "another",
				},
			],
		};
	},
};
</script>
<style scoped>
.dashboard {
	width: 100%;
	height: 100%;
}

.titleBox {
	padding: 30px;
	display: flex;
}

.titleBox > div {
	display: flex;
	flex-direction: column;
	justify-content: end;
	width: 100%;
	padding: 0 20px;
}
.titleBox img {
	border: 1px var(--primary-color) solid;
	min-width: 150px;
	min-height: 150px;
}

.content {
	padding: 10px;
	height: calc(100% - 232px);
}

.tab-view {
	padding: 10px 30px;
	overflow-y: hidden;
	height: 100%;
}
</style>
