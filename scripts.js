
function main() {

    // add functions here...
	var doSomething = function() {
	
		// output text like this...
		outputLine('This is me doing something!');
		
	}
    
	doSomething();
}

function outputLine(line) {
    
    var output = document.getElementById('output');
        
    var currentHtml = output.innerHTML;
    
    var newHtml = currentHtml + line + '<br />';
    
    output.innerHTML = newHtml;
    
}