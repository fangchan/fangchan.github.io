var door = 1;
var gate=0;
var counter=0;
			
function pointerLR()
{
	if (door==1)
	{
		document.getElementById("menu").style.left="-240px";				
		document.getElementById("pointerL").style.left="-240px";
					
		door = 0;
	}
	else
	{
		document.getElementById("menu").style.left="0px";
		document.getElementById("pointerL").style.left="0px";
		door = 1;
	}
}
			
function homepage()
{
	window.location.href = "index.html";
}


function show()
{
	var x = document.getElementsByClassName("lab");

	if (counter==0)
	{
		for (i = 0; i < x.length; i++) 
		{
    	 x[i].style.position="initial";
		}

		counter=1;
	}
	else
	{
		for (i = 0; i < x.length; i++) 
		{
			 x[i].style.position="absolute";
		}
		counter=0;
	}
}
function show2()
{
	var x = document.getElementsByClassName("php");

	if (counter==0)
	{
		for (i = 0; i < x.length; i++) 
		{
    	 x[i].style.position="initial";
		}

		counter=1;
	}
	else
	{
		for (i = 0; i < x.length; i++) 
		{
			 x[i].style.position="absolute";
		}
		counter=0;
	}
}

function moon()
{
	window.location.href = "https://www.viki.com/videos/1107432v-moonlight-drawn-by-clouds-episode-1?locale=en#modal-episode";
}
function mega()
{
	window.location.href = "https://mega.nz/#F!JEslnYZb!fNs1PoJ0mgxcGt89l788MA";
}
function link()
{
	window.location.href = "http://www.bilibili.com/video/av5544814/?from=search&seid=4551366918372122792";
}
function noodle()
{
	window.location.href = "https://drive.google.com/open?id=0B31x7xvwN4N-endJYkV6OHlETFE";
}
function technology()
{
	window.location.href = "https://drive.google.com/open?id=0B31x7xvwN4N-NGo3Z2Y4Q1dFV0U";
}
function houses()
{
	window.location.href = "https://drive.google.com/open?id=0B31x7xvwN4N-eW8yZ2JNNkVuZkE";
}
function tojoomla()
{
	window.location.href = "http://mycardandgame.byethost5.com/joomla30/	";
}	

		
function zoom()
{
	if (gate==0)
	{

	document.getElementById("rockman").style.left="240px";
	document.getElementById("rockman").style.top="0px";
	document.getElementById("rockman").style.width="640px";
	document.getElementById("rockman").style.height="480px";
	document.getElementById("rockman").style.cursor="default";
	document.getElementById("close").style.left="860px";
	document.getElementById("square").style.fontSize="500%";
				
	gate=1;
	}
}
function close1()
{
	if (gate==1)
	{
	document.getElementById("rockman").style.left="400px";
	document.getElementById("rockman").style.top="400px";
	document.getElementById("rockman").style.width="120px";
	document.getElementById("rockman").style.height="100px";
	document.getElementById("rockman").style.cursor="pointer";
	document.getElementById("close").style.left="-100px";	
					
	gate=0;
					
	}
}

var num=100;

function big()
{
	num+=10;
	document.getElementById("square").style.fontSize="num";
}
function drama()
{
	window.location.href = "drama.html";
}
