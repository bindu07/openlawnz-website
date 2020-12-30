import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import HeroLarge from "../components/Hero"

import "../css/Index.css"

import improveImage from "../images/home/our-mission/improve.svg"
import spurImage from "../images/home/our-mission/spur.svg"
import fundImage from "../images/home/our-mission/fund.svg"

import howToUseImage from "../images/home/explore/how-to-use.svg"
import ourMissionImage from "../images/home/explore/our-mission.svg"
import blogImage from "../images/home/explore/our-blog.svg"

const HomePage = () => {
    return (
        <Layout>
            <SEO
                title="Home"
                description="OpenLaw NZ is a new, free legal research platform for New Zealand."
            />
            <HeroLarge/>

            <div className="inner">
				<div className="body-wrap">
					<div className="body-left">
						<div className="our-mission">
							<h2 className="body-title">Our Mission</h2>
							<p>
								OpenLaw NZ is an open-source platform that any country can copy and use for<br />
								the betterment of their citizens.
							</p>

							<div className="mission-segments">
								<div>
									<img src={improveImage} alt="" />
									<p>
										Improve access to justice and education for all New Zealanders
									</p>
								</div>
								<div>
									<img src={spurImage} alt="" />
									<p>Spur innovation with a freely available API</p>
								</div>
								<div>
									<img src={fundImage} alt="" />
									<p>
										Fund future development by providing services using the OpenLaw NZ platform
									</p>
								</div>
							</div>
						</div>
                        
						<div className="explore">
							<h2 className="body-title">Explore OpenLaw NZ</h2>
							<div className="explore-segments">
								<Link to="/how-to-use.html">
									<img src={howToUseImage} alt="" />
									<p>How to use OpenLaw NZ</p>
								</Link>
								<Link to="/our-mission">
									<img src={ourMissionImage} alt="" />
									<p>Our mission</p>
								</Link>
								<Link to="blog.html">
									<img src={blogImage} alt="" />
									<p>Our blog</p>
								</Link>
							</div>
						</div>

						<div className="contact-us">
							<h2 className="body-title">Contact Us</h2>
							<p>
								We'd love to hear feedback and things you have done with the platform
							</p>
							<a href="mailto:enquiries@openlaw.nz" className="primary-button">Get in touch</a>
						</div>
					</div>
					<div className="body-right">
						<div className="on-this-page">
							<h2>Blog</h2>
							<ul>
								<li>
									<Link to="blog.html#openlaw-nz-receives-law-foundation-grant"
										>OpenLaw NZ Receives Law Foundation Grant
                                    </Link>
								</li>
								<li>
									<Link to="blog.html#openlaw-nz-launches-new-website">
										OpenLaw NZ launches new website
									</Link>
								</li>
								<li>
									<Link to="blog.html#amazing-response-to-call-for-volunteers">
										Amazing response to call for volunteers
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
        </Layout>
    )
  }
  
  export default HomePage