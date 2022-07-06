import { useState } from 'react';

import { OnChange } from '@/interfaces/input';

export default (defaultValue = ''): [string, OnChange] => {
  const [value, setValue] = useState<string>(defaultValue);

  const onChange: OnChange = (data) => {
    const valueInput = typeof data === 'string' ? data : data.target.value;

    setValue(valueInput);
  };

  return [value, onChange];
};
