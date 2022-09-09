// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4wM4qRuToRKiXKZ116596e
// Component: q6dxezWtwg
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
import sty from "./PlasmicMailsignUp.module.css"; // plasmic-import: q6dxezWtwg/css

import BackSvgrepoCom1SvgIcon from "./icons/PlasmicIcon__BackSvgrepoCom1Svg"; // plasmic-import: ZryRL3ob7f/icon

export type PlasmicMailsignUp__VariantMembers = {};

export type PlasmicMailsignUp__VariantsArgs = {};
type VariantPropType = keyof PlasmicMailsignUp__VariantsArgs;
export const PlasmicMailsignUp__VariantProps = new Array<VariantPropType>();

export type PlasmicMailsignUp__ArgsType = {};
type ArgPropType = keyof PlasmicMailsignUp__ArgsType;
export const PlasmicMailsignUp__ArgProps = new Array<ArgPropType>();

export type PlasmicMailsignUp__OverridesType = {
  root?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  section?: p.Flex<"section">;
  contentWrapper?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  h3?: p.Flex<"h3">;
  h5?: p.Flex<"h5">;
  form?: p.Flex<"form">;
  inputJumlahBeli?: p.Flex<"div">;
  label?: p.Flex<"label">;
  textInput?: p.Flex<"input">;
  button?: p.Flex<"button">;
  img?: p.Flex<typeof p.PlasmicImg>;
  textbox?: p.Flex<"input">;
};

export interface DefaultMailsignUpProps {}

function PlasmicMailsignUp__RenderFunc(props: {
  variants: PlasmicMailsignUp__VariantsArgs;
  args: PlasmicMailsignUp__ArgsType;
  overrides: PlasmicMailsignUp__OverridesType;

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
                className={classNames(projectcss.all, sty.freeBox__dZev5)}
              >
                {true ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__x0Jku)}
                  >
                    {true ? (
                      <p.PlasmicLink
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          sty.link__ypHmL
                        )}
                        component={Link}
                        href={`/`}
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
                      {"Email"}
                    </h3>
                  </div>
                ) : null}

                <h5
                  data-plasmic-name={"h5"}
                  data-plasmic-override={overrides.h5}
                  className={classNames(
                    projectcss.all,
                    projectcss.h5,
                    projectcss.__wab_text,
                    sty.h5
                  )}
                >
                  {"Masukan alamat email untuk melanjutkan proses transaksi"}
                </h5>

                <p.Stack
                  as={"form"}
                  data-plasmic-name={"form"}
                  data-plasmic-override={overrides.form}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.form)}
                >
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"inputJumlahBeli"}
                    data-plasmic-override={overrides.inputJumlahBeli}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.inputJumlahBeli)}
                  >
                    <label
                      data-plasmic-name={"label"}
                      data-plasmic-override={overrides.label}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.label
                      )}
                    >
                      {"Masukan Alamat email"}
                    </label>

                    <input
                      data-plasmic-name={"textInput"}
                      data-plasmic-override={
                        overrides.textInput ?? overrides.textbox
                      }
                      className={classNames(
                        projectcss.all,
                        projectcss.input,
                        sty.textInput
                      )}
                      placeholder={"user@mail.com" as const}
                      size={1 as const}
                      type={"text" as const}
                      value={"" as const}
                    />
                  </p.Stack>

                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__yPx16
                    )}
                    component={Link}
                    href={`/otp-mail`}
                    platform={"nextjs"}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__iyOsc
                      )}
                    >
                      {"Continue"}
                    </div>
                  </p.PlasmicLink>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wwZmx
                    )}
                  >
                    {"OR"}
                  </div>

                  <p.Stack
                    as={"button"}
                    data-plasmic-name={"button"}
                    data-plasmic-override={overrides.button}
                    hasGap={true}
                    className={classNames(
                      projectcss.all,
                      projectcss.button,
                      sty.button
                    )}
                  >
                    <p.PlasmicImg
                      data-plasmic-name={"img"}
                      data-plasmic-override={overrides.img}
                      alt={""}
                      className={classNames(sty.img)}
                      displayHeight={"32px" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"none" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"32px" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/alphapay/images/image2.png",
                        fullWidth: 2048,
                        fullHeight: 2048,
                        aspectRatio: undefined
                      }}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__suaNp
                      )}
                    >
                      {"Continue with Google"}
                    </div>
                  </p.Stack>
                </p.Stack>
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
    "svg",
    "h3",
    "h5",
    "form",
    "inputJumlahBeli",
    "label",
    "textInput",
    "textbox",
    "button",
    "img"
  ],
  navbar: ["navbar"],
  section: [
    "section",
    "contentWrapper",
    "svg",
    "h3",
    "h5",
    "form",
    "inputJumlahBeli",
    "label",
    "textInput",
    "textbox",
    "button",
    "img"
  ],
  contentWrapper: [
    "contentWrapper",
    "svg",
    "h3",
    "h5",
    "form",
    "inputJumlahBeli",
    "label",
    "textInput",
    "textbox",
    "button",
    "img"
  ],
  svg: ["svg"],
  h3: ["h3"],
  h5: ["h5"],
  form: [
    "form",
    "inputJumlahBeli",
    "label",
    "textInput",
    "textbox",
    "button",
    "img"
  ],
  inputJumlahBeli: ["inputJumlahBeli", "label", "textInput", "textbox"],
  label: ["label"],
  textInput: ["textInput", "textbox"],
  button: ["button", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  section: "section";
  contentWrapper: "div";
  svg: "svg";
  h3: "h3";
  h5: "h5";
  form: "form";
  inputJumlahBeli: "div";
  label: "label";
  textInput: "input";
  button: "button";
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMailsignUp__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMailsignUp__VariantsArgs;
    args?: PlasmicMailsignUp__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMailsignUp__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMailsignUp__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicMailsignUp__ArgProps,
          internalVariantPropNames: PlasmicMailsignUp__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicMailsignUp__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMailsignUp";
  } else {
    func.displayName = `PlasmicMailsignUp.${nodeName}`;
  }
  return func;
}

export const PlasmicMailsignUp = Object.assign(
  // Top-level PlasmicMailsignUp renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    section: makeNodeComponent("section"),
    contentWrapper: makeNodeComponent("contentWrapper"),
    svg: makeNodeComponent("svg"),
    h3: makeNodeComponent("h3"),
    h5: makeNodeComponent("h5"),
    form: makeNodeComponent("form"),
    inputJumlahBeli: makeNodeComponent("inputJumlahBeli"),
    label: makeNodeComponent("label"),
    textInput: makeNodeComponent("textInput"),
    button: makeNodeComponent("button"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicMailsignUp
    internalVariantProps: PlasmicMailsignUp__VariantProps,
    internalArgProps: PlasmicMailsignUp__ArgProps
  }
);

export default PlasmicMailsignUp;
/* prettier-ignore-end */
