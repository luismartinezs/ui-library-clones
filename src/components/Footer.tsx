import classnames from "classnames";
import Link from "next/link";

export function Footer(props: React.ComponentPropsWithoutRef<"footer">) {
  const { className, ...otherProps } = props;

  return (
    <footer
      className={classnames("container mx-auto h-16 py-4", className)}
      {...otherProps}
    >
      Created by{" "}
      <Link
        className="text-blue-400 hover:underline"
        href="https://www.webdevluis.com"
        target="_blank"
      >
        Luis
      </Link>
    </footer>
  );
}
