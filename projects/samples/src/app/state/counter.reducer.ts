import { createReducer, on, Action } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, () => initialState)
);

export function counterReducer(state: any, action: Action) {
  return _counterReducer(state, action);
}
