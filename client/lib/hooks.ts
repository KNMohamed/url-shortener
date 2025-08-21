import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import type { AppStore, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppStore> = useSelector