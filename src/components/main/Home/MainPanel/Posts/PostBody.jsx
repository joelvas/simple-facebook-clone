import React from 'react'
import classes from './PostBody.module.scss'
const PostBody = () => {
  return (
    <div className={classes['post-body']}>
      <div className={classes['post-body__text']}>
        Los fertilizantes están costando S/ 360 y pueden llegar a S/ 500, y ya
        no pueden comprarlos , demandaron los agricultores en el distrito del
        Santa. Contenido de lectura gratuita. En estas épocas es importante
        estar bien informado, suscríbete en http://bit.ly/3pONgMs y ten acceso a
        los mejores contenidos.
      </div>
      <div className={classes['post-body__multimedia']}>
        <img
          className={classes['post-body__multimedia__picture']}
          src="https://z-p3-external.flim4-3.fna.fbcdn.net/safe_image.php?w=500&h=261&url=https%3A%2F%2Fbuffer-media-uploads.s3.amazonaws.com%2F62a1ba57d6b4320e1854f4d4%2F96aeab2899566e811eaf0ca24683cd99af2190a3_3e8fb5e465c92317bc6a0ad1ea75f364988839c5_facebook&cfs=1&ext=jpg&_nc_eui2=AeFVlntuFs8YMahT7rcZzMW0glyFy4HhlfaCXIXLgeGV9iTgYvDf4l-wf7f76-cwsewD5siIbceURd4FCA9B3m1G&utld=amazonaws.com&_nc_oe=70436&_nc_sid=505865&_nc_o2e=1&ccb=3-6&_nc_hash=AQEtRavSjiSU9b1n"
        />
        {/* <video
          controls
          className={classes['post-body__multimedia__video']}
          src="public/videos/facebook_video.mp4"
        >
          Lo sentimos. Este vídeo no puede ser reproducido en tu navegador.
          <br></br>
        </video> */}
      </div>
    </div>
  )
}
export default PostBody
