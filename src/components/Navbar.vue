<template>
	<div id="Navbar">
		<router-link to="/">Home</router-link>
		<router-link to="/blog">Blog</router-link>
		<router-link to="/portfolio">Portfolio</router-link>
		<router-link to="/about">About</router-link>
	</div>
</template>

<script>

	export default {
		name: 'Navbar',
	};
</script>

<style lang="scss">
#Navbar {
}
</style>
