var mpointer=0, repeat=0, flag=0, sub="", n=0, count=0, time=0;

function navNext()
{
	for (temp = 0; temp <= 7; temp++) 
	{ 
		document.getElementById ('canvas'+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
	document.getElementById('nextButton').style.visibility="hidden";
	magic();
}

var ca;
var questions=["The amount of cement taken for experimentation is ",
				"Initial setting time is the interval between the",
				"To Measure initial setting time the penetration</br> of the needle is checked for every",
				"The cement grade standard whose Initial Setting Time</br> and Final Setting Time is 30min and 600min is"];
				
var options2=[["200g","300g"," 500g","1000g"],//300g
			  ["moment water is added to the cement, to the time paste starts losing it's plasticity",
			   "moment water is added to the cement, to the time paste starts gaining it's plasticity",
			   "moment water is added to the cement, to the time paste completely looses it's plasticity",
			   "moment water is added to the cement, to the time paste completely gains it's plasticity"],//moment water is added to the cement, to the time paste starts losing it's plasticity
			  ["5min","10min","30min","1hour"],//5min
			  ["Super Sulphated","PSC","OPC","None of the Above"]];//OPC
			  
function validateAnswer(qn,ans,left,top)
{
	$("#answer").empty();
	document.getElementById("a").innerHTML="";
	document.getElementById("questDiv").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:"+left+";top:"+top+";";
	document.getElementById("q").innerHTML=questions[qn];
	el = document.createElement("option");
	el.textContent = " ";
	el.value = " ";
	answer.appendChild(el);
	for(j=0;j<options2[qn].length;j++)
	{
		opt = options2[qn][j];

		el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		answer.appendChild(el);
		$("#answer").change(function()
		{
			ca=$(this).children("option:selected").val();
			if(options2[qn][ans]==ca)
			{
				document.getElementById("a").innerHTML="Correct Answer!";
			}
			else
			{
				document.getElementById("a").innerHTML="Wrong! Answer is "+options2[qn][ans];
			}
			setTimeout(function()
			{
				document.getElementById("questDiv").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			},1500);
		});
	}
}

function animatearrow()
{
	if (document.getElementById('arrow1').style.visibility=="hidden")
		document.getElementById('arrow1').style.visibility="visible";
	else
		document.getElementById('arrow1').style.visibility="hidden";
}

function myStopFunction() 
{
    clearInterval(myInt);
    document.getElementById('arrow1').style.visibility="hidden";
}

function blinkArrow(l,t,d,h)
{
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:"+l+"px; top:"+t+"px; height:"+h+"px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate("+d+"deg)"; 
	document.getElementById("arrow1").style.msTransform = "rotate("+d+"deg)";
	document.getElementById("arrow1").style.transform = "rotate("+d+"deg)";
}

function magic()
{
	if (simsubscreennum==1)
	{  
		document.getElementById('nextButton').style.visibility="hidden";
		setTimeout(function()
		{
			blinkArrow(341,446,90,30);
			document.getElementById('tare1').onclick="";
			document.getElementById('on1').onclick=function(){step1();}
		},700);
    }
	
	else if (simsubscreennum==2)
	{
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('mw').style.visibility="hidden";
		document.getElementById('p3').style.visibility="hidden";
		document.getElementById('wc').style.visibility="hidden";
		document.getElementById('v2-2').style.visibility="hidden";
		document.getElementById("form").onclick=function()
		{
			document.getElementById("formula").style.visibility="visible";
			document.getElementById("r1").style.visibility="hidden";
			document.getElementById("w1").style.visibility="hidden";
		}
		document.getElementById("check").onclick=function()
		{
			document.getElementById("formula").style.visibility="hidden";
			if(!document.getElementById("output").value  || !document.getElementById("output").value!=" ")
			{
				alert("Enter the value to proceed ");
			}
			else
			{
				n2=81.6;
				n = document.getElementById("output").value;
				if(Math.round(n) == Math.round(n2))
				{
					document.getElementById("check").style.visibility="hidden";
					document.getElementById("form").style.visibility="hidden";
					document.getElementById("r1").style.visibility="visible";
					document.getElementById("result").style.visibility="hidden";
					document.getElementById("w1").style.visibility="hidden";
					document.getElementById("output").style.border="none";
					document.getElementById("output").style.color="black";
					document.getElementById("output").disabled="true";
					document.getElementById("output").style.backgroundColor="white";
					setTimeout(function()
					{
						step2start();
					},750);
				}
				else
				{
					document.getElementById("result").style.visibility="visible";
					document.getElementById("w1").style.visibility="visible";
				}
			}	
			document.getElementById("result").onclick=function()
			{
				document.getElementById("output").value="";
				document.getElementById("check").style.visibility="hidden";
				document.getElementById("result").style.visibility="hidden";
				document.getElementById("r1").style.visibility="hidden";
				document.getElementById("w1").style.visibility="hidden";
				document.getElementById("form").style.visibility="hidden";
				document.getElementById("formula").style.visibility="hidden";
				document.getElementById("output").style.border="none";
				document.getElementById("output").style.color="black";
				document.getElementById("output").disabled="true";
				document.getElementById("output").style.backgroundColor="white";
				document.getElementById("output").value=n2;
				setTimeout(function()
				{
					step2start();
				},750);
			}
		}
    }
	else if (simsubscreennum==3)
	{
		document.getElementById('pc2').style.visibility="hidden";
		document.getElementById('cw').style.visibility="hidden";
		document.getElementById('wc3').style.visibility="hidden";
		blinkArrow(93,350,180,30);
		document.getElementById('tapi3').onclick = function(){step3();}
	}
	else if (simsubscreennum==4)
	{
		document.getElementById('pc3').style.visibility="hidden";
		document.getElementById('cwc3').style.visibility="hidden";
		blinkArrow(116,240,180,30);
		document.getElementById('tp1').onclick=function(){step4();}
	}
	else if (simsubscreennum==5)
	{
		refresh();
		if(flag==1)
		{
			document.getElementById('canvas7').style.visibility="hidden";
			document.getElementById('nb').style.visibility="visible";
			document.getElementById('ln').style.visibility="visible";
			document.getElementById('mc').style.visibility="visible";
			document.getElementById('arw').style.visibility="visible";
			document.getElementById('md4').style.visibility="visible";
		}
		document.getElementById('md3').style.visibility="hidden";  
		blinkArrow(645,320,315,30);
		document.getElementById('md4').onclick=function(){step5();}
  	 }
	else if (simsubscreennum==6)
	{
		refresh();
		if(flag==1)
		{
			document.getElementById('arw').style.visibility="hidden";
			document.getElementById('nb').style.visibility="hidden";
			document.getElementById('mc').style.visibility="hidden";
			document.getElementById('ndl5').style.visibility="hidden";
			document.getElementById('ln22').style.visibility="hidden";
			document.getElementById('md41').style.visibility="hidden";
			document.getElementById('md41').style.visibility="hidden";
			document.getElementById('ln2').style.visibility="hidden";
			document.getElementById('ln3').style.visibility="hidden";
			document.getElementById('ln33').style.visibility="hidden";
			document.getElementById('init').style.visibility="hidden";
			document.getElementById('zmc1').style.visibility="hidden";
			document.getElementById('nwrd1').style.visibility="hidden";
			document.getElementById('zmv1').style.visibility="hidden";	
			document.getElementById('nb6').style.visibility="visible";
			document.getElementById('ln61').style.visibility="visible";
			document.getElementById('ln63').style.visibility="visible";
			document.getElementById('mc6').style.visibility="visible";
			document.getElementById('arw6').style.visibility="visible";
			document.getElementById('md61').style.visibility="visible";
			document.getElementById('nextButton').style.visibility="hidden";
			blinkArrow(225,173,315,30);
			document.getElementById('nb6').onclick=function(){step6();}
		}
		else
		{
			document.getElementById('nb').style.visibility="hidden";
			document.getElementById('mc').style.visibility="hidden";
			document.getElementById('ndl5').style.visibility="hidden";
			document.getElementById('ln22').style.visibility="hidden";
			document.getElementById('md41').style.visibility="hidden";
			document.getElementById('md41').style.visibility="hidden";
			document.getElementById('ln2').style.visibility="hidden";
			document.getElementById('ln3').style.visibility="hidden";
			document.getElementById('ln33').style.visibility="hidden";
			document.getElementById('init').style.visibility="hidden";
			document.getElementById('zmc1').style.visibility="hidden";
			document.getElementById('nwrd1').style.visibility="hidden";
			document.getElementById('zmv1').style.visibility="hidden";		
			document.getElementById('nextButton').style.visibility="hidden";
			blinkArrow(225,173,315,30);
			document.getElementById('nb6').onclick=function(){step6();}
		}
	}
	else if (simsubscreennum==7)
	{	
        refresh();
		refresh2();
		if(count==1 || count==2 || count==3) flag=1;
		if(count==4) flag=2;
		if(flag==1) simsubscreennum=4;
		if(flag==2) simsubscreennum=7;
		document.getElementById('time').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('time').innerHTML="";
        document.getElementById('swh').style.visibility="hidden";
		document.getElementById('ndl').style.visibility="hidden";
		document.getElementById('5').style.visibility="hidden";
		document.getElementById('nb6').style.visibility="hidden";
		document.getElementById('arw6').style.visibility="hidden";
		document.getElementById('mc6').style.visibility="hidden";
		document.getElementById('ln62').style.visibility="hidden";
		document.getElementById('md61').style.visibility="hidden";
		document.getElementById('ln64').style.visibility="hidden";
		document.getElementById('final').style.visibility="hidden";
		document.getElementById('zmc6').style.visibility="hidden";
		document.getElementById('nwrd6').style.visibility="hidden";
        document.getElementById('zmv6').style.visibility="hidden";		
		document.getElementById('ln63').style.visibility="hidden";
		if(count==1)
		{			
			document.getElementById('final11').style.visibility="visible";
			document.getElementById('nextButton').style.visibility="visible";
		}
	    else if(count==2)
		{
			document.getElementById('final22').style.visibility="visible";
			document.getElementById('nextButton').style.visibility="visible";
		}
		else if(count==3)
		{
			document.getElementById('final33').style.visibility="visible";
			validateAnswer(2,0,"375px","150px");
		}
		else if(count==4)
		{
			document.getElementById('final44').style.visibility="visible";
			document.getElementById('nextButton').style.visibility="visible";
		}
	}
	else if(simsubscreennum==8)
	{
		document.getElementById('final44').style.visibility="hidden";
		document.getElementById('rs').style.visibility="visible";
		setTimeout(function()
		{
			document.getElementById('rs').style.visibility="hidden";
			document.getElementById('table').style.visibility="visible";
			document.getElementById('step8').style.visibility="visible";
			document.getElementById('inferenceDiv').style.visibility="visible";
		},4000);
	}
}
    
function step1()
{
	myStopFunction();
	document.getElementById('mw').style.visibility="visible";
	setTimeout(function()
	{
		document.getElementById('hp2-1').style.visibility="visible";
		setTimeout(function()
		{   
			blinkArrow(300,240,0,35);
			document.getElementById('hp2-1').onclick=function(){step12();}
		},500);	
	},500);					             
}

function step12()
{
	myStopFunction();
	document.getElementById('hp2-1').style.visibility="hidden";
	document.getElementById('p2').style.visibility="visible";
	setTimeout(function()
	{
		blinkArrow(447.5,446,90,30);
		document.getElementById('tare1').onclick=function(){step13();} 
	},800); 		 
}

function step13()
{
	myStopFunction();
	document.getElementById('tare1').onclick="";
	document.getElementById('v2-1').style.visibility="visible";
	setTimeout(function()
	{
		document.getElementById('swc2').style.visibility="visible";
		document.getElementById('hand').style.visibility="visible";
		setTimeout(function()
		{
			blinkArrow(650,180,360,30);
			document.getElementById('hand').onclick=function(){step14();} 
		},500);	
	},500);		 
}
	
function step14()
{
	myStopFunction();
	document.getElementById('swc2').style.visibility="hidden";
	document.getElementById('hand').style.transformOrigin = "100% 80%";
	document.getElementById('hand').style.animation = "valveturn-4 1.5s forwards ";
	setTimeout(function()
	{
		document.getElementById('pwc').style.visibility="visible";
		setTimeout(function()
		{	
			document.getElementById('v2-1').style.visibility="hidden";
			document.getElementById('p2').style.visibility="hidden";
			document.getElementById('p3').style.visibility="visible";
			document.getElementById('wc').style.visibility="visible";
			document.getElementById('pwc').style.visibility="hidden";
			document.getElementById('v2-2').style.visibility="visible";
			setTimeout(function()
			{
				document.getElementById('hand').style.visibility="hidden";
				setTimeout(function()
				{
					document.getElementById('nextButton').style.visibility="visible";
				},1000);
			},500);
		},500);
	},500);  
}
	
function step2start()
{
	document.getElementById("2-2").style.visibility="hidden";
	document.getElementById("2-3").style.visibility="hidden";
	document.getElementById("22-1").style.visibility="hidden";
	document.getElementById("r1").style.visibility="hidden";
	document.getElementById("w1").style.visibility="hidden";
	document.getElementById("output").style.visibility="hidden";
	document.getElementById("flsk").style.visibility="visible";
	document.getElementById("hd1").style.visibility="visible";
	blinkArrow(525,140.75,360,30);
	document.getElementById('hd1').onclick=function(){step2();}
}
function step2()
{
	myStopFunction();
	document.getElementById('swh').style.visibility="visible";
	document.getElementById('ndl').style.visibility="visible";
	document.getElementById('hd1').style.visibility="hidden";
	document.getElementById('hd2').style.visibility="visible";
	document.getElementById('hd2').style.transformOrigin = "100% 80%";
	document.getElementById('hd2').style.animation = "valveturn-3 3.5s forwards ";
	setTimeout(function()
	{
		document.getElementById('pw').style.visibility="visible";
		document.getElementById('pw').style.transformOrigin = "100% 80%";
		document.getElementById('pw').style.animation = "water-4 3.5s forwards ";
		setTimeout(function()
		{
			document.getElementById('pw').style.visibility="visible";
			document.getElementById('wtr').style.visibility="visible";
			document.getElementById('wtr').style.transformOrigin = "100% 80%";
			document.getElementById('wtr').style.animation = "water-3 2s forwards ";
			document.getElementById('pw').style.visibility="hidden";
			setTimeout(function() 
			{
				document.getElementById('hd2').style.visibility="hidden";
				document.getElementById('wtr').style.visibility="hidden";
				document.getElementById('flsk').style.visibility="hidden";
				document.getElementById('flsk1').style.visibility="visible";
				document.getElementById('pc2').style.visibility="visible";
				document.getElementById('wc2').style.visibility="visible";
				blinkArrow(460,315,360,30);
				document.getElementById('flsk1').onclick=function(){step21();}
			},1000);	
		},600);
	},1900);
}
function step21()
{
	myStopFunction();
	document.getElementById('flsk1').style.visibility="hidden";
	document.getElementById('flsk2').style.visibility="visible";
	document.getElementById('flsk2').style.transformOrigin = "98% 80%";
	document.getElementById('flsk2').style.animation = "valveturn-6 2s forwards ";		
	setTimeout(function()
	{
		document.getElementById('wc2').style.visibility="hidden";
		document.getElementById('wc3').style.visibility="visible";
		document.getElementById('fp').style.visibility="visible";
		document.getElementById('cw').style.visibility="visible";
		setTimeout(function()
		{
			document.getElementById('fp').style.visibility="hidden";
			document.getElementById('flsk2').style.visibility="hidden";
			document.getElementById('ndl').style.transformOrigin = "50% 90%";
			document.getElementById('swh').style.visibility="visible";
			document.getElementById('ndl').style.visibility="visible";
			document.getElementById('ndl').style.animation = "valveturn-7 180s forwards ";
			validateAnswer(0,1,"150px","150px");
		},2200);
	},1800);
}

function step3 ()
{
	myStopFunction();
	document.getElementById('tapi3').style.visibility="hidden";
	document.getElementById('tapi3a').style.visibility="visible";
	document.getElementById('tapi3a').style.animation = "mymv-1 2.0s 5 forwards ";
	setTimeout(function()
	{
		document.getElementById('wc33').style.visibility="hidden";
		document.getElementById('wcw3').style.visibility="visible";
		setTimeout(function()
		{
			document.getElementById('cwc3').style.visibility="visible";
			document.getElementById('cw3').style.visibility="hidden";
			document.getElementById('wc33').style.visibility="hidden";
			document.getElementById('wcw3').style.visibility="hidden";
			document.getElementById('tapi3').style.visibility="hidden";
			document.getElementById('tapi3a').style.visibility="hidden";
			validateAnswer(1,0,"50px","200px");
		},3000);
	},5500);
}
	
function step4()
{
	myStopFunction();
	document.getElementById('tp1').style.animation = "mymv-3 2s forwards ";
	setTimeout(function()
	{
		document.getElementById('cwc2').style.visibility="visible";
		document.getElementById('tp1').style.visibility="hidden";
		document.getElementById('cwc1').style.visibility="hidden";
		document.getElementById('tc2').style.visibility="visible";
		document.getElementById('tc2').style.animation = "mymv-4 2s forwards ";
		setTimeout(function()
		{
			document.getElementById('tc2').style.visibility="hidden";
			document.getElementById('tc3').style.visibility="visible";
			document.getElementById('tc3').style.transformOrigin = "100% 80%";
			document.getElementById('tc3').style.animation = "valveturn-5 1s forwards ";
			setTimeout(function()
			{
				document.getElementById('tc2').style.visibility="hidden";
				document.getElementById('tc3').style.visibility="visible";
				document.getElementById('tc3').style.transformOrigin = "100% 80%";
				document.getElementById('tc3').style.animation = "valveturn-5 1s forwards ";
				setTimeout(function()
				{
					document.getElementById('md1').style.visibility="hidden";
					document.getElementById('md2').style.visibility="visible";
					document.getElementById('tc3').style.visibility="hidden";
					document.getElementById('tc2').style.visibility="visible";
					document.getElementById('cwc2').style.visibility="hidden";
					document.getElementById('tc2').style.animation = "mymv-5 1s forwards ";
					setTimeout(function()
					{
						document.getElementById('tc2').style.visibility="hidden";
						document.getElementById('md2').style.visibility="hidden";
						document.getElementById('md3').style.visibility="visible";
						setTimeout(function()
						{
							document.getElementById('nextButton').style.visibility="visible";
						},500);
					},1200);
				},1000);
			},1000);
		},2000);
	},2000);
}
	
function step5()
{
	myStopFunction();
	refresh2();
	count++;
	time=time+5;
	document.getElementById('time').style="visibility:visible ;left: 510px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
	document.getElementById('time').innerHTML="Time : " + time+"min";
	if(count==1)			
		document.getElementById('5').style.visibility="visible";
	else if(count==2)
		document.getElementById('10').style.visibility="visible";
	else if(count==3)
		document.getElementById('15').style.visibility="visible";
	else if(count==4)
		document.getElementById('20').style.visibility="visible";
	else if(count==5)   
		document.getElementById('25').style.visibility="visible";
	else if(count==6)
		document.getElementById('30').style.visibility="visible";
	else if(count==7)
		document.getElementById('35').style.visibility="visible";
	else if(count==8)
		document.getElementById('40').style.visibility="visible";
	else if(count==9)
		document.getElementById('45').style.visibility="visible";
	document.getElementById('md4').style.visibility="hidden";
	document.getElementById('md41').style.visibility="visible";
	document.getElementById('ndl5').style.visibility="visible";
	document.getElementById('scw').style.visibility="visible";
	blinkArrow(250.5,344,360,30);
	document.getElementById('scw').onclick=function(){step51();}
}
	
function step51()
{
	myStopFunction();
	setTimeout(function()
	{	
		document.getElementById('zmc1').style.visibility="visible";
		document.getElementById('nwrd1').style.visibility="visible";
		document.getElementById('zmv1').style.visibility="visible";		
		document.getElementById('scw').style.visibility="hidden";
		document.getElementById('ln').style.transformOrigin = "100% 80%";
		document.getElementById('ln').style.animation = "mymv-ln 0.5s forwards ";
		document.getElementById('ndl5').style.transformOrigin = "100% 80%";
		document.getElementById('ndl5').style.animation = "mymv-ndl 0.5s forwards ";
		document.getElementById('arw').style.transformOrigin = "100% 80%";
		document.getElementById('arw').style.animation = "mymv-arw 0.5s forwards ";
		setTimeout(function()
		{
			document.getElementById('ln').style.visibility="hidden";
			document.getElementById('ln22').style.visibility="visible";
			document.getElementById('ln2').style.visibility="visible";
			document.getElementById('zmv1').style.animation = "mymv-zmv 0.5s forwards ";
			document.getElementById('init').style.visibility="visible";
			document.getElementById('nextButton').style.visibility="visible";
		},500);
	},500);
}
	
function step6()
{
	myStopFunction();
	document.getElementById('zmc6').style.visibility="visible";
	document.getElementById('nwrd6').style.visibility="visible";
	document.getElementById('zmv6').style.visibility="visible";				
	document.getElementById('ln61').style.visibility="hidden";
	document.getElementById('ln63').style.visibility="hidden";
	document.getElementById('ln62').style.visibility="visible";
	document.getElementById('ln64').style.visibility="visible";
	document.getElementById('arw6').style.transformOrigin = "100% 80%";
	document.getElementById('arw6').style.animation = "mymv-arw2 0.5s forwards ";
	if(count==1||count==2||count==3||count==5)
	{
		document.getElementById('zmv6').style.transformOrigin = "100% 80%";
		document.getElementById('zmv6').style.animation = "mymv-zmv2 0.5s forwards ";
	}
	else if(count==6||count==4)
	{
		document.getElementById('zmv6').style.transformOrigin = "100% 80%";
		document.getElementById('zmv6').style.animation = "mymv-zmv1 0.5s forwards ";
	}
	else if(count==7)
	{
		document.getElementById('zmv6').style.transformOrigin = "100% 80%";
		document.getElementById('zmv6').style.animation = "mymv-zmv3 0.5s forwards ";
	}
	else if(count==8)
	{
		document.getElementById('zmv6').style.transformOrigin = "100% 80%";
		document.getElementById('zmv6').style.animation = "mymv-zmv4 0.5s forwards ";
	}
	else if(count==9)
	{
		document.getElementById('zmv6').style.transformOrigin = "100% 80%";
		document.getElementById('zmv6').style.animation = "mymv-zmv5 0.5s forwards ";
	}
	if(count==1)			
		document.getElementById('final').style.visibility="visible";
	else if(count==2)
		document.getElementById('final1').style.visibility="visible";
	else if(count==3)
		document.getElementById('final3').style.visibility="visible";
	else if(count==4)
	{
		document.getElementById('final4').style.visibility="visible";
		document.getElementById('nextButton').style.visibility="hidden";
	}
	document.getElementById('nextButton').style.visibility="visible";
}

function refresh()
{
	document.getElementById('arw').style.transformOrigin = "";
	document.getElementById('arw').style.animation = "";
	document.getElementById('arw6').style.transformOrigin = "";
	document.getElementById('arw6').style.animation = "";
	document.getElementById('ndl').style.transformOrigin = "";
	document.getElementById('ndl').style.animation = "";
	document.getElementById('ln').style.transformOrigin = "";
	document.getElementById('ln').style.animation = "";
	document.getElementById('zmc1').style.transformOrigin = "";
	document.getElementById('zmc1').style.animation = "";
	document.getElementById('nwrd1').style.transformOrigin = "";
	document.getElementById('nwrd1').style.animation = "";
	document.getElementById('nwrd1').style.transformOrigin = "";
	document.getElementById('zmv1').style.animation = "";
	document.getElementById('zmv1').style.transformOrigin = "";
	document.getElementById('ndl5').style.transformOrigin = "";
	document.getElementById('ndl5').style.animation = "";
	document.getElementById('nwrd6').style.transformOrigin = "";
	document.getElementById('nwrd6').style.animation = "";
	document.getElementById('nwrd6').style.transformOrigin = "";
	document.getElementById('zmv6').style.animation = "";
	document.getElementById('zmv6').style.transformOrigin = "";
	document.getElementById('final').style.visibility="hidden";
	document.getElementById('final1').style.visibility="hidden";
	document.getElementById('final3').style.visibility="hidden";
	document.getElementById('final4').style.visibility="hidden";
	document.getElementById('final11').style.visibility="hidden";
	document.getElementById('final22').style.visibility="hidden";
	document.getElementById('final33').style.visibility="hidden";
	document.getElementById('final44').style.visibility="hidden";
	document.getElementById("arrow1").style.animation = "";
	
}
function refresh2()
{
	document.getElementById('5').style.visibility="hidden";
	document.getElementById('10').style.visibility="hidden";
	document.getElementById('15').style.visibility="hidden";
	document.getElementById('20').style.visibility="hidden";
	document.getElementById('25').style.visibility="hidden";
	document.getElementById('30').style.visibility="hidden";
	document.getElementById('35').style.visibility="hidden";
	document.getElementById('40').style.visibility="hidden";
	document.getElementById('45').style.visibility="hidden";
}
		
function checkInference()
{
	document.getElementById("ans").style.visibility="visible";
	if($("input[name='inf']:checked").val()==4)
	{
		document.getElementById("ans").innerHTML="Correct answer!";
	}
	else
	{
		document.getElementById("ans").innerHTML="Wrong! Answer is 45";
	}

	setTimeout(function()
	{
		document.getElementById("inferenceDiv").style.visibility="hidden";
		document.getElementById("inference").style.visibility="hidden";
		document.getElementById("ob").style.visibility="visible";
		document.getElementById("infAns").innerHTML="The initial setting time of cement (OPC) is greater than <strong>30minutes</strong>.</br> The given sample of cement has <strong>45minutes</strong> of initial setting time.</br> Hence it is <strong>in range</strong>.";
		$("#infAns").fadeIn(750);
	},1000);
}					