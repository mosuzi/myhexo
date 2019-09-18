
/******/
(function(modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/
      if (installedModules[moduleId])
      /******/
        return installedModules[moduleId].exports;
      /******/
      /******/ // Create a new module (and put it into the cache)
      /******/
      var module = installedModules[moduleId] = {
        /******/
        exports: {},
        /******/
        id: moduleId,
        /******/
        loaded: false
          /******/
      };
      /******/
      /******/ // Execute the module function
      /******/
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /******/
      /******/ // Flag the module as loaded
      /******/
      module.loaded = true;
      /******/
      /******/ // Return the exports of the module
      /******/
      return module.exports;
      /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "/dist/";
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(0);
    /******/
  })
  /************************************************************************/
  /******/
  ([
    /* 0 */
    /***/
    function(module, exports, __webpack_require__) {
  
      'use strict';
  
      __webpack_require__(1);
  
      var _view = __webpack_require__(2);
  
      var _view2 = _interopRequireDefault(_view);
  
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
  
      /**
       * @name impush-client 
       * @description 这个项目让我发家致富…
       * @date 2016-12-1
       */
  
      var _collection = [];
      var _count = 0;
      var searchData;
  
      function addMask(elem) {
        var rect = elem.getBoundingClientRect();
        var style = getComputedStyle(elem, null);
  
        var mask = document.createElement('i');
        mask.className = 'icon-film';
        mask.style.color = '#fff';
        mask.style.fontSize = '26px';
        mask.style.position = 'absolute';
        mask.style.right = '10px';
        mask.style.bottom = '10px';
        mask.style.zIndex = 1;
        elem.parentNode.appendChild(mask);
      }
  
      var createVideoIncon = function createVideoIncon() {
        var $videoImg = document.querySelectorAll('.thumb a[data-type="video"]');
        for (var i = 0, len = $videoImg.length; i < len; i++) {
          addMask($videoImg[i]);
        }
      };
      var render = function render(res) {
        var ulTmpl = "";
        for (var j = 0, len2 = res.list.length; j < len2; j++) {
          var data = res.list[j].arr;
          var liTmpl = "";
          for (var i = 0, len = data.link.length; i < len; i++) {
            var minSrc = '/blog/album/min_photos/' + data.link[i];
            var src = '/blog/album/photos/' + data.link[i];
            var type = data.type[i];
            var target = src + (type === 'video' ? '.mp4' : '.jpg');
            src += '';
  
            liTmpl += '<figure class="thumb" itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject">\
                  <a href="' + src + '" itemprop="contentUrl" data-size="1080x1080" data-type="' + type + '" data-target="' + src + '">\
                    <img class="reward-img" data-type="' + type + '" data-src="' + src + '" src="./assets/empty.jpeg" itemprop="thumbnail" onload="lzld(this)">\
                  </a>\
                  <figcaption style="display:none" itemprop="caption description">' + data.text[i] + '</figcaption>\
              </figure>';
          }
          ulTmpl = ulTmpl + '<section class="archives album"><h1 class="year">' + data.year + '年<em>' + data.month + '月</em></h1>\
          <ul class="img-box-ul">' + liTmpl + '</ul>\
          </section>';
        }
        document.querySelector('.instagram').innerHTML = '<div class="photos" itemscope="" itemtype="http://schema.org/ImageGallery">' + ulTmpl + '</div>';
        createVideoIncon();
        _view2.default.init();
      };
  
      var replacer = function replacer(str) {
        var arr = str.split("/");
        return "/assets/ins/" + arr[arr.length - 1];
      };
  
      var ctrler = function ctrler(data) {
        var imgObj = {};
        for (var i = 0, len = data.l