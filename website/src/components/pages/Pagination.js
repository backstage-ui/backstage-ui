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

    <Demo title="First page" code={`<div class="bs-ui-pagination">
  <div class="bs-ui-pagination__previous">
    <i class="material-icons bs-ui-pagination__arrow bs-ui-pagination--disabled">arrow_back</i>
  </div>
  <div class="bs-ui-pagination__current">
    <input type="text" value="1" class="bs-ui-pagination__input" />
    of 292
  </div>
  <div class="bs-ui-pagination__next">
    <a href="#/pagination/next"><i class="material-icons bs-ui-pagination__arrow">arrow_forward</i></a>
  </div>
</div>`}/>

    <Demo title="Infinite with page selection" code={`<ul class="bs-ui-pagination">
  <li class="bs-ui-pagination__previous">
    <i class="material-icons bs-ui-pagination__arrow">arrow_back</i>
  </li>
  <li class="bs-ui-pagination__current">
    <input type="text" value="15" class="bs-ui-pagination__input" />
  </li>
  <li class="bs-ui-pagination__next">
    <a href="#/pagination/next"><i class="material-icons bs-ui-pagination__arrow">arrow_forward</i></a>
  </li>
</ul>`}/>

    <Demo title="Infinite" code={`<ul class="bs-ui-pagination ">
  <li class="bs-ui-pagination__previous">
    <a href="#/pagination/previous"><i class="material-icons bs-ui-pagination__arrow">arrow_back</i></a>
  </li>
  <li class="bs-ui-pagination__next">
    <a href="#/pagination/next"><i class="material-icons bs-ui-pagination__arrow">arrow_forward</i></a>
  </li>
</ul>`}/>
  </Page>
);
