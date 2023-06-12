import React, { ReactNode } from "react";
interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps): React.JSX.Element {
  return <div className="mx-auto max-w-6xl px-2 py-1">{children}</div>;
}

export default Container;
