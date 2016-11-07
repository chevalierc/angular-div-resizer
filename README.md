# angular-div-resizer
Drag horizontal and vertical div dividers using only angular. I stole this code from someone who had jquery being used internally. I replaced the jquery with angular for less depedencies. Unfortunatly I cannot find the origional to give credit.

## Example

Include the resizer module in your app and than configure the css.

### HTML
```
    <div id="sidebar-resizer" resizer="vertical" resizer-width="6" resizer-left="#left" resizer-right="#right" resizer-min="270" resizer-max="500"></div>
    
    <div id = "left">Side Bar Content</div>
    <div id= "right">Side Bar Content</div>
```

### CSS
```
#sidebar-resizer {
    background-color: #f9f9f9;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 300px;
    width: 6px;
    cursor: e-resize;
}

#sidebar-resizer:hover, #preview-resizer:hover {
	background-color: #AAA;
}

#left {
    position: absolute;
    left: 0;
    top: 0px;
    width: 300px;
    height: 100%;
}

#right {
    position: absolute;
    left: 306px/* 200 + 6*/;
    right: 0;
    top: 0px;
    height: 100%;
}
```
