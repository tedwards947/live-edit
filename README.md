# live-edit
allows quick and easy editing of text for localization testing and fun

## What is it
live-edit allows novice users to edit text easily on a webpage as if it were a word processor.
it's easy to activate by simply clicking on a bookmarklet.

the inspiration for this was allowing localization professionals an easy way to see how their translated
text looks in the wild.

any edits made to a webpage with this **will not be retained** upon navigation or refresh

## Instructions

#### Bookmarklet code
`
javascript:!function(){/*made w love by tony (tedwards947) https://github.com/tedwards947/live-edit */function n(t){var e=[];if(t)for(t=t.firstChild;null!=t;)3==t.nodeType?e[e.length]=t:e=e.concat(n(t)),t=t.nextSibling;return e}function t(){var t=n(document.getElementsByTagName("body")[0]);t.forEach(function(n){return n.parentNode.contentEditable=!0,n.parentNode})}t()}();
`
##### Chrome
1. create a new bookmark in Chrome.
* right click the bookmarks bar and click "Add Page".
* name it whatever you like. 
* copy the code above and paste into the 'URL' field
* navigate to a page you're interested in testing
* click the bookmark you just created
* voilà. you can now edit the webpage!

##### Other browsers
* i'll add this later, but for now know that there are many resources online explaining how to add bookmarks