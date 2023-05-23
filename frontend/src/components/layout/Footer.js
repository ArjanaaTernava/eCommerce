import React, { Fragment } from "react";
import { useGlobalContext } from "../../context";
const Footer = () => {

  const { footerYear } = useGlobalContext();

  return (

      <Fragment>
        <footer className="py-1">
          <p className="text-center mt-1">eBlej - {footerYear}, All Rights Reserved</p>
        </footer>
      </Fragment>
  
  );
};

export default Footer;
