import Image from "next/image"
import "./ModalityCard.css"

import arrow_right_primary from '@/public/assets/arrow-right-primary.svg'
import arrow_left_primary from '@/public/assets/arrow-left-primary.svg'

export default function ModalityCard(
    { card, isOdd }: { card: { imageUrl: string, title: string, description: string }, isOdd: boolean }
) {
    return (
        <div className={`modality-container ${isOdd ? "row-reverse" : ""}`}>
            <div className="modality-content">
                <div className="modality-title">{card.title}</div>
                <div className="modality-description">{card.description}</div>
                <Image className="modality-arrow" src={isOdd ? arrow_left_primary : arrow_right_primary} alt="" />
            </div>
            <hr className="solid" />
            <Image
                className="modality-image"
                src={card.imageUrl}
                alt=""
                width={720}
                height={480} />
        </div>
    )
}