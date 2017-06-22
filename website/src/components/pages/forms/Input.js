/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React from "react";

import Demo from "../../Demo";
import Page from "../../Page";


export default () => (
  <Page>
    <h1 className="bs-styleguide-page__title">Input</h1>
    <h2 className="bs-styleguide-page__subtitle">Usage</h2>
    <p className="bs-styleguide-page__lead">
      Lorem ipsum dolor sit amet.
    </p>
    <Demo title="Basic usage" code={`
    <input type="text" placeholder="Placeholder" class="bs-ui-form-control__field"/>
`}/>
    <Demo title="Basic usage" code={`<div class="bs-ui-form-control">
  <label class="bs-ui-form-control__label">Basic field with label and placeholder</label>
  <input type="text" placeholder="Placeholder" class="bs-ui-form-control__field"/>
</div>
<div class="bs-ui-form-control">
  <label class="bs-ui-form-control__label">Disabled field</label>
  <p class="bs-ui-form-control__description">Field auxiliary description</p>
  <input type="text" placeholder="Placeholder" class="bs-ui-form-control__field bs-ui-form-control__field--disabled"/>
</div>
<div class="bs-ui-form-control">
  <label class="bs-ui-form-control__label">Disabled field</label>
  <input type="text" placeholder="Placeholder" class="bs-ui-form-control__field bs-ui-form-control__field--disabled"/>
</div>
<div class="bs-ui-form-control">
  <label class="bs-ui-form-control__label">Textarea</label>
  <textarea placeholder="Placeholder" class="bs-ui-form-control__textarea"></textarea>
</div>`}/>
    <Demo title="Validation" code={`<div class="bs-ui-form-control bs-ui-form-control--error">
  <label class="bs-ui-form-control__label">My Field</label>
  <input type="text" placeholder="Just a placeholder" class="bs-ui-form-control__field" value="invalid"/>
  <p class="bs-ui-form-control__field-error">Error message.</p>
</div>
<div class="bs-ui-form-control bs-ui-form-control--required">
  <label class="bs-ui-form-control__label">My Field</label>
  <input type="text" placeholder="Required field" class="bs-ui-form-control__field"/>
</div>`}/>
    <Demo title="Sizes" code={`<div class="bs-ui-form-control">
  <label class="bs-ui-form-control__label">Medium size</label>
  <input type="text" placeholder="Placeholder" class="bs-ui-form-control__field"/>
</div>
<div class="bs-ui-form-control bs-ui-form-control--small">
  <label class="bs-ui-form-control__label">Small size</label>
  <input type="text" placeholder="Placeholder" class="bs-ui-form-control__field"/>
</div>`}/>
    <Demo title="HTML5 inputs" code={`<div class="bs-ui-form-control">
  <label class="bs-ui-form-control__label">Password</label>
  <input type="password" placeholder="Placeholder" class="bs-ui-form-control__field"/>
</div>
<div class="bs-ui-form-control">
  <label class="bs-ui-form-control__label">Email</label>
  <input type="email" placeholder="Placeholder" class="bs-ui-form-control__field"/>
</div>
<div class="bs-ui-form-control">
  <label class="bs-ui-form-control__label">Number</label>
  <input type="number" placeholder="Placeholder" class="bs-ui-form-control__field"/>
</div>`}/>
  </Page>
);
