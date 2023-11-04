import React from "react";
import UserAvatar from '../Assets/Images/user-avatar.png';

function UserInfoCard() {
    return (
        <div className="bg-background h-full w-64 border rounded-2xl px-3 py-1 flex justify-around items-center">
            <img className="h-6 w-6 border rounded-full" src={UserAvatar} alt="user-avatar" />

            <div className="h-5 flex justify-around items-center">
                <p className="text-primary_text_selection decoration-white">Zash</p>
            </div>

            <div className="h-5 flex justify-between items-center">
                <p className="text-grey_level_5 decoration-white">|</p>
            </div>

            <div className="h-5 flex justify-between items-center">
                <p className="text-primary_text_selection decoration-white">User ID: 11026666</p>
            </div>
        </div>
    )
}

export default UserInfoCard;
