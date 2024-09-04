import React from 'react'
import Layout from "../Components/Layout"
import { Link } from "react-router-dom"

import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faMastodon, faXTwitter, faBluesky } from '@fortawesome/free-brands-svg-icons';
function Home() {
  return (
    <>
      <h1>ฅ(^◕ᴥ◕^)ฅ Introduction</h1>
      <section>
        <p>A cyber neko (<i>neko</i> in japanese means <i>cat</i>.)  who likes Programming, Manga and Anime. </p>
        <p>Currently exploring the <strong>Fediverse</strong></p>
        <p>You can follow me on:</p>
        <section className='container-sns'>
          <div className="hcard">
            <header>
              <h3><a rel="me" href="https://misskey.social/@programneko" target="_blank">Misskey Social</a><span class="nsfw">(NSFW / Hentai)</span></h3>
            </header>
          </div>
          <div className="hcard">
            <header>
              <h3><a rel="me" href="https://aethy.com/@nekoprogram_nsfw" target="_blank">Aethy</a><span class="nsfw">(NSFW / Hentai)</span></h3>
            </header>
          </div>
          <div className="hcard">
            <header>
              <h3><a rel="me" href="https://miruku.cafe/@nekoprogram" target="_blank">Miruku.cafe (In English)</a>(SFW)</h3>
            </header>
          </div>
          <div className="hcard">
            <header>
              <h3><a rel="me" href="https://masto.es/@nekoprogram" target="_blank">Mastodon (In Spanish)</a>(SFW)</h3>
             
            </header>
          </div>

        </section>
        <p>Why so many accounts in diferent instances?</p>
        <p>Because mainly i don't like who fediverse works, an admin can block other instances and me as user i wish to follow any account on fedi</p>
        <p>I now that the <b>perfect solution</b> is set up my own instance and i'll do someday but for now i cannot buy a domain T_T</p>
        <hr/>
        <p>Also i'm looking at  <a target="_blank" href="https://bsky.app/profile/nekoprogram.bsky.social">Bluesky <FontAwesomeIcon icon={faBluesky}>Bluesky</FontAwesomeIcon> </a></p>
        <p>Trying to <strong>DON'T USE</strong> Twitter <i className="fa fa-brands fa-tiwtter"></i>, but is very difficult... (Some Accounts that I follow
          remain in that site...)</p>
        <p>Oh nyan Now i think is called <FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon>? right?</p>
        <p>I have been in Twitter since 2014 with a different account @handle... (I don't remember it...)</p>
        <p>My previous account has been suspended without give me any reason... ( ╥ω╥ ) Rip Nekoprogram in <FontAwesomeIcon icon={faTwitter} /> / <FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon></p>

        <p>For this reason my new handle is <a href="https://x.com/intent/follow?screen_name=nekoprogramx" target="_blank">@nekoprogramx</a></p>
        <p>But i'll try use more often open source and decentralized social media. Centralized social media, in my opinion are very bad. </p>
      </section>
    </>
  )
}

export default Home