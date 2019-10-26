import React from "react";
import { Link } from "react-router-dom";

type Props = {
}

export default (props: Props) => (
    <div className="main-wrapper bg-primary-color">
      <div className="left-side">
        <Feed />
      </div>
      <div className="right-side">
        <div className="user-info-wrapper">
          <CardProgress />
          <Collection />
        </div>
      </div>
    </div>
);