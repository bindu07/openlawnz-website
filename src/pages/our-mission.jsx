import React from "react"
import HeroSmall from "../components/HeroSmall"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import "../css/Index.css"

import AndrewImage from "../images/our-mission/andrew-easterbrook.jpg"
import WillImage from "../images/our-mission/william-parry.jpg"

const OurMission = () => (
    <Layout>
        <SEO 
            title="Our Mission" 
            description="OpenLaw NZ is an open-source legal data platform. Our goal is to improve the accessibility of case law 
            and other legal information in New Zealand. We want to make it easier for all New Zealanders to understand law. "
        />
        <HeroSmall title="Our Mission"/>
        <div className="inner">
            <div className="body-wrap content-page right-on-top">
                <div className="body-left">
                    <div id="mission-statement" className="content-section">
                        <h2 className="body-title">Mission statement</h2>
                        <p>
                            OpenLaw NZ is an open-source legal data platform. Our goal is to improve the
                            accessibility of case law and other legal information in New Zealand. We want to make it
                            easier for all New Zealanders to understand law.
                        </p>
                    </div>

                    <div id="about-us" className="content-section">
                        <h2 className="body-title">About Us</h2>
                        <p>We founded OpenLaw NZ in 2018 as a non-profit charity in response to the lack of available
                            free legal research tools and data in New Zealand.</p>

                        <p>
                            Our platform is open source, and can be modified and used by any non-profit organisation
                            around the world to improve access to justice in their country.
                        </p>
                    </div>

                    <div id="our-data" className="content-section">
                        <h2 className="body-title">Our data</h2>
                        <p>Because case law is not subject to copyright restrictions, we have been able to re-purpose
                            PDFs of case law from the Ministry of Justice websites and convert them into usable pieces
                            of data that a computer can read and search. </p>
                        <p>
                            The case law data we have currently comprises High Court, Court of Appeal and Supreme Court
                            decisions from present day back to approximately 2004 (with some exceptions, for example
                            some suppressed decisions and other judgments that have not been published), plus ACC appeal
                            decisions in the District Court.
                        </p>
                        <p>We look at those PDF files and analyse them to see what pieces of information might be useful
                            – for example, references to pieces of legislation, dates, relationships and citations.
                            We’re always working on expanding the data we can extract. </p>

                    </div>
                    <div id="stewardship" className="content-section">
                        <h2 className="body-title">Stewardship</h2>
                        <p>We want to make legal information as accessible as we can.</p>

                        <p>That means our data is open and accessible to everybody. You can interact with our data
                            through our website and search. Or you can tap directly into our database through our API.
                            All of our code is open source and licensed to the public under the GPL open source license.
                        </p>

                        <p>Because we are a charity and have limited resources, access to our database and API is only
                            for non-commercial purposes. This lets us make sure that our data isn’t copied by a
                            commercial provider and locked away behind a paywall. If you need access to our data for
                            commercial purposes but consider your use will still benefit the public by enhancing the
                            accessibility of legal information, we will consider it – please get in touch. </p>

                        <p>You can use our search for any purpose including commercial purposes.</p>

                    </div>

                    <div id="directors" className="content-section">
                        <h2 className="body-title">Directors</h2>
                        <div className="directors-segments">
                            <div>
                                <img src={AndrewImage} alt="Andrew Easterbrook" />
                                <h3>Andrew Easterbrook, CEO</h3>
                                <p>
                                    Andrew is a lawyer, and has worked in technology law, civil litigation and
                                    family law since 2009. He has been a Member of the Auckland District Law Society
                                    Technology & Law Committee since 2012, and is experienced in web and software
                                    development. Andrew went to university at Victoria, Wellington, and now lives in
                                    Whangarei.
                                </p>
                            </div>
                            <div>
                                <img src={WillImage} alt="William Parry" />
                                <h3>William Parry, CTO</h3>
                                <p>
                                    William brings 15 years of tech experience across enterprise, advertising and
                                    small businesses including 8 years working with open data in projects and
                                    hackathons. He has run community coding classes and is passionate about
                                    empowering disadvantaged people with technology. William went to university at
                                    Victoria, Wellington, and now lives in Sydney.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body-right">
                    <div className="on-this-page">
                        <h2>On this page</h2>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#mission-statement">Mission Statement</a>
                                </li>
                                <li>
                                    <a href="#about-us">About Us</a>
                                </li>
                                <li>
                                    <a href="#our-data">Our data</a>
                                </li>
                                <li>
                                    <a href="#stewardship">Stewardship</a>
                                </li>
                                <li>
                                    <a href="#directors">Directors</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default OurMission