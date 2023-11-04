import React from "react";
import SideNav from "../Components/SideNav";
import Dash from "../Components/Dash";
import CyberLinx from '../Assets/Images/nft-1.png';
import Eyedeas from '../Assets/Images/nft-3.png';
import zombies from '../Assets/Images/nft-2.png';
import { Metaplex } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
const metaplex = Metaplex.make(connection);

async function getNFTs(publicKey) {
    const myNfts = await metaplex.nfts().findAllByOwner({
        owner: new PublicKey(publicKey)
    });

    return myNfts;
}

function Dashboard() {
    const nft_Fetch = getNFTs("narfn77NVRRfa4frg1KZykyFrJ1f9eMGnzXeMn2ja1X");

    const nft_Data = [
        {
            id: 1,
            nft_name: 'Cyberlinx',
            nft_number: '2551',
            nft: CyberLinx,
            nft_owner: '72UGr...YdD',
            nft_mintAddress: '72UGr...YdD',
            nft_tokenAddress: '72UGr...YdD',
        },
        {
            id: 2,
            nft_name: 'The Eyedeas',
            nft_number: '1029',
            nft: Eyedeas,
            nft_owner: '72UGr...YdD',
            nft_mintAddress: '72UGr...YdD',
            nft_tokenAddress: '72UGr...YdD',
        },
        {
            id: 3,
            nft_name: 'zombies',
            nft_number: '7919',
            nft: zombies,
            nft_owner: '72UGr...YdD',
            nft_mintAddress: '72UGr...YdD',
            nft_tokenAddress: '72UGr...YdD',
        },
    ];

    return (
        <div className="bg-background min-h-screen flex flex-row">
            <SideNav />
            <Dash nftData={nft_Data} nftFetch={nft_Fetch} />
        </div>
    )
}

export default Dashboard;
