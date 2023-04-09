import type { StoryObj, Meta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { HomeScreen } from '.';

const meta = {
  component: HomeScreen,
} satisfies Meta<typeof HomeScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {};

export const LoggedOut: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole('button', { name: /Log in/i });
    await userEvent.click(loginButton);
  },
};
