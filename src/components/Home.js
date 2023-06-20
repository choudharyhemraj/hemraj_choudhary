import React, { useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import profileImage from '../profile.png'
import GithubOverview from './github/Github'
import Linkedin from './linkedin/Linkedin'
import Leetcode from './leetcode/Leetcode'
import Medium from './medium/Medium'
import Youtube from './youtube/Youtube'
const useStyles = makeStyles({
  container: {
    paddingTop: '50px',
  },
  name: {
    fontSize: '48px',
    // color: '#bdbdbd',
  },
  profileImage: {
    '& img': {
      height: '150px',
      width: '150px',
      borderRadius: '50%',
      margin: '0px 16px',
    },
  },
  intro: {
    fontSize: '20px',
    // color: '#bdbdbd',
    marginTop: '16px',
  },
  alignCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    width: '100%',
  },
  spacing: {
    height: '100px',
  },
  cards: {
    margin: '0px 5%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    marginRight: '10px',
    marginBottom: '10px',
  },
})
const Home = () => {
  const styles = useStyles()
  const [name, setName] = useState('')
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const Name = 'Hemraj Choudhary'
    if (index <= Name.length) {
      setTimeout(() => {
        const add = index < Name.length ? '.' : ''
        setName(Name.slice(0, index) + add)
        setIndex((prevState) => prevState + 1)
      }, 100)
    }
  }, [index])
  return (
    <Box className={styles.container}>
      <Grid container>
        <Grid item sx={12} sm={3} md={3} lg={3} className={styles.gridItem}>
          <Box className={`${styles.profileImage} ${styles.alignCenter}`}>
            <Box>
              <img src={profileImage} alt='Hemraj Choudhary Profile' />
            </Box>
          </Box>
        </Grid>
        <Grid item sx={12} sm={9} md={9} lg={9}>
          <Box className={styles.name}>{name}</Box>
          <Box className={styles.intro}>
            <Box>
              AI & Software Engineer with 2+ year of extensive experience in NLP
              and Computer Vision.
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box className={styles.spacing}></Box>
      <Box className={styles.cards}>
        <Box className={styles.card}>
          <GithubOverview />
        </Box>
        <Box className={styles.card}>
          <Linkedin />
        </Box>
        <Box className={styles.card}>
          <Leetcode />
        </Box>
        <Box className={styles.card}>
          <Medium />
        </Box>
        <Box className={styles.card}>
          <Youtube />
        </Box>
      </Box>
    </Box>
  )
}

export default Home
