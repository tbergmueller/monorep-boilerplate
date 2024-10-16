
// #!/usr/bin/env node

import { innerMostPrint } from '@tbergmueller/core';
import { extendedPrinting } from '@tbergmueller/extension';

export function executeFun() {
  extendedPrinting();
  console.log("Isn't it fun that I can also use innerMost function here?")
  innerMostPrint();
}

executeFun();