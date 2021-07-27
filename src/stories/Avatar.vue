<template>
  <div>
    <img :src="src" :alt="alt" :class="avatarClass" />
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    src: {
      type: String,
      require: true,
    },
    alt: {
      type: String,
      require: false,
    },
    size: {
      type: String,
      default: "medium",
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
    shape: {
      type: String,
      default: "circle",
    },
  },
  computed: {
    avatarClass() {
      const { size, shape } = this;
      let classList = ["avatar"];

      if (size && typeof size === "string") {
        classList.push(`avatar--${size}`);
      }

      if (shape) {
        classList.push(`avatar--${shape}`);
      }

      return classList.join(" ");
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.avatar {
  display: inline-block;

  &--circle {
    border-radius: 100%;
  }
  &--square {
    border-radius: 8px;
  }
  &--small {
    width: 50px;
    height: 50px;
  }
  &--large {
    width: 200px;
    height: 200px;
  }
  &--medium {
    width: 100px;
    height: 100px;
  }
}
</style>
