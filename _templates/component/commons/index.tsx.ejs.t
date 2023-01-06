---
to: src/components/commons/<%= name %>/index.tsx
---

export type Props = {
  onClick: () => void;
  <%= hasChildren ? `children: React.ReactNode;` : null %>
};

export const <%= name %>: React.FC<Props> = (props) => {
  return <button {...props} />;
};
