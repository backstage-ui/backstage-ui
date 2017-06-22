/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React from "react";

import Demo from "../Demo";
import Page from "../Page";


export default () => (
  <Page>
    <h1 className="bs-styleguide-page__title">Breadcrumbs</h1>
    <h2 className="bs-styleguide-page__subtitle">Usage</h2>
    <p className="bs-styleguide-page__lead">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, sed.
    </p>
    <Demo code={`<ol class="bs-ui-breadcrumbs">
  <li class="bs-ui-breadcrumbs__item">
    <a href="#" class="bs-ui-breadcrumbs__link">Dashboard</a>
  </li>
  <li class="bs-ui-breadcrumbs__item">
    <a href="#" class="bs-ui-breadcrumbs__link">Item-list</a>
  </li>
  <li class="bs-ui-breadcrumbs__item">item 1</li>
</ol>`}/>
  </Page>
);
