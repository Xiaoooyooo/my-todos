<template>
  <div class="task-list" :class="{'task-selected':isSelected}">
    <p class="category-title">
      <i class="fas fa-user-secret fa-2x" @touchend="select"></i>
    </p>
    <transition-group name="task-select" tag='div'>
      <div v-if="!isSelected" class="not-select" key="1">
        <p class="task-brief">
          <i class="fas fa-list-ul fa-4x"></i>
          <i class="fas fa-bars fa-4x"></i>
        </p>
        <p class="task-info">You have {{length}} tasks to do.</p>
      </div>
      <task-items v-else class="selected" key="2" />
    </transition-group>
		<p class="task-title">{{description}}</p>
  </div>
</template>
<script>
/* eslint-disable */
import { mapGetters } from 'vuex'
import taskItems from './task-items'
export default {
  props: {
    description: {
      type: String,
      default() {
        return "Welcome";
      }
    }
  },
  data() {
    return {
      isSelected: false
    };
  },
  methods: {
    select() {
			this.isSelected = !this.isSelected;
			this.$emit('editready')
    }
	},
	computed:{
		...mapGetters(['length'])
	},
	components:{
		taskItems
	}
};
</script>
<style lang="scss" scoped>
.task-list {
  position: absolute;
  top: 250px;
  background-color: $secondary-color;
  width: 90%;
  height: 500px;
  margin: 0 5%;
  border-radius: 15px;
  color: lighten($theme-color-dark, 5%);
  transition: all 0.5s ease;
  .category-title {
    text-align: center;
    padding-top: 15px;
  }
  .task-brief {
    padding-top: 50px;
    text-align: center;
    transition: all 0.3s ease;
    & i {
      color: lighten($task-info-text, 20%);
      margin: 0 10px;
    }
  }
  .task-info {
    margin-top: 60px;
    text-align: center;
    color: $task-info-text;
    font-size: 20px;
    font-weight: 200;
  }
  .task-title {
		position: absolute;
		z-index: 2;
		bottom: 170px;
    padding-left: 30px;
    box-sizing: border-box;
    font-size: 50px;
    font-weight: 200;
		color: $task-title-color;
    transition: all 0.5s ease;
  }
}
.task-selected {
  border-radius: 0;
  margin: 0;
  top: 0;
  height: 100%;
  width: 100%;
	.task-title{
		position: absolute;
		bottom: 0;
		width: 100%;
	}
}


.task-select-enter {
  opacity: 0;
}
.task-select-leave-to {
  opacity: 0;
}
.task-select-enter-active{
	transition: all 0.5s ease;
}
.task-select-leave-active{
	position: absolute;
	width: 100%;
	transition: all 0.5s ease;
}
.task-select-move{
	transition: all 0.5s ease;
}
</style>