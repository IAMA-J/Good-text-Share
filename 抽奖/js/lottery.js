(function(win){
	var defaultOpt={
		el:'',
		rotateNum:5,
		roteTime:8,
		arrayData:[],
		clickBtn:function(){},
		callback:function(){}
	}
	win.KinerLottery=function KinerLottery(opts) {
		//新的opts覆盖默认defaultOpt.
        this.opts = $.extend(true, {}, defaultOpt, opts);
        this.status=0;
		this.init();//初始化函数
 	};
  	KinerLottery.prototype.init=function(){
  		var el=this.opts.el;
  		var self=this;
  		$(el).find('.inner').attr('data-status','false')
  		//转盘分为几部分，每部分的角度
  		var angle=360/this.opts.arrayData.length;
  		$.each(this.opts.arrayData, function(index, item) {
  			//将抽奖的内容放入外部的转盘，.outer固定
			$('<div />').appendTo('.outer').html(item.t).addClass('rotate').css({
				transform: 'rotate(' + index * angle + 'deg)',
				background: 'url(' + item.i + ') center 2rem no-repeat',
				'background-size': '2rem 2rem'
			})
		});	
		$('body').on('click','.inner',function(){		
			if($(this).attr('data-status')=='false'){
				self.opts.clickBtn.call(self);	
			}else{				
			}					
		});		
		$(el).find('.outer').get(0).addEventListener('webkitTransitionEnd', function() {
			self.status=0;
			$(el).find('.inner').attr('data-status','false')
        	console.log('结束');
			$(el).find('.outer').css({
				'-webkit-transition': 'none',
              	'transition': 'none',
				'-webkit-transform': 'rotate(' + (self.deg) + 'deg)',
				'transform': 'rotate(' + (self.deg) + 'deg)'
			});	
          	self.opts.callback();
       });	
  	};
  	KinerLottery.prototype.goKinerLottery=function(reward){
  		$(this).find('.inner').attr('data-status','true')
  		this.deg=reward;
  		var el=this.opts.el;
  		//转动的状态
  		this.status=1;
		//转动的圈数
  		var deg = this.opts.rotateNum * 360+reward; //转盘需要转动的角度
		//转动的时间：this.opts.roteTime
        $(el).find('.outer').css({
			'-webkit-transition': 'all '+this.opts.roteTime+'s',
			'transition': 'all '+this.opts.roteTime+'s',
			'-webkit-transform': 'rotate(' + (deg) + 'deg)',
			'transform': 'rotate(' + (deg) + 'deg)'
		});	
		$(el).attr('data-deg', deg);
	}
})(window);
	
	

