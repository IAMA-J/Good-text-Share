# Good-text-Share
1.下载ArtTemplate的js,并引用<script src="js/template.js"></script>。
2.使用一个type="text/html"的script标签存放模板，该模版根据页面布局进行写，但是语法固定是
<script id="xxx" type="text/html">
        {{if isAdmin}} 
              里面为根据内容的html标签，如angular的ng-repeat；
        {{/if}}
</script>
例子为：
<script id="test" type="text/html">
{{if isAdmin}}  //注意这里，下边有解释
  <h1>{{title}}</h1>  
  <ul>  
      {{each list as value index}} 
          <li>索引：{{index}}:{{value}}</li>  
      {{/each}}  
  </ul>  
{{/if}}  
</script>
each这部分可以简写为
{{each list}}
    <li>{{$index}}：{{$value}}</li>
{{/each}}
3.根据内容渲染页面，用template的方法获取到数据，并把数据放在id为test（id名随便写）的script的标签里的模版了。
例子：
<script>
var data = {
	title: '基本例子',
	isAdmin: true,     //这里要注意，如果语法里有{{if isAdmin}}的话，则这里要写isAdmin:true,若是语法没            有，则不需要写。
	list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
};
var html = template('test', data);
document.getElementById('content').innerHTML = html;
</script>
4.将模版放到某个html标签里。
例子：
<div id=content></div>
5.效果如下
页面效果：
基本例子

索引：0:文艺
索引：1:博客
索引：2:摄影
索引：3:电影
索引：4:民谣
索引：5:旅行
索引：6:吉他

渲染后的代码如下：
<div id="content">  
  <h1>基本例子</h1>  
  <ul>       
          <li>索引：0:文艺</li>  
          <li>索引：1:博客</li>          
          <li>索引：2:摄影</li>          
          <li>索引：3:电影</li>          
          <li>索引：4:民谣</li>          
          <li>索引：5:旅行</li>          
          <li>索引：6:吉他</li>          
  </ul>  
</div>

加深学习
如果数据为数组时的应用
数据：
<script>
var data = {
    title: '标签',
    list:[  
        {"id":1,"shop_name":"123","shop_balance":5000},  
        {"id":2,"shop_name":"12344","shop_balance":500}  
    ]  
};
var html = template('test', data);
document.getElementById('content').innerHTML = html;
</script>
模版的写法：
<script id="test" type="text/html">
	<h1>{{title}}</h1>
	<ul>
    	{{each list as value index}}  
          <li>索引{{value.id}}:{{value.shop_name}}</li>  //注意看这里
      	{{/each}}
	</ul>
</script>
