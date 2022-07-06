import AbstractLanguage from '@/utils/language/AbstractLanguage';

export default class Common extends AbstractLanguage {
  get home() {
    return this.getText({
      EN: 'Home',
      SG: 'Home',
      ID: 'Home',
      TH: 'หน้าแรก',
      ZH: '主頁',
      VN: 'Trang chủ',
    });
  }
}
