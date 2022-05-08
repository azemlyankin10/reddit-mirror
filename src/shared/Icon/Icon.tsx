import React, { FC } from 'react'
import { hot } from 'react-hot-loader/root'
import { EIcons, icon } from './icons/_index'

export { EIcons } from './icons/_index'

interface IconProps {
  name: EIcons
  size?: number
  viewBox?: string
  className?: string
}

const IconComponent: FC<IconProps> = ({ name, size = 14, viewBox = '0 0 16 16', className }) => {
  return (
    <svg className={className} width={size} height={size} viewBox={viewBox} fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      { icon(name) }
    </svg>
  )
}

export const Icon = hot(IconComponent)
