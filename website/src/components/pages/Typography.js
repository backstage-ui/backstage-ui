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
    <h1 className="bs-styleguide-page__title">Typography</h1>
    <h2 className="bs-styleguide-page__subtitle">Usage</h2>
    <Demo code={`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`} title="Headings">
    </Demo>
    <Demo code={`<p>
  Lorem ipsum <strong>dolor sit amet</strong>, consectetur adipisicing
  elit. Inventore <em>quisquam accusantium</em>, alias maxime!
</p>`} title="Text">
    </Demo>
  </Page>
);
