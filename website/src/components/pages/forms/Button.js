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
    <h1 className="bs-styleguide-page__title">Buttons</h1>
    <h2 className="bs-styleguide-page__subtitle">Usage</h2>
    <Demo code={`<button class="bs-ui-button bs-ui-button--background-black">Button</button>
<button class="bs-ui-button">Button</button>`}>
      <p>There are two kinds of buttons: with background, to be used as primary actions and withoout background, to secundary actions.</p>
    </Demo>
    <h2 className="bs-styleguide-page__subtitle">Colors</h2>
    <Demo code={`<button class="bs-ui-button bs-ui-button--background-black"><span>Button</span></button>
<button class="bs-ui-button bs-ui-button--background-blue"><span>Button</span></button>
<button class="bs-ui-button bs-ui-button--background-red"><span>Button</span></button>
<button class="bs-ui-button"><span>Button</span></button>
<button class="bs-ui-button bs-ui-button--blue"><span>Button</span></button>
<button class="bs-ui-button bs-ui-button--red"><span>Button</span></button>`}/>
    <h2 className="bs-styleguide-page__subtitle">Size</h2>
    <Demo code={`<button class="bs-ui-button bs-ui-button--background-black bs-ui-button--large"><span>Button</span></button>
<button class="bs-ui-button bs-ui-button--background-black"><span>Button</span></button>
<button class="bs-ui-button bs-ui-button--background-black bs-ui-button--small"><span>Button</span></button>`}/>
    <h2 className="bs-styleguide-page__subtitle">Icons</h2>
    <Demo code={`<button class="bs-ui-button bs-ui-button--background-black"><span><i class="material-icons ic">cloud_upload</i>Button</span></button>
<button class="bs-ui-button bs-ui-button--background-black"><i class="material-icons ic">cloud_upload</i></button>
<button class="bs-ui-button bs-ui-button--background-black"><i class="material-icons ic">more_horiz</i></button>`}/>
  </Page>
);
