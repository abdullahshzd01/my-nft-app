import React, { useState } from "react";
import CryptoPairCard from "./CryptoPairCard";
import UserInfoCard from "./UserInfoCard";
import RefreshButton from "./RefreshButton";
import NftCard from "./NFT-Card";
import LeftArrow from "./icons/sliderLeftArrow";
import RightArrow from "./icons/sliderRightArrow";

function Dash(params) {
    const [nftData, setNftData] = useState(params.nftData);
    const [nftData2, setNftData2] = useState(params.nftFetch);

    const handleMoveRight = () => {
        setNftData((prevData) => {
            const lastItem = prevData.pop();
            prevData.unshift(lastItem);
            return [...prevData];
        });
    };

    const handleMoveRight2 = () => {
        setNftData2((prevData) => {
            const lastItem = prevData.pop();
            prevData.unshift(lastItem);
            return [...prevData];
        });
    };

    const handleMoveLeft = () => {
        setNftData((prevData) => {
            const firstItem = prevData.shift();
            prevData.push(firstItem);
            return [...prevData];
        });
    };

    const handleMoveLeft2 = () => {
        setNftData2((prevData) => {
            const firstItem = prevData.shift();
            prevData.push(firstItem);
            return [...prevData];
        });
    };

    return (
        <div className="flex flex-col w-11/12 bg-grey_level_3 rounded-l-3xl">
            <div className="bg-transparent h-20 w-full px-16 py-5 flex flex-row">
                <div className="h-full w-1/2 flex justify-start" id="CoinPair">
                    {/* <div className="bg-grey_level_2 h-full w-1/3"></div> */} {/* coin pair stat card here */}
                    <CryptoPairCard />
                </div>

                <div className="bg- h-full w-1/2 flex justify-end" id="UserInfo">
                    {/* <div className="bg-success h-full w-1/3"></div> */} {/* user info card here */}
                    <UserInfoCard />
                </div>
            </div>

            <div className="bg-transparent h-20 w-full px-16 py-5 flex flex-row">
                <div className="h-full w-1/2 flex justify-start items-center">
                    <p className="text-primary_text_selection text-2xl">Dashboard</p>
                </div>

                <div className="bg- h-full w-1/2 flex justify-end items-center">
                    <RefreshButton />
                </div>
            </div>

            <div className="h-full w-full flex items-center px-16">
                <div className="w-full min-w-[24.25rem] flex flex-row justify-between" >
                    {
                        params.nftFetch.length > 0 ? (
                            nftData2.slice(0, 3).map((data) => {
                                return <NftCard key={data.id} nft_name={data.nft_name} nft_number={data.nft_number} nft={data.nft} nft_owner={data.nft_owner} nft_mintAddress={data.nft_mintAddress} nft_tokenAddress={data.nft_tokenAddress} />;
                            })
                        ) : (
                            nftData.map((data) => {
                                return <NftCard key={data.id} nft_name={data.nft_name} nft_number={data.nft_number} nft={data.nft} nft_owner={data.nft_owner} nft_mintAddress={data.nft_mintAddress} nft_tokenAddress={data.nft_tokenAddress} />;
                            })
                        )
                    }
                </div>
            </div>

            <div className="h-[200px] w-full flex flex-col justify-center items-center">
                <div className="bg-background h-[78px] w-[295px] rounded-[40px] p-[11px]">
                    {
                        params.nftFetch.length > 0 ? (
                            <div className="h-full w-full flex flex-row justify-between items-center">
                                <button className="bg-grey_level_2 h-[56px] w-[56px] rounded-full flex justify-around items-center hover:cursor-pointer" onClick={handleMoveLeft2}>
                                    <LeftArrow />
                                </button>

                                <button className="bg-grey_level_2 h-[56px] w-[56px] rounded-full flex justify-around items-center hover:cursor-pointer" onClick={handleMoveRight2}>
                                    <RightArrow />
                                </button>
                            </div>
                        ) : (
                            <div className="h-full w-full flex flex-row justify-between items-center">
                                <button className="bg-grey_level_2 h-[56px] w-[56px] rounded-full flex justify-around items-center hover:cursor-pointer" onClick={handleMoveLeft}>
                                    <LeftArrow />
                                </button>

                                <button className="bg-grey_level_2 h-[56px] w-[56px] rounded-full flex justify-around items-center hover:cursor-pointer" onClick={handleMoveRight}>
                                    <RightArrow />
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Dash;
