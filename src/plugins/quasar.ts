import { App } from 'vue';
import { Notify, Loading, Quasar } from 'quasar';
import 'quasar/src/css/index.sass';
import 'quasar/src/css/flex-addon.sass';

import { palette } from '../constants';

export default {
  install: (app: App<Element>) => {
    app.use(Quasar, {
      config: { brand: palette },
      cssAddon: true,
      plugins: { Notify, Loading },
    });
  },
};
