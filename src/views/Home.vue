<template>
	<div class="home">
		<h1>Project Manager</h1>
		<div class="project-list">
			<project />
			<project />
			<project />
			<project />
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Project from "@/components/Project.vue";
export default {
	name: "Home",
	components: {
		Project,
	},
};
</script>

<style scoped>
.home {
	padding: 20px;
}

.project-list {
	padding: 20px;
	border: 1px var(--primary-color) solid;
}
</style>
