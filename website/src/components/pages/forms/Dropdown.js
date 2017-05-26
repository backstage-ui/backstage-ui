/*
 * Copyright (c) 2013, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */


import React from "react";

import Demo from "../../Demo";
import Page from "../../Page";


export default () => {
  const openedStyle = {
    height: "150px"
  };
  const openUpStyle = {
    "padding-top": "100px"
  };

  return (
    <Page>
      <h1 className="bs-styleguide-page__title">Dropdown</h1>
      <h2 className="bs-styleguide-page__subtitle">Usage</h2>

      <p className="bs-styleguide-page__lead">
        Lorem ipsum dolor sit amet.
      </p>

      <Demo code={`<div class="bs-ui-dropdown">
  <div class="bs-ui-dropdown__item">Helvetica</div>
  <div class="bs-ui-options">
    <div class="bs-ui-options__list">
      <div class="bs-ui-options__item" key="haas-grotesk">Haas Grotesk</div>
      <div class="bs-ui-options__item bs-ui-options__item--selected"  key="helvetica">Helvetica</div>
      <div class="bs-ui-options__item" key="proxima-nova">Proxima Nova</div>
    </div>
  </div>
</div>`} title="Closed" />

    <Demo style={openedStyle} code={`<div class="bs-ui-dropdown">
  <div class="bs-ui-dropdown__item">Helvetica</div>
  <div class="bs-ui-options bs-ui-options--open">
    <div class="bs-ui-options__list">
      <div class="bs-ui-options__item" key="haas-grotesk">Haas Grotesk</div>
      <div class="bs-ui-options__item bs-ui-options__item--selected"  key="helvetica">Helvetica</div>
      <div class="bs-ui-options__item" key="proxima-nova">Proxima Nova</div>
    </div>
  </div>
</div>`} title="Opened" />

      <Demo code={`<div class="bs-ui-dropdown bs-ui-dropdown--disabled">
  <div class="bs-ui-dropdown__item">Disabled</div>
  <div class="bs-ui-options"></div>
</div>`} title="Disabled" />

      <Demo code={`<div class="bs-ui-dropdown bs-ui-dropdown--small">
  <div class="bs-ui-dropdown__item">Helvetica</div>
  <div class="bs-ui-options">
    <div class="bs-ui-options__list">
      <div class="bs-ui-options__item" key="haas-grotesk">Haas Grotesk</div>
      <div class="bs-ui-options__item bs-ui-options__item--selected"  key="helvetica">Helvetica</div>
      <div class="bs-ui-options__item" key="proxima-nova">Proxima Nova</div>
    </div>
  </div>
</div>`} title="Small Closed" />

      <Demo style={openedStyle} code={`<div class="bs-ui-dropdown bs-ui-dropdown--small">
  <div class="bs-ui-dropdown__item">Helvetica</div>
  <div class="bs-ui-options bs-ui-options--open">
    <div class="bs-ui-options__list">
      <div class="bs-ui-options__item" key="haas-grotesk">Haas Grotesk</div>
      <div class="bs-ui-options__item bs-ui-options__item--selected"  key="helvetica">Helvetica</div>
      <div class="bs-ui-options__item" key="proxima-nova">Proxima Nova</div>
    </div>
  </div>
</div>`} title="Small Opened" />

      <Demo code={`<div class="bs-ui-dropdown bs-ui-dropdown--small bs-ui-dropdown--disabled">
  <div class="bs-ui-dropdown__item">Disabled</div>
  <div class="bs-ui-options"></div>
</div>`} title="Small Disabled" />

      <Demo style={openUpStyle} code={`<div class="bs-ui-dropdown">
  <div class="bs-ui-dropdown__item">Helvetica</div>
  <div class="bs-ui-options bs-ui-options--open bs-ui-options--open-up">
    <div class="bs-ui-options__list">
      <div class="bs-ui-options__item" key="haas-grotesk">Haas Grotesk</div>
      <div class="bs-ui-options__item bs-ui-options__item--selected"  key="helvetica">Helvetica</div>
      <div class="bs-ui-options__item" key="proxima-nova">Proxima Nova</div>
    </div>
  </div>
</div>`} title="Open up" />
    </Page>
  );
};
