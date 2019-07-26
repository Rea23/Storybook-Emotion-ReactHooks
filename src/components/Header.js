/** @jsx jsx */
import React, { Component } from "react";
import { Bounce } from "./ItemsMsg";
import { css, jsx } from "@emotion/core";
export default class Header extends Component {
  render() {
    return (
      <h1
        css={css`
          animation: ${Bounce} 2s ease-in-out infinite;
        `}
      >
        Header
      </h1>
    );
  }
}
