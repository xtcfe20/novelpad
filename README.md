# Novel-Pad
####The useful reader for anyone who need to put their novel or article to view online. (Mobile Friendly)
###<a href="http://smartlun.com/github/novel/" target="_blank">English Demo</a> / <a href="http://smartlun.com/novel/sixstone/" target="_blank">Chinese Demo</a> 

## Basic Usage

- **First, you need a [Web Hosting](https://en.wikipedia.org/wiki/Category:Web_hosting) to let you upload your file.**

- Upload any **TXT File Extension(.txt)** you want to display on your page. 

- File Name will automatically be **TITLE**, and File Content will automatically be **CONTENT**.

## Place Order

![order](screenshots/01.png "Add the order number in the leftmost to sort txt files")
- As above image, rename filename and put the order number on the **LEFTMOST** to sort them out. 

- The leftmost number will **NOT DISPLAY** on your page.

## Modify Novel Name, Author and Status

Open index.php to find the top of them and modify them with your editer.
- **$NovelName** 
- **$NovelAuthor**
- **$NovelStatus** 


## For Chinese version Usage
Open index.php , Ctrl+F find **Chinese version**, delete **//** to comment out,  and write **//** to comment in English version.

<br />
>## Prevent user copy
put **JavaScript** into your code
```ruby
<!-- prevent user copy start -->
<script type="text/javascript">
function iEsc(){ return false; }
function iRec(){ return true; }
function DisableKeys() {
if(event.ctrlKey || event.shiftKey || event.altKey) {
window.event.returnValue=false;
iEsc();}
}
document.ondragstart=iEsc;
document.onkeydown=DisableKeys;
document.oncontextmenu=iEsc;
if (typeof document.onselectstart !="undefined")
document.onselectstart=iEsc;
else{
document.onmousedown=iEsc;
document.onmouseup=iRec;
}
function DisableRightClick(qsyzDOTnet){
if (window.Event){
if (qsyzDOTnet.which == 2 || qsyzDOTnet.which == 3)
iEsc();}
else
if (event.button == 2 || event.button == 3){
event.cancelBubble = true
event.returnValue = false;
iEsc();}
}
</script>
<!-- prevent user copy end -->
```
And put **CSS** into your code
```ruby
body {
   /* prevent user copy */
  -moz-user-select : none;
  -webkit-user-select: none; 
}
```

**\* Notice that there is no way to prevent user copy your text when you publish in Internet.**
