var a='\*word\* is apple is red \*bike\* is apple is red \*fork\* is apple is red'

var match = /\*.*\*/gi.exec(a);
var str = a.replace(/\*.*\*/i,"birdeee");