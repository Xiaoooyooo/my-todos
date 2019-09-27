<template>
  <div class="home">
    <app-bar />
    <avatar />
    <task-list @editready="editready" />
    <transition name="feather">
      <task-edit v-if="readyToEdit" />
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import appBar from "@/components/app-bar";
import avatar from "@/components/avatar";
import taskList from "@/components/task-list";
import taskEdit from "@/components/task-edit";

export default {
  name: "home",
  data() {
    return {
      readyToEdit: false
    };
  },
  methods: {
    editready(delay = 500) {
      setTimeout(() => {
        this.readyToEdit = !this.readyToEdit;
      }, delay);
    }
  },
  components: {
    appBar,
    avatar,
    taskList,
    taskEdit
  }
};
</script>
<style lang="scss" scoped>
.feather-enter {
  opacity: 0;
  transform: translateX(100px);
}
.feather-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.feather-enter-active,
.feather-leave-active {
  pointer-events: none;
  transition: all 0.8s ease;
}
</style>