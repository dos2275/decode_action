//Sat Aug 24 2024 14:46:29 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
    getEnvsByName,
    DisableCk,
    EnableCk,
    updateEnv,
    updateEnv11,
    getEnvByUserId
  } = require("./ql"),
  {
    wait,
    checkCk,
    validateCarmeWithType,
    invalidCookieNotify,
    getUserInfo,
    runOne,
    getCookieMap
  } = require("./common.js"),
  _0x11f78e = require("moment");
function _0x543ec4(_0x607904, _0x3b00ff) {
  return Math.floor(Math.random() * (_0x3b00ff - _0x607904 + 1) + _0x607904);
}
function _0x389941(_0x4d910c) {
  let _0x27d193 = "";
  for (let [_0x1c3fc0, _0x31815a] of _0x4d910c) {
    _0x27d193 += encodeURIComponent(_0x1c3fc0) + "=" + encodeURIComponent(_0x31815a) + ";";
  }
  return _0x27d193;
}
async function _0x179175(_0x531c09, _0x10fbee, _0x5db892) {
  let _0x117684 = await runOne(_0x10fbee, _0x5db892);
  if (_0x117684 && _0x117684.data) {
    let _0x504559 = _0x117684.data;
    if (_0x504559.code === 3000) {
      let _0x9bb21e = JSON.parse(_0x504559.returnValue.data);
      const _0x39edb9 = JSON.parse(_0x9bb21e.loginServiceExt.eleExt),
        _0xa103ce = _0x39edb9.find(_0x4395d7 => _0x4395d7.name === "SID"),
        _0x382570 = _0xa103ce ? _0xa103ce.value : null,
        _0x30ec11 = _0x9bb21e.cookies.find(_0x4e0b07 => _0x4e0b07.startsWith("cookie2")).split(";")[0].split("=")[1],
        _0x45ac34 = _0x9bb21e.cookies.find(_0x125de9 => _0x125de9.startsWith("sgcookie")).split(";")[0].split("=")[1],
        _0x2c4479 = _0x9bb21e.cookies.find(_0x1d19f8 => _0x1d19f8.startsWith("unb")).split(";")[0].split("=")[1],
        _0x216dd6 = _0x9bb21e.loginServiceExt.localId,
        _0x5b8456 = "cookie2=" + _0x30ec11 + ";sgcookie=" + _0x45ac34 + ";unb=" + _0x2c4479 + ";USERID=" + _0x216dd6 + ";SID=" + _0x382570 + ";",
        _0x5a5be0 = _0x9bb21e.expires,
        _0x54e60c = _0x9bb21e.phone,
        _0x6ddcca = _0x54e60c.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2"),
        _0x3a3630 = _0x11f78e(_0x5a5be0 * 1000).format("YYYY-MM-DD HH:mm:ss");
      let _0x220129 = getCookieMap(_0x10fbee),
        _0x1cf671 = JSON.parse(_0x504559.returnValue.extMap.eleExt);
      for (let _0x1728e9 = 0; _0x1728e9 < _0x1cf671.length; _0x1728e9++) {
        let _0x9076e = _0x1cf671[_0x1728e9];
        if (_0x9076e.name === "SID") {
          _0x220129.SID = _0x9076e.value;
          break;
        }
      }
      let _0x29a08a = await runOne(_0x10fbee, _0x220129.get("SID"));
      if (!_0x29a08a) {
        return;
      }
      _0x220129.cookie2 = _0x504559.returnValue.sid;
      let _0x22c292 = _0x389941(_0x220129),
        _0x2df63c = _0x22c292.match(/token=.*$/);
      if (_0x2df63c) {
        _0x22c292 = _0x5b8456 + _0x2df63c[0];
      } else {
        _0x22c292 = _0x5b8456;
        console.log(_0x22c292);
      }
      if (_0x531c09.id) {
        await updateEnv11(_0x22c292, _0x531c09.id, _0x531c09.remarks);
      } else {
        await updateEnv(_0x22c292, _0x531c09._id, _0x531c09.remarks);
      }
      let _0x3932ee = _0x220129.get("USERID"),
        _0x53fb0e = await getEnvByUserId(_0x3932ee);
      if (_0x53fb0e) {
        console.log("检测到 elmqqck，将进行同步刷新");
        if (_0x53fb0e.id) {
          await updateEnv11(_0x22c292, _0x53fb0e.id, _0x53fb0e.remarks, "elmqqck");
        } else {
          await updateEnv(_0x22c292, _0x53fb0e._id, _0x53fb0e.remarks, "elmqqck");
        }
      }
      let _0x5e8a9b = _0x6ddcca + "刷新成功，ck 有效期为：" + _0x3a3630;
      console.log(_0x5e8a9b);
      return _0x5e8a9b;
    } else {
      _0x504559.message ? console.log(_0x504559.message) : console.log(_0x117684.ret[0]);
      return null;
    }
  }
}
(async function _0x1f3fe2() {
  const _0x24f9a4 = process.env.ELE_CARME;
  await validateCarmeWithType(_0x24f9a4, 1);
  const _0x405b3e = await getEnvsByName("elmck");
  for (let _0x364948 = 0; _0x364948 < _0x405b3e.length; _0x364948++) {
    let _0x8a18af = _0x405b3e[_0x364948].value;
    if (!_0x8a18af) {
      console.log(" ❌无效用户信息, 请重新获取ck");
    } else {
      try {
        var _0xf7adba = 0;
        _0x405b3e[_0x364948]._id && (_0xf7adba = _0x405b3e[_0x364948]._id);
        if (_0x405b3e[_0x364948].id) {
          _0xf7adba = _0x405b3e[_0x364948].id;
        }
        _0x8a18af = _0x8a18af.replace(/\s/g, "");
        let _0x5251aa = await checkCk(_0x8a18af, _0x364948);
        if (!_0x5251aa) {
          let _0x8d76b1 = await _0x179175(_0x405b3e[_0x364948], _0x8a18af);
          if (_0x8d76b1 && _0x8d76b1.indexOf("刷新成功") !== -1) {
            await EnableCk(_0xf7adba);
            console.log("第", _0x364948 + 1, "账号正常😁\n");
          } else {
            const _0x193762 = await EnableCk(_0xf7adba);
            _0x193762.code === 200 ? console.log("第", _0x364948 + 1, "账号失效！") : console.log("第", _0x364948 + 1, "账号失效！请重新登录！！！😭");
            await invalidCookieNotify(_0x8a18af, _0x405b3e[_0x364948].remarks);
          }
        } else {
          let _0xeeda45 = await getUserInfo(_0x8a18af);
          if (!_0xeeda45.username) {
            let _0x4fe6d6 = await _0x179175(_0x405b3e[_0x364948], _0x8a18af);
            if (_0x4fe6d6 && _0x4fe6d6.indexOf("刷新成功") !== -1) {
              await EnableCk(_0xf7adba);
              console.log("第", _0x364948 + 1, "账号正常😁\n");
            } else {
              const _0x1d0d52 = await EnableCk(_0xf7adba);
              if (_0x1d0d52.code === 200) {
                console.log("第", _0x364948 + 1, "账号失效！");
              } else {
                console.log("第", _0x364948 + 1, "账号失效！请重新登录！！！😭");
              }
            }
            await invalidCookieNotify(_0x8a18af, _0x405b3e[_0x364948].remarks);
          } else {
            await _0x179175(_0x405b3e[_0x364948], _0x8a18af, getCookieMap(_0x8a18af).get("SID"));
            await EnableCk(_0xf7adba);
            console.log("第", _0x364948 + 1, "账号正常🎉🎉\n");
          }
        }
      } catch (_0x5320a3) {
        console.log(_0x5320a3);
      }
    }
    await wait(_0x543ec4(2, 3));
  }
  process.exit(0);
})();
function Env(_0x3a8274, _0x2e8661) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x37a940 {
    constructor(_0x2e6fa5) {
      this.env = _0x2e6fa5;
    }
    send(_0x195010, _0xb1ed96 = "GET") {
      _0x195010 = "string" == typeof _0x195010 ? {
        url: _0x195010
      } : _0x195010;
      let _0x33456b = this.get;
      "POST" === _0xb1ed96 && (_0x33456b = this.post);
      return new Promise((_0x93d0eb, _0x1c112a) => {
        _0x33456b.call(this, _0x195010, (_0x5ae8d7, _0x146d97, _0x225a02) => {
          _0x5ae8d7 ? _0x1c112a(_0x5ae8d7) : _0x93d0eb(_0x146d97);
        });
      });
    }
    get(_0x5c088f) {
      return this.send.call(this.env, _0x5c088f);
    }
    post(_0x3a46c3) {
      return this.send.call(this.env, _0x3a46c3, "POST");
    }
  }
  return new class {
    constructor(_0x47eaac, _0x4e129d) {
      this.name = _0x47eaac;
      this.http = new _0x37a940(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x4e129d);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(_0x332f7a, _0x1da91c = null) {
      try {
        return JSON.parse(_0x332f7a);
      } catch {
        return _0x1da91c;
      }
    }
    toStr(_0x3b13dc, _0x202734 = null) {
      try {
        return JSON.stringify(_0x3b13dc);
      } catch {
        return _0x202734;
      }
    }
    getjson(_0x5f3d6d, _0x38bc98) {
      let _0x39b7c5 = _0x38bc98;
      const _0x4eb938 = this.getdata(_0x5f3d6d);
      if (_0x4eb938) {
        try {
          _0x39b7c5 = JSON.parse(this.getdata(_0x5f3d6d));
        } catch {}
      }
      return _0x39b7c5;
    }
    setjson(_0x5c5b24, _0x3a43f4) {
      try {
        return this.setdata(JSON.stringify(_0x5c5b24), _0x3a43f4);
      } catch {
        return !1;
      }
    }
    getScript(_0x1191e) {
      return new Promise(_0x48ee9f => {
        const _0x1b451e = {
          url: _0x1191e
        };
        this.get(_0x1b451e, (_0x38a130, _0x4c52bb, _0x3ce397) => _0x48ee9f(_0x3ce397));
      });
    }
    runScript(_0x38192f, _0x2dc6a0) {
      return new Promise(_0x296214 => {
        let _0x164059 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x164059 = _0x164059 ? _0x164059.replace(/\n/g, "").trim() : _0x164059;
        let _0x168280 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x168280 = _0x168280 ? 1 * _0x168280 : 20;
        _0x168280 = _0x2dc6a0 && _0x2dc6a0.timeout ? _0x2dc6a0.timeout : _0x168280;
        const _0x398a28 = {
          script_text: _0x38192f,
          mock_type: "cron",
          timeout: _0x168280
        };
        const [_0x3b95a6, _0x52aed8] = _0x164059.split("@"),
          _0x3133bf = {
            url: "http://" + _0x52aed8 + "/v1/scripting/evaluate",
            body: _0x398a28,
            headers: {
              "X-Key": _0x3b95a6,
              Accept: "*/*"
            }
          };
        this.post(_0x3133bf, (_0x2157a4, _0x37252b, _0x227f4c) => _0x296214(_0x227f4c));
      }).catch(_0x5a8474 => this.logErr(_0x5a8474));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x954d67 = this.path.resolve(this.dataFile),
          _0x2e7da8 = this.path.resolve(process.cwd(), this.dataFile),
          _0x24ca6f = this.fs.existsSync(_0x954d67),
          _0x2306ee = !_0x24ca6f && this.fs.existsSync(_0x2e7da8);
        if (!_0x24ca6f && !_0x2306ee) {
          return {};
        }
        {
          const _0x548b19 = _0x24ca6f ? _0x954d67 : _0x2e7da8;
          try {
            return JSON.parse(this.fs.readFileSync(_0x548b19));
          } catch (_0x39dbd1) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x20a476 = this.path.resolve(this.dataFile),
          _0xf870d0 = this.path.resolve(process.cwd(), this.dataFile),
          _0x4e125b = this.fs.existsSync(_0x20a476),
          _0x2f9335 = !_0x4e125b && this.fs.existsSync(_0xf870d0),
          _0x4c22b6 = JSON.stringify(this.data);
        _0x4e125b ? this.fs.writeFileSync(_0x20a476, _0x4c22b6) : _0x2f9335 ? this.fs.writeFileSync(_0xf870d0, _0x4c22b6) : this.fs.writeFileSync(_0x20a476, _0x4c22b6);
      }
    }
    lodash_get(_0x47c671, _0x27dd5f, _0x1ee69f) {
      const _0x17b7b3 = _0x27dd5f.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x13119e = _0x47c671;
      for (const _0x4210cf of _0x17b7b3) if (_0x13119e = Object(_0x13119e)[_0x4210cf], void 0 === _0x13119e) {
        return _0x1ee69f;
      }
      return _0x13119e;
    }
    lodash_set(_0xec75b7, _0x39c44a, _0x3ceb76) {
      return Object(_0xec75b7) !== _0xec75b7 ? _0xec75b7 : (Array.isArray(_0x39c44a) || (_0x39c44a = _0x39c44a.toString().match(/[^.[\]]+/g) || []), _0x39c44a.slice(0, -1).reduce((_0x1c9900, _0x1aad0b, _0x480d6d) => Object(_0x1c9900[_0x1aad0b]) === _0x1c9900[_0x1aad0b] ? _0x1c9900[_0x1aad0b] : _0x1c9900[_0x1aad0b] = Math.abs(_0x39c44a[_0x480d6d + 1]) >> 0 == +_0x39c44a[_0x480d6d + 1] ? [] : {}, _0xec75b7)[_0x39c44a[_0x39c44a.length - 1]] = _0x3ceb76, _0xec75b7);
    }
    getdata(_0x5eb9f4) {
      let _0x26e500 = this.getval(_0x5eb9f4);
      if (/^@/.test(_0x5eb9f4)) {
        const [, _0x39ffe1, _0x406aa6] = /^@(.*?)\.(.*?)$/.exec(_0x5eb9f4),
          _0x5aca4c = _0x39ffe1 ? this.getval(_0x39ffe1) : "";
        if (_0x5aca4c) {
          try {
            const _0x2c92c6 = JSON.parse(_0x5aca4c);
            _0x26e500 = _0x2c92c6 ? this.lodash_get(_0x2c92c6, _0x406aa6, "") : _0x26e500;
          } catch (_0x3162c6) {
            _0x26e500 = "";
          }
        }
      }
      return _0x26e500;
    }
    setdata(_0x1c9a76, _0x13d04b) {
      let _0x3a66ec = !1;
      if (/^@/.test(_0x13d04b)) {
        const [, _0x2896ca, _0x47e2b6] = /^@(.*?)\.(.*?)$/.exec(_0x13d04b),
          _0x428d40 = this.getval(_0x2896ca),
          _0x27f66e = _0x2896ca ? "null" === _0x428d40 ? null : _0x428d40 || "{}" : "{}";
        try {
          const _0x23fc79 = JSON.parse(_0x27f66e);
          this.lodash_set(_0x23fc79, _0x47e2b6, _0x1c9a76);
          _0x3a66ec = this.setval(JSON.stringify(_0x23fc79), _0x2896ca);
        } catch (_0x3c5a4d) {
          const _0x3d41b7 = {};
          this.lodash_set(_0x3d41b7, _0x47e2b6, _0x1c9a76);
          _0x3a66ec = this.setval(JSON.stringify(_0x3d41b7), _0x2896ca);
        }
      } else {
        _0x3a66ec = this.setval(_0x1c9a76, _0x13d04b);
      }
      return _0x3a66ec;
    }
    getval(_0x51902e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x51902e) : this.isQuanX() ? $prefs.valueForKey(_0x51902e) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x51902e]) : this.data && this.data[_0x51902e] || null;
    }
    setval(_0x321f39, _0x556d68) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x321f39, _0x556d68) : this.isQuanX() ? $prefs.setValueForKey(_0x321f39, _0x556d68) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x556d68] = _0x321f39, this.writedata(), !0) : this.data && this.data[_0x556d68] || null;
    }
    initGotEnv(_0x245bc7) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x245bc7 && (_0x245bc7.headers = _0x245bc7.headers ? _0x245bc7.headers : {}, void 0 === _0x245bc7.headers.Cookie && void 0 === _0x245bc7.cookieJar && (_0x245bc7.cookieJar = this.ckjar));
    }
    get(_0x57ecf2, _0x481501 = () => {}) {
      _0x57ecf2.headers && (delete _0x57ecf2.headers["Content-Type"], delete _0x57ecf2.headers["Content-Length"]);
      const _0x136e10 = {
        "X-Surge-Skip-Scripting": !1
      };
      const _0x340bd8 = {
        hints: !1
      };
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x57ecf2.headers = _0x57ecf2.headers || {}, Object.assign(_0x57ecf2.headers, _0x136e10)), $httpClient.get(_0x57ecf2, (_0x4c4201, _0x47e805, _0x126838) => {
        !_0x4c4201 && _0x47e805 && (_0x47e805.body = _0x126838, _0x47e805.statusCode = _0x47e805.status);
        _0x481501(_0x4c4201, _0x47e805, _0x126838);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x57ecf2.opts = _0x57ecf2.opts || {}, Object.assign(_0x57ecf2.opts, _0x340bd8)), $task.fetch(_0x57ecf2).then(_0x3520fb => {
        const {
            statusCode: _0x1c0a18,
            statusCode: _0x3d7534,
            headers: _0x5ef5d2,
            body: _0x346693
          } = _0x3520fb,
          _0x1e2ec2 = {
            status: _0x1c0a18,
            statusCode: _0x3d7534,
            headers: _0x5ef5d2,
            body: _0x346693
          };
        _0x481501(null, _0x1e2ec2, _0x346693);
      }, _0x1b59a2 => _0x481501(_0x1b59a2))) : this.isNode() && (this.initGotEnv(_0x57ecf2), this.got(_0x57ecf2).on("redirect", (_0xfb01a5, _0x42ba4a) => {
        try {
          if (_0xfb01a5.headers["set-cookie"]) {
            const _0x4c75c9 = _0xfb01a5.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x4c75c9 && this.ckjar.setCookieSync(_0x4c75c9, null);
            _0x42ba4a.cookieJar = this.ckjar;
          }
        } catch (_0x178d80) {
          this.logErr(_0x178d80);
        }
      }).then(_0x2108d2 => {
        const {
            statusCode: _0x147721,
            statusCode: _0x36a0d0,
            headers: _0x28ae52,
            body: _0x45abc9
          } = _0x2108d2,
          _0x2d28ed = {
            status: _0x147721,
            statusCode: _0x36a0d0,
            headers: _0x28ae52,
            body: _0x45abc9
          };
        _0x481501(null, _0x2d28ed, _0x45abc9);
      }, _0x26525e => {
        const {
          message: _0x2fc65f,
          response: _0x21dc29
        } = _0x26525e;
        _0x481501(_0x2fc65f, _0x21dc29, _0x21dc29 && _0x21dc29.body);
      }));
    }
    post(_0x4d3a7b, _0x53f6bf = () => {}) {
      if (_0x4d3a7b.body && _0x4d3a7b.headers && !_0x4d3a7b.headers["Content-Type"] && (_0x4d3a7b.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x4d3a7b.headers && delete _0x4d3a7b.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        const _0x3ad60f = {
          "X-Surge-Skip-Scripting": !1
        };
        this.isSurge() && this.isNeedRewrite && (_0x4d3a7b.headers = _0x4d3a7b.headers || {}, Object.assign(_0x4d3a7b.headers, _0x3ad60f));
        $httpClient.post(_0x4d3a7b, (_0xf40a17, _0x303bda, _0x31f6c0) => {
          !_0xf40a17 && _0x303bda && (_0x303bda.body = _0x31f6c0, _0x303bda.statusCode = _0x303bda.status);
          _0x53f6bf(_0xf40a17, _0x303bda, _0x31f6c0);
        });
      } else {
        if (this.isQuanX()) {
          _0x4d3a7b.method = "POST";
          const _0x27e938 = {
            hints: !1
          };
          this.isNeedRewrite && (_0x4d3a7b.opts = _0x4d3a7b.opts || {}, Object.assign(_0x4d3a7b.opts, _0x27e938));
          $task.fetch(_0x4d3a7b).then(_0x4eeb10 => {
            const {
                statusCode: _0x1306c5,
                statusCode: _0x7708f4,
                headers: _0xfeae3d,
                body: _0x579135
              } = _0x4eeb10,
              _0x13712b = {
                status: _0x1306c5,
                statusCode: _0x7708f4,
                headers: _0xfeae3d,
                body: _0x579135
              };
            _0x53f6bf(null, _0x13712b, _0x579135);
          }, _0x7f73ad => _0x53f6bf(_0x7f73ad));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x4d3a7b);
            const {
              url: _0x15eef1,
              ..._0x2acdb1
            } = _0x4d3a7b;
            this.got.post(_0x15eef1, _0x2acdb1).then(_0x4363ca => {
              const {
                  statusCode: _0xd4f1b1,
                  statusCode: _0x2e6a4e,
                  headers: _0x187d2d,
                  body: _0x24743d
                } = _0x4363ca,
                _0x4405ca = {
                  status: _0xd4f1b1,
                  statusCode: _0x2e6a4e,
                  headers: _0x187d2d,
                  body: _0x24743d
                };
              _0x53f6bf(null, _0x4405ca, _0x24743d);
            }, _0x35cd5a => {
              const {
                message: _0x16a7d0,
                response: _0x1b075d
              } = _0x35cd5a;
              _0x53f6bf(_0x16a7d0, _0x1b075d, _0x1b075d && _0x1b075d.body);
            });
          }
        }
      }
    }
    time(_0x32b2eb, _0x1b3f39 = null) {
      const _0x59647c = _0x1b3f39 ? new Date(_0x1b3f39) : new Date(),
        _0x1eec4c = {
          "M+": _0x59647c.getMonth() + 1,
          "d+": _0x59647c.getDate(),
          "H+": _0x59647c.getHours(),
          "m+": _0x59647c.getMinutes(),
          "s+": _0x59647c.getSeconds(),
          "q+": Math.floor((_0x59647c.getMonth() + 3) / 3),
          S: _0x59647c.getMilliseconds()
        };
      /(y+)/.test(_0x32b2eb) && (_0x32b2eb = _0x32b2eb.replace(RegExp.$1, (_0x59647c.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x1ca71d in _0x1eec4c) new RegExp("(" + _0x1ca71d + ")").test(_0x32b2eb) && (_0x32b2eb = _0x32b2eb.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x1eec4c[_0x1ca71d] : ("00" + _0x1eec4c[_0x1ca71d]).substr(("" + _0x1eec4c[_0x1ca71d]).length)));
      return _0x32b2eb;
    }
    msg(_0x36e639 = _0x3a8274, _0x564402 = "", _0x4512f1 = "", _0x39e6ac) {
      const _0x2330b5 = _0x177278 => {
        if (!_0x177278) {
          return _0x177278;
        }
        if ("string" == typeof _0x177278) {
          return this.isLoon() ? _0x177278 : this.isQuanX() ? {
            "open-url": _0x177278
          } : this.isSurge() ? {
            url: _0x177278
          } : void 0;
        }
        if ("object" == typeof _0x177278) {
          if (this.isLoon()) {
            let _0xb5da63 = _0x177278.openUrl || _0x177278.url || _0x177278["open-url"],
              _0x4d2f77 = _0x177278.mediaUrl || _0x177278["media-url"];
            const _0x150483 = {
              openUrl: _0xb5da63,
              mediaUrl: _0x4d2f77
            };
            return _0x150483;
          }
          if (this.isQuanX()) {
            let _0x2b58b8 = _0x177278["open-url"] || _0x177278.url || _0x177278.openUrl,
              _0x25d356 = _0x177278["media-url"] || _0x177278.mediaUrl;
            const _0x269ec4 = {
              "open-url": _0x2b58b8,
              "media-url": _0x25d356
            };
            return _0x269ec4;
          }
          if (this.isSurge()) {
            let _0x593d2f = _0x177278.url || _0x177278.openUrl || _0x177278["open-url"];
            const _0x4e0957 = {
              url: _0x593d2f
            };
            return _0x4e0957;
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x36e639, _0x564402, _0x4512f1, _0x2330b5(_0x39e6ac)) : this.isQuanX() && $notify(_0x36e639, _0x564402, _0x4512f1, _0x2330b5(_0x39e6ac))), !this.isMuteLog) {
        let _0x46a0b = ["", "==============📣系统通知📣=============="];
        _0x46a0b.push(_0x36e639);
        _0x564402 && _0x46a0b.push(_0x564402);
        _0x4512f1 && _0x46a0b.push(_0x4512f1);
        console.log(_0x46a0b.join("\n"));
        this.logs = this.logs.concat(_0x46a0b);
      }
    }
    log(..._0x691d9e) {
      _0x691d9e.length > 0 && (this.logs = [...this.logs, ..._0x691d9e]);
      console.log(_0x691d9e.join(this.logSeparator));
    }
    logErr(_0x2cd6d3, _0x499fd8) {
      const _0x34ce8f = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x34ce8f ? this.log("", "❗️" + this.name + ", 错误!", _0x2cd6d3.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x2cd6d3);
    }
    wait(_0x5e6e16) {
      return new Promise(_0x40cf61 => setTimeout(_0x40cf61, _0x5e6e16));
    }
    done(_0x257ee3 = {}) {
      const _0x18d434 = new Date().getTime(),
        _0x20d0ea = (_0x18d434 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x20d0ea + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x257ee3);
    }
  }(_0x3a8274, _0x2e8661);
}