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
    <h1 className="bs-styleguide-page__title">Tabs</h1>
    <h2 className="bs-styleguide-page__subtitle">Usage</h2>
    <p className="bs-styleguide-page__lead">
    </p>
    <Demo title="Regular size" code={`<div class="bs-ui-tabs">
  <a href="#" class="bs-ui-tabs__tab bs-ui-tabs__tab--active">First Tab</a>
  <a href="#" class="bs-ui-tabs__tab">Second Tab</a>
  <a href="#" class="bs-ui-tabs__tab">Third Tab</a>
</div>`}/>
    <Demo title="Large size" code={`<div class="bs-ui-tabs bs-ui-tabs--large">
  <a href="#" class="bs-ui-tabs__tab bs-ui-tabs__tab--active">First Tab</a>
  <a href="#" class="bs-ui-tabs__tab">Second Tab</a>
  <a href="#" class="bs-ui-tabs__tab">Third Tab</a>
</div>`}/>
    <Demo title="Small size" code={`<div class="bs-ui-tabs bs-ui-tabs--small">
  <a href="#" class="bs-ui-tabs__tab bs-ui-tabs__tab--active">First Tab</a>
  <a href="#" class="bs-ui-tabs__tab">Second Tab</a>
  <a href="#" class="bs-ui-tabs__tab">Third Tab</a>
</div>`}/>
  </Page>
);
