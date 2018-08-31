import { language } from '../../../config';

import englishLang from '../../../assets/images/flag/uk.svg';
import chineseLang from '../../../assets/images/flag/china.svg';

const config = {
  defaultLanguage: language,
  options: [
    {
      languageId: 'english',
      locale: 'en',
      text: 'English',
      icon: englishLang,
    },
    {
      languageId: 'vietnamese',
      locale: 'vi',
      text: 'Vietnam',
      icon: chineseLang,
    },
  ],
};

export function getCurrentLanguage(lang) {
  let selecetedLanguage = config.options[0];
  config.options.forEach(l => {
    if (l.languageId === lang) {
      selecetedLanguage = l;
    }
  });
  return selecetedLanguage;
}
export default config;
