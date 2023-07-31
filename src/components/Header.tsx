import classnames from "classnames";
import Link from "next/link";

const links = [
  {
    label: "Mantine",
    href: "/mantine",
  },
  {
    label: "UseHooks",
    href: "/usehooks",
  },
];

export function Header(props: React.ComponentPropsWithoutRef<"header">) {
  const { className, ...otherProps } = props;

  return (
    <header
      className={classnames("container mx-auto h-16 py-4", className)}
      {...otherProps}
    >
      <nav>
        <ul className="flex items-center justify-center gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
