# html5 day2

标签（空格分隔）： 未分类

---

>1.视频API
方法：play() 播放 pause() 暂停
全屏 webkitRequestFullScreen()
-webkit- -moz- -ms- -o-
属性 ：paused:暂停 true(暂停) false(播放)
事件： oncanplay:当视频加载完成后
ontimeupdate:当视频当前播放时间改变时触发
onended : 当视频播放结束时

>2.拖拽
draggable="true" 允许元素进行拖拽
拖拽元素的事件
ondrag:在整个拖拽过程都会调用
ondragstart:开始拖拽会调用
ondragleave : 离开拖拽元素时调用
ondragend:拖拽结束时调用
目标元素事件
ondragenter:拖拽元素进入目标元素;
ondragover:拖拽元素在目标元素上面触发(连续触发）e.preventDefault()阻止浏览器默认行为;
ondragleave:拖拽元素离开目标元素
ondrop:当在目标元素上松开鼠标时调用
e.prentDefault阻止浏览器默认样式

>3.web 存储
storage:存储
window.sessionStorage 5M 内存
window.localStorage 20M 硬盘

>4.设置数据
window.sessionStorage.setItem("","");
获取数据
window.sessionStorage.setItem("");
删除数据
window.sessionStorage.removeItem("");
清空所有数据
window.sessionStorage.clear();

>5.网络状态
window.online : 用户网络连接时被调用
window.offline : 用户网络连接断开时被调用
定位
window.navigator
geolocation 地理位置




