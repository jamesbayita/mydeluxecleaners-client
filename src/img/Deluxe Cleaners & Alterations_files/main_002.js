(this["webpackJsonpclient"] = this["webpackJsonpclient"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/index.css":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/index.css ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap);"]);
// Module
exports.push([module.i, "*{\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 0px;\n}\nbutton{\n  outline: none;\n}\n.nav-sidebar-open .wrapper{\n  position: fixed;\n  transform: translateX(320px);\n}\n.nav-sidebar-open .wrapper::before{\n  opacity: 1;\n  visibility: visible;\n}\n.wrapper:before {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0,0,0,0.75);\n  z-index: 400;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.5s ease-in-out;\n}\n.wrapper{\n  position: relative;\n  width: 100%;\n  min-width: 100%;\n  height: 100vh;\n  background-color: white;\n  z-index: 2;\n  transition: transform 0.5s ease-in-out;\n}\n#header{\n  position: relative;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  line-height: 73px;\n  font-size: 13px;\n  font-weight: 400;\n  background-color: #FFFFFF;\n  z-index: 3000;\n  box-shadow: 0 1px 3px rgba(0,0,0,.1),0 2px 2px rgba(0,0,0,.06),0 0 2px rgba(0,0,0,.07);\n}\nbody.ht-visible #header {\n  position: fixed;\n  height: 70px;\n}\n\n.header-main{\n  position: relative;\n  height: inherit;\n  display: flex;\n  border-bottom: 1px solid #E6EAEA;\n}\n#header .item{\n  padding: 0px 23px;\n}\n.bt-menu{\n  min-width: 115px;\n  height: 70px;\n  border-right: 1px solid #E6EAEA;\n  cursor: pointer;\n  overflow: hidden;\n  transition: all 0.3s ease-in-out;;\n  /* ADJUST TRANSITION IF NEEDED */\n}\n.bt-menu span{\n  font-family: 'Roboto', sans-serif;\n  transition: all 0.3s ease-in-out;\n  font-weight: 500;\n}\n.bt-menu .ico-menu{\n  top: -1px;\n  margin-right: 10px;\n  vertical-align: middle;\n}\n.ico-menu{\n  position: relative;\n  display: inline-block;\n  width: 15px;\n  height: 13px;\n}\n.ico-menu .bar:nth-child(1){\n  top: 0px;\n}\n.ico-menu .bar {\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-color: black;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.ico-menu .bar:nth-child(2){\n  top: 4px;\n}\n.ico-menu .bar:nth-child(3){\n  top: 8px;\n}\n.ico-menu .bar::after{\n  content: '';\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: #A6ABAB;\n  position: absolute;\n  top: 0px;\n  left: 100%;\n  z-index: 1;\n  transition: 0.3s;\n}\n.ico-menu .bar:nth-child(1)::after{\n  transition-delay: 0.1s;\n}\n.ico-menu .bar:nth-child(2)::after{\n  transition-delay: 0.2s;\n}\n.ico-menu .bar:nth-child(3)::after{\n  transition-delay: 0.3s;\n}\n.bt-menu:hover .ico-menu .bar::after{\n  left: 0px;\n}\n.bt-menu:hover{\n  color: #64686A;\n}\n#header .header-main>.boxright{\n  display: flex;\n  justify-content: flex-end;\n  flex: 1 1;\n}\n#bt-delivery{\n  position: relative;\n  width: 190px;\n  height: 69px;\n  padding: 0 !important;\n  overflow: hidden;\n  border-left: 1px solid #E6EAEA;\n}\n#bt-delivery .button{\n  width: 190px;\n  height: inherit;\n  padding: 0px;\n  line-height: 73px;\n  overflow: hidden;\n  transition: all 0.3s ease-in-out;\n}\n#bt-delivery > .button-small{\n  display: none;\n}\n.button{\n  position: relative;\n  display: inline-block;\n  color: black;\n  text-align: center;\n  font-size: 13px;\n  font-family: 'Roboto', sans-serif;\n  cursor: pointer;\n  border: none;\n  background-color: white;\n  text-decoration: none;\n  font-weight: 500;\n}\n.button:hover{\n  color: black;\n  background-color: rgba(166, 171, 171, 0.103);\n}\n.button span{\n  position: relative;\n  z-index: 1;\n}\n.logo-header{\n  display: block;\n  position: absolute;\n  /* top: 0px; */\n  left: 50%;\n  width: auto;\n  height: 70px;\n  line-height: normal;\n  transform: translateX(-50%);\n}\n.logo-link{\n  display: block;\n  height: inherit;\n}\n.logo-link img{\n  height: 100%;\n}\n/* NAVMENU COMPONENT */\n.nav-main{\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 320px;\n  height: 100vh;\n  background: white;\n  overflow-y: auto;\n  z-index: 305;\n  transform: translateX(-320px);\n}\n.nav-main .header{\n  height: 70px;\n  padding: 0 30px;\n  line-height: 70px;\n  font-size: 13px;\n  font-weight: normal;\n  font-family: 'Roboto', sans-serif;\n  background-color: white;\n  border-bottom: 1px solid #E6EAEA;\n  overflow: hidden;\n  z-index: 1;\n}\n.pull-left{\n  float: left;\n}\n.pull-left img{\n  vertical-align: middle;\n  height: 45px;\n}\n.pull-right{\n  float: right;\n}\n.nav-main .bt-close{\n  cursor: pointer;\n  padding-right: 30px;\n  overflow: hidden;\n  z-index: 1;\n}\n.bt-close::before{\n  content: '';\n  position: absolute;\n  top: 33px;\n  right: 27px;\n  width: 20px;\n  height: 3px;\n  background: black;\n  transform: rotate(45deg);\n}\n.bt-close::after{\n  content: '';\n  position: absolute;\n  top: 33px;\n  right: 27px;\n  width: 20px;\n  height: 3px;\n  background: black;\n  transform: rotate(-45deg);\n}\n.nav-main .menu{\n  display: block;\n}\nli{\n  display: list-item;\n  list-style: none;\n}\n.nav-main .link-item{\n  position: relative;\n  display: block;\n  padding:24px 36px;\n  font-size: 17px;\n  /* font-weight: 500; */\n  color: black;\n  cursor: pointer;\n  background: white;\n  border-bottom: 1px solid #E6EAEA;\n  text-decoration: none;\n  font-family: 'Roboto', sans-serif;\n  text-transform: capitalize;\n  transition: background 0.3s ease-in-out, border 0.3s ease-in-out, color 0.3s ease-in-out;\n}\n.nav-main .link-item:hover{\n  background-color: rgba(166, 171, 171, 0.103);\n    transition: background 0.3s ease-in-out;\n}\n/* CurrentTime Component */\n.dateComponent{\n  display: block;\n  position: absolute;\n  width: 100%;\n  top: 0px;\n  left: 0px;\n  margin: 50px 0px;\n  padding: 0px 65px;\n  z-index: 40001;\n}\n.bottom-box-container{\n  font-size: 17px;\n  color: black;\n  font-family: 'Roboto', sans-serif;\n  line-height: 30px;\n  color: #fcfcfc;\n}\n.image{\n  display: block;\n  height: 100%;\n}\n/* Home-Wrapper */\n.Home-Wrapper{\n  display: block;\n  position: relative;\n  top: 70px;\n}\n/* Carousel Component */\n.carousel-container{\n  position: relative;\n}\n.box-bg.has-tablet{\n  position: relative;\n  height: 600px;\n  overflow: hidden;\n}\n.box-bg.has-tablet::before{\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 600px;\n  background-color: black;\n  z-index: 10;\n  opacity: 0.5;\n}\n.showBG{\n  display: block;\n  height: 100%;\n  opacity: 1;\n  position: absolute;\n  transition: opacity 200ms ease;\n}\n.showBG[aria-hidden=\"true\"]{\n  opacity: 0;\n  z-index: -1;\n}\n.backgroundImage{\n  height: inherit;\n  width: 100vw;\n  object-fit: cover;\n  background-position: center center ;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.box-content{\n  display: block;\n  position: absolute;\n  z-index: 20;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100%;\n}\n.inner{\n  height: 100%;\n  position: relative;\n  width: 1905px;\n  max-width: 100%;\n  margin: 0 auto;\n  clear: both;\n  padding: 0px 65px;\n  z-index: 2000;\n}\n.verticle-center{\n  display: flex;\n  align-items: center;\n  min-height: 100%;\n}\n.box-info{\n  display: block;\n  text-align: center;\n  margin: 0px auto;\n  transition: opacity 200ms ease;\n}\n.background_warning{\n  display: block;\n  background-color: rgb(97, 97, 97);\n  width: 100vw;\n  height: 100vh;\n  position: relative;\n}\n.row{\n  display: block;\n}\n.row > h1{\n  margin-bottom: 20px;\n  font-size: 38px;\n  font-weight: 800;\n  font-family: 'Roboto', sans-serif;\n  color: white;\n}\n.row > p {\n  margin: 0px auto;\n  max-width: 70%;\n  margin-bottom: 20px;\n  font-size: 1.1rem;\n  color: white;\n  font-family: 'Roboto', sans-serif;\n  line-height: 1.5;\n}\n.carousel_button {\n  color: #fcfcfc;\n  border-color: #fcfcfc;\n  border: 1px solid;\n  position: relative;\n  display: inline-block;\n  height: 34px;\n  padding: 0px 23px;\n  border-radius: 50px;\n  line-height: 31px;\n  font-size: 1em;\n  font-weight: 400;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  text-decoration: none;\n  font-family: 'Roboto',sans-serif;\n  background-color: transparent;\n}\n.carousel_button:hover{\n  color: #49c5b6;\n  border-color: #49c5b6;\n}\n.covid_link{\n  color: #fcfcfc;\n  border-color: #fcfcfc;\n  border: 1px solid;\n  position: relative;\n  display: inline-block;\n  height: 34px;\n  padding: 0px 23px;\n  border-radius: 50px;\n  line-height: 31px;\n  font-size: 1em;\n  font-weight: 400;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  text-decoration: none;\n  font-family: 'Roboto',sans-serif;\n}\n.covid_link:hover{\n  color: #49c5b6;\n  border-color: #49c5b6;\n}\n.space_between{\n  margin-right: 15px;\n}\n.button_container {\n  display: flex;\n  justify-content: center;\n}\n.SlideNav {\n  position: absolute;\n  bottom: 36px;\n  display: flex;\n  padding: 0;\n  justify-content: center;\n  list-style-type: none;\n  z-index: 1000;\n  left: 50%;\n  transform: translate(-50%, 0px);\n}\n.SlideNavItem > button {\n  all: unset;\n  cursor: pointer;\n  border-radius: 50%;\n  height: 2em;\n  width: 2rem;\n  margin: 5px;\n  outline: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n}\n.SlideNavItem > button:focus-visible {\n  background-color: hsla(0, 100%, 100%, 0.33);\n}\n\n.SlideNavItem > button > span {\n  background: hsla(0, 100%, 100%, 0.25);\n  display: inline-block;\n  border-radius: 50%;\n  height: 1rem;\n  width: 1rem;\n}\n\n.SlideNavItem > button[aria-current=\"true\"] > span {\n  background: hsla(0, 100%, 100%, 0.75);\n}\n/* block_02) */\n.block_02{\n  position: relative;\n  width: 100%;\n  background-color: #F4F7F6;\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n.block_wrapper{\n  width: 100%;\n  max-width: 1190px;\n  margin: 0px auto;\n  display: block;\n  position: relative;\n}\n.row_flex_wrapper{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  width: 100%;\n  position: relative;\n}\n.s_container{\n  display: block;\n  position: relative;\n  max-width: 110px;\n  width: 50%;\n  min-height: 122px;\n  height: auto;\n  margin: 0px auto;\n  font-family: 'Roboto', sans-serif;\n}\n.s_item_container{\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100px;\n}\n.iconImage{\n  margin-bottom: 15px;\n  display: block;\n  position: relative;\n  height: 72px;\n  width: 72px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  \n}\n.component_title{\n  display: block;\n  position: relative;\n  width: 100%; \n}\n.andSpan{\n  text-align: center;\n  display: block;\n  font-size: 1.1em;\n  bottom: 0;\n  width: 100%;\n}\n/* block_03 */\n.block_03{\n  max-width: 1190px;\n  margin: 0px auto;\n  height: auto;\n  position: relative;\n  overflow: hidden;\n}\n.container_03{\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n.about_container_03{\n  width: 50%;\n  padding: 50px 2rem;\n}\n.heading_03{\n  display: block;\n  position: relative;\n}\n.heading_03 > h1{\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n}\n.heading_03 > span{\n  width: 100px;\n  position: relative;\n  height: 8px;\n  display: block;\n  background-color: rgb(11, 107, 191);\n  margin-bottom: 50px;\n}\n.description_container_03{\n  display: block;\n  position: relative;\n}\n.description_container_03 > p{\n  font-family: 'Roboto', sans-serif;\n  line-height: 2em;\n  font-size: 1.1em;\n  margin-bottom: 50px;\n}\n.learn_more_03{\n  display: block;\n  position: relative;\n  display: block;\n}\n.learn_more_link_03{\n  display: block;\n  font-size: .9rem;\n  font-weight: 600;\n  letter-spacing: 1px;\n  text-decoration: none;\n  text-transform: uppercase;\n  color: rgb(11, 107, 191);\n  cursor: pointer;\n  font-family: 'Roboto', sans-serif;\n  /* padding: .8rem 0; */\n}\n.learn_more_link_03::after{\ncontent: \" \\203A\";\n}\n.video_container_03{\n  width: 50%;\n  padding: 50px 2rem;\n  overflow: hidden;\n}\n.video_wrapper_03{\n  display: block;\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.wistia_responsive_wrapper{\n  box-shadow: #A6ABAB;\n  box-shadow: 0px 0px 10px 1px rgba(102, 102, 102, 0.8);\n}\n/* block_032 */\n.block_032{\n  width: 100%;\n  display: block;\n  position: relative;\n  height: auto;\n  background-color: #F4F7F6;\n}\n.wrapper_032{\n  max-width: 1190px;\n  margin: 0 auto;\n}\n.items_032{\n  display: block;\n  position: relative;\n  font-family: 'Roboto', sans-serif;\n  padding-top: 50px;\n}\n.items_wrapper_032{\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  padding: 0px 2rem 50px;\n  justify-content: space-between;\n}\n.item_container_032{\n  display: block;\n  height: auto;\n  width: 20%;\n}\n.icon_container_032 > i{\n  margin-bottom: 20px;\n}\n.title_032{\n  display: block;\n  position: relative;\n  margin-bottom: 20px;\n}\n.summary_032{\n  display: block;\n  position: relative;\n}\n.summary_032 > p{\n  line-height: 160%;\n  text-align: left;\n}\n.bold{\n  font-weight: 700;\n}\n.fas.fa-leaf.fa-lg{\n  color: rgb(11, 107, 191);\n}\n.fas.fa-handshake.fa-lg{\n  color: rgb(11, 107, 191);\n}\n.fas.fa-sitemap.fa-lg{\n  color: rgb(11, 107, 191);\n}\n.fas.fa-calendar-day.fa-lg{\n  color: rgb(11, 107, 191);\n}\n/* block_04 */\n.block_04{\n  display: block;\n  background-color: white;\n  padding-bottom: 40px;\n  padding-top: 40px;\n}\n.home-form{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  max-width: 75em;\n  width: 100%;\n  padding: 1.5rem;\n  margin: 0 auto;\n}\n.form-container{\n  display: block;\n  padding: 2rem;\n  width: 60%;\n  background-color:white;\n  margin: 0px auto\n}\n.form-heading{\n  font-family: 'Roboto', sans-serif;\n  font-weight: 600;\n  margin-bottom: 20px;\n  text-transform: uppercase;\n  font-size: 1.2rem;\n  line-height: 1.2;\n  color: rgb(11, 107, 191);\n}\n.form-p{\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  margin-bottom: 20px;\n}\n.formik{\n  width: 100%;\n}\n.formik > div> input{\n  padding: .5em;\n  font-size: inherit;\n}\n.name-container{\n display: flex; \n flex-direction: row;\n flex-wrap: nowrap;\n justify-content: space-between;\n margin-bottom: .75rem;\n}\n.email-container{\n  margin-bottom: .75rem;\n}\n.email-container > input{\n  width: 100%;\n}\n.button-container{\n  display: block;\n  width: auto;\n}\n.submit-button{\n  display: block;\n  width: 25%;\n  padding: .8em;\n  cursor: pointer;\n  background-color: transparent;\n  color: black;\n  border: 1px solid black;\n  font-size: 15px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border-radius: 5px;\n  transition: all 0.3s ease;\n}\n.submit-button:hover{\n  color: #5C9DC2;\n  border-color: #5C9DC2;\n  transition: all 0.3s ease;\n}\n.input-label{\n  font-family: 'Roboto', sans-serif;\n  font-weight: 600;\n  font-size: 15px;\n  display: block;\n  margin-bottom: .25rem;\n}\n.first-name-input{\n  width: 48.5%;\n}\n.last-name-input{\n  width: 48.5%;\n}\n.right-content{\n  display: block;\n  width: 48.5%;\n  padding: 1.5rem;\n  font-family: 'Roboto', sans-serif;\n  box-shadow: #A6ABAB;\n  box-shadow: 0px 0px 10px 1px rgba(158,158,158,0.8);\n  border-radius: 5px;\n  background-color: #F4F7F6;\n}\n.fa-dollar-sign{\n  overflow: visible;\n  position: absolute;\n  color: black;\n  background-repeat: repeat-x;\n}\n.coupon{\n  display: block;\n  position: relative;\n  background-color:transparent;\n  height: 100%;\n  width: 100%;\n  border-radius: 8px;\n  min-height: 250px;\n}\n.coupon-h2{\n  font-weight: 600;\n  text-transform: uppercase;\n  margin-bottom: .25rem;\n  font-size: 1.2rem;\n  line-height: 1.2;\n}\n.coupon-container{\n display: block;\n margin-bottom: .25rem;\n position: absolute;\n top: 50%;\n transform: translateY(-50%);\n}\n.coupon-link-container{\n  position: absolute;\n  display: block;\n  bottom: 0;\n  cursor: pointer;\n}\n.coupon-link-container > a{\n  display: block;\n  font-size: .9rem;\n  font-weight: 600;\n  letter-spacing: 1px;\n  text-decoration: none;\n  text-transform: uppercase;\n  color:rgb(11, 107, 191);\n  cursor: pointer;\n  padding:.8rem 0;\n}\n.coupon-link-container > a::after{\n  content: \" \\203A\";\n}\n\n.error-message{\n  display: block;\n}\n.error-flex{\n  display: flex;\n  justify-content: space-evenly;\n  flex-direction: row;\n  width: 100%;\n}\n.error-container{\n  width: 100%;\n  display: block;\n  position: relative;\n  top: -5px;\n}\n.error-container > span{\n  color: red;\n}\n.email-error-message{\n  color: red;\n}\n/* footer-widgets */\n.footer-widgets{\n  background-color: #F4F7F6;\n  color: #202121;\n}\n.widget_text{\n  margin-bottom: 10px;\n}\n.wrap{\n  padding-top: 3rem;\n  width: 100%;\n  overflow: hidden;\n  margin: 0 auto;\n  padding-right: 1.5rem;\n  padding-left: 1.5rem;\n  max-width: 75em;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n}\n.widget-wrap >h4{\n  font-size: 18px;\n  font-family: 'Roboto', sans-serif;\n  margin-bottom: 5px;\n  font-weight: 800;\n  color: #13294B;\n}\n.widget-area{\n  width: 24.5%;\n  height: auto;\n  display: block;\n}\n.widget-link{\n  display: inline-block;\n  color: #5C9DC2;\n  text-decoration: none;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  margin-bottom: 5px;\n}\n.form201{\n  padding: 1.5rem;\n  display: block;\n  width: 48.5%;\n}\n.form201 > h2{\n  font-family: 'Roboto', sans-serif;\n  margin-bottom: .75rem;\n  font-weight: 500;\n}\n.form201 > p{\n  font-family: 'Roboto', sans-serif;\n}\n/* footer */\n.footer{\n  background-color: #F4F7F6;\n  text-align: center;\n}\n.footer_container{\n  max-width: 1190px;\n  padding: 20px 60px 50px;\n  margin: 0px auto;\n  text-align: center;\n}\n.credits_logo{\n  height: 100px;\n  width: auto;\n}\n.copy{\n  font-family: 'Roboto', sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.811);\n}\n/* SERVICES */\n.servicesTitle{\n  font-family: 'Roboto', sans-serif;\n}\n.service_h1_container{\n  display: block;\n  position: relative;\n  height: auto;\n  width: 100%;\n  padding: 50px 0px;\n  text-align: center;\n  background-color: #F4F7F6;\n}\n.service_h1_container > h1 {\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 2.5em;\n}\n\n.services_container{\n  width: 100%;\n  display: block;\n  position: relative;\n  height: auto;\n  padding-bottom: 50px;\n  background-color: #F4F7F6;\n}\n.services_flex{\n  display: flex;\n  position: relative;\n  max-width: 1190px;\n  padding-right: 20px;\n  padding-left: 20px;\n  flex-direction: row;\n  justify-content: space-around;\n  margin: 0px auto;\n  flex-wrap: wrap;\n}\n.service_box{\n  width: 370px;\n  margin-bottom: 50px;\n  background-color: white;\n  box-shadow: #A6ABAB;\n  box-shadow: 0px 0px 10px 1px rgba(158,158,158,0.8);\n  border-radius: 5px;\n  overflow: hidden;\n}\n.image_container_services{\n  overflow: hidden;\n  width: 100%;\n  height: auto;\n  height: 250px;\n}\n.image_container_services > img{\n  background-size: cover;\n  height: 100%;\n}\n.description_container_services{\n  padding: 20px 0px;\n  font-family: 'Roboto', sans-serif;\n}\n.description_container_services > h2{\n  margin-bottom: 20px;\n  text-transform: uppercase;\n  text-align: center;\n}\n.description_container_services > p{\n  font-size: 1rem;\n  display: block;\n  padding: 0px 20px;\n  text-align: center;\n}\n/* ABOUT */\n.about_us_wrapper{\n  display: block;\n  position: relative;\n  width: 100%;\n  height: auto;\n  font-family: 'Roboto', sans-serif;\n}\n.about_header{\n  display: block;\n  position: relative;\n  width: 100%;\n  height: auto;\n  background-color: #F4F7F6;\n}\n.header_image_container::before{\n  content: '';\n  display: block;\n  position: absolute;\n  height: 52.5%;\n  width: 100%;\n  background-color: white;\n  z-index: 1;\n  bottom: 0;\n}\n.header_container{\n  display: block;\n  position: relative;\n  padding: 50px 0px;\n  width: 100%;\n}\n.header_container > h2{\n  text-transform: uppercase;\n  text-align: center;\n  display: block;\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 2.5em;\n}\n.header_image_container{\n  display: block;\n  width: 100%;\n  position: relative;\n  margin: 0px auto;\n}\n.imageContainer{\n  display: block;\n  position: relative;\n  margin: 0px auto;\n  z-index: 10;\n}\n.imageContainer > img{\n  background-size: cover;\n  object-fit: cover;\n  width: 690px;\n  margin: 0px auto;\n  position: relative;\n  display: block;\n  background-color: white;\n  box-shadow: #A6ABAB;\n  box-shadow: 0px 0px 10px 1px rgba(158,158,158,0.8);\n  border-radius: 5px;\n}\n.content_container_about{\n  display: block;\n  position: relative;\n  width: 100%;\n  height: auto;\n  background-color: white;\n}\n.content_layout_container{\n  max-width: 1190px;\n  width: 690px;\n  margin: 0px auto;\n  position: relative;\n  display: block;\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n.content_layout_container > p{\n  font-size: 1em;\n  font-family: 'Roboto', sans-serif;\n  letter-spacing: 0px;\n  line-height: 1.5;\n  font-weight: 400;\n}\n.section_two{\n  width: 690px;\n  display: block;\n  position: relative;\n  margin: 0px auto;\n}\n.section_two_heading{\n  display: block;\n  position: relative;\n  margin-bottom: 25px;\n  font-size: 2.375rem;\n  font-family: 'Roboto', sans-serif;\n}\n.p_one{\n  display: block;\n  margin-bottom: 25px;\n  line-height: 1.5;\n}\n.paragraph_two{\n  margin-bottom: 50px;\n}\n.paragraph_four{\n  margin-bottom: 50px;\n}\n.imageContainer_about{\n  max-width: 690px;\n  overflow: hidden;\n  display: block;\n  position: relative;\n  margin-bottom: 50px;\n}\n.section_three_heading{\n  display: block;\n  position: relative;\n  margin-bottom: 25px;\n  font-size: 2.375rem;\n  font-family: 'Roboto', sans-serif;\n}\n.imageContainer_about > img {\n  width: 100%;\n}\n.paragraph_six{\n  padding-bottom: 50px;\n}\n/* LOCATIONS */\n.Wrapper_locations{\n  display: block;\n  position: relative;\n  top: 70px;\n  height: calc(100% - 70px);\n  width: 100%;\n  overflow: hidden;\n}\n.locations_app{\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.flex_wrapper{\n  display: flex;\n  position: relative;\n  overflow: hidden;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n}\n.location_container{\n  display: block;\n  position: relative;\n  flex-basis: 40vw;\n  background-color: white;\n  z-index: 1;\n  overflow: scroll;\n  height: 100%;\n}\n.location_li{\n  padding: 2rem 2rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  border-bottom: 1px solid #E6EAEA;\n}\n.location_li:hover{\n  background-color: rgba(128, 128, 128, 0.082);\n}\n.location_li.active{\n  background-color: rgba(128, 128, 128, 0.082);\n}\n.flex_wrapper_li{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.information_flex{\n  display: flex;\n  flex-direction: column-reverse;\n}\n.store_title_container{\n  display: block;\n  position: relative;\n  margin-bottom: 5px;\n}\n.store_title{\n  font-family: 'Roboto', sans-serif;\n  font-size: 1rem;\n  font-weight: 700;\n}\n.store_title_container{\n  display: block;\n  position: relative;\n}\n.store-city{\n  font-family: 'Roboto', sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n}\n.info_conainer{\n  display: block;\n  position: relative;\n}\n.info_conainer > button{\n  background-color: transparent;\n  border: none;\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n}\n.moreInfoButton{\n  font-size: .8rem;\n  font-weight: 600;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  color: rgb(11, 107, 191);\n  cursor: pointer;\n  font-family: 'Roboto', sans-serif;\n}\n.moreInfoButton::after{\n  content: \" \\203A\";\n}\n.overlay{\n  display: none;\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-color: white;\n  z-index: 20;\n  overflow: scroll;\n}\n.flex_overlay{\n  display: flex;\n  flex-direction: column;\n}\n.closeButtonContainer{\n  display: block;\n  position: relative;\n  padding: 2rem 2rem 1.3rem;\n}\n.closeOverlay {\n  float: right;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n}\n.flex_store_info{\n  display: flex;\n  flex-direction: column;\n  padding: 0rem 3rem;\n}\n.location_title{\n  display: block;\n  position: relative;\n  width: 100%;\n  margin-bottom: 1.6rem;\n}\n.location_title > h2{\n  font-family: 2.3rem;\n  font-family: 'Roboto', sans-serif;\n}\n.index_info_container{\n  display: flex;\n  flex-direction: row;\n}\n.address_container{\n  display: block;\n  position: relative;\n}\n.address_container > p{\n  font-family: 'Roboto', sans-serif;\n  line-height: 1.6;\n  font-size: 1rem;\n}\n.address_container > p> span {\n  display: block;\n  position: relative;\n}\n.index_links_container{\n  display: block;\n  margin-left: 5rem;\n}\n.phone_container{\n  display: flex;\n  flex-direction: column;\n  font-family: 'Roboto', sans-serif;\n}\n.phone_container > a {\n  line-height: 1.6;\n  font-size: 1rem;\n  color: black;\n}\n.phone_container > a:hover{\n  text-decoration: none;\n}\n.phone_container > a > i{\n  margin-right: 10px;\n}\n.phone_link_1{\n  padding-bottom: .5rem;\n}\n.getAddress{\n  padding-top: .5rem;\n  padding-bottom: .5rem;\n}\n.index_hours_container{\n  display: block;\n  position: relative;\n  padding-top: 3.2rem;\n  padding-bottom: 3.2rem;\n}\n.hours_heading_container{\n  display: block;\n  position: relative;\n  border-bottom: 1px solid #acb1b1;\n  margin-bottom: 15px;\n}\n.hours_heading_container > h2 {\n  font-size: 1rem;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 700;\n  color: rgba(0,0,0,.56) !important;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n}\n.hours_container{\n  display: block;\n  position: relative;\n}\n.schedule{\n  display: table;\n  width: 100%;\n  /* max-width: 350px; */\n  list-style: none;\n  line-height: 1.5;\n  font-size: 1rem;\n  font-family: 'Roboto', sans-serif;\n}\n.scheduleItem{\n  display: table-row;\n}\n.scheduleDay{\n  display: table-cell;\n  font-weight: 700;\n  padding-top: 10px;\n}\n.scheduleTime{\n  text-align: right;\n}\n.storeFrontContainer{\n  display: block;\n  position: relative;\n  overflow: hidden;\n}\n.storeFrontContainer > img{\n  background-size: cover;\n  width: 100%;\n}\n.services_available_con{\n  display: block;\n  position: relative;\n}\n\n.Map{\n  display: block;\n  flex-basis: 60vw;\n  height: 100%;\n}\n/* MEDIA QUERIES */\n@media(max-width: 1294px){\n  .block_02{\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n  .about_container_03{\n    width: 45%;\n  }\n  .video_container_03{\n    width: 45%;\n  }\n  .background{\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}\n@media(max-width: 1024px){\n  .s-container{\n    width: 47.5%;\n  }\n  .s-container:nth-child(1){\n    margin-bottom: 50px;\n  }\n  .s-container:nth-child(2){\n    margin-bottom: 50px;\n  }\n  .s-image-container{\n    width: auto;;\n  }\n  .inner{\n    padding: 0px 35px;\n  }\n  .feature{\n    width: 45.5%;\n  }\n  .feature:nth-child(1){\n    margin-bottom: 60px;\n  }\n  .feature:nth-child(2){\n    margin-bottom: 60px;\n  }\n  .submit-button{\n    width: 100%;\n  }\n  .s-image-container > img:nth-child(2){\n    left: -25%;\n  }\n  .s_wrapper_01{\n    flex-direction: column;\n  }\n  .store_container{\n    width: 100%;\n  }\n  .store_img_container > img{\n    left: 0;\n    width: 100%;\n    background-size: cover;\n  }\n  .flex_wrapper{\n    flex-direction: column-reverse;\n  }\n  .Map{\n    top: 0;\n    flex-basis: 38vh;\n    width: 100%;\n  }\n  .location_container{\n    flex-basis: 62vh;\n  }\n}\n@media (max-width: 850px){\n  .about_container_03{\n    width: 100%;\n  }\n  .video_container_03{\n    width: 100%;\n  }\n  .item_container_032{\n    width: 100%;\n  }\n  .item_container_032:nth-child(1){\n    margin-bottom: 50px;\n  }\n  .item_container_032:nth-child(2){\n    margin-bottom: 50px;\n  }\n  .item_container_032:nth-child(3){\n    margin-bottom: 50px;\n  }\n  .locations_p_container{\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}\n@media (max-width: 750px) {\n  .imageContainer{\n    width: 100%;\n    padding: 0px 25px;\n  }\n  .imageContainer > img{\n    width: 100%;\n  }\n  .row > p {\n    max-width: 100%;\n  }\n}\n@media (max-width: 700px) {\n  .form201{\n    width: 100%;\n  }\n  .right-content{\n    width: 100%;\n  }\n  .home-form{\n    flex-wrap: wrap;\n    flex-direction: column-reverse;\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .form-container{\n    width: 100%;\n  }\n  .s-container{\n    width: 100%;\n  }\n  .s-image-container > img:nth-child(1){\n    left: 0;\n  }\n  .s-container:nth-child(3){\n    margin-bottom: 50px;\n  }\n  .box-left {\n    overflow: hidden;\n  }\n  .bt-menu {\n    width: 65px;\n    min-width: inherit;\n  }\n  .bt-menu > span {\n    display: none !important;\n  }\n  #bt-delivery{\n    width: auto;\n  }\n  #bt-delivery > .button-large{\n    display: none;\n  }\n  .item-container{\n    display: block;\n    height: inherit;\n  }\n  #bt-delivery>.button-small{\n    padding: 0px 23px;\n    width: inherit;\n    display: block;\n  }\n  .fas.fa-shipping-fast.fa-lg{\n    display: block;\n    position: relative;\n    top: 50%;\n    transform: translate(0px, -50%);\n    color: rgb(68, 68, 68);\n  }\n  .box-bg.has-tablet{\n    height: 500px;\n  }\n  .wrap{\n    justify-content: space-evenly;\n  }\n  .widget-area{\n    width: 48.5%;\n  }\n  .bottom-box-container{\n    display: none;\n  }\n}\n@media(max-width: 600px){\n  .inner{\n    padding: 0px 15px;\n  }\n  .backgroundImage{\n    background-size: cover;\n    width: 100%;\n    height: 500px;\n  }\n  .row{\n    margin-bottom: 25px;\n  }\n  .box-info{\n    height: auto;\n  }\n  .feature{\n    width: 98.5%;\n    margin-bottom: 60px;\n  }\n  .flex_container_image{\n    flex-direction: column;\n  }\n  .store_img_container{\n    width: 100%;\n    height: 250px;\n  }\n  .info_box_locations{\n    width: 100%;\n    margin-top: 20px;\n    padding-left: 0px;\n  }\n  .button_container{\n    flex-direction: column;\n  }\n  .space_between{\n    margin-right: 0px;\n    margin-bottom: 15px;\n    width: 117px;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n  .schedule_link{\n    width: 172px;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n}@media(max-width: 600px){\n  .s-image-container > img:nth-child(1) {\n    left: -25%;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _other_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./other/NavBar */ "./src/components/other/NavBar.js");
/* harmony import */ var _other_NavMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./other/NavMenu */ "./src/components/other/NavMenu.js");
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/index */ "./src/components/pages/index.js");
var _jsxFileName = "/Users/J.B.Coronel/Code/mydeluxecleaners.com_client/client/src/components/App.js";




 // Hello m8 this is james

class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_other_NavMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_other_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: '/',
      exact: true,
      component: _pages_index__WEBPACK_IMPORTED_MODULE_4__["Home"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: '/about',
      component: _pages_index__WEBPACK_IMPORTED_MODULE_4__["About"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: '/services',
      component: _pages_index__WEBPACK_IMPORTED_MODULE_4__["Services"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: '/locations',
      component: _pages_index__WEBPACK_IMPORTED_MODULE_4__["Locations"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: '/delivery',
      component: _pages_index__WEBPACK_IMPORTED_MODULE_4__["Delivery"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }));
  }

} // balh blah blahj


/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/helpers/getTimeStamp.js":
/*!************************************************!*\
  !*** ./src/components/helpers/getTimeStamp.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function getTimeStamp() {
  const date = new Date(); // DATE

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];
  let dn, da, mo, ye;
  dn = days[date.getDay()];
  da = date.getDate();
  mo = months[date.getMonth()];
  ye = date.getFullYear(); // TIME

  const standardTime = n => n > 12 ? n - 12 : n === 0 ? n = 12 : n,
        addZero = n => n < 10 ? '0' + n : n;

  let h, m, s, ampm;
  h = standardTime(date.getHours());
  m = addZero(date.getMinutes());
  s = addZero(date.getSeconds());
  ampm = date.getHours() >= 12 ? 'PM' : 'AM';
  const time = {
    h,
    m,
    s,
    ampm,
    dn,
    da,
    mo,
    ye
  };
  return time;
}

/* harmony default export */ __webpack_exports__["default"] = (getTimeStamp);

/***/ }),

/***/ "./src/components/helpers/slides.js":
/*!******************************************!*\
  !*** ./src/components/helpers/slides.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _img_windy_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/windy.jpg */ "./src/img/windy.jpg");
/* harmony import */ var _img_windy_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_windy_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_home_2_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/home-2.jpeg */ "./src/img/home-2.jpeg");
/* harmony import */ var _img_home_2_jpeg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_home_2_jpeg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_home_4_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/home-4.jpeg */ "./src/img/home-4.jpeg");
/* harmony import */ var _img_home_4_jpeg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_home_4_jpeg__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/J.B.Coronel/Code/mydeluxecleaners.com_client/client/src/components/helpers/slides.js";





/* harmony default export */ __webpack_exports__["default"] = ([{
  img: _img_windy_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
  title: "Response to COVID-19",
  content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "We\u2019re in a situation, unlike anything we\u2019ve faced before. We have taken the necessary precautions to protect you and your loved ones. Click on the link below for more information about our actions in response to these unprecedented times."),
  callToAction: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "covid_link",
    to: '/covid-info',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, "More Info")
}, {
  img: _img_home_2_jpeg__WEBPACK_IMPORTED_MODULE_3___default.a,
  title: "Alterations & Tailoring",
  content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Since 2008, we've been providing professional alterations and tailoring services. It is the backbone of our core services. From resizing garments to working on bridal dresses, we have built a reputation for quality and reliability."),
  callToAction: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "carousel_button",
    to: '/alterations',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "More Info")
}, {
  img: _img_home_4_jpeg__WEBPACK_IMPORTED_MODULE_4___default.a,
  title: "Pick up & Delivery",
  content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "Enjoy superior quality, full-service garment care without having to leave your home or office. We are now offering pick up and delivery service for Las Vegas residents. Click on the link below for more information, or if you're ready to schedule a pick-up."),
  callToAction: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button_container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "carousel_button space_between",
    to: '/delivery',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, "More Info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "carousel_button schedule_link",
    href: "https://www.sudzy.co/w/index.html?cleaner=deluxe-cleaners",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, "Schedule Pick Up"))
}]);

/***/ }),

/***/ "./src/components/helpers/stores.json":
/*!********************************************!*\
  !*** ./src/components/helpers/stores.json ***!
  \********************************************/
/*! exports provided: type, features, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"FeatureCollection\",\"features\":[{\"geometry\":{\"type\":\"Point\",\"coordinates\":[-115.0471686,36.0672604]},\"type\":\"Feature\",\"properties\":{\"crossing\":\"Stephanie & Sunset\",\"category\":\"Dry Cleaners\",\"hours\":{\"Monday\":\"8:00AM to 6:00PM\",\"Tuesday\":\"8:00AM to 6:00PM\",\"Wednesday\":\"8:00AM to 6:00PM\",\"Thursday\":\"8:00AM to 6:00PM\",\"Friday\":\"8:00AM to 6:00PM\",\"Saturday\":\"9:00AM to 4:00PM\",\"Sunday\":\"Closed\"},\"description\":\"Professional Dry Cleaners and Alterations.\",\"name\":\"Deluxe Cleaners & Alterations\",\"phoneLink\":\"tel:+1(702)982-7668\",\"displayPhone\":\"702-982-7668\",\"storeid\":\"1\",\"city\":\"Henderson\",\"address\":{\"street\":\"651 N Stephanie St\",\"suite\":null,\"city\":\"Henderson, NV 89014\"},\"services\":[\"Dry Clean\",\"Laundry\",\"Alterations\"]}},{\"geometry\":{\"type\":\"Point\",\"coordinates\":[-115.0547201,36.0181182]},\"type\":\"Feature\",\"properties\":{\"crossing\":\"Horizon Ridge & Arroyo Grande\",\"category\":\"Dry Cleaners\",\"hours\":{\"Monday\":\"8:00AM to 6:00PM\",\"Tuesday\":\"8:00AM to 6:00PM\",\"Wednesday\":\"8:00AM to 6:00PM\",\"Thursday\":\"8:00AM to 6:00PM\",\"Friday\":\"8:00AM to 6:00PM\",\"Saturday\":\"9:00AM to 4:00PM\",\"Sunday\":\"Closed\"},\"description\":\"Professional Dry Cleaners and Alterations.\",\"name\":\"Deluxe Cleaners & Alterations\",\"phoneLink\":\"tel:+1(702)260-8567\",\"displayPhone\":\"702-260-8567\",\"storeid\":\"2\",\"city\":\"Henderson\",\"address\":{\"street\":\"1550 W Horizon Ridge Pkwy\",\"suite\":\"#H\",\"city\":\"Henderson, NV 89012\"},\"services\":[\"Dry Clean\",\"Laundry\",\"Alterations\"]}},{\"geometry\":{\"type\":\"Point\",\"coordinates\":[-115.1763853,36.0723364]},\"type\":\"Feature\",\"properties\":{\"crossing\":\"Windy & Las Vegas\",\"category\":\"Dry Cleaners\",\"hours\":{\"Monday\":\"6:00AM to 3:00PM\",\"Tuesday\":\"6:00AM to 3:00PM\",\"Wednesday\":\"6:00AM to 3:00PM\",\"Thursday\":\"6:00AM to 3:00PM\",\"Friday\":\"6:00AM to 3:00PM\",\"Saturday\":\"Closed\",\"Sunday\":\"Closed\"},\"description\":\"Professional Dry Cleaners and Alterations.\",\"name\":\"Deluxe Cleaners & Alterations\",\"phoneLink\":\"tel:+1(702)270-3160\",\"displayPhone\":\"702-270-3160\",\"storeid\":\"3\",\"city\":\"Las Vegas\",\"address\":{\"street\":\"6436 Windy Rd\",\"suite\":null,\"city\":\"Las Vegas, NV 89119\"},\"services\":[\"Dry Clean\",\"Laundry\",\"Alterations\"]}},{\"geometry\":{\"type\":\"Point\",\"coordinates\":[-115.2243895,36.0489728]},\"type\":\"Feature\",\"properties\":{\"crossing\":\"Jones & Robindale\",\"category\":\"Dry Cleaners\",\"hours\":{\"Monday\":\"8:00AM to 6:00PM\",\"Tuesday\":\"8:00AM to 6:00PM\",\"Wednesday\":\"8:00AM to 6:00PM\",\"Thursday\":\"8:00AM to 6:00PM\",\"Friday\":\"8:00AM to 6:00PM\",\"Saturday\":\"Closed\",\"Sunday\":\"Closed\"},\"description\":\"Professional Dry Cleaners and Alterations.\",\"name\":\"Deluxe Cleaners & Alterations\",\"phoneLink\":\"tel:+1(702)242-5326\",\"displayPhone\":\"702-242-5326\",\"storeid\":\"4\",\"city\":\"Las Vegas\",\"address\":{\"street\":\"7720 S Jones Blvd\",\"suite\":\"#104\",\"city\":\"Las Vegas, NV 89139\"},\"services\":[\"Dry Clean\",\"Laundry\",\"Alterations\"]}}]}");

/***/ }),

/***/ "./src/components/other/Carousel.js":
/*!******************************************!*\
  !*** ./src/components/other/Carousel.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_slides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/slides */ "./src/components/helpers/slides.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./src/components/other/reducer.js");
/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initialState */ "./src/components/other/initialState.js");
/* harmony import */ var _DateComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DateComponent */ "./src/components/other/DateComponent.js");
var _jsxFileName = "/Users/J.B.Coronel/Code/mydeluxecleaners.com_client/client/src/components/other/Carousel.js";





const SLIDE_DURATION = 6000;

function Container(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }));
}

function BoxBackground(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }));
}

function Image({
  isCurrent,
  takeFocus,
  image,
  id,
  title,
  callToAction,
  content
}) {
  let ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isCurrent && takeFocus) {
      ref.current.focus();
    }
  }, [isCurrent, takeFocus]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "aria-hidden": !isCurrent,
    className: "showBG",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: `Background ${id}`,
    ref: ref,
    src: image,
    tabIndex: "-1",
    "aria-labelledby": id,
    className: "backgroundImage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BoxContent, {
    title: title,
    content: content,
    callToAction: callToAction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DateComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }));
}

function BoxContent({
  title,
  callToAction,
  content
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inner verticle-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, callToAction))));
}

function SlideNav(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", Object.assign({
    className: "SlideNav"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }));
}

function SlideNavItem({
  isCurrent,
  ...props
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "SlideNavItem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", Object.assign({}, props, {
    "aria-current": isCurrent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  })));
}

function Carousel() {
  let [state, dispatch] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_reducer__WEBPACK_IMPORTED_MODULE_2__["default"], _initialState__WEBPACK_IMPORTED_MODULE_3__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let timeout = setTimeout(() => {
      dispatch({
        type: "PROGRESS"
      });
    }, SLIDE_DURATION);
    return () => clearTimeout(timeout);
  }, [state.isPlaying, state.currentIndex]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    className: "carousel-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BoxBackground, {
    className: "box-bg has-tablet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, _helpers_slides__WEBPACK_IMPORTED_MODULE_1__["default"].map((slide, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    key: index,
    id: `image-${index}`,
    image: slide.img ? slide.img : null,
    isCurrent: index === state.currentIndex,
    takeFocus: state.takeFocus,
    callToAction: slide.callToAction,
    title: slide.title,
    content: slide.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SlideNav, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, _helpers_slides__WEBPACK_IMPORTED_MODULE_1__["default"].map((slide, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SlideNavItem, {
    key: index,
    isCurrent: index === state.currentIndex,
    "aria-label": `Slide-${index + 1}`,
    onClick: () => {
      dispatch({
        type: "GOTO",
        index
      });
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }))));
}

/***/ }),

/***/ "./src/components/other/DateComponent.js":
/*!***********************************************!*\
  !*** ./src/components/other/DateComponent.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_getTimeStamp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/getTimeStamp */ "./src/components/helpers/getTimeStamp.js");
var _jsxFileName = "/Users/J.B.Coronel/Code/mydeluxecleaners.com_client/client/src/components/other/DateComponent.js";



function CurrentTime() {
  let [time, setTime] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const id = setInterval(() => {
      setTime(Object(_helpers_getTimeStamp__WEBPACK_IMPORTED_MODULE_1__["default"])());
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, time ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dateComponent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bottom-box-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 23
    }
  }, `${time.dn}`), " ", `${time.mo} ${time.da}, ${time.ye}`))) : null);
}

/* harmony default export */ __webpack_exports__["default"] = (CurrentTime);

/***/ }),

/***/ "./src/components/other/Footer.js":
/*!****************************************!*\
  !*** ./src/components/other/Footer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _img_full_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/full_logo.svg */ "./src/img/full_logo.svg");
/* harmony import */ var _img_full_logo_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_full_logo_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/J.B.Coronel/Code/mydeluxecleaners.com_client/client/src/components/other/Footer.js";




function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-widgets",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "widget-area footer-widgets-1 footer-widget-area",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "widget widget_text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "widget-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 33
    }
  }, "Savings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "textwidget",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "widget-link",
    to: '/coupons',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 45
    }
  }, "Coupons")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "widget widget_nav_menu widget_text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "widget-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 33
    }
  }, "Locations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-footer-menu-locations-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "widget-link credit_link",
    to: '/locations',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 45
    }
  }, "West Horizon Ridge")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "widget-link credit_link",
    to: '/locations',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 45
    }
  }, "North Stephanie")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "widget-link credit_link",
    to: '/locations',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 45
    }
  }, "South Jones Blvd")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "widget-link credit_link",
    to: '/locations',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 45
    }
  }, "Windy Rd"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "widget-area footer-widgets-2 footer-widget-area",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "widget widget_nav_menu widget_text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "widget-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "widget-title widgettitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 33
    }
  }, "Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-footer-menu-services-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "menu-item menu-item-type-post",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "widget-link",
    to: '/services',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 87
    }
  }, "Dry Clean")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "menu-item menu-item-type-post",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "widget-link",
    to: '/services',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 87
    }
  }, "Laundry")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "menu-item menu-item-type-post",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "widget-link",
    to: '/services',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 87
    }
  }, "Alterations & Tailoring")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "menu-item menu-item-type-post",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "widget-link",
    to: '/services',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 87
    }
  }, "Bedding")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "menu-item menu-item-type-post",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "widget-link",
    to: '/services',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 87
    }
  }, "Bridal Care")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "menu-item menu-item-type-post",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "widget-link",
    to: '/services',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 87
    }
  }, "Wash & Fold")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "menu-item menu-item-type-post",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "widget-link",
    to: '/services',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 87
    }
  }, "Linens"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "widget-area footer-widgets-3 footer-widget-area",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "widget widget_nav_menu widget_text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "widget-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "widget-title widgettitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 33
    }
  }, "Delivery"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-footer-menu-delivery-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "widget-link",
    to: '/delivery',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 45
    }
  }, "Pick Up & Delivery Info")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "widget widget_nav_menu widget_text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "widget-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "widget-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 33
    }
  }, "About Deluxe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-footer-menu-about-flair-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "widget-link",
    to: '/about',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 45
    }
  }, "Our Story"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "widget-area footer-widgets-4 footer-widget-area",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "credits",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "credits_logo",
    src: _img_full_logo_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "credits",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "copy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, "\xA9 2020 RMC & S Corp. All rights reserved.")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/other/Form.js":
/*!**************************************!*\
  !*** ./src/components/other/Form.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/J.B.Coronel/Code/mydeluxecleaners.com_client/client/src/components/other/Form.js";



 // VALIDATION SCHEMA

let schema = yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
  first_name: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required('This field is required'),
  last_name: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required('This field is required'),
  email: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().email('Please enter a valid email').required('This field is required')
}); // onSubmit: asynchronous function will send POST request to server.
// status(201): will return response object with user input values.
// status(400): will return error object.
// NOTE: server will validate email address to make sure the value isn't currently subscribed

const Form = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "form-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 8
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
  className: "form-heading",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 12
  }
}, "Join our Mailing List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  className: "form-p",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 12
  }
}, "Special coupons, notifications, and more."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
  initialValues: {
    first_name: '',
    last_name: '',
    email: ''
  },
  validationSchema: schema,
  onSubmit: async (values, {
    setSubmitting,
    resetForm,
    setFieldError
  }) => {
    props.setIsLoading(true);
    await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/api/users', values).then(res => {
      resetForm(true);
      props.setIsLoading(false);
      props.setRes(res.data.doc);
    }).catch(error => {
      props.setIsLoading(false);

      if (error.response) {
        setFieldError('email', 'This email is already subscribed to our mailing list');
      }

      setSubmitting(false);
    });
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 13
  }
}, ({
  values,
  handleSubmit,
  isSubmitting,
  handleChange,
  errors,
  touched,
  handleBlur
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
  className: "formik",
  onSubmit: handleSubmit,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 17
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
  className: "input-label",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 17
  }
}, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "name-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 21
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
  className: "first-name-input",
  type: "text",
  placeholder: "First Name",
  name: "first_name",
  onChange: handleChange,
  onBlur: handleBlur,
  value: values.first_name,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 25
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
  className: "last-name-input",
  type: "text",
  placeholder: "Last Name",
  name: "last_name",
  onChange: handleChange,
  onBlur: handleBlur,
  value: values.last_name,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 25
  }
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "error-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 21
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "error-flex",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 25
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "error-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 29
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 33
  }
}, errors.first_name && touched.first_name && errors.first_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "error-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 29
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 33
  }
}, errors.last_name && touched.last_name && errors.last_name)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "email-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 21
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
  className: "email-input",
  type: "text",
  placeholder: "Email",
  name: "email",
  onChange: handleChange,
  onBlur: handleBlur,
  value: values.email,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 25
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "email-error-message",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 25
  }
}, errors.email && touched.email && errors.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "button-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 21
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
  className: "submit-button",
  type: "submit",
  disabled: isSubmitting,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 25
  }
}, props.isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  className: "fas fa-spinner fa-spin",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 116
  }
}) : 'Sign Up')))));

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./src/components/other/GoogleMap.js":
/*!*******************************************!*\
  !*** ./src/components/other/GoogleMap.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _other_locationItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../other/locationItem */ "./src/components/other/locationItem.js");
/* harmony import */ var _helpers_stores_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/stores.json */ "./src/components/helpers/stores.json");
var _helpers_stores_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../helpers/stores.json */ "./src/components/helpers/stores.json", 1);
/* harmony import */ var _other_Overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../other/Overlay */ "./src/components/other/Overlay.js");
var _jsxFileName = "/Users/J.B.Coronel/Code/mydeluxecleaners.com_client/client/src/components/other/GoogleMap.js";




 // VARIABLES

const GOOGLE_MAP_API_KEY = 'AIzaSyATje7L6rUQO7t2CT-HjdW7vSrqIL8kos4';
const zoomLevel = window.screen.width < 700 ? 11 : 12;

function Map({
  options,
  className,
  stores
}) {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const [map, setMap] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [info, setInfo] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    title: '',
    address: '',
    phone: '',
    phoneLink: '',
    hours: ''
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const onLoad = () => setMap(new window.google.maps.Map(ref.current, options));

    if (!window.google) {
      const script = document.createElement(`script`);
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
      document.head.append(script);
      script.addEventListener('load', onLoad);
    } else onLoad();
  }, [options]);

  function toggleActive(id) {
    if (document.querySelector('#locationList .location_li.active') !== null) {
      document.querySelector('#locationList .location_li.active').classList.remove('active');
    }

    let element = document.querySelector(`.location_li.location_${id}`);
    element.classList.add('active');
  }

  function showOverlay() {
    let element = document.querySelector('.overlay');
    element.style.display = 'block';
  } // once map is displayed, add markers to map


  if (map) {
    map.data.addGeoJson(stores);
    map.data.addListener('click', function (event) {
      const position = event.feature.getGeometry().get();
      map.panTo(position);
      toggleActive(event.feature.j.storeid);
      let element = document.querySelector('.overlay');
      element.style.display = 'none';
    });
  }

  function handleOnClick(coordinates) {
    map.panTo({
      lat: coordinates[1],
      lng: coordinates[0]
    });
  }

  function handleOverlay({
    title,
    address,
    phone,
    phoneLink,
    hours
  }) {
    showOverlay();
    setInfo({
      title,
      address,
      phone,
      phoneLink,
      hours
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "locationList",
    className: "location_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, stores.features.map((store, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_other_locationItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: index,
    title: store.properties.crossing,
    coordinates: stores.features[index].geometry.coordinates,
    handleOnClick: handleOnClick,
    toggleSelector: toggleActive,
    id: store.properties.storeid,
    city: store.properties.city,
    handleOverlay: handleOverlay,
    address: store.properties.address,
    phone: store.properties.displayPhone,
    phoneLink: store.properties.phoneLink,
    hours: store.properties.hours,
    services: store.properties.services,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_other_Overlay__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: info.title,
    address: info.address,
    phone: info.phone,
    phoneLink: info.phoneLink,
    hours: info.hours,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({
    ref,
    className
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  })));
}

Map.defaultProps = {
  options: {
    center: {
      lat: 36.054218,
      lng: -115.1363914
    },
    zoom: zoomLevel,
    mapTypeControl: false,
    streetViewControl: false
  },
  stores: _helpers_stores_json__WEBPACK_IMPORTED_MODULE_2__
};
/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./src/components/other/NavBar.js":
/*!****************************************!*\
  !*** ./src/components/other/NavBar.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _img_deluxeLogo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/deluxeLogo.svg */ "./src/img/deluxeLogo.svg");
/* harmony import */ var _img_deluxeLogo_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_deluxeLogo_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/J.B.Coronel/Code/mydeluxecleaners.com_client/client/src/components/other/NavBar.js";




function NavBar() {
  let handleClick = e => {
    e.preventDefault();
    document.body.classList.add('nav-sidebar-open');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    id: "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item bt-menu",
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ico-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 33
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 33
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 33
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 29
    }
  }, "MENU"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "boxright",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item has-tablet",
    id: "bt-delivery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.sudzy.co/w/index.html?cleaner=deluxe-cleaners",
    className: "button button-small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-shipping-fast fa-lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 125
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "button button-large",
    href: "https://www.sudzy.co/w/index.html?cleaner=deluxe-cleaners",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 125
    }
  }, "SCHEDULE PICKUP")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logo-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "logo-link",
    to: '/',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 46
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_deluxeLogo_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 83
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./src/components/other/NavMenu.js":
/*!*****************************************!*\
  !*** ./src/components/other/NavMenu.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/logo.svg */ "./src/img/logo.svg");
/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_logo_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/J.B.Coronel/Code/mydeluxecleaners.com_client/client/src/components/other/NavMenu.js";




function NavMenu() {
  let onClick_closeButton = () => {
    document.body.classList.remove('nav-sidebar-open');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-main",
    id: "nav-main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pull-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_logo_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "LOGO",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pull-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bt-close js-close-menu",
    onClick: onClick_closeButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, "CLOSE"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "li link-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "link-item",
    to: "/",
    onClick: onClick_closeButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 50
    }
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "li link-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "link-item",
    to: "/about",
    onClick: onClick_closeButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 50
    }
  }, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "li link-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "link-item",
    to: "/services",
    onClick: onClick_closeButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 50
    }
  }, "Services")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "li link-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "link-item",
    to: "/locations",
    onClick: onClick_closeButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 50
    }
  }, "Locations")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "li link-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "link-item",
    to: "/",
    onClick: onClick_closeButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 50
    }
  }, "Pickup / Delivery Info")))));
}

/* harmony default export */ __webpack_exports__["default"] = (NavMenu);

/***/ }),

/***/ "./src/components/other/Overlay.js":
/*!*****************************************!*\
  !*** ./src/components/other/Overlay.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_jones_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/jones.jpg */ "./src/img/jones.jpg");
/* harmony import */ var _img_jones_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_jones_jpg__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/J.B.Coronel/Code/mydeluxecleaners.com_client/client/src/components/other/Overlay.js";



function Overlay({
  title,
  address,
  phone,
  phoneLink,
  hours,
  services
}) {
  function closeOverlay() {
    let element = document.querySelector('.overlay');
    element.style.display = 'none';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex_overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "closeButtonContainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "closeOverlay",
    onClick: closeOverlay,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-times fa-2x",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 77
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex_store_info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "location_title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "index_info_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "address_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "address_line_one",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 33
    }
  }, address.street), address.suite && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "address_suite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 51
    }
  }, address.suite), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "address_line_two",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 33
    }
  }, address.city))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "index_links_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "phone_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "phone_link_1",
    href: phoneLink,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    class: "fas fa-phone-alt ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 78
    }
  }), phone), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "getAddress",
    href: "google.com",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    class: "fas fa-directions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 77
    }
  }), "Get Directions")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "index_hours_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hours_heading_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
    }
  }, "Hours")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hours_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "schedule",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "scheduleItem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "scheduleDay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 37
    }
  }, "Monday"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "scheduleTime",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 37
    }
  }, hours.Monday)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "scheduleItem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "scheduleDay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 37
    }
  }, "Tuesday"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "scheduleTime",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 37
    }
  }, hours.Tuesday)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "scheduleItem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "scheduleDay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 37
    }
  }, "Wednesday"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "scheduleTime",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 37
    }
  }, hours.Wednesday)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "scheduleItem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "scheduleDay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 37
    }
  }, "Thursday"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "scheduleTime",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 37
    }
  }, hours.Thursday)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "scheduleItem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "scheduleDay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 37
    }
  }, "Friday"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "scheduleTime",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 37
    }
  }, hours.Friday)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "scheduleItem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "scheduleDay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 37
    }
  }, "Saturday"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "scheduleTime",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 37
    }
  }, hours.Saturday)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "scheduleItem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "scheduleDay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 37
    }
  }, "Sunday"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "scheduleTime",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 37
    }
  }, hours.Sunday))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "location_services_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hours_heading_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 29
    }
  }, "Services")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "services_available_con",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  }, services[0]))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Overlay);

/***/ }),

/***/ "./src/components/other/initialState.js":
/*!**********************************************!*\
  !*** ./src/components/other/initialState.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  currentIndex: 0,
  isPlaying: false,
  takeFocus: false
});

/***/ }),

/***/ "./src/components/other/locationItem.js":
/*!**********************************************!*\
  !*** ./src/components/other/locationItem.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/J.B.Coronel/Code/mydeluxecleaners.com_client/client/src/components/other/locationItem.js";


function locationItem(props) {
  function handleOverlayClick() {
    props.handleOverlay(props);
  }

  function handleOnClick(event) {
    event.preventDefault();
    props.handleOnClick(props.coordinates);
    props.toggleSelector(props.id);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: `location_li location_${props.id}`,
    onClick: handleOnClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex_wrapper_li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "information_flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "city_conatiner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "store-city",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, props.city)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "store_title_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "store_title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, props.title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "info_conainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: handleOverlayClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "moreInfoButton",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 58
    }
  }, "More Info")))));
}

/* harmony default export */ __webpack_exports__["default"] = (locationItem);

/***/ }),

/***/ "./src/components/other/reducer.js":
/*!*****************************************!*\
  !*** ./src/components/other/reducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var _helpers_slides__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/slides */ "./src/components/helpers/slides.js");

function reducer(state, action) {
  switch (action.type) {
    case "PROGRESS":
    case "NEXT":
      return { ...state,
        takeFocus: false,
        isPlaying: action.type === "PROGRESS",
        currentIndex: (state.currentIndex + 1) % _helpers_slides__WEBPACK_IMPORTED_MODULE_0__["default"].length
      };

    case "PREVIOUS":
      return { ...state,
        takeFocus: false,
        isPlaying: false,
        currentIndex: (state.currentIndex - 1 + _helpers_slides__WEBPACK_IMPORTED_MODULE_0__["default"].length) % _helpers_slides__WEBPACK_IMPORTED_MODULE_0__["default"].length
      };

    case "GOTO":
      return { ...state,
        takeFocus: true,
        currentIndex: action.index
      };

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/components/pages/About.js":
/*!***************************************!*\
  !*** ./src/components/pages/About.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _other_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../other/Footer */ "./src/components/other/Footer.js");
/* harmony import */ var _img_windy_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/windy.jpg */ "./src/img/windy.jpg");
/* harmony import */ var _img_windy_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_windy_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_shirts_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/shirts.jpg */ "./src/img/shirts.jpg");
/* harmony import */ var _img_shirts_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_shirts_jpg__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/J.B.Coronel/Code/mydeluxecleaners.com_client/client/src/components/pages/About.js";





class About extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Home-Wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "about_us_wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "about_header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "header_container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 29
      }
    }, "About Us")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "header_image_container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "imageContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _img_windy_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
      alt: "about us",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 33
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content_container_about",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content_layout_container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 29
      }
    }, "Mailchimp is an all-in-one Marketing Platform for small business. We empower millions of customers around the world to start and grow their businesses with our smart marketing technology, award-winning support, and inspiring content. Founded in 2001 and headquartered in Atlanta with additional offices in Brooklyn, Oakland, and Vancouver, Mailchimp is 100% founder-owned and highly profitable."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content_container_about",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section_two",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "section_two_heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 29
      }
    }, "Founder story"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "paragraph_one p_one",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 29
      }
    }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ipsa vero at, culpa sit neque dolor suscipit quaerat quisquam officia consequatur illum odit voluptas obcaecati voluptates, voluptatibus molestias, excepturi accusamus?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "paragraph_two p_one",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 29
      }
    }, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ipsa vero at, culpa sit neque dolor suscipit quaerat quisquam officia consequatur illum odit voluptas obcaecati voluptates, voluptatibus molestias, excepturi accusamus?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "imageContainer_about",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _img_shirts_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "About Us Two",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 33
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "paragraph_three p_one",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 29
      }
    }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cumque libero molestias quod id ipsum nesciunt dignissimos non accusamus labore dolores hic aliquam totam beatae, iusto, voluptatem facere itaque in?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "paragraph_four p_one",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 29
      }
    }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sequi harum eum necessitatibus fugiat maxime dicta hic quibusdam velit quisquam, veritatis rem porro fuga sit. Minus eos voluptates rerum doloribus.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section_two",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "section_three_heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 29
      }
    }, "Our mission"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "paragraph_five p_one",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 29
      }
    }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eos cum est, natus aut maiores tempore sunt fugit similique animi libero officiis earum aperiam voluptates sequi fugiat, inventore laboriosam alias."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "paragraph_six p_one",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 29
      }
    }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptates laboriosam et quos quam labore ut, repellendus consequatur aut qui doloribus. Nulla impedit voluptatibus iure voluptas atque rem? Totam, in?")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_other_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/components/pages/Delivery.js":
/*!******************************************!*\
  !*** ./src/components/pages/Delivery.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/J.B.Coronel/Code/mydeluxecleaners.com_client/client/src/components/pages/Delivery.js";


function Delivery() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, "Delivery");
}

/* harmony default export */ __webpack_exports__["default"] = (Delivery);

/***/ }),

/***/ "./src/components/pages/Home.js":
/*!**************************************!*\
  !*** ./src/components/pages/Home.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _other_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../other/Carousel */ "./src/components/other/Carousel.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _other_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../other/Footer */ "./src/components/other/Footer.js");
/* harmony import */ var _other_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../other/Form */ "./src/components/other/Form.js");
/* harmony import */ var _img_DryClean_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/DryClean.svg */ "./src/img/DryClean.svg");
/* harmony import */ var _img_DryClean_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_DryClean_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_BridalTwo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/BridalTwo.svg */ "./src/img/BridalTwo.svg");
/* harmony import */ var _img_BridalTwo_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_BridalTwo_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_LaundryShirt_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/LaundryShirt.svg */ "./src/img/LaundryShirt.svg");
/* harmony import */ var _img_LaundryShirt_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_LaundryShirt_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_Alterations_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../img/Alterations.svg */ "./src/img/Alterations.svg");
/* harmony import */ var _img_Alterations_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_Alterations_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_Bedding_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../img/Bedding.svg */ "./src/img/Bedding.svg");
/* harmony import */ var _img_Bedding_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_Bedding_svg__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/J.B.Coronel/Code/mydeluxecleaners.com_client/client/src/components/pages/Home.js";









 // HOME PAGE

function Home() {
  const [res, setRes] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  let [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Home-Wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block_01",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_other_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block_02",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block_wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row_flex_wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "s_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "s_item_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "iconImage",
    src: _img_DryClean_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "service icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 33
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "component_title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "andSpan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 33
    }
  }, "Dry Cleaning"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "s_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "s_item_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "iconImage",
    src: _img_BridalTwo_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "service icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 29
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "component_title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "andSpan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 33
    }
  }, "Bridal Care"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "s_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "s_item_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "iconImage",
    src: _img_LaundryShirt_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "service icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 29
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "component_title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "andSpan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 33
    }
  }, "Shirt Laundry"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "s_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "s_item_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "iconImage",
    src: _img_Bedding_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "service icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 29
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "component_title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "andSpan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 33
    }
  }, "Bedding"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "s_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "s_item_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "iconImage",
    src: _img_Alterations_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "service icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "component_title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "andSpan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 33
    }
  }, "Alterations"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "s_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "s_item_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "iconImage",
    src: _img_BridalTwo_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "service icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 29
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "component_title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "andSpan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 33
    }
  }, "Specialty Items"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "s_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "s_item_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "iconImage",
    src: _img_BridalTwo_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "service icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 29
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "component_title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "andSpan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 33
    }
  }, "Fine Linens")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block_03",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container_03",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about_container_03",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "heading_03",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 29
    }
  }, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 29
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "description_container_03",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 29
    }
  }, "Since 2008, we have been providing garment care services for our community. Ranging from Dry Cleaning, Alterations, and Laundry, we have built a customer base that trusts in our service and mission. We do things differently and believe in building a personal relationship with all of our customers. As well as maintaining high standards from the second you walk into our stores. When it comes to our operations, we believe quality and customer service go hand in hand. All of these factors have cemented us as a top-rated business in our industry. We will continue to work off of these values and hopefully serve our community for the next 10 years.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "learn_more_03",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: "learn_more_link_03",
    to: '/about',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 29
    }
  }, "Learn More"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video_container_03",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video_wrapper_03",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "center_03",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wistia_responsive_padding",
    style: {
      padding: "56.25% 0 0 0",
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wistia_responsive_wrapper",
    style: {
      height: "100%",
      left: "0",
      position: "absolute",
      top: "0",
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    src: "https://fast.wistia.net/embed/iframe/1xtfswqyqg?videoFoam=true&autoPlay=false",
    title: "Business Card Video",
    allowtransparency: "true",
    frameBorder: "0",
    scrolling: "no",
    className: "wistia_embed",
    name: "wistia_embed",
    allowFullScreen: true,
    msallowfullscreen: "true",
    width: "100%",
    height: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 37
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://fast.wistia.net/assets/external/E-v1.js",
    async: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 29
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block_032",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper_032",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "items_032",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "items_wrapper_032",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item_container_032",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon_container_032",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-calendar-day fa-lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 37
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title_032",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 37
    }
  }, "Two Day Return")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "summary_032",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 37
    }
  }, "Enjoy a two-day return on Dry Cleaning and Laundry items. Our system will automatically send you a text message notification letting you know your items are racked and ready to be picked up."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item_container_032",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon_container_032",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-sitemap fa-lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 33
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title_032",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 37
    }
  }, "Fully Owned & Operated")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "summary_032",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 37
    }
  }, "All aspects of our business including locations and fulfillment centers are privately owned and operated. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 146
    }
  }, "We do not"), " send your garments out to third party vendors. This allows us to maintain quality and reliability."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item_container_032",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon_container_032",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-handshake fa-lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 33
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title_032",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 37
    }
  }, "Reliable Service")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "summary_032",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 37
    }
  }, "At Deluxe, we pride ourselves on maintaining high standards for your garments. Our superior customer service and on-time delivery has cemented us as a top-rated business in our industry."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item_container_032",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon_container_032",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-leaf fa-lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 33
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title_032",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 37
    }
  }, "Eco-Friendly")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "summary_032",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 37
    }
  }, "We believe in taking care of our community. Deluxe places top priority on providing a healthy environment for our employees and customers. Ask us about our process on your next visit."))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block_04",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "home-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 17
    }
  }, res ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form201",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 25
    }
  }, `Thank you ${res.first_name},`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 25
    }
  }, "You have successfully subscribed to our mailing list!")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_other_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isLoading: isLoading,
    setIsLoading: setIsLoading,
    setRes: setRes,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 21
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_other_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  }));
}

/***/ }),

/***/ "./src/components/pages/Locations.js":
/*!*******************************************!*\
  !*** ./src/components/pages/Locations.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _other_GoogleMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../other/GoogleMap */ "./src/components/other/GoogleMap.js");
var _jsxFileName = "/Users/J.B.Coronel/Code/mydeluxecleaners.com_client/client/src/components/pages/Locations.js";



function Locations() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Wrapper_locations",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "locations_app",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex_wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_other_GoogleMap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "Map",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Locations);

/***/ }),

/***/ "./src/components/pages/Services.js":
/*!******************************************!*\
  !*** ./src/components/pages/Services.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _other_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../other/Footer */ "./src/components/other/Footer.js");
/* harmony import */ var _img_home_3_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/home-3.jpeg */ "./src/img/home-3.jpeg");
/* harmony import */ var _img_home_3_jpeg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_home_3_jpeg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_bedding_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/bedding.jpg */ "./src/img/bedding.jpg");
/* harmony import */ var _img_bedding_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_bedding_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_dryCleaningImg_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/dryCleaningImg.jpeg */ "./src/img/dryCleaningImg.jpeg");
/* harmony import */ var _img_dryCleaningImg_jpeg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_dryCleaningImg_jpeg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_shirts_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/shirts.jpg */ "./src/img/shirts.jpg");
/* harmony import */ var _img_shirts_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_shirts_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_home_2_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/home-2.jpeg */ "./src/img/home-2.jpeg");
/* harmony import */ var _img_home_2_jpeg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_home_2_jpeg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_home_4_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/home-4.jpeg */ "./src/img/home-4.jpeg");
/* harmony import */ var _img_home_4_jpeg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_home_4_jpeg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_wash_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../img/wash.jpg */ "./src/img/wash.jpg");
/* harmony import */ var _img_wash_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_wash_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_linen_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../img/linen.jpg */ "./src/img/linen.jpg");
/* harmony import */ var _img_linen_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_linen_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_leather_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../img/leather.jpg */ "./src/img/leather.jpg");
/* harmony import */ var _img_leather_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_leather_jpg__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/Users/J.B.Coronel/Code/mydeluxecleaners.com_client/client/src/components/pages/Services.js";












function Services() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Home-Wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "service_h1_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "servicesTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, "Services")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "services_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "services_flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "service_box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "image_container_services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_dryCleaningImg_jpeg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Dry Clean",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 29
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "description_container_services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 29
    }
  }, "Dry Cleaning"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 29
    }
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi beatae reiciendis hic quos odit voluptatibus ipsam quisquam, aspernatur totam, facilis ullam quaerat eligendi excepturi optio eum error, id reprehenderit culpa!"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "service_box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "image_container_services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_shirts_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "Dry Clean",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 29
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "description_container_services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 29
    }
  }, "Laundry"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
    }
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi beatae reiciendis hic quos odit voluptatibus ipsam quisquam, aspernatur totam, facilis ullam quaerat eligendi excepturi optio eum error, id reprehenderit culpa!"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "service_box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "image_container_services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_home_3_jpeg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Dry Clean",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "description_container_services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 29
    }
  }, "Bridal Care"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 29
    }
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi beatae reiciendis hic quos odit voluptatibus ipsam quisquam, aspernatur totam, facilis ullam quaerat eligendi excepturi optio eum error, id reprehenderit culpa!"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "service_box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "image_container_services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_home_2_jpeg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "Dry Clean",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 29
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "description_container_services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }, "Alterations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 29
    }
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi beatae reiciendis hic quos odit voluptatibus ipsam quisquam, aspernatur totam, facilis ullam quaerat eligendi excepturi optio eum error, id reprehenderit culpa!"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "service_box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "image_container_services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_linen_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "Dry Clean",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "description_container_services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 29
    }
  }, "Fine Linens"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi beatae reiciendis hic quos odit voluptatibus ipsam quisquam, aspernatur totam, facilis ullam quaerat eligendi excepturi optio eum error, id reprehenderit culpa!"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "service_box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "image_container_services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_bedding_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Dry Clean",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "description_container_services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 29
    }
  }, "Bedding"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 29
    }
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi beatae reiciendis hic quos odit voluptatibus ipsam quisquam, aspernatur totam, facilis ullam quaerat eligendi excepturi optio eum error, id reprehenderit culpa!"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "service_box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "image_container_services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_leather_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "Dry Clean",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 29
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "description_container_services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 29
    }
  }, "Leather & Suede"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi beatae reiciendis hic quos odit voluptatibus ipsam quisquam, aspernatur totam, facilis ullam quaerat eligendi excepturi optio eum error, id reprehenderit culpa!"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "service_box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "image_container_services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_wash_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "Dry Clean",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 29
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "description_container_services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 29
    }
  }, "Wash & Fold"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 29
    }
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi beatae reiciendis hic quos odit voluptatibus ipsam quisquam, aspernatur totam, facilis ullam quaerat eligendi excepturi optio eum error, id reprehenderit culpa!"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "service_box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "image_container_services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_home_4_jpeg__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "Dry Clean",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 29
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "description_container_services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 29
    }
  }, "Pick Up & Delivery"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 29
    }
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi beatae reiciendis hic quos odit voluptatibus ipsam quisquam, aspernatur totam, facilis ullam quaerat eligendi excepturi optio eum error, id reprehenderit culpa!"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_other_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),

/***/ "./src/components/pages/index.js":
/*!***************************************!*\
  !*** ./src/components/pages/index.js ***!
  \***************************************/
/*! exports provided: Home, About, Locations, Services, Delivery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./src/components/pages/Home.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return _Home__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About */ "./src/components/pages/About.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "About", function() { return _About__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Locations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Locations */ "./src/components/pages/Locations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Locations", function() { return _Locations__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services */ "./src/components/pages/Services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return _Services__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Delivery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Delivery */ "./src/components/pages/Delivery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Delivery", function() { return _Delivery__WEBPACK_IMPORTED_MODULE_4__["default"]; });








/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/index.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/img/Alterations.svg":
/*!*********************************!*\
  !*** ./src/img/Alterations.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Alterations.1aef0408.svg";

/***/ }),

/***/ "./src/img/Bedding.svg":
/*!*****************************!*\
  !*** ./src/img/Bedding.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Bedding.265f049d.svg";

/***/ }),

/***/ "./src/img/BridalTwo.svg":
/*!*******************************!*\
  !*** ./src/img/BridalTwo.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/BridalTwo.6fed0366.svg";

/***/ }),

/***/ "./src/img/DryClean.svg":
/*!******************************!*\
  !*** ./src/img/DryClean.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/DryClean.b555fdb6.svg";

/***/ }),

/***/ "./src/img/LaundryShirt.svg":
/*!**********************************!*\
  !*** ./src/img/LaundryShirt.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/LaundryShirt.6664fe49.svg";

/***/ }),

/***/ "./src/img/bedding.jpg":
/*!*****************************!*\
  !*** ./src/img/bedding.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bedding.f0212364.jpg";

/***/ }),

/***/ "./src/img/deluxeLogo.svg":
/*!********************************!*\
  !*** ./src/img/deluxeLogo.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/deluxeLogo.dd59c770.svg";

/***/ }),

/***/ "./src/img/dryCleaningImg.jpeg":
/*!*************************************!*\
  !*** ./src/img/dryCleaningImg.jpeg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/dryCleaningImg.9dea4857.jpeg";

/***/ }),

/***/ "./src/img/full_logo.svg":
/*!*******************************!*\
  !*** ./src/img/full_logo.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/full_logo.9e5223d1.svg";

/***/ }),

/***/ "./src/img/home-2.jpeg":
/*!*****************************!*\
  !*** ./src/img/home-2.jpeg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/home-2.60d4fb46.jpeg";

/***/ }),

/***/ "./src/img/home-3.jpeg":
/*!*****************************!*\
  !*** ./src/img/home-3.jpeg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/home-3.197d674b.jpeg";

/***/ }),

/***/ "./src/img/home-4.jpeg":
/*!*****************************!*\
  !*** ./src/img/home-4.jpeg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/home-4.352f37a3.jpeg";

/***/ }),

/***/ "./src/img/jones.jpg":
/*!***************************!*\
  !*** ./src/img/jones.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/jones.cd63fafd.jpg";

/***/ }),

/***/ "./src/img/leather.jpg":
/*!*****************************!*\
  !*** ./src/img/leather.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/leather.f97178fa.jpg";

/***/ }),

/***/ "./src/img/linen.jpg":
/*!***************************!*\
  !*** ./src/img/linen.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/linen.dcbda203.jpg";

/***/ }),

/***/ "./src/img/logo.svg":
/*!**************************!*\
  !*** ./src/img/logo.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.2ed9e0c6.svg";

/***/ }),

/***/ "./src/img/shirts.jpg":
/*!****************************!*\
  !*** ./src/img/shirts.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/shirts.61d4e078.jpg";

/***/ }),

/***/ "./src/img/wash.jpg":
/*!**************************!*\
  !*** ./src/img/wash.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/wash.9141455f.jpg";

/***/ }),

/***/ "./src/img/windy.jpg":
/*!***************************!*\
  !*** ./src/img/windy.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/windy.45fa9f50.jpg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/J.B.Coronel/Code/mydeluxecleaners.com_client/client/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["BrowserRouter"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }
}))), document.getElementById('root'));

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/J.B.Coronel/Code/mydeluxecleaners.com_client/client/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/J.B.Coronel/Code/mydeluxecleaners.com_client/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/J.B.Coronel/Code/mydeluxecleaners.com_client/client/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map