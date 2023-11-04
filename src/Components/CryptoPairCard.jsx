import React from "react";
import EtherIcon from "./icons/ether";

function CryptoPairCard() {
    return (
        <div className="bg-background h-full w-64 border rounded-2xl px-3 py-1 flex justify-around items-center">
            <EtherIcon /> {/* ehthereum icon */}

            <div className="h-5 w-[4.375rem] flex justify-around items-center">
                <p className="text-primary_text_selection decoration-white">ETH/USDT</p>
            </div>

            <div className="h-5 w-[7.5rem] flex justify-between items-center">
                <p className="text-success decoration-white">1137.62</p>
                <p className="text-success decoration-white">+2.62%↑</p>
            </div>
        </div>
    )
}

export default CryptoPairCard;
