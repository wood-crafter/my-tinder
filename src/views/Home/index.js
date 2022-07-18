import { NavBar } from '../../components'
import { useAuth } from '../../providers/useAuth'
import './Home.css'

export const Home = () => {
  const { user } = useAuth()

  return (
    <div className='home'>
      <NavBar />
      <div className='main-pic-div'>
        <img className='main-pic' src="demo-main-pic.jpg" alt="red panda" />
      </div>
    </div>
  )
}
