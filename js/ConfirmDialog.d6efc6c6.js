(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ConfirmDialog"],{9135:function(n,i,t){"use strict";t.r(i);var e=function(){var n=this,i=n.$createElement,t=n._self._c||i;return t("MdDialogConfirm",{attrs:{"md-active":n.isActive,"md-title":n.config.title||"Agree/Disagree?","md-content":n.config.content,"md-confirm-text":n.config.confirm||"Agree","md-cancel-text":n.config.cancle||"Disagree"},on:{"update:mdActive":function(i){n.isActive=i},"md-cancel":n.onCancel,"md-confirm":n.onConfirm}})},o=[],c={name:"DialogConfirm",props:{config:{type:Object,required:!0}},data:function(){return{isActive:!1}},watch:{"config.active":function(n){this.isActive=n}},methods:{onConfirm:function(){this.$emit("confirm"),this.config.onConfirm&&this.config.onConfirm()},onCancel:function(){this.$emit("cancle"),this.config.onCancle&&this.config.onCancle()}}},f=c,r=t("2877"),a=Object(r["a"])(f,e,o,!1,null,null,null);a.options.__file="confirm.vue";i["default"]=a.exports}}]);
//# sourceMappingURL=ConfirmDialog.d6efc6c6.js.map