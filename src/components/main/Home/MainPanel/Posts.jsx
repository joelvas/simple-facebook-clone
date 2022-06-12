import React, { useState } from 'react'
import classes from './Posts.module.scss'
import PostItem from './Posts/PostItem'
const Posts = () => {
  const [posts, setPosts] = useState([
    {
      id: Math.random().toString(),
      type: 'group',
      date: '1654271066266',
      privacy: 'group',
      group: {
        name: 'React Js Español Latino',
        picture:
          'https://z-p3-scontent.flim3-3.fna.fbcdn.net/v/t31.18172-8/14543818_1772316193024592_4375563559214378208_o.jpg?stp=c75.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=110&ccb=1-7&_nc_sid=70495d&_nc_eui2=AeGGj9qhRDVYomrCpjhBN5uxaGZD4ZgvRZdoZkPhmC9Fl5YDEjsqMeJRrx3mvcP1bXS6ZvDwI9hx6Kd-cmG9Q-P7&_nc_ohc=TrgPiYJ76O0AX_8qufD&_nc_ht=z-p3-scontent.flim3-3.fna&oh=00_AT-gHYaMITJDRm3uDdDVGwWFhLkfrd3nnlJeoGek4-fO8w&oe=62C17E68'
      },
      owner: {
        name: 'Javier Moreno',
        picture:
          'https://z-p3-scontent.flim3-2.fna.fbcdn.net/v/t39.30808-1/279422041_771886364218950_5427475452460630782_n.jpg?stp=c0.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeF18PXBqvB_e8a0CO5FhXwsRtz2yWW3oQ5G3PbJZbehDhlQOzJrT7n9Id6rvGPUnkQFp6ll9PK4ulGRyiS71Bv2&_nc_ohc=4HQfrBFL2ewAX_tNVpY&_nc_ht=z-p3-scontent.flim3-2.fna&oh=00_AT_dbLYDqfSCz1R6_aRgu8zAszbT025aQJZu3AvUISYLSg&oe=629F1443'
      },
      page: {
        name: '',
        picture: '',
        verified: false
      },
      content: {
        text: 'En React, ¿Como desactivarían un botón después de dos clicks?',
        multimedia: [
          {
            type: 'image',
            url: ''
          }
        ]
      },
      reactions: {
        like: [
          {
            id: Math.random().toString(),
            user: {
              id: Math.random().toString(),
              name: 'Kevin Portillo'
            },
            date: '1654271066266'
          },
          {
            id: Math.random().toString(),
            user: {
              id: Math.random().toString(),
              name: 'Kevin Portillo'
            },
            date: '1654271066266'
          }
        ],
        love: [
          {
            id: Math.random().toString(),
            user: {
              id: Math.random().toString(),
              name: 'Kevin Portillo'
            },
            date: '1654271066266'
          }
        ],
        care: [
          {
            id: Math.random().toString(),
            user: {
              id: Math.random().toString(),
              name: 'Kevin Portillo'
            },
            date: '1654271066266'
          }
        ],
        haha: [],
        sad: [],
        angry: []
      },
      comments: [
        {
          id: Math.random().toString(),
          user: {
            id: Math.random().toString(),
            name: 'Kevin Portillo',
            picture: ''
          },
          date: '1654271066266',
          comment: '',
          reactions: {},
          replies: []
        }
      ],
      shares: [
        {
          id: Math.random().toString(),
          user: {
            id: Math.random().toString(),
            name: 'Kevin Portillo'
          },
          date: '1654271066266'
        }
      ]
    }
  ])
  return (
    <div className={classes.posts}>
      {posts.map((post) => {
        return <PostItem key={post.id} post={post} />
      })}
    </div>
  )
}
export default Posts
