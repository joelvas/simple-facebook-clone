import React, { useRef } from 'react'
import classes from './CommentsEntry.module.scss'
const CommentsEntry = () => {
  const textareaRef = useRef(null)
  const onInputTextareaHandler = () => {
    textareaRef.current.style.height = 'auto'
    textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
  }
  const icons = [
    {
      name: 'Avatar',
      url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yN/r/wC-PkLKHXz3.png?_nc_eui2=AeG1YibVBEEb0XRzX8ajEDSa9Uqap1WKAxr1SpqnVYoDGpu76IFC9nyddemowvlGq0s8mmbp0YXgdiXIdazRCsB4',
      position: '0px -360px'
    },
    {
      name: 'Emoji',
      url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yN/r/wC-PkLKHXz3.png?_nc_eui2=AeG1YibVBEEb0XRzX8ajEDSa9Uqap1WKAxr1SpqnVYoDGpu76IFC9nyddemowvlGq0s8mmbp0YXgdiXIdazRCsB4',
      position: '0px -496px'
    },
    {
      name: 'Gif',
      url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yN/r/wC-PkLKHXz3.png?_nc_eui2=AeG1YibVBEEb0XRzX8ajEDSa9Uqap1WKAxr1SpqnVYoDGpu76IFC9nyddemowvlGq0s8mmbp0YXgdiXIdazRCsB4',
      position: '0px -513px'
    },
    {
      name: 'Sticker',
      url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yN/r/wC-PkLKHXz3.png?_nc_eui2=AeG1YibVBEEb0XRzX8ajEDSa9Uqap1WKAxr1SpqnVYoDGpu76IFC9nyddemowvlGq0s8mmbp0YXgdiXIdazRCsB4',
      position: '0px -615px'
    }
  ]
  return (
    <div className={classes['comments-entry']}>
      <img
        className={classes['comments-entry__picture']}
        src="https://picsum.photos/40/40"
        width={32}
        alt="user"
      />
      <div className={classes['comments-entry__input']}>
        <textarea
          ref={textareaRef}
          onInput={onInputTextareaHandler}
          placeholder="Write a comment..."
          rows={1}
        ></textarea>
        <div className={classes['comments-entry__input__icons']}>
          {icons.map((icon) => {
            return (
              <div
                key={icon.name}
                style={{
                  backgroundImage: `url('${icon.url}')`,
                  backgroundPosition: icon.position,
                  backgroundSize: 'auto',
                  width: '16px',
                  height: '16px'
                }}
              ></div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default CommentsEntry
