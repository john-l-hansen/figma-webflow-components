import React from "react";
import * as _Builtin from "./_Builtin";

export function ButtonPrimary({
  as: _Component = _Builtin.Link,

  buttonLink = {
    href: "#",
  },
}) {
  return (
    <_Component button={true} options={buttonLink}>
      {"Testing"}
    </_Component>
  );
}
