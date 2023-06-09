import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

function Container({ children }: ContainerProps): JSX.Element {
  return <div className="mx-auto max-w-6xl px-2 py-1">{children}</div>;
}

export default Container;
