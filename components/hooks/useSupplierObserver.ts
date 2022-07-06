import React from 'react';

import { RefreshState } from '@/interfaces/firebase';

import useMessenger from '@/components/hooks/useMessenger';
import usePrevious from '@/components/hooks/usePrevious';

export type Listener = ((refreshState: RefreshState) => void);

export default (supplierId: string, notifyOnMount?: boolean) => {
  const messenger = useMessenger();

  const supplier = messenger.getFirebaseSupplier(supplierId);
  const refreshStates = supplier?.refresh_states;

  const { orders } = refreshStates || {};
  const prevOrders = usePrevious(orders);

  const onChangeListener = React.useRef<Listener | null>(null);

  React.useEffect(() => {
    handleOnChangeListener(RefreshState.Orders, prevOrders, orders);
  }, [prevOrders, orders]);

  const handleOnChangeListener = React.useCallback((
    refreshState: RefreshState,
    prevCount: number,
    newCount: number,
  ) => {
    const trigger = onChangeListener && onChangeListener.current;
    if (!trigger
      || (prevCount === undefined && !notifyOnMount)
      || newCount === undefined
      || prevCount === newCount) {
      return;
    }

    trigger(refreshState);
  }, []);

  const bindListener = React.useCallback((listener: Listener) => {
    onChangeListener.current = listener;
  }, []);

  return {
    bindListener,
  };
};
