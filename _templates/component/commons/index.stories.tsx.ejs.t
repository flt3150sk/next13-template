---
to: src/components/commons/<%= name %>/index.stories.tsx
---
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { <%= name %> } from '.';

export default {
  component: <%= name %>,
}  as ComponentMeta<typeof <%= name %>>;

export const Default: ComponentStoryObj<typeof <%= name %>> = {
  args: {
    onClick: () => alert('sample'),
    <%- hasChildren ? `children: 'Button'` : null %>
  },
};
