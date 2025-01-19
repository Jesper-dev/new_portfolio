import { PropsWithChildren } from "react";
import "./flex.scss";
import classNames from "classnames";

interface FlexProps extends PropsWithChildren {
  width?: string;
  height?: string;
  gap?: string;
  direction?: "column" | "row";
  justify?: "flex-start" | "center" | "flex-end";
  align?: "flex-start" | "center" | "flex-end";
  padding?: string;
  backgroundColor?: string;
  className?: string;
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
}: FlexProps) => {
  const classnames = classNames({
    "flex-container": true,
    "flex-column": direction === "column",
    "flex-row": direction === "row",
  });

  return (
    <div
      className={`${classnames} ${className}`}
      style={{
        width: width,
        height: height,
        gap: gap,
        alignItems: align,
        justifyContent: justify,
        padding: padding,
        backgroundColor: backgroundColor,
      }}
    >
      {children}
    </div>
  );
};
