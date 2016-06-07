THIS IS WEB PACK Demo.
Just for practice webpack scss.

遇到的问题
1.今天在测rem值的时候，发现无论我怎么扩大缩小chrome页面时，chrome中devtool算出的rem转成的px值永远是设定的rem ＊ 浏览器默认的font-size:16px，也就是rem参照的html的font-size值并没有随着Chrome Zoom比例而进行改变。后来查到，原来chrome devtool计算时是不考虑zoom的情况.

  Firebug and the other developer tools display the computed values according to the W3C specification. More precisely, they use the window.getComputedStyle() function to get the computed value and this function does not take the zoom level into account.
所以我们在扩大缩小chrome页面时，html的font-size是会变的，这个值要我们自己去＊Zoom的比例来计算的。
