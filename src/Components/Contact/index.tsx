import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { contact, contactNumber, whastapp } from "../../utils/information"
import "./Contact.css"
import { Button } from "../Button"

export function Contact() {
    return (
        <div className="contact">
            <div className="contact-container">
                <h2>Contato</h2>
                <div className="border">
                    <h3>{contact.content}</h3>
                    <div className="contact-links">
                        <div className="linkedin link">
                            <FaLinkedin color="var(---icons-color)" />
                            <a target="_blank"
                                rel="noopener noreferrer"
                                href={contact.linkedin.url}>
                                {contact.linkedin.name}
                            </a>
                        </div>

                        <div className="email link">
                            <FaEnvelope color="var(---icons-color)" />
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`mailto:${contact.email.url}`}>
                                {contact.email.name}
                            </a>
                        </div>

                        <div className="github link">
                            <FaGithub color="var(---icons-color)" />
                            <a target="_blank"
                                rel="noopener noreferrer"
                                href={contact.github.url}>
                                {contact.github.name}
                            </a>
                        </div>

                        <div className="whatsapp link">
                            <FaWhatsapp color="var(---icons-color)" />
                            <a href={`https://wa.me/${contactNumber}`} target="_blank" rel="noopener noreferrer">
                                {whastapp}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}