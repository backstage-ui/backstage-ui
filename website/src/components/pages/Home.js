/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React from "react";

import {Link} from "react-router-dom";

import Page from "../Page";


export default () => (
  <Page>
    <h1 className="bs-styleguide-home__title">Backstage UI</h1>
    <p className="bs-styleguide-page__lead">
      Backstage UI is a modern front-end library providing reusable
      beautiful components
    </p>
    <Link to="/" className="bs-ui-button bs-ui-button--black">Get Started</Link>
  </Page>
)
