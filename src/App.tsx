import React from 'react'
import LandingPagePartsHub from './pages/LandingPagePartsHub'
import { SpeedInsights } from '@vercel/speed-insights/react'

export default function App(): JSX.Element {
  return (
    <>
      <LandingPagePartsHub />
      <SpeedInsights />
    </>
  )
}
