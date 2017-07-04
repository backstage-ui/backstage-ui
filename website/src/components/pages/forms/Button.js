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

    <Demo code={`<button class="bs-ui-button bs-ui-button--primary">primary</button>
<button class="bs-ui-button">default</button>
<button class="bs-ui-button bs-ui-button--alert">alert</button>
<button class="bs-ui-button bs-ui-button--disabled">disabled</button>
`} title="Default" />

    <Demo code={`<button class="bs-ui-flat-button bs-ui-flat-button--primary">primary</button>
<button class="bs-ui-flat-button">default</button>
<button class="bs-ui-flat-button bs-ui-flat-button--alert">alert</button>
<button class="bs-ui-flat-button bs-ui-flat-button--disabled">disabled</button>
`} title="Flat Button" />

    <p className="bs-styleguide-page__lead">
      You must choose one of the three different sizes available: large, medium or small.
    </p>

    <Demo code={`<button class="bs-ui-button bs-ui-button--large">large</button>
<button class="bs-ui-button">medium</button>
<button class="bs-ui-button bs-ui-button--small">small</button>
`} title="Sizes" />

    <Demo code={`<button class="bs-ui-flat-button bs-ui-flat-button--large">large</button>
<button class="bs-ui-flat-button">medium</button>
<button class="bs-ui-flat-button bs-ui-flat-button--small">small</button>
`} title="Flat Sizes" />

    <h2 className="bs-styleguide-page__subtitle">Icons and Labels</h2>
    <p className="bs-styleguide-page__lead">
      You can use a button with or without an icon. In case of a button with icon and label, it must pass a message in the most clear and objective way.
    </p>
    <Demo code={`<button class="bs-ui-button bs-ui-button--large"><i class="material-icons bs-ui-button__icon bs-ui-button__icon--left">cloud_upload</i>upload</button>
<button class="bs-ui-button bs-ui-button--large"><i class="material-icons bs-ui-button__icon">cloud_upload</i></button>
<button class="bs-ui-button"><i class="material-icons bs-ui-button__icon bs-ui-button__icon--left">cloud_upload</i>upload</button>
<button class="bs-ui-button"><i class="material-icons bs-ui-button__icon">cloud_upload</i></button>
<button class="bs-ui-button bs-ui-button--small"><i class="material-icons bs-ui-button__icon bs-ui-button__icon--left">cloud_upload</i>upload</button>
<button class="bs-ui-button bs-ui-button--small"><i class="material-icons bs-ui-button__icon">cloud_upload</i></button>

`} title="Default" />

    <Demo code={`<button class="bs-ui-flat-button"><i class="material-icons bs-ui-flat-button__icon bs-ui-flat-button__icon--left">cloud_upload</i>upload</button>
<button class="bs-ui-flat-button"><i class="material-icons bs-ui-flat-button__icon">cloud_upload</i></button>
`} title="Flat" />

    <h2 className="bs-styleguide-page__subtitle">Collapsed button</h2>
    <p className="bs-styleguide-page__lead">
      Group of actions collapsed in a list.
    </p>

    <Demo style={{height: "200px"}} code={`<div class="bs-ui-collapsed">
  <button class="bs-ui-button"><i class="material-icons bs-ui-button__icon">more_horiz</i></button>
  <div class="bs-ui-options bs-ui-collapsed__options bs-ui-collapsed__options--left bs-ui-collapsed__options--open">
    <div class="bs-ui-options__list">
      <div class="bs-ui-options__item" key="haas-grotesk">Haas Grotesk</div>
      <div class="bs-ui-options__item bs-ui-options__item--selected"  key="helvetica">Helvetica</div>
      <div class="bs-ui-options__item" key="proxima-nova">Proxima Nova</div>
    </div>
  </div>
</div>
`} title="Collapsed" />
  </Page>
);
