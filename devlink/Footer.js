import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

export function Footer({
  as: _Component = _Builtin.Block,
  webflowLogoTInyImage = "https://uploads-ssl.webflow.com/640d414d56170005f2dd5f47/640d414d561700436ddd5f5a_webflow-w-small%402x.png",
  paragraphTinyText = "Made in Los Angeles",
  footerItemText = "LinkedIn",

  footerItemLink2 = {
    href: "https://www.linkedin.com/in/john-hansen-design/",
  },

  footerItemLink = {
    href: "https://twitter.com/john_l_hansen",
    target: "_blank",
  },

  footerItemText3 = "Twitter",

  footerItemLink3 = {
    href: "https://github.com/john-l-hansen",
    target: "_blank",
  },

  footerItemText2 = "GitHub",
}) {
  return (
    <_Component className={_utils.cx(_styles, "footer-wrap")} tag="div">
      <_Builtin.Block tag="div">
        <_Builtin.Link
          className={_utils.cx(_styles, "webflow-link")}
          button={false}
          options={{
            href: "https://webflow.com/",
            target: "_blank",
          }}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "paragraph-tiny")}
            tag="div"
          >
            {paragraphTinyText}
          </_Builtin.Block>
        </_Builtin.Link>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "footer-links")} tag="div">
        <_Builtin.Link
          className={_utils.cx(_styles, "footer-item")}
          button={false}
          options={footerItemLink2}
        >
          {footerItemText}
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "footer-item")}
          button={false}
          options={footerItemLink}
        >
          {footerItemText3}
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "footer-item")}
          button={false}
          options={footerItemLink3}
        >
          {footerItemText2}
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
