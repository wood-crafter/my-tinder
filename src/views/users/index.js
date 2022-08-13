import { NavBar } from '../../components'
import './users.css'

export const Users = () => {
  const dummyUserInfo = {
    name: 'dummyName',
    contact: 'dummyContact',
    info: 'dummyInfo',
    bio: 'dummyBio',
    type: 'dummyType'
  }

  // const dummyAlbum

  return (
    <div className='user'>
      <NavBar />
      <div className='name'>{dummyUserInfo.name}</div>
      <div className='contact'>{dummyUserInfo.contact}</div>
      <div className='info'>{dummyUserInfo.info}</div>
      <div className='bio'>{dummyUserInfo.bio}</div>
      <div className='type'>{dummyUserInfo.type}</div>

    </div>
  )
}
