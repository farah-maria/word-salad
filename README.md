# **Word Salad**
Word Salad a fun and colourful grammar themed quiz aimed at kids who need to practice their understanding of the basic word-classes. The quiz tests the user’s knowledge and helps them learn the difference between nouns, adjectives, verbs and adverbs. It also demonstrates how these are used to form sentences. The quiz is aimed at primary/ elementary children, no more than 11 or twelve years of age.

At the end of the quiz, the user is congratulated on completing, regardless on their score, and is presented with a “silly word-salad sentence” that is generated using the words they have been working with. They are prompted to write some silly sentences of their own using the same key words and are encouraged to play the quiz again. Each time the quiz is played, a different silly sentence is generated.


![mock-up of site on different sized devices](assets/images/amiresponsive.jpg)

## **Project Scope, Design & User Experience**

In terms of the scope of the project, I decided to focus on just four word-classes. Not only did this mean there were only four possible answers repeated for each question, making it easy to style the answer buttons for just those particular words, but it meant that - given the timeline for project submission (I had two weeks) - I could make sure that these four concepts were fully explored in the quiz, giving the user plenty of practice to consolidate their knowledge. This seemed a far better option in terms of creating a fit-for-purpose real-world functioning educational tool. Otherwise, I might have been more ambitious in my scope but ended up with a quiz frustrating for the child user. Children do need a sense of positive achievement and progress in their educational activities, or else they can become discouraged after having a negative experience and subsequently decide they just don’t like “that awful, boring” subject anymore (in this case, grammar, which is a dry enough subject area to start with).

Because grammar can be a dull subject, I gave the quiz a colourful background with a colour-scheme based on the primary colours blue, green, yellow and red. This felt suitable as it reflected the four possible answers/ word-classes of noun, verb, adverb and adjective, and also made the screen look playful and fun.  

<br>
<center>Desktop version of homepage.<br><br><img src="assets/images/homePg.jpg" alt="screenshot of homepage for desktop" width="60%"/></center>
<br>

I did initially think of making each answer button a different primary colour, but I decided this was too ‘busy’/ potentially confusing in appearance for a young user, given that the buttons also change colour after an answer is clicked-on to either green or red/pink (to show which solution is correct and which solutions are not).

The red, technically, is substituted for a dark pink. I recall from my teacher training years ago that kids have started to associate red with ‘negative’/ ‘bad’/ ‘a fail’ in learning activities, which isn’t so encouraging for much younger kids. The pink is softer than a glaring red, while the answer grid colours still clearly indicate which answer is correct. Red is also a very loud colour as a background for text, so it didn’t feel like a great choice for a button with an answer typed on it, especially as younger children are still gaining their confidence in reading.

Clear navigation, consistency in design and accessibility were important in the creation of the quiz. The homepage defines the word-classes with an example sentence, and a nice big button in the middle of the text-area can be pressed to start the quiz. It actually says ‘click here to start the quiz’ on it, and the button has a hover effect making it easier for a younger user with less practiced coordination to know when they have the pointer in the right place before ‘clicking’. The hover effect is quite clear (a change in border colour and an underline) to make the navigation journey clear for children.

I wanted a simple structure to the quiz right from the beginning, when I hand-drew my wireframes...

<br>
<center>1. <img src="assets/images/framesOneTwo.jpg" alt="wireframe drawing for homepage and 'ready?' page" width="30%"/></center>
<br>
<center>2. <img src="assets/images/framesThr_Five.jpg" alt="wireframe drawings of question and answer pages of quiz" width="45%"/></center>     
<br>
<center>3. <img src="assets/images/frameLast.jpg" alt="wireframe drawing of last page, where user is presented with a 'word-salad' silly sentence" width="30%"/></center>
<br>     

Image one  is the homepage that explains the word-classes and the second wirefram on it represents the 'ready?' page, which builds up a bit of fun tension before the quiz starts and adds some extra interactivity and involvement, as the user has a button to press to 'agree'. The actual 'ready' page is shown below:

<center><img src="assets/images/readyPg.jpg" alt="wireframe drawing of last page, where user is presented with a 'word-salad' silly sentence" width="30%"/></center>
<br>     


Images two of the wireframing shows the multiple-choice questions and answers section, and image three of the wireframing process shows the final page with the word-salad sentence generated from the words the user has been working with.

A few minor aspects of design changed after the wireframing process, mainly to make the navigation both clearer and more interesting. The final wireframe ended up as a brightly coloured modal that pops up and congratulates the user on completing the quiz, as well as generating the word-salad sentence. I'll discuss this further under 'features'.

When it came to the fonts, I used "Butterfly Kids" from Google Fonts for the quiz heading and logo, as it's playful and silly, which suits the final word-salad concept of making silly sentences. I used 'Poppins' from the same source for regular text on the site, which was a pairing that fitted visually - both fonts are from the 'butterfly kids' font-family - with the advantage of Poppins being both clear and bold enough for younger readers to be able to decipher with relative ease. 



## Design Responsivity in Relation to User Experience, Scope & Strategy

Design responsivity for different devices is essential for positive user experiences. According to a recent article  by the online magazine Design Rush (15 Screen Resolutions to Design For | DesignRush), 90% of website visitors bounce due to poor design, and I've seen first-hand how often parents hand their children an iphone to play games with to keep them quiet and entertained in public. I therefore took a mobile-first approach when designing and coding the project. The set-up of boxes and containers for questions and answers made it relatively easy to make the pages into a responsive grid. I did make sure the quiz looks nice on larger screens, too, as I'd like the quiz to be used educationally in homes and schools, where a desktop computer or tablet is more likely to be used for learning activities. 


I made sure there was strong contrast between content and the background - the pastel-coloured spots in the background are distinctive but not too loud or distracting. I aimed to make the quiz look clean-cut, simple and fun. 

The logo from the quiz pages is in the same style as the 'Word-Salad' title on the homepage, with the same icon of a leaf. The concept is clear - a 'W' for word and a green leaf for 'salad'. I used this as the favicon, too, so there is consistency in the design across the different sections of the quiz.

The navigation buttons have icons on them and are repeated on each page of the quiz, allowing the user to go back to the homepage or go to the next question. These icons were taken from Font Awesome and can be seen below.

The 'well done' button and modal at the end of the quiz give the user a clear and unambiguous sign that they have completed the quiz, but can play again if they want to. There is a button to restart the quiz.

The navigation journey is clear throughout, and the design consistent. Given more time, I would have written more media queries to make the quiz more attractive on all screen sizes. However, with the emphasis in this project being less on the media queries and more on the vanilla JavaScript code, I mainly made sure that the quiz is playable, pleasant, functioning and clear on different screen sizes, rather than really trying to make it look fantastic on any screen. If I got to extend the scope of the project with an extra few days to work on responsivity, I would have.

## Existing Features

It is hard to completely separate the topics that need attention in this document, so there is some overlap, but I will avoid repeating descriptions.

-_Homepage_

The homepage states the purpose and nature of the quiz in the first paragraph, and also describes the final outcome, which is a silly sentence and a prompt for the user to create their own silly sentences. There is a central link (styled as a button) that takes the user straight to the quiz if they do not need to be reminded of the four word-classes. 


-
<br>
<center>Homepage <br><img src="assets/images/homenav.png" alt="screenshot of homepage header with navigation bar" width="50%"/></center>
<br>
<center>Timeline page <br><img src="assets/images/timelinenav.png" alt="screenshot of navigation bar on history page" width="50%"/></center>     
<br>
<center>Feedback page <br><img src="assets/images/formnav.png" alt="screenshot of navigation bar on feedback page" width="50%"/></center>
<br>     

The style and font is the same for each of the three navigation bars, except on small mobile devices where a border and background colour were added for the feedback page to improve visibility of the navigation options (the form necessitated a smaller font-size). The colours used are still from the same colour palette. I kept the header and navigation identical for the first two pages of the mobile version, with the understanding that a smaller screen gives less visual clues, making consistency in design even more important.

Home & history pages, mobile screenshot:

<center><img src="assets/images/mobhistorynav.jpg" alt="screenshot on Huawei P30 lite phone of navigation bar on history page" width="30%"/></center>     
<br>
Feedback page, mobile screenshot:

<br>
<center><img src="assets/images/mobformnav.png" alt="screenshot of nav bar on feedback page using Chrome dev tools to create dimensions for iphone4" width="30%"/></center>
<br>     
 
The top screenshot was taken on my Huawei P30 lite phone. The second is on the dimensions of an iPhone 4, created using Chrome dev tools. 

There is a hover effect for the options on the navbars, to help the user see that the labels on the header are interactive and 'clickable', and also a colour effect to show if the page has already been visited. This is to help the reader understand the functionality of the navigation bar and to remind them of what they have already viewed, creating a clear sense of where they are on their journey through the site.

-_Footer with Social Media Links_-

The same footer design is used on all three pages with a hover effect to indicate interactivity. There are three icons for Facebook, Twitter and YouTube taken from the Font Awesome library. As with the navigation bar on the mobile version of the site, the feedback page has a border around the icons so that they clearly stand out on a small screen. The style and colour of the border is the same. Tablets also have a slightly tweaked design for the footer, which is a compromise between the full-size design for large desktops and the boxed footer for mobiles. It consists of the same background illustration that's used for desktops, but with the addition of a grey border to draw emphasis to the links on a smaller screen. The links on the footer do work, but I have yet to set up a social media presence for the WICH project. 

-_Landing Page & WICH Logo_-

As shown at the start of this document, the landing page, or homepage, is simple, minimalist but informative, with a natural and gentle colour palette. The words 'Women coders since the 1840...' informs the user of the content they should expect from the next page. The navigation label 'timeline' at the top of the page also introduces how this information is going to be presented. The hero image of a keyboard on a pink desk is attractive as well as functional in conveying the main themes of women at work in computer technology and coding. 

The icon used for the logo is from the Font Awesome library [Font Awesome website](fontawesome.com) and clearly indicates the subject matter of computing, while the shades of pink on the home page are a wry reference to what is stereotypically thought of as 'feminine taste'. The logo and title heading are repeated on all three pages.

The WICH acronym was fun to come up with, and obviously points to the word 'witch'. This is intended to evoke the history of confident, intelligent women being considered oddballs and outsiders. Women software developers are, after all, still a small minority.

All of the fonts are from Google Fonts [Google Fonts website](fonts.google.com), except for Courier. Courier is used on the landing page for smaller screens, as it is clearer to read and still in line with the themes of coding and history (i.e. typewriters).

The hero image is by @lum3n and can be downloaded free of charge from Unsplash [Unsplash web address](https://unsplash.com/photos/-RBuQ2PK_L8).

The tree wallpaper design used as a background throughout the site as been edited to different sizes and hues by me, but the original can be downloaded from the Creative Tacos site, which has a beautiful collection of free design resources. To find free background wallpaper options, look up 'digital papers' on https://creativetacos.com/ 

-_Timeline_-

The timeline is the main focus of the website and it is where the most of the content is concentrated. Fourteen women coders are described, from Ada Lovelace's annotations on machine coding in 1843 to Valerie Johnson's current work as an advocate for women and people of colour in the tech industry. 

Descriptions of each figure are short and easy to understand with technical terms such as "compiler" fully explained, making the timeline a bit of an introduction to the world of computing in general.

Every description is accompanied by an image, and most are accompanied by a link to audio or video material for users who want to know more. Most people, especially young people, learn through all of their senses, not just through sight, so it was important to include audio material as well as videos that provide a 'break' from pure text. 

Every image has an 'alt' tag, for users with visual impairments.

The timeline has a different background for phones than for tablets and larger desktops. The smaller the device, the fewer colours used. I did not want to crowd the page with strong colours and contrasts for mobile phone screens, as this can affect concentration. The bigger desktops have background wallpaper for the timeline to add interest where the background might otherwise look too bare. 

The wallpaper idea, also used for the headings and footers, was inspired by William Morris and the Arts and Crafts Movement. The movement roughly correlates with the period when machine readable code started being talked about. Morris began his apprenticeship as an embroiderer of textiles in the mid-1800s, when Ada Lovelace was working as a mathematician in the same city (London). Both were associated with radical politics (Morris was a socialist and Ada Lovelace was the daughter of Lord Byron).

Timeline for mobile phones with neutral background (screenshot from my Huawei P30 lite):

<br>
<center><img src="assets/images/mobtimeline.jpg" alt="screenshot on Huawei P30 lite phone of timeline" width="50%"/></center>
<br>     

Timeline for tablets and smaller desktops with sky blue background (screenshot from my Surface Go):

<br>
<center><img src="assets/images/tabtimeline.png" alt="screenshot on Surface Go" width="50%"/></center>
<br>   

Timeline for larger desktops with 'wallpaper' as background (screen size 1882 x 1317px in Chrome dev tools):

<br>
<center><img src="assets/images/desktimeline.png" alt="screenshot on Surface Go" width="80%"/></center>
<br>   

Code for the timeline was borrowed from the following website: https://alvarotrigo.com/blog/html-css-timelines. However, there were numerous bugs in the code, which I had to fix so that it worked on all sized screens. I'll discuss these later.

All images for the timeline are open source, and from Wikimedia Commons (https://commons.wikimedia.org/wiki/Main_Page). 

All links have an aria-label to help visually impaired users, and they open in a separate tab. The links are coloured violet to set them apart from the non-interactive text. 

-_Feedback Form_-

The feedback form is responsive and functional on all different devices from the size of an iPhone 4 up. I already knew how to code forms from my HTML course material, however I taught myself how to make a fully responsive one from W3 schools "HOW TO - Responsive Form" at http://www.w3schools.com/howto/howto_css_responsive_form.asp/.

I have yet to make this form active beyond the data being sent to the Code Institute form dump address. To make this website a functioning site of current use, the main thing I need to do is to change this, so that I receive the data and am able to respond to the feedback in how I develop the project in future.

When I learn JavaScript later in my diploma course, I will use this language to code a properly interactive form with a pop up page that says "Thank you for submitting your feedback!". 

As the timeline project is at its inception stage, I deliberately wanted a feedback form with space for whatever views users have. This is why there is a large text box. I'm effectively gathering views as if I'm holding a market research event, with the first users giving a full account of their views, first impressions and feelings. Later, when the project gathers momentum and there is a social media presence for WICH, I will narrow the options down on the form to radio button answers to specific questions.  

The email address box only accepts text that is recognisably in the format of a proper email address (a validated and required input field). The form is not submitted unless an email address is entered. The addresses will eventually be used, when this site is live and fully functioning, for updates and possibly a newsletter or blog.

## **Testing (and bugs!)**

Two key aspects of this project are accessibility and design responsivity (media queries). To test for accessibility, I used the Lighthouse report generator in Chrome dev tools to check that the accessibility scores for the desktop and mobile versions of the site were over 70%. 

<br>
<center><img src="assets/images/desk_lighthouse.png" alt="screenshot of lighthouse report for desktop version of the site" width="80%"/></center>
<br>  

<br>
<center><img src="assets/images/mob_lighthouse.png" alt="screenshot of lighthouse report for mobile version of the site" width="80%"/></center>
<br>  

The screenshots of the report are above. The first one is for the desktop version and the second one for mobiles. Despite my efforts to start from scratch a week into the project with a mobile first approach, it is the desktop version that scores most highly on all-round performance. The specific score for accessibility is 97%. The mobile version has the same score, with both versions of the site - mobile and desktop - also scoring 100% on best practice. This meant that thankfully, I did not have to go back to the drawing-board for this project. The accessibility scores are well above 70%.

I also tested the site on real devices by checking how it looked on my phone (Huawei P30 lite), my friends' devices (I asked them send me screenshots), my tablet (Surface Go) and by checking all of the most common screen sizes from the smallest size of 320 x 480 pixels (the dimensions for the iphone4). I also tested the points at which the integrity of the webpages fell apart using Chrome dev tools. I used these to guide the creation of further media queries in my CSS code to remedy the 'glitches', so that when I played with the width and height in Chrome dev tools, the design seamlessly adapted. I learned about this adaptive approach from a 'Sam's Teach Yourself' textbook that I have on CSS and HTML. "Focus your breakpoints on where your design starts to fail rather than worrying about specific devices or widths. It's also a good idea to strive for as few breakpoints as your design can handle and not be broken" (p.468, Colburn, Kyrnin & Lemay 2016). If I could go back and do this project again, I would certainly aim for less media queries. The feedback form in particular required a lot of adjustments in CSS for different screen sizes, and even though the code "works" and my course mentor was happy with the design responsivity for all of the pages of the site, I could have saved a lot of time and effort if I simply taught myself CSS grids and used this for the whole of the feedback page.

I noticed early on that Chrome dev tools do not show how a site looks like on a given device in real life. This is because the browser adds elements to the top and the bottom of the page, and these are difficult to predict it varies with different browsers. When I tested the homepage on my phone, the footer dropped off the screen, but it was visible for the same dimensions in Chrome dev tools. I was told, for the sake for how this project is being assessed, to focus on what is shown by Chrome dev tools. However, I couldn't leave it alone, because I want this site to be of actual real-life use. I have coded the footer to come up higher on mobile devices so that it is always visible. It turns out that this makes the footer stand out more on smaller screens, so it probably pushed up the accessibility score on the Lighthouse report.   

The timeline code turned out to not work in its entirety on different devices after it had been amended by me to include images and different fonts/ colours. Specifically, there was a join in the timeline that was visibly out of alignment. I used Chrome dev tools to click on this, and discover which bit of code needed amending. A similar issue came up that related to the dots on the timeline. They were not on the actual timeline, but floating off away from the descriptions about each woman in history. I found the bug in the same way and created a series of media queries that fix this for different screen sizes.

I tested all of the links on the history line to make sure they were up to date and functional when clicked on. A bug that came up initially was that some of the links didn't work. The 'position: relative' style automatically gave the elements a z-index, so part of the div element was covering the link, making it unclickable. I worked this out with the help of a tutor. My adding 'position: relative' to the style for the links in CSS, this got fixed.

 ## **Code Validation (and bugs!)**

 The HTML for the landing page, the timeline page and the feedback page all passed when I copied and pasted the code into the free w3 validator service online. The screenshots are below.  

<br>
<center><img src="assets/images/hmpg_html_validation.png" alt="screenshot of pass report for landing page from w3 HTML validator" width="80%"/></center>
<br>  

<br>
<center><img src="assets/images/tmln_html_validation.png" alt="screenshot of pass report for timeline page from HTML validator" width="80%"/></center>
<br>

<br>
<center><img src="assets/images/form_html_validation.png" alt="screenshot of pass report for feedback page from HTML validator" width="80%"/></center>
<br>

The CSS code for the website also passed when it was cut and paste into the Jigsaw w3 validation service online. The screenshot showing this is below.

<br>
<center><img src="assets/images/css_validation.png" alt="screenshot of pass report for CSS code page from Jigsaw w3 validator" width="80%"/></center>
<br>

No errors were found in the HTML or the CSS code when tested two days prior to the submission of this project. Before this, however, there were some bugs I needed to swat! A few errors were found by the validator that I had to fix. It turned out that my history timeline was riddled with tags that were not closed properly... Below is an example.

<br>
<center><img src="assets/images/bugs.png" alt="screenshot of errors found by w3 HTML validator" width="80%"/></center>
<br>

I went through the HTML with a fine toothcomb and discovered the problem. I was trying to wrap block elements with inline elements, and this meant that my paragraphs weren't closing properly. I fixed this, and correctly ordered my tags. I removed the use of divs to style the links embedded in various paragraphs, remembering that divs are used as outer-wrappers. I needed to be using the span element to style these links instead. My code passed after making these changes.

## **Deployment**

I used GitHub pages to deploy my site. The process is simple. Click on 'settings' after going into the repository and scroll down. The menu down the lefthand side will have an option called 'pages'. Click on this, and after a few moments the site will be deployed and GitHub will automatically show a web address in blue. This is the address for the live site, which anyone can now access from their own devices.

## **Acknowledgements**

1. Am I Responsive? (https://amiresponsive.co.uk/) This free site illustrates how your web project looks on different devices in an attractive way.

2. Google Fonts. (https://fonts.google.com/) 

3. Canva. (canva.com/learn/best-google-font-combinations).

4. Font Awesome. (https://fontawesome.com/)

5. Hero image by @lum3n on Unsplash [Unsplash web address](https://unsplash.com/photos/-RBuQ2PK_L8).

6. Digital papers used as backgrounds throughout the site originally sourced from Creative Tacos (https://creativetacos.com/). 

7. Code for timeline inspired by https://alvarotrigo.com/blog/html-css-timelines. I added floating images and different fonts, which meant that I had to edit the code.

8. All images for the timeline are open source and from Wikimedia Commons (https://commons.wikimedia.org/wiki/Main_Page). 

9. W3 schools "HOW TO - Responsive Form" at http://www.w3schools.com/howto/howto_css_responsive_form.asp/.

10. 'Website Dimensions: These are the 15 Most Common 15 Screen Resolutions to Design for'. Design Rush. Updated 05/05/2022. https://www.designrush.com/agency/web-development-companies/trends/website-dimensions

11. Chrome developer tools, including Lighthouse. https://developer.chrome.com/docs/lighthouse/overview/

12. W3C Markup Validation Service (https://validator.w3.org/index.html)

13. W3C Jigsaw CSS Validation Service (https://jigsaw.w3.org/css-validator/)

14. Colborn, R. Kyrnin, J. & Lemay, L. (2016) Sam's Teach Yourself HTML, CSS & JavaScript: Web Publishing in One Hour a Day. Pearson Education, Indiana.

15. Information about the history of female coders was from a range of sources, including the Encyclopaedia Britannica online (https://www.britannica.com/). I also watched the wonderful 2016 film, Hidden Figures, and took notes. Links to articles, YouTube videos and audio can be found on the timeline page of the site, with acknowledgements also below...

16. Jones, B. & Larson, L. (2019)'Long before Gates or Jobs, 6 women programmed the first digital computer', Digital Trends, https://www.digitaltrends.com/computing/remembering-eniac-and-the-women-who-programmed-it/

17. Shetterly, M. L. NASA biography of Katherine Johnson, https://www.nasa.gov/content/katherine-johnson-biography/. 

18. Women's Stories, (2014) 'Who is Grace Hopper?', https://youtube.be/Fg82iV-L8ZY (video).

19. STEM for Success, (2021) Valerie Thomas: Transmitting the Future, https://www.youtube.com/watch?v=EWBlW1xgAow. 

20. Lantero, A. (2016) 'Five Fast Facts About Rocket Scientist Annie Easley' https://www.energy.gov/articles/five-fast-facts-about-rocket-scientist-annie-easley

21. Youtube interview with "Hidden Figures" author Margot Lee Shetterly: https://www.youtube.com/watch?v=PdbPkCGUq9k

22. Biography magazine (2016) 'Dorothy Johnson Vaughan', https://www.biography.com/scientist/dorothy-johnson-vaughan