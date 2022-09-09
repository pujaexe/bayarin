// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CloseSvgrepoCom11SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CloseSvgrepoCom11SvgIcon(props: CloseSvgrepoCom11SvgIconProps) {
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

      <g clipPath={"url(#l6WtHd41Ya)"}>
        <path
          d={
            "M9.415 8l6.292-6.292A1 1 0 1014.292.293L8 6.585 1.708.293A1 1 0 10.293 1.708L6.585 8 .293 14.292a1 1 0 101.415 1.415L8 9.415l6.292 6.292a.998.998 0 001.415 0 1 1 0 000-1.415L9.415 8z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <clipPath id={"l6WtHd41Ya"}>
          <path fill={"currentColor"} d={"M0 0h16v16H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default CloseSvgrepoCom11SvgIcon;
/* prettier-ignore-end */
