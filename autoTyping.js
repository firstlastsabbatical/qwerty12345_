var Trinity=new Array(
				"\nroot@localhost:~# I will make a modular version of this script called", "\ntypingScript.js.", 
				"\nroot@localhost:~# Knock! knock! Wake up Neo...",
				"\nroot@localhost:~# Follow the white rabbit..."
				);

var index=0; text_pos=0;
var str_length=Trinity[0].length;
var contents, row;
function Neo()
{
	contents="";
	row=Math.max(0,index-9);
	while(row<index)
		contents += Trinity[row++] + "\r\n";
	document.forms[0].elements[0].value = contents + Trinity[index].substring(0,text_pos) + "_";
	if(text_pos++==str_length)
	{
		text_pos=0;
		index++;
		if(index!=Trinity.length)
		{
			str_length=Trinity[index].length;
			setTimeout("Neo()",2000);
		}
	} else
	setTimeout("Neo()");
}