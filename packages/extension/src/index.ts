
// #!/usr/bin/env node

import { corePrint, innerMostPrint } from '@tbergmueller/core';

export function extendedPrinting() {
  corePrint();
  console.log("Hello from extension module");
  innerMostPrint();
}