import React from 'react';
import IgIcon from '../assets/images/ig_icon.svg'

const buttonTypes = {
  instagram: {
    icon: IgIcon,
    link: 'https://www.instagram.com/casa.mucha/',
    label: 'open instagram'
  }
}

const IconButton = ({type}) => {

  const {icon, link, label} = buttonTypes[type]

  return(
    <a aria-label={label} href={link} target="_blank" rel="noreferrer">
      <img
        className="hover:opacity-60" 
        src={icon}
        alt={label}
      />
    </a>
  )
}

export default IconButton;