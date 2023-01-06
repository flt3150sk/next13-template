import { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { HomeScreen } from '.';

export default {
  component: HomeScreen,
} as ComponentMeta<typeof HomeScreen>;

export const LoggedIn: ComponentStoryObj<typeof HomeScreen> = {};
export const LoggedOut: ComponentStoryObj<typeof HomeScreen> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole('button', { name: /Log in/i });
    await userEvent.click(loginButton);
  },
};
