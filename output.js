//Sat Aug 31 2024 16:21:42 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x3d900c = "网络异常，跳过";
const _0x194ca8 = require("request");
const _0x43705d = require("crypto");
const _0x19fdeb = process.env.HOST || "http://api.94wan.fun";
const _0x117c3f = process.env.SIGN_HOST || "http://api.94wan.fun";
const {
  sendNotify
} = require("./sendNotify1.js");
const _0x570887 = require("dns");
const _0x4b1c6d = require("md5");
const _0x766a6f = ["iPad;3.7.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;2346663656561603-4353564623932316;network/wifi;model/ONEPLUS A5010;addressid/0;aid/2dfceea045ed292a;oaid/;osVer/29;appBuild/1436;psn/BS6Y9SAiw0IpJ4ro7rjSOkCRZTgR3z2K|10;psq/5;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/10.5;jdv/;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/oppo;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A5010 Build/QKQ1.191014.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "iPhone;3.7.0;14.1;59d6ae6e8387bd09fe046d5b8918ead51614e80a;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone12,1;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/;pv/1.26;apprpd/;ref/JDLTSubMainPageViewController;psq/0;ads/;psn/59d6ae6e8387bd09fe046d5b8918ead51614e80a|3;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;22d679c006bf9c087abf362cf1d2e0020ebb8798;network/wifi;ADID/10857A57-DDF8-4A0D-A548-7B8F43AC77EE;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone12,1;addressid/2378947694;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/15.7;apprpd/Allowance_Registered;ref/JDLTTaskCenterViewController;psq/6;ads/;psn/22d679c006bf9c087abf362cf1d2e0020ebb8798|22;jdv/0|kong|t_1000170135|tuiguang|notset|1614153044558|1614153044;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;2616935633265383-5333463636261326;network/UNKNOWN;model/M2007J3SC;addressid/1840745247;aid/ba9e3b5853dccb1b;oaid/371d8af7dd71e8d5;osVer/29;appBuild/1436;psn/t7JmxZUXGkimd4f9Jdul2jEeuYLwxPrm|8;psq/6;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/5.6;jdv/;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/xiaomi;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 10; M2007J3SC Build/QKQ1.200419.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045135 Mobile Safari/537.36", "iPhone;3.7.0;14.3;d7beab54ae7758fa896c193b49470204fbb8fce9;network/4g;ADID/97AD46C9-6D49-4642-BF6F-689256673906;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;9;D246836333735-3264353430393;network/4g;model/MIX 2;addressid/138678023;aid/bf8bcf1214b3832a;oaid/308540d1f1feb2f5;osVer/28;appBuild/1436;psn/Z/rGqfWBY/h5gcGFnVIsRw==|16;psq/3;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 9;osv/9;pv/13.7;jdv/;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/xiaomi;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 9; MIX 2 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045135 Mobile Safari/537.36", "iPhone;3.7.0;14.4;eb5a9e7e596e262b4ffb3b6b5c830984c8a5c0d5;network/wifi;ADID/5603541B-30C1-4B5C-A782-20D0B569D810;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,2;addressid/1041002757;hasOCPay/0;appBuild/101;supportBestPay/0;pv/34.6;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/5;ads/;psn/eb5a9e7e596e262b4ffb3b6b5c830984c8a5c0d5|44;jdv/0|androidapp|t_335139774|appshare|CopyURL|1612612940307|1612612944;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;21631ed9f3pw7ehpk8rnzdzh9wbn59ihp7jwzr30;network/3g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,4;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.47;apprpd/;ref/JDLTSubMainPageViewController;psq/8;ads/;psn/21631ed983b3e854a3154b0336413825ad0d6783|9;jdv/0|direct|-|none|-|1614150725100|1614225882;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;500a795cb2abae60b877ee4a1930557a800bef1c;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone8,1;addressid/669949466;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/9.11;apprpd/;ref/JDLTSubMainPageViewController;psq/10;ads/;psn/500a795cb2abae60b877ee4a1930557a800bef1c|11;jdv/;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPad;3.7.0;14.4;f5e7b7980fb50efc9c294ac38653c1584846c3db;network/wifi;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPad6,3;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/231.11;pap/JA2020_3112531|3.7.0|IOS 14.4;apprpd/;psn/f5e7b7980fb50efc9c294ac38653c1584846c3db|305;usc/kong;jdv/0|kong|t_1000170135|tuiguang|notset|1613606450668|1613606450;umd/tuiguang;psq/2;ucp/t_1000170135;app_device/IOS;utr/notset;ref/JDLTRedPacketViewController;adk/;ads/;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;19fef5419f88076c43f5317eabe20121d52c6a61;network/wifi;ADID/00000000-0000-0000-0000-000000000000;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,8;addressid/3430850943;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/10.4;apprpd/;ref/JDLTSubMainPageViewController;psq/3;ads/;psn/19fef5419f88076c43f5317eabe20121d52c6a61|16;jdv/0|kong|t_1001327829_|jingfen|f51febe09dd64b20b06bc6ef4c1ad790#/|1614096460311|1614096511;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;12.2;f995bc883282f7c7ea9d7f32da3f658127aa36c7;network/4g;ADID/9F40F4CA-EA7C-4F2E-8E09-97A66901D83E;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,4;addressid/525064695;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/11.11;apprpd/;ref/JDLTSubMainPageViewController;psq/2;ads/;psn/f995bc883282f7c7ea9d7f32da3f658127aa36c7|22;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 12.2;Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;5366566313931326-6633931643233693;network/wifi;model/Mi9 Pro 5G;addressid/0;aid/5fe6191bf39a42c9;oaid/e3a9473ef6699f75;osVer/29;appBuild/1436;psn/b3rJlGi AwLqa9AqX7Vp0jv4T7XPMa0o|5;psq/4;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/5.4;jdv/;ref/HomeFragment;partner/xiaomi;apprpd/Home_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; Mi9 Pro 5G Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045135 Mobile Safari/537.36", "iPhone;3.7.0;14.4;4e6b46913a2e18dd06d6d69843ee4cdd8e033bc1;network/3g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,2;addressid/666624049;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/54.11;apprpd/MessageCenter_MessageMerge;ref/MessageCenterController;psq/10;ads/;psn/4e6b46913a2e18dd06d6d69843ee4cdd8e033bc1|101;jdv/0|kong|t_2010804675_|jingfen|810dab1ba2c04b8588c5aa5a0d44c4bd|1614183499;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.2;c71b599e9a0bcbd8d1ad924d85b5715530efad06;network/wifi;ADID/751C6E92-FD10-4323-B37C-187FD0CF0551;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,8;addressid/4053561885;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/263.8;apprpd/;ref/JDLTSubMainPageViewController;psq/2;ads/;psn/c71b599e9a0bcbd8d1ad924d85b5715530efad06|481;jdv/0|kong|t_1001610202_|jingfen|3911bea7ee2f4fcf8d11fdf663192bbe|1614157052210|1614157056;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.2;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;2d306ee3cacd2c02560627a5113817ebea20a2c9;network/4g;ADID/A346F099-3182-4889-9A62-2B3C28AB861E;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,3;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/;pv/1.35;apprpd/Allowance_Registered;ref/JDLTTaskCenterViewController;psq/0;ads/;psn/2d306ee3cacd2c02560627a5113817ebea20a2c9|2;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;28355aff16cec8bcf3e5728dbbc9725656d8c2c2;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,2;addressid/833058617;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.10;apprpd/;ref/JDLTWebViewController;psq/9;ads/;psn/28355aff16cec8bcf3e5728dbbc9725656d8c2c2|5;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;24ddac73a3de1b91816b7aedef53e97c4c313733;network/4g;ADID/598C6841-76AC-4512-AA97-CBA940548D70;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone11,6;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/12.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/24ddac73a3de1b91816b7aedef53e97c4c313733|23;jdv/0|kong|t_1000170135|tuiguang|notset|1614126110904|1614126110;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;d7732ba60c8ff73cc3f5ba7290a3aa9551f73a1b;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone12,1;addressid/25239372;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/8.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/d7732ba60c8ff73cc3f5ba7290a3aa9551f73a1b|14;jdv/0|kong|t_1001226363_|jingfen|5713234d1e1e4893b92b2de2cb32484d|1614182989528|1614182992;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;ca1a32afca36bc9fb37fd03f18e653bce53eaca5;network/wifi;ADID/3AF380AB-CB74-4FE6-9E7C-967693863CA3;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone8,1;addressid/138323416;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/72.12;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/ca1a32afca36bc9fb37fd03f18e653bce53eaca5|109;jdv/0|kong|t_1000536212_|jingfen|c82bfa19e33a4269a5884ffc614790f4|1614141246;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;7346933333666353-8333366646039373;network/wifi;model/ONEPLUS A5010;addressid/138117973;aid/7d933f6583cfd097;oaid/;osVer/29;appBuild/1436;psn/T/eqfRSwp8VKEvvXyEunq09Cg2MUkiQ5|17;psq/4;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/11.4;jdv/0|kong|t_1001849073_|jingfen|495a47f6c0b8431c9d460f61ad2304dc|1614084403978|1614084407;ref/HomeFragment;partner/oppo;apprpd/Home_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A5010 Build/QKQ1.191014.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "android;3.7.0;11;4626269356736353-5353236346334673;network/wifi;model/M2006J10C;addressid/0;aid/dbb9e7655526d3d7;oaid/66a7af49362987b0;osVer/30;appBuild/1436;psn/rQRQgJ 4 S3qkq8YDl28y6jkUHmI/rlX|3;psq/4;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 11;osv/11;pv/3.4;jdv/;ref/HomeFragment;partner/xiaomi;apprpd/Home_Main;eufv/1;Mozilla/5.0 (Linux; Android 11; M2006J10C Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045513 Mobile Safari/537.36", "iPhone;3.7.0;14.4;78fc1d919de0c8c2de15725eff508d8ab14f9c82;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,1;addressid/137829713;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/23.11;apprpd/;ref/JDLTSubMainPageViewController;psq/10;ads/;psn/78fc1d919de0c8c2de15725eff508d8ab14f9c82|34;jdv/0|iosapp|t_335139774|appshare|Wxfriends|1612508702380|1612534293;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;0373263343266633-5663030363465326;network/wifi;model/Redmi Note 7;addressid/590846082;aid/07b34bf3e6006d5b;oaid/17975a142e67ec92;osVer/29;appBuild/1436;psn/OHNqtdhQKv1okyh7rB3HxjwI00ixJMNG|4;psq/3;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/2.3;jdv/;ref/activityId=8a8fabf3cccb417f8e691b6774938bc2;partner/xiaomi;apprpd/jsbqd_home;eufv/1;Mozilla/5.0 (Linux; Android 10; Redmi Note 7 Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.152 Mobile Safari/537.36", "android;3.7.0;10;3636566623663623-1693635613166646;network/wifi;model/ASUS_I001DA;addressid/1397761133;aid/ccef2fc2a96e1afd;oaid/;osVer/29;appBuild/1436;psn/T8087T0D82PHzJ4VUMGFrfB9dw4gUnKG|76;psq/5;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/73.5;jdv/0|kong|t_1002354188_|jingfen|2335e043b3344107a2750a781fde9a2e#/|1614097081426|1614097087;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/yingyongbao;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ASUS_I001DA Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,2;addressid/138419019;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/5.7;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/6;ads/;psn/4ee6af0db48fd605adb69b63f00fcbb51c2fc3f0|9;jdv/0|direct|-|none|-|1613705981655|1613823229;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/wifi;ADID/F9FD7728-2956-4DD1-8EDD-58B07950864C;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,1;addressid/1346909722;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/30.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/40d4d4323eb3987226cae367d6b0d8be50f2c7b3|39;jdv/0|kong|t_1000252057_0|tuiguang|eba7648a0f4445aa9cfa6f35c6f36e15|1613995717959|1613995723;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;ADID/5D306F0D-A131-4B26-947E-166CCB9BFFFF;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;addressid/138164461;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/7.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/d40e5d4a33c100e8527f779557c347569b49c304|7;jdv/0|kong|t_1001226363_|jingfen|3bf5372cb9cd445bbb270b8bc9a34f00|1608439066693|1608439068;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPad;3.7.0;14.5;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPad8,9;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/;pv/1.20;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/5;ads/;psn/d9f5ddaa0160a20f32fb2c8bfd174fae7993c1b4|3;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.5;Mozilla/5.0 (iPad; CPU OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/wifi;ADID/31548A9C-8A01-469A-B148-E7D841C91FD0;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/10.5;apprpd/;ref/JDLTSubMainPageViewController;psq/4;ads/;psn/a858fb4b40e432ea32f80729916e6c3e910bb922|12;jdv/0|direct|-|none|-|1613898710373|1613898712;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,2;addressid/2237496805;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/13.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/48e495dcf5dc398b4d46b27e9f15a2b427a154aa|15;jdv/0|direct|-|none|-|1613354874698|1613952828;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;3346332626262353-1666434336539336;network/wifi;model/ONEPLUS A6000;addressid/0;aid/3d3bbb25af44c59c;oaid/;osVer/29;appBuild/1436;psn/ECbc2EqmdSa7mDF1PS1GSrV/Tn7R1LS1|6;psq/8;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/2.67;jdv/0|direct|-|none|-|1613822479379|1613991194;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/oppo;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A6000 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "android;3.7.0;8.1.0;8363834353530333132333132373-43D2930366035323639333662383;network/wifi;model/16th Plus;addressid/0;aid/f909e5f2c464c7c6;oaid/;osVer/27;appBuild/1436;psn/c21YWvVr77Hn6 pOZfxXGY4TZrre1 UOL5hcPbCEDMo=|3;psq/10;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 8.1.0;osv/8.1.0;pv/2.15;jdv/;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/jsxdlyqj09;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 8.1.0; 16th Plus Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045514 Mobile Safari/537.36", "android;3.7.0;11;1343467336264693-3343562673463613;network/wifi;model/Mi 10 Pro;addressid/0;aid/14d7cbd934eb7dc1;oaid/335f198546eb3141;osVer/30;appBuild/1436;psn/ZcQh/Wov sNYfZ6JUjTIUBu28 KT0T3u|1;psq/24;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 11;osv/11;pv/1.24;jdv/;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/xiaomi;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 11; Mi 10 Pro Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.181 Mobile Safari/537.36", "android;3.7.0;10;8353636393732346-6646931673935346;network/wifi;model/MI 8;addressid/1969998059;aid/8566972dfd9a795d;oaid/4a8b773c3e307386;osVer/29;appBuild/1436;psn/PhYbUtCsCJo r 1b8hwxjnY8rEv5S8XC|383;psq/14;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/374.14;jdv/0|iosapp|t_335139774|liteshare|CopyURL|1609306590175|1609306596;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/jsxdlyqj09;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "iPhone;3.7.0;14.4;6d343c58764a908d4fa56609da4cb3a5cc1396d3;network/wifi;ADID/4965D884-3E61-4C4E-AEA7-9A8CE3742DA7;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.6.1;4606ddccdfe8f343f8137de7fea7f91fc4aef3a3;network/4g;ADID/C6FB6E20-D334-45FA-818A-7A4C58305202;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone10,1;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/5.9;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/8;ads/;psn/4606ddccdfe8f343f8137de7fea7f91fc4aef3a3|5;jdv/0|iosapp|t_335139774|liteshare|Qqfriends|1614206359106|1614206366;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.6.1;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;3b6e79334551fc6f31952d338b996789d157c4e8;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,1;addressid/138051400;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/14.34;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/12;ads/;psn/3b6e79334551fc6f31952d338b996789d157c4e8|46;jdv/0|kong|t_1001707023_|jingfen|e80d7173a4264f4c9a3addcac7da8b5d|1613837384708|1613858760;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;1346235693831363-2373837393932673;network/wifi;model/LYA-AL00;addressid/3321567203;aid/1d2e9816278799b7;oaid/00000000-0000-0000-0000-000000000000;osVer/29;appBuild/1436;psn/45VUZFTZJkhP5fAXbeBoQ0   O2GCB I|7;psq/5;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/5.8;jdv/0|iosapp|t_335139774|liteshare|CopyURL|1614066210320|1614066219;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/huawei;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; LYA-AL00 Build/HUAWEILYA-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36", "iPhone;3.7.0;14.3;c2a8854e622a1b17a6c56c789f832f9d78ef1ba7;network/wifi;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone12,5;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/3.9;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/8;ads/;psn/c2a8854e622a1b17a6c56c789f832f9d78ef1ba7|6;jdv/0|direct|-|none|-|1613541016735|1613823566;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;9;;network/wifi;model/MIX 2S;addressid/;aid/f87efed6d9ed3c65;oaid/94739128ef9dd245;osVer/28;appBuild/1436;psn/R7wD/OWkQjYWxax1pDV6kTIDFPJCUid7C/nl2hHnUuI=|3;psq/13;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 9;osv/9;pv/1.42;jdv/;ref/activityId=8a8fabf3cccb417f8e691b6774938bc2;partner/xiaomi;apprpd/jsbqd_home;eufv/1;Mozilla/5.0 (Linux; Android 9; MIX 2S Build/PKQ1.180729.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.181 Mobile Safari/537.36", "iPhone;3.7.0;14.4;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;network/wifi;Mozilla/5.0 (Linux; Android 10; Redmi Note 7 Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.152 Mobile Safari/537.36", "iPhone;3.7.0;14.4;network/3g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPad;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPad6,3;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/231.11;pap/JA2020_3112531|3.7.0|IOS 14.4;apprpd/;psn/f5e7b7980fb50efc9c294ac38653c1584846c3db|305;usc/kong;jdv/0|kong|t_1000170135|tuiguang|notset|1613606450668|1613606450;umd/tuiguang;psq/2;ucp/t_1000170135;app_device/IOS;utr/notset;ref/JDLTRedPacketViewController;adk/;ads/;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone8,1;addressid/669949466;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/9.11;apprpd/;ref/JDLTSubMainPageViewController;psq/10;ads/;psn/500a795cb2abae60b877ee4a1930557a800bef1c|11;jdv/;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/3g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,4;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.47;apprpd/;ref/JDLTSubMainPageViewController;psq/8;ads/;psn/21631ed983b3e854a3154b0336413825ad0d6783|9;jdv/0|direct|-|none|-|1614150725100|1614225882;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/3g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,4;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.47;apprpd/;ref/JDLTSubMainPageViewController;psq/8;ads/;psn/21631ed983b3e854a3154b0336413825ad0d6783|9;jdv/0|direct|-|none|-|1614150725100|1614225882;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/3.15;apprpd/;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fchat%2Findex.action%3Fentry%3Djd_m_JiSuCommodity%26pid%3D7763388%26lng%3D118.159665%26lat%3D24.504633%26sid%3D31cddc2d58f6e36bf2c31c4e8a79767w%26un_area%3D16_1315_3486_0;psq/12;ads/;psn/c10e0db6f15dec57a94637365f4c3d43e05bbd48|4;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/3.15;apprpd/;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fchat%2Findex.action%3Fentry%3Djd_m_JiSuCommodity%26pid%3D7763388%26lng%3D118.159665%26lat%3D24.504633%26sid%3D31cddc2d58f6e36bf2c31c4e8a79767w%26un_area%3D16_1315_3486_0;psq/12;ads/;psn/c10e0db6f15dec57a94637365f4c3d43e05bbd48|4;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/3.15;apprpd/;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fchat%2Findex.action%3Fentry%3Djd_m_JiSuCommodity%26pid%3D7763388%26lng%3D118.159665%26lat%3D24.504633%26sid%3D31cddc2d58f6e36bf2c31c4e8a79767w%26un_area%3D16_1315_3486_0;psq/12;ads/;psn/c10e0db6f15dec57a94637365f4c3d43e05bbd48|4;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/2813715704;pv/67.38;apprpd/MyJD_Main;ref/https%3A%2F%2Fh5.m.jd.com%2FbabelDiy%2FZeus%2F2ynE8QDtc2svd36VowmYWBzzDdK6%2Findex.html%3Flng%3D103.957532%26lat%3D30.626962%26sid%3D4fe8ef4283b24723a7bb30ee87c18b2w%26un_area%3D22_1930_49324_52512;psq/4;ads/;psn/5aef178f95931bdbbde849ea9e2fc62b18bc5829|127;jdv/0|direct|-|none|-|1612588090667|1613822580;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone12,1;addressid/3104834020;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/c633e62b5a4ad0fdd93d9862bdcacfa8f3ecef63|6;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,1;addressid/1346909722;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/30.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/40d4d4323eb3987226cae367d6b0d8be50f2c7b3|39;jdv/0|kong|t_1000252057_0|tuiguang|eba7648a0f4445aa9cfa6f35c6f36e15|1613995717959|1613995723;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/wifi;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,1;addressid/1346909722;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/30.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/40d4d4323eb3987226cae367d6b0d8be50f2c7b3|39;jdv/0|kong|t_1000252057_0|tuiguang|eba7648a0f4445aa9cfa6f35c6f36e15|1613995717959|1613995723;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;addressid/138164461;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/7.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/d40e5d4a33c100e8527f779557c347569b49c304|7;jdv/0|kong|t_1001226363_|jingfen|3bf5372cb9cd445bbb270b8bc9a34f00|1608439066693|1608439068;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;addressid/138164461;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/7.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/d40e5d4a33c100e8527f779557c347569b49c304|7;jdv/0|kong|t_1001226363_|jingfen|3bf5372cb9cd445bbb270b8bc9a34f00|1608439066693|1608439068;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;addressid/138164461;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/7.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/d40e5d4a33c100e8527f779557c347569b49c304|7;jdv/0|kong|t_1001226363_|jingfen|3bf5372cb9cd445bbb270b8bc9a34f00|1608439066693|1608439068;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,2;addressid/2237496805;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/13.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/48e495dcf5dc398b4d46b27e9f15a2b427a154aa|15;jdv/0|direct|-|none|-|1613354874698|1613952828;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;network/wifi;model/ONEPLUS A6000;addressid/0;aid/3d3bbb25af44c59c;oaid/;osVer/29;appBuild/1436;psn/ECbc2EqmdSa7mDF1PS1GSrV/Tn7R1LS1|6;psq/8;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/2.67;jdv/0|direct|-|none|-|1613822479379|1613991194;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/oppo;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A6000 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "android;3.7.0;8.1.0;network/wifi;model/16th Plus;addressid/0;aid/f909e5f2c464c7c6;oaid/;osVer/27;appBuild/1436;psn/c21YWvVr77Hn6 pOZfxXGY4TZrre1 UOL5hcPbCEDMo=|3;psq/10;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 8.1.0;osv/8.1.0;pv/2.15;jdv/;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/jsxdlyqj09;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 8.1.0; 16th Plus Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045514 Mobile Safari/537.36", "android;3.7.0;11;network/wifi;model/Mi 10 Pro;addressid/0;aid/14d7cbd934eb7dc1;oaid/335f198546eb3141;osVer/30;appBuild/1436;psn/ZcQh/Wov sNYfZ6JUjTIUBu28 KT0T3u|1;psq/24;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 11;osv/11;pv/1.24;jdv/;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/xiaomi;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 11; Mi 10 Pro Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.181 Mobile Safari/537.36", "android;3.7.0;10;network/wifi;model/MI 8;addressid/1969998059;aid/8566972dfd9a795d;oaid/4a8b773c3e307386;osVer/29;appBuild/1436;psn/PhYbUtCsCJo r 1b8hwxjnY8rEv5S8XC|383;psq/14;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/374.14;jdv/0|iosapp|t_335139774|liteshare|CopyURL|1609306590175|1609306596;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/jsxdlyqj09;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone8,4;addressid/1477231693;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/21.15;apprpd/MyJD_Main;ref/https%3A%2F%2Fgold.jd.com%2F%3Flng%3D0.000000%26lat%3D0.000000%26sid%3D4584eb84dc00141b0d58e000583a338w%26un_area%3D19_1607_3155_62114;psq/0;ads/;psn/2c822e59db319590266cc83b78c4a943783d0077|46;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone12,3;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/;pv/3.49;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/7;ads/;psn/9e0e0ea9c6801dfd53f2e50ffaa7f84c7b40cd15|6;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPad;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPad7,5;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.14;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/3;ads/;psn/956c074c769cd2eeab2e36fca24ad4c9e469751a|8;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148"];
const _0x34e58f = require("child_process").exec;
const {
  getEnvsByName,
  addEnv,
  updateEnv,
  updateEnv11
} = require("./ql");
function _0x19d009(_0x1cbc0f = 0, _0x3477ea = 100) {
  return Math.min(Math.floor(_0x1cbc0f + Math.random() * (_0x3477ea - _0x1cbc0f)), _0x3477ea);
}
const _0x8ee9cc = _0x766a6f[_0x19d009(0, _0x766a6f.length - 1)];
function _0x3f7a56(_0x49609a = "elmck") {
  console.log("版本：内部版1.0.0\n");
  if (process.env.SIGN_HOST) {
    console.log("正在使用本地 sign\n");
  }
  let _0xfab6e4 = [];
  let _0x54ca8d = process.env[_0x49609a];
  if (_0x54ca8d) {
    if (_0x54ca8d.indexOf("&") > -1) {
      _0xfab6e4 = _0x54ca8d.split("&");
    } else {
      if (_0x54ca8d.indexOf("\n") > -1) {
        _0xfab6e4 = _0x54ca8d.split("\n");
      } else {
        _0xfab6e4 = [_0x54ca8d];
      }
    }
  }
  return _0xfab6e4;
}
function _0x4da2f9(_0x319b50) {
  return new Promise(_0x19b5b3 => {
    _0x34e58f(_0x319b50, function (_0x29afb8, _0x19b11a, _0xa539dc) {
      if (_0x29afb8) {
        console.error(_0x29afb8);
        _0x19b5b3("");
      } else {
        _0x19b5b3(_0x19b11a);
      }
    });
  });
}
function _0x141e79(_0x52afc5) {
  if (!_0x52afc5) {
    return "-1";
  }
  for (var _0x4290a2 = _0x52afc5.split(";"), _0x313bff = 0; _0x313bff < _0x4290a2.length; _0x313bff++) {
    var _0x569bee = _0x4290a2[_0x313bff].split("=");
    if ([" _m_h5_tk", "_m_h5_tk"].includes(_0x569bee[0])) {
      return _0x569bee[1];
    }
  }
  return "-1";
}
const _0x4956bd = _0x2c09e8 => {
  return new Promise(_0x2ace6e => {
    setTimeout(() => {
      _0x2ace6e();
    }, _0x2c09e8 * 1000);
  });
};
async function _0x330622(_0x48540a) {
  return new Promise(_0x1341ea => {
    try {
      _0x48540a(_0x1341ea);
    } catch (_0x59fe1b) {
      console.log(_0x3d900c);
      _0x1341ea();
    }
  });
}
const _0x55a7de = async (_0x1eaedd, _0xdddd2d, _0x35fd01, _0x32d969 = "", _0x961852, _0x5d611e = {}, _0x4887ff = 5) => {
  if (_0x4887ff === 0) {
    console.log("网络异常，请检查网络状况");
    return "";
  }
  const _0x494443 = await _0x4da2f9("head -1 /proc/self/cgroup|cut -d/ -f3|cut -c1-12");
  let _0x2b2e81 = process.env.ELE_CARME;
  let _0x208c35 = 1;
  if (_0x1eaedd === 4) {
    _0x2b2e81 = process.env.ELE_TTCJ_CARME;
    _0x208c35 = 4;
  }
  const _0x1f8152 = {
    carmi: _0x2b2e81,
    containerId: _0x494443,
    type: _0x208c35,
    gameType: _0x1eaedd,
    stepId: _0xdddd2d,
    tokenFirst: _0x32d969,
    appKey: _0x35fd01,
    timestamp: _0x961852,
    anotherParam: JSON.stringify(_0x5d611e)
  };
  const _0x55f501 = _0x19fdeb + "/v2/new/sign";
  const _0x5290e7 = {
    "content-type": "application/json"
  };
  const _0x9bdc9b = {
    url: _0x55f501,
    method: "POST",
    headers: _0x5290e7,
    body: JSON.stringify(_0x1f8152)
  };
  return _0x330622(_0x558c5d => {
    _0x194ca8(_0x9bdc9b, async (_0x36fc2c, _0x1b6981, _0x39aae2) => {
      if (!_0x36fc2c && _0x1b6981.statusCode === 200) {
        const _0x398ff8 = JSON.parse(_0x39aae2);
        if (_0x398ff8.code !== 20000) {
          console.error(_0x398ff8.message);
          process.exit(0);
        } else {
          _0x558c5d(_0x398ff8.data);
        }
      } else {
        if (_0x36fc2c && (_0x36fc2c.message.indexOf("socket hang up") !== -1 || _0x36fc2c.message.indexOf("read ECONNRESET") !== -1)) {
          console.log("网络链接失败，将在 2 秒后重试");
          await _0x4956bd(2);
          _0x558c5d(await _0x55a7de(_0x1eaedd, _0xdddd2d, _0x35fd01, _0x32d969, _0x4887ff - 1));
        } else {
          console.log("网络异常，请检查网络状况");
          _0x558c5d("");
        }
      }
    });
  });
};
const _0x520c68 = async (_0x6a9bad, _0x38f597, _0x3200ab = 5) => {
  _0x6a9bad = _0x6a9bad.replace(/\s/g, "");
  let _0x33eda1 = _0x141e79(_0x6a9bad);
  _0x33eda1 = _0x33eda1.split("_")[0];
  let _0x347535 = 12574478;
  let _0x344610 = new Date().getTime();
  const _0x14769b = await _0x55a7de(99, 1, _0x347535, _0x33eda1, _0x344610);
  let _0xb77451 = _0x14769b.sign;
  const _0x22ec76 = {
    Cookie: _0x6a9bad,
    "User-Agent": _0x8ee9cc
  };
  const _0x3ff274 = {
    url: "https://shopping.ele.me/h5/mtop.alsc.user.session.ele.check/1.0/?H5Request=true&api=mtop.alsc.user.session.ele.check&appKey=12574478&data={}&dataType=json&jsv=2.6.2&mainDomain=ele.me&pageDomain=ele.me&sign=" + _0xb77451 + "&subDomain=shopping&t=" + _0x344610 + "&timeout=5000&type=json&v=1.0",
    method: "GET",
    headers: _0x22ec76
  };
  return _0x330622(_0x5a283d => {
    try {
      _0x194ca8(_0x3ff274, async (_0x2fb2fd, _0x4f0eb8, _0x4b0309) => {
        if (!_0x2fb2fd && _0x4f0eb8.statusCode === 200) {
          const _0x342b0a = JSON.parse(_0x4b0309);
          if (_0x342b0a.data.errorCode === "000502") {
            console.log("第", _0x38f597 + 1, "账号失效！请重新登录！！！😭");
            _0x5a283d(null);
          } else {
            if (_0x3200ab <= 0) {
              if (_0x38f597 >= 0) {
                console.log("第", _0x38f597 + 1, "cookie存在异常，请检查");
              } else {
                console.log("cookie存在异常，请检查");
              }
              _0x5a283d(null);
            }
            if (_0x342b0a.ret.includes("FAIL_SYS_TOKEN_EXOIRED::令牌过期") || _0x342b0a.ret.includes("FAIL_SYS_TOKEN_EMPTY::令牌为空")) {
              _0x5a283d(await _0x4448e5(_0x6a9bad, _0x38f597, _0x3200ab - 1));
            } else {
              _0x5a283d(_0x6a9bad);
            }
          }
        } else {
          if (_0x2fb2fd && _0x2fb2fd.message.indexOf("Invalid character in header content [\"Cookie\"]") !== -1) {
            console.log("第", _0x38f597 + 1, "账号ck不合法，请确认！！！");
          } else {
            console.log(_0x2fb2fd);
          }
          _0x5a283d(null);
        }
      });
    } catch (_0x20e514) {
      console.log(_0x3d900c);
    }
  });
};
function _0x4448e5(_0x4661d2, _0x484b83, _0x31176f = 5) {
  const _0xfef5b2 = {
    url: "https://waimai-guide.ele.me/h5/mtop.alsc.personal.queryminecenter/1.0/?jsv=2.6.2&appKey=12574478",
    headers: {}
  };
  _0xfef5b2.headers.Cookie = _0x4661d2;
  _0xfef5b2.headers.method = "GET";
  _0xfef5b2.headers["User-Agent"] = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36";
  return _0x330622(_0x576659 => {
    try {
      _0x194ca8(_0xfef5b2, async (_0x3c1e87, _0x38677b, _0x42fd61) => {
        if (!_0x3c1e87 && _0x38677b.statusCode === 200) {
          const _0x360cc1 = JSON.stringify(_0x38677b.headers["set-cookie"]);
          const _0x30a4d4 = /_m_h5_tk=(\S*);/;
          const _0x121e8a = _0x360cc1.match(_0x30a4d4)[1];
          const _0x4407c7 = " _m_h5_tk=" + _0x121e8a.split(";")[0];
          const _0xab7296 = /_m_h5_tk_enc=(\S*);/;
          const _0x3ebdcb = _0x360cc1.match(_0xab7296)[1];
          const _0x59c56d = " _m_h5_tk_enc=" + _0x3ebdcb.split(";")[0];
          _0x4661d2 = _0x109e7b(_0x4407c7, _0x59c56d, _0x4661d2);
          if (_0x31176f <= 0) {
            if (_0x484b83 >= 0) {
              console.log("第", _0x484b83 + 1, "cookie存在异常，请检查");
            } else {
              console.log("cookie存在异常，请检查");
            }
            _0x576659(null);
          } else {
            _0x576659(await _0x520c68(_0x4661d2, _0x484b83, _0x31176f - 1));
          }
        } else {
          _0x576659(null);
        }
      });
    } catch (_0x9977e) {
      console.log(_0x3d900c);
    }
  });
}
function _0x109e7b(_0x2ae512, _0x5014dd, _0x5290f8) {
  let _0x41c02c = false;
  for (var _0x516bed = _0x5290f8.split(";"), _0x4ef2c8 = 0; _0x4ef2c8 < _0x516bed.length; _0x4ef2c8++) {
    var _0x452d6b = _0x516bed[_0x4ef2c8].split("=");
    if (["_m_h5_tk", " _m_h5_tk"].indexOf(_0x452d6b[0]) > -1) {
      _0x41c02c = true;
      _0x516bed[_0x4ef2c8] = _0x2ae512;
    }
    if ([" _m_h5_tk_enc", "_m_h5_tk_enc"].indexOf(_0x452d6b[0]) > -1) {
      _0x516bed[_0x4ef2c8] = _0x5014dd;
      _0x41c02c = true;
    }
  }
  var _0x33800b = "";
  if (_0x41c02c) {
    for (_0x4ef2c8 = 0; _0x4ef2c8 < _0x516bed.length; _0x4ef2c8++) {
      _0x33800b += _0x516bed[_0x4ef2c8];
      _0x4ef2c8 != _0x516bed.length - 1 && (_0x33800b += ";");
    }
  } else {
    _0x33800b = _0x5290f8 + ";" + _0x2ae512 + ";" + _0x5014dd;
  }
  _0x5290f8 = _0x33800b;
  return _0x5290f8;
}
const _0x37c0d5 = _0x4fbbca => {
  const _0x1297e8 = {
    Cookie: _0x4fbbca,
    "user-agent": _0x8ee9cc
  };
  const _0x5badae = {
    url: "https://restapi.ele.me/eus/v5/user_detail",
    headers: _0x1297e8
  };
  return _0x330622(_0x2c0720 => {
    _0x194ca8(_0x5badae, async (_0x4a027c, _0x5565f1, _0x19b07c) => {
      if (!_0x4a027c && _0x5565f1.statusCode === 200) {
        _0x2c0720(JSON.parse(_0x19b07c));
      } else {
        _0x2c0720({});
      }
    });
  });
};
const _0x5dc9e3 = async (_0x413b4e, _0x579a7e, _0x1a1b23 = 5) => {
  if (_0x1a1b23 === 0) {
    console.log("网络异常，请检查网络状况");
    process.exit(0);
  }
  if (!_0x413b4e) {
    console.log("❌卡密不能为空");
    process.exit(0);
  }
  const _0x5513cd = await _0x4da2f9("head -1 /proc/self/cgroup|cut -d/ -f3|cut -c1-12");
  const _0x4e2933 = _0x19fdeb + "/check/kami?carmi=" + _0x413b4e + "&type=" + _0x579a7e + "&containerId=" + _0x5513cd + "&isNew=true";
  const _0x1419b8 = {
    url: _0x4e2933,
    method: "GET"
  };
  return _0x330622(_0x31d716 => {
    _0x194ca8(_0x1419b8, async (_0x1a3aba, _0x5808ab, _0x3fb4de) => {
      if (!_0x1a3aba && _0x5808ab.statusCode === 200) {
        const _0x160133 = JSON.parse(_0x3fb4de);
        if (_0x160133.code !== 20000) {
          console.error(_0x160133.message);
          process.exit(0);
        } else {
          console.log("\n" + _0x160133.data.msg);
          _0x31d716(_0x160133);
        }
      } else {
        if (_0x1a3aba && (_0x1a3aba.message.indexOf("socket hang up") !== -1 || _0x1a3aba.message.indexOf("read ECONNRESET") !== -1)) {
          console.log("网络链接失败，将在 2 秒后重试");
          await _0x4956bd(2);
          _0x31d716(await _0x5dc9e3(_0x413b4e, _0x579a7e, _0x1a1b23 - 1));
        } else {
          console.log("网络异常，请检查网络状况");
          process.exit(0);
        }
      }
    });
  });
};
const _0x3c507c = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAntZvpNYeRv7UpTSvhzWtdVvUxPeSwfyFvV1hyhjByfc+RKLcBFHdkyI0nB4pMWcLln6zmXfhEJK+eSBovY7BR6LAP/fV+zhxTChnlMGjDwhr+E3/LEnlH24lVcIIFQaU/grflUGJHVJrCHtkJ3NPTLrit5gilviRNUSHMI+Y+PcX9HfzGCCEp1lnIPkzVrWVojtcXLjEYfdGZRijK/udICjSHNXp9No/vzrFxaH2jfk6PVLAcNXZAEGbNUdIzbfYorGdU6lf3tFJ8E2Fs1k6Q4BTFXYzkq+EejOYjHF64M5OTTKtfNcrHcZo13EDdjG5JRaKx7bGc5e5lUOSsBCWdwIDAQAB\n-----END PUBLIC KEY-----";
function _0x2000b2(_0x3fd3b0) {
  const _0x1b4125 = Buffer.from(_0x3fd3b0, "utf8");
  const _0x5201ce = _0x43705d.publicEncrypt(_0x3c507c, _0x1b4125);
  return _0x5201ce.toString("base64");
}
async function _0x2253b9(_0x5abe75, _0x5ba900, _0x597d8c, _0x1cc857, _0x28fd3a, _0x35d65a, _0x488dd2, _0x15d58c, _0x4f1976, _0x103354 = 5) {
  if (_0x103354 === 0) {
    console.log("网络异常，请检查网络状况");
    return "";
  }
  const _0x422d38 = {
    carmi: process.env.ELE_CARME || process.env.ELE_TTCJ_CARME,
    gameType: _0x488dd2,
    stepId: _0x15d58c,
    containerId: await _0x4da2f9("head -1 /proc/self/cgroup|cut -d/ -f3|cut -c1-12"),
    anotherParam: JSON.stringify(_0x4f1976),
    carmiEncrpt: _0x2000b2(process.env.ELE_CARME || process.env.ELE_TTCJ_CARME),
    needSignData: {}
  };
  _0x422d38.needSignData.api = _0x5abe75;
  _0x422d38.needSignData.pageId = decodeURIComponent(_0x5ba900);
  _0x422d38.needSignData.uid = _0x1cc857;
  _0x422d38.needSignData.deviceId = _0x28fd3a;
  _0x422d38.needSignData.utdid = _0x35d65a;
  if (_0x597d8c) {
    _0x422d38.needSignData.sid = _0x597d8c;
  }
  const _0x48b58f = {
    "Content-Type": "application/json"
  };
  const _0x57f915 = {
    headers: _0x48b58f,
    method: "POST",
    url: _0x117c3f + "/api/v1/get/xsign",
    body: JSON.stringify(_0x422d38)
  };
  return _0x330622(_0x50ad8b => {
    _0x194ca8(_0x57f915, async (_0x53f6da, _0x1cf1ce, _0x4fa722) => {
      if (!_0x53f6da && _0x1cf1ce.statusCode === 200) {
        let _0x2a8dc5 = JSON.parse(_0x4fa722);
        _0x50ad8b(_0x2a8dc5);
      } else {
        if (_0x53f6da && (_0x53f6da.message.indexOf("socket hang up") !== -1 || _0x53f6da.message.indexOf("read ECONNRESET") !== -1)) {
          console.log("网络链接失败，将在 2 秒后重试");
          await _0x4956bd(2);
          _0x50ad8b(await _0x2253b9(_0x5abe75, _0x5ba900, _0x597d8c, _0x1cc857, _0x28fd3a, _0x35d65a, _0x488dd2, _0x15d58c, _0x4f1976, _0x103354 - 1));
        } else {
          console.log("网络异常，请检查网络状况");
          _0x50ad8b();
        }
      }
    });
  });
}
function _0x348d75(_0x396334) {
  const _0x5019c0 = _0x396334.split(";").map(_0xbf0e33 => _0xbf0e33.trim().split("="));
  const _0x33f1c9 = new Map();
  for (let _0x10aa5f = 0; _0x10aa5f < _0x5019c0.length; _0x10aa5f++) {
    const [_0x155248, _0x2b3bea] = _0x5019c0[_0x10aa5f];
    if (_0x155248) {
      _0x33f1c9.set(_0x155248, decodeURIComponent(_0x2b3bea));
    }
  }
  return _0x33f1c9;
}
function _0x3974a2(_0x118c2b) {
  const _0x273342 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
  let _0x435c4b = "";
  for (let _0x4b8b4d = _0x118c2b; _0x4b8b4d > 0; --_0x4b8b4d) {
    _0x435c4b += _0x273342[Math.floor(Math.random() * _0x273342.length)];
  }
  return _0x435c4b;
}
function _0x365b30(_0x12aec7) {
  const _0x44186e = _0x43705d.createDecipheriv("aes-256-cbc", process.env.ELE_CARME || process.env.ELE_TTCJ_CARME, Buffer.from("4lp7ySjYEgwa/LBGW55wMQ==", "base64"));
  let _0x469fe6 = _0x44186e.update(_0x12aec7, "base64", "utf8");
  _0x469fe6 += _0x44186e.final("utf8");
  return _0x469fe6;
}
async function _0x3ff42e(_0xbf923c, _0x2ebceb, _0x5d1929, _0x402bcc, _0x1c9f50 = "", _0x5d1fa8, _0x2bf1ee = "", _0xa523c7 = 3) {
  if (_0xa523c7 < 0) {
    return null;
  }
  let _0x14c321 = _0x348d75(_0xbf923c);
  let _0x27379e = _0x14c321.get("deviceId") || _0x3974a2(44);
  let _0x25d563 = _0x14c321.get("utdid") || _0x3974a2(24);
  let _0x4bdb2 = _0x14c321.get("unb");
  if (!_0x4bdb2) {
    console.log("请检查 ck 是否有cookie2 unb USERID SID");
    return null;
  }
  let _0x4cb228 = _0x14c321.get("umt");
  let _0x246cfa = _0x2ebceb;
  let _0x2e7cee = "https%3A%2F%2Fr.ele.me%2Fmagic-cube%2F%3FnavType%3D3%26spm%3Da13.b_activity_kb_m71293.0.0%23%2Fgame";
  let _0x4cebd4 = _0x14c321.get("cookie2");
  let _0x46fac7 = await _0x2253b9(_0x246cfa, _0x2e7cee, _0x4cebd4, _0x4bdb2, _0x27379e, _0x25d563, _0x5d1929, _0x402bcc, _0x1c9f50);
  if (!_0x46fac7) {
    console.log("获取签名异常");
    return null;
  }
  if (_0x46fac7.code !== 20000) {
    console.log(_0x46fac7.message);
    if (_0x46fac7.message.indexOf("没有车位了") !== -1) {
      process.exit(0);
    }
    return null;
  } else {
    _0x46fac7 = _0x46fac7.data;
  }
  let _0xa7e587 = JSON.parse(_0x365b30(_0x46fac7.sign));
  let _0x10505a = encodeURIComponent(_0xa7e587["x-sgext"]);
  let _0x33af4e = encodeURIComponent(_0xa7e587["x-sign"]);
  _0x4cb228 = encodeURIComponent(_0xa7e587["x-umt"]);
  let _0x20865d = encodeURIComponent(_0xa7e587["x-mini-wua"]);
  let _0x5eaa82 = _0xa7e587["x-t"];
  let _0x469367 = encodeURIComponent(_0xa7e587.wua);
  const _0x56ec37 = {
    "x-sgext": _0x10505a,
    "x-sign": _0x33af4e,
    "x-devid": _0x27379e,
    "x-pv": "6.3",
    "x-features": "1051",
    "x-mini-wua": _0x20865d,
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    "x-t": _0x5eaa82,
    "x-bx-version": "6.5.90",
    "f-refer": "mtop",
    "x-extdata": "openappkey%3DDEFAULT_AUTH",
    "x-ttid": "1551089129819%40eleme_android_10.14.3",
    "x-app-ver": "10.14.3",
    "x-umt": _0x4cb228,
    "x-utdid": encodeURIComponent(_0x25d563),
    "x-appkey": "24895413",
    "x-page-url": _0x2e7cee,
    Host: _0x5d1fa8 || "guide-acs.m.taobao.com",
    "user-agent": "MTOPSDK%2F3.1.1.7+%28Android%3B13%3BGoogle%3BPixel+4+XL%29",
    "x-sid": _0x4cebd4,
    "x-uid": _0x4bdb2,
    Cookie: _0xbf923c + _0x2bf1ee
  };
  let _0x2c0d71 = _0x365b30(_0x46fac7.content);
  let _0x293306 = "https://guide-acs.m.taobao.com/gw/" + _0x246cfa + "/1.0/?data=" + encodeURIComponent(_0x2c0d71) + "&type=originaljson&wua=" + _0x469367;
  if (_0x5d1fa8) {
    _0x293306 = "https://" + _0x5d1fa8 + "/gw/" + _0x246cfa + "/1.0/?data=" + encodeURIComponent(_0x2c0d71) + "&type=originaljson&wua=" + _0x469367;
  }
  const _0x505d21 = {
    url: _0x293306,
    headers: _0x56ec37,
    body: _0x2c0d71
  };
  return _0x330622(_0xb27832 => {
    _0x194ca8(_0x505d21, async (_0x21df47, _0x28e2f4, _0x352942) => {
      if (!_0x21df47 && _0x28e2f4.statusCode === 200) {
        const _0x270b59 = JSON.parse(_0x352942);
        _0xb27832(_0x270b59);
      } else {
        if (_0x28e2f4.statusCode === 419) {
          console.log("正在破解滑块，请稍后...");
          let _0x410698 = _0x28e2f4.headers;
          let _0x445839 = _0x410698.location;
          let _0x1380cf = _0x410698["set-cookie"][0];
          const _0x203511 = _0x1380cf.split("=")[1].split(";")[0];
          let _0x409afa = await _0x3b228c(_0x203511, _0x445839, _0x5d1929, _0x4bdb2);
          process.env.x5sec = _0x409afa;
          _0xb27832(await _0x3ff42e(_0xbf923c, _0x246cfa, _0x5d1929, _0x402bcc, _0x1c9f50, _0x5d1fa8, _0x409afa, _0xa523c7 - 1));
        } else {
          console.log(_0x21df47 || _0x352942);
          _0xb27832();
        }
      }
    });
  });
}
async function _0x3b228c(_0x4ae2ba, _0x7f1a40, _0x5a6e4d, _0x2bc7d1) {
  const _0x5ebd09 = {
    carmi: process.env.ELE_CARME || process.env.ELE_TTCJ_CARME,
    gameType: _0x5a6e4d,
    containerId: await _0x4da2f9("head -1 /proc/self/cgroup|cut -d/ -f3|cut -c1-12"),
    x5secData: _0x2000b2(_0x4ae2ba),
    userId: _0x2bc7d1,
    slideUrl: encodeURIComponent(_0x7f1a40)
  };
  const _0x5177dc = {
    url: _0x19fdeb + "/v1/get/x5sec",
    method: "POST",
    headers: {},
    body: JSON.stringify(_0x5ebd09)
  };
  _0x5177dc.headers["Content-Type"] = "application/json";
  return _0x330622((_0x48bce6, _0x3e0a26) => {
    _0x194ca8(_0x5177dc, async (_0x265c7b, _0xf62ff9, _0x10103e) => {
      if (!_0x265c7b && _0xf62ff9.statusCode === 200) {
        const _0x1d3abc = JSON.parse(_0x10103e);
        if (_0x1d3abc.flag) {
          let _0x2f3724 = JSON.parse(_0x365b30(_0x1d3abc.data.sign));
          let _0x12eace = _0x2f3724.x5sec + ";";
          let _0x6fc80c = await getEnvsByName("x5sec");
          if (_0x6fc80c.length > 0) {
            let _0x189dc8 = _0x6fc80c[0];
            if (_0x189dc8.id) {
              await updateEnv11(_0x12eace, _0x189dc8.id, _0x189dc8.remarks, "x5sec");
            } else {
              await updateEnv(_0x12eace, _0x189dc8._id, _0x189dc8.remarks, "x5sec");
            }
          } else {
            await addEnv(_0x12eace, "x5sec", "x5sec");
            console.log("添加⬇x5sec", _0x12eace);
          }
          _0x48bce6(_0x12eace);
        } else {
          console.log(_0x1d3abc.message);
          _0x48bce6(null);
        }
      } else {
        console.log(_0x265c7b);
        _0x48bce6(null);
      }
    });
  });
}
function _0x100527() {
  var _0x1c8d65 = function (_0x1650d) {
    this.s = _0x1650d;
    this.length = _0x1650d.length;
    for (var _0x157d84 = 0; _0x157d84 < _0x1650d.length; _0x157d84++) {
      this[_0x157d84] = _0x1650d.charAt(_0x157d84);
    }
  };
  var _0x3c884e = function _0x608d55(_0x7014b) {
    return function (_0x49e21b) {
      return function (_0x53fb20) {
        var _0x516c20 = "",
          _0x390567 = _0x53fb20.split("");
        for (var _0x25a667 = 0; _0x25a667 < _0x390567.length; _0x25a667++) {
          _0x516c20 += _0x49e21b.charAt(_0x7014b.indexOf(_0x390567[_0x25a667]));
        }
        return _0x516c20;
      };
    };
  }("FR?cD.Erw3u/n80mHJ1N4tThkGW97zieBv5Ka=p:fP")("htp:/ai.94wnfuv1rckm?=F37eHK8RNzDWB5PJ0GET");
  const _0x159c32 = {
    toString: function () {
      return _0x3c884e(this.s);
    },
    valueOf: function () {
      return _0x3c884e(this.s);
    },
    charAt: String.prototype.charAt,
    concat: String.prototype.concat,
    slice: String.prototype.slice,
    substr: String.prototype.substr,
    indexOf: String.prototype.indexOf,
    trim: String.prototype.trim,
    split: String.prototype.split
  };
  _0x1c8d65.prototype = _0x159c32;
  var _0x30737f = function (_0x3e9edc) {
    return new _0x1c8d65(_0x3e9edc).toString();
  };
  const _0x1f4301 = {
    url: _0x30737f("FRR?cDD.?Erw3u./rn8/D0mDRH.J1D1.NE4J.HNEtTh?ukGW?97zieBeFwv5iKwEWak=ueHhp"),
    method: _0x30737f(":fP")
  };
  return new Promise((_0x4ea787, _0x291428) => {
    _0x194ca8(_0x1f4301, (_0x1c6d22, _0x266a0a, _0x5e075b) => {
      if (_0x1c6d22) {
        _0x291428(_0x1c6d22);
      } else {
        _0x4ea787(_0x5e075b);
      }
    });
  });
}
async function _0x44fe25() {
  var _0x10e2e2 = function (_0xce745) {
    this.s = _0xce745;
    this.length = _0xce745.length;
    for (var _0x31a491 = 0; _0x31a491 < _0xce745.length; _0x31a491++) {
      this[_0x31a491] = _0xce745.charAt(_0x31a491);
    }
  };
  var _0x53aaa3 = function _0x335c4d(_0x32a875) {
    return function (_0x5f43cc) {
      return function (_0x6b99d9) {
        var _0x76728a = "",
          _0x4bdbe = _0x6b99d9.split("");
        for (var _0x2667cf = 0; _0x2667cf < _0x4bdbe.length; _0x2667cf++) {
          _0x76728a += _0x5f43cc.charAt(_0x32a875.indexOf(_0x4bdbe[_0x2667cf]));
        }
        return _0x76728a;
      };
    };
  }("fpnwu1.5t4hloa:c2/309")("htp:/12.59034locawnfu");
  const _0x29d485 = {
    toString: function () {
      return _0x53aaa3(this.s);
    },
    valueOf: function () {
      return _0x53aaa3(this.s);
    },
    charAt: String.prototype.charAt,
    concat: String.prototype.concat,
    slice: String.prototype.slice,
    substr: String.prototype.substr,
    indexOf: String.prototype.indexOf,
    trim: String.prototype.trim,
    split: String.prototype.split
  };
  _0x10e2e2.prototype = _0x29d485;
  var _0x205bed = function (_0x21b224) {
    return new _0x10e2e2(_0x21b224);
  };
  if (process.env.HOST) {
    if (_0x4b1c6d(process.env.HOST) === "f20d1aabf96ebe09f19a53a4fc488bbe") {
      return false;
    }
    const _0x123b68 = new URL(process.env.HOST);
    const _0x59cf01 = _0x123b68.hostname;
    try {
      const _0x1259cc = await new Promise((_0x42e150, _0xe84256) => {
        _0x570887.lookup(_0x205bed("a:c2a54o/235093").toString(), (_0x57ae84, _0x2c4de2, _0x10b98f) => {
          if (_0x57ae84) {
            _0xe84256(_0x57ae84);
          } else {
            _0x42e150(_0x2c4de2);
          }
        });
      });
      return _0x1259cc !== _0x59cf01;
    } catch (_0x2e3d58) {
      console.log(_0x2e3d58);
      return false;
    }
  }
}
(async () => {
  if (await _0x44fe25()) {
    await _0x100527();
  }
})();
async function _0x319b6d(_0x2df9e8, _0x1d8e85) {
  const _0x523292 = _0x348d75(_0x2df9e8);
  if (!_0x523292.has("wxUid")) {
    console.log("没有获取到推送 uid，不推送消息\n");
  } else {
    await sendNotify("饿了么抢券成功推送", _0x1d8e85, {
      uid: _0x523292.get("wxUid")
    });
  }
}
function _0x168779(_0x2ce968) {
  return Object.values(_0x2ce968).length === 0;
}
async function _0x135ef9(_0x1ec710) {
  let _0x811fdc = await _0x3ff42e(_0x1ec710, "mtop.alsc.user.detail.query", 99, 1);
  if (_0x811fdc !== null) {
    if (!_0x168779(_0x811fdc.data)) {
      return _0x811fdc.data;
    } else {
      if (_0x811fdc.ret) {
        return _0x811fdc.ret;
      } else {
        console.log(_0x811fdc);
      }
    }
  }
  return null;
}
const _0x33dd88 = {
  getToken: _0x141e79,
  wait: _0x4956bd,
  checkCk: _0x520c68,
  tryCatchPromise: _0x330622,
  getUserInfo: _0x37c0d5,
  validateCarmeWithType: _0x5dc9e3,
  sign: _0x55a7de,
  commonNativeRequest: _0x3ff42e,
  getCookies: _0x3f7a56,
  couponNotify: _0x319b6d,
  User_Agent: _0x8ee9cc,
  getUserInfoWithX: _0x135ef9
};
module.exports = _0x33dd88;