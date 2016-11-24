/**
 * Created by guangpeng.zhao on 2016/4/20.
 * js in zapya
 */

function Zapya(){}

Zapya.isValidUser = function(){
    var result = false;
    if(typeof _myJSface  != "undefined" && _myJSface!=null){
        result = true;
    }
    return result;
}

Zapya.getToken=function(){
    var token =null;
    if('getToken' in _myJSface){
        token =_myJSface.getToken();
    }
    return token;
}
Zapya.getUUID=function(){
    var uuid =null;
      if('getUUID' in _myJSface){
          uuid =_myJSface.getUUID();
      }
    return uuid;
}

Zapya.getUserId=function(){
    var userId =null;
      if('getUserId' in _myJSface){
          userId =_myJSface.getUserId();
      }
    return userId;
}
Zapya.getChannel=function(){
    var channel =null;
      if('getChannel' in _myJSface){
          channel =_myJSface.getChannel();
      }
    return channel;
}

Zapya.close=function(){
      if('close' in _myJSface){
          _myJSface.close();
      }
}

Zapya.isLogin=function(){//null false true
    var result =null;
      if('isLogin' in _myJSface){
          result =_myJSface.isLogin();
      }
    return result;
}

Zapya.login=function(){
      if('login' in _myJSface){
          _myJSface.login();
      }
}

Zapya.isVipUser = function(){
    var result = false;
    if(typeof _vipJSface  != "undefined" && _vipJSface!=null){
        result = true;
    }
    return result;
}
Zapya.download=function(type, fileName, url) {
    if ('download' in _vipJSface) {
         _vipJSface.download(type, fileName, url);
    }
}

Zapya.download2=function(type, fileName, url, tag) {
    if ('download2' in _vipJSface) {
         _vipJSface.download2(type, fileName, url,tag);
    }
}
Zapya.download3=function(type, fileName, url,tag,pkg) {
    if ('download3' in _vipJSface) {
         _vipJSface.download3(type, fileName, url,tag,pkg);
    }
}
Zapya.isNeedJump = function(){
   if ('isNeedJump' in _vipJSface) {
        return _vipJSface.isNeedJump();
   } 
   return false;
}
Zapya.logEvent=function(code, memo) {
    if ('logEvent' in _vipJSface) {
         _vipJSface.logEvent(code,memo);
    }
}
Zapya.transfer = function(pkg){
    if ('transfer' in _vipJSface) {
         _vipJSface.transfer(pkg);
    }
}
Zapya.startUsage = function(num){
    if('startUsage' in _vipJSface){
        _vipJSface.startUsage(num);
    }
}
Zapya.getFrom = function(){
    var getFromApp = null;
    if('getFrom' in _vipJSface){
        getFromApp = _vipJSface.getFrom();
    }
    return getFrom;  
}
Zapya.getVersionCode=function(){
    var versionCode =null;
      if('getVersionCode' in _myJSface){
          versionCode =_myJSface.getVersionCode();
      }
    return versionCode;
}

Zapya.getState=function(url) {
    var state = null;
    if ('getState' in _vipJSface) {
        state = _vipJSface.getState(url);
    }
    return state;
}
Zapya.getProgress=function(url) {
    var process = null;
    if ('getProgress' in _vipJSface) {
        process = _vipJSface.getProgress(url);
    }
    return process;
}

Zapya.pause=function(url) {
    if ('pause' in _vipJSface) {
         _vipJSface.pause(url);
    }
}

Zapya.resume=function(url) {
    if ('resume' in _vipJSface) {
         _vipJSface.resume(url);
    }
}

Zapya.openApp=function(pkg) {
    if ('openApp' in _vipJSface) {
         _vipJSface.openApp(pkg);
    }
}

Zapya.isAppOpened=function(pkg) {
    var isOpened = null;
    if ('isAppOpened' in _vipJSface) {
        isOpened = _vipJSface.isAppOpened(pkg);
    }
    return isOpened;
}

Zapya.installApp=function(url) {
    if ('installApp' in _vipJSface) {
         _vipJSface.installApp(url);
    }
}

Zapya.isAppInstalled=function(pkg) {
    var isInstalled = null;
    if ('isAppInstalled' in _vipJSface) {
        isInstalled = _vipJSface.isAppInstalled(pkg);
    }
    return isInstalled;
}

Zapya.getMd5=function(pkg){
    var md5 = null;
    if ('getMd5' in _vipJSface) {
        md5 = _vipJSface.getMd5(pkg);
    }
    return md5;
}

function logs(aid,chmod){
    var userid = null;
    var uuid=null;
    if(Zapya.isValidUser()){
        userid = Zapya.getUserId();
        uuid = Zapya.getUUID();
    }
    var baseUrl='http://lottery.kuaiya.cn/log/action?ac='+chmod+'&aid='+aid;
    baseUrl+='&uuid='+uuid+'&userid='+userid;
    $.get(baseUrl,function(){});
}

Zapya.actionPush=function(aid, chmod){
    setTimeout(logs(aid,chmod),1000);
}

Zapya.opMsgBox = function (options){
    options          = options || {};
    options.duration = options.duration || 2000;
    options.bgColor  = options.bgColor || '';
    options.fontColor= options.fontColor || '';
    options.strText  = options.strText || '';
    options.bDie     = options.bDie || false;
    var msgBox = document.createElement('div'); 
    var msgText = document.createElement('span');
    msgBox.id  = 'msgbox';
    msgText.id = 'msgtext';

    msgText.className = 'fadeIn';
    msgText.innerHTML = options.strText;
    msgText.style.color = options.fontColor;
    msgText.style.backgroundColor = options.bgColor;
    msgBox.appendChild(msgText);
    document.body.appendChild(msgBox); 
    
    if(options.bDie){
      document.onclick = function(){
        msgBox.parentNode.removeChild(msgBox); 
      };
    }else{
      setTimeout(function(){
        msgBox.parentNode.removeChild(msgBox); 
      },options.duration)
    }
};
Zapya.addInstallGuid = function() {
    $('body').append(
        '<div class="install_guid">' 
            +'<img id="install_img" src="./css/img/zapya_share_app_header.png" alt="">'  
            +'<a id="install_btn" href="http://www.kuaiya.cn/i">用快牙立即参加</a>'
        +'</div>'
    )
    $('#show_box').css("margin-bottom","1.4rem;")
};
Zapya.is_wx = function(){
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
        return true;
    } 
    return false;
}; 