import * as React from 'react'

import { useNoScroll, computeClass } from '../utils'
import './styles.scss'

interface NavLinksProps {
  customClassName: string
  isOpen: boolean
  shouldAnimate: boolean
  topLinks?: JSX.Element
  leftLinks?: JSX.Element
  rightLinks?: JSX.Element
}

const NavLinks: React.FC<NavLinksProps> = ({
  customClassName,
  isOpen,
  shouldAnimate,
  topLinks,
  leftLinks,
  rightLinks
}) => {
  const otherClassNames = computeClass(
    shouldAnimate,
    isOpen,
    'animate show',
    'animate',
    'nav-links--show'
  )

  useNoScroll(isOpen)

  return (
    <div className={`nav-links ${otherClassNames} ${customClassName}`.trim()}>
      <span className="nav-links__group left"></span>
      <span className="nav-links__group right">{topLinks}</span>
      <span className="nav-links__group left">{leftLinks}</span>
      <span className="nav-links__group right">{rightLinks}</span>
    </div>
  )
}

export default NavLinks
