import { useState, useEffect } from 'react'
import Navbar from '../util/Navbar'
import '../css/Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faEnvelope, faUser, faLock, faLocationDot, faCreditCard} from '@fortawesome/free-solid-svg-icons';
import { Button } from '../util/Button';
import { app } from '../../firebase.js';
import { getAuth , onAuthStateChanged, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import strawberry from '../Assets/strawberry.png'
import apple from '../Assets/apple.png'
import banana from '../Assets/banana.png'
import orange from '../Assets/orange.png'
import AvatarModal from '../util/Avatarmodal.js';


const auth = getAuth(app);
const avatarOptions = [strawberry, apple, orange, banana];

function Profile() {
    const [userEmail, setUserEmail] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const [selectedAvatar, setSelectedAvatar] = useState('');
    const [cooldown, setCooldown] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {

        // its for loop-break
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUserEmail(user.email);
            setUsername(user.displayName);
            setSelectedAvatar(user.photoURL || '');
        } else {
            navigate('/log-in');
        }
        });

        return () => unsubscribe(); // Cleanup function
    }, []);

    const handleSelectAvatar = async (avatar) => {
        setSelectedAvatar(avatar);
        try {
          // Update the user's profile with the selected avatar URL
          await updateProfile(auth.currentUser, { photoURL: avatar });
          console.log('User profile updated with new avatar');
          setTimeout(() => setCooldown(false), 5000);
        } catch (error) {
          console.error('Error updating user profile:', error.message);
        }
      };

    

    console.log(username)

  return (
    <>
    <Navbar />
    <div className='profile-container'>
        <div className='profile-header-text'>
            <h1>ข้อมูลบัญชีของคุณ</h1>
        </div>
        <div className='profile-box-container'>
            <div className='profile-header-container'>
                <div className='profile-picture-container'>
                    <p>สวัสดี คุณ, {username}</p>
                    <p></p>
                    <div className='profile-picture'>
                        <img src= {selectedAvatar} alt='profilepicture' />
                        <div className='avatar-options'>
                        <button onClick={() => setShowModal(true)} className="profile-picture-button">
                        <FontAwesomeIcon icon={faPencil} /> Select Avatar
                        </button>
                        {showModal && (
                            <AvatarModal
                            closeModal={() => setShowModal(false)}
                            handleSelectAvatar={handleSelectAvatar}
                            />
                        )}
                        </div>
                    <button  className='profile-picture-button'>
                    </button>
                    </div>
                    
                </div>
            </div>
            <div className='profile-top-right-button'>
                <Button buttonStyle='btn--color--2' buttonSize='btn--medium--short'>จัดการตารางการเรียนรู้</Button>
            </div>
            <div className='profile-detail-container'>
                <div className='detail-box'>
                    <div className='first-section-box'>
                        <FontAwesomeIcon icon={faEnvelope} size='xl'/>
                        <span>อีเมล</span>
                    </div>
                    <p>{userEmail}</p>
                </div>
                <div className='detail-box'>
                    <div className='first-section-box'>
                        <FontAwesomeIcon icon={faLocationDot} size='xl'/>
                        <span>ที่อยู่ (สำหรับจัดส่ง)</span>
                    </div>
                    <p></p>
                </div>
                <div className='detail-box'>
                    <div className='first-section-box'>
                        <FontAwesomeIcon icon={faUser} size='xl'/>
                        <span>ชื่อผู้ใช้</span>
                    </div>
                    <p>{username}</p>
                </div>
                <div className='detail-box'>
                    <div className='first-section-box'>
                        <FontAwesomeIcon icon={faCreditCard} size='xl'/>
                        <span>ข้อมูลการชำระเงิน</span>
                    </div>
                    <p></p>
                </div>
                <div className='detail-box'>
                    <div className='first-section-box'>
                        <FontAwesomeIcon icon={faLock} size='xl'/>
                        <span>รหัสผ่าน</span>
                    </div>
                    <p></p>
                </div>
            </div>
        </div>
       
    </div>
    </>
  )
}
export default Profile