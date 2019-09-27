<template>
  <transition-group class="task-items" tag="ul" name="task-done">
    <li v-for="(item,index) in tasks" class="item" :key="item.id"  @touchend='changeTaskState({index})'>
      <label>
        {{item.message}}
        <input type="checkbox" hidden :checked='item.done'/>
				<i class='hook fas fa-check'></i>
        <i class="remove fas fa-trash-alt" @touchend.stop="updateData({index})"></i>
      </label>
    </li>
  </transition-group>
</template>
<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
export default {
	methods:{
		...mapMutations(['updateData','changeTaskState']),
	},
	computed:{
		...mapGetters(['tasks'])
	},
	components:{

	}
};
</script>
<style lang="scss" scoped>
.task-items {
  position: relative;
  padding: 15px 20px;
  list-style: none;
	box-sizing: border-box;
	width: 100%;
  .item {
    position: relative;
    padding: 10px 5px;
    width: 100%;
    box-sizing: border-box;
    font-size: 18px;
    line-height: 24px;
		font-weight: 300;
		transition: all 0.7s ease;
		label{
			pointer-events: none;
			padding-left: 20px;
		}
		.hook{
			position: absolute;
			left: 0;
			opacity: 0;
			transition: 0.3s;
		}
    .remove {
      position: absolute;
			right: 0;
			opacity: 0;
			pointer-events: none;
			transition: all 0.7s ease;
		}
		input:checked ~ i{
			opacity: 1;
			pointer-events: auto;
    }
  }
  .item:not(:last-child) {
    border-bottom: 1px solid $task-info-text;
	}
	.item:last-child{
		border-bottom: 1px solid transparent;
	}
}

.task-done-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
.task-done-leave-active {
  position: absolute !important;
  transition: all 0.7s ease;
}
// .task-done-move {
//   transition: all 0.7s ease;
// }
</style>