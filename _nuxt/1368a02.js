(window.webpackJsonp=window.webpackJsonp||[]).push([[4,8],{284:function(e,t,o){var content=o(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(80).default)("7f8c491d",content,!0,{sourceMap:!1})},286:function(e,t,o){"use strict";o.r(t);o(62);var n={props:{toast:{type:Object,require:!0}},data:function(){return{visibility:!1}},methods:{handleShow:function(e){var t=this;this.visibility=e,setTimeout((function(){t.visibility=!1}),2e3)}}},r=(o(289),o(46)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.visibility?o("div",{staticClass:"toast-msg animate__animated animate__fadeInDown",class:e.toast.color},[o("span",{staticClass:"msg"},[e._v("\n          "+e._s(e.toast.message)+"\n      ")])]):e._e()}),[],!1,null,"d9e38a86",null);t.default=component.exports},289:function(e,t,o){"use strict";o(284)},290:function(e,t,o){var n=o(79)((function(i){return i[1]}));n.push([e.i,".animate__animated.animate__fadeInDown[data-v-d9e38a86]{--animate-duration:.35s}.toast-msg[data-v-d9e38a86]{position:fixed;width:85%;top:7%;left:7%;display:flex;justify-content:space-between;align-items:center;font-size:1rem;font-weight:700;color:#fff;border-radius:5px;z-index:1}.error[data-v-d9e38a86]{background-color:tomato}.success[data-v-d9e38a86]{background-color:#acd22d}.msg[data-v-d9e38a86]{padding:1rem}@media only screen and (min-width:768px){.toast-msg[data-v-d9e38a86]{width:70%;left:15%}}",""]),n.locals={},e.exports=n},291:function(e,t,o){var content=o(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(80).default)("722d92bc",content,!0,{sourceMap:!1})},299:function(e,t,o){"use strict";o(291)},300:function(e,t,o){var n=o(79)((function(i){return i[1]}));n.push([e.i,".form{width:100%}.form-input{width:100%;padding:1rem;margin:.5rem 0;border-radius:5px;border:1px solid #ccc}.form-input:focus{border-color:#acd22d!important;box-shadow:0 0 0 0;outline:0}.btn-send{color:#fff;background:#acd22d;padding:15px 40px;border-radius:5px;font-weight:700;letter-spacing:.5px;width:45%;margin:1rem auto;cursor:pointer}.btn-send:hover{background:#a0c32b}",""]),n.locals={},e.exports=n},311:function(e,t,o){"use strict";o.r(t);o(28),o(314);var n=o(318),r={name:"ContactForm",components:{ToastMessage:o(286).default},data:function(){return{lblButton:"Enviar",compania:"",nome:"",fone:"",email:"",mensagem:"Tenho interesse na ferramenta",toast:{color:"",message:""}}},computed:{phoneMask:function(){return this.fone.length>14?"(##) #####-####":"(##) ####-####"}},methods:{sendEmail:function(){this.lblButton="Enviando...";var e=this;if(!(this.compania&&this.nome&&this.fone&&this.email))return this.handleToast("error","Preencha todos os campos"),this.lblButton="Enviar";if(!/\S+@\S+\.\S+/.test(this.email))return this.handleToast("error","Informe um e-mail válido"),this.lblButton="Enviar";var t={company:this.compania,name:this.nome,phone:this.fone,email:this.email,message:this.mensagem};n.a.send("service_9w5b4kc","template_5j36sky",t,"LKQCjhbd_pc3fpCO8").then((function(t){e.lblButton="Enviar",e.handleToast("success","E-mail enviado com sucesso!"),e.clearFields(),console.log(t.text,"E-mail enviado com sucesso!",t.status)})).catch((function(t){e.lblButton="Enviar",e.handleToast("danger",t),console.log("Erro ao enviar e-mail",t)}))},handleToast:function(e,t){var o=this;this.toast.color=e,this.toast.message=t,this.$nextTick((function(){o.$refs.toast.handleShow(!0)}))},clearFields:function(){this.compania="",this.nome="",this.fone="",this.email=""}}},l=(o(299),o(46)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("form",{staticClass:"form flex flex-col justify-center items-center"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.compania,expression:"compania"}],staticClass:"form-input",attrs:{type:"text",name:"compania",placeholder:"Nome da Empresa"},domProps:{value:e.compania},on:{input:function(t){t.target.composing||(e.compania=t.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.nome,expression:"nome"}],staticClass:"form-input",attrs:{type:"text",name:"nome",placeholder:"Nome do Contato"},domProps:{value:e.nome},on:{input:function(t){t.target.composing||(e.nome=t.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.fone,expression:"fone"},{name:"mask",rawName:"v-mask",value:e.phoneMask,expression:"phoneMask"}],staticClass:"form-input",attrs:{type:"tel",name:"fone",placeholder:"Telefone"},domProps:{value:e.fone},on:{input:function(t){t.target.composing||(e.fone=t.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-input",attrs:{type:"email",name:"email",placeholder:"Seu melhor e-mail"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),o("input",{staticClass:"btn-send",attrs:{type:"button",value:e.lblButton},on:{click:e.sendEmail}})]),e._v(" "),o("ToastMessage",{ref:"toast",attrs:{toast:e.toast}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ToastMessage:o(286).default})}}]);