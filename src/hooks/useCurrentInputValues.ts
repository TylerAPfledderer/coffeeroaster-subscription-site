/**
 * Build a hook that uses the useLocalStorage hook call from the SubscribeForm component line 88
 * Returns the current input values from the local storage
 * Returns the setState function
 * Return a function to reset state back to the initial values
 */

import { Dispatch, SetStateAction } from 'react';
import useLocalStorage from './useLocalStorage';

type SetValue<T> = Dispatch<SetStateAction<T>>;

function useCurrentInputValues<T>(keyName: string, initialValue: T): [T, SetValue<T>, () => void] {
  const [inputValues, setInputValues] = useLocalStorage(keyName, initialValue);
  const resetInputValues = () => setInputValues(initialValue);
  return [inputValues, setInputValues, resetInputValues];
}

export default useCurrentInputValues;
