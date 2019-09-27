<template>
  <div class="task-edit">
    <a href="javascript:;" class="edit" @touchend="editStart">
      <i class="shadow fas fa-feather-alt fa-3x"></i>
    </a>
    <transition name="ani-edit-box">
      <div v-if="isEditStart" class="edit-box">
        <textarea cols="20" rows="10" v-model="newTask" placeholder="something interesting..."></textarea>
        <p>千里之行，</p>
        <p>始于足下。</p>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      isEditStart: false,
      newTask: ""
    };
  },
  methods: {
    editStart() {
      if (this.newTask) {
        this.addNewTask({ task:this.newTask });
        this.newTask = ''
      }
      this.isEditStart = !this.isEditStart;
    },
    ...mapMutations(["addNewTask"])
  }
};
</script>
<style lang="scss" scoped>
.task-edit {
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  pointer-events: none;
  text-align: right;
  .edit {
    position: absolute;
    bottom: 90px;
    right: 20px;
    z-index: 2;
    pointer-events: auto;
    padding-right: 18px;
    text-shadow: 3px 3px 3px $task-info-text;
    text-align: center;
    line-height: 50px;
    color: $task-title-color;
    transition: all 0.5s ease;
  }
  .edit:active {
    font-size: 0.7em;
  }
  .edit-box {
    box-sizing: border-box;
    padding: 10% 15px 0;
    position: fixed;
    z-index: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    pointer-events: auto;
    background-color: antiquewhite;
    textarea {
      display: block;
      font-size: 30px;
      margin: 0 auto;
      overflow: hidden;
      resize: none;
      padding: 5px;
      outline: none;
      border: none;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 15px;
    }
    p {
      text-align: center;
      font-size: 30px;
      box-sizing: border-box;
      color: #555;
    }
    p:nth-child(2) {
      margin-top: 25px;
      padding-right: 20%;
    }
    p:nth-child(3) {
      padding-left: 20%;
    }
  }
}

.ani-edit-box-enter,
.ani-edit-box-leave-to {
  border-radius: 50% 0 0 50%;
  transform: translateX(100%);
}
.ani-edit-box-enter-active,
.ani-edit-box-leave-active {
  transition: all 0.5s ease;
}
</style>