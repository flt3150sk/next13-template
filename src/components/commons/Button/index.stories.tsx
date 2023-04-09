import type { StoryObj, Meta } from '@storybook/react';

import { Button } from '.';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Index: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};
