/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React from "react";

import Demo from "../Demo";
import Page from "../Page";


export default () => (
  <Page>
    <h1 className="bs-styleguide-page__title">Action Bar</h1>
    <h2 className="bs-styleguide-page__subtitle">Usage</h2>
    <p className="bs-styleguide-page__lead">
      The action bar works as a safe and constant environment, where the user may find contextual actions to the page and a navigational breadcrumb. It should always be fixed under the header.
    </p>
    <Demo code={`
    `}/>
    <h2 className="bs-styleguide-page__subtitle">Buttons</h2>
    <p className="bs-styleguide-page__lead">
      There are two kinds of action buttons: Hit blue base for the primary function and Gray 8 base for secundary functions.
    </p>
    <Demo code={`
    `}/>
    <h2 className="bs-styleguide-page__subtitle">Icons and Labels</h2>
    <p className="bs-styleguide-page__lead">
      Each button must come with its correspondent icon. Together, icon and label must pass a message in the most clear and objective way. 
    </p>
    <Demo code={`<button class="bs-ui-button bs-ui-button--background-black"><span><i class="material-icons ic">remove_red_eye</i>preview</span></button>
<button class="bs-ui-button bs-ui-button--background-black"><span><i class="material-icons ic">cloud_done</i>save</span></button>
<button class="bs-ui-button bs-ui-button--background-black"><span><i class="material-icons ic">date_range</i>schedule</span></button>
<button class="bs-ui-button bs-ui-button--background-black"><span><i class="material-icons ic">cloud_upload</i>publish</span></button>
<button class="bs-ui-button bs-ui-button--background-black"><span><i class="material-icons ic">edit</i>create</span></button>
<button class="bs-ui-button bs-ui-button--background-black"><i class="material-icons ic">more_horiz</i></button>
`}/>
    <h2 className="bs-styleguide-page__subtitle">Primary Action</h2>
    <p className="bs-styleguide-page__lead">
      There must be only one primary action on the action bar. It will always be at the last position on the right. In the case where there is a collapsed button, it will come next to it, on the left side.
    </p>
    <Demo code={`
    `}/>
    <h2 className="bs-styleguide-page__subtitle">Collapsed Button</h2>
    <p className="bs-styleguide-page__lead">
      It should group together actions with no frequent use or not directly related to the user’s context. It should also group dangerous actions, such as: Cancel, Delete, Unpublish.
      When used, it must always be at the last position on the right.
    </p>
    <Demo code={`
    `}/>
  </Page>
);
