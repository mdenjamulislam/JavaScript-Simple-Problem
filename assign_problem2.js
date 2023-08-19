function matchFinder(string1, string2) {
    
  if(string1.includes(string2)) {
      return true;
  }else {
      return false;
  }
}

const output = matchFinder("John Doe", "ohn");
console.log(output);

/*
function matchFinder(string1, string2) {
    if (typeof(string1) !== 'string' && typeof(string2) !== 'string') {
      return "Both inputs must be strings.";
    }else {
      if(string1.includes(string2)){
        return true;
      }
    }
}
  
console.log(matchFinder("hello world", "78")); // Output: true

 */ 