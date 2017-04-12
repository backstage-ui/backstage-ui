import React from "react";

import Demo from "../../Demo";
import Page from "../../Page";

export default () => (
  <Page>
    <h1 className="bs-styleguide-page__title">Form Controls</h1>
    <h2 className="bs-styleguide-page__subtitle">Switches</h2>
    <p className="bs-styleguide-page__lead">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, sed.
    </p>
    <Demo code={`<label class="bs-ui-switch">
  <input type="checkbox">
  <span class="bs-ui-switch__lever"></span>
  Check?
</label>
<label class="bs-ui-switch bs-ui-switch--blue">
  <input type="checkbox">
  <span class="bs-ui-switch__lever"></span>
  Check?
</label>`} title="Switches">
    </Demo>
    <Demo title="Small size" code={`<label class="bs-ui-switch bs-ui-switch--small">
  <input type="checkbox">
  <span class="bs-ui-switch__lever"></span>
  Check?
</label>
<label class="bs-ui-switch bs-ui-switch--small bs-ui-switch--blue">
  <input type="checkbox">
  <span class="bs-ui-switch__lever"></span>
  Check?
</label>`}/>
    <h2 className="bs-styleguide-page__subtitle">Checkboxes</h2>
    <p className="bs-styleguide-page__lead">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, sed.
    </p>
    <Demo code={`<div class="bs-ui-input">
  <label class="bs-ui-checkbox">
    <input type="checkbox">Check?
  </label>
  <label class="bs-ui-checkbox">
    <input type="checkbox" checked>Check?
  </label>
</div>`} title="Radio">
    </Demo>
    <h2 className="bs-styleguide-page__subtitle">Radio buttons</h2>
    <p className="bs-styleguide-page__lead">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, sed.
    </p>
    <Demo code={`<div class="bs-ui-input">
  <label class="bs-ui-radio">
    <input type="radio" checked name="demo">Check?
  </label>
  <label class="bs-ui-radio">
    <input type="radio" name="demo">Check?
  </label>
</div>`} title="Radio">
    </Demo>
  </Page>
);