import Center from "../Center/Center";
import Button from "./Button";
export default {
  title: "Form/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    variant: { control: "text" },
    onClick: { action: "clicked" },
  },
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="sucess">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
export const LongPrimaryA = Template.bind({});
export const SecondaryA = Template.bind({});

PrimaryA.args = {
  variant: "primary",
  children: "Primary Args",
};

LongPrimaryA.args = {
  ...PrimaryA.args,
  children: "Long Primary Args",
};

SecondaryA.args = {
  variant: "secondary",
  children: "Secondary Args",
};
