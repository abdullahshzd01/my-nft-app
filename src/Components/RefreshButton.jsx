import React from "react";
import RefreshIcon from "./icons/refresh";

function RefreshButton() {
    return (
        <button className="bg-background h-10 w-10 border rounded-2xl p-2.5 flex justify-around items-center" onClick={() => window.location.reload(false)}>
            <RefreshIcon />
        </button>
    )
}

export default RefreshButton;
