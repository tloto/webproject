//单一链式运动
//运动函数，宽、高、透明度(0-100)变化
//obj 对象；attr 样式；iTarget 样式值； 回调函数：completeFunction
function StartAnimation(obj,attr,iTarget,completeFunction){
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
			if(completeFunction){
				completeFunction();
			}
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


//符合链式运动
//运动函数，宽、高、透明度(0-100)变化
//obj 对象；attrJson 样式字典；  回调函数：completeFunction
//例子startAnimationWithGroup(data,{width:300,height:300},function(){
//					data.style['border']='solid black 1px';
//				});
function startAnimationWithGroup(obj,attrJson,completeFunction){
				clearInterval(obj.Timer);
				
				obj.Timer=setInterval(function (){
					var attr='';
					var CanStop=true;
					for(attr in attrJson){
						var iCur=0;
						if (attr=='opacity') {
							iCur=parseInt(parseFloat(getStyle(obj,attr)*100));
						} else{
							iCur=parseInt(getStyle(obj,attr));
						}
						
						var Speed=(attrJson[attr]-iCur)/7.0;
						Speed=Speed>0? Math.ceil(Speed):Math.floor(Speed);
						if (Speed!=0) {
							CanStop=false;
							obj.style[attr]=(iCur+Speed)+'px';
						}
					}
					
					if(CanStop){
						clearInterval(obj.Timer);
						if(completeFunction){completeFunction();}
					}
				},30);
			}
//获取属性值
function getStyle(obj,attr){
	if (obj.currentStyle) {
		return obj.currentStyle(attr);//后去行间样式 style.attr
	} else{
		return getComputedStyle(obj,false)[attr];//获取id class等样式;
	}
}
//用字典格式设置属性值
function setStyle(obj,Json){
	var attr='';
	for (attr in Json){
		obj.style[attr]=Json[attr];
	}
}
