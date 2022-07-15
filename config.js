var config = {
    style: 'mapbox://styles/mapbox/dark-v10',
    accessToken: 'pk.eyJ1IjoicGFydGhhcm9yYSIsImEiOiJjbDFvZDQxdjUxMmJyM2xtbWhpeTEyZjg1In0.vbx5Kxy0LlDtHgb-4aU3lA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Mind the GAP',
    subtitle: 'A Ride through Hong Kong\'s History',
    byline: 'By Parth, Ethan, Emily, Vonesha, Emre, Asante',
    footer: 'Thanks for riding with us!!',
    page1Heading : 'Heading', 
    page1SubHeading : "Sub Heading", 
    page1ImgSrc : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg/687px-Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg",
    page1Text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    chapters: [
        {
            id: 'zero',
            alignment: 'left',
            hidden: false,
            title: 'Introduction',
            image: '',
            description: 'Welcome aboard our adaptation “mind the gap.” This adaptation ties into the metaphor of the crack between the train and the platform referred to in <i>A Crack in Space</i> by Xu Xi, and the personification of Hong Kong in <i>A Short History of Our Shores</i> by Xu Xi to bring to light an important perspective of Hong Kong, the people’s perspective. The people that make up Hong Kong and are living the day-to-day realities of Hong Kong. Through this adaptation, we give the microphone to the people to reveal Hong Kong’s stories through anecdotes and personal experiences backed up by historical context.<br>Please follow along the train’s journey to learn more about the events of Hong Kong from historical and anecdotal contexts.<br>DISCLAIMER: We have no personal connections to the narratives and stories presented in this piece. These are all based on our own interpretations and adaptation of the text.',
            location: {
                center: [114.19701, 22.26246],
                zoom: 12.96,
                pitch: 38.47,
                bearing: -44.40,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'first',
            alignment: 'right',
            hidden: false,
            title: 'One IFC and Two IFC',
            image: '',
            description: 'The International Financial Centre (IFC) in Hong Kong opened in 1998 and its buildings are branded as “One ifc” and “Two ifc.” When the first building was completed, in 1998, Hong Kong was one of the entities hit by the 1997 Asian Financial Crisis (AFC), shortly after it was ceded by the UK. The second was completed in 2003, during the SARS epidemic. Hong Kong’s economy prior to the AFC was referred to as a “Tiger” economy, one characterized by rapid growth. The onset of the crisis was described as an attack on various Asian currencies, or a devaluation based on poor government practices. Hong Kong’s economy was again affected during the SARS epidemic. In a <i>Short History of our Shores</i>, Xu Xi hints to Hong Kong’s resilience through the AFC as well as the SARS epidemic with her portrayal of the IFC buildings.<br><br><a href="pages/page1.html"><button type="button" onclick="pageLoad(1)" class="btn btn-outline-light">Know More</button></a>',
            location: {
                center: [114.15865, 22.28520],
                zoom: 18.22,
                pitch: 45.00,
                bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second',
            alignment: 'left',
            hidden: false,
            title: 'Hong Kong Convention and Exhibition Centre',
            image: '',
            description: 'On July 1st of 1997, the U.K. handed control over Hong Kong to China at midnight Hong Kong Time. This handover was stipulated by the Sino-British Joint Declaration, which stated that China would be handed over control over Hong Kong in 1997 for a 50-year period, signed by the U.K. and China in 1984. Hong Kong was handed over from Chris Patten, the last governor, to Tung Chee-hwa, the Chief Executive of Hong Kong. A grand ceremony was held throughout the night of the handover. A huge firework display was lit up at around 8pm on June 30th. Guests sat down at the Convention Centre, while Chinese troops crossed the land border into the region. The Hong Kong Democratic Party demonstrated outside the Legislative Council. This, however, didn’t delay the inauguration of the new Special Administrative Region government. Tung Chee-hwa was sworn in as the new leader of Hong Kong.<br><br><a href="pages/page2.html"><button type="button" onclick="pageLoad(2)" class="btn btn-outline-light">Know More</button></a>',
            location: {
                center: [114.17264, 22.28290],
                zoom: 18.22,
                pitch: 45.00,
                bearing: 0.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third',
            alignment: 'right',
            hidden: false,
            title: 'ICAC: Independent Commision Against Corruption',
            image: '',
            description: 'Post WW2, Hong Kong was quickly developing into a bustling economic region after its recovery from the damage that WW2 had done. However, as Hong Kong’s economy bustled, its industries were ripe with corruption from managers and officials rampant. Though Hong Kong at the time had its own independent police force department against corruption, it was proving to do little to stop corruption. As a result of this, the UK government stepped in and decided to create the ICAC, which had the goal of reducing the rampant corruption in Hong Kong.  However, Xu Xi, and the rest of Hong Kong, did not look upon this organization with favor, in her book, even proclaiming that they were just as vulnerable as they had started. There was much controversy in the Hong Kong about whether the commission influenced the reduction of corruption in Hong Kong industry, statistics did show that it was effective in reducing corruption in Hong Kong. However, it was soon uncovered that the commission itself was ripe with corruption, mostly with regards to money corruption and accounting schemes. While its existence undoubtably gave an avenue for everyday citizens to report corruption and lowered its effect in industry, its public image has often consisted of an organization that had rampant corruption, which was extremely detrimental to public trust and its perceived impact in making Hong Kong appear as a fair and equitably governed country. In a more historical sense of the city, Xi looks at the ICAC as another event in the city’s long history of occupation. As the ICAC’s head is appointed by Chinese government Hong Kong’s hand against corruption is still, in a sense, under the control of outsiders. Though corruption may go down, its history as a city occupied begins to look more like its fate.<br><br><a href="pages/page3.html"><button type="button" onclick="pageLoad(3)" class="btn btn-outline-light">Know More</button></a>',
            location: {
                center: [114.20559, 22.29297],
                zoom: 18.22,
                pitch: 45.00,
                bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth',
            alignment: 'left',
            hidden: false,
            title: 'Victoria Park, Hong Kong Island',
            image: '',
            description: 'On June Fourth, 1989, a series of one of the largest demonstrations and marches in Hong Kong broke out in 1989, led by students, as an outcry for political and economic reform. These protests are now referred to as the Tiananmen Square protests.  At the time, the government pushed an economic system that was advantageous to some but severely damaging to others. This system called into question the legitimacy of the one-party government system as well and became a catalyst for more individual freedoms for the people and political liberalization. Students joined by other citizens gathered demanding political and social reforms and though it started at the square, protesting groups formed all throughout China. Up to a million members came together to fight for this cause and it was a major turning point in Hong Kong’s history. The government acted by enforcing martial law and troops killed thousands of protestors and to this day they are commemorated through vigils. Through the 1990s Hong Kong citizens continued to hold commemorations for the Tiananmen Massacre in areas like Victoria Park. But this protest revolution carried through to the handover in 1997 and many protests demanding change are now organized by larger organization groups working towards democratic reform in the government such as the Civil Human Rights Front and the Hong Kong Alliance of Patriotic Democratic Movements of China. Protests remain to be a major channel for the voices of citizens to be heard and many of these protests revolve around economic reform and unfair laws in government.<br><br><a href="pages/page4.html"><button type="button" onclick="pageLoad(4)" class="btn btn-outline-light">Know More</button></a>',
            location: {
                center: [114.18886, 22.28219],
                zoom: 18.22,
                pitch: 45.00,
                bearing: 0.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth',
            alignment: 'right',
            hidden: false,
            title: 'Tian Tan Buddha 1841',
            image: '',
            description: 'Hong Kong is a pious and superstitious state compared to mainland China. There is religious diversity due to its colonial history throughout which they have been exposed to many religions, and people are free to believe in whichever religion they desire. About 54% of the population follows Chinese beliefs, whether it be Confucianism, Taoism, or Han Buddhism. There is also a portion that follows Christianity or Islam, which have been introduced due to the colonial rule of Britain. The British had tried to promote Christianity during its rule by introducing Catholicism and Protestantism in 1841; however, the people of Hong Kong stayed true to Chinese customs and traditions in the end. Even though modern-day China might have distanced itself from religion and customs, Hong Kong with its countless temples and monuments clings to its culture.<br><br><a href="pages/page5.html"><button type="button" onclick="pageLoad(5)" class="btn btn-outline-light">Know More</button></a>',
            location: {
                center: [113.90508, 22.25403],
                zoom: 18.22,
                pitch: 45.00,
                bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth',
            alignment: 'fully',
            hidden: false,
            title: 'Conclusion',
            image: '',
            description: '請小心列車與月台間之空隙 <br><i>\’Please have a little heart for the crack in space from the train to platform.\’</i><br>Please mind the gap and thank you for riding with us. We hope you learned a lot about Hong Kong from this adaptation.  ',
            location: {
                center: [114.19701, 22.26246],
                zoom: 12.96,
                pitch: 38.47,
                bearing: -44.40,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]

};
