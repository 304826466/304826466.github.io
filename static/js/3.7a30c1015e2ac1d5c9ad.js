webpackJsonp([3],{K31e:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("mvHQ"),o=e.n(i),a=e("NC6I"),p=e.n(a),r=e("mUab"),n=e.n(r),h={name:"login",data:function(){return{user:{userName:"",passWord:""},sysCode:"",writeCode:"",promptTxt:"",selected:!1}},mounted:function(){new n.a(document.getElementById("app"),{dotColor:"#F5F5F5",lineColor:"#F5F5F5"}).toString(),document.querySelector("body").style.background="#d9d9d9",this.createCode(),this.$api.getCookie("user")&&this.$api.getCookie("pswd")&&(this.user.userName=this.$api.getCookie("user"),this.user.passWord=this.$api.getCookie("pswd"),this.selected=!0)},destroyed:function(){document.querySelector("canvas").remove(),document.querySelector("body").style.background="#ffffff"},methods:{showCheck:function(t){var s=document.getElementById("myCanvas").getContext("2d");s.clearRect(0,0,1e3,1e3),s.font="80px 'Microsoft Yahei'",s.fillText(t,0,100),s.fillStyle="black"},createCode:function(){var t=Math.ceil(50*Math.random()),s=Math.ceil(50*Math.random());this.sysCode=t+s,this.showCheck(t+"+"+s)},validate:function(){var t=this,s=Number(this.writeCode);if(s.length<=0)return this.promptTxt="请输入验证码",this.createCode(),!1;if(s!==this.sysCode)return this.promptTxt="验证码错误",this.writeCode="",this.createCode(),!1;this.user.passWord=p()(this.user.passWord);var e={userName:this.user.userName,userPwd:this.user.passWord};this.$api.promise({method:"POST",url:"login",data:e}).then(function(s){s.data.code>0?(sessionStorage.setItem("user_token",s.data.data.token),sessionStorage.setItem("LoginUser",o()(s.data.data)),t.selected?(t.$api.setCookie("user",t.user.userName,7),t.$api.setCookie("pswd",t.user.passWord,7)):(t.$api.delCookie("user"),t.$api.delCookie("pswd")),t.$router.push({path:"/index"})):t.$message.error(s.data.desc)}).catch(function(s){t.fullscreenLoading=!1,t.$message.error("接口异常："+s)})}}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"login",attrs:{id:"logins"}},[e("div",{staticClass:"top-bolck"}),t._v(" "),e("dl",{staticClass:"admin_login",on:{keyup:function(s){if(!("button"in s)&&t._k(s.keyCode,"enter",13,s.key))return null;t.validate(s)}}},[t._m(0),t._v(" "),e("dd",{staticClass:"user_icon"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.userName,expression:"user.userName"}],staticClass:"login_txtbx",attrs:{type:"text",placeholder:"账号"},domProps:{value:t.user.userName},on:{input:function(s){s.target.composing||t.$set(t.user,"userName",s.target.value)}}})]),t._v(" "),e("dd",{staticClass:"pwd_icon"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.passWord,expression:"user.passWord"}],staticClass:"login_txtbx",attrs:{type:"password",placeholder:"密码"},domProps:{value:t.user.passWord},on:{input:function(s){s.target.composing||t.$set(t.user,"passWord",s.target.value)}}})]),t._v(" "),e("dd",{staticClass:"val_icon"},[e("div",{staticClass:"checkcode"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.writeCode,expression:"writeCode"}],staticClass:"login_txtbx",attrs:{type:"text",placeholder:"验证码",maxlength:"4"},domProps:{value:t.writeCode},on:{input:function(s){s.target.composing||(t.writeCode=s.target.value)}}}),t._v(" "),e("canvas",{staticClass:"J_codeimg",attrs:{id:"myCanvas"},on:{click:t.createCode}},[t._v("对不起，您的浏览器不支持canvas，请下载最新版浏览器!")])])]),t._v(" "),e("p",{staticStyle:{padding:"5px",height:"20px"}},[e("el-checkbox",{model:{value:t.selected,callback:function(s){t.selected=s},expression:"selected"}},[t._v("记住密码")])],1),t._v(" "),e("dd",[e("input",{staticClass:"submit_btn",attrs:{type:"button",value:"立即登陆"},on:{click:t.validate}})]),t._v(" "),e("dd",[e("p",{staticStyle:{color:"red"}},[t._v(t._s(t.promptTxt))])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("dt",[s("strong",[this._v("资产端后台管理系统")])])}]};var d=e("VU/8")(h,l,!1,function(t){e("r46L")},"data-v-138ed11e",null);s.default=d.exports},mUab:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=function(){function t(t,s){for(var e=0;e<s.length;e++){var i=s[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(s,e,i){return e&&t(s.prototype,e),i&&t(s,i),s}}();function o(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(s){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o(this,t),this.draw=function(){if(e.props.canvasSupport){e.props.winW=window.innerWidth,e.props.winH=window.innerHeight,e.props.ctx.clearRect(0,0,e.props.canvas.width,e.props.canvas.height);for(var t=0;t<e.props.particles.length;t++)e.props.particles[t].updatePosition();for(var s=0;s<e.props.particles.length;s++)e.props.particles[s].draw();e.props.paused||(e.props.raf=requestAnimationFrame(e.draw))}},this.props={canvasSupport:!!document.createElement("canvas").getContext,particles:[],mouseX:0,mouseY:0,desktop:!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),orientationSupport:!!window.DeviceOrientationEvent,tiltX:0,tiltY:0,pixelRatio:window.devicePixelRatio||1,paused:!1,element:s},this.options={minSpeedX:i.minSpeedX||.1,maxSpeedX:i.maxSpeedX||.7,minSpeedY:i.minSpeedY||.1,maxSpeedY:i.maxSpeedY||.7,directionX:i.directionX||"center",directionY:i.directionY||"center",density:i.density||1e4,dotColor:i.dotColor||"#666666",lineColor:i.lineColor||"#666666",particleRadius:i.particleRadius||7,lineWidth:i.lineWidth||1,curvedLines:i.curvedLines||!1,proximity:i.proximity||100,parallax:void 0===i.parallax||i.parallax,parallaxMultiplier:i.parallaxMultiplier||5,onInit:i.onInit||void 0,onDestroy:i.onDestroy||void 0},this.props.canvasSupport){this.props.canvas=document.createElement("canvas"),this.props.canvas.className="pg-canvas",this.props.canvas.style.width="100%",this.props.canvas.style.height="100%",this.props.canvas.style.top=0,this.props.canvas.style.left=0,this.props.canvas.style.display="block",this.props.element.style.position="relative",this.props.element.insertBefore(this.props.canvas,this.props.element.firstChild),this.props.ctx=this.props.canvas.getContext("2d"),this.styleCanvas();for(var a=Math.round(this.props.canvas.width*this.props.canvas.height/this.options.density/Math.pow(this.props.pixelRatio,2)),r=0;r<a;r++){var n=new p(this.props,this.options);n.setStackPos(r),this.props.particles.push(n)}window.addEventListener("resize",function(){e.resizeHandler()},!1),document.addEventListener("mousemove",function(t){e.props.mouseX=t.pageX,e.props.mouseY=t.pageY},!1),this.props.orientationSupport&&!this.props.desktop&&window.addEventListener("deviceorientation",function(){e.props.tiltY=Math.min(Math.max(-event.beta,-30),30),e.props.tiltX=Math.min(Math.max(-event.gamma,-30),30)},!0),this.draw(),this.hook("onInit")}}return i(t,[{key:"styleCanvas",value:function(){this.props.canvas.width=this.props.element.offsetWidth*this.props.pixelRatio,this.props.canvas.height=this.props.element.offsetHeight*this.props.pixelRatio,this.props.ctx.fillStyle=this.options.dotColor,this.props.ctx.strokeStyle=this.options.lineColor,this.props.ctx.lineWidth=this.options.lineWidth*this.props.pixelRatio}},{key:"resizeHandler",value:function(){this.styleCanvas();for(var t=this.props.element.offsetWidth*this.props.pixelRatio,s=this.props.element.offsetHeight*this.props.pixelRatio,e=this.props.particles.length-1;e>=0;e--)(this.props.particles[e].position.x>t||this.props.particles[e].position.y>s)&&this.props.particles.splice(e,1);var i=Math.round(this.props.canvas.width*this.props.canvas.height/this.options.density/Math.pow(this.props.pixelRatio,2));if(i>this.props.particles.length)for(;i>this.props.particles.length;){var o=new p(this.props,this.options);this.props.particles.push(o)}else i<this.props.particles.length&&this.props.particles.splice(i);for(var a=this.props.particles.length-1;a>=0;a--)this.props.particles[a].setStackPos(a)}},{key:"pause",value:function(){this.props.paused=!0}},{key:"start",value:function(){this.props.paused=!1,this.draw()}},{key:"option",value:function(t,s){if(!s)return this.options[t];this.options[t]=s}},{key:"destroy",value:function(){this.props.canvas.parentNode.removeChild(this.props.canvas),this.hook("onDestroy")}},{key:"hook",value:function(t){void 0!==this.options[t]&&this.options[t].call(this.props.element)}}]),t}(),p=function(){function t(s,e){switch(o(this,t),this.props=s,this.options=e,this.stackPos,this.active=!0,this.layer=Math.ceil(3*Math.random()),this.parallaxOffsetX=0,this.parallaxOffsetY=0,this.position={x:Math.ceil(Math.random()*this.props.canvas.width),y:Math.ceil(Math.random()*this.props.canvas.height)},this.speed={},this.options.directionX){case"left":this.speed.x=+(-this.options.maxSpeedX+Math.random()*this.options.maxSpeedX-this.options.minSpeedX).toFixed(2);break;case"right":this.speed.x=+(Math.random()*this.options.maxSpeedX+this.options.minSpeedX).toFixed(2);break;default:this.speed.x=+(-this.options.maxSpeedX/2+Math.random()*this.options.maxSpeedX).toFixed(2),this.speed.x+=this.speed.x>0?this.options.minSpeedX:-this.options.minSpeedX}switch(this.options.directionY){case"up":this.speed.y=+(-this.options.maxSpeedY+Math.random()*this.options.maxSpeedY-this.options.minSpeedY).toFixed(2);break;case"down":this.speed.y=+(Math.random()*this.options.maxSpeedY+this.options.minSpeedY).toFixed(2);break;default:this.speed.y=+(-this.options.maxSpeedY/2+Math.random()*this.options.maxSpeedY).toFixed(2),this.speed.x+=this.speed.y>0?this.options.minSpeedY:-this.options.minSpeedY}}return i(t,[{key:"draw",value:function(){this.props.ctx.beginPath(),this.props.ctx.arc(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY,this.options.particleRadius*this.props.pixelRatio/2,0,2*Math.PI,!0),this.props.ctx.closePath(),this.props.ctx.fill(),this.props.ctx.beginPath();for(var t=this.props.particles.length-1;t>this.stackPos;t--){var s=this.props.particles[t],e=this.position.x-s.position.x,i=this.position.y-s.position.y;Math.sqrt(e*e+i*i).toFixed(2)<this.options.proximity*this.props.pixelRatio&&(this.props.ctx.moveTo(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY),this.options.curvedLines?this.props.ctx.quadraticCurveTo(Math.max(s.position.x,s.position.x),Math.min(s.position.y,s.position.y),s.position.x+s.parallaxOffsetX,s.position.y+s.parallaxOffsetY):this.props.ctx.lineTo(s.position.x+s.parallaxOffsetX,s.position.y+s.parallaxOffsetY))}this.props.ctx.stroke(),this.props.ctx.closePath()}},{key:"updatePosition",value:function(){if(this.options.parallax){if(this.props.orientationSupport&&!this.props.desktop){var t=(this.props.winW-0)/60;this.props.pointerX=(this.props.tiltX- -30)*t+0;var s=(this.props.winH-0)/60;this.props.pointerY=(this.props.tiltY- -30)*s+0}else this.props.pointerX=this.props.mouseX,this.props.pointerY=this.props.mouseY;this.parallaxTargX=(this.props.pointerX-this.props.winW/2)/(this.options.parallaxMultiplier*this.layer),this.parallaxOffsetX+=(this.parallaxTargX-this.parallaxOffsetX)/10,this.parallaxTargY=(this.props.pointerY-this.props.winH/2)/(this.options.parallaxMultiplier*this.layer),this.parallaxOffsetY+=(this.parallaxTargY-this.parallaxOffsetY)/10}var e=this.props.element.offsetWidth*this.props.pixelRatio,i=this.props.element.offsetHeight*this.props.pixelRatio;switch(this.options.directionX){case"left":this.position.x+this.speed.x+this.parallaxOffsetX<0&&(this.position.x=e-this.parallaxOffsetX);break;case"right":this.position.x+this.speed.x+this.parallaxOffsetX>e&&(this.position.x=0-this.parallaxOffsetX);break;default:(this.position.x+this.speed.x+this.parallaxOffsetX>e||this.position.x+this.speed.x+this.parallaxOffsetX<0)&&(this.speed.x=-this.speed.x)}switch(this.options.directionY){case"up":this.position.y+this.speed.y+this.parallaxOffsetY<0&&(this.position.y=i-this.parallaxOffsetY);break;case"down":this.position.y+this.speed.y+this.parallaxOffsetY>i&&(this.position.y=0-this.parallaxOffsetY);break;default:(this.position.y+this.speed.y+this.parallaxOffsetY>i||this.position.y+this.speed.y+this.parallaxOffsetY<0)&&(this.speed.y=-this.speed.y)}this.position.x+=this.speed.x,this.position.y+=this.speed.y}},{key:"setStackPos",value:function(t){this.stackPos=t}}]),t}();s.default=a},mvHQ:function(t,s,e){t.exports={default:e("qkKv"),__esModule:!0}},qkKv:function(t,s,e){var i=e("FeBl"),o=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},r46L:function(t,s){}});