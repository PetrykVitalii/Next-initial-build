import { useLayoutEffect, useRef } from 'react';

export const RESIZE_TRIGGER_TIMER = 250;

export default function useResize(
  callback: (screenWidth: number, screenHeight: number) => void,
  dependencies?: any[],
  timer: number = RESIZE_TRIGGER_TIMER,
) {
  const timeout = useRef<number | undefined>(undefined);

  useLayoutEffect(() => {
    function onResize() {
      window.clearTimeout(timeout.current);
      timeout.current = window.setTimeout(() => {
        const { clientWidth, clientHeight } = document.documentElement;

        callback?.(clientWidth, clientHeight);
      }, timer);
    }

    window.addEventListener('resize', onResize);

    onResize();

    return () => window.removeEventListener('resize', onResize);
  }, dependencies);
}
