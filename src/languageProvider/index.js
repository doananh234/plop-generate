import { addLocaleData } from 'react-intl';
import Enlang from './entries/en-US';
import Vilang from './entries/vi-VN';

const AppLocale = {
  en: Enlang,
  vi: Vilang,
};
addLocaleData(AppLocale.en.data);
addLocaleData(AppLocale.vi.data);

export default AppLocale;
