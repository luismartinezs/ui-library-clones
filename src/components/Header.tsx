import classnames from "classnames";
import Link from "next/link";

export function Header(props: React.ComponentPropsWithoutRef<"header">) {
  const { className, ...otherProps } = props;

  return (
    <header
      className={classnames("container mx-auto h-16 py-4", className)}
      {...otherProps}
    >
      <nav>
        <ul className="flex items-center justify-center gap-4">
          <li>
            <Link href="/mantine" className="hover:underline">
              Mantine
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
