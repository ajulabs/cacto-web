"use client";

import { useState } from "react"
import "./Modalities.css"
import { modalities, Modality } from "./model/Modality";
import ModalityCard from "./components/ModalityCard";

export default function Modalities() {
    const [modality, setModality] = useState<Modality>(Modality.EXCLUSIVE)

    const isSelected = (_modality: Modality) => {
        return _modality === modality
    }

    const modalityCards = modalities.find(it => it.type === modality)?.cards.map((card, index) => <ModalityCard key={index} card={card} isOdd={ index % 2 === 1} />)

    return (
        <div className="modalities-container">
            <div className="modalities-header">
                <h2>MODALIDADES</h2>
                <div className="modalities-items-container">
                    <ModalitySelector type={Modality.EXCLUSIVE} onClick={setModality} isSelected={isSelected} />
                    <ModalitySelector type={Modality.MMT} onClick={setModality} isSelected={isSelected} />
                    <ModalitySelector type={Modality.RUN} onClick={setModality} isSelected={isSelected} />
                    <ModalitySelector type={Modality.TENIS} onClick={setModality} isSelected={isSelected} />
                </div>
            </div>
            <div>
                {modalityCards}
            </div>
        </div>
    )
}

function ModalitySelector(
    { type, onClick, isSelected }: { type: Modality, onClick: (modality: Modality) => void, isSelected: (modality: Modality) => boolean }
) {
    return <p className={`modality-selector ${isSelected(type) ? "modality-selected" : ""}`} onClick={() => { onClick(type) }}>CACTO {type}</p>
}