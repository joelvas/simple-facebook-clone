import React, { useState, useRef, useEffect } from 'react'
import classes from './Options.module.scss'
import OptionsList from './OptionsList'
import OptionContent from './OptionContent'
const Options = () => {
  const [optionsList, setOptionsList] = useState([
    {
      id: 'o1',
      icon: 'optionMenu',
      active: false,
      hidden: ['xs', 'sm', 'md']
    },
    {
      id: 'o2',
      icon: 'optionCreate',
      active: false,
      hidden: ['lg', 'xl']
    },
    {
      id: 'o3',
      icon: 'optionMsg',
      active: false,
      hidden: []
    },
    {
      id: 'o4',
      icon: 'optionNotif',
      active: false,
      hidden: []
    },
    {
      id: 'o5',
      icon: 'optionProfile',
      active: false,
      hidden: []
    }
  ])
  const optionsBarRef = useRef(null)
  const [activeOption, setActiveOption] = useState(optionsList[3].icon)
  const [activeContent, setActiveContent] = useState(false)
  const clickElementHanlder = (icon) => {
    setOptionsList((oldVal) => {
      return oldVal.map((ico) => {
        if (ico.id === icon.id) {
          if (ico.active) {
            ico.active = false
            setActiveContent(false)
          } else {
            ico.active = true
            setActiveOption(icon.icon)
            setActiveContent(true)
          }
        } else {
          ico.active = false
        }
        return ico
      })
    })
  }
  useEffect(() => {
    const clickOutsideHandler = (event) => {
      if (
        optionsBarRef.current &&
        activeContent &&
        !optionsBarRef.current.contains(event.target)
      ) {
        setActiveContent(false)
        setOptionsList((oldVal) => {
          return oldVal.map((ico) => {
            ico.active = false
            return ico
          })
        })
      }
    }
    window.addEventListener('mousedown', clickOutsideHandler)
    return () => {
      window.removeEventListener('mousedown', clickOutsideHandler)
    }
  })
  return (
    <div className={classes.options} ref={optionsBarRef}>
      <OptionsList
        optionsList={optionsList}
        onClickElement={clickElementHanlder}
      />
      <OptionContent contentName={activeOption} activeContent={activeContent} />
    </div>
  )
}
export default Options
