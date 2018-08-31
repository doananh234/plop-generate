import antdVi from 'antd/lib/locale-provider/vi_VN';
import appLocaleData from 'react-intl/locale-data/vi';
import viMessages from '../locales/vi_VN.json';

const ViLang = {
  messages: {
    ...viMessages,
  },
  antd: antdVi,
  locale: 'vi-VN',
  data: appLocaleData,
};
export default ViLang;
