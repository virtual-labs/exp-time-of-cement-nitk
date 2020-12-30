//on click of next button
var flag=0;
var repeat=0;
var a;
var values=[26,28,30,32];
var values1=[28,19,11,6];
function navNext()
{

     for (temp = 0; temp <= 5 ; temp++) 
     { 
         document.getElementById ('canvas'+temp).style.visibility="hidden";
     }
     simsubscreennum+=1;

     document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
     document.getElementById('nextButton').style.visibility="hidden";
     magic();
}



var ca;
var questions=["The gauging time should be ___________ .",
				"Standard Vicat Plunger Surface Area is ______ mm<sup>2</sup>.",
				"The quantity of water added for each trial</br> is increased at ____________ for each trial."];
				
var options2=[["within 1 minutes","within 3 minutes","3 to 5 minutes","atleast more than 5 minutes"],//3 to 5 minutes.
			  ["1","10","100","1000"],//1mm2
			  ["0.5%","0.2%","1%","2%"]];//2%
			  
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



//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
     if (document.getElementById('arrow1').style.visibility=="hidden")
         document.getElementById('arrow1').style.visibility="visible";
     else
         document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}

//-------------------------------------function magic starts here----------------------------------------------------

function magic()
{
	if (simsubscreennum==1)
	{  
         //mpointer+=1;
         repeat+=1;
		 
		 if(flag==1)
	     {
		 lnt++;
		 refresh();
		 document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		 document.getElementById('trial').innerHTML="Trial : " + repeat;
		 document.getElementById('nextButton').style.visibility="hidden";
         document.getElementById('canvas1').style.visibility="visible";
		 document.getElementById('step6-1').style.visibility="hidden";
		 document.getElementById('can6-1').style.visibility="hidden";
		 document.getElementById('can6-2').style.visibility="hidden";
		 document.getElementById('canvas6').style.visibility="hidden";
         document.getElementById('ewm1').style.visibility="visible";
         document.getElementById('on2-1').style.visibility="visible";
         document.getElementById('off2-1').style.visibility="visible";
         document.getElementById('zero2-1').style.visibility="visible";
         document.getElementById('tare2-1').style.visibility="visible";
          
		 setTimeout(function()
		 {
             myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 345px; top:446px; height: 30px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(90deg)";
		     document.getElementById('tare2-1').onmouseover="";
	         document.getElementById('on2-1').onmouseover=function(){step1();}
		 },700);
        }
		else
		{
		 refresh();
		 //document.getElementById('canvas1').style.visibility="visible";
	     document.getElementById('ewm1').style.visibility="visible";
         document.getElementById('on2-1').style.visibility="visible";
         document.getElementById('off2-1').style.visibility="visible";
         document.getElementById('zero2-1').style.visibility="visible";
         document.getElementById('tare2-1').style.visibility="visible";
         
		 document.getElementById('nextButton').style.visibility="hidden";
		 document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		 document.getElementById('trial').innerHTML="Trial : " + repeat;
		 setTimeout(function()
		 {
             myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 345px; top:446px; height: 30px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(90deg)";
		     document.getElementById('tare2-1').onmouseover="";
	         document.getElementById('on2-1').onmouseover=function(){step1();}
		 },700);
	    }
    }
	
	
	else if (simsubscreennum==2)
	{
		
		refresh();
		myStopFunction();
		a=values[lnt]*3;
		document.getElementById('pumptext-2').innerHTML="Take water of about " +values[lnt]+ "% weight of dry cement and mix it thoroughly with the cement using trowel. The gauging time should not be more than 3 to 5 minutes.";
		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('ewm1').style.visibility="hidden";
        document.getElementById('on2-1').style.visibility="hidden";
        document.getElementById('off2-1').style.visibility="hidden";
        document.getElementById('zero2-1').style.visibility="hidden";
        document.getElementById('tare2-1').style.visibility="hidden";
		 
		 
		 document.getElementById('mw').style.visibility="hidden";
         document.getElementById('p2').style.visibility="hidden";
		 document.getElementById('wc').style.visibility="hidden";

         document.getElementById('v2-2').style.visibility="hidden";
         document.getElementById('on2-3').style.visibility="hidden";
         document.getElementById('tare2-3').style.visibility="hidden";
		 document.getElementById('on2-2').style.visibility="hidden";
		 document.getElementById('tare2-2').style.visibility="hidden";

		 
		document.getElementById('2-2').innerHTML="Percentage of water = "+values[lnt];
		if(repeat==1)
		{
			calcWaterQuantity();
		}
		if(repeat==2)
		{
			document.getElementById('2-2').style.visibility="visible";
			document.getElementById('2-3').style.visibility="visible";
			document.getElementById('22-2').style.visibility="visible";
			document.getElementById('2-2').innerHTML="Percentage of water = "+values[lnt];
			calcWaterQuantity2();
		}
	}
	
	else if (simsubscreennum==3)
	{
		refresh();
		myStopFunction();
		 document.getElementById('cement').style.visibility="hidden";
		 document.getElementById('p3').style.visibility="hidden";
         document.getElementById('cement1').style.visibility="visible";
		 document.getElementById('p4').style.visibility="visible";
         document.getElementById('mould1').style.visibility="visible";
		 document.getElementById('shaker').style.visibility="visible";
         setTimeout(function(){
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:150px; top:180px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		  // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		  // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		 refresh();
		 document.getElementById('shaker').onclick=function(){step3();}
		 },300);
   }
	else if (simsubscreennum==4)
	{
		 refresh();
		 document.getElementById('p4').style.visibility="hidden";
         document.getElementById('mould3').style.visibility="hidden";
		 document.getElementById('setup').style.visibility="visible";
		 document.getElementById('setup4-1').style.visibility="visible";
		 document.getElementById('setup4-2').style.visibility="visible";
		 document.getElementById('setup4-3').style.visibility="visible";
		 document.getElementById('setup4-4').style.visibility="visible";
		 document.getElementById('screw').style.visibility="visible";
		 document.getElementById('mould4').style.visibility="visible";

		 setTimeout(function(){
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:377px; top:296.75px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		  // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		  // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(180deg)";
		 document.getElementById('mould4').onclick=function(){step4();}
		 },350);
		 
		 
	}
	else if (simsubscreennum==5)
	{
		 refresh();
		 
		 document.getElementById('setup').style.visibility="hidden";
		 document.getElementById('setup4-1').style.visibility="hidden";
		 document.getElementById('setup4-2').style.visibility="hidden";
		 document.getElementById('setup4-3').style.visibility="hidden";
		 document.getElementById('setup4-4').style.visibility="hidden";
		 document.getElementById('screw').style.visibility="hidden";
		 		 
         document.getElementById('setup4-5').style.visibility="hidden";
		 document.getElementById('mould4-1').style.visibility="hidden";
         document.getElementById('stat1').style.visibility="hidden";
		 
		 document.getElementById('step5').style.visibility="visible";
		 document.getElementById('step5-1').style.visibility="visible";
		 document.getElementById('step5-2').style.visibility="visible";
		 document.getElementById('setup5').style.visibility="visible";
		 document.getElementById('setup5-1').style.visibility="visible";
		 document.getElementById('setup5-3').style.visibility="visible";
		 document.getElementById('setup5-4').style.visibility="visible";
		 document.getElementById('setup5-5').style.visibility="visible";
		 document.getElementById('mould5-1').style.visibility="visible";
		 document.getElementById('screw5').style.visibility="visible";
	
		 setTimeout(function(){
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 350px; top: 215px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		  // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		  // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		 document.getElementById('setup5-3').onclick=function(){step5();}
		 },350);	
	}
	else if (simsubscreennum==6)
	{
		
		 refresh();
		 document.getElementById('step6-1').style.visibility="visible";
		 document.getElementById('can6-1').style.visibility="visible";
		 document.getElementById('can6-2').style.visibility="visible";
		 
		 document.getElementById('step5').style.visibility="hidden";
		 document.getElementById('step5-1').style.visibility="hidden";
		 document.getElementById('step5-2').style.visibility="hidden";
		 document.getElementById('meter5').style.visibility="hidden";
		 document.getElementById('hg5').style.visibility="hidden";
		 document.getElementById('pic6').style.visibility="hidden";
		 document.getElementById('mould5-2').style.visibility="hidden";
		 document.getElementById('stat2').style.visibility="hidden";
		 document.getElementById('screw5').style.visibility="hidden";
		 document.getElementById('setup5-1').style.visibility="hidden";
		 document.getElementById('setup5-1').style.visibility="hidden";
		 document.getElementById('setup5-3').style.visibility="hidden";
		 document.getElementById('setup5-4').style.visibility="hidden";
		 document.getElementById('setup5-5').style.visibility="hidden";
		 document.getElementById('setup5-6').style.visibility="hidden";
		 document.getElementById('setup5').style.visibility="hidden";
		 document.getElementById('mould5-2').style.visibility="hidden";
         document.getElementById('can6-3').innerHTML="Quantity of water added =" +a+"ml";
		 document.getElementById('can6-2').innerHTML="Final Reading = "+values1[lnt]+"mm";
		 
		 if(repeat < 2 && repeat>0)
		  {
			  flag=1;
			  simsubscreennum=0;
			  document.getElementById('nextButton').style.visibility="visible";
		  }
		  if(repeat==2)
		  {
			  setTimeout(function()
			  {
				  document.getElementById('trial').style.visibility="hidden";
				  document.getElementById('can6-1').style.visibility="hidden";
				  document.getElementById('can6-2').style.visibility="hidden";
				  document.getElementById('can6-3').style.visibility="hidden";
				  $("#66-1").fadeIn(300);
				  setTimeout(function()
				  {
					  $("#66-1").fadeOut(0);
					  document.getElementById('tab').style.visibility="visible";
					  document.getElementById('inferenceDiv').style.visibility="visible";
				  },2500);
			  },1200);
		  }
		  
	}
}
    
	function step1()
	{
		 myStopFunction();
		 myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 345px; top:446px; height: 30px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		     // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		     // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(90deg)";
		     
		 document.getElementById('on2-1').style.visibility="hidden";
         document.getElementById('on2-2').style.visibility="visible";
         document.getElementById('on2-2').onclick=function(){step11();}
    }
	
	function step11()
	{
		myStopFunction();
         document.getElementById('mw').style.visibility="visible";
	     document.getElementById('on2-3').style.visibility="visible";
		 document.getElementById('on2-2').style.visibility="hidden";
		 setTimeout(function()
		 {
			 document.getElementById('hp2-1').style.visibility="visible";
		 },500);
		 setTimeout(function()
		 {   
		     myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:330px; top:210px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(360deg)";
             document.getElementById('hp2-1').onclick=function(){step12();}
		 },1000);						             

	}
	
		
	function step12()
	{
		 myStopFunction();
		 document.getElementById('hp2-1').style.visibility="hidden";
	     document.getElementById('p2').style.visibility="visible";
		 setTimeout(function()
		 {
		     myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:435px; top:446px; height: 30px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(90deg)";
             document.getElementById('tare2-1').onmouseover=function(){step13();} 
		 },800); 		 
    }
	
		
	function step13()
	{
		 myStopFunction();
		 document.getElementById('tare2-1').style.visibility="hidden";
         document.getElementById('tare2-2').style.visibility="visible";
		 document.getElementById('tare2-2').onclick=function(){step14();}               
    }
	
	function step14()
	{
		myStopFunction();
         document.getElementById('v2-1').style.visibility="visible";
	     document.getElementById('tare2-3').style.visibility="visible";
		 document.getElementById('tare2-2').style.visibility="hidden";
		 setTimeout(function()
		 {
			 document.getElementById('swc2').style.visibility="visible";

		     document.getElementById('hand').style.visibility="visible";
		 },500);
		 setTimeout(function()
		 {
             myInt = setInterval(function(){ animatearrow(); }, 500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:650px; top:180px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(360deg)";
             document.getElementById('hand').onclick=function(){step15();} 
		 },1000);			 
    }
	
	function step15()
	{
	     myStopFunction();
		  document.getElementById('swc2').style.visibility="hidden";

		  
         document.getElementById('hand').style.transformOrigin = "100% 80%";
	     document.getElementById('hand').style.animation = "valveturn-4 1.5s forwards ";
	    
			   
			 setTimeout(function()
			 {
                 document.getElementById('pwc').style.visibility="visible";
        	 },800);
			 setTimeout(function()
			 {	
			     document.getElementById('v2-1').style.visibility="hidden";
                 document.getElementById('wc').style.visibility="visible";
			     document.getElementById('pwc').style.visibility="hidden";
			     document.getElementById('v2-2').style.visibility="visible";
             },1200);
             setTimeout(function()
			 {
				 
				 document.getElementById('hand').style.visibility="hidden";
			 },1500);
		 setTimeout(function()
		 {
			 document.getElementById('nextButton').style.visibility="visible";
		 },2500);  
	}
	
	function step2()
	{
		 myStopFunction();
         document.getElementById('hn').style.transformOrigin="100% 80%";
		 document.getElementById('hn').style.animation = "valveturn-2 2.5s forwards ";
         
	     setTimeout(function(){
			 document.getElementById('22-1').style.visibility="hidden";
			 document.getElementById('22-2').style.visibility="hidden";
			 document.getElementById('hn').style.visibility="hidden";
             document.getElementById('hn2').style.visibility="visible";
			 document.getElementById('cylwat').style.visibility="visible";
			 document.getElementById('cylwat').style.transformOrigin="100% 80%";
			 
			 if(repeat==1)
			 {
		     document.getElementById('cylwat').style.animation="water-4  0.8s 1 forwards";
			 }
			 else if(repeat==2)
			 {
		     document.getElementById('cylwat').style.animation="water-13  0.8s 1 forwards";
 			 }
			 else if(repeat==3)
			 {
		     document.getElementById('cylwat').style.animation="water-14  0.8s 1 forwards";
 			 }
			 else if(repeat==4)
			 {
		     document.getElementById('cylwat').style.animation="water-15  0.8s 1 forwards";
 			 }
			 
			 document.getElementById('water').style.visibility="visible";
			 },3000);
			 
			 setTimeout(function(){
			 document.getElementById('hn2').style.visibility="hidden";
			 document.getElementById('water').style.visibility="hidden";
			 },4500);
		     setTimeout(function(){
			 document.getElementById('wc3').style.visibility="visible";
			 document.getElementById('p3').style.visibility="visible";
			 document.getElementById('msrdev').style.visibility="hidden";
		     document.getElementById('cylwat').style.visibility="hidden";
			 if(repeat==1)
			 {
		     document.getElementById('msrdev1').style.visibility="visible";
			 }
			 else if(repeat==2)
			 {
		     document.getElementById('msrdev3').style.visibility="visible";
			 }
			 else if(repeat==3)
			 {
		     document.getElementById('msrdev4').style.visibility="visible";
			 }
			 else if(repeat==4)
			 {
		     document.getElementById('msrdev5').style.visibility="visible";
			 }
             },6700);
			 setTimeout(function(){
			 myInt = setInterval(function(){ animatearrow(); },500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:580px; top:270px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(360deg)";
			 if(repeat==1)
			 {
             document.getElementById('msrdev1').onclick=function(){step21();} 
			 }
			 else if(repeat==2)
			 {
             document.getElementById('msrdev3').onclick=function(){step21();} 
			 }
			 else if(repeat==3)
			 {
             document.getElementById('msrdev4').onclick=function(){step21();} 
			 }
			 else if(repeat==4)
			 {
             document.getElementById('msrdev5').onclick=function(){step21();} 
			 }
			 },7700);
}
	function step21()
	{
		myStopFunction();
		 if(repeat==1)
		 {
         document.getElementById('msrdev1').style.transformOrigin="100% 80%";
		 document.getElementById('msrdev1').style.animation = "valveturn-5 2.5s forwards ";
         }
		 else if(repeat==2)
		 {
         document.getElementById('msrdev3').style.transformOrigin="100% 80%";
		 document.getElementById('msrdev3').style.animation = "valveturn-5 2.5s forwards ";
         }
		 else if(repeat==3)
		 {
         document.getElementById('msrdev4').style.transformOrigin="100% 80%";
		 document.getElementById('msrdev4').style.animation = "valveturn-5 2.5s forwards ";
         }
		 else if(repeat==4)
		 {
         document.getElementById('msrdev5').style.transformOrigin="100% 80%";
		 document.getElementById('msrdev5').style.animation = "valveturn-5 2.5s forwards ";
         }
		 setTimeout(function(){
			 document.getElementById('msrdev2').style.visibility="visible";
			 if(repeat==1)
			 {
		     document.getElementById('msrdev1').style.visibility="hidden";
			 }
			 else if(repeat==2)
			 {
		     document.getElementById('msrdev3').style.visibility="hidden";
			 }
			 else if(repeat==3)
			 {
		     document.getElementById('msrdev4').style.visibility="hidden";
			 }
			 else if(repeat==4)
			 {
		     document.getElementById('msrdev5').style.visibility="hidden";
			 }
			 
			 document.getElementById('water1').style.visibility="visible";
			 document.getElementById('coverblue').style.visibility="visible";
			 document.getElementById('coverblue').style.transformOrigin="100% 80%";
		     document.getElementById('coverblue').style.animation = "water-5 2.5s forwards ";
		},3000);
		  setTimeout(function(){
		  document.getElementById('msrdev2').style.visibility="hidden";
		  document.getElementById('water1').style.visibility="hidden";
		  },5500);
	    setTimeout(function(){
			// document.getElementById('2-4').style.visibility="hidden";
			document.getElementById('shaker1').style.visibility="visible";
			 myInt = setInterval(function(){ animatearrow(); },500);
		     document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:550px; top:335px; height: 40px; z-index: 10;";
		     document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		     // Code for IE9
		     document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		     // Standard syntax
		     document.getElementById("arrow1").style.transform = "rotate(360deg)";
             document.getElementById('shaker1').onclick=function(){step22();}
		},5900);
		} 
	
	 function step22()
	 {
		myStopFunction();
		document.getElementById('shaker1').style.visibility="hidden";
		document.getElementById('shaker2').style.visibility="visible";
        document.getElementById('shaker2').style.transformOrigin="100% 80%";
		document.getElementById('shaker2').style.animation = "mymove 2.5s 3 forwards ";
		setTimeout(function(){
			 document.getElementById('wc3').style.transformOrigin="100% 80%";
		     document.getElementById('wc3').style.animation = "water-6 3.5s forwards ";
		     document.getElementById('coverblue2').style.visibility="visible";
		     document.getElementById('coverblue2').style.transformOrigin="100% 80%";
		     document.getElementById('coverblue2').style.animation = "water-7 3.5s forwards ";
		},2300);
		setTimeout(function(){
			document.getElementById('cement2').style.visibility="visible";
		},4500);
		setTimeout(function(){
			document.getElementById('wc3').style.visibility="hidden";
			document.getElementById('coverblue').style.visibility="hidden";
			document.getElementById('coverblue2').style.visibility="hidden";
			document.getElementById('cement2').style.visibility="hidden";
            document.getElementById('cement').style.visibility="visible";
			document.getElementById('shaker2').style.visibility="hidden";
        },7500);
		setTimeout(function(){
         document.getElementById('nextButton').style.visibility="visible";
		 },8200);
	 }
	
	
	 function step3()
	 {
		  myStopFunction();
     	   document.getElementById('shaker').style.transformOrigin="100% 80%";
		   document.getElementById('shaker').style.animation = "mymove2 2.5s forwards ";
		   setTimeout(function(){
		   document.getElementById('shaker3').style.visibility="visible";
		   document.getElementById('shaker').style.visibility="hidden";
		   },2000);
		   setTimeout(function(){
		   document.getElementById('p5').style.visibility="visible";
		   document.getElementById('p4').style.visibility="hidden";
		   document.getElementById('cement1').style.visibility="hidden";
		   document.getElementById('shaker3').style.transformOrigin="100% 80%";
		   document.getElementById('shaker3').style.animation="mymove3 3.5s forwards";
		    },2500);
			setTimeout(function(){
				document.getElementById('shaker3').style.visibility="hidden";
				document.getElementById('shaker4').style.visibility="visible";
				document.getElementById('shaker4').style.transformOrigin="100% 80%";
				document.getElementById('shaker4').style.animation="valveturn-6 2.5s forwards";
			},4000);
			setTimeout(function(){
				document.getElementById('mould2').style.visibility="visible";
				document.getElementById('mould1').style.visibility="hidden";
				document.getElementById('shaker4').style.visibility="hidden";
			},4500);
			setTimeout(function(){
				document.getElementById('shaker5').style.visibility="visible";
				document.getElementById('p4').style.visibility="visible";
		        document.getElementById('p5').style.visibility="hidden";
		        document.getElementById('shaker5').style.transformOrigin="100% 80%";
		        document.getElementById('shaker5').style.animation="mymove4 3.5s forwards";
		  },5000);
		  setTimeout(function(){
			   document.getElementById('shaker4').style.visibility="visible";
			    document.getElementById('shaker5').style.visibility="hidden"; 
				document.getElementById('shaker4').style.transformOrigin="100% 80%";
				document.getElementById('shaker4').style.animation="valveturn-6 2.5s forwards";
		},7800);
		  setTimeout(function(){
              document.getElementById('shaker4').style.visibility="hidden"; 
			  document.getElementById('mould2').style.visibility="hidden"; 
			  document.getElementById('mould3').style.visibility="visible"; 
		},8200);
	   setTimeout(function()
	   {
			if(repeat==1)
			{
				document.getElementById('nextButton').style.visibility="visible";
			}
			if(repeat==2)
			{
				validateAnswer(0,2,"100px","100px");
			}
	   },8300);
	 }
	
	function step4()
	{
         myStopFunction();
		 document.getElementById('mould4').style.visibility="hidden";
		 document.getElementById('mould4-1').style.visibility="visible";
		 setTimeout(function(){
	     myInt = setInterval(function(){ animatearrow(); }, 500);
		 document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:294px; top: 344.75px; height: 40px; z-index: 10;";
		 document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		 // Code for IE9
		 document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		 // Standard syntax
		 document.getElementById("arrow1").style.transform = "rotate(360deg)";
		 document.getElementById('screw').onclick=function(){step41();}
		 },300);
		 setTimeout(function(){
		 document.getElementById('hnd2').style.visibility="visible";
         },500);
	}
     function step41()
	 {
		 myStopFunction();
		 setTimeout(function(){
		 document.getElementById('hnd2').style.transformOrigin="100% 80%";
		 document.getElementById('hnd2').style.animation="water-6 1.5s forwards";
		 document.getElementById('setup4-2').style.transformOrigin="100% 80%";
		 document.getElementById('setup4-2').style.animation="water-6 1.5s forwards";
		 document.getElementById('setup4-1').style.transformOrigin="100% 80%";
		 document.getElementById('setup4-1').style.animation="water-6 1.5s forwards";
		 document.getElementById('setup4-4').style.transformOrigin="100% 80%";
		 document.getElementById('setup4-4').style.animation="water-8 1.5s forwards";
		 },400);
		 setTimeout(function(){
		 document.getElementById('setup4-5').style.visibility="visible";
 		 document.getElementById('setup4-2').style.visibility="hidden";
		 document.getElementById('hnd2').style.visibility="hidden";
         },1300);
		 setTimeout(function(){
			document.getElementById('stat1').style.visibility="visible";
			if(repeat==1)
			{
				document.getElementById('nextButton').style.visibility="visible";
			}
			if(repeat==2)
			{
				validateAnswer(2,3,"300px","100px");
			}
 		 },2100);
     }
	 
	function step5()
    {
		 myStopFunction();
		 document.getElementById('meter5').style.visibility="visible";
		 document.getElementById('hg5').style.visibility="visible";
		 document.getElementById('pic6').style.visibility="visible";
		 setTimeout(function(){
		 document.getElementById('setup5-3').style.visibility="hidden";
	 	 document.getElementById('setup5-6').style.visibility="visible";
         document.getElementById('setup5-1').style.transformOrigin="100% 80%";
		 document.getElementById('setup5-1').style.animation="water-9.5 1s forwards";
		 document.getElementById('setup5-4').style.transformOrigin="100% 80%";
		 
		 // for image pic4
		 if(repeat==1)
	     {
		 document.getElementById('setup5-4').style.animation="water-8 1s forwards";
		 }
		 else if(repeat==2)
		 {
		 document.getElementById('setup5-4').style.animation="water-9s 1s forwards";
		 }
		 else if(repeat==3)
		 {
		 document.getElementById('setup5-4').style.animation="water-9.5 1s forwards";
		 }
		 else if(repeat==4)
		 {
		 document.getElementById('setup5-4').style.animation="water-9 1s forwards";
		 }
		 
		 // for image pic6
		 document.getElementById('pic6').style.transformOrigin="100% 80%";
		 if(repeat==1)
		 {
		 document.getElementById('pic6').style.animation="water-9 1s forwards";
		 }
		 else if(repeat==2)
		 {
		 document.getElementById('pic6').style.animation="water-10 1s forwards";
		 }
		 else if(repeat==3)
		 {
		 document.getElementById('pic6').style.animation="water-11 1s forwards";
		 }
		 else if(repeat==4)
		 {
		 document.getElementById('pic6').style.animation="water-12 1s forwards";
		 }
		 },350);
		 setTimeout(function(){
		 document.getElementById('mould5-1').style.visibility="hidden";
		 document.getElementById('setup5-5').style.visibility="hidden";
	 	 document.getElementById('mould5-2').style.visibility="visible";
         },650);
		 setTimeout(function(){
		 document.getElementById('stat2').style.visibility="visible";
	 	 document.getElementById('stat2').innerHTML="Final Reading = "+values1[lnt]+"mm";
         },1300);
		 setTimeout(function()
		 {
			 if(repeat==1)
			 {
				 validateAnswer(1,0,"300px","100px");
			 }
			 if(repeat==2)
			 {
				document.getElementById('nextButton').style.visibility="visible";
			 }
		 },1400);
    }
	
	
	function refresh()
	{
		 //document.getElementById('can6-2').innerHTML="Final Reading = ";
		 //document.getElementById('stat2').innerHTML="Take about water by weigh of dry cement and mix it thoroughly with the cement.The gauging time should not be more than 3 to 5 minutes.";
         document.getElementById('hand').style.transformOrigin = "";
		 document.getElementById("hand").style.animation = "";
         document.getElementById("arrow1").style.animation = "";
         document.getElementById('pic6').style.transformOrigin="";
		 document.getElementById("pic6").style.animation = "";
		 document.getElementById('setup5-4').style.transformOrigin="";
		 document.getElementById("setup5-4").style.animation = "";
		 document.getElementById('setup5-1').style.transformOrigin="";
		 document.getElementById("setup5-1").style.animation = "";
		 document.getElementById('hnd2').style.transformOrigin="";
		 document.getElementById("hnd2").style.animation = "";
		 document.getElementById('setup4-1').style.transformOrigin="";
		 document.getElementById("setup4-1").style.animation = "";
		 document.getElementById('setup4-2').style.transformOrigin="";
		 document.getElementById("setup4-2").style.animation = "";
		 document.getElementById('setup4-4').style.transformOrigin="";
		 document.getElementById("setup4-4").style.animation = "";
		 document.getElementById('shaker').style.transformOrigin="";
		 document.getElementById("shaker").style.animation = "";
		 document.getElementById('shaker2').style.transformOrigin="";
		 document.getElementById("shaker2").style.animation = "";
		 document.getElementById('shaker3').style.transformOrigin="";
		 document.getElementById("shaker3").style.animation = "";
		 document.getElementById('shaker4').style.transformOrigin="";
		 document.getElementById("shaker4").style.animation = "";
		 document.getElementById('shaker5').style.transformOrigin="";
		 document.getElementById("shaker5").style.animation = "";
		 document.getElementById('msrdev1').style.transformOrigin="";
		 document.getElementById("msrdev1").style.animation = "";
		 document.getElementById('coverblue').style.transformOrigin="";
		 document.getElementById("coverblue").style.animation = "";
		 document.getElementById('coverblue2').style.transformOrigin="";
		 document.getElementById("coverblue2").style.animation = "";		 
		 document.getElementById('wc3').style.transformOrigin="";
		 document.getElementById("wc3").style.animation = "";
		 document.getElementById('cylwat').style.transformOrigin="";
		 document.getElementById("cylwat").style.animation = "";		 
		 document.getElementById('hn').style.transformOrigin="";
		 document.getElementById("hn").style.animation = "";		 
		 document.getElementById('tare2-1').onmouseover="";
		 document.getElementById('on2-1').onmouseover="";

	}
	
function calcWaterQuantity()
{
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
			n = document.getElementById("output").value;
			if(Math.round(n) == Math.round(values[lnt]*3))
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
					addWater();
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
			document.getElementById("output").value=values[lnt]*3;
			setTimeout(function()
			{
				addWater();
			},750);
		}
	}
}	

function calcWaterQuantity2()
{
	document.getElementById("form2").onclick=function()
	{
		document.getElementById("formula2").style.visibility="visible";
		document.getElementById("r2").style.visibility="hidden";
		document.getElementById("w2").style.visibility="hidden";
	}
	
	document.getElementById("check2").onclick=function()
	{
		document.getElementById("formula2").style.visibility="hidden";
		if(!document.getElementById("output2").value  || !document.getElementById("output2").value!=" ")
		{
			alert("Enter the value to proceed ");
		}
		else
		{
			n = document.getElementById("output2").value;
			if(Math.round(n) == Math.round(values[lnt]*3))
			{
				document.getElementById("check2").style.visibility="hidden";
				document.getElementById("form2").style.visibility="hidden";
				document.getElementById("r2").style.visibility="visible";
				document.getElementById("result2").style.visibility="hidden";
				document.getElementById("w2").style.visibility="hidden";
				document.getElementById("output2").style.border="none";
				document.getElementById("output2").style.color="black";
				document.getElementById("output2").disabled="true";
				document.getElementById("output2").style.backgroundColor="white";
				setTimeout(function()
				{
					addWater();
				},750);
			}
			else
			{
				document.getElementById("result2").style.visibility="visible";
				document.getElementById("w2").style.visibility="visible";
			}
		}	
		document.getElementById("result2").onclick=function()
		{
			document.getElementById("output2").value="";
			document.getElementById("check2").style.visibility="hidden";
			document.getElementById("result2").style.visibility="hidden";
			document.getElementById("r2").style.visibility="hidden";
			document.getElementById("w2").style.visibility="hidden";
			document.getElementById("form2").style.visibility="hidden";
			document.getElementById("formula2").style.visibility="hidden";
			document.getElementById("output2").style.border="none";
			document.getElementById("output2").style.color="black";
			document.getElementById("output2").disabled="true";
			document.getElementById("output2").style.backgroundColor="white";
			document.getElementById("output2").value=values[lnt]*3;
			setTimeout(function()
			{
				addWater();
			},750);
		}
	}
}	

function addWater()
{
	document.getElementById('2-2').style.visibility="hidden";
	document.getElementById('2-3').style.visibility="hidden";
	document.getElementById("r1").style.visibility="hidden";
	document.getElementById("w1").style.visibility="hidden";
	document.getElementById('hn').style.visibility="visible";
	document.getElementById('msrdev').style.visibility="visible";

	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 550px; top:125px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
		refresh();
		document.getElementById('hn').onclick=function(){step2();}
	},750);
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
		document.getElementById("ans").innerHTML="Wrong! Answer is 32";
	}

	setTimeout(function()
	{
		document.getElementById("inference").style.visibility="hidden";
		document.getElementById("infAns").innerHTML="According to IS 4031(Part-IV), the standard consistency of cement lies between the values 28%-33%. The standard consistency value obtained for the sample is within the range.";
		
		$("#infAns").fadeIn(750);
	},1000);
}					