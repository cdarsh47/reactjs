import profilePicture from '../images/avatar.png';

export default function Information(){
    return(
        <div className='profile-information'>
            <img src={profilePicture} alt="profile picture"/>
            <h3>User Profile</h3>
            <p className='post'>User Developer</p>
            <p className='weblink'>user.website</p>
            <div className='contact-links'>
                <span><a href="#" className='email-info'>Email</a></span>
                <span><a href="#" className='linked-info'>LinkedIn</a></span>
            </div>
        </div>
    )
}