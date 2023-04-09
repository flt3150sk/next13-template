---
to: src/components/commons/<%= name %>/index.stories.tsx
---
import type { StoryObj, Meta } from '@storybook/react';
import { <%= name %> } from '.';

const meta = {
  component: <%= name %>,
} satisfies Meta<typeof <%= name %>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => alert('sample'),
    <%- hasChildren ? `children: 'Button'` : null %>
  },
};
