import React from 'react'
import Layout from "../Components/Layout"
import { Link } from "react-router-dom"

import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter,faMastodon,faXTwitter, faBluesky } from '@fortawesome/free-brands-svg-icons';
function Home() {
  return (
    <>
    <h1>ฅ(^◕ᴥ◕^)ฅ Introduction</h1>
    <section>
        <p>A cyber neko (<i>neko</i> in japanese means <i>cat</i>.)  who likes Programming, Manga and Anime. </p>
        <p>Currently exploring the <strong>Fediverse</strong></p>
            <p>You can follow me on:</p>
            <ul>
                <li><a rel="me" href="https://misskey.social/@programneko" target="_blank"><img id="misskeylogo" src="/misskey.svg"/> (English mostly)</a> an a
                    little japanese, that i'm learning... <em>はい日本語を勉強すます。</em></li>
                <li><a rel="me" href="https://tkz.one/@nekoprogram" target="_blank"><FontAwesomeIcon icon={faMastodon}></FontAwesomeIcon> Mastodon (In Spanish)</a></li>
                <li><a rel="me" href="https://miruku.cafe/@nekoprogram" target="_blank">Miruku.cafe (In English)</a></li>
            </ul>
            <p>Also i'm looking at  <a target="_blank" href="https://bsky.app/profile/nekoprogram.bsky.social">Bluesky <FontAwesomeIcon icon={faBluesky}>Bluesky</FontAwesomeIcon> </a></p>
            <p>Trying to <strong>DON'T USE</strong> Twitter <i className="fa fa-brands fa-tiwtter"></i>, but is very difficult... (Some Accounts that I follow
                remain in that site...)</p>
            <p>Oh nyan Now i think is called <FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon>? right?</p>
            <p>I have been in Twitter since 2014 with a different account @handle... (I don't remember it...)</p>
            <p>My previous account has been suspended without give me any reason... ( ╥ω╥ ) Rip Nekoprogram in <FontAwesomeIcon icon={faTwitter}/> / <FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon></p>
           
            <p>For this reason my new handle is <a href="https://x.com/intent/follow?screen_name=programneko" target="_blank">@programneko</a></p>
            <p>But i'll try use more often open source and decentralized social media. Centralized social media, in my opinion are very bad. </p>
    </section>
    </>
  )
}

export default Home