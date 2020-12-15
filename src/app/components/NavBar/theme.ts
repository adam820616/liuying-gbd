import * as React from 'react'

export interface ThemeProps {
  backgroundColor?: string
  mainColor?: string
  menuBgColor?: string
  height?: string
  sliderWidth?: string
}

export const themeMapping: ThemeProps = {
  mainColor: '--main-color',
  backgroundColor: '--background-color',
  menuBgColor: '--menu-bg-color',
  height: '--height',
  sliderWidth: '--slider-width'
}

export const defaultTheme: ThemeProps = {
  mainColor: '#D3D3D3',
  backgroundColor: '#000000',
  menuBgColor: '#000000',
  height: '82px',
  sliderWidth: '100%'
}

export const useTheme = (
  navRef: React.RefObject<HTMLElement>,
  theme: ThemeProps
) =>
  React.useEffect(() => {
    const nav = navRef.current

    if (nav) {
      Object.keys(theme).forEach(prop => {
        nav.style.setProperty(themeMapping[prop], theme[prop])
      })
    }
  }, [navRef, theme])
