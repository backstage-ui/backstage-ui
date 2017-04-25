/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React from "react";

import {Link} from "react-router-dom";

import logo from '../backstage-logo-black.svg';


export default () => (
  <div className='bs-header-bar'>
    <div className='bs-header-bar__brand'>
      <Link to="/">
        <img src={logo} alt="Backstage" />
      </Link>
    </div>
    <div className="bs-header-bar__github">
      <a target="_blank" href="https://github.com/backstage-ui/backstage-ui">
        See project on github
      </a>
    </div>
  </div>
)
