$(document).ready(function() {
  // initialize the mobile sidebar
  $('.sidenav').sidenav({ edge: 'right' });

  // Set the dropdown to be below it's li tab, and the text to black
  $('.dropdown-trigger').dropdown({ coverTrigger: false, closeOnClick: true });
  $('.dropdown-content>li>a').css('color', 'black');

  // For allowing clickable images that enlarge
  $('.materialboxed').materialbox();

  $('.parallax').parallax();

  $('.tooltipped').tooltip();
});

/* !
 * FullCalendar v3.9.0
 * Docs & License: https://fullcalendar.io/
 * (c) 2018 Adam Shaw
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = factory(require('fullcalendar'), require('jquery'));
  } else if (typeof define === 'function' && define.amd) {
    define(['fullcalendar', 'jquery'], factory);
  } else if (typeof exports === 'object') {
    factory(require('fullcalendar'), require('jquery'));
  } else factory(root['FullCalendar'], root['jQuery']);
})(typeof self !== 'undefined' ? self : this, function(
  __WEBPACK_EXTERNAL_MODULE_1__,
  __WEBPACK_EXTERNAL_MODULE_3__
) {
  return /** ****/ (function(modules) {
    // webpackBootstrap
    /** ****/ // The module cache
    /** ****/ const installedModules = {}; // The require function
    /** ****/
    /** ****/ /** ****/ function __webpack_require__(moduleId) {
      /** ****/
      /** ****/ // Check if module is in cache
      /** ****/ if (installedModules[moduleId]) {
        /** ****/ return installedModules[moduleId].exports;
        /** ****/
      } // Create a new module (and put it into the cache)
      /** ****/ /** ****/ const module = (installedModules[moduleId] = {
        /** ****/ i: moduleId,
        /** ****/ l: false,
        /** ****/ exports: {},
        /** ****/
      }); // Execute the module function
      /** ****/
      /** ****/ /** ****/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ); // Flag the module as loaded
      /** ****/
      /** ****/ /** ****/ module.l = true; // Return the exports of the module
      /** ****/
      /** ****/ /** ****/ return module.exports;
      /** ****/
    } // expose the modules object (__webpack_modules__)
    /** ****/
    /** ****/
    /** ****/ /** ****/ __webpack_require__.m = modules; // expose the module cache
    /** ****/
    /** ****/ /** ****/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /** ****/
    /** ****/ /** ****/ __webpack_require__.d = function(exports, name, getter) {
      /** ****/ if (!__webpack_require__.o(exports, name)) {
        /** ****/ Object.defineProperty(exports, name, {
          /** ****/ configurable: false,
          /** ****/ enumerable: true,
          /** ****/ get: getter,
          /** ****/
        });
        /** ****/
      }
      /** ****/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /** ****/
    /** ****/ /** ****/ __webpack_require__.n = function(module) {
      /** ****/ const getter =
        module && module.__esModule
          ? /** ****/ function getDefault() {
              return module['default'];
            }
          : /** ****/ function getModuleExports() {
              return module;
            };
      /** ****/ __webpack_require__.d(getter, 'a', getter);
      /** ****/ return getter;
      /** ****/
    }; // Object.prototype.hasOwnProperty.call
    /** ****/
    /** ****/ /** ****/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /** ****/
    /** ****/ /** ****/ __webpack_require__.p = ''; // Load entry module and return exports
    /** ****/
    /** ****/ /** ****/ return __webpack_require__((__webpack_require__.s = 266));
    /** ****/
  })(
    /** **********************************************************************/
    /** ****/ {
      /** */ 1: /** */ function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

        /** */
      },

      /** */ 2: /** */ function(module, exports) {
        /*
derived from:
https://github.com/Microsoft/tslib/blob/v1.6.0/tslib.js

only include the helpers we need, to keep down filesize
*/
        const extendStatics =
          Object.setPrototypeOf
          || ({ __proto__: [] } instanceof Array
            && function(d, b) {
              d.__proto__ = b;
            })
          || function(d, b) {
            for (const p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
          };
        exports.__extends = function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype =
            b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
        };

        /** */
      },

      /** */ 266: /** */ function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        const exportHooks = __webpack_require__(1);
        const GcalEventSource_1 = __webpack_require__(267);
        exportHooks.EventSourceParser.registerClass(GcalEventSource_1.default);
        exportHooks.GcalEventSource = GcalEventSource_1.default;

        /** */
      },

      /** */ 267: /** */ function(module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        const tslib_1 = __webpack_require__(2);
        const $ = __webpack_require__(3);
        const fullcalendar_1 = __webpack_require__(1);
        const GcalEventSource = /** @class */ (function(_super) {
          tslib_1.__extends(GcalEventSource, _super);
          function GcalEventSource() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          GcalEventSource.parse = function(rawInput, calendar) {
            let rawProps;
            if (typeof rawInput === 'object') {
              rawProps = rawInput;
            } else if (typeof rawInput === 'string') {
              rawProps = { url: rawInput }; // url will be parsed with parseGoogleCalendarId
            }
            if (rawProps) {
              return fullcalendar_1.EventSource.parse.call(this, rawProps, calendar);
            }
            return false;
          };
          GcalEventSource.prototype.fetch = function(start, end, timezone) {
            const _this = this;
            const url = this.buildUrl();
            const requestParams = this.buildRequestParams(start, end, timezone);
            const ajaxSettings = this.ajaxSettings || {};
            const onSuccess = ajaxSettings.success;
            if (!requestParams) {
              return fullcalendar_1.Promise.reject();
            }
            this.calendar.pushLoading();
            return fullcalendar_1.Promise.construct(function(onResolve, onReject) {
              $.ajax(
                $.extend(
                  {}, // destination
                  fullcalendar_1.JsonFeedEventSource.AJAX_DEFAULTS,
                  ajaxSettings,
                  {
                    url: url,
                    data: requestParams,
                    success: function(responseData, status, xhr) {
                      let rawEventDefs;
                      let successRes;
                      _this.calendar.popLoading();
                      if (responseData.error) {
                        _this.reportError(
                          'Google Calendar API: ' + responseData.error.message,
                          responseData.error.errors
                        );
                        onReject();
                      } else if (responseData.items) {
                        rawEventDefs = _this.gcalItemsToRawEventDefs(
                          responseData.items,
                          requestParams.timeZone
                        );
                        successRes = fullcalendar_1.applyAll(onSuccess, _this, [
                          responseData,
                          status,
                          xhr,
                        ]); // passthru
                        if ($.isArray(successRes)) {
                          rawEventDefs = successRes;
                        }
                        onResolve(_this.parseEventDefs(rawEventDefs));
                      }
                    },
                    error: function(xhr, statusText, errorThrown) {
                      _this.reportError(
                        'Google Calendar network failure: ' + statusText,
                        [xhr, errorThrown]
                      );
                      _this.calendar.popLoading();
                      onReject();
                    },
                  }
                )
              );
            });
          };
          GcalEventSource.prototype.gcalItemsToRawEventDefs = function(
            items,
            gcalTimezone
          ) {
            const _this = this;
            return items.map(function(item) {
              return _this.gcalItemToRawEventDef(item, gcalTimezone);
            });
          };
          GcalEventSource.prototype.gcalItemToRawEventDef = function(item, gcalTimezone) {
            let url = item.htmlLink || null;
            // make the URLs for each event show times in the correct timezone
            if (url && gcalTimezone) {
              url = injectQsComponent(url, 'ctz=' + gcalTimezone);
            }
            return {
              id: item.id,
              title: item.summary,
              start: item.start.dateTime || item.start.date,
              end: item.end.dateTime || item.end.date,
              // url: url,
              location: item.location,
              description: item.description,
            };
          };
          GcalEventSource.prototype.buildUrl = function() {
            return (
              GcalEventSource.API_BASE +
              '/' +
              encodeURIComponent(this.googleCalendarId) +
              '/events?callback=?'
            ); // jsonp
          };
          GcalEventSource.prototype.buildRequestParams = function(start, end, timezone) {
            const apiKey =
              this.googleCalendarApiKey || this.calendar.opt('googleCalendarApiKey');
            let params;
            if (!apiKey) {
              this.reportError(
                'Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calendar/'
              );
              return null;
            }
            // The API expects an ISO8601 datetime with a time and timezone part.
            // Since the calendar's timezone offset isn't always known, request the date in UTC and pad it by a day on each
            // side, guaranteeing we will receive all events in the desired range, albeit a superset.
            // .utc() will set a zone and give it a 00:00:00 time.
            if (!start.hasZone()) {
              start = start
                .clone()
                .utc()
                .add(-1, 'day');
            }
            if (!end.hasZone()) {
              end = end
                .clone()
                .utc()
                .add(1, 'day');
            }
            params = $.extend(this.ajaxSettings.data || {}, {
              key: apiKey,
              timeMin: start.format(),
              timeMax: end.format(),
              singleEvents: true,
              maxResults: 9999,
            });
            if (timezone && timezone !== 'local') {
              // when sending timezone names to Google, only accepts underscores, not spaces
              params.timeZone = timezone.replace(' ', '_');
            }
            return params;
          };
          GcalEventSource.prototype.reportError = function(message, apiErrorObjs) {
            const calendar = this.calendar;
            const calendarOnError = calendar.opt('googleCalendarError');
            const errorObjs = apiErrorObjs || [{ message: message }]; // to be passed into error handlers
            if (this.googleCalendarError) {
              this.googleCalendarError.apply(calendar, errorObjs);
            }
            if (calendarOnError) {
              calendarOnError.apply(calendar, errorObjs);
            }
            // print error to debug console
            fullcalendar_1.warn.apply(null, [message].concat(apiErrorObjs || []));
          };
          GcalEventSource.prototype.getPrimitive = function() {
            return this.googleCalendarId;
          };
          GcalEventSource.prototype.applyManualStandardProps = function(rawProps) {
            const superSuccess = fullcalendar_1.EventSource.prototype.applyManualStandardProps.apply(
              this,
              arguments
            );
            let googleCalendarId = rawProps.googleCalendarId;
            if (googleCalendarId == null && rawProps.url) {
              googleCalendarId = parseGoogleCalendarId(rawProps.url);
            }
            if (googleCalendarId != null) {
              this.googleCalendarId = googleCalendarId;
              return superSuccess;
            }
            return false;
          };
          GcalEventSource.prototype.applyMiscProps = function(rawProps) {
            if (!this.ajaxSettings) {
              this.ajaxSettings = {};
            }
            $.extend(this.ajaxSettings, rawProps);
          };
          GcalEventSource.API_BASE = 'https://www.googleapis.com/calendar/v3/calendars';
          return GcalEventSource;
        })(fullcalendar_1.EventSource);
        exports.default = GcalEventSource;
        GcalEventSource.defineStandardProps({
          // manually process...
          url: false,
          googleCalendarId: false,
          // automatically transfer...
          googleCalendarApiKey: true,
          googleCalendarError: true,
        });
        function parseGoogleCalendarId(url) {
          let match;
          // detect if the ID was specified as a single string.
          // will match calendars like "asdf1234@calendar.google.com" in addition to person email calendars.
          if (/^[^\/]+@([^\/\.]+\.)*(google|googlemail|gmail)\.com$/.test(url)) {
            return url;
          } else if (
            (match = /^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^\/]*)/.exec(
              url
            ))
            || (match = /^https?:\/\/www.google.com\/calendar\/feeds\/([^\/]*)/.exec(url))
          ) {
            return decodeURIComponent(match[1]);
          }
        }
        // Injects a string like "arg=value" into the querystring of a URL
        function injectQsComponent(url, component) {
          // inject it after the querystring but before the fragment
          return url.replace(/(\?.*?)?(#|$)/, function(whole, qs, hash) {
            return (qs ? qs + '&' : '?') + component + hash;
          });
        }

        /** */
      },

      /** */ 3: /** */ function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

        /** */
      },

      /** ****/
    }
  );
});
