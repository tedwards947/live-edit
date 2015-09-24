/*
 Made w/ love by Tony (tedwards947)
 MIT Licence
 
 For more information on contenteditible, my favorite & extremely-well-supported attribute:
 http://www.w3schools.com/tags/att_global_contenteditable.asp

*/
(function () {
    //http://stackoverflow.com/questions/10730309/find-all-text-nodes-in-html-page
    function deepText(node) {
        var A = [];
        if (node) {
            node = node.firstChild;
            while (node != null) {
                if (node.nodeType == 3) A[A.length] = node;
                else A = A.concat(deepText(node));
                node = node.nextSibling;
            }
        }
        return A;
    }

    function setTextContentEditable(){
        //gets all text nodes within the body
        var allTextNodes = deepText(document.getElementsByTagName('body')[0]);
        allTextNodes.forEach(function(textNode){
            //sets the text node's parent to contenteditable
            //for more information on contenteditable, my favorite attribute: 
            textNode.parentNode.contentEditable = true;
            return textNode.parentNode;
        });        
    }
    setTextContentEditable();
})();
