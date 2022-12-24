import React, { useState, useEffect, useRef } from "react"
import { BiXCircle } from "react-icons/bi"
import { VscReferences, VscGithub } from "react-icons/vsc"
const { tableau } = window;


const LyricsAndLanguage = (props) => {

    const isDesktop = window.innerWidth > 900 ? true : false

    document.documentElement.style.setProperty("--color-story", "rgb(185, 255, 234)")


    const [ref, setRef] = useState(false)
    const [fade, setFade] = useState(0)

    const handleRef = () => {
        setRef(prevRef => !prevRef)
    }

    const vizContainer = useRef();
    const vizContainer2 = useRef();
    const vizContainer3 = useRef();
    const vizContainer4 = useRef();
    const vizContainer5 = useRef();
    const vizContainer6 = useRef();
    const vizContainer7 = useRef();


    const options = {
        width: isDesktop ? "100%" : "100%",
        height: isDesktop ? "100%" : "100%",
        hideTabs: true,
    }
    const options_b = {
        width: isDesktop ? "100%" : "100%",
        height: isDesktop ? "100%" : "100%",
        hideTabs: false
    }

        const vizUrl = "https://public.tableau.com/views/songs_16325391595330/FeelingsUS?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

        const vizUrl2 = "https://public.tableau.com/views/songs_16325391595330/FeelingsTW?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

        const vizUrl3 = "https://public.tableau.com/views/songs_16325391595330/PronounsUS?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

        const vizUrl4 = "https://public.tableau.com/views/songs_16325391595330/PronounsTW?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

        const vizUrl5 = "https://public.tableau.com/views/songs_16325391595330/TopicsUS?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

        const vizUrl6 = "https://public.tableau.com/views/songs_16325391595330/TopicsTW?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

        const vizUrl7 = "https://public.tableau.com/views/songs_16325391595330/ProfanityUS?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

        
    const initViz = () => {
        let viz = new tableau.Viz(vizContainer.current, vizUrl, options)
        let viz2 = new tableau.Viz(vizContainer2.current, vizUrl2, options)
        let viz3 = new tableau.Viz(vizContainer3.current, vizUrl3, options)
        let viz4 = new tableau.Viz(vizContainer4.current, vizUrl4, options)
        let viz5 = new tableau.Viz(vizContainer5.current, vizUrl5, options)
        let viz6 = new tableau.Viz(vizContainer6.current, vizUrl6, options)
        let viz7 = new tableau.Viz(vizContainer7.current, vizUrl7, options)
    }


    useEffect(() => {
        initViz()
    }, [])

    return (
        <div className="overlay">
            <div className="overlay-exit"
                onClick={() => props.exitButtonProps(props.keyProps)}
            >
                <BiXCircle />
            </div>
            <div
                onClick={handleRef}
                onAnimationEnd={() => setFade(0)}
                fade={fade}
                className="overlay-ref-button"
                href="#ref-toggle"
            >
                <VscReferences />
            </div>

            <div className="overlay-container">
                <div className="overlay-ref" style={{ display: ref ? "block" : "none" }}>
                    <p className="ref-title">References</p>

                    <p className="ref-text">
                        <span className="glow-text">[1] Top 100 US songs of 2020:</span>
                        <br></br>
                        "YEAR-END CHARTS Hot 100 Songs"
                        <br></br>
                        <i>Billboard</i>
                        <br></br>
                        <p id="ref-link" className="ref-text">
                            <a className="ref-text" href="https://www.billboard.com/charts/year-end/2021/hot-100-songs/" target="_blank">Link</a>
                        </p>
                    </p>


                    <p className="ref-text">
                        <span className="glow-text">[2] Top 100 Taiwan songs of 2020</span>
                        <br></br>
                        "華語年度單曲累積榜"
                        <br></br>
                        KKbox
                        <br></br>
                        <p id="ref-link" className="ref-text">
                            <a className="ref-text" href="https://kma.kkbox.com/charts/yearly/newrelease?cate=297&lang=tc&terr=tw&year=2020#" target="_blank">Link</a>
                        </p>
                    </p>
                </div>

                <h2 className="overlay-text">Lyrics & Language</h2>

                <p className="overlay-subtle">Last Updated: 08/05/2022</p>
                <p className="overlay-subtle">5 min read</p>
                <p className="overlay-subtle">Code on Github <a href="https://github.com/ericdaoo/lyrics_web_scraper" target="_blank" style={{ color: "var(--color-story" }}>< VscGithub style={{ fontSize: "1.7em" }} /></a> </p>

                <div className="video-container">
                    <div className="video-wraper">
                        <iframe className="youtube" src="https://www.youtube.com/embed/eESZZ0bjBuI?autoplay=1&loop=1&mute=1&controls=1&showinfo=0&playlist=eESZZ0bjBuI" title="YouTube video player" frameborder="0" autoPlay="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                <div className="overlay-quote-container">
                    <h4 className="overlay-quote">What topics are sung about and the way they're sung in music can reveal a great deal about a culture</h4>
                </div>

                <h4 className="overlay-text">
                    Inspiration 💡
                </h4>

                <p className="overlay-text">
                Occasionally, I’ll think about and recall my initial impression of Taiwanese music when I first started learning Mandarin. At that time, I was bit surprised that a lot of the Taiwanese music that I encountered had, what I perceived to be at the time, an “overly romanticized style that relied on a formulaic use of piano and violin paired with vocals”. I eventually did find Taiwanese music that better matched my taste, but later in my language learning, I had discovered another thing that shocked me: the content of the lyrics themself.
                </p>
                <p className="overlay-text">
                    Of course the content of a song's lyrics is not necessarily representative of a country’s culture as a whole. At the same time though, some of the lyrics in Taiwanese music that I had encountered were things I truly had never heard in US music before. This is to say that at that moment, I had realized that it can be interesting to think about how in some ways, music can reflect certain aspects of a country’s culture and how different country's music can expose one to very different ideas.
                </p>
                <div className="overlay-tableau-container">
                    <div className="overlay-text-visual-container size-limit-sm">
                        <img id="crisp" src="/website/images/LyricsAndLanguage/song1.png" style={{ width: isDesktop ? "200px" : "65%", height: isDesktop ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ width: isDesktop ? "300px" : "95%", height: isDesktop ? "auto" : "auto" }}> Prior to hearing this song, I had never come across a song about a woman being so thrilled to prepare the home for their partner's arrival from work each day.
                        </p>
                    </div>
                    <div className="overlay-text-visual-container size-limit-sm">
                        <img id="crisp" src="/website/images/LyricsAndLanguage/song2.png" style={{ width: isDesktop ? "200px" : "65%", height: isDesktop ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ width: isDesktop ? "300px" : "95%", height: isDesktop ? "auto" : "auto" }}> This song showed me a very interesting example of the fact that the Chinese language has a seperate word for "you" for both male and female. The singer is essentially telling someone that whether they preferred to be referred to as "you" (male) or "you" (female), they will be fully loved by someone regardless.
                        </p>
                    </div>
                    <div className="overlay-text-visual-container size-limit-sm">
                        <img id="crisp" src="/website/images/LyricsAndLanguage/song3.png" style={{ width: isDesktop ? "200px" : "65%", height: isDesktop ? "auto" : "auto" }}></img>
                        <p className="overlay-visual-note" style={{ width: isDesktop ? "300px" : "95%", height: isDesktop ? "auto" : "auto" }}> I thought it was interesting how this singer so straightforwardly said that “men want women because it gives a sense of achievement” and “women want men because it provides a sense of security”
                        </p>
                    </div>
                </div>


                <h4 className="overlay-text">
                    Summary 📝
                </h4>
                <p className="overlay-text">
                    This project aimed to examine the lyrics of the 100 most popular songs in 2020 in the US and Taiwan. Although there certainly could be a great amount of variance in song lyrics from year to year, it was believed that unique and interesting insights could still be gained by investigating this topic. In the end, it was found that several novel differences and similarities were found among song lyrics between these two countries, as shown in the visualizations below.
                </p>


                <h4 className="overlay-text">
                    Data Sources 💾
                </h4>
                <p className="overlay-text">
                    <b>1. Lyrics from the Top Songs in Each Country</b>
                    <br></br>
                    <p className="overlay-text-indent">1A. Top 100 US songs of 2020 from <i>Billboard</i> <span className="glow-text">[1]</span></p>
                    <p className="overlay-text-indent">1B. Top 100 Taiwan songs of 2020 from <i>KKbox</i> <span className="glow-text">[2]</span></p>
                </p>


                <h4 className="overlay-text">
                    Disclaimer (factors to keep in mind) ⚠️
                </h4>
                <p className="overlay-text">
                    - The type of songs that are ranked most popular in a country are not necessarily representative of all the music listened to in a country.
                    <br></br>
                    - Any one song's lyrics in a pariticular year can greatly skew the overall lyric words frequency distribution.
                    <br></br>
                    - Language is incredibly complex and nuanced. As such, my ability to use tools to dissect and analyze Chinese lyrics is limited by my Chinese ability.
                </p>


                <h4 className="overlay-text">
                    Final Visualization 🖼
                </h4>
                {/* <div className="overlay-title-container-border"> */}
                <h4 className="overlay-title-b">Feels</h4>
                <p className="overlay-text-b">
                    Words specifically related to feelings and emotions were compiled for this visualization. Perhaps a bit unsurprisingly, lyrics from both country’s music sample most referenced positive emotion words, like “love”, “want”, and “feel” (categorized in warmer shades of colors). An interesting difference noticed is that lyrics in US music seemed to include a broader range of words related to emotions not seen in the lyrics of Taiwanese music, such as “hate” and “suicidal”. Overall though, there was a great amount of overlap in feeling related words between the two country’s music lyrics.
                </p>
                {/* </div> */}
                <div className="overlay-tableau-container">

                    <div className="overlay-text-visual-container">
                        <p className="overlay-title"> <span className="highlight2">  US Music</span></p>
                        <div ref={vizContainer} className="overlay-tableau" style={{ width: isDesktop ? "590px" : "100%", height: isDesktop ? "600px" : "500px" }}></div>
                    </div>
                    <div className="overlay-text-visual-container">
                        <p className="overlay-title"> <span className="highlight2">  Taiwan Music</span></p>
                        <div ref={vizContainer2} className="overlay-tableau" style={{ width: isDesktop ? "590px" : "100%", height: isDesktop ? "600px" : "500px" }}></div>
                    </div>
                    <div className="overlay-title-container">

                    </div>
                </div>
                <h4 className="overlay-title-b">Who</h4>
                <p className="overlay-text-b">
                    This visualization included only pronouns. Both country’s music sample had almost an identical composition ratio for each pronoun.
                </p>
                <div className="overlay-tableau-container">
                    <div className="overlay-text-visual-container">
                        <p className="overlay-title"> <span className="highlight2">  US Music</span></p>
                        <div ref={vizContainer3} className="overlay-tableau" style={{ width: isDesktop ? "590px" : "100%", height: isDesktop ? "400px" : "250px" }}></div>
                    </div>
                    <div className="overlay-text-visual-container">
                        <p className="overlay-title"> <span className="highlight2">  Taiwan Music</span></p>
                        <div ref={vizContainer4} className="overlay-tableau" style={{ width: isDesktop ? "590px" : "100%", height: isDesktop ? "400px" : "250px" }}></div>
                    </div>

                </div>
                <h4 className="overlay-title-b">Topics </h4>
                <p className="overlay-text-b">
                    For this visualization, the most referenced nouns were chosen from each country’s music sample. Verbs and emotion related words were mostly excluded to differentiate this visualization from the feelings-related words visualization.
                    {/* This might be entirely my own opinion, but this visualization aligns with my impression that Taiwanese music tends to  */}
                </p>
                <div className="overlay-tableau-container">
                    <div className="overlay-text-visual-container">
                        <p className="overlay-title"> <span className="highlight2">  US Music</span></p>
                        <div ref={vizContainer5} className="overlay-tableau" style={{ width: isDesktop ? "590px" : "100%", height: isDesktop ? "600px" : "400px" }}></div>
                    </div>
                    <div className="overlay-text-visual-container">
                        <p className="overlay-title"> <span className="highlight2">  Taiwan Music</span></p>
                        <div ref={vizContainer6} className="overlay-tableau" style={{ width: isDesktop ? "590px" : "100%", height: isDesktop ? "600px" : "400px" }}></div>
                    </div>

                </div>
                <h4 className="overlay-title-b">Profanity </h4>
                <p className="overlay-text-b">
                    An obvious difference noticed between both samples of music from the US and Taiwan is that the Taiwanese music sample rarely, if at all, references profanity. Whereas, the lyrics from the US music sample referenced profanity quite frequently. So much so that some were in the top 10 most referenced words in general (the earlier US music visualizations excluded profanity. If had been included, many of these words would have occupied the top spots)
                </p>
                <div className="overlay-tableau-container">
                    <div className="overlay-text-visual-container">
                        <p className="overlay-title"> <span className="highlight2">  US Music</span></p>
                        <div ref={vizContainer7} className="overlay-tableau" style={{ width: isDesktop ? "590px" : "100%", height: isDesktop ? "400px" : "400px" }}></div>
                    </div>

                </div>



                <h4 className="overlay-text">
                    Methodology ⚙️
                </h4>
                <p className="overlay-text">
                    The top 100 songs for each country were pulled from webpages from the following two large music-focused companies: Billboard and KKBox. Web scraping scripts were created with Python to automate the process of pulling lyric text from each of the 100 hundred songs from each webpage. Afterwards, language specific word segmentation python packages were utilized to break up the lyric text into individual English words and Chinese characters, ultimately, to create a word frequency distribution. Finally, these word frequency distributions were manually reviewed to create the four word category visualizations above. Further details about the methodology can be found in the script source code in the Github link at the top of the page.
                </p>



                {/* <h4 className="overlay-text">
                    Quotes 🎤
                </h4>
                <div className="overlay-quote-container">
                    <h4 className="overlay-quote">
                        "[Quote]"
                    </h4>
                    <h4 className="overlay-quote-name">
                        - [Quote]
                    </h4>
                </div> */}


                <h4 className="overlay-text">
                    Summary and Takeway 📝
                </h4>
                <p className="overlay-text">
                This project aimed to examine the lyrics of the 100 most popular songs in 2020 in the US and Taiwan. Given the immense complexity and nuance of language, it was challenging to investigate how differences in song lyrics between two countries could serve as evidence of broader cultural similarities and differences. Overall, this research serves as a foundation that reveals basic comparisons in word usage between each country’s song lyrics. In the future, more advanced natural language processing and machine learning can be applied to further investigate novel findings in lyric differences between the two languages and countries. 
                </p>
                <p className="overlay-text">

                </p>

                <h4 className="overlay-text">
                    Q & A  🙋‍♀️🙋‍♂️
                </h4>
                <p id="q-a" className="overlay-text">
                    <span className="glow-text">Q: </span>
                     Given the fact that a single song’s lyrics could potentially skew the overall top 100 song lyric frequency distribution, could anything be done to limit bias in the song lyric data?
                    <br></br>
                    <span className="glow-text">A: </span>
                    One possible solution that is being considered is simply increasing the sample size by either pulling more song lyric data from other sources or by obtaining song lyric data over a several year timespan. Furthermore, lyric word outliers can be removed manually or by creating a rule based system in which for each song, a preset maximum word count limit for any particular word in the song can be put into place. 
                </p>

                <p id="q-a" className="overlay-text">
                    <span className="glow-text">Q:</span> I would like to offer feedback or ask a question. How can I get in contact with you?
                    <br></br>
                    <span className="glow-text">A:</span> Please visit the following link and write a comment: <a href="https://github.com/ericdaoo/website/discussions/1" target="_blank"> Link </a>
                </p>
            </div>


        </div >
    )
}

export default LyricsAndLanguage


// 23
// 2352
// 223.5 KB
// 1.17 MB
// 1
// 預覽
// 標頭
// Cookie
// 大小
// 時間
// 安全性
// 摘要
// URL: https://public.tableau.com/views/songs_16325391595330/FeelingsUS?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link&:embed=y&:showVizHome=n&:tabs=n&:apiID=host0
// 狀態: 504
// 來源: 網路

// 要求
// :method
// :scheme: https
// :authority: public.tableau.com
// :path: /views/songs_16325391595330/FeelingsUS?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link&:embed=y&:showVizHome=n&:tabs=n&:apiID=host0

// 回應
// :status: 504
// Content-Type: text/html; charset=utf-8
// Via: 1.1 191d4b07c4ff3e2c7cfeea67e1eb00f0.cloudfront.net (CloudFront)
// Date: Mon, 31 Oct 2022 23:52:36 GMT
// Content-Length: 92
// Cache-Control: no-cache
// Server: nginx
// x-cache: Error from cloudfront
// x-amz-cf-pop: PHL50-C1
// x-amz-cf-id: aIpczVsxaA1yixMJ8t1b-JnWZQTukmPyZ1moGRN2OYYfanW_e_h1LA==

// 查詢字串參數
// :language: en-US
// publish: yes
// :display_count: n
// :origin: viz_share_link
// :embed: y
// :showVizHome: n
// :tabs: n
// :apiID: host0