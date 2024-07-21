'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from './store'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  return (
    <>
      {/* <Toaster
        position='top-center'
        reverseOrder={false}
        toastOptions={{
          style: {
            zIndex: 20000,
            fontSize: 14
          }
        }}
      /> */}
      <Provider store={storeRef.current}>{children}</Provider>
    </>
  )
}