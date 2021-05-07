/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from 'react'
import classes from './MobileAppBanner.module.css'
import AppLogo from './applogo.png'
import AppInteface from './interface.png'

const MobileAppBanner = () => {

  const [showPhotos, setShowPhotos] = useState(window.innerWidth > 768)

  useEffect(() => {
    const onResize = () => {
      setShowPhotos(window.innerWidth > 768)
    }
    
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={classes.Banner}>
      <div className={classes.BannerInfoBlock}>
        <h2>Скачайте наше приложение</h2>
        <p>
          Приложение cookeat доступно в Google Play Marker и Apple App Store! <br />
          Там доступен расширенный функционал и большее количество рецептов.
        </p>

        <div className={classes.DownloadWrapper}>
          <a href="https://google.com" className={classes.DownloadGoogle} />
          <a href="https://apple.com" className={classes.DownloadApple}  />
        </div>

      </div>
      { showPhotos && (
        <>
          <img className={classes.AppLogo} src={AppLogo} alt="App Logo"/>
          <img className={classes.AppInterface} src={AppInteface} alt="App Interface" /> 
        </>
      ) }
    </div>
  )
}

export default MobileAppBanner  