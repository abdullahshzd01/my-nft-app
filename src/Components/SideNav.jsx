import React from "react";
import Logo from "./icons/logo";
import Notification from "./icons/notification";
import HomeIcon from "./icons/home";
import NftListingsIcon from "./icons/nftListings";
import SettingsIcon from "./icons/settings";

function SideNav() {
    return (
        <div className="w-1/12 flex flex-col pt-6 pb-9 justify-between items-center">
            <div className="h-[88px] w-[88px] py-7 px-6">
                <Logo />
            </div>

            <div className="h-[264px] w-[108px]">
                <div className="h-[88px] w-[108px] flex justify-center items-center">
                    <HomeIcon />
                </div>

                <div className="h-[88px] w-[108px] flex justify-center items-center">
                    <NftListingsIcon />
                </div>

                <div className="h-[88px] w-[108px] flex justify-center items-center">
                    <SettingsIcon />
                </div>
            </div>

            <div className="h-[88px] w-[104px] py-8 px-5 flex justify-center">
                <Notification />
            </div>
        </div>
    )
}

export default SideNav;
