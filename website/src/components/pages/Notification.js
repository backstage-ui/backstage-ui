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
    <h1 className="bs-styleguide-page__title">Notifications</h1>
    <h2 className="bs-styleguide-page__subtitle">Usage</h2>
    <p className="bs-styleguide-page__lead">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, sed.
    </p>
    <Demo code={`<div style="position: relative; height: 60px">
  <div class="bs-ui-notification bs-ui-notification--show bs-ui-notification--success">
    <span class="bs-ui-notification__text">Document created with success</span>
    <i class="bs-ui-notification__close"></i>
  </div>
</div>`}/>
    <Demo code={`<div style="position: relative; height: 60px">
  <div class="bs-ui-notification bs-ui-notification--error bs-ui-notification--show">
    <span class="bs-ui-notification__text">Error consuming data</span>
    <i class="bs-ui-notification__close"></i>
  </div>
</div>`}/>
    <Demo code={`<div style="position: relative; height: 60px">
  <div class="bs-ui-notification bs-ui-notification--float bs-ui-notification--show">
    <span class="bs-ui-notification__text">
      New version of the app available, please refresh your browser
    </span>
    <a href="#/notification" class="bs-ui-notification__link">Reload</a>
    <i class="bs-ui-notification__close"></i>
  </div>
</div>`}/>
  </Page>
);

