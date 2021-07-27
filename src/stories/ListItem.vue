<template>
  <div class="list-item">
    <div class="title">{{ item.title }}</div>
    <div class="time">{{ item.time }}</div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({ id: "", title: "", time: "" }),
      validator: (task) => ["id", "title", "time"].every((key) => key in task),
    },
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  font-size: 16px;
  color: #888;
  padding: 10px;
  margin: 5px 0;
  background: #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  .title {
    flex: 1;
  }
  .time {
    width: 180px;
    font-size: 14px;
    color: #999;
  }
}
</style>
