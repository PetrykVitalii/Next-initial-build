import React from 'react';

import { CompareFunction, OnDirty } from '@/interfaces/dirty';

import useToggle from '@/components/hooks/useToggle';

const defaultCompareFunction = (values: any[], prevValues: any[]) => {
  const valuesLength = values.length;
  let foundDirty = false;

  for (let i = 0; i < valuesLength; i += 1) {
    if (prevValues[i] !== values[i]) {
      foundDirty = true;
      break;
    }
  }

  return foundDirty;
};

export const useHandleDirtyState = () => {
  const [isAnyDirty, setIsAnyDirty] = useToggle(false);

  const handleOnDirty = React.useCallback((isDirty: boolean) => {
    setIsAnyDirty(isDirty);
  }, [setIsAnyDirty]);

  const handleConfirmDirtyModal = React.useCallback(() => {
    setIsAnyDirty(false);
  }, [setIsAnyDirty]);

  return {
    isAnyDirty,
    handleOnDirty,
    handleConfirmDirtyModal,
  };
};

export default function useDirty<T extends any[]>(
  values: T,
  callback?: OnDirty,
  compareFunction: CompareFunction<T> = defaultCompareFunction,
  cleanOnUnMount?: boolean,
) {
  const [isDirty, setIsDirty] = React.useState(false);
  const initalValuesRef = React.useRef(values);

  const updateIsDirty = React.useCallback(() => {
    const isDirtyThen = compareFunction(values, initalValuesRef.current);

    setIsDirty(isDirtyThen);
  }, [values, compareFunction]);

  const setInitialValues = React.useCallback((initalValues: T) => {
    initalValuesRef.current = initalValues;
    updateIsDirty();
  }, [updateIsDirty]);

  const setInitialValueOfIndex = React.useCallback((index: number, value: any) => {
    initalValuesRef.current[index] = value;
    updateIsDirty();
  }, [updateIsDirty]);

  React.useEffect(() => {
    updateIsDirty();
  }, [updateIsDirty]);

  React.useEffect(() => () => {
    if (cleanOnUnMount) {
      setIsDirty(false);
      callback?.(false);
    }
  }, [cleanOnUnMount, callback]);

  React.useEffect(() => {
    callback?.(isDirty);
  }, [isDirty, callback]);

  React.useEffect(() => {
    const handleAlertMessage = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.returnValue = isDirty;
        return isDirty;
      }

      return false;
    };

    window.addEventListener('beforeunload', handleAlertMessage);

    return () => {
      window.removeEventListener('beforeunload', handleAlertMessage);
    };
  }, [isDirty]);

  return {
    isDirty,
    setInitialValues,
    setInitialValueOfIndex,
  };
}
