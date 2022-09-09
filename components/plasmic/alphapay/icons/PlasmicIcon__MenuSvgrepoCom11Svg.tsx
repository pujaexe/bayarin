// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MenuSvgrepoCom11SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MenuSvgrepoCom11SvgIcon(props: MenuSvgrepoCom11SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#OBc2NqQ8Wa)"} fill={"currentColor"}>
        <path
          d={
            "M5.714 0H1.143C.512 0 0 .512 0 1.143v4.571c0 .631.512 1.143 1.143 1.143h4.571c.631 0 1.143-.512 1.143-1.143V1.143C6.857.512 6.345 0 5.714 0zm0 9.143H1.143C.512 9.143 0 9.655 0 10.286v4.571C0 15.488.512 16 1.143 16h4.571c.631 0 1.143-.512 1.143-1.143v-4.571c0-.631-.512-1.143-1.143-1.143zM14.857 0h-4.571c-.631 0-1.143.512-1.143 1.143v4.571c0 .631.512 1.143 1.143 1.143h4.571c.631 0 1.143-.512 1.143-1.143V1.143C16 .512 15.488 0 14.857 0zm0 9.143h-4.571c-.631 0-1.143.512-1.143 1.143v4.571c0 .631.512 1.143 1.143 1.143h4.571c.631 0 1.143-.512 1.143-1.143v-4.571c0-.631-.512-1.143-1.143-1.143z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"OBc2NqQ8Wa"}>
          <path fill={"currentColor"} d={"M0 0h16v16H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default MenuSvgrepoCom11SvgIcon;
/* prettier-ignore-end */
