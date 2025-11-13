import { PropsWithChildren } from "react";
import "./flex.scss";
import classNames from "classnames";

interface FlexProps extends PropsWithChildren {
  width?: string;
  height?: string;
  gap?: string;
  direction?: "column" | "row" | "column-reverse";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-evenly"
    | "space-around";
  align?: "flex-start" | "center" | "flex-end";
  padding?: string;
  backgroundColor?: string;
  className?: string;
  id?: string;
  overflow?: boolean;
}

export const Flex = ({
  children,
  width,
  gap,
  direction = "row",
  align,
  justify,
  padding,
  height,
  backgroundColor,
  className,
  id,
  overflow,
}: FlexProps) => {
  const classnames = classNames({
    "flex-container": true,
    "flex-column": direction === "column",
    "flex-column-reverse": direction === "column-reverse",
    "flex-row": direction === "row",
  });

  return (
    <div
      id={id}
      className={`${classnames} ${className}`}
      style={{
        width: width,
        height: height,
        gap: gap,
        alignItems: align,
        justifyContent: justify,
        padding: padding,
        backgroundColor: backgroundColor,
        overflow: overflow ? "auto" : undefined,
      }}
    >
      {children}
    </div>
  );
};
