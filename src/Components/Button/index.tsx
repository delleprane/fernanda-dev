import { FaDownload, FaWhatsapp } from "react-icons/fa"
import "./Button.css"
import { buttonContact, buttonCV, contactNumber } from "../../utils/information"

interface ButtonProps {
    type: 'contact' | 'cv'; // Tipagem da prop type
}

export function Button({ type }: ButtonProps) {
    return (
        <div className="button">
            <div className="button-container">
                {type === 'cv' ?
                    <a href="/docs/cv-frontend-fernanda-delleprane.pdf" className="cv" download >
                        <FaDownload size={24} color={'var(--text-color)'} /> <p>{buttonCV}</p>
                    </a>
                    :
                    <a href={`https://wa.me/${contactNumber}`} target="_blank" rel="noopener noreferrer" className="contact">
                        <FaWhatsapp  size={24} color={'var(--text-color)'} /> <p>{buttonContact}</p>
                    </a>}

            </div>
        </div>
    )
}