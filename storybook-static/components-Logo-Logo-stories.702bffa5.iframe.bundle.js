"use strict";(self.webpackChunkglplus_dsl_desktop=self.webpackChunkglplus_dsl_desktop||[]).push([[587],{"./src/components/Logo/Logo.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Full:()=>Full,Partial:()=>Partial,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Logo_stories});var dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),esm_i18next=__webpack_require__("./node_modules/i18next/dist/esm/i18next.js"),esm=__webpack_require__("./node_modules/i18next-http-backend/esm/index.js"),i18nextBrowserLanguageDetector=__webpack_require__("./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js"),initReactI18next=__webpack_require__("./node_modules/react-i18next/dist/es/initReactI18next.js");esm_i18next.Ay.use(initReactI18next.r).use(esm.A).use(i18nextBrowserLanguageDetector.A).init({debug:!0,fallbackLng:"en-US",defaultNS:"translation",backend:{loadPath:"locales/{{lng}}/translation.json"}});var es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),Box=__webpack_require__("./node_modules/@mui/system/esm/Box/Box.js");const glp_logo_full_primary_namespaceObject=__webpack_require__.p+"static/media/glp_logo_full_primary.eeec6569.png",glp_logo_full_white_namespaceObject=__webpack_require__.p+"static/media/glp_logo_full_white.86320bfc.png",glp_logo_full_black_namespaceObject=__webpack_require__.p+"static/media/glp_logo_full_black.d6fe9735.png",glp_logo_full_mixed_namespaceObject=__webpack_require__.p+"static/media/glp_logo_full_mixed.fcc7ce43.png",glp_logo_partial_primary_namespaceObject=__webpack_require__.p+"static/media/glp_logo_partial_primary.04b66f12.png",glp_logo_partial_white_namespaceObject=__webpack_require__.p+"static/media/glp_logo_partial_white.d2caaec4.png",glp_logo_partial_black_namespaceObject=__webpack_require__.p+"static/media/glp_logo_partial_black.a55f274f.png";const Logo=({color="primary",onClick,size="desktop",style="full"})=>{const{t}=(0,es.Bd)(),altText=t("component.logo.altText.default");let imgWidth,selectedImage;if("partial"===style)switch(color){case"black":selectedImage=glp_logo_partial_black_namespaceObject;break;case"primary":default:selectedImage=glp_logo_partial_primary_namespaceObject;break;case"white":selectedImage=glp_logo_partial_white_namespaceObject}else switch(color){case"black":selectedImage=glp_logo_full_black_namespaceObject;break;case"mixed":selectedImage=glp_logo_full_mixed_namespaceObject;break;case"primary":default:selectedImage=glp_logo_full_primary_namespaceObject;break;case"white":selectedImage=glp_logo_full_white_namespaceObject}switch(size){case"desktop":case"tablet":default:imgWidth="full"===style?"300px":"65px";break;case"mobile":imgWidth="full"===style?"250px":"65px"}return react.createElement(Box.A,{onClick:()=>onClick},react.createElement("img",{src:selectedImage,alt:altText,style:{width:imgWidth}}))},Logo_Logo=Logo;try{Logo.displayName="Logo",Logo.__docgenInfo={description:"",displayName:"Logo",props:{color:{defaultValue:{value:"EColorOptions.primary"},description:"",name:"color",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"}},size:{defaultValue:{value:"ESizeOptions.desktop"},description:"",name:"size",required:!1,type:{name:"string"}},style:{defaultValue:{value:"EStyleOptions.full"},description:"",name:"style",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Logo/Logo.tsx#Logo"]={docgenInfo:Logo.__docgenInfo,name:"Logo",path:"src/components/Logo/Logo.tsx#Logo"})}catch(__react_docgen_typescript_loader_error){}const Logo_stories={title:"UI Components/Logo",component:Logo_Logo,parameters:{layout:"left"},tags:["autodocs"],args:{onClick:(0,dist.fn)()}},Full={args:{color:"primary",size:"desktop",style:"full"}},Partial={args:{color:"primary",size:"desktop",style:"partial"}},__namedExportsOrder=["Full","Partial"];Full.parameters={...Full.parameters,docs:{...Full.parameters?.docs,source:{originalSource:"{\n  args: {\n    color: 'primary',\n    size: 'desktop',\n    style: 'full'\n  }\n}",...Full.parameters?.docs?.source}}},Partial.parameters={...Partial.parameters,docs:{...Partial.parameters?.docs,source:{originalSource:"{\n  args: {\n    color: 'primary',\n    size: 'desktop',\n    style: 'partial'\n  }\n}",...Partial.parameters?.docs?.source}}}}}]);