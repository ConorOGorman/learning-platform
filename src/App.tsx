import React from 'react'
import LandingPagePartsHub from './pages/LandingPagePartsHub'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

export default function App(): JSX.Element {
  return (
    <>
      <LandingPagePartsHub />
      <Analytics />
      <SpeedInsights />
    </>
  )
}
