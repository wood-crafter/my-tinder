import { useState } from 'react'
import { NavBar } from '../../components'
import './users.css'

export const Users = () => {
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')
  const [interest, setInterest] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [facebook, setFacebook] = useState('')
  const [instagram, setInstagram] = useState('')

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

  const handleUpdateMasterInfo = (event) => {
    event.preventDefault();
    console.info(email)
  }

  return (
    <div className='user' >
      <NavBar />
      <div className='container'>
        <div className='infor' >
          <div className='account-infor'>
            <div className='avatar-container'>
              <img src='https://avatars.githubusercontent.com/u/59172319?v=4' className='avatar'></img>
            </div>
            <div><label htmlFor='user-profile-name' >Name: </label><input id='user-profile-name' placeholder={dummyUserInfo.name} value={name} onChange={e => setName(e.target.value)} ></input></div>
            <div><label htmlFor='user-profile-bio' >Bio: </label><input id='user-profile-bio' placeholder={dummyUserInfo.bio} value={bio} onChange={e => setBio(e.target.value)} ></input></div>
            <div><label htmlFor='user-profile-interest' >Interest: </label><input id='user-profile-interest' placeholder={dummyUserInfo.interest} value={interest} onChange={e => setInterest(e.target.value)} ></input></div>
            <div><label htmlFor='user-profile-jobTitle' >Job title: </label><input id='user-profile-jobTitle' placeholder={dummyUserInfo.jobTitle} value={jobTitle} onChange={e => setJobTitle(e.target.value)} ></input></div>
          </div>

          <div className='master-infor'>
            <form className='user-profile-form-update' onSubmit={handleUpdateMasterInfo} >
              <div id='info' className='master-detail' ><label htmlFor='user-profile-email' >Email: </label><input id='user-profile-email' placeholder={dummyUserInfo.info.email} value={email} onChange={e => setEmail(e.target.value)} ></input></div>
              <div id='phone' className='master-detail' ><label htmlFor='user-profile-phone' >Phone: </label><input id='user-profile-phone' placeholder={dummyUserInfo.info.phone} value={phone} onChange={e => setPhone(e.target.value)} ></input></div>
              <div id='address' className='master-detail' ><label htmlFor='user-profile-address' >Address: </label><input id='user-profile-address' placeholder={dummyUserInfo.info.address} value={address} onChange={e => setAddress(e.target.value)} ></input></div>
              <div id='facebook' className='master-detail' ><label htmlFor='user-profile-facebook' >Facebook: </label><input id='user-profile-facebook' placeholder={dummyUserInfo.info.facebook} value={facebook} onChange={e => setFacebook(e.target.value)} ></input></div>
              <div id='instagram' className='master-detail' ><label htmlFor='user-profile-instagram' >Instagram: </label><input id='user-profile-instagram' placeholder={dummyUserInfo.info.instagram} value={instagram} onChange={e => setInstagram(e.target.value)} ></input></div>
              <div><button type='submit' className='submit-form' >Update</button></div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}
