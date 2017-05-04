/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React from "react";

import Demo from "../Demo";
import Page from "../Page"


export default () => (
  <Page>
    <h1 className="bs-styleguide-page__title">Table</h1>
    <h2 className="bs-styleguide-page__subtitle">Usage</h2>

    <p className="bs-styleguide-page__lead">Sample Table with plain text</p>
    <Demo code={`<table class="bs-ui-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span data-title="Name:">Lorem</span></td>
      <td><span data-title="Date:">1</span></td>
    </tr>
    <tr>
      <td><span data-title="Name:">Ipsum</span></td>
      <td><span data-title="Date:">5</span></td>
    </tr>
    <tr>
      <td><span data-title="Name:">Dolor</span></td>
      <td><span data-title="Date:">2</span></td>
    </tr>
  </tbody>
</table>`}/>

<p className="bs-styleguide-page__lead">Sample table with links</p>
<Demo code={`<table class="bs-ui-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a data-title="Name:" href="/lorem">Lorem</a></td>
      <td><a data-title="Date:" href="/lorem">1</a></td>
    </tr>
    <tr>
      <td><a data-title="Name:" href="/ipsum">Ipsum</a></td>
      <td><a data-title="Date:" href="/ipsum">5</a></td>
    </tr>
    <tr>
      <td><a data-title="Name:" href="/dolor">Dolor</a></td>
      <td><a data-title="Date:" href="/dolor">2</a></td>
    </tr>
  </tbody>
</table>`}/>
  </Page>
);
