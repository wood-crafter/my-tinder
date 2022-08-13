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
        <div id='name' className='div-infor' >{dummyUserInfo.name}</div>
        <div id='contact' className='div-infor' >{dummyUserInfo.contact}</div>
        <div id='info' className='div-infor' >{dummyUserInfo.info}</div>
        <div id='bio' className='div-infor' >{dummyUserInfo.bio}</div>
        <div id='type' className='div-infor' >{dummyUserInfo.type}</div>
      </div>

    </div>
  )
}
