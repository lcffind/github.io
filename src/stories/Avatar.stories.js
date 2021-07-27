import Avatar from "./Avatar.vue";

export default {
  title: "example/Avatar",
  components: Avatar,
  argTypes: {
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
      //   control: { type: "radio", options: ["small", "medium", "large"] },
    },
    shape: {
      control: { type: "select", options: ["circle", "square"] },
    },
    src: {
      //   control: { type: "file" },
      control: "file",
    },
  },
  args: {
    src: "b2.png",
    alt: "test image",
  },
  //   components decorators work for all story
  //   decorators: [
  //     () => ({ template: '<div style="margin: 3em;"><story/></div>' }),
  //   ],
};
const Template = (args, { argTypes }) => {
  return {
    components: { Avatar },
    props: Object.keys(argTypes),
    template: '<Avatar v-bind="$props" />',
  };
};
export const Circle = Template.bind({});
Circle.args = {
  shape: "circle",
};
//story decorators work for single story
// Circle.decorators = [
//   () => ({ template: '<div style="margin: 3em;"><story /></div>' }),
// ];
export const Square = Template.bind({});
Square.args = {
  shape: "square",
  //   src: image.src,
};
export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  //   src: image.src,
};
