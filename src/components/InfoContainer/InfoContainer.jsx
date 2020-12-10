import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

import latteImg from '../../assets/images/latte.jpg'

import './InfoContainer.scss'

const InfoContainer = () => {
    return (
        <Container className="InfoContainer">
            <Row>
                <Col md={12} lg={4} className="my-2">
                    <span class="helper"></span>
                    <Image src={latteImg} fluid />
                </Col>
                <Col md={12} lg={8} className="my-2 main-info">
                    <ul>
                        <li>WIN $25,000 AND BECOME THE TOP BARISTA</li>
                        <li>FREE TO ENTER</li>
                        <li>
                            Enter now for a chance to face off on the upcoming “Barista
                            Wars” Live TV competition
                        </li>
                        <li>
                            The deadline to enter is Friday, July 31st at midnight
                            PST
                        </li>
                        <li>
                            Select proceeds will go towards Coffee Kids, which is a nonprofit organization that
                            offers entrepreneurial training, mentorship, and seed capital to children within coffee farming
                            communities
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col md={12}>
                    <div className="competition-info">
                        <p>For less than the cost of a cup of coffee (it’s actually completely free to enter), impassioned and
                        artistic baristas worldwide can enter now for a chance to face off on the upcoming “Barista
                        Wars” Live TV competition. The winner of this high stakes contest will not only win the title of
                        <b> “Top Barista,”</b> but they will also take home a respectable cash prize of <b>$25,000</b>.</p>
                        <p>CrowVote LLC has hosted dozens of successful contests over the years, including various music,
                        modeling, and lifestyle competitions. Their contests have helped to elevate the social and
                        commercial success of talented individuals across the world and Barista Wars, the first
                        competition of its kind, will undoubtedly do the same.</p>
                        <p>Spokesperson and Manager of CrowVote LLC, Mary Hagen enthusiastically mentioned, “We are
                        really looking for the next big talent out there. A barista competition of this magnitude has
                        never been done before and we are looking to give someone special the opportunity of a
                        lifetime.”</p><p>Participants of the competition can also feel good about being part of this contest, as a good
                        portion of the proceeds from each CrowVote LLC contest is donated directly to charity. For
                        Barista Wars, select proceeds will go towards Coffee Kids, which is a nonprofit organization that
                        offers entrepreneurial training, mentorship, and seed capital to children within coffee farming
                        communities. In the process of becoming the world’s leading provider of contests and
                        competitions, CrowVote LLC has proudly donated more than $5 million dollars to charitable
                        donations since they were founded over 7 years ago. </p><p>Those interested in entering the upcoming Barista Wars competition can head directly to
                        CrowVote.com for a chance to participate. The deadline to enter is Friday, July 31st at midnight
                        PST.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default InfoContainer
