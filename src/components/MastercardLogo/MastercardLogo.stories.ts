import type { Meta, StoryObj } from "@storybook/react";
import { MastercardLogo } from ".";

const meta: Meta<typeof MastercardLogo> = {
  title: "Components/MastercardLogo",
  component: MastercardLogo,

  argTypes: {
    property1: {
      options: ["default"],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof MastercardLogo>;

export const Default: Story = {
  args: {
    property1: "default",
    className: {},
    assetsLogoClassName: {},
  },
};
