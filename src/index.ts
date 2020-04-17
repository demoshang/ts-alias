import 'module-alias/register';

import { getDeepValue } from '@deep/deep';

const asdf = 1;
console.info(asdf);

const v = getDeepValue();
console.info(v);
