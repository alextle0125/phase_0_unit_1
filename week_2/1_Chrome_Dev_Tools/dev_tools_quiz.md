#### Include an inline screenshot of your codeschool's points from the profile page:

<img src="https://raw.githubusercontent.com/alextle0125/phase_0_unit_1/master/week_2/1_Chrome_Dev_Tools/imgs/code_school_points.png">

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
  <p>Elements tab: allows for temporary editting and previewing modifications directly within the browswer using DOM</p>
  * Javascript Debugging
  <p>Sources tab: displays actual source code of document; for example: html, css, or js doc. Allows for editting source code, revisions, and saving.</p>
  * Performance Optimization 
  <p>Network tab: displays a list of specifications for each file and associated elements or files requested for download and downloaded by browser upon upload of web page</p>

* What's the quick key for your OS to spawn the Dev Tools inspector?
<p>Crl+Shift+I</p>

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
  <p>#0b0f11</p>
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the imgs directory in the `1_Chrome_Dev_Tools` directory.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)
  <img src="https://raw.githubusercontent.com/alextle0125/phase_0_unit_1/master/week_2/1_Chrome_Dev_Tools/imgs/postmachinascreenshot.png">

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.
  <p>That text is part of an image; not text from the HTML/CSS files.</p>

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
  <p>The largest image on the site is shown below:</p>
  <img src="http://s7.addthis.com/static/btn/v2/lg-share-en.gif">
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
  <p>You can find this information by opening up your Chrome Developers Tools. Click on the network tab, and then refreshing the download of content (make sure your cache is empty to get the most accurate results). After the list of documents and files that need to be downloaded for the web page appear, sort the items by size by clicking on the size header until the triangle is pointed downward. After having sorted the list, you can scroll down the list focusing on the each item's type until you spot the first, image-type item and that is the largest image of www.ticketwizard.com.</p>

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the easiest thing to change to optimize the website?  How many kilobytes of data can be eliminated?
  <p>Optimizing the images on www.ticketwizard.com could reduce kilobytes of data by 885.9 KB - a 39% reduction.</p>