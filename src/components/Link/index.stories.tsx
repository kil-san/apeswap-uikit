import React from "react";
import { ApeSwapIcon } from "../Svg";
import { Link, LinkExternal } from "./index";

export default {
  title: "Components/Link",
  component: Link,
  argTypes: {
    fontSize: {
      name: "fontSize",
      table: {
        type: { summary: "string", detail: "Fontsize in px or em" },
        defaultValue: { summary: "16px" },
      },
      control: {
        type: null,
      },
    },
  },
};

export const Default: React.FC = () => {
  return (
    <div>
      <div>
        <Link href="/">Default</Link>
      </div>
      <div>
        <Link href="/" color="success">
          Custom color
        </Link>
      </div>
      <div>
        <Link external href="/">
          External
        </Link>
      </div>
      <div>
        <Link href="/">
          With icon
          <ApeSwapIcon />
        </Link>
      </div>
      <div>
        <LinkExternal href="/">Link External</LinkExternal>
      </div>
    </div>
  );
};
