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
    <Demo code={`<div class="bs-ui-action-bar">
  <ol class="bs-ui-breadcrumbs">
    <li class="bs-ui-breadcrumbs__item"><a href="#" class="bs-ui-breadcrumbs__link">Previous</a></li>
    <li class="bs-ui-breadcrumbs__item">Current</li>
  </ol>
  <div class="bs-ui-action-bar__actions-group">
    <button class="bs-ui-action-bar__action bs-ui-button"><i class="material-icons bs-ui-button__icon bs-ui-button__icon--left">mode_edit</i>create</button>
  </div>
</div>
    `}/>
    <h2 className="bs-styleguide-page__subtitle">Buttons</h2>
    <p className="bs-styleguide-page__lead">
      There are two kinds of action buttons: Hit blue base for the primary function and Gray 8 base for secondary functions.
      There must be only one primary action on the action bar. It will always be at the last position on the right. In the case where there is a collapsed button, it will come next to it, on the left side.
    </p>
    <Demo code={`<div class="bs-ui-action-bar">
  <ol class="bs-ui-breadcrumbs">
    <li class="bs-ui-breadcrumbs__item"><a href="#" class="bs-ui-breadcrumbs__link">Previous</a></li>
    <li class="bs-ui-breadcrumbs__item">Current</li>
  </ol>
  <div class="bs-ui-action-bar__actions-group">
    <button class="bs-ui-action-bar__action bs-ui-button"><i class="material-icons bs-ui-button__icon bs-ui-button__icon--left">date_range</i>schedule</button>
    <button class="bs-ui-action-bar__action bs-ui-button"><i class="material-icons bs-ui-button__icon bs-ui-button__icon--left">cloud_done</i>save</button>
    <button class="bs-ui-action-bar__action bs-ui-button bs-ui-button--primary"><i class="material-icons bs-ui-button__icon bs-ui-button__icon--left">cloud_upload</i>publish</button>
    <button class="bs-ui-action-bar__action bs-ui-button"><i class="material-icons bs-ui-button__icon">more_horiz</i></button>
  </div>
</div>
    `}/>
    <h2 className="bs-styleguide-page__subtitle">Collapsed Button</h2>
    <p className="bs-styleguide-page__lead">
      It should group together actions with no frequent use or not directly related to the user’s context. It should also group dangerous actions, such as: Cancel, Delete, Unpublish.
      When used, it must always be at the last position on the right.
    </p>
    <Demo style={{height: "200px"}} code={`<div class="bs-ui-action-bar">
  <ol class="bs-ui-breadcrumbs">
    <li class="bs-ui-breadcrumbs__item"><a href="#" class="bs-ui-breadcrumbs__link">Previous</a></li>
    <li class="bs-ui-breadcrumbs__item">Current</li>
  </ol>
  <div class="bs-ui-action-bar__actions-group">
    <button class="bs-ui-action-bar__action bs-ui-button"><i class="material-icons bs-ui-button__icon bs-ui-button__icon--left">date_range</i>schedule</button>
    <button class="bs-ui-action-bar__action bs-ui-button"><i class="material-icons bs-ui-button__icon bs-ui-button__icon--left">cloud_done</i>save</button>
    <button class="bs-ui-action-bar__action bs-ui-button bs-ui-button--primary"><i class="material-icons bs-ui-button__icon bs-ui-button__icon--left">cloud_upload</i>publish</button>
    <div class="bs-ui-action-bar__action bs-ui-collapsed">
      <button class="bs-ui-button"><i class="material-icons bs-ui-button__icon">more_horiz</i></button>
      <div class="bs-ui-options bs-ui-collapsed__options bs-ui-collapsed__options--right">
        <div class="bs-ui-options__list">
          <li class="bs-ui-options__item"><a><i class="material-icons ic bs-ui-options__icon">cloud_download</i>Unpublish</a></li>
          <li class="bs-ui-options__item"><a><i class="material-icons ic bs-ui-options__icon">history</i>History</a></li>
          <li class="bs-ui-options__item"><a><i class="material-icons ic bs-ui-options__icon">delete</i>Delete</a></li>
        </div>
      </div>
    </div>
  </div>
</div>
    `}/>
  </Page>
);
