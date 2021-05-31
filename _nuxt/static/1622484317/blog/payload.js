__NUXT_JSONP__("/blog", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M){return {data:[{posts:[{slug:"fixing-manjaro-dual-boot-issue",title:"Fixing Manjaro Dual Boot issue with Windows 10 not being detected by Grub",date:"Thu Mar 11 2021 22:10:10 GMT-0500 (Eastern Standard Time)",toc:[{id:E,depth:r,text:F}],body:{type:s,children:[{type:b,tag:t,props:{id:E},children:[{type:b,tag:f,props:{href:"#fixing-manjaros-grub-configuration-to-allow-os-prober-to-find-windows-10",ariaHidden:u,tabIndex:v},children:[{type:b,tag:w,props:{className:[x,y]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I run a dual boot setup on one of my main work machines, with Manjaro Linux sharing a home with a Windows 10 installation. Manjaro has been pretty good at insulating me from a lot of the day-to-day maintenance issues that I have unfortunately come to expect with most Linux distros, but it is certainly not without issues and quirks."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Last week I updated grub through pacman and discovered that the next time I rebooted, my Windows 10 installation had vanished from the Grub bootloader."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I ran "},{type:b,tag:e,props:{},children:[{type:a,value:G}]},{type:a,value:" expecting it to fix the issue but found it did not."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I did notice this line in the output which clued me in to the issue:"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:H},{type:b,tag:p,props:{},children:[{type:a,value:"Warning: os-prober will not be executed to detect other bootable partitions."}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:"Systems on them will not be added to the GRUB boot configuration."}]},{type:a,value:"\nCheck GRUB_DISABLE_OS_PROBER documentation entry.\nAdding boot menu entry for UEFI Firmware Settings ...\nFound memtest86+ image: \u002Fboot\u002Fmemtest86+\u002Fmemtest.bin\ndone\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The important bit is the warning, which indicates that for some reason os-prober was not run."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Luckily, I was able to find the fix on "},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.reddit.com\u002Fr\u002Flinux4noobs\u002Fcomments\u002Fm2xmn9\u002Fmanjarowindows_dual_boot_grub_not_recognizing_the\u002F",rel:[l,m,n],target:o},children:[{type:a,value:"this reddit post"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You simply have to edit "},{type:b,tag:e,props:{},children:[{type:a,value:"\u002Fetc\u002Fdefault\u002Fgrub"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"and add the line:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"GRUB_DISABLE_OS_PROBER=\"false\""}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I also mounted my Windows partition for good measure, since some comments on Stack Overflow seemed to imply that this is necessary in order for "},{type:b,tag:e,props:{},children:[{type:a,value:"os-prober"}]},{type:a,value:" to find other installations."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"After that, I ran "},{type:b,tag:e,props:{},children:[{type:a,value:G}]},{type:a,value:" and found that the issue was fixed!"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:H},{type:b,tag:p,props:{},children:[{type:a,value:"Warning: os-prober was executed to detect other bootable partitions."}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:"It's output will be used to detect bootable binaries on them and create new boot entries."}]},{type:a,value:"\nFound Windows Boot Manager on \u002Fdev\u002Fsdb2@\u002FEFI\u002FMicrosoft\u002FBoot\u002Fbootmgfw.efi\nAdding boot menu entry for UEFI Firmware Settings ...\nFound memtest86+ image: \u002Fboot\u002Fmemtest86+\u002Fmemtest.bin\ndone\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Hope this helps someone!"}]}]},dir:z,path:"\u002Fblog\u002Ffixing-manjaro-dual-boot-issue",extension:A,createdAt:I,updatedAt:I},{slug:"downgrading-from-php8-to-php7",title:B,date:"Mon Feb 22 2021 17:37:10 GMT-0500 (Eastern Standard Time)",toc:[{id:J,depth:r,text:B}],body:{type:s,children:[{type:b,tag:t,props:{id:J},children:[{type:b,tag:f,props:{href:"#downgrading-from-php-8-to-php-7-in-arch-linux---fixing-composer",ariaHidden:u,tabIndex:v},children:[{type:b,tag:w,props:{className:[x,y]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Recently, "},{type:b,tag:f,props:{href:"https:\u002F\u002Farchlinux.org\u002Fnews\u002Fphp-80-and-php-7-legacy-packages-are-available\u002F",rel:[l,m,n],target:o},children:[{type:a,value:"Arch Linux added PHP 8.0"}]},{type:a,value:" as the default version when installing the "},{type:b,tag:e,props:{},children:[{type:a,value:"php"}]},{type:a,value:" package from the Arch repos. Unfortunately this presents an issue for users working on projects that still rely on PHP 7 support."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I was able to fix this issue with the following commands:"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:g,props:{className:[j,k]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"pacman -Syyu\n\npacman -S php7 php7-apache\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"After this, I needed to edit my "},{type:b,tag:e,props:{},children:[{type:a,value:"\u002Fetc\u002Fhttpd\u002Fconf\u002Fhttpd.conf"}]},{type:a,value:" file and add the following lines:"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:g,props:{className:[j,k]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"LoadModule php7_module modules\u002Flibphp7.so\nAddHandler php7-script php\nInclude conf\u002Fextra\u002Fphp7_module.conf\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"And also, comment out "},{type:b,tag:e,props:{},children:[{type:a,value:"mpm_event_module"}]},{type:a,value:" and uncomment "},{type:b,tag:e,props:{},children:[{type:a,value:"mpm_prefork_module"}]},{type:a,value:" like so:"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:g,props:{className:[j,k]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"#LoadModule mpm_event_module modules\u002Fmod_mpm_event.so\nLoadModule mpm_prefork_module modules\u002Fmod_mpm_prefork.so\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This will get you a working php7 installation in Apache, but there's still an issue. When you try to install Composer, you'll find it is running on php8, causing issues if your projects have dependencies that rely on PHP 7."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To fix this, I removed all traces of php8 and then installed "},{type:b,tag:f,props:{href:"https:\u002F\u002Faur.archlinux.org\u002Fpackages\u002Fphp7-symlinks",rel:[l,m,n],target:o},children:[{type:a,value:"this package"}]},{type:a,value:" which fixed the issue."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Hope this helps if someone else is having the same problems I was."}]}]},dir:z,path:"\u002Fblog\u002Fdowngrading-from-php8-to-php7",extension:A,createdAt:K,updatedAt:K},{slug:"sublime-text-eslint-vue-on-save",title:C,date:"Mon May 31 2021 13:55:00 GMT-0500 (Eastern Standard Time)",toc:[{id:L,depth:r,text:C}],body:{type:s,children:[{type:b,tag:t,props:{id:L},children:[{type:b,tag:f,props:{href:"#sublime-text---eslint-on-save-for-vuejs-files",ariaHidden:u,tabIndex:v},children:[{type:b,tag:w,props:{className:[x,y]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"** From "},{type:b,tag:f,props:{href:"https:\u002F\u002Fmedium.com\u002F@netczuk\u002Feven-faster-code-formatting-using-eslint-22b80d061461",rel:[l,m,n],target:o},children:[{type:a,value:"this helpful Medium article"}]},{type:a,value:" **"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I've been working with Vue.js and I've found it to be an absolute delight to quickly develop functional, modern web applications. One of the nice things about working in a Javascript environment is the great support for linting through the EsLint package. This lets me spend less time formatting my code and more time actually coding."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I played with a few different methods for running ESLint on save, some more complex than others. Eventually I settled on this method:"}]},{type:a,value:c},{type:b,tag:D,props:{},children:[{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:M},{type:b,tag:f,props:{href:"https:\u002F\u002Fpackagecontrol.io\u002Finstallation",rel:[l,m,n],target:o},children:[{type:a,value:"Package Manager"}]},{type:a,value:" if you haven't already installed it into Sublime Text."}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:M},{type:b,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002FTheSavior\u002FESLint-Formatter",rel:[l,m,n],target:o},children:[{type:a,value:"ESLint-Formatter"}]},{type:a,value:" through package control"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:g,props:{className:[j,k]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"ctrl + shift + P\nPackage Control - Install Package\nESLint-Formatter\n"}]}]}]},{type:a,value:c},{type:b,tag:D,props:{start:3},children:[{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:"Open the config file for ESLint-Formatter."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:g,props:{className:[j,k]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"Preferences \u003E Package Settings \u003E ESLint-Formatter \u003E Settings\n\n"}]}]}]},{type:a,value:c},{type:b,tag:D,props:{start:4},children:[{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:"Add the following config:"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:g,props:{className:[j,k]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"{\n    \"format_on_save\": true,\n    \"format_on_save_extensions\": [\n        \"vue\"\n    ],\n}\n\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"For me, I also had to override the default node.js path to point to the correct one on my Linux machine. To do this, I first had to find where my executable was installed. I opened terminal, and typed "},{type:b,tag:e,props:{},children:[{type:a,value:"which node"}]},{type:a,value:" to get this path."}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:g,props:{className:[j,k]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"    \"node_path\": {\n        \"linux\": \"\u002Fusr\u002Fbin\u002Fnode\"\n    }\n\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"After this, my Sublime Text would nicely format all my Vue.js files upon saving them!"}]}]},dir:z,path:"\u002Fblog\u002Fsublime-text-eslint-vue-on-save",extension:A,createdAt:"2021-05-31T17:14:26.202Z",updatedAt:"2021-05-31T17:56:01.324Z"}]}],fetch:{},mutations:void 0}}("text","element","\n","p","code","a","pre","div","nuxt-content-highlight","language-text","line-numbers","nofollow","noopener","noreferrer","_blank","strong","li",2,"root","h2","true",-1,"span","icon","icon-link","\u002Fblog",".md","Downgrading from PHP 8 to PHP 7 in Arch Linux - Fixing Composer.","Sublime Text - ESLint on save for Vue.js files","ol","fixing-manjaros-grub-configuration-to-allow-os-prober-to-find-windows-10","Fixing Manjaro's Grub Configuration to allow os-prober to find Windows 10","sudo update-grub","[manjaro ~]$ sudo update-grub \nGenerating grub configuration file ...\nFound theme: \u002Fusr\u002Fshare\u002Fgrub\u002Fthemes\u002Fmanjaro\u002Ftheme.txt\nFound linux image: \u002Fboot\u002Fvmlinuz-5.11-x86_64\nFound initrd image: \u002Fboot\u002Fintel-ucode.img \u002Fboot\u002Finitramfs-5.11-x86_64.img\nFound initrd fallback image: \u002Fboot\u002Finitramfs-5.11-x86_64-fallback.img\nFound linux image: \u002Fboot\u002Fvmlinuz-5.10-x86_64\nFound initrd image: \u002Fboot\u002Fintel-ucode.img \u002Fboot\u002Finitramfs-5.10-x86_64.img\nFound initrd fallback image: \u002Fboot\u002Finitramfs-5.10-x86_64-fallback.img\nFound linux image: \u002Fboot\u002Fvmlinuz-5.9-x86_64\nFound initrd image: \u002Fboot\u002Fintel-ucode.img \u002Fboot\u002Finitramfs-5.9-x86_64.img\nFound initrd fallback image: \u002Fboot\u002Finitramfs-5.9-x86_64-fallback.img\n","2021-05-31T17:13:39.052Z","downgrading-from-php-8-to-php-7-in-arch-linux---fixing-composer","2021-02-22T23:45:36.424Z","sublime-text---eslint-on-save-for-vuejs-files","Install ")));