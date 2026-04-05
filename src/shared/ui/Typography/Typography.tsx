import { ElementType } from "react";
import { TypographyProps, TypographyVariant } from "@/shared/types";
import clsx from "clsx";
import styles from "./Typography.module.scss";

const variantMap: Record<TypographyVariant, ElementType> = {
  title: "h2",
  desc: "span",
  navigation: "span", 
  card_title: "h3",   
  card_button: "span",
  card_date: "time",
  card_desc:"p"
};

export const Typography = ({
  children,
  variant,
  color = "black",
  weight = "400",
  className,
}: TypographyProps) => {
  const Component = variantMap[variant];

  return (
    <Component
      className={clsx(
        styles[variant],
        styles[`w${weight}`],  
        styles[color],        
        className
      )}
    >
      {children}
    </Component>
  );
};