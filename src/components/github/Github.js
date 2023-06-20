import React from 'react'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import githubLogo from '../../github.png'
const useStyles = makeStyles({
  container: {
    borderRadius: '5px',
    border: '1px solid #222222',
    padding: '5px 10px',
    '&:hover': {
      // border: '1px dotted #222222',
      boxShadow: '3px 3px 4px rgba(0, 0, 0, 0.2)',
    },
    display: 'flex',
    // justifyContent: 'space-between',
    cursor: 'pointer',
    width: '225px',
  },
  image: {
    '& img': {
      height: '50px',
      borderRadius: '5px',
    },
  },
  userName: {
    marginLeft: '10px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: '20px',
  },
})
const Github = () => {
  const styles = useStyles()
  const containerClick = () => {
    window.open('https://github.com/hemrajat')
  }
  return (
    <Box className={styles.container} onClick={containerClick}>
      <Box className={styles.image}>
        <img src={githubLogo} alt='hemraj choudhary hemrajat github'></img>
      </Box>
      <Box className={styles.userName}>
        <Box>Github</Box>
        <Box>hemrajat</Box>
      </Box>
    </Box>
  )
}

export default Github
