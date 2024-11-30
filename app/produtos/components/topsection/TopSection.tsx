import "@/app/produtos/components/topsection/TopSection.css"

import BeMember from "@/app/ui/_components/bemember/bemember";
import Image from "next/image";
import products_01 from "/public/assets/products-01.jpeg"

export default function TopSection(
    { onBeMemberClick }: { onBeMemberClick: () => void }
) {
    return (
        <div className="top-section-container">
            <div className="top-section-left">
                <p className="top-section-pre-title">Lorem Ipsum Dolor</p>
                <h1>Lorem Ipsum Dolor</h1>
                <p className="top-section-description">eiusmod temporm dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporm dolor sit</p>
                <div className="top-section-bemember-container">
                    <BeMember onClick={onBeMemberClick} />
                </div>
            </div>
            <div className="top-section-right">
                <Image className="top-section-image" src={products_01} alt={""} fill={false} />
            </div>
        </div>
    )
}