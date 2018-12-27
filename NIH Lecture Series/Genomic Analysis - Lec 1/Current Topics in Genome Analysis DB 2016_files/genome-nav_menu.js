// USE WORDWRAP AND MAXIMIZE THE WINDOW TO SEE THIS FILE
c_styles={};c_menus={}; // do not remove this line

/******************************************************
	(1) GLOBAL SETTINGS
*******************************************************/

c_hideTimeout=200; // 1000==1 second
c_subShowTimeout=200;
c_keepHighlighted=true;
c_findCURRENT=true; // find the item linking to the current page and apply it the CURRENT style class
c_findCURRENTTree=true;
c_overlapControlsInIE=true;
c_rightToLeft=false; // if the menu text should have "rtl" direction (e.g. Hebrew, Arabic)


/******************************************************
	(2) MENU STYLES (CSS CLASSES)
*******************************************************/

// You can define different style classes here and then assign them globally to the menu tree(s)
// in section 3 below or set them to any UL element from your menu tree(s) in the page source


c_imagesPath="/include/genome_public/images/"; // path to the directory containing the menu images

c_styles['DD']=[ // MainMenu (the shorter the class name the better)
[
// MENU BOX STYLE
0,		// BorderWidth
'none',	// BorderStyle (CSS valid values except 'none')
'',	// BorderColor ('color')
0,		// Padding
'',	// Background ('color','transparent','[image_source]')
'',		// IEfilter (only transition filters work well - not static filters)
''		// Custom additional CSS for the menu box (valid CSS)
],[
// MENU ITEMS STYLE
0,		// BorderWidth
'',	// BorderStyle (CSS valid values except 'none')
'',	// OVER BorderStyle
'',	// BorderColor ('color')
'',	// OVER BorderColor
0,		// Padding
'',	// Background ('color','transparent','[image_source]')
'',	// OVER Background
'',	// Color
'',	// OVER Color
'',		// FontSize (values in CSS valid units - %,em,ex,px,pt)
'',	// FontFamily
'',		// FontWeight (CSS valid values - 'bold','normal','bolder','lighter','100',...,'900')
'',		// TextDecoration (CSS valid values - 'none','underline','overline','line-through')
'',		// OVER TextDecoration
'',		// TextAlign ('left','center','right','justify')
0,		// ItemsSeparatorSize
'',	// ItemsSeparatorStyle (border-style valid values)
'',	// ItemsSeparatorColor ('color','transparent')
0,		// ItemsSeparatorSpacing
false,			// UseSubMenuImage (true,false)
'',	// SubMenuImageSource ('[image_source]')
'',	// OverSubMenuImageSource
0,			// SubMenuImageWidth
0,			// SubMenuImageHeight
'0',			// SubMenuImageVAlign ('pixels from item top','middle')
'',		// VISITED BorderStyle
'',		// VISITED BorderColor
'',		// VISITED Background
'',		// VISITED Color
'',			// VISITED TextDecoration
'',	// VISITED SubMenuImageSource
'',		// CURRENT BorderStyle
'',		// CURRENT BorderColor
'',		// CURRENT Background
'',		// CURRENT Color
'',			// CURRENT TextDecoration
'',	// CURRENT SubMenuImageSource
'',		// Custom additional CSS for the items (valid CSS)
'',		// OVER Custom additional CSS for the items (valid CSS)
'',		// CURRENT Custom additional CSS for the items (valid CSS) background-image:url(/include/genome_public/images/v_arrow.gif); background-position:left; background-repeat:no-repeat
''		// VISITED Custom additional CSS for the items (valid CSS)
]];

c_styles['LL']=[ // MainMenu (horizontal) (the shorter the class name the better)
[
// MENU BOX STYLE
0,		// BorderWidth
'none',	// BorderStyle (CSS valid values except 'none')
'',	// BorderColor ('color')
0,		// Padding
'#EFEFEF',	// Background ('color','transparent','[image_source]')
'',		// IEfilter (only transition filters work well - not static filters)
''		// Custom additional CSS for the menu box (valid CSS)
],[
// MENU ITEMS STYLE
0,		// BorderWidth
'',	// BorderStyle (CSS valid values except 'none')
'',	// OVER BorderStyle
'',	// BorderColor ('color')
'',	// OVER BorderColor
5,		// Padding
'#EFEFEF',	// Background ('color','transparent','[image_source]')
'#1D8246',	// OVER Background
'black',	// Color
'white',	// OVER Color
'95%',		// FontSize (values in CSS valid units - %,em,ex,px,pt)
'tahoma,arial,verdana,helvetica,sans-serif',	// FontFamily
'normal',		// FontWeight (CSS valid values - 'bold','normal','bolder','lighter','100',...,'900')
'none',		// TextDecoration (CSS valid values - 'none','underline','overline','line-through')
'underline',		// OVER TextDecoration
'left',		// TextAlign ('left','center','right','justify')
1,		// ItemsSeparatorSize
'solid',	// ItemsSeparatorStyle (border-style valid values)
'#CBCBEF',	// ItemsSeparatorColor ('color','transparent')
0,		// ItemsSeparatorSpacing
true,			// UseSubMenuImage (true,false)
'[v_arrow.gif]',	// SubMenuImageSource ('[image_source]')
'[v_arrow_over.gif]',	// OverSubMenuImageSource
7,			// SubMenuImageWidth
7,			// SubMenuImageHeight
'8',			// SubMenuImageVAlign ('pixels from item top','middle')
'solid',		// VISITED BorderStyle
'',		// VISITED BorderColor
'',		// VISITED Background
'',		// VISITED Color
'',			// VISITED TextDecoration
'[v_arrow.gif]',	// VISITED SubMenuImageSource
'',		// CURRENT BorderStyle
'',		// CURRENT BorderColor
'#CCC',		// CURRENT Background
'black',		// CURRENT Color
'',			// CURRENT TextDecoration
'[v_arrow_current.gif]',	// CURRENT SubMenuImageSource
'padding-left:7px',		// Custom additional CSS for the items (valid CSS)
'',		// OVER Custom additional CSS for the items (valid CSS)
'font-weight:bold',//background-image:url(/include/genome_public/images/v_arrow_over.gif); background-position:left; background-repeat:no-repeat; margin-left:2px',		// CURRENT Custom additional CSS for the items (valid CSS) background-image:url(/include/genome_public/images/v_arrow.gif); background-position:left; background-repeat:no-repeat
''		// VISITED Custom additional CSS for the items (valid CSS)
]];



c_styles['SD']=[ // SubMenus
[
// MENU BOX STYLE
0,		// BorderWidth
'',	// BorderStyle (CSS valid values except 'none')
'',	// BorderColor ('color') #4D4C76
0,		// Padding
'white',	// Background ('color','transparent','[image_source]') #237298
'',		// IEfilter (only transition filters work well - not static filters)
''		// Custom additional CSS for the menu box (valid CSS)
],[
// MENU ITEMS STYLE
0,		// BorderWidth
'',	// BorderStyle (CSS valid values except 'none')
'',	// OVER BorderStyle
'',	// BorderColor ('color')
'',	// OVER BorderColor
1,		// Padding
'',	// Background ('color','transparent','[image_source]')
'#CCC',	// OVER Background
'white',	// Color
'black',	// OVER Color
'95%',		// FontSize (values in CSS valid units - %,em,ex,px,pt)
'tahoma,verdana,arial,helvetica,sans-serif',	// FontFamily
'normal',	// FontWeight (CSS valid values - 'bold','normal','bolder','lighter','100',...,'900')
'none',		// TextDecoration (CSS valid values - 'none','underline','overline','line-through')
'none',		// OVER TextDecoration
'left',		// TextAlign ('left','center','right','justify')
1,		// ItemsSeparatorSize
'solid',	// ItemsSeparatorStyle (border-style valid values)
'#CBCBEF',	// ItemsSeparatorColor ('color','transparent')
0,		// ItemsSeparatorSpacing
false,			// UseSubMenuImage (true,false)
'',	// SubMenuImageSource ('[image_source]')
'',	// OverSubMenuImageSource
7,			// SubMenuImageWidth
7,			// SubMenuImageHeight
'7',			// SubMenuImageVAlign ('pixels from item top','middle')
'solid',		// VISITED BorderStyle
'',		// VISITED BorderColor
'',		// VISITED Background
'',		// VISITED Color
'none',			// VISITED TextDecoration
'',	// VISITED SubMenuImageSource
'solid',		// CURRENT BorderStyle
'#CBCBEF',		// CURRENT BorderColor
'#FFFBF0',		// CURRENT Background
'#252455',		// CURRENT Color
'none',			// CURRENT TextDecoration
'',	// CURRENT SubMenuImageSource
'',		// Custom additional CSS for the items (valid CSS)
'',		// OVER Custom additional CSS for the items (valid CSS)
'',		// CURRENT Custom additional CSS for the items (valid CSS)
''		// VISITED Custom additional CSS for the items (valid CSS)
]];


c_styles['SL']=[ // SubMenus
[
// MENU BOX STYLE
0,		// BorderWidth
'',	// BorderStyle (CSS valid values except 'none')
'',	// BorderColor ('color') #4D4C76
3,		// Padding
'#1D8246',	// Background ('color','transparent','[image_source]') #237298
'',		// IEfilter (only transition filters work well - not static filters)
'border-bottom:5px solid transparent'		// Custom additional CSS for the menu box (valid CSS)
],[
// MENU ITEMS STYLE
0,		// BorderWidth
'',	// BorderStyle (CSS valid values except 'none')
'',	// OVER BorderStyle
'',	// BorderColor ('color')
'',	// OVER BorderColor
4,		// Padding
'#1D8246',	// Background ('color','transparent','[image_source]')
'#CCC',	// OVER Background
'white',	// Color
'black',	// OVER Color
'95%',		// FontSize (values in CSS valid units - %,em,ex,px,pt)
'tahoma,verdana,arial,helvetica,sans-serif',	// FontFamily
'normal',	// FontWeight (CSS valid values - 'bold','normal','bolder','lighter','100',...,'900')
'none',		// TextDecoration (CSS valid values - 'none','underline','overline','line-through')
'none',		// OVER TextDecoration
'left',		// TextAlign ('left','center','right','justify')
1,		// ItemsSeparatorSize
'solid',	// ItemsSeparatorStyle (border-style valid values)
'#CBCBEF',	// ItemsSeparatorColor ('color','transparent')
0,		// ItemsSeparatorSpacing
true,			// UseSubMenuImage (true,false)
'[v_arrow.gif]',	// SubMenuImageSource ('[image_source]')
'[v_arrow_over.gif]',	// OverSubMenuImageSource
7,			// SubMenuImageWidth
7,			// SubMenuImageHeight
'7',			// SubMenuImageVAlign ('pixels from item top','middle')
'solid',		// VISITED BorderStyle
'',		// VISITED BorderColor
'',		// VISITED Background
'',		// VISITED Color
'none',			// VISITED TextDecoration
'[v_arrow.gif]',	// VISITED SubMenuImageSource
'solid',		// CURRENT BorderStyle
'#CBCBEF',		// CURRENT BorderColor
'#FFFBF0',		// CURRENT Background
'#252455',		// CURRENT Color
'none',			// CURRENT TextDecoration
'[v_arrow.gif]',	// CURRENT SubMenuImageSource
'',		// Custom additional CSS for the items (valid CSS)
'',		// OVER Custom additional CSS for the items (valid CSS)
'',		// CURRENT Custom additional CSS for the items (valid CSS)
''		// VISITED Custom additional CSS for the items (valid CSS)
]];

/******************************************************
	(3) MENU TREE FEATURES
*******************************************************/

// Normally you would probably have just one menu tree (i.e. one main menu with sub menus).
// But you are actually not limited to just one and you can have as many menu trees as you like.
// Just copy/paste a config block below and configure it for another UL element if you like.


c_menus['dynamic_d']=[ // the UL element with id="Menu1"
[
// MAIN-MENU FEATURES
'horizontal',	// ItemsArrangement ('vertical','horizontal')
'relative',	// Position ('relative','relative','fixed')
'0',		// X Position (values in CSS valid units- px,em,ex)
'',		// Y Position (values in CSS valid units- px,em,ex)
false,		// RightToLeft display of the sub menus
false,		// BottomToTop display of the sub menus
0,		// X SubMenuOffset (pixels)
0,		// Y SubMenuOffset
'',		// Width (values in CSS valid units - px,em,ex) (matters for main menu with 'vertical' ItemsArrangement only)
'DD',		// CSS Class (one of the defined in section 2)
false		// Open sub-menus onclick (default is onmouseover)
],[
// SUB-MENUS FEATURES
0,		// X SubMenuOffset (pixels)
0,		// Y SubMenuOffset
'auto',		// Width ('auto',values in CSS valid units - px,em,ex)
'160px',		// MinWidth ('pixels') (matters/useful if Width is set 'auto')
'360px',		// MaxWidth ('pixels') (matters/useful if Width is set 'auto')
'SD',		// CSS Class (one of the defined in section 2)
false		// Open sub-menus onclick (default is onmouseover)
]];



c_menus['dynamic_l']=[ // the UL element with id="Menu1"
[
// MAIN-MENU FEATURES
'vertical',	// ItemsArrangement ('vertical','horizontal')
'relative',	// Position ('relative','absolute','fixed')
'0',		// X Position (values in CSS valid units- px,em,ex)
'',		// Y Position (values in CSS valid units- px,em,ex)
false,		// RightToLeft display of the sub menus
false,		// BottomToTop display of the sub menus
5,		// X SubMenuOffset (pixels)
0,		// Y SubMenuOffset
'190px',		// Width (values in CSS valid units - px,em,ex) (matters for main menu with 'vertical' ItemsArrangement only)
'LL',		// CSS Class (one of the defined in section 2)
false		// Open sub-menus onclick (default is onmouseover)
],[
// SUB-MENUS FEATURES
5,		// X SubMenuOffset (pixels)
0,		// Y SubMenuOffset
'auto',		// Width ('auto',values in CSS valid units - px,em,ex)
'180',		// MinWidth ('pixels') (matters/useful if Width is set 'auto')
'360',		// MaxWidth ('pixels') (matters/useful if Width is set 'auto')
'SL',		// CSS Class (one of the defined in section 2)
false		// Open sub-menus onclick (default is onmouseover)
]];