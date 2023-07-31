import classnames from "classnames";

export function Section(
  props: React.ComponentPropsWithoutRef<"section"> & {
    title: string;
  }
) {
  const { title, children, className, ...other } = props;
  return (
    <section
      className={classnames("flex flex-col gap-2 py-4", className)}
      {...other}
    >
      <h2>{title}</h2>
      {children}
      <hr />
    </section>
  );
}
