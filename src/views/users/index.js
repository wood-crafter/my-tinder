import { NavBar } from '../../components'
import './users.css'

export const Users = () => {
  const dummyUserInfo = {
    name: 'dummyName',
    info: {
      email: 'phanhung2702@gmail.com',
      phone: '0366513328',
      address: 'HN',
      facebook: 'dummyFacebookLink',
      instagram: 'dummyInstagramLink'
    },
    bio: 'dummyBio',
    type: 'dummyType',
    interest: 'dummyInterest',
    jobTitle: 'dev',
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
            <div><label htmlFor='user-profile-name' >Name: </label><input id='user-profile-name' placeholder={dummyUserInfo.name}></input></div>
            <div><label htmlFor='user-profile-bio' >Bio: </label><input id='user-profile-bio' placeholder={dummyUserInfo.bio}></input></div>
            <div><label htmlFor='user-profile-interest' >Interest: </label><input id='user-profile-interest' placeholder={dummyUserInfo.interest}></input></div>
            <div><label htmlFor='user-profile-jobTitle' >Job title: </label><input id='user-profile-jobTitle' placeholder={dummyUserInfo.jobTitle}></input></div>
          </div>

          <div className='master-infor'>
            <form className='user-profile-form-update'>
              <div id='info' className='master-detail' ><label htmlFor='user-profile-email' >Email: </label><input id='user-profile-email' placeholder={dummyUserInfo.info.email}></input></div>
              <div id='phone' className='master-detail' ><label htmlFor='user-profile-phone' >Phone: </label><input id='user-profile-phone' placeholder={dummyUserInfo.info.phone}></input></div>
              <div id='address' className='master-detail' ><label htmlFor='user-profile-address' >Address: </label><input id='user-profile-address' placeholder={dummyUserInfo.info.address}></input></div>
              <div id='facebook' className='master-detail' ><label htmlFor='user-profile-facebook' >Facebook: </label><input id='user-profile-facebook' placeholder={dummyUserInfo.info.facebook}></input></div>
              <div id='instagram' className='master-detail' ><label htmlFor='user-profile-instagram' >Instagram: </label><input id='user-profile-instagram' placeholder={dummyUserInfo.info.instagram}></input></div>
              <div id='type' className='master-detail' >{dummyUserInfo.type}</div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}
