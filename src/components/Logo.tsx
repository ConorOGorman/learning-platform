import React from 'react'
import logoImg from '../Images/Logo.png'

export default function Logo(): JSX.Element {
  return (
    <img
      src={logoImg}
      alt="PartsHub logo"
      className="ph-logo-img"
    />
  )
}
