/*
 * Copyright (c) 2017, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */


import React from "react";

import Demo from "../../Demo";
import Page from "../../Page";


export default () => {
  const openedStyle = {
    height: "160px"
  };
  const maxHeight = {
    height: "220px"
  };

  return (
    <Page>
      <h1 className="bs-styleguide-page__title">Options</h1>
      <p className="bs-styleguide-page__lead">
        The Options component is a cardified list of itens. Its commonly used in
        conjunction with other components like buttons, inputs and dropdowns.
      </p>

      <h2 className="bs-styleguide-page__subtitle">Default</h2>
      <Demo style={openedStyle} code={`<div style="width: 100%; position: relative; ">
  <div class="bs-ui-options">
    <div class="bs-ui-options__list">
      <div class="bs-ui-options__item" key="haas-grotesk">Haas Grotesk</div>
      <div class="bs-ui-options__item bs-ui-options__item--selected"  key="helvetica">Helvetica</div>
      <div class="bs-ui-options__item" key="proxima-nova">Proxima Nova</div>
    </div>
  </div>
</div>
`} title="Default" />

      <Demo style={openedStyle} code={`<div style="width: 100%; position: relative; ">
  <div class="bs-ui-options">
    <div class="bs-ui-options__list">
      <div class="bs-ui-options__item" key="haas-grotesk">Haas Grotesk</div>
      <div class="bs-ui-options__item"  key="helvetica">Helvetica</div>
      <div class="bs-ui-options__item bs-ui-options__item--divider" key="proxima-nova">Proxima Nova</div>
    </div>
  </div>
</div>
`} title="Divider" />

    <Demo style={{height: "240px"}} code={`<div style="width: 100%; position: relative; ">
  <div class="bs-ui-options">
    <div class="bs-ui-options__header">
      <div class="bs-ui-options__title">Select Type</div>
      <div class="bs-ui-options__subtitle">You can change anytime!</div>
    </div>
    <div class="bs-ui-options__list">
      <div class="bs-ui-options__item" key="haas-grotesk">Haas Grotesk</div>
      <div class="bs-ui-options__item bs-ui-options__item--selected"  key="helvetica">Helvetica</div>
      <div class="bs-ui-options__item" key="proxima-nova">Proxima Nova</div>
    </div>
  </div>
</div>
`} title="Title & Subtitle" />

      <Demo style={maxHeight} code={`<div style="width: 100%; position: relative; ">
  <div class="bs-ui-options bs-ui-options--small">
    <div class="bs-ui-options__header">
      <div class="bs-ui-options__title">Select Type</div>
      <div class="bs-ui-options__subtitle">You can change anytime!</div>
    </div>
    <div class="bs-ui-options__list">
      <div class="bs-ui-options__item" key="haas-grotesk">Haas Grotesk</div>
      <div class="bs-ui-options__item bs-ui-options__item--selected"  key="helvetica">Helvetica</div>
      <div class="bs-ui-options__item" key="proxima-nova">Proxima Nova</div>
    </div>
  </div>
</div>
`} title="Small" />

      <h2 className="bs-styleguide-page__subtitle">Avatar</h2>
      <Demo style={{height: "220px"}} code={`<div style="width: 100%; position: relative; ">
  <div class="bs-ui-options">
    <div class="bs-ui-options__list">
      <li class="bs-ui-options__item">
        <img class="bs-ui-options__avatar" src="bs-logo.png">
        Backstage 1
      </li>
      <li class="bs-ui-options__item">
        <img class="bs-ui-options__avatar" src="bs-logo.png">
          Backstage 2
      </li>
      <li class="bs-ui-options__item">
        <img class="bs-ui-options__avatar" src="bs-logo.png">
          Backstage 3
      </li>
    </div>
  </div>
</div>
`} title="Default" />

      <Demo style={maxHeight} code={`<div style="width: 100%; position: relative; ">
  <div class="bs-ui-options bs-ui-options--small">
    <div class="bs-ui-options__list">
      <li class="bs-ui-options__item">
        <img class="bs-ui-options__avatar" src="bs-logo.png">
        Backstage 1
      </li>
      <li class="bs-ui-options__item">
        <img class="bs-ui-options__avatar" src="bs-logo.png">
          Backstage 2
      </li>
      <li class="bs-ui-options__item">
        <img class="bs-ui-options__avatar" src="bs-logo.png">
          Backstage 3
      </li>
    </div>
  </div>
</div>
`} title="Small" />

      <h2 className="bs-styleguide-page__subtitle">Icon</h2>
      <Demo style={openedStyle} code={`<div style="width: 100%; position: relative; ">
  <div class="bs-ui-options">
    <div class="bs-ui-options__list">
      <li class="bs-ui-options__item">
        <a><i class="material-icons ic bs-ui-options__icon">delete</i>Delete</a>
      </li>
      <li class="bs-ui-options__item">
        <a><i class="material-icons ic bs-ui-options__icon">mode_edit</i>Edit</a>
      </li>
      <li class="bs-ui-options__item">
        <a><i class="material-icons ic bs-ui-options__icon">add_box</i>Add</a>
      </li>
    </div>
  </div>
</div>
`} title="Default" />

      <Demo style={openedStyle} code={`<div style="width: 100%; position: relative; ">
  <div class="bs-ui-options bs-ui-options--small">
    <div class="bs-ui-options__list">
      <li class="bs-ui-options__item">
        <a><i class="material-icons ic bs-ui-options__icon">delete</i>Delete</a>
      </li>
      <li class="bs-ui-options__item">
        <a><i class="material-icons ic bs-ui-options__icon">mode_edit</i>Edit</a>
      </li>
      <li class="bs-ui-options__item">
        <a><i class="material-icons ic bs-ui-options__icon">add_box</i>Add</a>
      </li>
    </div>
  </div>
</div>
`} title="Small" />

    </Page>
  );
};
