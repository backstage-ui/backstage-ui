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
    <Demo code={`<button class="bs-ui-button bs-ui-button--background-black">default</button>
<button class="bs-ui-button bs-ui-button--background-blue">primary</button>
<button class="bs-ui-button bs-ui-button--background-red">alert</button>
<button class="bs-ui-button bs-ui-button--background-red bs-ui-button--disabled">disabled</button>`} title="Background">
      <p>There are two kinds of buttons: with background and without backgrounds.</p>
    </Demo>
    <Demo code={`<button class="bs-ui-button">default</button>
<button class="bs-ui-button bs-ui-button--blue">primary</button>
<button class="bs-ui-button bs-ui-button--red">alert</button>
<button class="bs-ui-button bs-ui-button--red bs-ui-button--disabled">disabled</button> `} title="Flat">
    </Demo>
    <Demo code={`<button class="bs-ui-button bs-ui-button--background-black bs-ui-button--large">large</button>
<button class="bs-ui-button bs-ui-button--background-black">medium</button>
<button class="bs-ui-button bs-ui-button--background-black bs-ui-button--small">small</button>`} title="Sizes"/>
    <h2 className="bs-styleguide-page__subtitle">Icons</h2>
    <Demo code={`<button class="bs-ui-button bs-ui-button--background-black"><i class="material-icons ic ic--left">cloud_upload</i>upload</button>
<button class="bs-ui-button bs-ui-button--background-black"><i class="material-icons ic">cloud_upload</i></button>`} title="Background"/>
    <Demo code={`<button class="bs-ui-button bs-ui-button--black"><i class="material-icons ic ic--left">cloud_upload</i>upload</button>
<button class="bs-ui-button bs-ui-button--black"><i class="material-icons ic">cloud_upload</i></button>`} title="Flat"/>
  </Page>
);
