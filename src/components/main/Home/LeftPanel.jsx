import React, { useState } from 'react'
import classes from './LeftPanel.module.scss'
import Shortcuts from './LeftPanel/Shortcuts'
const LeftPanel = ({ className }) => {
  const [firstShorcutsList, setFirstShortcutsList] = useState([
    {
      id: Math.random().toString(),
      text: 'Jeyson J. Vásquez',
      icon: {
        url: 'https://z-p3-scontent.flim3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=dbb9e7&_nc_eui2=AeFusxuJl2N-vP7CmUicCzr9so2H55p0AlGyjYfnmnQCUb21qv30-a5ikDu_IxknyjuRs9r-KpjJZ4HkuopH1qJg&_nc_ohc=tMdrVb3iZvcAX9RDrLS&_nc_ht=z-p3-scontent.flim3-2.fna&oh=00_AT_HJWgkUOu_HRQLlp6q_ZmGfJDSC_tNCy4VIkqvfjmtjg&oe=62BAA5F8',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'Friends',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png?_nc_eui2=AeGtIHLO9ixYByStfMi1FPWQKQirPSlkUbYpCKs9KWRRthY77nGCfierTHpAEis6Qc9SbQoyqdsMHxIDdYdi8AXt',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'Groups',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png?_nc_eui2=AeGNOYThfgG1x_78nR6qt4Out3EwmBPrOX63cTCYE-s5fl6M419g9e60zGC8gFy2wUyWJrLQtb9Gt0fLWJ9n4sr8',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'Marketplace',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png?_nc_eui2=AeFtrd8uz89_-O2_0tIUb9qaRnQ_LTiVqatGdD8tOJWpq6whkCgkhJppDncoHKJQeuSM1X1Ot8y7m3sCCn1F9Srk',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'Watch',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png?_nc_eui2=AeEguX9bFAnVBwPKB6NCDXjSWNsrpn9H8ApY2yumf0fwCgPB0VeSUVcHM5DLsTOkU-f3uVNwDczVerNYEw9mszcT',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'Memories',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png?_nc_eui2=AeFq3j4bC9loqN_Ydcuc4mEcyBTv1hZFuNvIFO_WFkW422_yuqzQX762Vj_6Hjdlw1e8WZVqBPhzfJNyvFI-daSw',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'Ad Center',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yD/r/CwKNCefmHON.png?_nc_eui2=AeGrxMfDC470RmqQ3w1utFHCBI5w40VUHwsEjnDjRVQfC36xByRXN4BHC8LMPCV_TCRcDMxasQnYkFcBndtUMVyZ',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'Ads Manager',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/y9/r/DHBHg9MEeSC.png?_nc_eui2=AeHeYVPV8Ijbx5wwzjGs407X9T8gQ0atF1r1PyBDRq0XWi7O60ETRvEObvFE_i485w2zBTHR11gEYz3E9CUrQ71O',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'Blood Donations',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/y_/r/bRC_jZ58syg.png?_nc_eui2=AeGh-JZSGeDzSV0wTen6mJ_HL0rzf7utK98vSvN_u60r38W9FuYSjU6yW9ObVd3_vVt8WVDdv_KvCgaD6ZWUF6R3',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'Climate Science Center',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/y3/r/Jr0q8qKF2-Y.png?_nc_eui2=AeEywkxwWI59qg1XN8mM8GIIpCOYV6-aFMSkI5hXr5oUxM9x49qzBoW300YcGIZfF_n9FcXrHc-wD7HWo9x7HdzZ',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'Community Help',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yN/r/9s7nhm949yb.png?_nc_eui2=AeGTFhWjYK1y8_s2OpFIeOrwWTCnOYrV0HZZMKc5itXQdgSw_371bDpmSDbBzrnqcMuWi7TfTFHHSfk377vrZaMN',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'COVID-19 Information Center',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yx/r/5rR6LRpNc5u.png?_nc_eui2=AeFgZMmI049ulQXMQuSCz8jCVmdGn0QKo_xWZ0afRAqj_JKuQ1uhomYM7fSaBEbey5bbgubQic12CYHPm3ab1rLp',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'Emotional Health',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/y5/r/vxMUnHhu6Do.png?_nc_eui2=AeHL34-zBNYbWMc6IucQP4nvf_UDJgH13p9_9QMmAfXen7ByxtB7g7PRO4Uhgj11R0XB51AhM0MhgTV_R78eine5',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'Events',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yu/r/eXC82ZeepQ7.png?_nc_eui2=AeH4lMpFg8lZteFOmjw-R6XnGZmqlvUvCSMZmaqW9S8JI2tmbqGTHiwPas8N_nWrBhZco8P8gpX2-lR4AQsx_dW3',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'Facebook Pay',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yv/r/GJ4EaivDaSj.png?_nc_eui2=AeGoEcpLCfI2vZCyINy5W45nxUxUu_WRVarFTFS79ZFVql8YWH8HarrRTC5pHbt8EoiqyczE10ALlpGkwUr39D3y',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'Favorites',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yK/r/mAnT0r8GSOm.png?_nc_eui2=AeGrIMmIsudtQHHnfftZXDsSN77WNmWWG_M3vtY2ZZYb8wbvt3n0vmlD42l21tGW1l-ljXv6srHpsmfnF3NCETow',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'Fundraisers',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yj/r/n2vd2VduYc1.png?_nc_eui2=AeGd2NQmB2ZDIS6jKzJpz7OtybMR4W_L9bvJsxHhb8v1uxNvBECGIuG9OgLeTZdYmyc5N7nmJo0U_-yG9oeyvgMu',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'Gaming Video',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yk/r/JN4tUY_MDMK.png?_nc_eui2=AeGByHQ9q7UoKUNiVcIQj6N-93m7eJ4lu0_3ebt4niW7T8UNACxoza6qlPQef10vnbiZsNCZs5-m_dijNYUYS6AV',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'Live videos',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yu/r/AisrwUSvQf8.png?_nc_eui2=AeFpgnaeWd2L81VXiGYe8EymJDnsy6cL0mYkOezLpwvSZgbuxZDBTyFEVFHXrI5SIvoNLQ2t0kJK74mQVzVvfS5r',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'Messenger',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/y5/r/4Y9Xi2D3hJv.png?_nc_eui2=AeG-Hk0mqa-oYBUYtdRCg6kHR7YeXzaCFdBHth5fNoIV0Ik4ItGK9V6gpJoD6eZQKwMZjansjT5U_z7mECtUXCY6',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'Messenger Kids',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yu/r/1Xvrz50fHMF.png?_nc_eui2=AeH70CzmDPxwpEkyE_YaaqFyt8STagRD5163xJNqBEPnXrKAYmb12QiGTGNTd6c2zUkDmGG8bF08rbFLctbkxH42',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'Most Recent',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yc/r/hTN47HVa4oS.png?_nc_eui2=AeHl3bn-FhJ0KWIfYxTF_JZ2scDAjwg_IHKxwMCPCD8gchkSccUPeA8ZUl4Rvz2VxSTaBRLkTslqLGBFup91ryYW',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'Pages',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png?_nc_eui2=AeG4m8HgOLlDVT1kgNQOt2mt_YLVddCb0Nr9gtV10JvQ2lISof-fIoc8MDxis60EPyubKjpz_FqRwSYPU1oWVndp',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'Play Games',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yt/r/PObY9OA5lvJ.png?_nc_eui2=AeGX8vs4Hz8kpzDHb9y5Sqgn-JjxEQL4JjT4mPERAvgmNGuHzeIxr-XJtZfjdYlg6S0zoS3V8AmcQevY5elNXvrR',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'Recent ad activity',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yj/r/8OasGoQgQgF.png?_nc_eui2=AeGdvFLH2QY7EarB2ytwZUZf5yGP1dqzB_jnIY_V2rMH-PaBQoH05HuPrGtRu6ooLBrsq8HQTblWX8WHA7w3hM0o',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'Saved',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png?_nc_eui2=AeFkCn0pYa6Hdrw625onsm5_7HUdiB5Pt9HsdR2IHk-30RJeRlnd0vMxrxx-ND-QqYOU-ER7e3m6FsmiZFMS-Yz-',
        position: ''
      },
      link: '/profile'
    }
  ])
  const [secondShorcutsList, setSecondShortcutsList] = useState([
    {
      id: Math.random().toString(),
      text: 'BINGO Blitz',
      icon: {
        url: 'https://z-p3-scontent.flim3-2.fna.fbcdn.net/v/t39.2081-6/273691046_5460221850672668_1610498274287815232_n.jpg?stp=c6.6.31.31a_dst-jpg_p36x36&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_eui2=AeFsZJkX3claCHZb8VDbbQJccUTuo4QogudxRO6jhCiC55usdDX25OQhSqJELTpDvyOTL5R4SFnYE2a7DiPLEpdu&_nc_ohc=VBlTQUmYA4cAX_5iWbO&_nc_ht=z-p3-scontent.flim3-2.fna&oh=00_AT95Rr4XDLM0pDHI7N5qWPx5W7PMdFAzA7nm4Dj3I23-jw&oe=629B5D5B',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'Candy Crush Saga',
      icon: {
        url: 'https://z-p3-scontent.flim3-2.fna.fbcdn.net/v/t39.2081-6/22088589_1654976451201719_5191478939503034368_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_eui2=AeHjDfyOhQE_mZhr0r9Yoxuu2pOLRy8vZ07ak4tHLy9nTjVuJz2X_KzPq_XvUnXrsMKj-YVrt9NqImbecOUXuXx7&_nc_ohc=uf2Vdwrg1pgAX9Afg1B&_nc_ht=z-p3-scontent.flim3-2.fna&oh=00_AT-V6rXRotMSNsp3wf23TXeKzLrYBWSiWyBT2uQkm3EdkQ&oe=629C6402',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'Dragon City',
      icon: {
        url: 'https://z-p3-scontent.flim3-2.fna.fbcdn.net/v/t39.2081-6/28129135_1686685264729832_3956709029115330560_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_eui2=AeElwkNkJUL1DrTRc-ohAfhvoEjsVUqi63agSOxVSqLrdthv8taMQ2hizxYherxbw-VQBsrVkqIne-P-KjxBqw-V&_nc_ohc=JY4wb16Q4KkAX9Zzrbx&_nc_oc=AQlyoXD88zPscy7-YfX_EPrBzDF8sbmn5iueTtACw69j39gNo7uMmRod5idFt1kdERs&_nc_ht=z-p3-scontent.flim3-2.fna&oh=00_AT9bY5A1Q7eRaxoUa8NGKFFmOKFzWuJfsTy0xlopU1Itig&oe=629C16E9',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'FR9 Ajedrez',
      icon: {
        url: 'https://z-p3-scontent.flim3-3.fna.fbcdn.net/v/t39.2081-6/851559_366790313427577_1698768571_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=101&ccb=1-7&_nc_sid=eaa83b&_nc_eui2=AeExKvWp9BxYbIe2G7eB4ZaNYeeCYiu_aJRh54JiK79olGjc-1R54lIaloCSLGvlq8cU0rkn1Ey6sfmHVO-hVvHD&_nc_ohc=Xqj72K_Cm-MAX-o2uZg&tn=9QQlCExNH0zAr-fq&_nc_ht=z-p3-scontent.flim3-3.fna&oh=00_AT9D8WReB3TeffuEH9p0kWX81hh0TeUnX2oHTpeA2vV6rA&oe=629BDA4B',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'Guitar Flash',
      icon: {
        url: 'https://z-p3-scontent.flim3-2.fna.fbcdn.net/v/t39.2081-6/10541005_741873682535184_1420249125_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_eui2=AeGmNLemAU4BWD9-FvFPBz6cvWVQcql1oXy9ZVByqXWhfBZGl1N5D6Ak5fkDp9wduvFnyNfAQ_uSgkOrmQXc9r9g&_nc_ohc=cQKfs9PDAusAX_deiQg&_nc_ht=z-p3-scontent.flim3-2.fna&oh=00_AT_YJ9G_F4QjYAZlTdZUitw5JBNLLyAfwjx_E6c6i4bS2Q&oe=629C7C06',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'Huuuge Casino',
      icon: {
        url: 'https://z-p3-scontent.flim3-2.fna.fbcdn.net/v/t39.2081-6/100562749_3226748970884367_3572997028847812608_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_eui2=AeH--eTwvins4J9waaGqHGZ6EGv9ve3SWAYQa_297dJYBkrwTowjIupzCn4OHc343WhV_UrYz-YkBYcjwFnGq4iK&_nc_ohc=-mFcAbiT6ncAX92aafo&_nc_oc=AQkG_tOWZNQrOMdAgCee68dbkpBuQc_TUg9Kw-tAaXMfuSadtOq_KKDv5388PA-MMEE&tn=9QQlCExNH0zAr-fq&_nc_ht=z-p3-scontent.flim3-2.fna&oh=00_AT8Jsm69WwdnZSPXQyN7rtUYGuw-j1TyD_6CkVRD0TKQLQ&oe=629C3A64',
        position: ''
      },
      link: '/profile'
    },
    {
      id: Math.random().toString(),
      text: 'Smeet',
      icon: {
        url: 'https://z-p3-scontent.flim3-2.fna.fbcdn.net/v/t39.2081-6/851572_10152161239767808_1870109018_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=102&ccb=1-7&_nc_sid=eaa83b&_nc_eui2=AeGXowLz1prA36vype-ioIsg7f-A4zdZyxbt_4DjN1nLFo421Ca59bl_mFomS7NEybNs7FcaUeWkL5qsKaSu9WIW&_nc_ohc=ShwrewD69MEAX8-TcPe&_nc_ht=z-p3-scontent.flim3-2.fna&oh=00_AT-5_hNefQGw1u2uy0LvWQTxHeTPR8WtjGq2nRmONv2dhw&oe=629ADC9A',
        position: ''
      },
      link: '/profile'
    }
  ])
  return (
    <aside className={`${classes['left-panel']} ${className}`}>
      <Shortcuts shortcutsList={firstShorcutsList} />
      <div className={classes['left-panel__divide']}>
        <div></div>
      </div>
      <Shortcuts second={true} shortcutsList={secondShorcutsList} />
      <footer></footer>
    </aside>
  )
}
export default LeftPanel
