import React from 'react'
import ReactDOM from 'react-dom'
import { Button as MaterialButton } from '@material-ui/core'
import * as p from "@bokehjs/core/properties"

import { Button, ButtonView } from "@bokehjs/models/widgets/button"


function App() {
  return (
    <MaterialButton variant="contained" color="primary">
      Hello World
    </MaterialButton>
  );
}

export class BkMaterialButtonView extends ButtonView {
  model: BkMaterialButton


  render(): void {
    super.render()
    ReactDOM.render(<App />, this.el);
  }
}


export namespace BkMaterialButton {
  export type Attrs = p.AttrsOf<Props>

  export type Props = Button.Props & {}
}

export interface BkMaterialButton extends BkMaterialButton.Attrs { }

export class BkMaterialButton extends Button {
  properties: BkMaterialButton.Props
  __view_type__: BkMaterialButtonView

  static __module__ = "bkmatui.models.material_button"

  constructor(attrs?: Partial<BkMaterialButton.Attrs>) {
    super(attrs)
  }

  static init_BkMaterialButton(): void {
    this.prototype.default_view = BkMaterialButtonView
  }
}

