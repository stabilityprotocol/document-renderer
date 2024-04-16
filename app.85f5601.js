(()=>{var n,e,t,r={1727:(n,e,t)=>{"use strict";var r=t(6540),o=t(3899),i=t(5581),a=t(5338);let l=function(n){return n.BILL_OF_LADING="BILL_OF_LADING",n.StbleFile="STABILITY_FILE",n}({});var s=t(5072),d=t.n(s),c=t(7825),u=t.n(c),m=t(7659),p=t.n(m),g=t(5056),h=t.n(g),f=t(540),b=t.n(f),w=t(1113),y=t.n(w),x=t(7568),v={};v.styleTagTransform=y(),v.setAttributes=h(),v.insert=p().bind(null,"head"),v.domAPI=u(),v.insertStyleElement=b(),d()(x.A,v),x.A&&x.A.locals&&x.A.locals;var k=t(5738);const Y=k.Ay.div`
  margin: auto;
  font-family: Space Grotesk;
  display: flex;
  flex-direction: column;
  min-height: 30rem;
  width: 50rem;
  max-width: 90%;
  border-radius: 0.5rem;
  border: 1px solid #eaeaea;
`,A=k.Ay.div`
  display: flex;

  > * {
    width: 100%;
  }
`,S=k.Ay.div`
  border-bottom: 1px solid #eaeaea;
`,z=k.Ay.div`
  padding: 1rem;
  border-bottom: 1px solid #eaeaea;
  background: #f4f4f4;
`,F=k.Ay.div`
  font-family: DM Sans;
  padding: 0.75rem 1rem;
`;var C=t(2195);const O=({doc:n})=>(0,C.Y)(Y,null,(0,C.Y)(z,null,"Bill of Lading"),(0,C.Y)(A,null,(0,C.Y)(S,null,(0,C.Y)(z,null,"Issuer"),(0,C.Y)(F,null,n.issuer.partyName),(0,C.Y)(F,null,n.issuer.address),(0,C.Y)(F,null,n.issuer.email),(0,C.Y)(F,null,n.issuer.phone)),(0,C.Y)(S,null,(0,C.Y)(z,null,"Shipper"),(0,C.Y)(F,null,n.shipper.partyName),(0,C.Y)(F,null,n.shipper.address),(0,C.Y)(F,null,n.shipper.email),(0,C.Y)(F,null,n.shipper.phone))),(0,C.Y)(A,null,(0,C.Y)(S,null,(0,C.Y)(z,null,"Consignee"),(0,C.Y)(F,null,n.consignee.partyName),(0,C.Y)(F,null,n.consignee.address),(0,C.Y)(F,null,n.consignee.email),(0,C.Y)(F,null,n.consignee.phone)),(0,C.Y)(S,null,(0,C.Y)(z,null,"Notify Party"),(0,C.Y)(F,null,n.notifyParty.partyName),(0,C.Y)(F,null,n.notifyParty.address),(0,C.Y)(F,null,n.notifyParty.email),(0,C.Y)(F,null,n.notifyParty.phone))),(0,C.Y)(A,null,(0,C.Y)(S,null,(0,C.Y)(z,null,"Port of Loading"),(0,C.Y)(F,null,n.portOfLoading.locationName)),(0,C.Y)(S,null,(0,C.Y)(z,null,"Port of Discharge"),(0,C.Y)(F,null,n.portOfDischarge.locationName))),(0,C.Y)(A,null,(0,C.Y)(S,null,(0,C.Y)(z,null,"Cargo Description"),(0,C.Y)(F,null,n.cargoGrossWeight)),(0,C.Y)(S,null,(0,C.Y)(z,null,"Measurement"),(0,C.Y)(F,null,n.measurement))),(0,C.Y)(S,null,(0,C.Y)(z,null,"Description of Goods"),n.descriptionOfGoods.map(((n,e)=>(0,C.Y)(F,{key:e},n)))),(0,C.Y)(A,null,(0,C.Y)(S,null,(0,C.Y)(z,null,"Vessel"),(0,C.Y)(F,null,n.vessel)),(0,C.Y)(S,null,(0,C.Y)(z,null,"Reference No"),(0,C.Y)(F,null,n.referenceNo))),(0,C.Y)(S,null,(0,C.Y)(z,null,"Date of Issue"),(0,C.Y)(F,null,n.dateOfIssue)),(0,C.Y)(S,null,(0,C.Y)(z,null,"Date of Shipped"),(0,C.Y)(F,null,n.shippedOnBoardDate)));var $=t(5497);const j=k.Ay.div`
  border: 1px solid ${n=>n.theme.box.borderColor};
  border-radius: ${n=>n.theme.box.borderRadius};
  padding: ${n=>n.theme.spacing.medium};
  font-family: ${n=>n.theme.font.secondary};
`,D=k.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10rem;
  margin-top: 3rem;
  padding: ${n=>n.theme.spacing.medium};
  gap: ${n=>n.theme.spacing.medium};
  cursor: pointer;

  > svg {
    width: 2rem;
    height: auto;
  }
`,E=k.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${n=>n.theme.spacing.medium};

  span {
    font-weight: bold;
  }
`,L=k.Ay.div`
  display: flex;
  justify-content: center;
  margin-top: ${n=>n.theme.spacing.medium};
`;var _=t(7909),B=t(9879);const I=({onClick:n,children:e})=>(0,C.Y)(H,{onClick:n},e),R=k.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${n=>n.theme.spacing.medium}
    ${n=>n.theme.spacing.large};
  color: ${n=>n.theme.colors.primary};
  font-family: ${n=>n.theme.font.primary};
  font-size: 1.2rem;
  font-weight: 800;
  outline: 0;
  border-radius: ${n=>n.theme.box.borderRadius};
  cursor: pointer;
  transition: background 0.2s ease-in-out, border 0.2s ease-in-out;

  ${n=>n.noFill?k.AH`
          background: none;
          border: 0;
        `:k.AH`
          background: ${n=>n.theme.colors.dark0};
          border: 1px solid ${n=>n.theme.colors.dark1};

          &:hover {
            background: ${n=>n.theme.colors.dark1};
          }
        `}

  > svg {
    margin-left: ${n=>n.theme.spacing.small};
    color: ${n=>n.theme.colors.primary};
  }
`,P=((0,k.Ay)(R)`
  background: ${n=>n.theme.colors.buttons.primary};
  color: ${n=>n.theme.colors.bgBlue};

  &:hover {
    background: ${n=>n.theme.colors.buttons.primaryHover};
  }

  > svg {
    color: ${n=>n.theme.colors.bgBlue};
  }
`,(0,k.Ay)(R)`
  border: 0;
  padding: ${n=>n.theme.spacing.small};
  font-size: 1rem;
  font-weight: 400;
  color: #000;
  font-family: ${n=>n.theme.font.secondary};

  ${n=>n.noFill?k.AH`
          background: none;
          border: 0;
        `:k.AH`
          background: ${n=>n.theme.colors.buttons.gray};
          border: 1px solid transparent;

          &:hover {
            background: ${n=>n.theme.colors.buttons.grayHover};
            border: 1px solid ${n=>n.theme.colors.bgBlue};
          }
        `}

  > svg, img {
    margin-left: ${n=>n.theme.spacing.small};
    width: auto;
    height: 1.2rem;
    color: #000;
  }
`),H=(0,k.Ay)(P)`
  background: ${n=>n.theme.colors.buttons.primary};
  color: ${n=>n.theme.colors.bgBlue};

  &:hover {
    background: ${n=>n.theme.colors.buttons.primaryHover};
    border: 1px solid transparent;
  }

  > svg {
    color: ${n=>n.theme.colors.bgBlue};
  }
`,M=({actualHash:n})=>{const[e,t]=(0,r.useState)(),[o,i]=(0,r.useState)(),a=(0,r.useCallback)((n=>{console.log(n),t(n[0])}),[]),{getRootProps:l,getInputProps:s,isDragActive:d}=(0,$.VB)({onDrop:a,multiple:!1,accept:{"application/pdf":[".pdf"],"image/jpeg":[".jpeg",".jpg"],"image/png":[".png"]}}),c=(0,r.useCallback)((async()=>{try{if(!e)return;const n=await crypto.subtle.digest("SHA-256",await e.arrayBuffer()),t=Array.from(new Uint8Array(n)).map((n=>n.toString(16).padStart(2,"0"))).join("");i(t)}catch(n){console.error(n)}}),[e]),u=(0,r.useCallback)((()=>{t(void 0),i(void 0)}),[]);return(0,C.Y)(r.Fragment,null,(0,C.Y)(j,null,e?(0,C.Y)(r.Fragment,null,(0,C.Y)(E,null,(0,C.Y)("span",null,e.name),(0,C.Y)(I,{onClick:u},"Remove")),(0,C.Y)(E,null,o&&(0,C.Y)(N,{actualHash:n,calculatedHash:o})),(0,C.Y)(L,null,o?(0,C.Y)(I,{onClick:u},"Check other file"):(0,C.Y)(I,{onClick:c},"Check file integrity"))):(0,C.Y)(D,l(),(0,C.Y)("input",s()),(0,C.Y)(_.LpN,null),d?(0,C.Y)("div",null,"Drop the files here..."):(0,C.Y)(r.Fragment,null,(0,C.Y)("div",null,"Drag and drop a file here, or click to verify a file")))))},N=({actualHash:n,calculatedHash:e})=>{const t=n===e;return(0,C.Y)(T,null,t?(0,C.Y)(G,{type:"success"},(0,C.Y)(B.g9_,{style:{color:"green"}})," The uploaded file is original"):(0,C.Y)(G,{type:"error"},(0,C.Y)(B.usT,null)," The file has been manipulated"),(0,C.Y)("div",null,(0,C.Y)("strong",null,"Actual Hash:")," ",n),(0,C.Y)("div",null,(0,C.Y)("strong",null,"Calculated Hash:")," ",e))},G=k.Ay.span`
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${n=>"success"===n.type?"lightgreen":"lightcoral"};
`,T=k.Ay.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
`,U=({doc:n})=>{const[e,t]=(0,r.useState)();(0,r.useEffect)((()=>{fetch(n.url).then((n=>n.blob())).then((async n=>await crypto.subtle.digest("SHA-256",await n.arrayBuffer()))).then((n=>Array.from(new Uint8Array(n)).map((n=>n.toString(16).padStart(2,"0"))).join(""))).then((n=>t(n)))}));const o=(0,r.useMemo)((()=>n.mimeType.includes("pdf")?(0,C.Y)("iframe",{src:`https://docs.google.com/gview?url=${encodeURIComponent(n.url)}&embedded=true`,width:"90%",height:"800px"}):(0,C.Y)("img",{src:n.url,alt:"file"})),[n.mimeType]);return(0,C.Y)(Y,null,o,e&&(0,C.Y)(M,{actualHash:e}))},V={[l.BILL_OF_LADING]:[{id:l.BILL_OF_LADING,label:"Bill of Lading",template:({document:n})=>(0,C.Y)(O,{doc:n})}],[l.StbleFile]:[{id:l.BILL_OF_LADING,label:"Stble File Document",template:({document:n})=>(0,C.Y)(U,{doc:n})}]},q=document.getElementById("root");(0,a.H)(q).render((0,C.Y)(k.NP,{theme:{font:{primary:"Space Grotesk",secondary:"DM Sans",bolder:600},box:{borderRadius:"0.5rem",borderColor:"#EAEAEA"},fontSizes:{xsmall:"0.75rem",small:"0.875rem",medium:"1rem",large:"1.25rem",xlarge:"1.5rem",xxlarge:"2rem",xxxlarge:"3rem"},spacing:{xsmall:"0.25rem",small:"0.5rem",medium:"1rem",large:"2rem",xlarge:"4rem"},colors:{primary:"#75D8FF",dark0:"#232631",dark1:"#404761",neutral:"#F4F4F4",neutralDark:"#DEDEDE",bgBlue:"#2D3353",blue0:"#BAECFF",blue1:"#F0FBFF",blueLink:"#3E7CB1",red0:"#FEE8E7",red1:"#F97068",placeholder:"#A6A6A6",red:"#f97068",buttons:{primary:"#D6F3FF",primaryHover:"#BAECFF",primaryOutline:"#404761",primarySelected:"#75D8FF",gray:"#F4F4F4",grayHover:"#DEDEDE",grayOutline:"#2D3353"}}}},(0,C.Y)(o.m,{templateRegistry:V,attachmentToComponent:i.s})))},7568:(n,e,t)=>{"use strict";t.d(e,{A:()=>l});var r=t(1601),o=t.n(r),i=t(6314),a=t.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap);"]),a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap);"]),a.push([n.id,'@font-face {\n  font-family: "Gilroy-Medium";\n\n  src:\n    url("https://ui.tradetrust.io/static/fonts/GilroyMedium/font.woff2")\n      format("woff2"),\n    url("https://ui.tradetrust.io/static/fonts/GilroyMedium/font.woff")\n      format("woff");\n}\n\n@font-face {\n  font-family: "Gilroy-Bold";\n\n  src:\n    url("https://ui.tradetrust.io/static/fonts/GilroyBold/font.woff2")\n      format("woff2"),\n    url("https://ui.tradetrust.io/static/fonts/GilroyBold/font.woff")\n      format("woff");\n}\n\n/*\n! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com\n*/\n\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  /* 1 */\n  border-width: 0;\n  /* 2 */\n  border-style: solid;\n  /* 2 */\n  border-color: #e7eaec;\n  /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: "";\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n5. Use the user\'s configured `sans` font-feature-settings by default.\n6. Use the user\'s configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -moz-tab-size: 4;\n  /* 3 */\n  -o-tab-size: 4;\n  tab-size: 4;\n  /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",\n    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  /* 4 */\n  font-feature-settings: normal;\n  /* 5 */\n  font-variation-settings: normal;\n  /* 6 */\n  -webkit-tap-highlight-color: transparent;\n  /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0;\n  /* 1 */\n  line-height: inherit;\n  /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  border-top-width: 1px;\n  /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font-family by default.\n2. Use the user\'s configured `mono` font-feature-settings by default.\n3. Use the user\'s configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n    "Liberation Mono", "Courier New", monospace;\n  /* 1 */\n  font-feature-settings: normal;\n  /* 2 */\n  font-variation-settings: normal;\n  /* 3 */\n  font-size: 1em;\n  /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0;\n  /* 1 */\n  border-color: inherit;\n  /* 2 */\n  border-collapse: collapse;\n  /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-feature-settings: inherit;\n  /* 1 */\n  font-variation-settings: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  font-weight: inherit;\n  /* 1 */\n  line-height: inherit;\n  /* 1 */\n  color: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  padding: 0;\n  /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n  /* 1 */\n  background-color: transparent;\n  /* 2 */\n  background-image: none;\n  /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type="search"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\n\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  /* 1 */\n  vertical-align: middle;\n  /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n\n[hidden] {\n  display: none;\n}\n\nh1 {\n  font-weight: 700;\n}\n\nh2 {\n  font-weight: 700;\n}\n\nh3 {\n  font-weight: 700;\n}\n\nh4 {\n  font-weight: 700;\n}\n\nh5 {\n  font-weight: 700;\n}\n\nh6 {\n  font-weight: 700;\n}\n\nh1 {\n  font-size: 40px;\n}\n\nh2 {\n  font-size: 32px;\n}\n\nh3 {\n  font-size: 28px;\n}\n\nh4 {\n  font-size: 24px;\n}\n\ninput[disabled] {\n  cursor: not-allowed;\n}\n\na {\n  transition-property: color, background-color, border-color,\n    text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  --tw-text-opacity: 1;\n  color: rgb(110 120 127 / var(--tw-text-opacity));\n}\n\na:hover {\n  --tw-text-opacity: 1;\n  color: rgb(45 95 170 / var(--tw-text-opacity));\n}\n\npre {\n  white-space: pre-wrap;\n}\n\n*,\n::before,\n::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n.container {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 1rem;\n  padding-left: 1rem;\n}\n\n@media (min-width: 640px) {\n  .container {\n    max-width: 640px;\n  }\n}\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 768px;\n  }\n}\n\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1024px;\n  }\n}\n\n@media (min-width: 1280px) {\n  .container {\n    max-width: 1280px;\n  }\n}\n\n@media (min-width: 1536px) {\n  .container {\n    max-width: 1536px;\n  }\n}\n\n.terms {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n\n.terms h1,\n.terms h2 {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n\n.static {\n  position: static;\n}\n\n.fixed {\n  position: fixed;\n}\n\n.absolute {\n  position: absolute;\n}\n\n.relative {\n  position: relative;\n}\n\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n\n.mb-4 {\n  margin-bottom: 1rem;\n}\n\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\n\n.mb-8 {\n  margin-bottom: 2rem;\n}\n\n.mr-0 {\n  margin-right: 0px;\n}\n\n.mt-2 {\n  margin-top: 0.5rem;\n}\n\n.block {\n  display: block;\n}\n\n.inline-block {\n  display: inline-block;\n}\n\n.inline {\n  display: inline;\n}\n\n.flex {\n  display: flex;\n}\n\n.table {\n  display: table;\n}\n\n.w-1\\/2 {\n  width: 50%;\n}\n\n.w-full {\n  width: 100%;\n}\n\n.grow {\n  flex-grow: 1;\n}\n\n.table-auto {\n  table-layout: auto;\n}\n\n.border-collapse {\n  border-collapse: collapse;\n}\n\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n\n.border {\n  border-width: 1px;\n}\n\n.border-black {\n  --tw-border-opacity: 1;\n  border-color: rgb(0 0 0 / var(--tw-border-opacity));\n}\n\n.bg-cerulean-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(45 95 170 / var(--tw-bg-opacity));\n}\n\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n\n.bg-cover {\n  background-size: cover;\n}\n\n.p-2 {\n  padding: 0.5rem;\n}\n\n.p-4 {\n  padding: 1rem;\n}\n\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.pl-2 {\n  padding-left: 0.5rem;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n\n.font-bold {\n  font-weight: 700;\n}\n\n.font-medium {\n  font-weight: 500;\n}\n\n.font-normal {\n  font-weight: 400;\n}\n\n.leading-none {\n  line-height: 1;\n}\n\n.text-cerulean-500 {\n  --tw-text-opacity: 1;\n  color: rgb(45 95 170 / var(--tw-text-opacity));\n}\n\n.text-red-600 {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity));\n}\n\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)\n    var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate)\n    var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.transition-colors {\n  transition-property: color, background-color, border-color,\n    text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.duration-200 {\n  transition-duration: 200ms;\n}\n\n.ease-out {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.hover\\:bg-gray-50:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity));\n}\n\n.hover\\:text-red-700:hover {\n  --tw-text-opacity: 1;\n  color: rgb(185 28 28 / var(--tw-text-opacity));\n}\n\n@media (min-width: 768px) {\n  .md\\:order-1 {\n    order: 1;\n  }\n\n  .md\\:order-2 {\n    order: 2;\n  }\n\n  .md\\:mb-0 {\n    margin-bottom: 0px;\n  }\n\n  .md\\:ml-auto {\n    margin-left: auto;\n  }\n\n  .md\\:mr-4 {\n    margin-right: 1rem;\n  }\n\n  .md\\:flex {\n    display: flex;\n  }\n\n  .md\\:w-1\\/2 {\n    width: 50%;\n  }\n\n  .md\\:w-5\\/12 {\n    width: 41.666667%;\n  }\n\n  .md\\:text-right {\n    text-align: right;\n  }\n}\n\n@media print {\n  .print\\:hidden {\n    display: none;\n  }\n}\n',""]);const l=a},5352:()=>{},5365:()=>{},8196:()=>{},1671:()=>{},6959:()=>{},195:()=>{}},o={};function i(n){var e=o[n];if(void 0!==e)return e.exports;var t=o[n]={id:n,exports:{}};return r[n].call(t.exports,t,t.exports,i),t.exports}i.m=r,n=[],i.O=(e,t,r,o)=>{if(!t){var a=1/0;for(c=0;c<n.length;c++){for(var[t,r,o]=n[c],l=!0,s=0;s<t.length;s++)(!1&o||a>=o)&&Object.keys(i.O).every((n=>i.O[n](t[s])))?t.splice(s--,1):(l=!1,o<a&&(a=o));if(l){n.splice(c--,1);var d=r();void 0!==d&&(e=d)}}return e}o=o||0;for(var c=n.length;c>0&&n[c-1][2]>o;c--)n[c]=n[c-1];n[c]=[t,r,o]},i.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return i.d(e,{a:e}),e},t=Object.getPrototypeOf?n=>Object.getPrototypeOf(n):n=>n.__proto__,i.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var o=Object.create(null);i.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var l=2&r&&n;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>a[e]=()=>n[e]));return a.default=()=>n,i.d(o,a),o},i.d=(n,e)=>{for(var t in e)i.o(e,t)&&!i.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),i.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),i.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{var n={524:0};i.O.j=e=>0===n[e];var e=(e,t)=>{var r,o,[a,l,s]=t,d=0;if(a.some((e=>0!==n[e]))){for(r in l)i.o(l,r)&&(i.m[r]=l[r]);if(s)var c=s(i)}for(e&&e(t);d<a.length;d++)o=a[d],i.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return i.O(c)},t=self.webpackChunkgeneric_templates=self.webpackChunkgeneric_templates||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})(),i.nc=void 0;var a=i.O(void 0,[121],(()=>i(1727)));a=i.O(a)})();