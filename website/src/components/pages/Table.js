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
    <h1 className="bs-styleguide-page__title">Table</h1>
    <h2 className="bs-styleguide-page__subtitle">Usage</h2>

    <p className="bs-styleguide-page__lead">Sample Table with plain text</p>
    <Demo code={`<table class="bs-ui-table">
  <thead class="bs-ui-table__header">
    <tr class="bs-ui-table__row">
      <th class="bs-ui-table__head">Name</th>
      <th class="bs-ui-table__head">Age</th>
    </tr>
  </thead>
  <tbody class="bs-ui-table__body">
    <tr class="bs-ui-table__row">
      <td class="bs-ui-table__cell">
        <span class="bs-ui-table__cell-content" data-title="Name:">Lorem</span>
      </td>
      <td class="bs-ui-table__cell">
        <span class="bs-ui-table__cell-content" data-title="Date:">1</span>
      </td>
    </tr>
    <tr class="bs-ui-table__row">
      <td class="bs-ui-table__cell">
        <span class="bs-ui-table__cell-content" data-title="Name:">Ipsum</span>
      </td>
      <td class="bs-ui-table__cell">
        <span class="bs-ui-table__cell-content" data-title="Date:">5</span>
      </td>
    </tr>
    <tr class="bs-ui-table__row">
      <td class="bs-ui-table__cell">
        <span class="bs-ui-table__cell-content" data-title="Name:">Dolor</span>
      </td>
      <td class="bs-ui-table__cell">
        <span class="bs-ui-table__cell-content" data-title="Date:">2</span>
      </td>
    </tr>
  </tbody>
</table>`}/>

  <p className="bs-styleguide-page__lead">Sample table with links</p>
  <Demo code={`<table class="bs-ui-table">
  <thead class="bs-ui-table__header">
    <tr class="bs-ui-table__row">
      <th class="bs-ui-table__head">Name</th>
      <th class="bs-ui-table__head">Age</th>
    </tr>
  </thead>
  <tbody class="bs-ui-table__body">
    <tr class="bs-ui-table__row">
      <td class="bs-ui-table__cell">
        <a class="bs-ui-table__link" data-title="Name:" href="#/table/lorem">Lorem</a>
      </td>
      <td class="bs-ui-table__cell">
        <a class="bs-ui-table__link" data-title="Date:" href="#/table/lorem">1</a>
      </td>
    </tr>
    <tr class="bs-ui-table__row">
      <td class="bs-ui-table__cell">
        <a class="bs-ui-table__link" data-title="Name:" href="#/table/ipsum">Ipsum</a>
      </td>
      <td class="bs-ui-table__cell">
        <a class="bs-ui-table__link" data-title="Date:" href="#/table/ipsum">5</a>
      </td>
    </tr>
    <tr class="bs-ui-table__row">
      <td class="bs-ui-table__cell">
        <a class="bs-ui-table__link" data-title="Name:" href="#/table/dolor">Dolor</a>
      </td>
      <td class="bs-ui-table__cell">
        <a class="bs-ui-table__link" data-title="Date:" href="#/table/dolor">2</a>
      </td>
    </tr>
  </tbody>
</table>`}/>
  </Page>
);
