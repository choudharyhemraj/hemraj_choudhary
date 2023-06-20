import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Home from './components/Home'
const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#444444',
    height: '100vh',
    width: '100%',
    boxSizing: 'border-box',
    padding: '0px 30px',
    overflow: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none', // Hide the scroll bar for WebKit browsers (Chrome, Safari, etc.)
    },
    color: 'white',
  },
})
function App() {
  const styles = useStyles()
  return (
    <Box className={styles.container}>
      <Home />
    </Box>
  )
}

export default App
