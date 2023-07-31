import { forwardRef } from "react";
import { type Options, classes } from "./Button.styles";

const Button = forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button"> & {
    color?: Options["color"];
  }
>((props, ref) => {
  const { color, ...otherProps } = props;
  const _color = color ?? "blue";
  const className = classes({
    color: _color,
  });

  return (
    <button className={className} ref={ref} {...otherProps}>
      {props.children}
    </button>
  );
});

Button.displayName = "@mantine/core/Button";

export { Button };
