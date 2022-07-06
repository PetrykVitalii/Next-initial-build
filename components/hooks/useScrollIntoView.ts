import React from 'react';

export default (value: any, options: ScrollIntoViewOptions = {}) => {
  const ref = React.useRef<any>();

  React.useEffect(() => {
    if (!value) {
      return;
    }

    ref.current = value;
  }, [value]);

  const handleScrollIntoView = (ifNeeded?: boolean) => {
    const element = ref?.current?.current;

    if (!element) {
      return;
    }

    const { top, bottom } = element.getBoundingClientRect();
    const isVisible = (top >= 0) && (bottom <= window.innerHeight);

    if (!ifNeeded || (ifNeeded && !isVisible)) {
      element.scrollIntoView({ ...options });
    }
  };

  return {
    scrollIntoView: handleScrollIntoView,
  };
};
