import Alert from "./Alert.vue";

export default {
  title: "example/Alert",
  components: Alert,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["primary", "warning", "danger"],
      },
    },
  },
  args: {
    label: "alert text",
  },
};
const Template = (args, { argTypes }) => ({
  components: { Alert },
  props: Object.keys(argTypes),
  template: '<Alert v-bind="$props" />',
});
export const Primary = Template.bind({});
export const Warning = Template.bind({});
export const Danger = Template.bind({});

Warning.args = {
  type: "warning",
};
Danger.args = {
  type: "danger",
};
