import { FaDownload } from "react-icons/fa"
import { buttonCV, experience } from "../../utils/information"
import "./Experience.css"
import { Button } from "../Button"

export function Experience() {
    return (
        <div className="experience" id='experiência'>
            <div className="experience-container">
                <h2>Experiência</h2>
                {experience.map((item =>
                    <div className="experience-item">
                        <h3>{item.title}</h3>
                        <h4>{item.subTitle} <span>{item.time}</span></h4>
                        <p>{item.content}</p>
                        <p>
                            <span>Tech Stack: </span>
                            {item.tech}
                        </p>
                    </div>
                ))}
                <div className="cv">
                    <Button type="cv" />
                </div>
            </div>
        </div>
    )
}