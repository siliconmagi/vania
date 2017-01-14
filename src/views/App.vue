<template>
	<div id="app">
		<img src="../assets/images/logo.png" height="100" alt="">
		<h1>vania</h1>
		<Navbar></Navbar>
		<router-view></router-view>
	</div>
</template>

<script>
	import Navbar from '../components/Navbar';

export default {
	name: 'app',
	components: {
		Navbar,
	},
};
</script>

<style lang="scss">
$back: #27020f;
$colora: #470022;
$colorb: #9a1235;
$colorc: #d77da5;
body {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: white;
	background-color: $colora
}
</style>

