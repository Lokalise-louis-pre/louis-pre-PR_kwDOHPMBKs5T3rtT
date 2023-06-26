/*! For license information please see 7432.10794f00.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[7432],{"./node_modules/@lokalise/styled/dist/hooks/useTheme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>s});const s=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Fg},"./node_modules/@lokalise/styled/dist/tokens/excludeProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>d});const d=c=>(e,s)=>!c.includes(e)&&s(e)},"./src/components/Popover/Popover.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>Popover});var floating_ui_core_browser_min=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs"),floating_ui_react_dom_esm=__webpack_require__("./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),useMergeRefs=__webpack_require__("./src/utils/hooks/useMergeRefs.ts"),Portal=__webpack_require__("./src/components/Portal/Portal.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PopoverWrapper=_ref=>{let{inPortal=!1,children}=_ref;return inPortal?(0,jsx_runtime.jsx)(Portal.h,{children}):children};PopoverWrapper.displayName="PopoverWrapper";try{PopoverWrapper.displayName="PopoverWrapper",PopoverWrapper.__docgenInfo={description:"",displayName:"PopoverWrapper",props:{inPortal:{defaultValue:{value:"false"},description:"",name:"inPortal",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popover/PopoverWrapper.tsx#PopoverWrapper"]={docgenInfo:PopoverWrapper.__docgenInfo,name:"PopoverWrapper",path:"src/components/Popover/PopoverWrapper.tsx#PopoverWrapper"})}catch(__react_docgen_typescript_loader_error){}var styles=__webpack_require__("./src/components/Popover/styles.ts"),floating_ui_react_esm=__webpack_require__("./node_modules/@floating-ui/react/dist/floating-ui.react.esm.js"),floating_ui_dom_browser_min=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs");const getDelayValue=delay=>"number"==typeof delay?delay:delay?250:0;const offsetMiddleware=_ref=>{let{withArrow=!1,offset:offsetValue}=_ref;return(0,floating_ui_core_browser_min.cv)(withArrow?10:4*(offsetValue??0))},Popover=(0,react.forwardRef)(((_ref2,ref)=>{let{placement="bottom",content,triggerEvent="click",delay=!1,children,components:{Arrow=styles.E,Content=styles.V}={},middlewares=[],offset:offsetValue,withArrow=!1,open,onOpenChange,inPortal=!1,positioning="absolute",role="dialog",className,style,...rest}=_ref2;const arrowRef=(0,react.useRef)(null),autoPlacementMiddleware="auto"===placement?[(0,floating_ui_core_browser_min.X5)()]:[(0,floating_ui_core_browser_min.RR)()],fallbackPlacement="auto"===placement?"bottom":placement,{open:isOpen,setOpen,x,y,refs,getFloatingProps,getReferenceProps,middlewareData,context}=function usePopover(_ref){let{open:controlledOpen,defaultIsOpen,delay,placement="bottom",triggerEvent="click",onOpenChange:setControlledOpen,middlewares=[],strategy:customStrategy,role="dialog"}=_ref;const[uncontrolledOpen,setUncontrolledOpen]=(0,react.useState)(!!defaultIsOpen),open=controlledOpen??uncontrolledOpen,setOpen=(0,react.useCallback)((visible=>{setUncontrolledOpen(visible),setControlledOpen&&setControlledOpen(visible)}),[setControlledOpen]),{context,refs,x,y,strategy,middlewareData}=(0,floating_ui_react_esm.YF)({open,onOpenChange:setOpen,placement,strategy:customStrategy,middleware:middlewares,whileElementsMounted:floating_ui_dom_browser_min.Me}),interactions=(0,floating_ui_react_esm.NI)([(0,floating_ui_react_esm.eS)(context,{enabled:"click"===triggerEvent}),(0,floating_ui_react_esm.XI)(context,{enabled:"hover"===triggerEvent,delay:{open:getDelayValue(delay)}}),(0,floating_ui_react_esm.KK)(context),(0,floating_ui_react_esm.qs)(context,{role}),(0,floating_ui_react_esm.bQ)(context)]),id=(0,floating_ui_react_esm.PC)(),labelId=`${id}-label`,descriptionId=`${id}-description`;return(0,react.useMemo)((()=>({...interactions,context,descriptionId,refs,labelId,middlewareData,open,setOpen,strategy,x,y})),[interactions,context,descriptionId,refs,labelId,middlewareData,open,setOpen,strategy,x,y])}({open,onOpenChange,strategy:positioning,role,delay,placement:fallbackPlacement,triggerEvent,middlewares:[...autoPlacementMiddleware,(0,floating_ui_core_browser_min.uY)(),(0,floating_ui_react_dom_esm.x7)({element:arrowRef,padding:5}),offsetMiddleware({withArrow,offset:offsetValue}),...middlewares]});let clone=null;const resolvedChildren="function"==typeof children?children(isOpen):children,mergedRef=(0,useMergeRefs.q)((input=resolvedChildren,(0,react.isValidElement)(input)?resolvedChildren.ref:null),refs.setReference,ref);var input;return clone="string"==typeof resolvedChildren||"number"==typeof resolvedChildren?(0,jsx_runtime.jsx)("span",{ref:refs.setReference,...getReferenceProps(),children:resolvedChildren}):(0,react.cloneElement)(resolvedChildren,getReferenceProps({ref:mergedRef,...resolvedChildren.props,...rest})),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[clone,isOpen&&content&&(0,jsx_runtime.jsx)(PopoverWrapper,{inPortal,children:(0,jsx_runtime.jsxs)(Content,{ref:refs.setFloating,className,style:{position:positioning,top:y??0,left:x??0,...style},...getFloatingProps(),children:["function"==typeof content?content(setOpen):content,withArrow&&(0,jsx_runtime.jsx)(Arrow,{ref:arrowRef,placement:context.placement,style:{left:middlewareData.arrow?.x,top:middlewareData.arrow?.y}})]})})]})}));Popover.displayName="Popover";try{Popover.displayName="Popover",Popover.__docgenInfo={description:"",displayName:"Popover",props:{children:{defaultValue:null,description:"Renders text content or any HTML node to attach the popover to.",name:"children",required:!0,type:{name:"Children | ((visible: boolean) => Children)"}},style:{defaultValue:null,description:"Sets the style for the content.",name:"style",required:!1,type:{name:"CSSProperties"}},content:{defaultValue:null,description:"Renders text content and / or any HTML node in the popover.",name:"content",required:!1,type:{name:"ReactNode | ((setVisible: (opened: boolean) => void) => ReactNode)"}},className:{defaultValue:null,description:"Sets the CSS class attribute.",name:"className",required:!1,type:{name:"string"}},role:{defaultValue:{value:"dialog"},description:"",name:"role",required:!1,type:{name:"enum",value:[{value:'"dialog"'},{value:'"menu"'},{value:'"tooltip"'},{value:'"alertdialog"'},{value:'"grid"'},{value:'"listbox"'},{value:'"tree"'}]}},placement:{defaultValue:{value:"bottom"},description:"Determines where the popover should appear relative to the child element.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'}]}},open:{defaultValue:null,description:"Controls the visibility of the popover.\nIf provided, the popover will be opened/closed in controlled mode.\nUnset (by default) will let Popover decides in uncontrolled mode.",name:"open",required:!1,type:{name:"boolean"}},defaultIsOpen:{defaultValue:null,description:"If `true`, the popover will be initially opened.",name:"defaultIsOpen",required:!1,type:{name:"boolean"}},triggerEvent:{defaultValue:{value:"click"},description:"Determines whether the popover should appear on hover or click.",name:"triggerEvent",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'}]}},delay:{defaultValue:{value:"false"},description:"Set delayed appearance of the popover when `triggerEvent` is 'hover'.\nSet to `true` will use default value of 250 milliseconds.\nSet to a custom number will make it delays with that amount in milliseconds.",name:"delay",required:!1,type:{name:"number | boolean"}},onOpenChange:{defaultValue:null,description:"Callback when state of popover changed\nFunction executed when the visibility of the popover changes.",name:"onOpenChange",required:!1,type:{name:"(((open: boolean) => void) & ((open: boolean) => void))"}},middlewares:{defaultValue:{value:"[]"},description:"useFloating middlewares.",name:"middlewares",required:!1,type:{name:"{ name: string; options?: any; fn: (state: { strategy: Strategy; placement: Placement; platform: Platform; x: number; y: number; middlewareData: MiddlewareData; initialPlacement: Placement; rects: ElementRects; elements: Elements; }) => Promisable<...>; }[]"}},inPortal:{defaultValue:{value:"false"},description:"Toggles rendering in a portal container to prevent other elements from clipping or hiding the popover.",name:"inPortal",required:!1,type:{name:"boolean"}},positioning:{defaultValue:{value:"absolute"},description:"Sets the positioning of the popover.",name:"positioning",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"absolute"'}]}},components:{defaultValue:null,description:"Overrides the default Arrow and Content components to render the popover.",name:"components",required:!1,type:{name:"Partial<Components>"}},offset:{defaultValue:null,description:"Sets popover offset using theme spacing when rendering without an arrow.",name:"offset",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"}]}},withArrow:{defaultValue:{value:"false"},description:"Toggles an arrow pointing to the attached element.",name:"withArrow",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popover/Popover.tsx#Popover"]={docgenInfo:Popover.__docgenInfo,name:"Popover",path:"src/components/Popover/Popover.tsx#Popover"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Popover/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>Arrow,V:()=>Content});var _lokalise_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_lokalise_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/variants.js"),_utils_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/theme/index.ts");const bottom=_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
	top: -5px;

	&::before {
		border-left-width: 1px;
		border-left-style: solid;
		border-top-width: 1px;
		border-top-style: solid;
	}
`,top=_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
	bottom: -5px;

	&::before {
		border-right-width: 1px;
		border-right-style: solid;
		border-bottom-width: 1px;
		border-bottom-style: solid;
	}
`,left=_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
	right: -5px;

	&::before {
		border-right-width: 1px;
		border-right-style: solid;
		border-top-width: 1px;
		border-top-style: solid;
	}
`,right=_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
	left: -5px;

	&::before {
		border-left-width: 1px;
		border-left-style: solid;
		border-bottom-width: 1px;
		border-bottom-style: solid;
	}
`,Arrow=_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.ZP.div.withConfig({displayName:"Popover__Arrow",componentId:"sc-3ptc01-0"})(["position:absolute;width:8px;height:8px;z-index:",";&::before{position:absolute;width:8px;height:8px;z-index:",";content:'';display:block;transform:rotate(45deg);background-color:",";border-color:",";}",""],(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("zIndex.hide"),(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("zIndex.hide"),(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.background.surface.default"),(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.border.default"),(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_2__.o)("placement",{top,bottom,left,right,"right-end":right,"right-start":right,"left-start":left,"auto-end":_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv``,"auto-start":_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv``,auto:_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv``,"bottom-end":bottom,"bottom-start":bottom,"left-end":left,"top-end":top,"top-start":top},"auto")),Content=_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.ZP.div.withConfig({displayName:"Popover__Content",componentId:"sc-3ptc01-1"})(["padding:0;border-radius:",";background-color:",";border:1px solid ",";box-shadow:0 0 5px rgba(0,0,0,0.2);z-index:",";color:",";",";width:max-content;"],(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("radius.m"),(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.background.surface.default"),(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.border.default"),(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("zIndex.popover"),(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.text.default"),(0,_utils_theme__WEBPACK_IMPORTED_MODULE_1__.cp)("body.small.default"))},"./src/components/Portal/Portal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>Portal});var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js");const useIsomorphicLayoutEffect=function canUseDOM(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}()?react.useLayoutEffect:react.useEffect,Portal=_ref=>{let{children,containerRef,type="div",className}=_ref;const isServer="undefined"==typeof window||"undefined"==typeof document,portalNode=(0,react.useMemo)((()=>isServer?null:document.createElement(type)),[isServer,type]);return portalNode&&(portalNode.className=className?`louis-portal ${className}`:"louis-portal"),useIsomorphicLayoutEffect((()=>{if(isServer||!portalNode)return;const host=containerRef?.current||document.body;return host.appendChild(portalNode),()=>{host.contains(portalNode)&&host.removeChild(portalNode)}}),[containerRef,type,isServer]),!isServer&&portalNode?(0,react_dom.createPortal)(children,portalNode):null};Portal.displayName="Portal";try{Portal.displayName="Portal",Portal.__docgenInfo={description:"",displayName:"Portal",props:{children:{defaultValue:null,description:"Renders text content and / or any HTML node.",name:"children",required:!0,type:{name:"ReactNode"}},type:{defaultValue:{value:"div"},description:"The DOM element type to render, default 'div'.",name:"type",required:!1,type:{name:"string"}},containerRef:{defaultValue:null,description:"Container element where the Portal will render. If not set the\nportal will be appended to the body of the component's owner document\n(typically this is the `document.body`).",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Portal/Portal.tsx#Portal"]={docgenInfo:Portal.__docgenInfo,name:"Portal",path:"src/components/Portal/Portal.tsx#Portal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tag/Tag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>Tag});var react=__webpack_require__("./node_modules/react/index.js"),useTheme=__webpack_require__("./node_modules/@lokalise/styled/dist/hooks/useTheme.js");var Tooltip=__webpack_require__("./src/components/Tooltip/Tooltip.tsx"),md5=__webpack_require__("./node_modules/md5/md5.js"),md5_default=__webpack_require__.n(md5);const darkenToMax=(max,colorParts)=>(colorParts=>colorParts.reduce(((a,b)=>a+b),0)/colorParts.length)(colorParts)<=max?colorParts:darkenToMax(max,(colorParts=>colorParts.map((colorPart=>colorPart-10)))(colorParts)),toColorHex=colorPart=>`00${colorPart.toString(16)}`.slice(-2);var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),variants=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/variants.js"),modifier=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/modifier.js"),excludeProps=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/excludeProps.js"),oneLineEllipsis=__webpack_require__("./src/utils/styles/oneLineEllipsis.ts"),theme=__webpack_require__("./src/utils/theme/index.ts");const baseStyle=styled_components_browser_esm.iv`
	${oneLineEllipsis.i};
	box-sizing: border-box;
	${(0,theme.cp)("body.tiny.strong")};
	border-radius: ${(0,theme.S3)("radius.rounded")};
	border-width: 1px;
	border-style: solid;
	border-color: ${props=>props.color};
	max-width: max-content;
	width: min-content;
	line-height: 14px; // This is needed so the text appears centered
	height: 20px;
	padding: 2px ${(0,theme.W0)(2)};

	${(0,variants.o)("variant",{solid:styled_components_browser_esm.iv`
			color: ${(0,theme.S3)("color.text.inverse")};
			background-color: ${props=>props.color};
		`,outlined:styled_components_browser_esm.iv`
			color: ${props=>props.color};
			background-color: transparent;
		`})};

	${(0,variants.o)("size",{default:styled_components_browser_esm.iv`
			line-height: 14px; // This is needed so the text appears centered
			height: 20px;
			padding: 2px ${(0,theme.W0)(2)};
		`,small:styled_components_browser_esm.iv`
			font-size: 10px;
			line-height: 1;
			padding: 1px 5px 2px;
			height: auto;
		`})};

	${(0,modifier.c)("fullWidth",styled_components_browser_esm.iv`
			width: 100%;
			display: inline-block;
		`)}
`,SimpleTag=styled_components_browser_esm.ZP.div.withConfig({shouldForwardProp:(0,excludeProps.L)(["color"])}).withConfig({displayName:"Tag__SimpleTag",componentId:"sc-m1i88s-0"})(["",";"],baseStyle),TagButton=styled_components_browser_esm.ZP.button.withConfig({shouldForwardProp:(0,excludeProps.L)(["color"])}).withConfig({displayName:"Tag__TagButton",componentId:"sc-m1i88s-1"})(["",";cursor:pointer;&:hover{filter:brightness(1.1);}"],baseStyle);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tag=_ref=>{let{children,variant="solid",color,size="default",fullWidth=!1,onClick,className}=_ref;const text=react.Children.toArray(children).join(""),mode=(0,useTheme.F)().mode,resolvedColor=(0,react.useMemo)((()=>color??function(value){const brightnessBounds=(darkMode=arguments.length>1&&void 0!==arguments[1]&&arguments[1],darkMode?{max:255,min:150}:{max:190,min:50}),hash=md5_default()(value),colorParts=Array.from({length:3}).map(((_,i)=>hash.slice(3*i,3*i+3))).map((hexString=>parseInt(hexString,16))).map((hexVal=>Math.max(brightnessBounds.min,Math.round(hexVal/4095*255))));var darkMode;return`#${darkenToMax(brightnessBounds.max,colorParts).map(toColorHex).join("")}`}(text,"dark"===mode)),[color,text,mode]),[tagEl,setTagEl]=(0,react.useState)(null),isTooltipShown=!!tagEl&&tagEl.scrollWidth>tagEl.clientWidth;return(0,jsx_runtime.jsx)(Tooltip.u,{tooltip:children,show:isTooltipShown,children:onClick?(0,jsx_runtime.jsx)(TagButton,{type:"button",color:resolvedColor,variant,size,fullWidth,onClick,ref:setTagEl,className,children}):(0,jsx_runtime.jsx)(SimpleTag,{color:resolvedColor,variant,size,fullWidth,ref:setTagEl,className,children})})};Tag.displayName="Tag";try{Tag.displayName="Tag",Tag.__docgenInfo={description:"",displayName:"Tag",props:{children:{defaultValue:null,description:"Renders text inside the Tag. Only string and array of strings are allowed because content like `<Tag>{`one`}{`two`}</Tag>` is passed\nas an array of strings `['one', 'two']`. It is still valid case which is concatenated within the component.",name:"children",required:!0,type:{name:"string | string[]"}},variant:{defaultValue:{value:"solid"},description:"Enables the outline style for the tag.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"outlined"'}]}},color:{defaultValue:null,description:"Tag color can be set to any color. In case color is not provided color will be generated based on the passed text.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"default"},description:"Sets tag size.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'}]}},onClick:{defaultValue:null,description:"Function that is executed when clicking on a Tag. Providing this will imply that tag should be a button.",name:"onClick",required:!1,type:{name:"(() => void)"}},fullWidth:{defaultValue:{value:"false"},description:"Makes Tag span 100% of the container width.",name:"fullWidth",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tag/Tag.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"src/components/Tag/Tag.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tooltip/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>Tooltip});var react=__webpack_require__("./node_modules/react/index.js"),Popover=__webpack_require__("./src/components/Popover/Popover.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),theme=__webpack_require__("./src/utils/theme/index.ts"),styles=__webpack_require__("./src/components/Popover/styles.ts");const Content=(0,styled_components_browser_esm.ZP)(styles.V).withConfig({displayName:"Tooltip__Content",componentId:"sc-t4f104-0"})(["font:",";",";background-color:",";color:",";border-radius:",";padding:3px 8px 4px;border-color:",";z-index:",";"],(0,theme.S3)("font.family.graphik"),(0,theme.cp)("body.caption.default"),(0,theme.S3)("color.background.surface.inverse"),(0,theme.S3)("color.text.inverse"),(0,theme.S3)("radius.m"),(0,theme.S3)("color.background.surface.inverse"),(0,theme.S3)("zIndex.tooltip")),Arrow=(0,styled_components_browser_esm.ZP)(styles.E).withConfig({displayName:"Tooltip__Arrow",componentId:"sc-t4f104-1"})(["&:before{background-color:",";border-color:",";}"],(0,theme.S3)("color.background.surface.inverse"),(0,theme.S3)("color.background.surface.inverse"));var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tooltip=(0,react.forwardRef)(((_ref,ref)=>{let{children,show=!0,tooltip,delay=!0,placement="top",...rest}=_ref;return(0,jsx_runtime.jsx)(Popover.J,{ref,...rest,open:!!show&&void 0,content:tooltip,delay,placement,components:{Content,Arrow},triggerEvent:"hover",role:"tooltip",withArrow:!0,children})}));Tooltip.displayName="Tooltip";try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{children:{defaultValue:null,description:"Renders text content or any HTML node to attach the popover to.",name:"children",required:!0,type:{name:"Children | ((visible: boolean) => Children)"}},style:{defaultValue:null,description:"Sets the style for the content.",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"Sets the CSS class attribute.",name:"className",required:!1,type:{name:"string"}},placement:{defaultValue:{value:"top"},description:"Determines where the popover should appear relative to the child element.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'}]}},delay:{defaultValue:{value:"true"},description:"Set delayed appearance of the popover when `triggerEvent` is 'hover'.\nSet to `true` will use default value of 250 milliseconds.\nSet to a custom number will make it delays with that amount in milliseconds.",name:"delay",required:!1,type:{name:"number | boolean"}},inPortal:{defaultValue:null,description:"Toggles rendering in a portal container to prevent other elements from clipping or hiding the popover.",name:"inPortal",required:!1,type:{name:"boolean"}},positioning:{defaultValue:null,description:"Sets the positioning of the popover.",name:"positioning",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"absolute"'}]}},show:{defaultValue:{value:"true"},description:"Whether to show the tooltip at all",name:"show",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Content of the tooltip",name:"tooltip",required:!1,type:{name:"ReactNode | ((setVisible: (opened: boolean) => void) => ReactNode)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/Tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/function/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>isFunction,v:()=>callAllHandlers});const isFunction=input=>"function"==typeof input,callAllHandlers=function(){for(var _len=arguments.length,fns=new Array(_len),_key=0;_key<_len;_key++)fns[_key]=arguments[_key];return function func(event){fns.some((fn=>(fn?.(event),event?.defaultPrevented)))}}},"./src/utils/hooks/useMergeRefs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>useMergeRefs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_function__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/function/index.ts");function useMergeRefs(){for(var _len=arguments.length,refs=new Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node=>{refs.forEach((ref=>{!function assignRef(ref,value){if(null!=ref)if((0,_function__WEBPACK_IMPORTED_MODULE_1__.m)(ref))ref(value);else try{ref.current=value}catch(error){throw new Error(`Cannot assign value "${JSON.stringify(value)}" to ref "${ref.toString()}"`)}}(ref,node)}))}),refs)}},"./src/utils/styles/oneLineEllipsis.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>oneLineEllipsis});const oneLineEllipsis=(0,__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").iv)(["white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"])},"./node_modules/charenc/charenc.js":module=>{var charenc={utf8:{stringToBytes:function(str){return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)))},bytesToString:function(bytes){return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)))}},bin:{stringToBytes:function(str){for(var bytes=[],i=0;i<str.length;i++)bytes.push(255&str.charCodeAt(i));return bytes},bytesToString:function(bytes){for(var str=[],i=0;i<bytes.length;i++)str.push(String.fromCharCode(bytes[i]));return str.join("")}}};module.exports=charenc},"./node_modules/crypt/crypt.js":module=>{var base64map,crypt;base64map="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",crypt={rotl:function(n,b){return n<<b|n>>>32-b},rotr:function(n,b){return n<<32-b|n>>>b},endian:function(n){if(n.constructor==Number)return 16711935&crypt.rotl(n,8)|4278255360&crypt.rotl(n,24);for(var i=0;i<n.length;i++)n[i]=crypt.endian(n[i]);return n},randomBytes:function(n){for(var bytes=[];n>0;n--)bytes.push(Math.floor(256*Math.random()));return bytes},bytesToWords:function(bytes){for(var words=[],i=0,b=0;i<bytes.length;i++,b+=8)words[b>>>5]|=bytes[i]<<24-b%32;return words},wordsToBytes:function(words){for(var bytes=[],b=0;b<32*words.length;b+=8)bytes.push(words[b>>>5]>>>24-b%32&255);return bytes},bytesToHex:function(bytes){for(var hex=[],i=0;i<bytes.length;i++)hex.push((bytes[i]>>>4).toString(16)),hex.push((15&bytes[i]).toString(16));return hex.join("")},hexToBytes:function(hex){for(var bytes=[],c=0;c<hex.length;c+=2)bytes.push(parseInt(hex.substr(c,2),16));return bytes},bytesToBase64:function(bytes){for(var base64=[],i=0;i<bytes.length;i+=3)for(var triplet=bytes[i]<<16|bytes[i+1]<<8|bytes[i+2],j=0;j<4;j++)8*i+6*j<=8*bytes.length?base64.push(base64map.charAt(triplet>>>6*(3-j)&63)):base64.push("=");return base64.join("")},base64ToBytes:function(base64){base64=base64.replace(/[^A-Z0-9+\/]/gi,"");for(var bytes=[],i=0,imod4=0;i<base64.length;imod4=++i%4)0!=imod4&&bytes.push((base64map.indexOf(base64.charAt(i-1))&Math.pow(2,-2*imod4+8)-1)<<2*imod4|base64map.indexOf(base64.charAt(i))>>>6-2*imod4);return bytes}},module.exports=crypt},"./node_modules/is-buffer/index.js":module=>{function isBuffer(obj){return!!obj.constructor&&"function"==typeof obj.constructor.isBuffer&&obj.constructor.isBuffer(obj)}module.exports=function(obj){return null!=obj&&(isBuffer(obj)||function isSlowBuffer(obj){return"function"==typeof obj.readFloatLE&&"function"==typeof obj.slice&&isBuffer(obj.slice(0,0))}(obj)||!!obj._isBuffer)}},"./node_modules/md5/md5.js":(module,__unused_webpack_exports,__webpack_require__)=>{var crypt,utf8,isBuffer,bin,md5;crypt=__webpack_require__("./node_modules/crypt/crypt.js"),utf8=__webpack_require__("./node_modules/charenc/charenc.js").utf8,isBuffer=__webpack_require__("./node_modules/is-buffer/index.js"),bin=__webpack_require__("./node_modules/charenc/charenc.js").bin,(md5=function(message,options){message.constructor==String?message=options&&"binary"===options.encoding?bin.stringToBytes(message):utf8.stringToBytes(message):isBuffer(message)?message=Array.prototype.slice.call(message,0):Array.isArray(message)||message.constructor===Uint8Array||(message=message.toString());for(var m=crypt.bytesToWords(message),l=8*message.length,a=1732584193,b=-271733879,c=-1732584194,d=271733878,i=0;i<m.length;i++)m[i]=16711935&(m[i]<<8|m[i]>>>24)|4278255360&(m[i]<<24|m[i]>>>8);m[l>>>5]|=128<<l%32,m[14+(l+64>>>9<<4)]=l;var FF=md5._ff,GG=md5._gg,HH=md5._hh,II=md5._ii;for(i=0;i<m.length;i+=16){var aa=a,bb=b,cc=c,dd=d;a=FF(a,b,c,d,m[i+0],7,-680876936),d=FF(d,a,b,c,m[i+1],12,-389564586),c=FF(c,d,a,b,m[i+2],17,606105819),b=FF(b,c,d,a,m[i+3],22,-1044525330),a=FF(a,b,c,d,m[i+4],7,-176418897),d=FF(d,a,b,c,m[i+5],12,1200080426),c=FF(c,d,a,b,m[i+6],17,-1473231341),b=FF(b,c,d,a,m[i+7],22,-45705983),a=FF(a,b,c,d,m[i+8],7,1770035416),d=FF(d,a,b,c,m[i+9],12,-1958414417),c=FF(c,d,a,b,m[i+10],17,-42063),b=FF(b,c,d,a,m[i+11],22,-1990404162),a=FF(a,b,c,d,m[i+12],7,1804603682),d=FF(d,a,b,c,m[i+13],12,-40341101),c=FF(c,d,a,b,m[i+14],17,-1502002290),a=GG(a,b=FF(b,c,d,a,m[i+15],22,1236535329),c,d,m[i+1],5,-165796510),d=GG(d,a,b,c,m[i+6],9,-1069501632),c=GG(c,d,a,b,m[i+11],14,643717713),b=GG(b,c,d,a,m[i+0],20,-373897302),a=GG(a,b,c,d,m[i+5],5,-701558691),d=GG(d,a,b,c,m[i+10],9,38016083),c=GG(c,d,a,b,m[i+15],14,-660478335),b=GG(b,c,d,a,m[i+4],20,-405537848),a=GG(a,b,c,d,m[i+9],5,568446438),d=GG(d,a,b,c,m[i+14],9,-1019803690),c=GG(c,d,a,b,m[i+3],14,-187363961),b=GG(b,c,d,a,m[i+8],20,1163531501),a=GG(a,b,c,d,m[i+13],5,-1444681467),d=GG(d,a,b,c,m[i+2],9,-51403784),c=GG(c,d,a,b,m[i+7],14,1735328473),a=HH(a,b=GG(b,c,d,a,m[i+12],20,-1926607734),c,d,m[i+5],4,-378558),d=HH(d,a,b,c,m[i+8],11,-2022574463),c=HH(c,d,a,b,m[i+11],16,1839030562),b=HH(b,c,d,a,m[i+14],23,-35309556),a=HH(a,b,c,d,m[i+1],4,-1530992060),d=HH(d,a,b,c,m[i+4],11,1272893353),c=HH(c,d,a,b,m[i+7],16,-155497632),b=HH(b,c,d,a,m[i+10],23,-1094730640),a=HH(a,b,c,d,m[i+13],4,681279174),d=HH(d,a,b,c,m[i+0],11,-358537222),c=HH(c,d,a,b,m[i+3],16,-722521979),b=HH(b,c,d,a,m[i+6],23,76029189),a=HH(a,b,c,d,m[i+9],4,-640364487),d=HH(d,a,b,c,m[i+12],11,-421815835),c=HH(c,d,a,b,m[i+15],16,530742520),a=II(a,b=HH(b,c,d,a,m[i+2],23,-995338651),c,d,m[i+0],6,-198630844),d=II(d,a,b,c,m[i+7],10,1126891415),c=II(c,d,a,b,m[i+14],15,-1416354905),b=II(b,c,d,a,m[i+5],21,-57434055),a=II(a,b,c,d,m[i+12],6,1700485571),d=II(d,a,b,c,m[i+3],10,-1894986606),c=II(c,d,a,b,m[i+10],15,-1051523),b=II(b,c,d,a,m[i+1],21,-2054922799),a=II(a,b,c,d,m[i+8],6,1873313359),d=II(d,a,b,c,m[i+15],10,-30611744),c=II(c,d,a,b,m[i+6],15,-1560198380),b=II(b,c,d,a,m[i+13],21,1309151649),a=II(a,b,c,d,m[i+4],6,-145523070),d=II(d,a,b,c,m[i+11],10,-1120210379),c=II(c,d,a,b,m[i+2],15,718787259),b=II(b,c,d,a,m[i+9],21,-343485551),a=a+aa>>>0,b=b+bb>>>0,c=c+cc>>>0,d=d+dd>>>0}return crypt.endian([a,b,c,d])})._ff=function(a,b,c,d,x,s,t){var n=a+(b&c|~b&d)+(x>>>0)+t;return(n<<s|n>>>32-s)+b},md5._gg=function(a,b,c,d,x,s,t){var n=a+(b&d|c&~d)+(x>>>0)+t;return(n<<s|n>>>32-s)+b},md5._hh=function(a,b,c,d,x,s,t){var n=a+(b^c^d)+(x>>>0)+t;return(n<<s|n>>>32-s)+b},md5._ii=function(a,b,c,d,x,s,t){var n=a+(c^(b|~d))+(x>>>0)+t;return(n<<s|n>>>32-s)+b},md5._blocksize=16,md5._digestsize=16,module.exports=function(message,options){if(null==message)throw new Error("Illegal argument "+message);var digestbytes=crypt.wordsToBytes(md5(message,options));return options&&options.asBytes?digestbytes:options&&options.asString?bin.bytesToString(digestbytes):crypt.bytesToHex(digestbytes)}}}]);
//# sourceMappingURL=7432.10794f00.iframe.bundle.js.map