<template>
	<div id="app">
		<img src="../assets/images/logo.png" height="100" alt="">
		<h1>vania</h1>
		<p>
		<!-- use router-link component for navigation. -->
		<!-- specify the link by passing the `to` prop. -->
		<!-- <router-link> will be rendered as an `<a>` tag by default -->
		<router-link to="/">Go to Home</router-link>
		<router-link to="/About">Go to About</router-link>
		</p>
		<!-- route outlet -->
		<!-- component matched by the route will render here -->
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		mounted() {
			console.log('welcome!')
		}
	}
	</script>

	<style lang="scss">
	body {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	</style>

