import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import React from "react";
import ChannelRow from "./ChannelRow";
import "./SearchPage.css";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AKedOLTA-k0TzhGuBIVTQ9S0C0Mc6BsIUFLHjz1Np5XDbQ=s176-c-k-c0x00ffffff-no-rj-mo"
        Channel="Tech Lead"
        verified
        subs="1.3M"
        noOfVideos={343}
        description="Ex-Google TechLead gives his top lessons from 10 years of programming.  Launch your next website with http://squarespace.com/techlead and add code “TECHLEAD at checkout to save 10% off.."
      />

      <hr />

      <VideoRow
        views="7.3M"
        subs="996K"
        description="Tech lead is an arrogant programmer and a humorous idiosy."
        timestamp="10 days ago"
        Channel="Tech lead"
        title="We need to Talk, I am poor"
        image="https://i.ytimg.com/an_webp/Af9X4Q-hyyo/mqdefault_6s.webp?du=3000&sqp=CLj7rZQG&rs=AOn4CLAm4AwxuYVyoPgAYmiGZeBJRgrO6g"
      />

      <VideoRow
        views="263K"
        subs="1.3M"
        description="Ex-Google TechLead gives his top lessons from 10 years of programming.  Launch your next website with http://squarespace.com/techlead and add code “TECHLEAD at checkout to save 10% off."
        timestamp="June 24, 2020"
        Channel="Techlead"
        title="Top lessons from 10 years of coding (as a software engineer)"
        image="https://i.ytimg.com/vi/6WRlMvxPlCA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAz1mGdyd5Z37AuKjCeXNQzj3vGWA"
      />

      <VideoRow
        views="38K"
        subs="1.3M"
        description="Ex-Google TechLead on crypto flash loans. Try out the Opera Crypto browser yourself, download now for free: https://opr.as/techleadx1. Also join Opera Crypto Discord community: https://opr.as/tldiscord."
        timestamp="May 19, 2020"
        Channel="Techlead"
        title="MAKING 100X on Crypto Flash Loans. INSANE PROFITS."
        image="https://i.ytimg.com/an_webp/yXqWI-uXgKY/mqdefault_6s.webp?du=3000&sqp=CIL3rZQG&rs=AOn4CLCSFPT9Wf3m4PgLS98pxMzBiflIMw"
      />
      <VideoRow
        views="51K"
        subs="1.3M"
        description="Ex-Google TechLead on why you should not code. Join ex-Google/ex-Facebook engineers for my coding interview training: https://techinterviewpro.com/
[NEW] Join me in DeFi Pro and make passive income with crypto. http://defipro.dev/"
        timestamp="May 19, 2020"
        Channel="Techlead"
        title="Why Women Should Not Code (ft. ex-Google software engineer)"
        image="https://i.ytimg.com/an_webp/BA-sLuEmUco/mqdefault_6s.webp?du=3000&sqp=CNDsrZQG&rs=AOn4CLAYw4yi6GTjCgP2SWDG988HV6py7g"
      />
      <VideoRow
        views="1M"
        subs="1.3M"
        description="Ex-Google TechLead on the war between Ukraine vs Russia... and why war is never worth it.
*NEW* Join me in DeFi Pro and make passive income with crypto"
        timestamp="Feb 22, 2020"
        Channel="Techlead"
        title="WHY I STAND WITH RUSSIA (Ukraine Russia War)"
        image="https://i.ytimg.com/an_webp/sxI8zjrbrcg/mqdefault_6s.webp?du=3000&sqp=CMj8rZQG&rs=AOn4CLBQTCEvGWCI2v8BSo4N5D2uygcWVQ"
      />
    </div>
  );
}

export default SearchPage;
