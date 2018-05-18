!function(a,b){var c=a.className("zoom"),d=a.className("zoom-scroller"),e="."+c,f="."+d,g="pinchstart",h="pinch",i="pinchend";"ongesturestart"in b&&(g="gesturestart",h="gesturechange",i="gestureend"),a.Zoom=function(b,c){var d=this;d.options=a.extend(a.Zoom.defaults,c),d.wrapper=d.element=b,d.scroller=b.querySelector(f),d.scrollerStyle=d.scroller&&d.scroller.style,d.zoomer=b.querySelector(e),d.zoomerStyle=d.zoomer&&d.zoomer.style,d.init=function(){a.options.gestureConfig.pinch=!0,a.options.gestureConfig.doubletap=!0,d.initEvents()},d.initEvents=function(a){var b=a?"removeEventListener":"addEventListener",c=d.scroller;c[b](g,d.onPinchstart),c[b](h,d.onPinch),c[b](i,d.onPinchend),c[b]("touchstart",d.onTouchstart),c[b]("touchmove",d.onTouchMove),c[b]("touchcancel",d.onTouchEnd),c[b]("touchend",d.onTouchEnd),c[b]("drag",function(a){(q||m)&&a.stopPropagation()}),c[b]("doubletap",function(a){d.toggleZoom(a.detail.center)})},d.transition=function(a,b){return b=b||0,a.webkitTransitionDuration=b+"ms",d},d.translate=function(a,b,c){return b=b||0,c=c||0,a.webkitTransform="translate3d("+b+"px,"+c+"px,0px)",d},d.scale=function(a,b){return b=b||1,a.webkitTransform="translate3d(0,0,0) scale("+b+")",d},d.scrollerTransition=function(a){return d.transition(d.scrollerStyle,a)},d.scrollerTransform=function(a,b){return d.translate(d.scrollerStyle,a,b)},d.zoomerTransition=function(a){return d.transition(d.zoomerStyle,a)},d.zoomerTransform=function(a){return d.scale(d.zoomerStyle,a)};var j=1,k=1,l=!1,m=!1;d.onPinchstart=function(a){m=!0},d.onPinch=function(a){l||(d.zoomerTransition(0),l=!0),j=(a.detail?a.detail.scale:a.scale)*k,j>d.options.maxZoom&&(j=d.options.maxZoom-1+Math.pow(j-d.options.maxZoom+1,.5)),j<d.options.minZoom&&(j=d.options.minZoom+1-Math.pow(d.options.minZoom-j+1,.5)),d.zoomerTransform(j)},d.onPinchend=function(a){j=Math.max(Math.min(j,d.options.maxZoom),d.options.minZoom),d.zoomerTransition(d.options.speed).zoomerTransform(j),k=j,l=!1},d.setZoom=function(a){j=k=a,d.scrollerTransition(d.options.speed).scrollerTransform(0,0),d.zoomerTransition(d.options.speed).zoomerTransform(j)},d.toggleZoom=function(b,c){if("number"==typeof b&&(c=b,b=void 0),c=void 0===c?d.options.speed:c,j&&1!==j)j=k=1,d.scrollerTransition(c).scrollerTransform(0,0);else if(j=k=d.options.maxZoom,b){var e=a.offset(d.zoomer),f=e.top,g=e.left,h=(b.x-g)*j,i=(b.y-f)*j;this._cal(),h>=v&&h<=v+n?h=v-h+n/2:h<v?h=v-h+n/2:h>v+n&&(h=v+n-h-n/2),i>=w&&i<=w+o?i=w-i+o/2:i<w?i=w-i+o/2:i>w+o&&(i=w+o-i-o/2),h=Math.min(Math.max(h,t),v),i=Math.min(Math.max(i,u),w),d.scrollerTransition(c).scrollerTransform(h,i)}else d.scrollerTransition(c).scrollerTransform(0,0);d.zoomerTransition(c).zoomerTransform(j)},d._cal=function(){n=d.wrapper.offsetWidth,o=d.wrapper.offsetHeight,x=d.zoomer.offsetWidth,y=d.zoomer.offsetHeight;var a=x*j,b=y*j;t=Math.min(n/2-a/2,0),v=-t,u=Math.min(o/2-b/2,0),w=-u};var n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G={},H={};return d.onTouchstart=function(a){a.preventDefault(),p=!0,G.x="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,G.y="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY},d.onTouchMove=function(b){if(b.preventDefault(),p){if(!q){n=d.wrapper.offsetWidth,o=d.wrapper.offsetHeight,x=d.zoomer.offsetWidth,y=d.zoomer.offsetHeight;var c=a.parseTranslateMatrix(a.getStyles(d.scroller,"webkitTransform"));z=c.x||0,A=c.y||0,d.scrollerTransition(0)}var e=x*j,f=y*j;if(!(e<n&&f<o)){if(t=Math.min(n/2-e/2,0),v=-t,u=Math.min(o/2-f/2,0),w=-u,H.x="touchmove"===b.type?b.targetTouches[0].pageX:b.pageX,H.y="touchmove"===b.type?b.targetTouches[0].pageY:b.pageY,!q&&!l&&(Math.floor(t)===Math.floor(z)&&H.x<G.x||Math.floor(v)===Math.floor(z)&&H.x>G.x))return void(p=!1);q=!0,r=H.x-G.x+z,s=H.y-G.y+A,r<t&&(r=t+1-Math.pow(t-r+1,.8)),r>v&&(r=v-1+Math.pow(r-v+1,.8)),s<u&&(s=u+1-Math.pow(u-s+1,.8)),s>w&&(s=w-1+Math.pow(s-w+1,.8)),B||(B=H.x),E||(E=H.y),C||(C=a.now()),D=(H.x-B)/(a.now()-C)/2,F=(H.y-E)/(a.now()-C)/2,Math.abs(H.x-B)<2&&(D=0),Math.abs(H.y-E)<2&&(F=0),B=H.x,E=H.y,C=a.now(),d.scrollerTransform(r,s)}}},d.onTouchEnd=function(a){if(a.touches.length||(m=!1),!p||!q)return p=!1,void(q=!1);p=!1,q=!1;var b=300,c=300,e=D*b,f=r+e,g=F*c,h=s+g;0!==D&&(b=Math.abs((f-r)/D)),0!==F&&(c=Math.abs((h-s)/F));var i=Math.max(b,c);r=f,s=h;var k=x*j,l=y*j;t=Math.min(n/2-k/2,0),v=-t,u=Math.min(o/2-l/2,0),w=-u,r=Math.max(Math.min(r,v),t),s=Math.max(Math.min(s,w),u),d.scrollerTransition(i).scrollerTransform(r,s)},d.destory=function(){d.initEvents(!0),delete a.data[d.wrapper.getAttribute("data-zoomer")],d.wrapper.setAttribute("data-zoomer","")},d.init(),d},a.Zoom.defaults={speed:300,maxZoom:3,minZoom:1},a.fn.zoom=function(b){var c=[];return this.each(function(){var d=null,e=this,f=e.getAttribute("data-zoomer");f?d=a.data[f]:(f=++a.uuid,a.data[f]=d=new a.Zoom(e,b),e.setAttribute("data-zoomer",f)),c.push(d)}),1===c.length?c[0]:c}}(mui,window);