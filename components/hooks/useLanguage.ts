import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectLn } from '@/store/selectors/language';

import Common from '@/utils/language/Common';
import Faq from '@/utils/language/Faq';

export default () => {
  const ln = useSelector(selectLn);

  const commonLn = useMemo(() => new Common(ln), [ln]);
  const faqLn = useMemo(() => new Faq(ln), [ln]);

  return [{
    commonLn,
    faqLn,
  }];
};
