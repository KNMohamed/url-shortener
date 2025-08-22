import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import type { AppStore, AppDispatch } from './store'
import type { RootState } from './features/types'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector