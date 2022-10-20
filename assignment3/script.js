// Using a factory method design pattern can helps me avoid writing the same code again and again, while also keeping the different parts manageable.
function selectFn(a){
	var char = a.substr(0,1);
	var b = a.substr(1);
	switch (char){
		case '#':
			return document.getElementById(b);
			break;
		case '.':
			return document.getElementsByClassName(b);
			break;
		default:
			return document.getElementsByTagName(a);
			break;
	}
}
// I use extension methods to declare some methods that will be reused later, so that they can be called directly and conveniently.
HTMLElement.prototype.css = function(k,v){
	k == 'cssText' ? this.style[k]+=v : this.style[k]= v ;
    return this
}
// Extension methods: hide()
HTMLElement.prototype.hide = function(s){
	s ==undefined||s ==null||s ==""? this.style['display']= 'none' : this.className+=' hide';
	var that = this;
	setTimeout(function(){
		that.style['display']= 'none';
	},250)
    return this
}
// Extension methods: show()
HTMLElement.prototype.show = function(s){
	s ==undefined||s ==null||s ==""? this.style['display']= 'block' : this.className+=' show';
	var that = this;
	setTimeout(function(){
		that.style['display']= 'block';
	},250)
    return this
}


// Using var to declare a globally-scoped variable to define the number of mounted shells
var necklaceNum = 1;

/**
Creating the event of picking up shells:
 * @param  {[String]} ids 
 */
function touchAmount(ids){
    // Play the sound of picking up shells
    var get = document.getElementById("get");
    get.play();
    // Using querySelector() and the id of the shell to select the clicked shell
    var imgBox = document.querySelector("#"+ids);
    // Then get the image path of the shell
    var imgSrc = imgBox.querySelector("img").src;
    // Hide the event.
    selectFn("#"+ids).hide(300);
    // Create a box element that hangs on a necklace and set its style
    var node=document.createElement("li");
    node.style['width']='70px';
    node.style['list-style']='none';
    node.className+=' anima mount'+necklaceNum;
    // Then create a shell element and set the shell's image path and add it to the necklace element
    var imgNode=document.createElement("img");
    imgNode.src = imgSrc;
    node.appendChild(imgNode);
    selectFn(".necklace")[0].appendChild(node);
    // And then checking if the number of mounted shells reaches 5. If it is, display the popup window.
    if(necklaceNum==5){
        var modal = document.getElementById("modal");
        // Play popup sound effects
        modal.play();
        // This timing event is added. As an animation of stringing the shell has been added in CSS, it will be a little bit stiff if the popup window suddenly appears. So this timing event is added here to display the pop-up window after the stringing animation is completed.
        setTimeout(function(){
            selectFn(".modalBox")[0].className='modalBox';
            selectFn(".modalBox")[0].show();
        },800)
        return false;
    }
    necklaceNum++;
}

// Creating the click event of the popup button:
function giveAway(type){
    // Declare the type of animation
    var imgSrc = type=="1"?'img/keep_it.gif':'img/give_away.gif';
    // Create animated elements
    var imgNode=document.createElement("img");
    // Set the path of the animation
    imgNode.src = imgSrc;
    selectFn(".gifBox")[0].appendChild(imgNode);
    selectFn(".gifBox")[0].show();
    setTimeout(function(){
        selectFn(".gifBox")[0].hide();
        imgNode.remove();
    },3800)
    // When the button on the pop-up window is clicked, the number of mounted shells will be reset to 1
    necklaceNum = 1;
    var doms = selectFn(".anima");
    //and the mounted shells will be deleted
    for(var i=1;i<6;i++){
        selectFn(".mount"+i)[0].remove();
    }
    var shells = selectFn(".shells");
    // and the shells on the beach will be refreshed
    for(var j=0;j<shells.length;j++){
        shells[j].className = "shells";
        shells[j].show();
    }
    // Finally, hide the popup window
    selectFn(".modalBox")[0].hide(300);
}

// Creating parallax effect:
// Listen for mouse movement events
document.addEventListener("mousemove", parallax);
function parallax(event) {
    // As only the horizontal parallax is considered, I only calculate the distance of the x-axis movement. Then, the distance of the mouse movement is proportionally reduced, resulting in a parallax effect.
    const x = (window.innerWidth - event.pageX) / 200;
    // Then according the the result above, control the movement of the foreground plants with translateX of CSS
    selectFn(".tree")[0].style.transform = `translateX(${x}px)`;
}

// The effect of alternating the display of the shells:
// I declared two groups of shells, type=0 for the first group and type=2 for the second group
// And then, use the timing event to set the two groups of shells to display alternately
var type = 0;
function tabAction(){
    // Define which shells are in the first group of shells
    var group1 = [0,3,5,6,9,10,13];
    // Define which shells are in the second group of shells
    var group2 = [1,2,4,7,8,12,11];
    if(type==0){
        // Check the value of type and change it to produce the effect of alternating the display
        type=1;
        // Show the first group of shells
        for(var a=0;a<group1.length;a++){
            selectFn(".shells")[group1[a]].className='shells';
            selectFn(".shells")[group1[a]].show(300);
        }
        //and hide the second group of shells
        for(var b=0;b<group2.length;b++){
            selectFn(".shells")[group2[b]].hide(300);
        }
    }else{
        type=0;
        // Show the second group of shells
        for(var a=0;a<group1.length;a++){
            selectFn(".shells")[group1[a]].hide(300);
        }
        // and hide the first group of shells
        for(var b=0;b<group2.length;b++){
            selectFn(".shells")[group2[b]].className='shells';
            selectFn(".shells")[group2[b]].show(300);
        }
    }
}
// // Set a timing event to switch the display of each group of shells according to a specific time
tabAction();
setInterval(tabAction,4000);
