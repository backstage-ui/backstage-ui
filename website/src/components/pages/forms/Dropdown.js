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
      <Demo code={`
<div class="bs-ui-dropdown">
  <div class="bs-ui-dropdown__item">Helvetica</div>
  <ul class="bs-ui-dropdown__list">
    <li class="bs-ui-dropdown__list-item" key="helvetica">Helvetica</li>
    <li class="bs-ui-dropdown__list-item" key="haas-grotesk">Haas Grotesk</li>
    <li class="bs-ui-dropdown__list-item" key="proxima-nova">Proxima Nova</li>
  </ul>
</div>
      `} title="Closed" />

      <Demo style={openedStyle} code={`
<div class="bs-ui-dropdown bs-ui-dropdown--open">
  <div class="bs-ui-dropdown__item">Helvetica</div>
  <ul class="bs-ui-dropdown__list">
    <li class="bs-ui-dropdown__list-item bs-ui-dropdown__list-item--selected" key="helvetica">Helvetica</li>
    <li class="bs-ui-dropdown__list-item" key="haas-grotesk">Haas Grotesk</li>
    <li class="bs-ui-dropdown__list-item" key="proxima-nova">Proxima Nova</li>
  </ul>
</div>
      `} title="Opened" />

      <Demo code={`
<div class="bs-ui-dropdown bs-ui-dropdown--disabled">
  <div class="bs-ui-dropdown__item">Disabled</div>
  <ul class="bs-ui-dropdown__list">
  </ul>
</div>
      `} title="Disabled" />

      <Demo code={`
<div class="bs-ui-dropdown bs-ui-dropdown--small">
  <div class="bs-ui-dropdown__item">Helvetica</div>
  <ul class="bs-ui-dropdown__list">
    <li class="bs-ui-dropdown__list-item" key="helvetica">Helvetica</li>
    <li class="bs-ui-dropdown__list-item" key="haas-grotesk">Haas Grotesk</li>
    <li class="bs-ui-dropdown__list-item" key="proxima-nova">Proxima Nova</li>
  </ul>
</div>
      `} title="Small Closed" />

      <Demo style={openedStyle} code={`
<div class="bs-ui-dropdown bs-ui-dropdown--small bs-ui-dropdown--open">
  <div class="bs-ui-dropdown__item">Helvetica</div>
  <ul class="bs-ui-dropdown__list">
    <li class="bs-ui-dropdown__list-item bs-ui-dropdown__list-item--selected" key="helvetica">Helvetica</li>
    <li class="bs-ui-dropdown__list-item" key="haas-grotesk">Haas Grotesk</li>
    <li class="bs-ui-dropdown__list-item" key="proxima-nova">Proxima Nova</li>
  </ul>
</div>
      `} title="Small Opened" />

      <Demo code={`
<div class="bs-ui-dropdown bs-ui-dropdown--small bs-ui-dropdown--disabled">
  <div class="bs-ui-dropdown__item">Disabled</div>
  <ul class="bs-ui-dropdown__list">
  </ul>
</div>
      `} title="Small Disabled" />

      <Demo style={openUpStyle} code={`
<div style="display: inline-block; width: 40%; margin-right: 20px"> <!-- Wrapper div for example, not required -->
  <div class="bs-ui-dropdown bs-ui-dropdown--open-up">
    <div class="bs-ui-dropdown__item">Helvetica</div>
    <ul class="bs-ui-dropdown__list">
      <li class="bs-ui-dropdown__list-item bs-ui-dropdown__list-item--selected" key="helvetica">Helvetica</li>
      <li class="bs-ui-dropdown__list-item" key="haas-grotesk">Haas Grotesk</li>
      <li class="bs-ui-dropdown__list-item" key="proxima-nova">Proxima Nova</li>
    </ul>
  </div>
</div>
<div style="display: inline-block; width: 40%;"> <!-- Wrapper div for example, not required -->
  <div class="bs-ui-dropdown bs-ui-dropdown--open bs-ui-dropdown--open-up">
    <div class="bs-ui-dropdown__item">Helvetica</div>
    <ul class="bs-ui-dropdown__list">
      <li class="bs-ui-dropdown__list-item bs-ui-dropdown__list-item--selected" key="helvetica">Helvetica</li>
      <li class="bs-ui-dropdown__list-item" key="haas-grotesk">Haas Grotesk</li>
      <li class="bs-ui-dropdown__list-item" key="proxima-nova">Proxima Nova</li>
    </ul>
  </div>
</div>
      `} title="Open up" />
    </Page>
  );
};
