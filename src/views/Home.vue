<template>
	<div>
		<input type="text" placeholder="Starting Zip" v-model="startZip">
		<span class="city span">{{startZip}}</span>
		<input type="text" placeholder="Ending Zip">
		<span class="city span"></span>
		<button id="submit-form">Submit</button>
		<button>+</button>
		<button>-</button>

	</div>
</template>

<script>
	export default {
		mounted() {
			console.log('welcome!')
		},
		data: function () {
			return {
				startZip: '',
			}
		}
	}
	</script>

	<style>
	body {
		text-align: center;
		font-family: Helvetica, sans-serif;
	}
	</style>
