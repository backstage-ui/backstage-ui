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
    <h1 className="bs-styleguide-page__title">Pagination</h1>
    <h2 className="bs-styleguide-page__subtitle">Usage</h2>
    <p className="bs-styleguide-page__lead">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, sed.
    </p>

    <Demo title="First page" code={`<ul class="bs-ui-pagination">
  <li class="bs-ui-pagination--previous">
    <i class="material-icons bs-ui-pagination--arrow bs-ui-pagination--disabled">arrow_back</i>
  </li>
  <li class="bs-ui-pagination--current">
    <input type="text" value="1" />
    of 292
  </li>
  <li class="bs-ui-pagination--next">
    <a href="#/pagination/next"><i class="material-icons bs-ui-pagination--arrow">arrow_forward</i></a>
  </li>
</ul>`}/>

    <Demo title="Infinite with page selection" code={`<ul class="bs-ui-pagination">
  <li class="bs-ui-pagination--previous">
    <i class="material-icons bs-ui-pagination--arrow">arrow_back</i>
  </li>
  <li class="bs-ui-pagination--current">
    <input type="text" value="15">
  </li>
  <li class="bs-ui-pagination--next">
    <a href="#/pagination/next"><i class="material-icons bs-ui-pagination--arrow">arrow_forward</i></a>
  </li>
</ul>`}/>

    <Demo title="Infinite" code={`<ul class="bs-ui-pagination ">
  <li class="bs-ui-pagination--previous">
    <a href="#/pagination/previous"><i class="material-icons bs-ui-pagination--arrow">arrow_back</i></a>
  </li>
  <li class="bs-ui-pagination--next">
    <a href="#/pagination/next"><i class="material-icons bs-ui-pagination--arrow">arrow_forward</i></a>
  </li>
</ul>`}/>
  </Page>
);
