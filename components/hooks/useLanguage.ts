import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectLn } from '@/store/selectors/language';
import Authorization from '@/utils/language/Authorization';
import Common from '@/utils/language/Common';
import Home from '@/utils/language/Home';
import Chats from '@/utils/language/Chats';
import Payments from '@/utils/language/Payments';
import Settings from '@/utils/language/Settings';
import Upload from '@/utils/language/Upload';
import Invoice from '@/utils/language/Invoice';
import Orders from '@/utils/language/Orders';
import Items from '@/utils/language/Items';
import Toast from '@/utils/language/Toast';
import Error from '@/utils/language/Error';

export default () => {
  const ln = useSelector(selectLn);

  const authorization = useMemo(() => new Authorization(ln), [ln]);
  const common = useMemo(() => new Common(ln), [ln]);
  const home = useMemo(() => new Home(ln), [ln]);
  const chats = useMemo(() => new Chats(ln), [ln]);
  const payments = useMemo(() => new Payments(ln), [ln]);
  const settings = useMemo(() => new Settings(ln), [ln]);
  const upload = useMemo(() => new Upload(ln), [ln]);
  const invoice = useMemo(() => new Invoice(ln), [ln]);
  const orders = useMemo(() => new Orders(ln), [ln]);
  const items = useMemo(() => new Items(ln), [ln]);
  const toast = useMemo(() => new Toast(ln), [ln]);
  const error = useMemo(() => new Error(ln), [ln]);

  return [{
    authorization,
    common,
    home,
    chats,
    payments,
    settings,
    upload,
    invoice,
    orders,
    items,
    toast,
    error,
  }];
};
