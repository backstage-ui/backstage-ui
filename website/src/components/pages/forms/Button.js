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

    <p className="bs-styleguide-page__lead">
      There are two kinds of buttons: with background and without background.
    </p>

    <Demo code={`<button class="bs-ui-button bs-ui-button--background-primary">primary</button>
<button class="bs-ui-button bs-ui-button--background">default</button>
<button class="bs-ui-button bs-ui-button--background-alert">alert</button>
<button class="bs-ui-button bs-ui-button--background bs-ui-button--disabled">disabled</button>`} >
    </Demo>

    <Demo code={`<button class="bs-ui-button bs-ui-button--primary">primary</button>
<button class="bs-ui-button">default</button>
<button class="bs-ui-button bs-ui-button--alert">alert</button>
<button class="bs-ui-button bs-ui-button bs-ui-button--disabled">disabled</button> `} >
    </Demo>

    <p className="bs-styleguide-page__lead">
      You must choose one of the three different sizes available: large, medium or small.
    </p>

    <Demo code={`<button class="bs-ui-button bs-ui-button--background bs-ui-button--large">large</button>
<button class="bs-ui-button bs-ui-button--background">medium</button>
<button class="bs-ui-button bs-ui-button--background bs-ui-button--small">small</button>`} />

    <h2 className="bs-styleguide-page__subtitle">Icons and Labels</h2>
    <p className="bs-styleguide-page__lead">
      You can use a button with or without an icon. In case of a button with icon and label, it must pass a message in the most clear and objective way.
    </p>
    <Demo code={`<button class="bs-ui-button bs-ui-button--background"><i class="material-icons ic ic--left">cloud_upload</i>upload</button>
<button class="bs-ui-button bs-ui-button--background"><i class="material-icons ic">cloud_upload</i></button>`} />

    <Demo code={`<button class="bs-ui-button bs-ui-button"><i class="material-icons ic ic--left">cloud_upload</i>upload</button>
<button class="bs-ui-button bs-ui-button--black"><i class="material-icons ic">cloud_upload</i></button>`} />

    <h2 className="bs-styleguide-page__subtitle">Collapsed button</h2>
    <p className="bs-styleguide-page__lead">
      Group of actions collapsed in a list.
    </p>
    <Demo style={{height: "200px"}} code={`<div class="bs-ui-collapsed">
  <button class="bs-ui-button bs-ui-button--background"><i class="material-icons ic">more_horiz</i></button>
  <div class="bs-ui-options bs-ui-collapsed__options bs-ui-collapsed__options--left">
    <div class="bs-ui-options__list">
      <div class="bs-ui-options__item" key="haas-grotesk">Haas Grotesk</div>
      <div class="bs-ui-options__item bs-ui-options__item--selected"  key="helvetica">Helvetica</div>
      <div class="bs-ui-options__item" key="proxima-nova">Proxima Nova</div>
    </div>
  </div>
</div>`} />
  </Page>
);
