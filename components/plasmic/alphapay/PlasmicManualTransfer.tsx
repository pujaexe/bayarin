// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4wM4qRuToRKiXKZ116596e
// Component: 4LUFUJgyfWh
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
import Navbar from "../../Navbar"; // plasmic-import: panrLIu3Rq/component

import { useScreenVariants as useScreenVariantsxEPdzIdtzvdZk } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: xEPdzIDTZVDZk/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_alphapay.module.css"; // plasmic-import: 4wM4qRuToRKiXKZ116596e/projectcss
import sty from "./PlasmicManualTransfer.module.css"; // plasmic-import: 4LUFUJgyfWh/css

import BackSvgrepoCom1SvgIcon from "./icons/PlasmicIcon__BackSvgrepoCom1Svg"; // plasmic-import: ZryRL3ob7f/icon

export type PlasmicManualTransfer__VariantMembers = {};

export type PlasmicManualTransfer__VariantsArgs = {};
type VariantPropType = keyof PlasmicManualTransfer__VariantsArgs;
export const PlasmicManualTransfer__VariantProps = new Array<VariantPropType>();

export type PlasmicManualTransfer__ArgsType = {};
type ArgPropType = keyof PlasmicManualTransfer__ArgsType;
export const PlasmicManualTransfer__ArgProps = new Array<ArgPropType>();

export type PlasmicManualTransfer__OverridesType = {
  root?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  section?: p.Flex<"section">;
  contentWrapper?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  svg?: p.Flex<"svg">;
  h6?: p.Flex<"h6">;
  img?: p.Flex<typeof p.PlasmicImg>;
  h3?: p.Flex<"h3">;
  button?: p.Flex<"button">;
};

export interface DefaultManualTransferProps {}

function PlasmicManualTransfer__RenderFunc(props: {
  variants: PlasmicManualTransfer__VariantsArgs;
  args: PlasmicManualTransfer__ArgsType;
  overrides: PlasmicManualTransfer__OverridesType;

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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsxEPdzIdtzvdZk()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <p.Stack
            as={"section"}
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            hasGap={true}
            className={classNames(projectcss.all, sty.section)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"contentWrapper"}
              data-plasmic-override={overrides.contentWrapper}
              hasGap={true}
              className={classNames(projectcss.all, sty.contentWrapper)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__gNgFi)}
              >
                {true ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__beUwc)}
                  >
                    {true ? (
                      <p.PlasmicLink
                        data-plasmic-name={"link"}
                        data-plasmic-override={overrides.link}
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          sty.link
                        )}
                        component={Link}
                        href={`/otp-mail`}
                        platform={"nextjs"}
                      >
                        <BackSvgrepoCom1SvgIcon
                          data-plasmic-name={"svg"}
                          data-plasmic-override={overrides.svg}
                          className={classNames(projectcss.all, sty.svg)}
                          role={"img"}
                        />
                      </p.PlasmicLink>
                    ) : null}

                    <h4
                      className={classNames(
                        projectcss.all,
                        projectcss.h4,
                        projectcss.__wab_text,
                        sty.h4___0Ij9
                      )}
                    >
                      {"Bank Transfer"}
                    </h4>
                  </div>
                ) : null}

                <h6
                  data-plasmic-name={"h6"}
                  data-plasmic-override={overrides.h6}
                  className={classNames(
                    projectcss.all,
                    projectcss.h6,
                    projectcss.__wab_text,
                    sty.h6
                  )}
                >
                  {
                    "Silahkan lakukan pembayaran melalui ke rekening di bawah ini"
                  }
                </h6>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__mgwSc)}
                >
                  <p.PlasmicImg
                    data-plasmic-name={"img"}
                    data-plasmic-override={overrides.img}
                    alt={""}
                    className={classNames(sty.img)}
                    displayHeight={"24px" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/alphapay/images/image3.png",
                      fullWidth: 2560,
                      fullHeight: 801,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(projectcss.all, sty.freeBox__oVkPj)}
                  >
                    <h4
                      className={classNames(
                        projectcss.all,
                        projectcss.h4,
                        projectcss.__wab_text,
                        sty.h4__jqsvx
                      )}
                    >
                      {"17900003"}
                    </h4>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__hmYa
                      )}
                    >
                      {"PT. Bayar Membayar Indonesia"}
                    </div>
                  </div>
                </p.Stack>

                <div className={classNames(projectcss.all, sty.freeBox__r7CzP)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__fYxL5)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__xxhWq
                      )}
                    >
                      {"Total Pembayaran"}
                    </div>
                  </p.Stack>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__wbZEy)}
                  >
                    <h3
                      data-plasmic-name={"h3"}
                      data-plasmic-override={overrides.h3}
                      className={classNames(
                        projectcss.all,
                        projectcss.h3,
                        projectcss.__wab_text,
                        sty.h3
                      )}
                    >
                      {"187.000 IDR"}
                    </h3>
                  </p.Stack>
                </div>

                <button
                  data-plasmic-name={"button"}
                  data-plasmic-override={overrides.button}
                  className={classNames(
                    projectcss.all,
                    projectcss.button,
                    sty.button
                  )}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__hQ47N
                    )}
                  >
                    {"Done"}
                  </div>
                </button>
              </p.Stack>
            </p.Stack>
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "section",
    "contentWrapper",
    "link",
    "svg",
    "h6",
    "img",
    "h3",
    "button"
  ],
  navbar: ["navbar"],
  section: [
    "section",
    "contentWrapper",
    "link",
    "svg",
    "h6",
    "img",
    "h3",
    "button"
  ],
  contentWrapper: [
    "contentWrapper",
    "link",
    "svg",
    "h6",
    "img",
    "h3",
    "button"
  ],
  link: ["link", "svg"],
  svg: ["svg"],
  h6: ["h6"],
  img: ["img"],
  h3: ["h3"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  section: "section";
  contentWrapper: "div";
  link: "a";
  svg: "svg";
  h6: "h6";
  img: typeof p.PlasmicImg;
  h3: "h3";
  button: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicManualTransfer__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicManualTransfer__VariantsArgs;
    args?: PlasmicManualTransfer__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicManualTransfer__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicManualTransfer__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicManualTransfer__ArgProps,
          internalVariantPropNames: PlasmicManualTransfer__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicManualTransfer__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicManualTransfer";
  } else {
    func.displayName = `PlasmicManualTransfer.${nodeName}`;
  }
  return func;
}

export const PlasmicManualTransfer = Object.assign(
  // Top-level PlasmicManualTransfer renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    section: makeNodeComponent("section"),
    contentWrapper: makeNodeComponent("contentWrapper"),
    link: makeNodeComponent("link"),
    svg: makeNodeComponent("svg"),
    h6: makeNodeComponent("h6"),
    img: makeNodeComponent("img"),
    h3: makeNodeComponent("h3"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicManualTransfer
    internalVariantProps: PlasmicManualTransfer__VariantProps,
    internalArgProps: PlasmicManualTransfer__ArgProps
  }
);

export default PlasmicManualTransfer;
/* prettier-ignore-end */
