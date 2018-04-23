<!--
  Title: Novel Pad
  Description: This is a useful txt reader for anyone who need to put their novel or article to view online.
  Author: Lun
  -->

# Novel-Pad
The reader for anyone who need to put their .txt  to view online. (Mobile Friendly)
<br> <a target="_blank" href="http://smartlun.com/github/novel/">English Demo</a> / <a target="_blank" href="http://smartlun.com/novel/sixstone/">Chinese Demo</a> 

## Basic Usage

1. **First, you need a [Web Hosting](https://en.wikipedia.org/wiki/Category:Web_hosting) to let you upload your file.**

2. Upload any **TXT File Extension(.txt)** you want to display on your page. 

3. File Name will automatically be **TITLE**, and File Content will automatically be **CONTENT**.

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

## Prevent User copy
Put below code above your </head> tag.
```
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
<br />

