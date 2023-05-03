import "./App.css";
import "./output.css";
import NFT from "./assets/image-equilibrium.jpg";
import NFTCOIN from "./assets/icon-ethereum.svg";
import CLOCK from "./assets/icon-clock.svg";
import pfp from "./assets/image-avatar.png";


function Card(){

    return (
      <div className="bg1 center_all shadow-xl">
        <div className="w-96 p-8 bg2 rounded-xl">
          <div className="w-full">
            <img src={NFT}></img>
          </div>

          <div className="mt-5">
            <h2 className="text-white text-xl font-bold">Equilibrium #9852</h2>
          </div>

          <div className="mt-5">
            <p className="p-txt">
              Our Equilibrium collection promotes balence and calm{" "}
            </p>
          </div>

          <div className="mt-5 flex justify-between w-full  items-center">
            <div className="flex items-center">
              <img className="mr-2" src={NFTCOIN}></img>
              <p className="cyanTxt">0.041 ETH</p>
            </div>

            <div className="flex items-center ">
              <img className="mr-2" src={CLOCK}></img>
              <p className="p-txt">3 Days left</p>
            </div>
          </div>

          <div className="mt-3 bg3 "></div>

          <div className="pt-3 pb-3 flex items-center ">
            <img className="mr-2 rounded-full w-14 h-w-14 " src={pfp}></img>

            <p className="p-txt">
              Creation of <span className="text-white"> Walid Ara</span>{" "}
            </p>
          </div>
        </div>
      </div>
    );
}

export default Card ;