import { projects } from "../../utils/information"
import { Button } from "../Button"
import Carousel from "../Carousel"
import "./Projects.css"

export function Projects() {
    return (
        <div className="projects">
            <div className="projects-container">
                <h2 className="projects-title">Projetos</h2>
                <Carousel />
                <Button type='contact'/>
            </div>
        </div>
    )
}