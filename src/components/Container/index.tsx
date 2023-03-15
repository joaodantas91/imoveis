import React from "react";
import styles from '@/styles/components/container.module.scss'

type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
}
const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
  return <div {...props} className={[styles.container, props.className].join(" ")}>{props.children}</div>
}

export default Container;