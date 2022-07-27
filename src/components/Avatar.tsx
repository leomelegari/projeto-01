import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export const Avatar = ({ hasBorder = true, ...rest }: Props) => {
  return (
    <>
      <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        {...rest}
      />
    </>
  );
};
