import React from 'react';

import { Counter, ICountersTab } from '@/interfaces/firebase';

import useMessenger from '@/components/hooks/useMessenger';
import usePrevious from '@/components/hooks/usePrevious';

export type Listener = ((counter: Counter, prevCount?: number, newCount?: number) => void);

export default (chatFirebaseUid: string) => {
  const messenger = useMessenger();

  const chat = messenger.getSupplierChat(
    `${chatFirebaseUid}`,
  );

  const chatsRef = chat && chat.chats;
  const chatItem = chatsRef && chatsRef[chatFirebaseUid];
  const { counters } = chatItem || {};

  const {
    pendingOrders = 0,
    paymentNeeded = 0,
    overduePayments = 0,
    invoicesNeeded = 0,
  } = (counters as ICountersTab) || {};

  const prevPendingOrders = usePrevious(pendingOrders);
  const prevPaymentNeeded = usePrevious(paymentNeeded);
  const prevOverduePayments = usePrevious(overduePayments);
  const prevInvoicesNeeded = usePrevious(invoicesNeeded);

  const onChangeListener = React.useRef<Listener | null>(null);

  React.useEffect(() => {
    handleOnChangeListener(
      Counter.PendingOrders,
      prevPendingOrders,
      pendingOrders,
    );
  }, [prevPendingOrders, pendingOrders]);

  React.useEffect(() => {
    handleOnChangeListener(
      Counter.PaymentNeeded,
      prevPaymentNeeded,
      paymentNeeded,
    );
  }, [prevPaymentNeeded, paymentNeeded]);

  React.useEffect(() => {
    handleOnChangeListener(
      Counter.OverduePayments,
      prevOverduePayments,
      overduePayments,
    );
  }, [prevOverduePayments, overduePayments]);

  React.useEffect(() => {
    handleOnChangeListener(
      Counter.InvoicesNeeded,
      prevInvoicesNeeded,
      invoicesNeeded,
    );
  }, [prevInvoicesNeeded, invoicesNeeded]);

  const handleOnChangeListener = React.useCallback((
    counter: Counter,
    prevCount: number,
    newCount: number,
  ) => {
    const trigger = onChangeListener && onChangeListener.current;
    if (!trigger || prevCount === undefined || newCount === undefined || prevCount === newCount) {
      return;
    }

    trigger(counter, prevCount, newCount);
  }, []);

  const bindListener = React.useCallback((listener: Listener) => {
    onChangeListener.current = listener;
  }, []);

  return {
    pendingOrders,
    paymentNeeded,
    overduePayments,
    invoicesNeeded,
    bindListener,
  };
};
