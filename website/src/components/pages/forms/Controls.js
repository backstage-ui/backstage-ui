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
    <h1 className="bs-styleguide-page__title">Form Controls</h1>
    <h2 className="bs-styleguide-page__subtitle">Switches</h2>
    <p className="bs-styleguide-page__lead">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, sed.
    </p>
    <Demo code={`<label class="bs-ui-switch">
  <input type="checkbox" class="bs-ui-switch__input">
  <span class="bs-ui-switch__lever"></span>
  Check?
</label>`} title="Switches">
    </Demo>

    <Demo title="Small size" code={`<label class="bs-ui-switch bs-ui-switch--small">
  <input type="checkbox" class="bs-ui-switch__input">
  <span class="bs-ui-switch__lever"></span>
  Check?
</label>`}/>

    <h2 className="bs-styleguide-page__subtitle">Checkboxes</h2>
    <p className="bs-styleguide-page__lead">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, sed.
    </p>
    <Demo code={`<div class="bs-ui-input">
  <label class="bs-ui-checkbox">
    <input type="checkbox" class="bs-ui-checkbox__input">Check?
  </label>
  <label class="bs-ui-checkbox">
    <input type="checkbox" class="bs-ui-checkbox__input" checked>Check?
  </label>
</div>`} title="Checkbox" />

    <Demo title="Small size" code={`<div class="bs-ui-input">
  <label class="bs-ui-checkbox bs-ui-checkbox--small">
    <input type="checkbox" class="bs-ui-checkbox__input">Check?
  </label>
  <label class="bs-ui-checkbox bs-ui-checkbox--small">
    <input type="checkbox" class="bs-ui-checkbox__input" checked>Check?
  </label>
</div>`} />

    <h2 className="bs-styleguide-page__subtitle">Radio buttons</h2>
    <p className="bs-styleguide-page__lead">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, sed.
    </p>
    <Demo code={`<div class="bs-ui-input">
  <label class="bs-ui-radio">
    <input type="radio" class="bs-ui-radio__input" checked name="demo">Check?
  </label>
  <label class="bs-ui-radio">
    <input type="radio" class="bs-ui-radio__input" name="demo">Check?
  </label>
</div>`} title="Radio">
    </Demo>

    <Demo code={`<div class="bs-ui-input">
      <label class="bs-ui-radio bs-ui-radio--small">
        <input type="radio" class="bs-ui-radio__input" checked name="demo-small">Check?
      </label>
      <label class="bs-ui-radio bs-ui-radio--small">
        <input type="radio" class="bs-ui-radio__input" name="demo-small">Check?
      </label>
    </div>`} title="Small size" />
  </Page>
);
