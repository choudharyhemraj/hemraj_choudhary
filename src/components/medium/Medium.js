import React from 'react'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import mediumLogo from '../../medium.jpeg'
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
    // color: '#bdbdbd',
    width: '225px',
  },
  image: {
    '& img': {
      height: '50px',
      width: '50px',
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
const Medium = () => {
  const styles = useStyles()
  const containerClick = () => {
    window.open('https://medium.com/@hemraj-choudhary')
  }
  return (
    <Box className={styles.container} onClick={containerClick}>
      <Box className={styles.image}>
        <img
          src={mediumLogo}
          alt='hemraj choudhary https://medium.com/@hemraj-choudhary'
        ></img>
      </Box>
      <Box className={styles.userName}>
        <Box>Medium</Box>
        <Box>4 Articles</Box>
      </Box>
    </Box>
  )
}

export default Medium
