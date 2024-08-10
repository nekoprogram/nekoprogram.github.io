import React from 'react'
import './Animes.css'
import { Link } from 'react-router-dom'
function AnimesPage() {
    return (
        <div
        >
            <h3>Animes</h3>
            <section id="introanimes">
                <p>How I started watching anime?</p>
                <p>When I was doing my internship, a classmate of mine showed me an anime series (Prison School) and I liked it....</p>
                <p>My favourite animes are</p>

            </section>
            <section id="container">
                <div className='card'>
                    <img src="/higurashi.jpg" alt="Higurashi anime 2006" />
                    <p>Higurashi No Naku Koro Ni</p>
                    <p>Higurashi When They Cry</p>
                    <a href="https://myanimelist.net/anime/934/Higurashi_no_Naku_Koro_ni" target='_blank'>MyAnimeList</a>
                    <div id="danger">
                        <h4>Be Careful!</h4>
                        <p>This anime has an order to watch it!</p>
                    </div>
                    <div>
                        <h4>Order of Higurashi When They Cry Anime</h4>
                        <br></br>
                        <ol>
                            <li>Higurashi No Naku Koro Ni (2006)</li>
                            <li>Higurashi No Naku Koro Ni KAI (2007)</li>
                            <li>Higurashi No Naku Koro Ni REI (2009) </li>
                            <li>Higurashi No Naku Koro Ni GOU (2020)</li>
                            <li>Higurashi No Naku Koro Ni SOTSU (2021)</li>
                        </ol>
                        <p>After that, i recommend you to read umineko</p>
                        <p> but please PLEASE DON'T WATCH UMINEKO ANIME</p>
                        <p>Because anime is incomplete and very very bad</p>
                        <p>instead you can read the manga or the visual novel</p>

                    </div>
                </div>

                <div className='card'>
                    <img src="/steins_gate.jpg" alt='Steins;gate' />
                    <p>Steins;Gate</p>
                    <a href="https://myanimelist.net/anime/9253/Steins_Gate" target='_blank'>MyAnimeList</a>
                    <p><i>It's the choice of Steins Gate. </i>- Okabe Rintaro</p>
                </div>

                <div className='card'>
                    <img src="/madoka_magica.jpg" alt='Madoka Magica Anime' />
                    <p>Puella Magi Madoka Magica</p>
                    <a href="https://myanimelist.net/anime/9756/Mahou_Shoujo_Madoka%E2%98%85Magica" target='blank'>MyAnimeList</a>
                </div>

                <div className='card'>
                    <img src="/frieren.jpg" alt='Sousou no Frieren' />
                    <p>Sousou No Frieren</p>
                    <a href='https://myanimelist.net/anime/52991/Sousou_no_Frieren' target='blank'>MyAnimeList</a>
                </div>
            </section>
            <section>

            </section>
        </div>

    )
}

export default AnimesPage