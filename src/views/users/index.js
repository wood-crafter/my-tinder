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
    <div className='user' >
      <NavBar />
      <div className='container'>
        <div id='name' >{dummyUserInfo.name}</div>
        <div id='contact' >{dummyUserInfo.contact}</div>
        <div id='info' >{dummyUserInfo.info}</div>
        <div id='bio' >{dummyUserInfo.bio}</div>
        <div id='type' >{dummyUserInfo.type}</div>
      </div>

    </div>
  )
}
