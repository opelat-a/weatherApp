import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import {rootReducer} from 'store/rootReducer';

export type RootState = ReturnType<typeof rootReducer>;

export const useSelectorTs: TypedUseSelectorHook<RootState> = useReduxSelector;
