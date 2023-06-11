import React from "react";
import * as _Builtin from "./_Builtin";

export function ButtonPrimary({ as: _Component = _Builtin.Link }) {
  return (
    <_Component
      button={true}
      options={{
        href: "#",
      }}
    >
      {"Button Text"}
    </_Component>
  );
}
