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
    <Demo code={`<div class="bs-ui-input">
  <label class="bs-ui-input__label">My Field</label>
  <input type="text" class="bs-ui-input__field"/>
</div>`}/>
    <Demo code={`<div class="bs-ui-input">
  <input type="text" placeholder="Just a placeholder" class="bs-ui-input__field"/>
</div>`}/>
    <Demo code={`<div class="bs-ui-input bs-ui-input--error">
  <input type="text" placeholder="Just a placeholder" class="bs-ui-input__field" value="invalid"/>
  <p class="bs-ui-input__field-error">This field is required.</p>
</div>`}/>
    <Demo code={`<div class="bs-ui-input bs-ui-input--required">
  <label class="bs-ui-input__label">My Field</label>
  <input type="text" placeholder="Required field" class="bs-ui-input__field"/>
</div>`}/>
  </Page>
);
