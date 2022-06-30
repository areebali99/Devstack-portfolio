import React from 'react'
import './Header.css';
import lock from '../../assets/lock.png';
import consultant from '../../assets/consultant-services.png'
import magnifying from '../../assets/magnifying-glass.png'
import graphic from '../../assets/graphic-design.png';
import settings from '../../assets/settings.png'
import deployment from '../../assets/deployment.png'
import technical from '../../assets/technical.png'
import chart from '../../assets/chart.png'
import premimum from '../../assets/premium.png'
import speed from '../../assets/speed.png'
import flexibility from '../../assets/flexibility.png'
import team from '../../assets/team.png'
import bussiness from '../../assets/bussiness.png'
import notes from '../../assets/notes.png'
import notesFolder from '../../assets/notes-folder.png'
import magnify from '../../assets/magnify.png'
import check from '../../assets/checkMark.png'
import cycle from '../../assets/cycle.png'
import warning from '../../assets/warning.png'
import balancing from '../../assets/balancing.png'
import currency from '../../assets/currency.png'
import key from '../../assets/key.png'
import clock from '../../assets/clock.png'
import protection from '../../assets/protection.png'

const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='content'>

                    <h1><span >Product Built</span> <span id='break'>With Precision</span></h1>
                    <p>Scabale, scecure and futursitic </p>
                    <button className='contact-us'>Contact Us</button>

                </div>

            </div>

            <div class="container">
                <div class="main-timeline">

                    {/* <!-- start experience section--> */}
                    <div class="timeline">
                        <div class="icon"><h6>01</h6></div>
                        <div class="date-content">
                            <div class="date-outer">
                                <span class="date">

                                    <img src={lock} alt="key" />
                                </span>
                            </div>
                        </div>
                        <div class="timeline-content">
                            <h5 class="title">We protect your idea</h5>
                            <p class="description">
                                We start every project by signing NDA, to keep your intellectual wealth secure, no compromising with proprietorship on your idea.
                            </p>
                        </div>
                    </div>
                    {/* <!-- end experience section-->

                        <!-- start experience section--> */}
                    <div class="timeline">
                        <div class="icon"><h6>02</h6></div>
                        <div class="date-content">
                            <div class="date-outer">
                                <span class="date">

                                    <img src={consultant} alt="consult" />
                                </span>
                            </div>
                        </div>
                        <div class="timeline-content">
                            <h5 class="title">In-Depth Consultation</h5>
                            <p class="description">
                                Make us a participant in your journey trust us with your idea, your enterprise requirements, engage with us in deep discussions.
                            </p>
                        </div>
                    </div>
                    {/* <!-- end experience section-->

                        <!-- start experience section--> */}
                    <div class="timeline">
                        <div class="icon"><h6>03</h6></div>
                        <div class="date-content">
                            <div class="date-outer">
                                <span class="date">
                                    <img src={magnifying} alt='mgfy' />
                                </span>
                            </div>
                        </div>
                        <div class="timeline-content">
                            <h5 class="title">Planning , Analysis and Prototype</h5>
                            <p class="description">
                                Make us a participant in your journey trust us with your idea, your enterprise requirements, engage with us in deep discussions.
                            </p>
                        </div>
                    </div>
                    {/* <!-- end experience section--> */}

                    {/* <!-- start experience section--> */}
                    <div class="timeline">
                        <div class="icon"><h6>04</h6></div>
                        <div class="date-content">
                            <div class="date-outer">
                                <span class="date">
                                    <img src={graphic} alt='design' />
                                </span>
                            </div>
                        </div>
                        <div class="timeline-content">
                            <h5 class="title">Design: User Interface &amp; User Experience</h5>
                            <p class="description">
                                With concern to your futuristic needs, we make strikingly beautiful and responsive applications and websites that captures high user engagement.
                            </p>
                        </div>
                    </div>
                    {/* <!-- end experience section--> */}
                    <div class="timeline">
                        <div class="icon"><h6>05</h6></div>
                        <div class="date-content">
                            <div class="date-outer">
                                <span class="date">
                                    <img src={settings} alt='set' />
                                </span>
                            </div>
                        </div>
                        <div class="timeline-content">
                            <h5 class="title">Rapid Agile Development</h5>
                            <p class="description">
                                With your active engagement and our experience, we manage to bring you highly functional apps and websites within no time.
                            </p>
                        </div>
                    </div>
                    {/* <!-- end experience section-->

                        <!-- start experience section--> */}
                    <div class="timeline">
                        <div class="icon"><h6>06</h6></div>
                        <div class="date-content">
                            <div class="date-outer">
                                <span class="date">

                                </span>
                            </div>
                        </div>
                        <div class="timeline-content">
                            <h5 class="title">Testing and Quality Assuarance</h5>
                            <p class="description">
                                No app and website pass by uninspected, extensive test and ameliorations are done to give you only the best of the best.
                            </p>
                        </div>
                    </div>
                    {/* <!-- end experience section-->

                        <!-- start experience section--> */}
                    <div class="timeline">
                        <div class="icon"><h6>07</h6></div>
                        <div class="date-content">
                            <div class="date-outer">
                                <span class="date">
                                    <img src={deployment} alt='deploy' />
                                </span>
                            </div>
                        </div>
                        <div class="timeline-content">
                            <h5 class="title">Deployment &amp; Final Launch</h5>
                            <p class="description">
                                We seamlessly launch your apps and websites by integrating it with advance technology, to give you unparalleled experience of high-rated technology.
                            </p>
                        </div>
                    </div>
                    {/* <!-- end experience section--> */}

                    {/* <!-- start experience section--> */}
                    <div class="timeline">
                        <div class="icon"><h6>08</h6></div>
                        <div class="date-content">
                            <div class="date-outer">
                                <span class="date">
                                    <img src={technical} alt='tech' />
                                </span>
                            </div>
                        </div>
                        <div class="timeline-content">
                            <h5 class="title">Support &amp; Maintainence</h5>
                            <p class="description">
                                We work with you throughout your app cycle, we welcome your problems and issues and deploy an expert team to help you maintain app experience
                            </p>
                        </div>
                    </div>
                    <div class="timeline">
                        <div class="icon"><h6>09</h6></div>
                        <div class="date-content">
                            <div class="date-outer">
                                <span class="date">
                                    <img src={chart} alt='cht' />
                                </span>
                            </div>
                        </div>
                        <div class="timeline-content">
                            <h5 class="title">Grwth Hacking</h5>
                            <p class="description">
                                We share your load in whichever manner is possible, our outstanding SEO and market solutions will help you in converging your target market easily.
                            </p>
                        </div>
                    </div>
                </div>
            </div>




            <div className='cards-div mt-5'>
                <div className="card " >
                    <div className="card-body">
                        <img src={premimum} alt='pre' style={{ marginLeft: '5rem' }} />
                        <h2 className="card-title">Quality</h2>

                        <p className="card-text">We work on certain ethics and our development process is a reflection of the same, we bring you unparalleled quality stuff and highly functional websites and applications.</p>

                    </div>
                </div>
                <div className="card " >
                    <div className="card-body">
                        <img src={speed} alt='spe' style={{ marginLeft: '5rem' }} />
                        <h2 className="card-title" id='speed'>Speed</h2>

                        <p className="card-text">We understand how important time is for our clients, and we gauge our speed in accordance to it, now don’t wait for your web projects and web products because we deliver you before time.</p>

                    </div>
                </div>
                <div className="card " >
                    <div className="card-body">
                        <img src={flexibility} alt='flx' style={{ marginLeft: '5rem' }} />
                        <h2 className="card-title">Flexibility</h2>

                        <p className="card-text">Customise us, mould us, personalise us – in short exploit our services under your terms and conditions. Now, take control of your projects, and guide us with your wonderful insights as per your needs.</p>

                    </div>
                </div>
                <div className="card " >
                    <div className="card-body">
                        <img src={team} alt='tm' style={{ marginLeft: '5rem' }} />
                        <h2 className="card-title" id='eng'>Enagagement</h2>

                        <p className="card-text">We work on certain ethics and our development process is a reflection of the same, we bring you unparalleled quality stuff and highly functional websites and applications.</p>

                    </div>
                </div>


            </div>
            <div className='mt-4 quality'>
                <h4 id="qua">Comprehensive Approach To Quality</h4>
            </div>

            <div className='assure mt-4'>
                <h4 className='qua-control'>Planning</h4>
                <h4 className='qua-control'>Assurance</h4>
                <h4 className='qua-control'>Control</h4>


            </div>
            <hr />
            <div className='control'>
                <h4 className='qua-control'>Quality Control</h4>
                <p>In order to test the code and to monitor its consistency, we stick to the remarkable performance standards that are sound on the grounds of quality and excellence.</p>
                <img src={bussiness} alt="bussi" id='bussiness' />
            </div>
            <div className='qa'>
                <h4 id="qua">Devstack QA Department</h4>
                <p>We are reserved with an extraordinary division that is truly meant for processing thetesting in the right way. Our team of astute and skilled engineers’ works dedicatedly on the assigned projects order to bring the best out of it, Depending on the project's complexity, we deploy our team that can be shifted to other in case of urgency:</p>
            </div>
            <div id="container" >

                <div class="notes">
                    <img src={notes} />
                    <h5 className='line-break'>Profound QA Testing</h5>
                </div>
                <div class="notes">
                    <img src={notesFolder} />
                    <h5 className='line-break'>Documentation and code review</h5>

                </div>
                <div class="notes">
                    <img src={magnify} />
                    <h5 className='line-break'>Defect monitoring, tracking, and fixation</h5>
                    {/* <div id="doc" > */}
                </div>

                <div class="notes">
                    <img src={check} />
                    <h5 className='line-break'>Configuration update and management</h5>
                </div>
                <div class="notes">
                    <img src={cycle} />
                    <h5 className='line-break'>Process and progress management</h5>

                </div>
                <div class="notes">
                    <img src={warning} />
                    <h5>Risk handling</h5>

                </div>

            </div>

            <div className='stand'>
                <h4 id="qua">QA Standards That Shaped The Development And Quality</h4>

            </div>
            <div className='cards-div mt-5'>
                <div className="card inner" >
                    <div className='diamond'></div>
                    <div className="card-body inner-card">
                        {/* <img src={premimum} alt='pre' style={{ marginLeft: '5rem' }} /> */}
                        <h2 className="card-title">Planning and requirement analysis</h2>

                        <p className="card-text">We specify the project test cases along with its elaboration. Teams are assigned as required.</p>

                    </div>
                </div>
                <div className="card inner mb-4" >
                    <div className='diamond'></div>
                    <div className="card-body inner-card">
                        {/* <img src={speed} alt='spe' style={{ marginLeft: '5rem' }} /> */}
                        <h2 className="card-title" >Code Review</h2>

                        <p className="card-text">Profound testing is being conducted at the time of delivering and according to the test cases and plans is refined.</p>

                    </div>
                </div>
                <div className="card inner" >
                    <div className='diamond'></div>
                    <div className="card-body inner-card">
                        {/* <img src={flexibility} alt='flx' style={{ marginLeft: '5rem' }} /> */}
                        <h2 className="card-title">Immediate testing</h2>

                        <p className="card-text">For the just build products, we ensure to run QA test for to meet with the foreseen challenges.</p>

                    </div>
                </div>
                <div className="card inner" >
                    <div className='diamond'></div>
                    <div className="card-body inner-card">
                        {/* <img src={team} alt='tm' style={{ marginLeft: '5rem' }} /> */}
                        <h2 className="card-title" >Final verification</h2>

                        <p className="card-text">Testing is given a final shape and accordingly is processed for deployment.</p>

                    </div>
                </div>


            </div>
            <div className='stand'>
                <h4 id="qua">Why we recommend Devstack?</h4>

            </div>

            <div className='recommend mt-4'>
                <h4 className='qua-control-p'>Project Based Pricing</h4>
                <h4 className='qua-control-p'>Dedicated Development</h4>
                <h4 className='qua-control-p'>Milestone-based</h4>
                <h4 className='qua-control-p'>Effort Based Pricing</h4>

            </div>
            <hr id='w-recommend' />

            <div className='project'>
                <img src={balancing} alt="balance" id='balance' />
                <h4 className='qua-control' id='proj'>Project Based Pricing or Fixed Bid</h4>
                <p id='pro'>Where there is great clarity in the development requirement this is something for you, here you can choose between different models, with
                    pre-decided number of hours a developer is going to dedicate on your project, time-limit and cost of the development.</p>

            </div>
            <div className='stand'>
                <h4 id="qua">Why we recommend Staff Augmentation ?</h4>

            </div>
            <div className='augmen'>
                <p id='augmentation'>Looking at all the staff augmentation benefits we recommend you it for your enterprise benefits. It allows you to successfully evaluate your enterprise potential by analysing your staff and resources which enables you to work on additional skills and training and acquiring benefits.<br /> Specially if you have just started out or a Small or mid-sized enterprise, you would not voluntarily participate into the process of staffing, hiring, providing employment benefits and taxes etc. Thus, we at Dev Technosys, keeping in mind all these things recommend you staff augmentation from which you will not only dough the problems but will be efficient enough to see to your technical and business needs.</p>

                <div className="card staff" >
                    <div className='square'><img src={currency} alt="cur" className='direct' /></div>
                    <div className="card-body inner-card">

                        <h2 className="card-title cost"  >Cost Effectiveness</h2>

                        <p className="card-text cost-p">Not to mention the other perks, this alone is a great reason you should switch to staff augmentation, if a start-up or a SME you will be able to save a fortune.</p>

                    </div>
                </div>
                <div className="card staff" >
                    <div className='square'><img src={key} alt="ke" className='direct' /></div>
                    <div className="card-body inner-card">

                        <h2 className="card-title cost"  >Direct Access</h2>

                        <p className="card-text cost-p">You will have complete freedom to involve in the development process right from initiation to accomplishment. We always welcome suggestions from the clients to make the product impactfuls.</p>

                    </div>
                </div>

            </div>
            <button className='contact-us' id='consult'>Get Free Consultation Now</button>

            <div className='time-ip'>
                <div className="card time mb-2" >
                    <div className='square'><img src={clock} alt="clk" className='direct' /></div>
                    <div className="card-body inner-card">

                        <h2 className="card-title cost"  >Time Efficient</h2>

                        <p className="card-text cost-p">Not to mention the other perks, this alone is a great reason you should switch to staff augmentation, if a start-up or a SME you will be able to save a fortune.</p>

                    </div>
                </div>
                <div className="card ip mb-2" >
                    <div className='square'><img src={protection} alt="protect" className='direct' /></div>
                    <div className="card-body inner-card">

                        <h2 className="card-title cost"  >IP Protection</h2>

                        <p className="card-text cost-p">Complete protection and confidentiality is maintained, you don’t lose your ownership on the intellectual property and copyrights on the projects. we strictly maintain our work ethics.</p>

                    </div>
                </div>

            </div>
            <div className='unique'>
                <h4 id="qua">Think Unique? Then why settle for Generic?</h4>

            </div>
            <div className='footer'>
                <div className='circle'>
                    <div className='yellow-circle'>
                        <h3 className='nums'>01</h3>
                        <h5 className='foot'>Cost-Effective Pricing</h5>
                    </div>
                </div>
                <div className='circle'>
                    <div className='yellow-circle'>
                        <h3 className='nums'>02</h3>
                        <h5 className='foot'>Flexible Billing Plans</h5>
                    </div>
                </div>
                <div className='circle'>
                    <div className='yellow-circle'>
                        <h3 className='nums'>03</h3>
                        <h5 className='foot'>Dedicated Development</h5>
                    </div>
                </div>
                <div className='circle'>
                    <div className='yellow-circle'>
                        <h3 className='nums'>04</h3>
                        <h5 className='foot'>Build-Operate Transfer Model </h5>
                    </div>
                </div>
                <div className='circle'>
                    <div className='yellow-circle'>
                        <h3 className='nums'>05</h3>
                        <h5 className='foot'>Project Based Pricing or Fixed Bid</h5>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Header