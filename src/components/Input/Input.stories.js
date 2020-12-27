import Input from "./Input";

export default {
  title: "Form/Input",
  component: Input,
};
export const Small = () => <Input placeholder="Small Size" size="small" />;
export const Medium = () => <Input placeholder="Medium Size" size="medium" />;
export const Large = () => <Input placeholder="Large Size" size="large" />;


Small.storyName="Small Input"