"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@vercel";
exports.ids = ["vendor-chunks/@vercel"];
exports.modules = {

/***/ "(ssr)/./node_modules/@vercel/analytics/dist/react/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/@vercel/analytics/dist/react/index.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Analytics: () => (/* binding */ Analytics),\n/* harmony export */   track: () => (/* binding */ track)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\"use client\";\n\n// src/react.tsx\n\n\n// package.json\nvar name = \"@vercel/analytics\";\nvar version = \"1.2.2\";\n\n// src/queue.ts\nvar initQueue = () => {\n  if (window.va)\n    return;\n  window.va = function a(...params) {\n    (window.vaq = window.vaq || []).push(params);\n  };\n};\n\n// src/utils.ts\nfunction isBrowser() {\n  return typeof window !== \"undefined\";\n}\nfunction detectEnvironment() {\n  try {\n    const env = \"development\";\n    if (env === \"development\" || env === \"test\") {\n      return \"development\";\n    }\n  } catch (e) {\n  }\n  return \"production\";\n}\nfunction setMode(mode = \"auto\") {\n  if (mode === \"auto\") {\n    window.vam = detectEnvironment();\n    return;\n  }\n  window.vam = mode;\n}\nfunction getMode() {\n  const mode = isBrowser() ? window.vam : detectEnvironment();\n  return mode || \"production\";\n}\nfunction isProduction() {\n  return getMode() === \"production\";\n}\nfunction isDevelopment() {\n  return getMode() === \"development\";\n}\nfunction removeKey(key, { [key]: _, ...rest }) {\n  return rest;\n}\nfunction parseProperties(properties, options) {\n  if (!properties)\n    return void 0;\n  let props = properties;\n  const errorProperties = [];\n  for (const [key, value] of Object.entries(properties)) {\n    if (typeof value === \"object\" && value !== null) {\n      if (options.strip) {\n        props = removeKey(key, props);\n      } else {\n        errorProperties.push(key);\n      }\n    }\n  }\n  if (errorProperties.length > 0 && !options.strip) {\n    throw Error(\n      `The following properties are not valid: ${errorProperties.join(\n        \", \"\n      )}. Only strings, numbers, booleans, and null are allowed.`\n    );\n  }\n  return props;\n}\n\n// src/generic.ts\nvar DEV_SCRIPT_URL = \"https://va.vercel-scripts.com/v1/script.debug.js\";\nvar PROD_SCRIPT_URL = \"/_vercel/insights/script.js\";\nfunction inject(props = {\n  debug: true\n}) {\n  var _a;\n  if (!isBrowser())\n    return;\n  setMode(props.mode);\n  initQueue();\n  if (props.beforeSend) {\n    (_a = window.va) == null ? void 0 : _a.call(window, \"beforeSend\", props.beforeSend);\n  }\n  const src = props.scriptSrc || (isDevelopment() ? DEV_SCRIPT_URL : PROD_SCRIPT_URL);\n  if (document.head.querySelector(`script[src*=\"${src}\"]`))\n    return;\n  const script = document.createElement(\"script\");\n  script.src = src;\n  script.defer = true;\n  script.dataset.sdkn = name + (props.framework ? `/${props.framework}` : \"\");\n  script.dataset.sdkv = version;\n  if (props.disableAutoTrack) {\n    script.dataset.disableAutoTrack = \"1\";\n  }\n  if (props.endpoint) {\n    script.dataset.endpoint = props.endpoint;\n  }\n  if (props.dsn) {\n    script.dataset.dsn = props.dsn;\n  }\n  script.onerror = () => {\n    const errorMessage = isDevelopment() ? \"Please check if any ad blockers are enabled and try again.\" : \"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.\";\n    console.log(\n      `[Vercel Web Analytics] Failed to load script from ${src}. ${errorMessage}`\n    );\n  };\n  if (isDevelopment() && props.debug === false) {\n    script.dataset.debug = \"false\";\n  }\n  document.head.appendChild(script);\n}\nfunction track(name2, properties) {\n  var _a, _b;\n  if (!isBrowser()) {\n    const msg = \"[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment\";\n    if (isProduction()) {\n      console.warn(msg);\n    } else {\n      throw new Error(msg);\n    }\n    return;\n  }\n  if (!properties) {\n    (_a = window.va) == null ? void 0 : _a.call(window, \"event\", { name: name2 });\n    return;\n  }\n  try {\n    const props = parseProperties(properties, {\n      strip: isProduction()\n    });\n    (_b = window.va) == null ? void 0 : _b.call(window, \"event\", {\n      name: name2,\n      data: props\n    });\n  } catch (err) {\n    if (err instanceof Error && isDevelopment()) {\n      console.error(err);\n    }\n  }\n}\nfunction pageview({ route, path }) {\n  var _a;\n  (_a = window.va) == null ? void 0 : _a.call(window, \"pageview\", {\n    route,\n    path\n  });\n}\n\n// src/react.tsx\nfunction Analytics(props) {\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    inject({\n      framework: props.framework || \"react\",\n      ...props.route !== void 0 && { disableAutoTrack: true },\n      ...props\n    });\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (props.route && props.path) {\n      pageview({\n        route: props.route,\n        path: props.path\n      });\n    }\n  }, [props.route, props.path]);\n  return null;\n}\n\n//# sourceMappingURL=index.mjs.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHZlcmNlbC9hbmFseXRpY3MvZGlzdC9yZWFjdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUE7QUFDa0M7O0FBRWxDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixhQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQkFBbUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsSUFBSTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxnQkFBZ0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsSUFBSSxJQUFJLGFBQWE7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxhQUFhO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLEVBQUUsZ0RBQVM7QUFDWDtBQUNBO0FBQ0EscUNBQXFDLHdCQUF3QjtBQUM3RDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsRUFBRSxnREFBUztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFJRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29tcGxhaW50Ly4vbm9kZV9tb2R1bGVzL0B2ZXJjZWwvYW5hbHl0aWNzL2Rpc3QvcmVhY3QvaW5kZXgubWpzP2QwNTUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbi8vIHNyYy9yZWFjdC50c3hcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBwYWNrYWdlLmpzb25cbnZhciBuYW1lID0gXCJAdmVyY2VsL2FuYWx5dGljc1wiO1xudmFyIHZlcnNpb24gPSBcIjEuMi4yXCI7XG5cbi8vIHNyYy9xdWV1ZS50c1xudmFyIGluaXRRdWV1ZSA9ICgpID0+IHtcbiAgaWYgKHdpbmRvdy52YSlcbiAgICByZXR1cm47XG4gIHdpbmRvdy52YSA9IGZ1bmN0aW9uIGEoLi4ucGFyYW1zKSB7XG4gICAgKHdpbmRvdy52YXEgPSB3aW5kb3cudmFxIHx8IFtdKS5wdXNoKHBhcmFtcyk7XG4gIH07XG59O1xuXG4vLyBzcmMvdXRpbHMudHNcbmZ1bmN0aW9uIGlzQnJvd3NlcigpIHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCI7XG59XG5mdW5jdGlvbiBkZXRlY3RFbnZpcm9ubWVudCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOVjtcbiAgICBpZiAoZW52ID09PSBcImRldmVsb3BtZW50XCIgfHwgZW52ID09PSBcInRlc3RcIikge1xuICAgICAgcmV0dXJuIFwiZGV2ZWxvcG1lbnRcIjtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgfVxuICByZXR1cm4gXCJwcm9kdWN0aW9uXCI7XG59XG5mdW5jdGlvbiBzZXRNb2RlKG1vZGUgPSBcImF1dG9cIikge1xuICBpZiAobW9kZSA9PT0gXCJhdXRvXCIpIHtcbiAgICB3aW5kb3cudmFtID0gZGV0ZWN0RW52aXJvbm1lbnQoKTtcbiAgICByZXR1cm47XG4gIH1cbiAgd2luZG93LnZhbSA9IG1vZGU7XG59XG5mdW5jdGlvbiBnZXRNb2RlKCkge1xuICBjb25zdCBtb2RlID0gaXNCcm93c2VyKCkgPyB3aW5kb3cudmFtIDogZGV0ZWN0RW52aXJvbm1lbnQoKTtcbiAgcmV0dXJuIG1vZGUgfHwgXCJwcm9kdWN0aW9uXCI7XG59XG5mdW5jdGlvbiBpc1Byb2R1Y3Rpb24oKSB7XG4gIHJldHVybiBnZXRNb2RlKCkgPT09IFwicHJvZHVjdGlvblwiO1xufVxuZnVuY3Rpb24gaXNEZXZlbG9wbWVudCgpIHtcbiAgcmV0dXJuIGdldE1vZGUoKSA9PT0gXCJkZXZlbG9wbWVudFwiO1xufVxuZnVuY3Rpb24gcmVtb3ZlS2V5KGtleSwgeyBba2V5XTogXywgLi4ucmVzdCB9KSB7XG4gIHJldHVybiByZXN0O1xufVxuZnVuY3Rpb24gcGFyc2VQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIG9wdGlvbnMpIHtcbiAgaWYgKCFwcm9wZXJ0aWVzKVxuICAgIHJldHVybiB2b2lkIDA7XG4gIGxldCBwcm9wcyA9IHByb3BlcnRpZXM7XG4gIGNvbnN0IGVycm9yUHJvcGVydGllcyA9IFtdO1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcm9wZXJ0aWVzKSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIGlmIChvcHRpb25zLnN0cmlwKSB7XG4gICAgICAgIHByb3BzID0gcmVtb3ZlS2V5KGtleSwgcHJvcHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JQcm9wZXJ0aWVzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGVycm9yUHJvcGVydGllcy5sZW5ndGggPiAwICYmICFvcHRpb25zLnN0cmlwKSB7XG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICBgVGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzIGFyZSBub3QgdmFsaWQ6ICR7ZXJyb3JQcm9wZXJ0aWVzLmpvaW4oXG4gICAgICAgIFwiLCBcIlxuICAgICAgKX0uIE9ubHkgc3RyaW5ncywgbnVtYmVycywgYm9vbGVhbnMsIGFuZCBudWxsIGFyZSBhbGxvd2VkLmBcbiAgICApO1xuICB9XG4gIHJldHVybiBwcm9wcztcbn1cblxuLy8gc3JjL2dlbmVyaWMudHNcbnZhciBERVZfU0NSSVBUX1VSTCA9IFwiaHR0cHM6Ly92YS52ZXJjZWwtc2NyaXB0cy5jb20vdjEvc2NyaXB0LmRlYnVnLmpzXCI7XG52YXIgUFJPRF9TQ1JJUFRfVVJMID0gXCIvX3ZlcmNlbC9pbnNpZ2h0cy9zY3JpcHQuanNcIjtcbmZ1bmN0aW9uIGluamVjdChwcm9wcyA9IHtcbiAgZGVidWc6IHRydWVcbn0pIHtcbiAgdmFyIF9hO1xuICBpZiAoIWlzQnJvd3NlcigpKVxuICAgIHJldHVybjtcbiAgc2V0TW9kZShwcm9wcy5tb2RlKTtcbiAgaW5pdFF1ZXVlKCk7XG4gIGlmIChwcm9wcy5iZWZvcmVTZW5kKSB7XG4gICAgKF9hID0gd2luZG93LnZhKSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbCh3aW5kb3csIFwiYmVmb3JlU2VuZFwiLCBwcm9wcy5iZWZvcmVTZW5kKTtcbiAgfVxuICBjb25zdCBzcmMgPSBwcm9wcy5zY3JpcHRTcmMgfHwgKGlzRGV2ZWxvcG1lbnQoKSA/IERFVl9TQ1JJUFRfVVJMIDogUFJPRF9TQ1JJUFRfVVJMKTtcbiAgaWYgKGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyYyo9XCIke3NyY31cIl1gKSlcbiAgICByZXR1cm47XG4gIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gIHNjcmlwdC5zcmMgPSBzcmM7XG4gIHNjcmlwdC5kZWZlciA9IHRydWU7XG4gIHNjcmlwdC5kYXRhc2V0LnNka24gPSBuYW1lICsgKHByb3BzLmZyYW1ld29yayA/IGAvJHtwcm9wcy5mcmFtZXdvcmt9YCA6IFwiXCIpO1xuICBzY3JpcHQuZGF0YXNldC5zZGt2ID0gdmVyc2lvbjtcbiAgaWYgKHByb3BzLmRpc2FibGVBdXRvVHJhY2spIHtcbiAgICBzY3JpcHQuZGF0YXNldC5kaXNhYmxlQXV0b1RyYWNrID0gXCIxXCI7XG4gIH1cbiAgaWYgKHByb3BzLmVuZHBvaW50KSB7XG4gICAgc2NyaXB0LmRhdGFzZXQuZW5kcG9pbnQgPSBwcm9wcy5lbmRwb2ludDtcbiAgfVxuICBpZiAocHJvcHMuZHNuKSB7XG4gICAgc2NyaXB0LmRhdGFzZXQuZHNuID0gcHJvcHMuZHNuO1xuICB9XG4gIHNjcmlwdC5vbmVycm9yID0gKCkgPT4ge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGlzRGV2ZWxvcG1lbnQoKSA/IFwiUGxlYXNlIGNoZWNrIGlmIGFueSBhZCBibG9ja2VycyBhcmUgZW5hYmxlZCBhbmQgdHJ5IGFnYWluLlwiIDogXCJCZSBzdXJlIHRvIGVuYWJsZSBXZWIgQW5hbHl0aWNzIGZvciB5b3VyIHByb2plY3QgYW5kIGRlcGxveSBhZ2Fpbi4gU2VlIGh0dHBzOi8vdmVyY2VsLmNvbS9kb2NzL2FuYWx5dGljcy9xdWlja3N0YXJ0IGZvciBtb3JlIGluZm9ybWF0aW9uLlwiO1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYFtWZXJjZWwgV2ViIEFuYWx5dGljc10gRmFpbGVkIHRvIGxvYWQgc2NyaXB0IGZyb20gJHtzcmN9LiAke2Vycm9yTWVzc2FnZX1gXG4gICAgKTtcbiAgfTtcbiAgaWYgKGlzRGV2ZWxvcG1lbnQoKSAmJiBwcm9wcy5kZWJ1ZyA9PT0gZmFsc2UpIHtcbiAgICBzY3JpcHQuZGF0YXNldC5kZWJ1ZyA9IFwiZmFsc2VcIjtcbiAgfVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59XG5mdW5jdGlvbiB0cmFjayhuYW1lMiwgcHJvcGVydGllcykge1xuICB2YXIgX2EsIF9iO1xuICBpZiAoIWlzQnJvd3NlcigpKSB7XG4gICAgY29uc3QgbXNnID0gXCJbVmVyY2VsIFdlYiBBbmFseXRpY3NdIFBsZWFzZSBpbXBvcnQgYHRyYWNrYCBmcm9tIGBAdmVyY2VsL2FuYWx5dGljcy9zZXJ2ZXJgIHdoZW4gdXNpbmcgdGhpcyBmdW5jdGlvbiBpbiBhIHNlcnZlciBlbnZpcm9ubWVudFwiO1xuICAgIGlmIChpc1Byb2R1Y3Rpb24oKSkge1xuICAgICAgY29uc29sZS53YXJuKG1zZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCFwcm9wZXJ0aWVzKSB7XG4gICAgKF9hID0gd2luZG93LnZhKSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbCh3aW5kb3csIFwiZXZlbnRcIiwgeyBuYW1lOiBuYW1lMiB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBwcm9wcyA9IHBhcnNlUHJvcGVydGllcyhwcm9wZXJ0aWVzLCB7XG4gICAgICBzdHJpcDogaXNQcm9kdWN0aW9uKClcbiAgICB9KTtcbiAgICAoX2IgPSB3aW5kb3cudmEpID09IG51bGwgPyB2b2lkIDAgOiBfYi5jYWxsKHdpbmRvdywgXCJldmVudFwiLCB7XG4gICAgICBuYW1lOiBuYW1lMixcbiAgICAgIGRhdGE6IHByb3BzXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvciAmJiBpc0RldmVsb3BtZW50KCkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHBhZ2V2aWV3KHsgcm91dGUsIHBhdGggfSkge1xuICB2YXIgX2E7XG4gIChfYSA9IHdpbmRvdy52YSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmNhbGwod2luZG93LCBcInBhZ2V2aWV3XCIsIHtcbiAgICByb3V0ZSxcbiAgICBwYXRoXG4gIH0pO1xufVxuXG4vLyBzcmMvcmVhY3QudHN4XG5mdW5jdGlvbiBBbmFseXRpY3MocHJvcHMpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbmplY3Qoe1xuICAgICAgZnJhbWV3b3JrOiBwcm9wcy5mcmFtZXdvcmsgfHwgXCJyZWFjdFwiLFxuICAgICAgLi4ucHJvcHMucm91dGUgIT09IHZvaWQgMCAmJiB7IGRpc2FibGVBdXRvVHJhY2s6IHRydWUgfSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvcHMucm91dGUgJiYgcHJvcHMucGF0aCkge1xuICAgICAgcGFnZXZpZXcoe1xuICAgICAgICByb3V0ZTogcHJvcHMucm91dGUsXG4gICAgICAgIHBhdGg6IHByb3BzLnBhdGhcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3Byb3BzLnJvdXRlLCBwcm9wcy5wYXRoXSk7XG4gIHJldHVybiBudWxsO1xufVxuZXhwb3J0IHtcbiAgQW5hbHl0aWNzLFxuICB0cmFja1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@vercel/analytics/dist/react/index.mjs\n");

/***/ }),

/***/ "(rsc)/./node_modules/@vercel/analytics/dist/react/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/@vercel/analytics/dist/react/index.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Analytics: () => (/* binding */ e0),
/* harmony export */   track: () => (/* binding */ e1)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\final_project\Complaint\node_modules\@vercel\analytics\dist\react\index.mjs`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Analytics"];

const e1 = proxy["track"];


/***/ })

};
;