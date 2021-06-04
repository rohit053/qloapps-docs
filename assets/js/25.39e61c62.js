(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{396:function(t,s,n){"use strict";n.r(s);var e=n(19),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"send-emails-in-qloapps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#send-emails-in-qloapps"}},[t._v("#")]),t._v(" Send Emails in QloApps")]),t._v(" "),n("p",[t._v("For the mail related functionalities QloApps uses "),n("strong",[t._v("The Mail core class extends ObjectModel")])]),t._v(" "),n("p",[t._v("For sending mails in QloApps use the "),n("strong",[t._v("Mail::send()")]),t._v(" method")]),t._v(" "),n("p",[t._v("Let's understand it with an exmaple below.\nIn the below example we are sending a mail from controller "),n("strong",[t._v("modcontroller")]),t._v(" from a module "),n("strong",[t._v("mymodule")])]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" mymoduleModcontrollerModuleFrontController "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModuleFrontController")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("initContent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword static-context"}},[t._v("parent")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("initContent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Mail")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword type-casting"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Configuration")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'PS_LANG_DEFAULT'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Which language template to be sent")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'email_template_name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// email template file to be use")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("' email_subject'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// email subject")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'{name}'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'John Doe'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'{message}'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'This is a test email'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// in this array send data to the email template")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'email@receiver.com'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// // email address of receiver")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'receiver_name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//receiver name")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'email@sender.com'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// email address of sender")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'sender_name'")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// name of the sender")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("In QloApps, Emails configuration is used to decide if use "),n("strong",[t._v("SMTP connection or php mail function")]),t._v(" from "),n("strong",[t._v("Advance Parameters -> E-mail")])]),t._v(" "),n("h3",{attrs:{id:"custom-mail-template"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#custom-mail-template"}},[t._v("#")]),t._v(" Custom mail template")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("You can specify an email template path of your module in the "),n("strong",[t._v("$template_path")]),t._v(" parameter.")])]),t._v(" "),n("li",[n("p",[t._v("In Module folder you have to create the subfolder "),n("strong",[t._v("mails")]),t._v(" and under "),n("strong",[t._v("mails/")]),t._v(" a sub folder with languages.\ni.e. "),n("strong",[t._v("\\modules\\module_name\\mails\\fr")]),t._v(" for french.")])]),t._v(" "),n("li",[n("p",[t._v("In the created language folder(fr), create two files: first with extension .html and second with extension .txt")])]),t._v(" "),n("li",[n("p",[t._v("In second parameter, we send the name of the template.\nTwo files in mails subfolders(languages folders) will be created in the module")]),t._v(" "),n("ol",[n("li",[n("strong",[t._v("modules\\my_module_name\\mails\\en\\email_template_name.html")])]),t._v(" "),n("li",[n("strong",[t._v("modules\\my_module_name\\mails\\en\\email_template_name.txt")]),t._v(" "),n("strong",[t._v("email_template_name")]),t._v(" is template's name in the following example.")])])])]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" mymoduleModcontrollerModuleFrontController "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModuleFrontController")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("initContent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword static-context"}},[t._v("parent")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("initContent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Mail")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword type-casting"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Configuration")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'PS_LANG_DEFAULT'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Which language template to be sent")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'email_template_name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// email template file to be use")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("' email_subject'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// email subject")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'{name}'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'John Doe'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'{message}'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'This is a test email'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// in this array send data to the email template")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'email@receiver.com'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// // email address of receiver")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'receiver_name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//receiver name")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'email@sender.com'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// email address of sender")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'sender_name'")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// name of the sender")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//file attachment")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SMTP mode")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("_PS_MODULE_DIR_")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'my_module_name/mails'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//path of the custom template")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("After installation of the module, the email template files of the modules are also placed under the folder of the active theme:\n"),n("strong",[t._v("...\\themes\\hotel-reservation-theme\\modules\\my_module_name\\mails\\en\\ ...")])])])}),[],!1,null,null,null);s.default=a.exports}}]);