import Artist from "./artist.js"

// id,name,surname,artworkTitle,bildCredit,description,website,video,image,date

const anastasi = new Artist(
    "Anastasi",
    "William",
    "Anastasi",
    "William Anastasi, Free Will, 1968/2019",
    "William Anastasi, Free Will, 1968/2019, video camera, monitor, Thomas Rehbein Galerie, 2019 © Thomas Rehbein Galerie, Foto: Simon Vogel",
    "In Free Will (1968) a self-referential cycle is found. A video camera is mounted on a television monitor and aimed at a corner of the room, which records the corner. The resulting image is transmitted on the TV monitor. The immediately perceived spatial reality is further experienced on a representation level, so that a duplication ensues: one sees in the screen the image of the corner one would see without the screen standing on the same spot. For Anastasi, representation is exempt from any romantic notion of art, but involves reiterating the simplest or the “dumbest” that can be reproduced. It does not describe or refer to anything situated beyond itself. In these closed systems of self-sameness and repetition - the title “Free Will” proves to be an ironic commentary on tautological inevitability and the lack of open, or free, interpretation - the distinction between image and extra-pictorial reality dissolve, just as language and extra-verbal reference coincide.",
    null,
    null,
    "./images/Anastasi/01.jpg",
    "1968/2019"
)

const aliMoravec = new Artist(
    "MoravecMatej",
    "Matej Al-Ali",
    "Tomáš Moravec",
    "Tomáš Moravec & Matej Al-Ali, Shift (Linz edition), 2019",
    "Tomáš Moravec & Matej Al-Ali, Shift (Linz edition), 2019, Realized as part of Linz FMR 2019 festival. mobile video-sculpture, dimensions: 200x180x400 cm",
    "Shift is a common project of Matej Al-Ali and Tomáš Moravec. It combines a moving video-sculpture and performance on predefined trajectory. A vehicle, carrying two video projections on the end faces is operated by performers and moves back and forth following a straight track. Video-projections are interconnected with the physical movement of a vehicle. Performers are leading trajectory in both realms - reality and virtual space of video at the same time. Thus the movement is present in both forms - physical and digital. While the vehicle is put into motion projections reveal a virtual space. The vehicle with its pendular trajectory slowly moves between start and end position. This physical interval corresponds with a virtual length of a video timeline. The “Shift” project works with the term “moving image” literally. For visitors are encouraged to follow the vehicle in order to see the full length of the moving image along its trajectory at Linz FMR festival.",
    ["http://tomasmoravec.cz/", "http://alali.cz/"],
    "https://vimeo.com/388506679",
    null,
    1968
)

const bainbridge = new Artist(
    "bainbridge",
    "Benton",
    "C Bainbridge",
    "Benton C Bainbridge, Fake Flag, 2019",
    "Benton C Bainbridge, Fake Flag, 2019, video sculpture, CRT monitors, media players, cables & adapters, singular edition © the artist",
    "Benton C Bainbridge’s video sculpture Fake Flag (a.k.a. AImurica) is, in the words of the artist, “a multichannel media artwork that evokes the U.S. flag with low-resolution, analog image-processed video. The electronic ‘flag’ teeters on the edge of recognizability, much like our country. \n Fake Flag's abstractions were made with analog synthesizer logic circuits. Bainbridge says: \"the work reflects my anger, my fear and confusion as so many Americans cheer the greedy usurpers who wish to transform this nation into a fascist oligarchy ruled with algorithms.\"",
    "https://bentoncbainbridge.com",
    "https://youtu.be/uBMYA3Gc1tE",
    ["./images/Bainbridge/01.jpg", "./images/Bainbridge/02.jpg"],
    2019
)

const balve = new Artist(
    "balve",
    "Frank",
    "Balve",
    "Frank Balve, The Hide, 2017",
    "Frank Balve, The Hide, 2017, large-scale media installation, wood, textile, barb wire © the artist",
    "The work is a large-scale media installation composed of two sculptural elements, one of which is a free-floating barrel consisting of 30 equal-sized TVs. These are linearly arranged in groups of three around the barrel, like the windows of a slot machine. Displayed are rotating gambling symbols (lemon, melon, the number 7, etc.) and staccato light passages. The wheel is 2 x 2 meters. The second element is a doll, situated in a corner on the floor. Its color matches that of the wheel. The doll is 1.80 x 0.60 meters. The sculptures and statues are accompanied by a sound installation. This sound collage consists of gaming operation sounds from casinos. The subject of gambling is the starting point for the sound installation. Frank Balve explores the aspect of gambling and its effect on operators and visitors (addiction). An additional topic he addresses is the veneer of society and diversion of historical facts.",
    "https://frankbalve.de/the-hide/",
    "https://www.youtube.com/watch?v=70TzYKsSA3I",
    ["./images/Balve/01.jpg","./images/Balve/02.jpg","./images/Balve/03.jpg","./images/Balve/04.jpg"],
    2017
)

const barciaColombo = new Artist(
    "barcia",
    "Barcia Colombo",
    "Gabriel",
    "Gabriel Barcia-Colombo, Tube II, 2015",
    "Gabriel Barcia-Colombo, Tube II, 2015, video sculpture © the artist",
    "Tube II is a video sculpture depicting a relationship trapped somewhere between the physical and digital world. The piece references the transition from analogue to digital TV as a metaphor for the fact that our relationships exist somewhere between real life and online. Tube II is a video sculpture that continually changes over time, breaking the static form of the screen.",
    "https://www.gabebc.com/tube-ii",
    "https://vimeo.com/69434456",
    ["./images/Barcia-Colombo/01.jpg"],
    2015,
    3
)

const brewer = new Artist(
    "brewer",
    "Kelsey",
    "S. Brewer",
    "Kelsey S. Brewer, Narciss/us Vanities, 2018",
    "Kelsey S. Brewer, Narciss/us Vanities, 2018, 78 x 31.5 x 8 in, wood, acrylic, hardware, paint, hydrocal, combustion, tv monitors, camcorders, cables © the artist",
    "Two identical burnt vanities with mirrors face each other across a distance. When visitors approach  the mirror, they see a live video feed of the back of their own heads, creating an infinite, fractal-like series of distorted reflections. The sculptures force viewers into an uncanny valley between perception and expectation, echoing the traumatic symptoms of depersonalization and derealization - feeling removed from oneself and/ or from reality. Their oppressive height, combined with their overbearing surveillance of participants, make them aggressors within the implied narrative of the surrounding audio-visual installation, Doubled Up in Your Image.",
    "ksbrewer.com",
    "https://vimeo.com/376706248",
    [".images/Brewer/01.jpg", ".images/Brewer/02.jpg", ".images/Brewer/03.jpg"],
    2018,
    4
)

const cannestra = new Artist(
    "cannestra",
    "Amy",
    "Cannestra",
    "Amy Cannestra, ODB: Reaching, 2020",
    "Amy Cannestra, ODB: Reaching, 2020, sculpture, video © the artist",
    "ODB: reaching is part of a sculpture, video, and drawing series called On a Daily Basis (or ODB); work that prods at stream of consciousness and the every day.\n Reaching explores the struggle for unattainable perfection, motivated by fleeting moments of self-love and self-hatred, and the search for a balance that doesn't exist between our self- image and our interpretation of others' expectations.\n We continue to reach for unattainable perfection because the alternative is a terrifying and unknown abyss. Reaching can distort who we are in order to meet our perception of others' expectations, motivated both by the fear that first impressions are made in seconds, and the bliss that comes from moments of pure self-esteem and confidence.",
    "amycannestra.com",
    "https://youtu.be/C3TLR-FrmKE",
    [".images/Cannestra/01.jpg", ".images/Cannestra/02.jpg", ".images/Cannestra/03.jpg"],
    2020
)

const chabrowski = new Artist(
    "chabrowski",
    "Yvan",
    "Chabrowski",
    "Yvon Chabrowski, TOUCHING THE IMAGES, 2016",
    "Yvon Chabrowski, TOUCHING THE IMAGES, 2016, one channel video installation, HD-loop, 56:00 min, color, sound, 92 cm x 55 cm, life-size on a free hanging 40 inch monitor, 2017 © Yvon Chabrowski & VG Bildkunst, 2020",
    "Floods of images and streams of sensory impressions inundate the spaces for thought in a society steeped in communication. In contact with the sensory interfaces of our devices, we develop a private, almost intimate, relationship to these devices, which in turn leads us to forget them and ultimately replace our perception of self. The resulting immersive proximity almost entirely supplants what was originally the communicative function of the media. Yvon Chabrowski’s work Touching the Images addresses precisely this sensory relationship between the medium and the user, and the associated ambivalence with respect to image production and sensory experience.",
    "chabrowski.info",
    "https://vimeo.com/278820374",
    [".images/Chabrowski/01.jpg", ".images/Chabrowski/02.jpg", ".images/Chabrowski/03.jpg"],
    2016
)

const conolly = new Artist(
    "conolly",
    "James",
    "Conolly",
    "James Conolly, Phasing the Electromagnetic Flux of Another Shit Moment, February 4, 2020",
    "James Conolly, Phasing the Electromagnetic Flux of Another Shit Moment, February 4, 2020, Digital video, 1080p, 5:41 min © the artist",
    "Phasing The Electromagnetic Flux of Another Shit Moment, February 4, 2020 documents the very first studio experiments of a new four channel phase-controlled electromagnetic cathode ray tube hack. Using video of anti-intellectual racist Rush Limbaugh receiving the presidential medal of honor at Donald Trump’s 2020 state of the union, sequentially phased simple and complex low frequency waveforms are sent to four handmade electromagnets surrounding the electron guns of a VGA computer monitor. Mixing the video feed with electronic and electromagnetic noise and visuals, a shit spectacle is impotently but cathartically processed and disrupted.",
    "jameshconnolly.com",
    "https://vimeo.com/391420915/702eeb52a0",
    [".images/Conolly/01.jpg", ".images/Conolly/02.jpg", ".images/Conolly/03.jpg"],
    2020
)

const cooley = new Artist(
    "cooley",
    "Kevin",
    "Cooley",
    "Kevin Cooley,  Fallen Water, 2016",
    "Kevin Cooley,  Fallen Water, 2016, 32 channel video installation © the artist",
    "Fallen Water – Niagara Escarpment brings our attention to the worsening global freshwater crisis through an exploration of local waterfalls and waterways flowing towards Lake Ontario. Separate videos on each of the 32 video screens that form this towering structure display a small video vignette from individual waterfalls along the geologic formation known as the Niagara Escarpment. Videos from Eugenia, Webster, Decew, Niagara Falls, and many others, coalesce into a video and sound installation in the central corridor of Brookfield Place in downtown Toronto. The project ultimately reflects upon the disparate and widespread origin of the province of Ontario's water which makes up one-fifth of the world's remaining fresh water.",
    "kevincooley.net",
    "https://vimeo.com/238134065",
    [".images/Cooley/01.jpg", ".images/Cooley/02.jpg", ".images/Cooley/03.jpg"],
    2016
)

const darimalz = new Artist(
    "darimalz",
    "D'arcy",
    "Darimalz",
    "D'arcy Darilmaz, #rip, 2019",
    "D'arcy Darilmaz, #rip, 2019, video sculpture, mobile phone and tablet © the artist",
    "The video sculpture #rip (2019) explores a strange relationship between digitality and memorialisation, focusing specifically on the grave of Andy Warhol in Pittsburgh, USA, which is screened 24/7 on EarthCam.com, and the peculiar culture of selfie-taking and family photo-posing that surrounds the gravesite. The connection between the physical pilgrimage to the grave and the digital communication of those experiences is considered through the videos presented on a mobile phone and tablet. Using found footage, videos collected through long-distance connections, and imagery accumulated from social media, the work attempts to convey the fast-paced nature of the technology alongside quieter, more reflective moments at the site which is simultaneously a physical, intimate space and a fluid, pixelated digital transmission on a screen.",
    "darcydarilmaz.wixsite.com",
    "https://www.youtube.com/watch?v=WfZ-C4FUZtA&t=27s",
    [".images/Darimalz/01.jpg", ".images/Darimalz/02.jpg", ".images/Darimalz/03.jpg", ".images/Darimalz/04.jpg"],
    2019
)

const ebert = new Artist(
    "ebert",
    "Manja",
    "Ebert",
    "Manja Ebert, sleepingsquad, 2016",
    "Manja Ebert, sleepingsquad, 2016, multiscreen sculpture © the artist",
    "The sculptural video installation sleepingsquad includes videos from the community platform younow.com, on which people are live streaming during their sleep. Perform life. Always on. Due to this motto of modern society the protagonists actively frame their selves to perform one of the last private, unconscious and unveiled act in modern society for the camera – their own sleep. Being arranged in a group of sleepers they offer an uncontrolled insight into their rooms and private life and the streams become a collective sleeping selfie.",
    "manjaebert.de",
    "https://vimeo.com/386947745",
    [".images/Ebert/01.jpg", ".images/Ebert/02.jpg", ".images/Ebert/03.jpg", ".images/Ebert/04.jpg"],
    2016
)

const everett = new Artist(
    "everett",
    "Daniel",
    "Everett",
    "Daniel Everett, Subway, 2020",
    "Daniel Everett, Subway, 2020, screens, scaffolding © the artist",
    "My work explores the potential for meaning within the banality of our modern landscape. I’m interested in the divide between an idealized vision of progress and the physical reality of the structures and objects left in its wake. In my work I tend to embrace blandness and uniformity as both a subject matter and an aesthetic value. Within a broader exploration of anonymous space, I use my art as a way of sorting through my ambivalence towards the ideals of order and perfection.",
    "daniel-everett.com",
    "https://youtu.be/Jo1W2VPUouw",
    [".images/Everett/01.jpg"],
    2020
)

const exonemo = new Artist(
    "exonemo",
    "Exonemo",
    null,
    "Exonemo, The Kiss, 2019",
    "Exonemo, The Kiss, 2019, LCD monitors, 3D printed sculpture, wood, metal framework, media player, 2,5 x 2,5 x 3,7 m © the artists",
    "Over the past ten-odd years, it has become a natural habit of sorts that we hold smartphones in our hands. Such devices have become objects that are so close to our bodies that they are now almost parts of it. Never before have we been moved as strongly as by the flood of information that spills over from their small screens, and that has introduced entirely new forms of meeting, passing and parting with others. This work was inspired by the question of what a monument would have to be like to function as a symbol of our age. While the sculpture of large hands itself is reminiscent of enlightening socialist monuments, the screens these hands hold up are facing each other to make it look as if the faces shown on them were kissing. However one may also see them as two separate images of people that just happened to have their eyes closed. The video footage was recorded during the open studio in Brooklyn, NY aiming to include diverse people from different races, genders, and ages. The fact that the hand sculpture is easy to copy and scale, as that part was created by outputting data using a 3-D printer, gives the sculpture a sort of lightness that is yet different from that of enlightening monuments, and thereby adds a notion of uncertainty to the things this work symbolizes.",
    "exonemo.com",
    "https://vimeo.com/353262445",
    [".images/Exonemo/01.jpg", ".images/Exonemo/02.jpg", ".images/Exonemo/03.jpg"],
    2019
)

const fake = new Artist(
    "fake",
    "Stefano",
    "Fake",
    "Stefano Fake, Memory and Desire, 2019",
    "Stefano Fake, Memory and Desire, 2019, mixed media sculpture © the artist",
    "The mixed media sculpture created by Stefano Fake puts us in front of the cyclical nature of creation and the contradiction of every moment of rebirth, which combines the memory of the past with the desire for a new life.The work is a “technological tree” whose elements are the analogue and digital reproduction media storages of the past, from cinematographic film to magnetic tapes.\nA representation of all the creative processing media used in the past by Stefano Fake in his installations. In the monitors we find reproductions of ancient art when it undergoes a digital transformation. And therefore the work symbolically represents this passage from the \"memory\" of classical art with the \"desire\" to transform it into a new digital art, with the aim also of keeping the memory alive thanks to the infinite reproduction that digital allows.\nThe work was commissioned and created for the first time thanks to the support of Salvatore Ferragamo Parfums, on the occasion of the \"Envisioning the Future\" exhibition, at Palazzo Corsini in Florence.",
    "stefanofake.art",
    "https://vimeo.com/358376162",
    [".images/Fake/01.jpg", ".images/Fake/02.jpg", ".images/Fake/03.jpg"],
    2019
)

const fieres = new Artist(
    "fieres",
    "Ornella",
    "Fieres",
    "Ornella Fieres, The Alchemist / On Guard / Behind the Lens, 2018",
    "Ornella Fieres, The Alchemist / On Guard / Behind the Lens, 2018, video installation, computer screens, Photo: Marcus Schneider, Courtesy SEXAUER Gallery",
    "For the video installation The Alchemist / On Guard / Behind the Lens Ornella Fieres filmed computer screens showing early 20th century documentaries on computer-based data acquisition, the invention of slow motion and the chemistry of photography. She then slowed down these recordings by over a thousand times, adding an algorithm which was set to calculate where the video’s pixels would move to in the next frame. The outcome is full of unpredictable interferences, mysterious artifacts and emanating a droning, muffled sound.",
    "ornellafieres.com",
    [".images/Fieres/01.jpg", ".images/Fieres/02.jpg", ".images/Fieres/03.jpg", ".images/Fieres/04.jpg"],
    2018
)

const gannis = new Artist(
    "gannis",
    "Carla",
    "Gannis",
    "Carla Gannis, The Origins of The Universe: Dimensioning, 2021",
    "Carla Gannis, The Origins of The Universe: Dimensioning, 2021, HD Video, 3 min 11 sec",
    "\"The Origins of The Universe: Dimensioning\", is a video translation of a 3D-printed sculptural work produced by the artist, Carla Gannis. Both works reference Gustave Courbet’s “L’Origine du monde” and the contemporary fad of 3D printing sculptural holders for smartphones. In the video, Gannis presents the model in a turntable format. A turntable is a sequence of renderings that provide a 360 view of a three-dimensional virtual model. Common on stock 3D websites, they provide a complete view to visitors, to help them determine if they want to purchase the model or not.  Accompanying the video is an audio composition entitled \"In a Kingdom Full of Planets.\" It is a poetry collaboration between the artist and the Masterpiece AI Poem generator in homage to the universe.",
    "carlagannis.com",
    "https://vimeo.com/319214825",
    [".images/Gannis/01.jpg", ".images/Gannis/02.jpg", ".images/Gannis/03.jpg"],
    2021
)

const hardy = new Artist(
    "hardy",
    "James Alex",
    "Hardy",
    "James Alex Hardy, 190711, 2019",
    "James Alex Hardy, 190711, 2019, screens in hammocks, wood, sound system © the artist",
    "190711 was commissioned for the opening of the Sweet Harmony: Rave Today exhibition at the Saatchi Gallery in 2019.\nThe installation consisted of a live performance made on the opening event, using manipulated analogue video feedback, mixed with audio feedback, with the output displayed on the screens in the hammocks, and via a huge valve amplifier sound system.\nThe VHS recording of the performance was transferred to digital video format and then replayed through the screens in hammocks from the following day for the remaining 2 months of the exhibition.\nA full wall sized video projection at one end of the gallery- where the chain of hammocks originates from show a 45 minute long extract of a survey of woodland spaces, depicting central trees carved with initials, and field recorded sounds of the woodland spaces.",
    "jamesalechardy.com",
    "https://vimeo.com/388474957",
    [".images/Hardy/01.jpg", ".images/Hardy/02.jpg"],
    2019
)

const hart = new Artist(
    "hart",
    "Claudia",
    "Hart",
    "Claudia Hart, The Seasons, 2007",
    "Claudia Hart, The Seasons, 2007, 11:30 min., loop for monumental monitor + projection © the artist",
    "The Seasons portrays a room in which a slowly evolving sculptural figure gradually transforms. In this animated loop, a variety of visual, temporal and conceptual cycles are offset and overlaid so that their movement is obscured. All is in flux but time seems to stand still, as in life.\nIn The Seasons, a seated woman in a pose of erotic abandon cycles clockwise on a rotating pedestal. As she cycles, she decomposes, a vine of roses surrounding her, blooming and then fading away. The room also revolves, though counter clockwise, while the animation camera pans back and forth. These movements function in counterpoint, to appear only on the edge of perception. Sound for the piece is of crumbling paper. The color scheme is white on white.",
    "claudiahart.com",
    "https://vimeo.com/388596788",
    [".images/Hart/01.jpg", ".images/Hart/02.jpg", ".images/Hart/03.mp4", ".images/Hart/04.jpg", ".images/Hart/05.jpg"],
    2007
)

const holland = new Artist(
    "holland",
    "Faith",
    "Holland",
    "Faith Holland, Analog Internet, 2015",
    "Faith Holland, Analog Internet, 2015, three-dimensional rendered CRT televisions © the artist",
    "Analog Internet is a video that reveals a pyramid of three-dimensional rendered CRT televisions, each with a different cat video appropriated from YouTube playing. Analog Internet IRL re-imagines having the same relationship to cat videos in physical, not digital, space; it is a sculptural re-imagining of the video version. Cat videos are displayed on physical screens, pyramidally towered. Analog Internet IRL was installed as part of Porn to Pizza curated by Tina Sauerlaender at DAM Gallery in Berlin.",
    "faithholland.com",
    "https://vimeo.com/138990653",
    [".images/Holland/01.gif", ".images/Holland/02.jpg"],
    2015
)

const kau = new Artist(
    "kau",
    "Annebarbe",
    "Kau",
    "Annebarbe Kau, Kinoki, 1994",
    "Annebarbe Kau, Kinoki, 1994, 6 monitors, 6 video tapes, 3 steel-bases and 3 hangers with orange ropes, video without sound Close-ups of six individual pairs of eyes © the artist. Photo in Bremen by Joachim Fliegner / Photo in Düsseldorf by W. Meyer",
    "Kinoki, the title of the work from 1994, is an allusion to the style designation (KinoAuge) created by Dsiga Wertow, but this time in the inverse of the view. The viewer is looked at. The bases and the hanging of the monitors are specially made and give the virtual eyes an almost human physique.",
    "annebarbekau.de",
    "https://vimeo.com/429288403",
    [".images/Kau/01.jpg", ".images/Kau/02.jpg", ".images/Kau/03.jpg", ".images/Kau/04.jpg"],
    1994
)

const madorin = new Artist(
    "madorin",
    "Philipp",
    "Madörin",
    "Philipp Madörin, ReTube, 2010",
    "Philipp Madörin, ReTube, 2010, b/w CRT monitor and vidicon camera, computer © the artist",
    "ReTube plays with the \"tube\" part of the name YouTube, which is a reference to the cathode ray tube (CRT) found in early electronic monitors. As CRT TV and monitors are practically a thing of the past, it seems strange to see an internet portal use this term in its name. The \"ReTube\" project consists of presenting YouTube clips on an old black and white CRT monitor, then using a CRT camera to film these screenings before ultimately uploading the results back on YouTube  The original YouTube clip is no longer the same. Distortions caused by the tube-technology, visitors’ interactions and the surrounding lighting effects give rise to new visual content.",
    "philippmadoerin.ch",
    ".images/Madorin/03.jpg",
    [".images/Madorin/01.jpg", ".images/Madorin/02.jpg", ".images/Madorin/03.jpg"],
    1994
)

const marck = new Artist(
    "marck",
    "Marck",
    null,
    "Marck, Artist for Istanbul, 2015",
    "Marck, Artist for Istanbul, 2015, LCD screens, iron, aluminium 160 cm, 20:00 min. movie loop © the artist",
    "The overwhelming demand of an artist (in this video myself) to do justice to everyone, less the art enthusiast but more the gallery owner. Since the gallery owners live from art sales, just like the artist, they always front new artworks, so the air stays away, like when cold water is poured over you.\nThe overwhelming part was that I had to do an exhibition in Istanbul, along with other simultaneous exhibitions in the USA. The artwork was one of them. It is now in a museum in Istanbul, Bozlu Art Project.",
    "marck.tv",
    "https://youtu.be/cdp_avBCIjM",
    [".images/Marck/01.jpg", ".images/Marck/02.jpg", ".images/Marck/03.jpg", ".images/Marck/04.jpg"],
    2015
)

const mayAlex = new Artist(
    "may",
    "Alex",
    "May",
    "Alex May, Flow State, 2018",
    "Alex May, Flow State, 2018, interactive digital video sculpture © the artist",
    "Flow State is an interactive digital video sculpture that explores and reveals the inner workings of the Francis Crick Institute, the centre of genomic research in the UK. The sculpture is comprised of 28 synchronised video screens arranged in a physical structure inspired by the shape of an epigenetic diagram used to show the relationship between genomic samples. Developed over 18 months, it also alludes to the interconnectedness of the building and the people that work in it. On the reverse side, there is a meditative light installation based on the DNA sequence of a model yeast called Schizosaccharomyces pombe.",
    "alexmayarts.co.uk",
    "https://www.youtube.com/watch?v=Bf2LXiJmiBs",
    [".images/May_Alex/01.jpg", ".images/May_Alex/02.jpg", ".images/May_Alex/03.jpg"],
    2018,
)

const menegon = new Artist(
    "menegon",
    "Martina",
    "Menegon",
    "Martina Menegon, familiar strangers, 2018-19",
    "Martina Menegon, familiar strangers, 2018-19, face filter / video installation © the artist",
    "familiar stranger (2018) is a face filter available for Instagram, Facebook, Snapchat and Snap Camera. When using the filter, the user’s face is swapped and hidden by a virtual mask, a 3D scanned self portrait of the artist that over-rules facial characteristics and expressions.\nThe video installation \"familiar strangers\" (2019) displayed on tablets on stands the ongoing collection of video of users wearing the face filter, being all different yet all similar to each other: familiar strangers.\nThe work investigates the concept of avatar as mask, of identity in a social media context and, even if face recognition is not the latest trend, of surveillance in today’s society.",
    "martinamenegon.com",
    "https://www.youtube.com/watch?v=gbEETDLS270",
    [".images/Menegon/01.jpg", ".images/Menegon/02.jpg", ".images/Menegon/03.jpg", ".images/Menegon/04.jpg"],
    2018
)

const muller = new Artist(
    "muller",
    "Sali",
    "Müller",
    "Sali Muller, Wolkenbilder, 2019",
    "Sali Muller, Wolkenbilder, 2019, video, screens, dimensions: variable © the artist",
    "The perceptual meanings of now, later or (in)finiteness shift and intensify - on the outside still real and now, inside a confined space, surreal cloud formations in always identical, repetitive and never ending movements. The new cloud images transform the space into a magically sensual projection landscape. They are reminiscent of the master of deception, René Magritte who was deeply involved in the perception of reality in his work, trying to expose the invisible through sight and thinking: to see things differently. In this way, Muller directs the view behind the light-reflecting surfaces and motifs. With the multi-part medial floor installation, the general viewing habits are lifted. There is a change of perspective from above and below, in which not only the room situation is renegotiated. The supposed mirror image in the usual reflective surface disappears behind the clouds. At the same time, the floor opens and connects the here and now with the imagination behind it.",
    "salimuller.com",
    "https://vimeo.com/427836059",
    [".images/Muller/01.jpg", ".images/Muller/02.jpg", ".images/Muller/03.jpg", ".images/Muller/04.jpg"],
    2019
)

const obando = new Artist(
    "obando",
    "Juan",
    "Obando",
    "Juan Obando, A Bird Without A Song, 2015",
    "Juan Obando, A Bird Without A Song, 2015, vertical HD video, 4:54 min. LCD screen, MDF and plexiglass 18.25 x 37.5 x 4.25 inches © the artists",
    "A Bird Without A Song is a video-sculpture in the form of an oversized mobile phone displaying a looping Tinder-profile animation. The video is a geolocated rendition of the song Nothing Compares 2 U by Prince in the voice of Sinead O’Connor, lip-synced by animating profile pictures of users in the vicinities of the Chapinero neighborhood in Bogotá (Colombia.) At once haunting and comedic, the piece encapsulates the ubiquity of packaged online presence and swipe-based romance in the 21st century while illustrating aesthetic trends within users Tinder pictures. Once uploaded, the value of these personal image packages deflates and becomes temporary within their primary hosting environments. Still, they produce a lasting impact on a larger scale as the mass accumulation of personal data strengthens the macro-economies of global tech, transforming the image into flowing capital.",
    "juanobando.com",
    null,
    [".images/Obando/01.jpg", ".images/Obando/02.jpg", ".images/Obando/03.jpg", ".images/Obando/video_low_res.mov"],
    2015
)

const oursler = new Artist(
    "oursler",
    "Tony",
    "Oursler",
    "Tony Oursler,  R_G_B_, 2017",
    "Tony Oursler,  R_G_B_, 2017, Glass, led screen, audio, video, steel, acrylic, resin, led light and computer 200h x 40w / Head 37ø cm, TON004 © the artist",
    "The chimerical bots relate to Oursler's ongoing interest in human interaction with technology and questions the intelligence of the AI-systems. The freestanding bots are juxtaposed with wall mounted flow charts, which combine digitally moving images, painting, and sound. These works are based on schematics depicting motivational and inspirational systems, cognitive behavioral therapy, programing, networking to form a nexus of human desire, folly, and machine logic. Artificial intelligence, or A.I., brings to light many questions regarding our coevolution with such systems. Most notably, will our creations replace us and become our final undoing? Or will we enter a utopian world of limitless knowledge and achievements? It is the artist’s perspective that in between these two questions, AI has begun to enter our world in many fascinating and banal ways which are open to speculation.",
    "tonyoursler.com",
    "https://vimeo.com/user44953915/review/392975526/7a4733ce30",
    [".images/Oursler/01.jpg", ".images/Oursler/02.jpg", ".images/Oursler/03.jpg", ".images/Oursler/04.jpg"],
    2017
)

const paikNam = new Artist(
    "paikNam",
    "Paik",
    "Nam June",
    "Nam June Paik,  Canopus, 1989",
    "Nam June Paik, Canopus, 1989, from the series Planetarium, 1990, single-channel video sculpture; 6 monitors, 1 laserdisc, 1 laserdisc player, ca. 86 cm in diameter, collection: ZKM | Center for Art and Media  © ZKM | Zentrum für Kunst und Medien, photo: Steffen Harms",
    "The video sculpture Canopus, consisting of six monitors grouped around a hubcap bearing written characters, is part of Nam June Paik's 'Planetarium' series. This, produced in 1989-90, consists of nine symmetrical works with the names of the fixed stars, the nine planets, the sun and the moon. Canopus is the second brightest star in the sky and has served since Antiquity as a point ofreference in navigation. Paik's Canopus, a unique piece which nonetheless has the character of a multiple and comes from a series ofvideo reliefs, is an artistic 'celestial body' that finds its place in the context of a museum. It can be understood as a 'missing link', related both to the still steadily growing 'Family of Robot' series (on which Paik embarked in 1986), and to the artist's numerous satellite projects, in which he uses global communications technology to pursue artistic strategies. Canopus is an art satellite, full to the brim with all manner of information and promising an intoxicating flood of images. Simultaneously, it alludes to space as the context for the satellite-supported transmission of information. Paik's 'Planetarium series has created a curious and novel form of man-made \"planets\" establishing a link between sculpture and action, between individuality and stereotype, between the individual museum object and the multiple.",
    "zkm.de",
    ".images/Paik_Nam/01.jpg",
    [".images/Paik_Nam/01.jpg"],
    1989,
    2
)

const panzarino = new Artist(
    "panzarino",
    "Monica",
    "Panzarino",
    "Monica Panzarino, Memory, 2019",
    "Monica Panzarino, Memory, 2019, 4:12, SD video, provided courtesy of Vtape in Toronto (CAN)",
    "In this video, Panzarino performs Barbra Streisand’s version of Memory, the signature show tune from the musical “Cats.” Panzarino’s voice is processed by The Nipulator 2.0, a custom-built, wireless electronic bra created by the artist that uses hardware potentiometers (or knobs), a hacked DJ Hero microcontroller, and a Max/MSP software patch.  The left \"nipple\" of the bra manipulates the frequency of her voice in real-time, while the right \"nipple\" adds reverb. In the background, we see VHS footage shot by Panzarino from the World Trade Center observation deck in October 2000. In Memory, Panzarino (who grew up in lower Manhattan) pays homage to the pre-9/11, pre-internet culture New York City of her youth.",
    "monicapanzarino.art",
    "https://vimeo.com/318673362",
    [".images/Panzarino/01.jpg", ".images/Panzarino/02.jpg", ".images/Panzarino/03.jpg"],
    2019
)

const park = new Artist(
    "park",
    "Taezoo",
    "Park",
    "Taezoo Park, Digital Being: TV Being 006+009 , 2017 - 2020",
    "Taezoo Park, Digital Being: TV Being 006+009, 2017 - 2020, 7(W) x 6(H) x 7(D) ft, CRT TV Monitor, TV Mount, Pipe, Arduino, Raspberry Pi, and LED © the artist",
    "Digital Being is a series of the media installations created from broken and discarded electronic devices. It is an unknown sentient creature born within the circuits of forgotten technology. This creature responds to its environment through an atypical movement or specific interaction according to the machinery that it dominates. “Digital Being: TV Being 006+009+Traffic Light”, a member of the digital being family, brings up philosophical questions, such as who am I and where do I come from, by displaying text, basic geometry, and a planet.",
    "taezoo.com",
    "https://youtu.be/sc6dFTG4S1c",
    [".images/Park/01.jpg", ".images/Park/02.jpg", ".images/Park/03.jpg", ".images/Park/04.jpg"],
    "2017-2020"
)

const perborg = new Artist(
    "perborg",
    "Björn",
    "Perborn",
    "Björn Perborn, Tuto, 2013",
    "Björn Perborn, Tuto, 2013, video installation, monitor, media player, bed, dimensions variable © the artist",
    "Tuto is a video installation that consists of a video monitor on the pillow of a bed. It shows a video of a grown up man in a 1:1 scale, sleeping and thumb-sucking. The blankets in the video are the same as in the room. I have made two versions of this piece. Both were shown at open studio events, where the studios I had access to were equipped with beds. It was a way to have the artist present through a surprising solution that only the most curious visitors would discover. It was also an ironic way to present ”the artist at work”.",
    "bjornperborg.com",
    "https://vimeo.com/404378510",
    [".images/Perborg/01.jpg"],
    2013
)

const radomsky = new Artist(
    "radomsky",
    "René",
    "Radomsky",
    "Rene Radomsky, Mydriasis, 2017",
    "Rene Radomsky, Mydriasis, 2017, 1-channel video, Hi8 video, 00:40 min (loop), monitor, media player, power adapter, cable © the artist",
    "In this work, I filmed my eyes while sitting in the darkness and playing around with the camera light of my old Mini-DV camcorder. I filmed the movement of my pupils after I had turned the light on and off again. The footage was then shoot multiple times and displayed on eight PAL-Screens. The idea for this video sculpture was an old video where I tried the camera the first time. Like the eye itself, the cameras aperture adjusts to the environment (if set to auto-mode).",
    "rdmsky.com",
    "https://vimeo.com/388957496",
    [".images/Radomsky/01.png", ".images/Radomsky/02.jpg", ".images/Radomsky/03.jpg"],
    2017
)

const rodriguez = new Artist(
    "rodriguez",
    "Allison Maria",
    "Rodriguez",
    "Allison Maria Rodriguez, Legends Breathe: By Her Command, 2019 - ongoing",
    "Allison Maria Rodriguez, Legends Breathe: By Her Command, 2019 - ongoing, video sculpture, screen, wooden box, 7\" x 11.5\" x 7\" © the artist",
    "Legends Breathe is an ongoing project that celebrates the power of creativity and the imagination in overcoming traumatic experiences. Based on interviews with different female-identified and non-binary artists about childhood fantasies that assisted them in overcoming trauma, Rodriguez creates a video in response to each interview, exploring that particular fantasy as well as developing a unique site-responsive installation. Legends Breathe: By Her Command is displayed as an intimate handmade wooden keepsake box or treasure chest that holds the video within it as a precious object.",
    "allisonmariarodriguez.com",
    "https://vimeo.com/425228959",
    [".images/Rodriguez/01.jpg", ".images/Rodriguez/02.jpg", ".images/Rodriguez/03.jpg"],
    "2019-ongoing"
)

const rosenbach = new Artist(
    "rosenbach",
    "Ulrike",
    "Rosenbach",
    "Ulrike Rosenbach, Meine Macht ist meine Ohnmacht, 2010/1978",
    "Ulrike Rosenbach, Meine Macht ist meine Ohnmacht, 2010/1978, mixed media installation, b/w video, audio, 30 min © the artist",
    "Ulrike Rosenbach's video works of the 1970s were closely related to her performances. Video camera and monitors became a sculptural component of complex live actions. The installation Meine Macht ist meine Ohnmacht combines the elements of an action from 1978 in the Kunstmuseum Düsseldorf. For three hours, the artist lay in a stretched net until she finally freed herself. Above her a mirror, below her a salt flat, at the windows negative photos of women from different cultures. Over loudspeakers, you could hear her breathing and whisper the word woman. Her video recording was shown as a negative alternating with a text by Herbert Marcuse on two monitors in the same room.",
    "ulrike-rosenbach.de",
    null,
    [".images/Rosenbach/01.jpg", ".images/Rosenbach/02.jpeg", ".images/Rosenbach/03.jpeg", ".images/Rosenbach/04.jpeg", ".images/Rosenbach/video1.MOV", ".images/Rosenbach/video2.MOV"],
    "1978/2010"
)

const sassoon = new Artist(
    "sassoon",
    "Nicolas",
    "Sassoon",
    "Nicolas Sassoon, The Prophets, 2019",
    "Nicolas Sassoon, The Prophets, 2019, digital animation, lava rocks, LCD panels, media players, controllers, aluminum profiles, ABS, rubber, dimensions variables © the artist",
    "The Prophets is an ongoing series of sculptures as poetic interfaces between computer technology and geological forces. Composed of small pumice boulders (volcanic rock) connected to LCD panels, the sculptures recall traditional viewing stones (Gongshi, Suiseki) from which electronic hardware and screens emerge to form heads and figures. The LCD screens feature pixelated animations evocative of flowing lava, suggesting a magmatic life silently contained within the stones. In The Prophets, technology becomes a vessel through which inert rocks appear to express another state of existence - a volcanic unrest hinting back at their chaotic origins. The sculptures bring about a singular experience, recounting a partial history of our relation with matter — a speculative geology of our digital condition rooted in volcanological processes, and speaking to the connections between organic and inorganic materials.",
    "nicolassassoon.com",
    null,
    [".images/Sassoon/01.jpg", ".images/Sassoon/02.jpeg", ".images/Sassoon/03.jpeg", ".images/Sassoon/video1.mp4"],
    2019
)

const schneider = new Artist(
    "schneider",
    "Ira",
    "Schneider",
    "Ira Schneider, Wipe Cycle, 1969",
    "Ira Schneider, Wipe Cycle, 1969, video documentation, video installation © the artist and Frank Gilette",
    "Wipe Cycle transposes present-time demands as a way to disrupt television's one-sided flow of information. In the exhibition TV as a Creative Medium, the installation was constructed across from the elevators. So each visitor was immediately confronted with his or her own image. But the monitors also showed two videotapes and a television program. The installation, which made visitors a part of the information, was rigged in a highly complicated fashion: in four cycles, images wandered from one monitor to the other delayed by eight or sixteen seconds, while counter-clockwise a black light impulse wiped out all the images every two seconds from one to the next screen.",
    "ira-schneider.com",
    "https://vimeo.com/340908677",
    [".images/Schneider/01.jpg", ".images/Schneider/02.png", ".images/Schneider/03.png"],
    1969
)

const sidAndGeri = new Artist(
    "sidAndGeri",
    "Sid and Geri",
    null,
    "Sid and Geri, Unfortunate Anchises, 2018",
    "Sid and Geri, Unfortunate Anchises, 2018, video/audio installation, plaster, dimensions variable © the artists",
    "Unfortunate Anchises is a plaster sculpture of a female body similar to Greek mythology with a smartphone placed on the top of the sculpture. The smartphone plays a video of the movement of a tongue. Along with a Plasma TV playing a 3D male showing the movement of his tongue. Both placed on a plastic column that is also similar to Classical order. Engaging the visual, sonic, and physical fields as a combined object, a reflection of youth culture, presenting a Generation Y zeitgeist of commodity anxiety and spiritual nihilism.",
    "sidandgeri.com",
    "https://vimeo.com/383441837",
    [".images/SidandGeri/01.jpg", ".images/SidandGeri/02.jpg"],
    2018
)

const thein = new Artist(
    "thein",
    "Ivonne",
    "Thein",
    "Ivonne Thein, How not to be seen as a body, 2020",
    "Ivonne Thein, How not to be seen as a body, 2020, 4K video loop with sound, 5:12 min © the artist",
    "In our performance-oriented society, there is a growing tendency towards objectification, which encodes the body as an arbitrarily manipulable mass. We can do something with our body, shape it or manipulate it. Today it seems omnipresent, permeable and somehow surmountable, and increasingly resembles a set of possibilities. How not to be seen as a body is a mixed-media installation consisting of computer generated photographs, printed fabric, a carpet with photo print and a video sculpture. It questions the boundaries between real and artificial bodies, but does not open up new insights for the viewer, leaving him or her disoriented between body fragments.",
    "ivonnethein.art",
    "https://vimeo.com/388243497",
    [".images/Thein/01.jpg", ".images/Thein/02.jpg", ".images/Thein/03.jpg"],
    2020
)

const truckenbrod = new Artist(
    "truckenbrod",
    "Joan",
    "Truckenbrod",
    "Joan Truckenbrod, Quantum Realities, 2002",
    "Joan Truckenbrod, Quantum Realities, 2002, Multi-Media Installation © the artist",
    "This installation creates a palpable experience of wild salmon runs, with awareness of their diminishing population. Industrial and agricultural chemicals running into streams and rivers, have compromised the quality of salmon habitat, consequently reducing their population. This parallels health issues for people, including cancers also caused by environmental chemicals. In addition warming of the water in these waterways, together with warming oceans due to climate change, have created difficulties for salmon. Video of salmon runs and the life cycle of salmon were captured in Alaska and the Northwest, and projected into a water pond surrounded by river black pebbles.",
    "joantruckenbrod.com",
    null,
    [".images/Truckenbrod/01.jpg", ".images/Truckenbrod/02.jpg", ".images/Truckenbrod/03.jpg", ".images/Truckenbrod/video1.mov"],
    2002
)

const vanDerAuwera = new Artist(
    "vanDerAuwera",
    "Emmanuel",
    "Van der Auwera",
    "Emmanuel Van der Auwera, VideoSculpture XX (The World's 6th Sense), 2019",
    "Emmanuel Van der Auwera, VideoSculpture XX (The World's 6th Sense), 2019, 4 x 46 inch LCD screens, 2 x 55 inch LCD screens, 10 tripods with custom plexiglass, HD video, dimensions variable, installation view, Solo booth, Harlan Levey Projects, Art Brussels 2019 © the artist & Harlan Levey Projects",
    "Advertised as the world’s ‘sixth sense’, thermal imaging offers precise surveillance for a range of uses – firefighting, navigation, safety and law enforcement, pest control, and medical diagnostics. Used for field demonstrations filmed to market the latest technology to military contractors, the footage in VideoSculpture XX (The World’s 6th Sense) flaunts a thermographic camera’s skills at capturing detail and range – yet paints a phantasmal portrait of the Las Vegas Strip, drained of its color and camp. Van der Auwera’s VideoSculpture XX emerges as both an image and image-hunter, surveying from the sniper tower.",
    "hl-projects.com",
    "https://vimeo.com/374631345",
    [".images/VanderAuwera/01.jpg", ".images/VanderAuwera/02.jpg", ".images/VanderAuwera/03.jpg"],
    2019
)

const vedder = new Artist(
    "vedder",
    "Maria",
    "Vedder",
    "Maria Vedder, NoSenses, 2000 to today",
    "Maria Vedder, NoSenses, 2000 to today, Work in progress, 3-channel video installation: 3 stacked tube monitors, 3 synchronizable video players, Digital animation, Loop 4:46 min, Black and white, No sound, Animation: Till Beckmann © the artist",
    "For years, Maria Vedder has collected newspaper pictures of people who are covering the sensory organs – their mouths, eyes, or ears. They elude communication. In computer animation, over 700 photographs come together in an ever-accelerating vertical stream on the monitor column.\nIf at the beginning a picture is quietly pushed from the following picture onto the next screen, at the end 36 photographs can be seen or guessed in one second. The speed and motion dissolve the individual image and give rise to new graphic elements. Newspaper picture grids and computer pixels become organic forms.\nThe project is never-ending, because Maria Vedder will continue to constantly collect – unless someday there are no more printed newspapers.",
    "mariavedder.de",
    "https://vimeo.com/37677236",
    [".images/Vedder/01.jpeg", ".images/Vedder/02.jpeg"],
    2000,
    5
)

const vible = new Artist(
    "vible",
    "Andy",
    "Vible",
    "Andy Vible, Watching Television, 2011",
    "Andy Vible, Watching Television, 2011, life-size sculpture of human body, video camera, television © the artist",
    "Andy Vible makes life-size sculptures of human bodies whose heads have been replaced by everyday objects. These objects determine the activities the bodies are engaged in.  In the case of Watching Television, the figure's head has been replaced by a video camera that is plugged into a TV directly in front of the figure.  This causes the TV screen to endlessly display a live feed of itself into a vanishing point.  This continuous repetition alters the meaning of the screen itself, which begs the question, what channel is he watching?",
    "andyvible.com",
    ".images/Vedder/02.jpeg",
    [".images/Vedder/01.jpeg", ".images/Vedder/02.jpeg"],
    2011
)

const vostell = new Artist(
    "vostell",
    "Wolf",
    "Vostell",
    "Wolf Vostell, The Winds, 1981",
    "Wolf Vostell, The Winds, 1981, Car-TV-sculpture © The Wolf Vostell Estate",
    "The Winds encompasses an old luxury limousine, model Mercedes Benz 600, containing 20 television monitors built into the roof, trunk and hood of the car. A camera mounted in the vehicle, next to the steering wheel, films the visitor, whose image is shown 20 times on these screens. In the front, in place of the radiator, a large television set shows programming from one of Germany's state broadcasting stations. Vostell describes the theme as “sensory overload through the media”.",
    "vostell.de",
    ".images/Vostell/01.jpeg",
    [".images/Vostell/01.jpeg"],
    2011,
    1
)

const welz = new Artist(
    "welz",
    "Peter",
    "Welz",
    "Peter Welz, Portrait #3 [out-take | monica vitti | sculpture], 2015",
    "Peter Welz, Portrait #3 [out-take | monica vitti | sculpture], 2015, hybrid work between sculpture and video installation © the artist",
    "The piece is dedicated to one of the major film director and best known for his “trilogy on modernity and its discontents”. Michelangelo Antonioni redefined the concept of narrative cinema producing enigmatic and intricate mood pieces favouring contemplation and focusing on image over story, as in Red Desert (1964). Antonioni’s first film in colour is a film about a woman trying to survive in the modern world of cultural neurosis and existential doubt. Renowned for its scenic design, the work largely takes place in industrial landscapes that have been interpreted as a correlative of the unease, alienation, and vivid perceptions of the main character, Giuliana (Monica Vitti).\nPeter Welz uses a classical 16 mm film projector with a looper to scale the whole apparatus into a sculptural device scaling the screen accordingly. The projected video sequence focuses on a very crucial moment of Red Desert, when Monica Vitti is asked to cry. It is the most vulnerable, private and powerless moment, and the very point where the fictional reality overlaps with the actual reality. During the filming Michelangelo Antonioni corrects the scene by walking into the frame twice and finally neglects this sensible moment in the final version, as it would have altered the whole outcome.",
    "peterwelz.com",
    null,
    [".images/Welz/01.jpeg", ".images/Welz/02.jpg", ".images/Welz/03.jpeg", ".images/Welz/video1.mp4"],
    2015
)

const yeXuan = new Artist(
    "xuan",
    "Ye",
    "Xuan",
    "Xuan Ye, ERROAR!#4 The Oral Logic I, 2019",
    "Xuan Ye, ERROAR!#4 The Oral Logic I, 2019, one-channel HD video, interactive software, laser-engraved mirror and 3d prints, generative poetry on paper scroll © the artist",
    "The ERROAR! Series speaks to the errant and noise that emerge from experiments of intelligence agents for understanding human’s cognitive functions through artificial neural networks, and how these technological errors open up new creative potentials that in return reconfigure our perceptions, affect and imaginations. Most visual-textual-sonic materials involved are generated from the process in which artist uses open data in various formats to train prevalent machine learning algorithms such as RNN and CNN. ERROAR!#4 The Oral Logic I contemplates on the phenomenon of \"cannibalism\" as a metaphor for cultural and technological assimilation, especially in the process of human-artificial-intelligence coupling.",
    "a.pureapparat.us",
    "https://vimeo.com/329374154",
    [".images/Ye_Xuan/01.jpg", ".images/Ye_Xuan/02.jpg", ".images/Ye_Xuan/03.jpg", ".images/Ye_Xuan/04.jpg"],
    2019
)

const artistsArray = [
    aliMoravec,
    anastasi,
    bainbridge,
    balve,
    barciaColombo,
    brewer,
    cannestra,
    chabrowski,
    conolly,
    cooley,
    darimalz,
    ebert,
    everett,
    exonemo,
    fake,
    fieres,
    gannis,
    hardy,
    hart,
    holland,
    kau,
    madorin,
    marck,
    mayAlex,
    menegon,
    muller,
    obando,
    oursler,
    paikNam,
    panzarino,
    park,
    perborg,
    radomsky,
    rodriguez,
    rosenbach,
    sassoon,
    schneider,
    sidAndGeri,
    thein,
    truckenbrod,
    vanDerAuwera,
    vedder,
    vible,
    vostell,
    welz,
    yeXuan
]

// artistsArray.forEach((artist) => {
//     console.log(artist.name)
// });

export default artistsArray;
