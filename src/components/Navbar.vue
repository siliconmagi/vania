<template>
	<div id="Navbar">
		<router-link to="/">Go to Home</router-link>
		<router-link to="/About">Go to About</router-link>
	</div>
</template>

<script>
	export default {
		name: 'Navbar',
	};
</script>

<style lang="scss">
#Navbar {
	text-align: center;
}
</style>
