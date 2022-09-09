// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4wM4qRuToRKiXKZ116596e
// Component: panrLIu3Rq
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import NavbarMenuItem from "../../NavbarMenuItem"; // plasmic-import: O9wh_20PSc/component
import AvatarMenu from "../../AvatarMenu"; // plasmic-import: cAIm2FGQ1q/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_alphapay.module.css"; // plasmic-import: 4wM4qRuToRKiXKZ116596e/projectcss
import sty from "./PlasmicNavbar.module.css"; // plasmic-import: panrLIu3Rq/css

export type PlasmicNavbar__VariantMembers = {};

export type PlasmicNavbar__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavbar__VariantsArgs;
export const PlasmicNavbar__VariantProps = new Array<VariantPropType>();

export type PlasmicNavbar__ArgsType = {};
type ArgPropType = keyof PlasmicNavbar__ArgsType;
export const PlasmicNavbar__ArgProps = new Array<ArgPropType>();

export type PlasmicNavbar__OverridesType = {
  root?: p.Flex<"div">;
  navbar?: p.Flex<"div">;
  navbarMenu?: p.Flex<"div">;
  companyLogo?: p.Flex<"a"> & Partial<LinkProps>;
  img?: p.Flex<typeof p.PlasmicImg>;
  navbarMenuItem?: p.Flex<typeof NavbarMenuItem>;
  text?: p.Flex<"div">;
  avatarMenu?: p.Flex<typeof AvatarMenu>;
};

export interface DefaultNavbarProps {
  className?: string;
}

function PlasmicNavbar__RenderFunc(props: {
  variants: PlasmicNavbar__VariantsArgs;
  args: PlasmicNavbar__ArgsType;
  overrides: PlasmicNavbar__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"navbar"}
        data-plasmic-override={overrides.navbar}
        className={classNames(projectcss.all, sty.navbar)}
      >
        <div
          data-plasmic-name={"navbarMenu"}
          data-plasmic-override={overrides.navbarMenu}
          className={classNames(projectcss.all, sty.navbarMenu)}
        >
          <p.PlasmicLink
            data-plasmic-name={"companyLogo"}
            data-plasmic-override={overrides.companyLogo}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.companyLogo
            )}
            component={Link}
            platform={"nextjs"}
          >
            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"32px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/alphapay/images/bayarinpng2.png",
                fullWidth: 169,
                fullHeight: 44,
                aspectRatio: undefined
              }}
            />
          </p.PlasmicLink>

          <NavbarMenuItem
            data-plasmic-name={"navbarMenuItem"}
            data-plasmic-override={overrides.navbarMenuItem}
            className={classNames("__wab_instance", sty.navbarMenuItem)}
            isActive={true}
            item={
              true ? (
                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  {"Buy"}
                </div>
              ) : null
            }
          />
        </div>

        <AvatarMenu
          data-plasmic-name={"avatarMenu"}
          data-plasmic-override={overrides.avatarMenu}
          caption={"Logout"}
          className={classNames("__wab_instance", sty.avatarMenu)}
          email={"user@mail.com"}
        />
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "navbarMenu",
    "companyLogo",
    "img",
    "navbarMenuItem",
    "text",
    "avatarMenu"
  ],
  navbar: [
    "navbar",
    "navbarMenu",
    "companyLogo",
    "img",
    "navbarMenuItem",
    "text",
    "avatarMenu"
  ],
  navbarMenu: ["navbarMenu", "companyLogo", "img", "navbarMenuItem", "text"],
  companyLogo: ["companyLogo", "img"],
  img: ["img"],
  navbarMenuItem: ["navbarMenuItem", "text"],
  text: ["text"],
  avatarMenu: ["avatarMenu"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: "div";
  navbarMenu: "div";
  companyLogo: "a";
  img: typeof p.PlasmicImg;
  navbarMenuItem: typeof NavbarMenuItem;
  text: "div";
  avatarMenu: typeof AvatarMenu;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavbar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavbar__VariantsArgs;
    args?: PlasmicNavbar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavbar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNavbar__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNavbar__ArgProps,
          internalVariantPropNames: PlasmicNavbar__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNavbar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbar";
  } else {
    func.displayName = `PlasmicNavbar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbar = Object.assign(
  // Top-level PlasmicNavbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    navbarMenu: makeNodeComponent("navbarMenu"),
    companyLogo: makeNodeComponent("companyLogo"),
    img: makeNodeComponent("img"),
    navbarMenuItem: makeNodeComponent("navbarMenuItem"),
    text: makeNodeComponent("text"),
    avatarMenu: makeNodeComponent("avatarMenu"),

    // Metadata about props expected for PlasmicNavbar
    internalVariantProps: PlasmicNavbar__VariantProps,
    internalArgProps: PlasmicNavbar__ArgProps
  }
);

export default PlasmicNavbar;
/* prettier-ignore-end */