
/******************************
        Background
 ******************************/

$.vegas.defaults = {
  background: {
    src:         null, // defined by Css
    align:       'center',
    valign:      'center',
    fade:        1000,
    loading:     true,
    load:        function(){},
    complete:    function(){}
  },
  slideshow: {
    step:        0,
    delay:       5000,
    backgrounds: [],
    preload:     false,
    walk:        function(){}
  },
  overlay: {
    src:         '/lib/vegas/overlays/13.png', // defined by Css 
    opacity:     1,  // defined by Css 
  }
}
