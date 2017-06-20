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

    <Demo code={`<button class="bs-ui-button bs-ui-button--background-black">default</button>
<button class="bs-ui-button bs-ui-button--background-blue">primary</button>
<button class="bs-ui-button bs-ui-button--background-red">alert</button>
<button class="bs-ui-button bs-ui-button--background-red bs-ui-button--disabled">disabled</button>`} title="Background">
    </Demo>

    <Demo code={`<button class="bs-ui-button">default</button>
<button class="bs-ui-button bs-ui-button--blue">primary</button>
<button class="bs-ui-button bs-ui-button--red">alert</button>
<button class="bs-ui-button bs-ui-button--red bs-ui-button--disabled">disabled</button> `} title="Flat">
    </Demo>

    <p className="bs-styleguide-page__lead">
      You must choose one of the three different sizes available: large, medium or small.
    </p>

    <Demo code={`<button class="bs-ui-button bs-ui-button--background-black bs-ui-button--large">large</button>
<button class="bs-ui-button bs-ui-button--background-black">medium</button>
<button class="bs-ui-button bs-ui-button--background-black bs-ui-button--small">small</button>`} title="Sizes"/>

    <h2 className="bs-styleguide-page__subtitle">Icons and Labels</h2>
    <p className="bs-styleguide-page__lead">
      You can use a button with or without an icon. In case of a button with icon and label, it must pass a message in the most clear and objective way.
    </p>
    <Demo code={`<button class="bs-ui-button bs-ui-button--background-black"><i class="material-icons ic ic--left">cloud_upload</i>upload</button>
<button class="bs-ui-button bs-ui-button--background-black"><i class="material-icons ic">cloud_upload</i></button>`} title="Background"/>

    <Demo code={`<button class="bs-ui-button bs-ui-button--black"><i class="material-icons ic ic--left">cloud_upload</i>upload</button>
<button class="bs-ui-button bs-ui-button--black"><i class="material-icons ic">cloud_upload</i></button>`} title="Flat"/>

    <h2 className="bs-styleguide-page__subtitle">Collapsed buttons</h2>
    <p className="bs-styleguide-page__lead">
      You can align a collapsed button in the left or in the right side of page.
    </p>
    <Demo style={{height: "200px"}} code={`<div class="bs-ui-collapsed bs-ui-collapsed__button">
  <button class="bs-ui-button bs-ui-button--background-black"><i class="material-icons ic">more_horiz</i></button>
  <div class="bs-ui-options bs-ui-options--left bs-ui-options--open">
    <div class="bs-ui-options__list">
      <div class="bs-ui-options__item" key="haas-grotesk">Haas Grotesk</div>
      <div class="bs-ui-options__item bs-ui-options__item--selected"  key="helvetica">Helvetica</div>
      <div class="bs-ui-options__item" key="proxima-nova">Proxima Nova</div>
    </div>
  </div>
</div>`} title="Left" />

        <Demo style={{height: "200px"}} code={`<div class="bs-ui-collapsed bs-ui-collapsed__button" style="float: right">
    <button class="bs-ui-button bs-ui-button--background-black"><i class="material-icons ic">more_horiz</i></button>
  <div class="bs-ui-options bs-ui-options--right bs-ui-options--open">
    <div class="bs-ui-options__list">
      <div class="bs-ui-options__item" key="haas-grotesk">Haas Grotesk</div>
      <div class="bs-ui-options__item bs-ui-options__item--selected"  key="helvetica">Helvetica</div>
      <div class="bs-ui-options__item" key="proxima-nova">Proxima Nova</div>
    </div>
  </div>
</div>`} title="Right" />
  </Page>
);
