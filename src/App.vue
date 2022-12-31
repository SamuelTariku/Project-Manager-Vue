<template>
	<!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
	<div class="container">
		<!-- sidebar -->
		<!-- <div class="sidebar"></div> -->

		<!-- main -->
		<main>
			<router-view />
		</main>
	</div>
</template>

<style>
:root {
	--primary-color: rgb(0, 250, 250);
	--secondary-color: rgb(0, 15, 15);
}

html,
body {
	margin: 0;
	padding: 0;
	background-color: black;
	height: 100%;
}
#app {
	font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: var(--primary-color);
	height: 100%;
}

.container,
main {
	height: 100%;
}
/* .card {
	background-color: var(--secondary-color);
	border: 1px var(--primary-color) solid;
} */
</style>
