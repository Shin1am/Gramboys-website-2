import React, {useEffect} from 'react';
import '../css/Home.css';
import { Button } from '../util/Button';
import Banana from '../Assets/Banana.jpg';
import Cylinder from '../svg/Cylinder';
import facebookIcon from '../Assets/facebook.png';
import youtubeIcon from '../Assets/youtube.png';
import Navbar from '../util/Navbar';



// commented code have problem go check styles



function Home() {
  
  return (
    <>
    <Navbar />
    <div className='Home-Container'>
        <div className='hero-section-container'>
            <div className='hero-section-text'>
                <h3>The best place to find</h3>
                <h1>Grammar Courses</h1>
                <p>Elevate Your Grammar: From Basics to Global Mastery!</p>
            </div>
            <div className='hero-section-button'>
                <Button buttonStyle='btn--color' buttonSize='btn--large' path='/log-in'>Begin Your English Journey</Button>
            </div>
            {/*<div className='hero-section-image'>
                <img src={Banana} alt='banana' style={{ width: 'auto', height: '500px'}}/>
            </div> */}
            <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
        </div>
        <div className='grammar-section-container'>
            <div className='grammar-first-section-text'>
                <h3>Why</h3>
                <h1>Grammar</h1>
                <h5>is important ?</h5>
            </div>
            <div className='grammar-second-section-text'>
                <p>
                    “ Grammar is the foundation upon which the clarity and effectiveness of communication are built. 
                    It is the scaffolding of language that allows us to construct meaning in precise and nuanced ways. 
                    Without a strong grasp of grammar, our ability to express complex ideas, engage in meaningful dialogue, 
                    and navigate the vast landscape of global communication is significantly hindered. ”
                </p>
                <p className='second-section-reference'>- Dr. Elaine Horwitz, Professor of Language and Literacy Education -</p>
            </div>
        </div>
        <div className='courses-section-container'>
            <div className='courses-section-text'>
                <h4>Empower Your Future: with</h4>
                <h1>GramGate</h1>
                <p>
                    Dive deep into the core elements that construct language, from punctuation to parts of speech,
                    setting a solid foundation for effective communication.     
                </p>
            </div>
            <div className='courses-section-cylinder'>
                <Cylinder width={20} height={170} radius={10} color='#358CC8'/>
            </div>
        </div>
        <div className='benefits-section-container'>
            <div className='benefits-section-text'>
                <h1>Join Us</h1>
                <p>Seamlessly Resolving Your Learning Challenges!</p>
            </div>
            <ul className='benefits-flipper-section-container'>
                <div className='flip-container'>
                    <div className="flipper">
                        <div className="front">
                            <p>Solid Foundation</p>
                        </div>
                        <div className="back">
                            <p>
                                GramBoys likely emphasizes the core principles of grammar, 
                                which are essential for mastering any language. 
                                This solid foundation is crucial for effective communication, 
                                ensuring that learners can&nbsp;
                                <span className='back-highlighted-text'>
                                    construct sentences correctly, 
                                    use the right tenses, and organize their thoughts coherently. 
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flip-container'>
                    <div className="flipper">
                        <div className="front-2">
                            <p>Writing and Reading Skills</p>
                        </div>
                        <div className="back-2">
                            <p>
                            A strong grasp of grammar can significantly enhance writing and reading skills. 
                            Learners will be better&nbsp;
                            <span className='back-highlighted-text'>
                                equipped to understand complex texts, 
                                discern nuances in written material, and express themselves&nbsp;    
                            </span> 
                            more clearly and persuasively in writing.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flip-container'>
                    <div className="flipper">
                        <div className="front">
                            <p>Confidence in Communication</p>
                        </div>
                        <div className="back">
                            <p>
                                With the grammatical tools and knowledge gained from GramBoys, 
                                learners can gain confidence in both their spoken and written communication. 
                                This confidence can translate into&nbsp;
                                <span className='back-highlighted-text'>
                                better performance in academic settings, 
                                professional environments, and everyday interactions.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flip-container'>
                    <div className="flipper">
                        <div className="front-2">
                            <p>Advanced Language Learning</p>
                        </div>
                        <div className="back-2">
                            <p>
                                 Mastering the basics with GramBoys can pave the way for more advanced language studies. 
                                 A solid grammatical foundation makes it easier to&nbsp;
                                 <span className='back-highlighted-text'>
                                    learn new languages, 
                                    understand linguistic structures, and appreciate the subtleties of different forms of communication.
                                 </span>
                            </p>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
        <div className='footer-container'>
            <div className='footer-text'>
                <div className='footer-text-adress'>
                    <p className='footer-text-adress-head'>GramBoys</p>
                    <p>บริษัท แกรมบอย เอ็ดดูเคชั่น จำกัด (สำนักงานใหญ่)</p>
                    <p>ที่อยู่ 999 ชั้น 99 อาคารเอ บี ซี</p>
                    <p>บถนนเชียงใหม่ เมืองเชียงใหม่ เชียงใหม่ 50000</p>
                </div>
                <div className='footer-contact'>
                    <a href='https://www.facebook.com/profile.php?id=100009672020356' target='_blank' rel='noreferrer'>
                        <img src={facebookIcon} alt='facebookIcon' style={{width: '50px', height: 'auto'}}/>
                    </a>
                    <a href='https://www.youtube.com/@9arm.' target='_blank' rel='noreferrer'>
                        <img src={youtubeIcon} alt='youtubeIcon' style={{width: '50px', height: 'auto'}}/>
                    </a>
            </div>
            </div>
            <div className='footer-text'>
                <div className='footer-text-contact'>
                    <p className='footer-text-contact-head'>ติดต่อเรา</p>
                    <p>โทรศัพท์: 999-999999, 999-999999</p>
                    <p>โทรสาร: 999-999999, 999-999999</p>
                </div>
            </div>
        </div>
    </div>
</>

  )
}

export default Home