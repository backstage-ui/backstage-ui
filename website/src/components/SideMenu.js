/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React from "react";

import {Link} from "react-router-dom";

export default () => (
  <div className='bs-ui-drawer'>
    <ul className="bs-ui-menu">
      <li className="bs-ui-menu__item"><Link to="/">Home</Link></li>
      <li className="bs-ui-menu__item"><Link to="/getting-started">Get Started</Link></li>
      <li className="bs-ui-menu__item"><Link to="/typography">Typography</Link></li>
      <li className="bs-ui-menu__item">
        <p className="bs-ui-menu__title">Forms</p>
        <ul className="bs-ui-menu">
          <li className="bs-ui-menu__item"><Link to="/input">Input</Link></li>
          <li className="bs-ui-menu__item"><Link to="/button">Button</Link></li>
          <li className="bs-ui-menu__item"><Link to="/controls">Controls</Link></li>
        </ul>
      </li>
    </ul>
  </div>
)
