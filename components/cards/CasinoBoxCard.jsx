"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import play from "/public/img/games/play.png";

const CasinoBoxCard = ({ img, live = false }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>


      <div className="casino__box">
        <Image src={img} alt="game" />
        {live && (
          <Link href="URL:void()" className="live">
            Live
          </Link>
        )}
        <div className="casino__overlay">
          <button
            className="play-btn bg-transparent border-0"
            onClick={() => setOpen(true)}
          >
            <Image src={play} alt="img" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CasinoBoxCard;
