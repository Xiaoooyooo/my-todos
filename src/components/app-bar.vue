<template>
  <div class="app-bar">
    <span class="profile">
      <i class="fas fa-align-left"></i>
    </span>
    <span>My Todos</span>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.app-bar {
  position: relative;
	height: 50px;
	line-height: 50px;
	font-size: 20px;
	color: #f6f6f6;
  text-align: center;
  .profile {
		position: absolute;
		top: 0;
		left: 10px;
		color: inherit;
  }
}
</style>