<template>
	<div id="Navbar">
    <button><router-link to="/">Home</router-link></button>
    <button><router-link to="/blog">Blog</router-link></button>
    <button><router-link to="/portfolio">Portfolio</router-link></button>
    <button><router-link to="/about">About</router-link></button>
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
