// External
import type { AppProps } from 'next/app'

// Internal
import '@/core-ui/styles/Global.styles.scss'
import '@/core-ui/styles/Private-layout.scss'
import '@/core-ui/styles/Guest-layout.scss'
import { LayoutController } from '@/core-ui/'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutController>
      <Component {...pageProps} />
    </LayoutController>
  )
}
