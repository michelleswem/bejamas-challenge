import { Fragment } from "react";
import logo from "../../../assets/icons/logo.svg";
import { HeaderCartButton } from "../headerCartButton";
import "./Header.scss";

export const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <img src={logo} alt="bejamas logo" />

        <HeaderCartButton onShow={props.onShow} />
      </header>
    </Fragment>
  );
};
