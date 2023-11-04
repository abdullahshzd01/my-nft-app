import React from "react";
import MoreOptions from "./icons/moreOptions";

function NftCard(params) {
    return (
        <div className="bg-background h-[560px] w-[350px] py-2.5 flex flex-col rounded-[20px] items-center place-content-around">
            <div className="h-96 w-80 flex flex-col">
                <div className="flex flex-row h-[32px] items-center">
                    <div className="flex justify-start items-center w-1/2 h-[24px]">
                        <p className="text-primary_text_selection text-base">{params.nft_name} #{params.nft_number}</p>
                    </div>

                    <div className="flex justify-end items-center w-1/2 h-full">
                        <div className="w-[24px] h-[24px] flex items-center place-content-around">
                            <MoreOptions />
                        </div>
                    </div>
                </div>

                <div className="flex flex-row h-full items-center">
                    <img className="" src={params.nft} alt="cyber-links-nft" />
                </div>
            </div>

            <div className="h-[160px] w-80 bg-grey_level_2 flex flex-col rounded-xl px-2 pt-2 pb-5 justify-around">
                <div className="bg-grey_level_1 h-[36px] w-[348] rounded-lg flex flex-row items-center py-2 pl-3 pr-2.5">
                    <div className="h-[20px] w-1/2 flex justify-start items-center">
                        <p className="text-primary_text_selection text-sm">Owner</p>
                    </div>

                    <div className="h-[20px] w-1/2 flex justify-end items-center">
                        <div className="w-[96px] h-full flex justify-between">
                            <p className="text-grey_level_6 text-sm">|</p>
                            <p className="text-grey_level_7 text-sm">{params.nft_owner}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-grey_level_1 h-[36px] w-[348] rounded-lg flex flex-row items-center py-2 pl-3 pr-2.5">
                    <div className="h-[20px] w-1/2 flex justify-start items-center">
                        <p className="text-primary_text_selection text-sm">Mint address</p>
                    </div>

                    <div className="h-[20px] w-1/2 flex justify-end items-center">
                        <div className="w-[96px] h-full flex justify-between">
                            <p className="text-grey_level_6 text-sm">|</p>
                            <p className="text-grey_level_7 text-sm">{params.nft_mintAddress}</p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-grey_level_1 h-[36px] w-[348] rounded-lg flex flex-row items-center py-2 pl-3 pr-2.5">
                    <div className="h-[20px] w-1/2 flex justify-start items-center">
                        <p className="text-primary_text_selection text-sm">Token address</p>
                    </div>

                    <div className="h-[20px] w-1/2 flex justify-end items-center">
                        <div className="w-[96px] h-full flex justify-between">
                            <p className="text-grey_level_6 text-sm">|</p>
                            <p className="text-grey_level_7 text-sm">{params.nft_tokenAddress}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NftCard;
