$('#action').click(function(){
	  var possible = "";
	  var passwordLength = ( $('#password-length').val()=="" ?  8 : $('#password-length').val());
	  
	  var includeNumbers = ( $('#include-numbers').val()=="" ?  "0123456789" : $('#include-numbers').val());
	        possible += includeNumbers;

	  var includeLowercaseCharacters = ( $('#include-lowercase-characters').val()=="" ?  "abcdefghijklmnopqrstuvwxyz" : $('#include-lowercase-characters').val());
	        possible += includeLowercaseCharacters;
			
	  var includeUppercaseCharacters = ( $('#include-uppercase-characters').val()=="" ?  "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : $('#include-uppercase-characters').val());
	        possible += includeUppercaseCharacters;	  
	  
	  
	  var includeSymbols = ( $('#include-symbols').val()=="" ?  "!\";#$%&\'()*+,-./:;<=>?@[]^_`{|}~" : $('#include-symbols').val());
	        possible += includeSymbols;	  
	  
	  
	  
	  var text = "";

	  for (var i = 0; i <passwordLength ; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));

				  $('#generated-pass').val(text);
});

document.getElementById("copy").addEventListener("click", function() {
    copyToClipboard(document.getElementById("generated-pass"));
});

function copyToClipboard(elem) {
	  // create hidden text element, if it doesn't already exist
    var targetId = "_hiddenCopyText_";
    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var origSelectionStart, origSelectionEnd;
    if (isInput) {
        // can just use the original source element for the selection and copy
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
    } else {
        // must use a temporary form element for the selection and copy
        target = document.getElementById(targetId);
        if (!target) {
            var target = document.createElement("textarea");
            target.style.position = "absolute";
            target.style.left = "-9999px";
            target.style.top = "0";
            target.id = targetId;
            document.body.appendChild(target);
        }
        target.textContent = elem.textContent;
    }
    // select the content
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);
    
    // copy the selection
    var succeed;
    try {
    	  succeed = document.execCommand("copy");
    } catch(e) {
        succeed = false;
    }
    // restore original focus
    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }
    
    if (isInput) {
        // restore prior selection
        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    } else {
        // clear temporary content
        target.textContent = "";
    }
    return succeed;
}



document.execCommand