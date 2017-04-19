/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React from "react";

import Demo from "../../Demo";
import Page from "../../Page"

export default () => (
  <Page>
    <h1 className="bs-styleguide-page__title">Input</h1>
    <h2 className="bs-styleguide-page__subtitle">Usage</h2>
    <p className="bs-styleguide-page__lead">
      Lorem ipsum dolor sit amet.
    </p>
    <Demo code={`<div class="bs-ui-form-control">
  <label class="bs-ui-form-control__label">My Field</label>
  <input type="text" class="bs-ui-form-control__field"/>
</div>`}/>
    <Demo code={`<div class="bs-ui-form-control">
  <input type="text" placeholder="Just a placeholder" class="bs-ui-form-control__field"/>
</div>`}/>
    <Demo code={`<div class="bs-ui-form-control bs-ui-form-control--error">
  <input type="text" placeholder="Just a placeholder" class="bs-ui-form-control__field" value="invalid"/>
  <p class="bs-ui-form-control__field-error">This field is required.</p>
</div>`}/>
    <Demo code={`<div class="bs-ui-form-control bs-ui-form-control--required">
  <label class="bs-ui-form-control__label">My Field</label>
  <input type="text" placeholder="Required field" class="bs-ui-form-control__field"/>
</div>`}/>
  </Page>
);
