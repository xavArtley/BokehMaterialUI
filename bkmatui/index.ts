import * as BKMATUI from "./models"
export {BKMATUI}

import {register_models} from "@bokehjs/base"
register_models(BKMATUI as any)
