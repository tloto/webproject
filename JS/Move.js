
//运动函数，宽、高、透明度(0-100)变化
//obj 对象；attr 样式；iTarget 
function StartAnimation(obj,attr,iTarget){
	clearInterval(obj.Timer);
	obj.Timer=setInterval(function(){
		 var iCur=0;
		 if (attr=='opacity') {
		 	iCur=parseInt(parseFloat(getStyle(obj,attr))*100);
		 } else{
		 	iCur=parseInt(getStyle(obj,attr));
		 }
		var iSpeed=(iTarget-iCur)/7;
		iSpeed=iSpeed>0? Math.ceil(iSpeed):Math.floor(iSpeed);
		if (iCur==iTarget) {
			clearInterval(obj.Timer);
		} else{
			if (attr=='opacity') {
		 		obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';//透明度ie6-8适配
		 		obj.style.opacity=(iCur+iSpeed)/100;
			 } else{
		 		obj.style[attr]=iCur+iSpeed+'px';
		 	}
			
		}
	},30);		
}


function getStyle(obj,attr){
	if (obj.currentStyle) {
		return obj.currentStyle(attr);//后去行间样式 style.attr
	} else{
		return getComputedStyle(obj,false)[attr];//获取id class等样式;
	}
	
}
