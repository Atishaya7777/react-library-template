import type { Meta, StoryObj } from "@storybook/react";
import YourCustomComponent from "./YourCustomComponent";

const meta = {
  title: "YourCustomComponent",
  component: YourCustomComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {},
  },
} satisfies Meta<typeof YourCustomComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HelloWorld: Story = {
  args: {
    label: "Hello world",
  },
};
