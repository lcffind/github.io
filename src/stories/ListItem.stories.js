import ListItem from "./ListItem.vue";

export default {
  title: "example/ListItem",
  components: ListItem,
};

const Template = (args, { argTypes }) => ({
  components: { ListItem },
  props: Object.keys(argTypes),
  template: '<ListItem v-bind="$props" />',
});
export const Default = Template.bind({});
Default.args = {
  item: {
    id: "1",
    title: "List Text",
    time: new Date(2018, 0, 1, 9, 0),
  },
};
