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
        <div className='infor' >
          <div className='account-infor'>
            <div className='avatar-container'>
              <img src='https://avatars.githubusercontent.com/u/59172319?v=4' className='avatar'></img>
            </div>
            <div>Display name</div>
            <div>Bio</div>
          </div>

          <div className='master-infor'>
            <div id='name' >{dummyUserInfo.name}</div>
            <div id='contact' >{dummyUserInfo.contact}</div>
            <div id='info' >{dummyUserInfo.info}</div>
            <div id='bio' >{dummyUserInfo.bio}</div>
            <div id='type' >{dummyUserInfo.type}</div>
          </div>
        </div>
      </div>

    </div>
  )
}
