import { about, buttonCV } from '../../utils/information'
import { Button } from '../Button';
import './About.css'
import { FaDownload } from 'react-icons/fa';

export function About() {

    return (
        <div className="about" id='about'>
            <div className="about-container">
                <h1>Fernanda Delleprane</h1>
                <h2 className='subtitle'>{about.title}</h2>
                <div className="content-container">
                    <div className="image">
                        <img className="logo" src="images/about-image.png" alt="fernanda-image" />
                        <Button type='contact' />
                    </div>
                    <div className="content">
                        <h2 className='subtitle-content'>{about.title}</h2>
                        <p>{about.content}</p>
                        <p>{about.skills.title}</p>
                        <ul>
                            {about.skills.ability.map((item => <li>{item}</li>))}
                        </ul>
                        <div className="cv">
                            <Button type='cv' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}