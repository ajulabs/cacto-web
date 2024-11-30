"use client";

import "@/app/ui/_components/bemember/bemember.css"
import Image from "next/image"

import arrow_right from "@/public/assets/arrow-right.svg"

export default function BeMember(
    { onClick }: { onClick: () => void }
) {
    return (
        <div className="bemember-container">
            <button type="button" className="btn-bemember" onClick={onClick}>
                <span>SEJA MEMBRO</span>
                <Image className="btn-bemember-arrow" src={arrow_right} alt="" />
            </button>
        </div>
    )
}