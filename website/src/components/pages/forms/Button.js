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
    <h2 className="bs-styleguide-page__subtitle">Types</h2>
    <Demo code={`<button class="bs-ui-button bs-ui-button--background-black"><span>Primary</span></button>
<button class="bs-ui-button bs-ui-button--background-blue"><span>secondary</span></button>
<button class="bs-ui-button bs-ui-button--background-red"><span>alert</span></button>
<button class="bs-ui-button bs-ui-button--background-red bs-ui-button--disabled"><span>disabled</span></button>`}>
      <p>There are two kinds of buttons: with background and without backgrounds.</p>
    </Demo>
    <Demo code={`<button class="bs-ui-button"><span>primary</span></button>
<button class="bs-ui-button bs-ui-button--blue"><span>secondary</span></button>
<button class="bs-ui-button bs-ui-button--red"><span>alert</span></button>
<button class="bs-ui-button bs-ui-button--red bs-ui-button--disabled"><span>disabled</span></button>`}>
    </Demo>
    <h2 className="bs-styleguide-page__subtitle">Size</h2>
    <Demo code={`<button class="bs-ui-button bs-ui-button--background-black bs-ui-button--large"><span>large</span></button>
<button class="bs-ui-button bs-ui-button--background-black"><span>medium</span></button>
<button class="bs-ui-button bs-ui-button--background-black bs-ui-button--small"><span>small</span></button>`}/>
    <h2 className="bs-styleguide-page__subtitle">Icons</h2>
    <Demo code={`<button class="bs-ui-button bs-ui-button--background-black"><span><i class="material-icons ic">cloud_upload</i>upload</span></button>
<button class="bs-ui-button bs-ui-button--background-black"><i class="material-icons ic">cloud_upload</i></button>
<button class="bs-ui-button bs-ui-button--background-black"><i class="material-icons ic">more_horiz</i></button>`}/>
    <Demo code={`<button class="bs-ui-button bs-ui-button--black"><span><i class="material-icons ic">cloud_upload</i>upload</span></button>
<button class="bs-ui-button bs-ui-button--black"><i class="material-icons ic">cloud_upload</i></button>
<button class="bs-ui-button bs-ui-button--black"><i class="material-icons ic">more_horiz</i></button>`}/>
  </Page>
);
