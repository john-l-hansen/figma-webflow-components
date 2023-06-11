import * as React from "react";
import * as Types from "./types";

declare function Contact(props: {
  as?: React.ElementType;
  sectionVisibility?: Types.Visibility.VisibilityConditions;
  heading3Text?: React.ReactNode;
}): React.JSX.Element;
