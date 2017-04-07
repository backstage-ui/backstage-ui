import React from "react";

import Demo from "../../Demo";
import Page from "../../Page";

export default () => (
  <Page>
    <h1 className="bs-styleguide-page__title">Buttons</h1>
    <h2 className="bs-styleguide-page__subtitle">Usage</h2>
    <Demo code={`<button class="bs-ui-button bs-ui-button--black">Button</button>
<button class="bs-ui-button">Button</button>`}>
      <p>There are two kinds of buttons: with background, to be used as primary actions and withoout background, fo secundary actions.</p>
    </Demo>
    <h2 className="bs-styleguide-page__subtitle">Colors</h2>
    <Demo code={`<button class="bs-ui-button bs-ui-button--black">Button</button>
<button class="bs-ui-button bs-ui-button--blue">Button</button>
<button class="bs-ui-button bs-ui-button--red">Button</button>`}/>
    <h2 className="bs-styleguide-page__subtitle">Size</h2>
    <Demo code={`<button class="bs-ui-button bs-ui-button--black bs-ui-button--large">Button</button>
<button class="bs-ui-button bs-ui-button--black">Button</button>
<button class="bs-ui-button bs-ui-button--black bs-ui-button--small">Button</button>`}/>
  </Page>
);
