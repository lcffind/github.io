<template>
  <div class="alert" :class="classes">
    {{ label }}
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    label: String,
    type: {
      type: String,
      default: "primary",
    },
  },
  computed: {
    classes() {
      return `alert--${this.type}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.alert {
  width: 100%;
  font-size: 14px;
  border-radius: 4px;
  padding: 10px;
  &--primary {
    border: 1px solid rgb(3, 91, 255);
    color: rgb(3, 91, 255);
    background: rgba(3, 91, 255, 0.5);
  }
  &--warning {
    border: 1px solid rgb(255, 167, 3);
    color: rgb(255, 167, 3);
    background: rgba(255, 167, 3, 0.5);
  }
  &--danger {
    border: 1px solid rgb(245, 31, 16);
    color: rgb(245, 31, 16);
    background: rgba(245, 31, 16, 0.5);
  }
}
</style>
