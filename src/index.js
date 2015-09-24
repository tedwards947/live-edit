(function () {
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
        var allTextNodes = deepText(document.getElementsByTagName('body')[0]);
        Array.prototype.slice.call(allTextNodes).forEach(function(textNode){
            textNode.parentNode.contentEditable = true;
            return textNode.parentNode
        });        
    }
    setTextContentEditable();
})();
