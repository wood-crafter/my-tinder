import { NavBar } from '../../components'
import { useAuth } from '../../providers/useAuth'

export const Home = () => {
  const { user } = useAuth()

  return (
    <div>
      <NavBar />
      <h4>
        {`Hello, ${user?.username ?? 'guess'}...!`}
      </h4>
    </div>
  )
}
