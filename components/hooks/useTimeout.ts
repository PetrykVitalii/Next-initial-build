import React from 'react';

export default () => {
  const [timeoutId, setTimeoutId] = React.useState<ReturnType<typeof setTimeout> | null>(null);

  const handleTimeout = React.useCallback((callback: () => void, delay: number) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }

    const id = setTimeout(() => {
      callback();

      // remove timeout id once it is completed
      setTimeoutId(null);
    }, delay);

    setTimeoutId(id);
  }, []);

  React.useEffect(() => () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  }, [timeoutId]);

  return handleTimeout;
};
