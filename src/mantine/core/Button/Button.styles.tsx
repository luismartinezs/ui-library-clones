import classnames from "classnames";

const colors = {
  blue: "bg-blue-500 text-white hover:bg-blue-600",
  red: "bg-red-500 text-white hover:bg-red-600",
};

export type Options = {
  color: keyof typeof colors;
};

export const classes = (options: Partial<Options>) => {
  const defaults: Options = {
    color: "blue",
  };
  const { color } = { ...defaults, ...options };

  console.log(colors[color]);

  return classnames(
    colors[color],
    "rounded px-3 py-1 font-semibold active:translate-y-[1px]"
  );
};
