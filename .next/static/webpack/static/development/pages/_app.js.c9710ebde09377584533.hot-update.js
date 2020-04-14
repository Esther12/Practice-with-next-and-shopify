webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/@shopify/app-bridge-react/components/ClientRouter/ClientRouter.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/ClientRouter/ClientRouter.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var context_1 = __webpack_require__(/*! ../../context */ "./node_modules/@shopify/app-bridge-react/context.js");
var router_1 = __webpack_require__(/*! ./router */ "./node_modules/@shopify/app-bridge-react/components/ClientRouter/router.js");
/**
 * ClientRouter component
 *
 * @remarks
 * React component which keeps the Shopify admin url in sync with the app url
 *
 * @public
 */
var ClientRouter = /** @class */ (function (_super) {
    __extends(ClientRouter, _super);
    function ClientRouter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClientRouter.prototype.componentDidMount = function () {
        var history = this.props.history;
        this.unsubscribe = router_1.handleRouteChange(this.context, history);
    };
    ClientRouter.prototype.componentWillUnmount = function () {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    };
    ClientRouter.prototype.render = function () {
        return null;
    };
    ClientRouter.contextType = context_1.AppBridgeContext;
    return ClientRouter;
}(react_1.default.Component));
exports.default = ClientRouter;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/ClientRouter/hook.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/ClientRouter/hook.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var context_1 = __webpack_require__(/*! ../../context */ "./node_modules/@shopify/app-bridge-react/context.js");
var router_1 = __webpack_require__(/*! ./router */ "./node_modules/@shopify/app-bridge-react/components/ClientRouter/router.js");
/**
 * useRoutePropagation
 *
 * @remarks
 * A hook which keeps the Shopify admin url in sync with the app url
 *
 * @public
 */
function useClientRouting(history) {
    var app = react_1.useContext(context_1.AppBridgeContext);
    react_1.useEffect(function () {
        if (!app) {
            return;
        }
        return router_1.handleRouteChange(app, history);
    }, [app, history]);
}
exports.default = useClientRouting;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/ClientRouter/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/ClientRouter/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClientRouter_1 = __webpack_require__(/*! ./ClientRouter */ "./node_modules/@shopify/app-bridge-react/components/ClientRouter/ClientRouter.js");
exports.ClientRouter = ClientRouter_1.default;
var hook_1 = __webpack_require__(/*! ./hook */ "./node_modules/@shopify/app-bridge-react/components/ClientRouter/hook.js");
exports.useClientRouting = hook_1.default;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/ClientRouter/router.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/ClientRouter/router.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = __webpack_require__(/*! @shopify/app-bridge/actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
function handleRouteChange(app, history) {
    return app.subscribe(actions_1.Redirect.ActionType.APP, function (_a) {
        var path = _a.path;
        history.replace(path);
    });
}
exports.handleRouteChange = handleRouteChange;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/Loading/Loading.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/Loading/Loading.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var actions_1 = __webpack_require__(/*! @shopify/app-bridge/actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
var context_1 = __webpack_require__(/*! ../../context */ "./node_modules/@shopify/app-bridge-react/context.js");
/**
 * Loading component
 *
 * @remarks
 * React component which wraps the Shopify App Bridge Loading action.
 *
 * @public
 */
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Loading.prototype.componentDidMount = function () {
        var app = this.context;
        this.loading = actions_1.Loading.create(app);
        if (this.loading != null) {
            this.loading.dispatch(actions_1.Loading.Action.START);
        }
    };
    Loading.prototype.componentWillUnmount = function () {
        if (this.loading != null) {
            this.loading.dispatch(actions_1.Loading.Action.STOP);
        }
    };
    Loading.prototype.render = function () {
        return null;
    };
    Loading.contextType = context_1.AppBridgeContext;
    return Loading;
}(react_1.default.Component));
exports.default = Loading;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/Loading/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/Loading/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Loading_1 = __importDefault(__webpack_require__(/*! ./Loading */ "./node_modules/@shopify/app-bridge-react/components/Loading/Loading.js"));
exports.default = Loading_1.default;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/Modal/Modal.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/Modal/Modal.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var actions_1 = __webpack_require__(/*! @shopify/app-bridge/actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
var transformers_1 = __webpack_require__(/*! ../../utilities/transformers */ "./node_modules/@shopify/app-bridge-react/utilities/transformers.js");
var context_1 = __webpack_require__(/*! ../../context */ "./node_modules/@shopify/app-bridge-react/context.js");
/**
 * Modal component
 *
 * @remarks
 * React component which wraps the Shopify App Bridge Modal action.
 *
 * @public
 */
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.focusReturnPoint = null;
        return _this;
    }
    Modal.prototype.componentDidMount = function () {
        var _a = this.props, open = _a.open, onClose = _a.onClose;
        var app = this.context;
        this.modal = actions_1.Modal.create(app, this.transformProps());
        if (onClose != null)
            this.modal.subscribe(actions_1.Modal.Action.CLOSE, onClose);
        if (open) {
            this.focusReturnPoint = document.activeElement;
            this.modal.dispatch(actions_1.Modal.Action.OPEN);
        }
    };
    Modal.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, open = _a.open, onClose = _a.onClose;
        var wasOpen = prevProps.open;
        var transformedProps = this.transformProps();
        this.modal.unsubscribe();
        if (isIframeModal(transformedProps)) {
            this.modal.set(transformedProps, open);
        }
        else {
            this.modal.set(transformedProps, open);
        }
        if (onClose != null)
            this.modal.subscribe(actions_1.Modal.Action.CLOSE, onClose);
        if (wasOpen !== open) {
            if (open) {
                this.modal.dispatch(actions_1.Modal.Action.OPEN);
            }
            else {
                this.modal.dispatch(actions_1.Modal.Action.CLOSE);
            }
        }
        if (!wasOpen && open) {
            this.focusReturnPoint = document.activeElement;
        }
        else if (wasOpen &&
            !open &&
            this.focusReturnPoint != null &&
            document.contains(this.focusReturnPoint)) {
            this.focusReturnPoint.focus();
            this.focusReturnPoint = null;
        }
    };
    Modal.prototype.componentWillUnmount = function () {
        this.modal.unsubscribe();
        if (this.props.open) {
            this.modal.dispatch(actions_1.Modal.Action.CLOSE);
        }
    };
    Modal.prototype.render = function () {
        return null;
    };
    Modal.prototype.transformProps = function () {
        var _a = this.props, title = _a.title, size = _a.size, message = _a.message, src = _a.src, primaryAction = _a.primaryAction, secondaryActions = _a.secondaryActions;
        var app = this.context;
        var safeSize = size != null ? actions_1.Modal.Size[size] : undefined;
        var srcPayload = {};
        if (src != null) {
            if (src.match('^https?://')) {
                srcPayload.url = src;
            }
            else {
                srcPayload.path = src;
            }
        }
        return __assign({ title: title,
            message: message, size: safeSize }, srcPayload, { footer: {
                buttons: transformers_1.transformActions(app, {
                    primaryAction: primaryAction,
                    secondaryActions: secondaryActions,
                }),
            } });
    };
    Modal.contextType = context_1.AppBridgeContext;
    return Modal;
}(react_1.default.PureComponent));
function isIframeModal(options) {
    return (typeof options.url === 'string' ||
        typeof options.path === 'string');
}
exports.default = Modal;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/Modal/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/Modal/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Modal_1 = __importDefault(__webpack_require__(/*! ./Modal */ "./node_modules/@shopify/app-bridge-react/components/Modal/Modal.js"));
exports.default = Modal_1.default;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/Provider/Provider.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/Provider/Provider.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var app_bridge_1 = __importStar(__webpack_require__(/*! @shopify/app-bridge */ "./node_modules/@shopify/app-bridge/index.js"));
var context_1 = __webpack_require__(/*! ../../context */ "./node_modules/@shopify/app-bridge-react/context.js");
var packageJson = __webpack_require__(/*! ../../package.json */ "./node_modules/@shopify/app-bridge-react/package.json");
/**
 * Create an App Bridge client application from a config and pass it as the
 * value to the context provider.
 *
 * @remarks
 * You'll probably want something a little more robust than storing the current
 * app instance in a module-level global.
 *
 * @public
 */
var Provider = /** @class */ (function (_super) {
    __extends(Provider, _super);
    function Provider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.app = _this.appInstance;
        return _this;
    }
    Object.defineProperty(Provider.prototype, "appInstance", {
        get: function () {
            if (!this.app) {
                this.app = app_bridge_1.default(this.props.config);
                if (this.app && this.app.hooks) {
                    this.app.hooks.set(app_bridge_1.LifecycleHook.DispatchAction, exports.setClientInterfaceHook);
                }
            }
            return this.app;
        },
        enumerable: true,
        configurable: true
    });
    Provider.prototype.render = function () {
        return (react_1.default.createElement(context_1.AppBridgeContext.Provider, { value: this.appInstance }, this.props.children));
    };
    return Provider;
}(react_1.default.Component));
exports.default = Provider;
/**
 * Augment actions with clientInterface metadata, identifying use of this library
 *
 * @internal
 */
exports.setClientInterfaceHook = function (next) {
    return function (action) {
        action.clientInterface = {
            name: '@shopify/app-bridge-react',
            version: packageJson.version,
        };
        return next(action);
    };
};


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/Provider/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/Provider/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Provider_1 = __importDefault(__webpack_require__(/*! ./Provider */ "./node_modules/@shopify/app-bridge-react/components/Provider/Provider.js"));
exports.default = Provider_1.default;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/ResourcePicker/ResourcePicker.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/ResourcePicker/ResourcePicker.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var actions_1 = __webpack_require__(/*! @shopify/app-bridge/actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
var context_1 = __webpack_require__(/*! ../../context */ "./node_modules/@shopify/app-bridge-react/context.js");
/**
 * ResourcePicker component
 *
 * @remarks
 * React component which wraps the Shopify App Bridge ResourcePicker action.
 *
 * @public
 */
var ResourcePicker = /** @class */ (function (_super) {
    __extends(ResourcePicker, _super);
    function ResourcePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.focusReturnPoint = null;
        return _this;
    }
    ResourcePicker.prototype.componentDidMount = function () {
        var _a = this.props, open = _a.open, resourceType = _a.resourceType, initialQuery = _a.initialQuery, initialSelectionIds = _a.initialSelectionIds, showHidden = _a.showHidden, allowMultiple = _a.allowMultiple, showVariants = _a.showVariants, actionVerb = _a.actionVerb, onSelection = _a.onSelection, onCancel = _a.onCancel;
        var app = this.context;
        this.picker = actions_1.ResourcePicker.create(app, {
            resourceType: actions_1.ResourcePicker.ResourceType[resourceType],
            options: {
                initialQuery: initialQuery,
                initialSelectionIds: initialSelectionIds,
                showHidden: showHidden,
                selectMultiple: allowMultiple,
                showVariants: showVariants,
                actionVerb: actionVerb,
            },
        });
        if (onSelection != null) {
            this.picker.subscribe(actions_1.ResourcePicker.Action.SELECT, onSelection);
        }
        if (onCancel != null) {
            this.picker.subscribe(actions_1.ResourcePicker.Action.CANCEL, onCancel);
        }
        if (open) {
            this.focusReturnPoint = document.activeElement;
            this.picker.dispatch(actions_1.ResourcePicker.Action.OPEN);
        }
    };
    ResourcePicker.prototype.componentDidUpdate = function (prevProps) {
        var wasOpen = prevProps.open;
        var _a = this.props, open = _a.open, initialQuery = _a.initialQuery, initialSelectionIds = _a.initialSelectionIds, showHidden = _a.showHidden, allowMultiple = _a.allowMultiple, showVariants = _a.showVariants, actionVerb = _a.actionVerb, onCancel = _a.onCancel, onSelection = _a.onSelection;
        this.picker.unsubscribe();
        this.picker.set({
            initialQuery: initialQuery,
            initialSelectionIds: initialSelectionIds,
            showHidden: showHidden,
            selectMultiple: allowMultiple,
            showVariants: showVariants,
            actionVerb: actionVerb,
        });
        if (onSelection != null) {
            this.picker.subscribe(actions_1.ResourcePicker.Action.SELECT, onSelection);
        }
        if (onCancel != null) {
            this.picker.subscribe(actions_1.ResourcePicker.Action.CANCEL, onCancel);
        }
        if (wasOpen !== open) {
            if (open) {
                this.picker.dispatch(actions_1.ResourcePicker.Action.OPEN);
            }
            else {
                this.picker.dispatch(actions_1.ResourcePicker.Action.CLOSE);
            }
        }
        if (!wasOpen && open) {
            this.focusReturnPoint = document.activeElement;
        }
        else if (wasOpen &&
            !open &&
            this.focusReturnPoint != null &&
            document.contains(this.focusReturnPoint)) {
            this.focusReturnPoint.focus();
            this.focusReturnPoint = null;
        }
    };
    ResourcePicker.prototype.componentWillUnmount = function () {
        this.picker.unsubscribe();
    };
    ResourcePicker.prototype.render = function () {
        return null;
    };
    ResourcePicker.contextType = context_1.AppBridgeContext;
    ResourcePicker.ActionVerb = actions_1.ResourcePicker.ActionVerb;
    return ResourcePicker;
}(react_1.default.PureComponent));
exports.default = ResourcePicker;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/ResourcePicker/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/ResourcePicker/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ResourcePicker_1 = __importDefault(__webpack_require__(/*! ./ResourcePicker */ "./node_modules/@shopify/app-bridge-react/components/ResourcePicker/ResourcePicker.js"));
exports.default = ResourcePicker_1.default;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/RoutePropagator/RoutePropagator.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/RoutePropagator/RoutePropagator.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var route_propagator_1 = __webpack_require__(/*! ./route-propagator */ "./node_modules/@shopify/app-bridge-react/components/RoutePropagator/route-propagator.js");
var context_1 = __webpack_require__(/*! ../../context */ "./node_modules/@shopify/app-bridge-react/context.js");
/**
 * RoutePropagator component
 *
 * @remarks
 * React component which keeps the Shopify admin url in sync with the app url
 *
 * @public
 */
var RoutePropagator = /** @class */ (function (_super) {
    __extends(RoutePropagator, _super);
    function RoutePropagator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoutePropagator.prototype.componentDidMount = function () {
        var location = this.props.location;
        route_propagator_1.updateHistory(this.context, location);
    };
    RoutePropagator.prototype.componentDidUpdate = function (_a) {
        var prevLocation = _a.location;
        var location = this.props.location;
        if (location !== prevLocation) {
            route_propagator_1.updateHistory(this.context, location);
        }
    };
    RoutePropagator.prototype.render = function () {
        return null;
    };
    RoutePropagator.contextType = context_1.AppBridgeContext;
    return RoutePropagator;
}(react_1.default.Component));
exports.default = RoutePropagator;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/RoutePropagator/globals.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/RoutePropagator/globals.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getSelfWindow() {
    return window.self;
}
exports.getSelfWindow = getSelfWindow;
function getTopWindow() {
    return window.top;
}
exports.getTopWindow = getTopWindow;
function getOrigin() {
    return location.origin;
}
exports.getOrigin = getOrigin;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/RoutePropagator/hook.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/RoutePropagator/hook.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var route_propagator_1 = __webpack_require__(/*! ./route-propagator */ "./node_modules/@shopify/app-bridge-react/components/RoutePropagator/route-propagator.js");
var context_1 = __webpack_require__(/*! ../../context */ "./node_modules/@shopify/app-bridge-react/context.js");
/**
 * useRoutePropagation
 *
 * @remarks
 * A hook which keeps the Shopify admin url in sync with the app url
 *
 * @public
 */
function useRoutePropagation(location) {
    var app = react_1.useContext(context_1.AppBridgeContext);
    react_1.useEffect(function () {
        if (!app) {
            return;
        }
        route_propagator_1.updateHistory(app, location);
    }, [app, location]);
}
exports.default = useRoutePropagation;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/RoutePropagator/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/RoutePropagator/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RoutePropagator_1 = __webpack_require__(/*! ./RoutePropagator */ "./node_modules/@shopify/app-bridge-react/components/RoutePropagator/RoutePropagator.js");
exports.RoutePropagator = RoutePropagator_1.default;
var hook_1 = __webpack_require__(/*! ./hook */ "./node_modules/@shopify/app-bridge-react/components/RoutePropagator/hook.js");
exports.useRoutePropagation = hook_1.default;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/RoutePropagator/route-propagator.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/RoutePropagator/route-propagator.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_bridge_1 = __webpack_require__(/*! @shopify/app-bridge */ "./node_modules/@shopify/app-bridge/index.js");
var actions_1 = __webpack_require__(/*! @shopify/app-bridge/actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
var globals_1 = __webpack_require__(/*! ./globals */ "./node_modules/@shopify/app-bridge-react/components/RoutePropagator/globals.js");
function updateHistory(app, location) {
    return __awaiter(this, void 0, void 0, function () {
        var selfWindow, topWindow, renderedInTheTopWindow, renderedAsMainApp, normalizedLocation, pathname, search, hash, locationStr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    selfWindow = globals_1.getSelfWindow();
                    topWindow = globals_1.getTopWindow();
                    renderedInTheTopWindow = selfWindow === topWindow;
                    return [4 /*yield*/, app.getState('context').then(function (context) {
                            return context === app_bridge_1.Context.Main;
                        })];
                case 1:
                    renderedAsMainApp = _a.sent();
                    if (renderedInTheTopWindow || !renderedAsMainApp) {
                        return [2 /*return*/];
                    }
                    normalizedLocation = getNormalizedURL(location);
                    /*
                    We delete this param that ends up unnecassarily stuck on
                    the iframe due to oauth when propagating up.
                  */
                    normalizedLocation.searchParams.delete('hmac');
                    pathname = normalizedLocation.pathname, search = normalizedLocation.search, hash = normalizedLocation.hash;
                    locationStr = "" + pathname + search + hash;
                    actions_1.History.create(app).dispatch(actions_1.History.Action.REPLACE, locationStr);
                    return [2 /*return*/];
            }
        });
    });
}
exports.updateHistory = updateHistory;
function getNormalizedURL(location) {
    var origin = globals_1.getOrigin();
    if (typeof location === 'string') {
        return new URL(location, origin);
    }
    var pathname = location.pathname, search = location.search, hash = location.hash;
    return new URL("" + pathname + search + hash, origin);
}


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/TitleBar/TitleBar.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/TitleBar/TitleBar.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var actions_1 = __webpack_require__(/*! @shopify/app-bridge/actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
var transformers_1 = __webpack_require__(/*! ../../utilities/transformers */ "./node_modules/@shopify/app-bridge-react/utilities/transformers.js");
var context_1 = __webpack_require__(/*! ../../context */ "./node_modules/@shopify/app-bridge-react/context.js");
var TitleBar = /** @class */ (function (_super) {
    __extends(TitleBar, _super);
    function TitleBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TitleBar.prototype.componentDidMount = function () {
        var app = this.context;
        this.titleBar = actions_1.TitleBar.create(app, this.transformProps());
    };
    TitleBar.prototype.componentDidUpdate = function () {
        this.titleBar.unsubscribe();
        this.titleBar.set(this.transformProps());
    };
    TitleBar.prototype.componentWillUnmount = function () {
        this.titleBar.unsubscribe();
    };
    TitleBar.prototype.render = function () {
        return null;
    };
    TitleBar.prototype.transformProps = function () {
        var app = this.context;
        var _a = this.props, title = _a.title, primaryAction = _a.primaryAction, secondaryActions = _a.secondaryActions, actionGroups = _a.actionGroups;
        return {
            title: title,
            buttons: transformers_1.transformActions(app, {
                primaryAction: primaryAction,
                secondaryActions: secondaryActions,
                actionGroups: actionGroups,
            }),
            breadcrumbs: this.transformBreadcrumbs(),
        };
    };
    TitleBar.prototype.transformBreadcrumbs = function () {
        var app = this.context;
        var breadcrumbs = this.props.breadcrumbs;
        if (breadcrumbs == null || breadcrumbs.length === 0) {
            return undefined;
        }
        var breadcrumb = breadcrumbs[breadcrumbs.length - 1];
        var url = breadcrumb.url, onAction = breadcrumb.onAction, target = breadcrumb.target, content = breadcrumb.content;
        var button = actions_1.Button.create(app, {
            label: content || '',
        });
        var redirect = transformers_1.generateRedirect(app, url, target);
        if (redirect != null) {
            button.subscribe(actions_1.Button.Action.CLICK, redirect);
        }
        if (onAction != null) {
            button.subscribe(actions_1.Button.Action.CLICK, onAction);
        }
        return button;
    };
    TitleBar.contextType = context_1.AppBridgeContext;
    return TitleBar;
}(react_1.default.PureComponent));
exports.default = TitleBar;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/TitleBar/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/TitleBar/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TitleBar_1 = __importDefault(__webpack_require__(/*! ./TitleBar */ "./node_modules/@shopify/app-bridge-react/components/TitleBar/TitleBar.js"));
exports.default = TitleBar_1.default;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/Toast/Toast.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/Toast/Toast.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var actions_1 = __webpack_require__(/*! @shopify/app-bridge/actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
var context_1 = __webpack_require__(/*! ../../context */ "./node_modules/@shopify/app-bridge-react/context.js");
exports.DEFAULT_TOAST_DURATION = 5000;
/**
 * Toast component
 *
 * @remarks
 * React component which wraps the Shopify App Bridge Toast action.
 *
 * @public
 */
var Toast = /** @class */ (function (_super) {
    __extends(Toast, _super);
    function Toast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toast.prototype.componentDidMount = function () {
        var app = this.context;
        var _a = this.props, error = _a.error, content = _a.content, _b = _a.duration, duration = _b === void 0 ? exports.DEFAULT_TOAST_DURATION : _b, onDismiss = _a.onDismiss;
        this.toast = actions_1.Toast.create(app, {
            message: content,
            duration: duration,
            isError: error,
        });
        this.toast.subscribe(actions_1.Toast.Action.CLEAR, onDismiss);
        this.toast.dispatch(actions_1.Toast.Action.SHOW);
    };
    Toast.prototype.componentWillUnmount = function () {
        this.toast.unsubscribe();
    };
    Toast.prototype.render = function () {
        return null;
    };
    Toast.contextType = context_1.AppBridgeContext;
    return Toast;
}(react_1.default.PureComponent));
exports.default = Toast;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/Toast/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/Toast/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Toast_1 = __importDefault(__webpack_require__(/*! ./Toast */ "./node_modules/@shopify/app-bridge-react/components/Toast/Toast.js"));
exports.default = Toast_1.default;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/components/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/components/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var Provider_1 = __webpack_require__(/*! ./Provider */ "./node_modules/@shopify/app-bridge-react/components/Provider/index.js");
exports.Provider = Provider_1.default;
var Loading_1 = __webpack_require__(/*! ./Loading */ "./node_modules/@shopify/app-bridge-react/components/Loading/index.js");
exports.Loading = Loading_1.default;
var Toast_1 = __webpack_require__(/*! ./Toast */ "./node_modules/@shopify/app-bridge-react/components/Toast/index.js");
exports.Toast = Toast_1.default;
var TitleBar_1 = __webpack_require__(/*! ./TitleBar */ "./node_modules/@shopify/app-bridge-react/components/TitleBar/index.js");
exports.TitleBar = TitleBar_1.default;
var Modal_1 = __webpack_require__(/*! ./Modal */ "./node_modules/@shopify/app-bridge-react/components/Modal/index.js");
exports.Modal = Modal_1.default;
var ResourcePicker_1 = __webpack_require__(/*! ./ResourcePicker */ "./node_modules/@shopify/app-bridge-react/components/ResourcePicker/index.js");
exports.ResourcePicker = ResourcePicker_1.default;
__export(__webpack_require__(/*! ./RoutePropagator */ "./node_modules/@shopify/app-bridge-react/components/RoutePropagator/index.js"));
__export(__webpack_require__(/*! ./ClientRouter */ "./node_modules/@shopify/app-bridge-react/components/ClientRouter/index.js"));


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/context.js":
/*!***********************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/context.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/**
 * App Bridge context.
 *
 * @public
 */
exports.AppBridgeContext = react_1.createContext(null);


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components */ "./node_modules/@shopify/app-bridge-react/components/index.js"));
var context_1 = __webpack_require__(/*! ./context */ "./node_modules/@shopify/app-bridge-react/context.js");
exports.Context = context_1.AppBridgeContext;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/package.json":
/*!*************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/package.json ***!
  \*************************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, dependencies, deprecated, description, devDependencies, files, gitHead, homepage, jsdelivr, license, main, name, peerDependencies, private, publishConfig, repository, scripts, sideEffects, size-limit, types, unpkg, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"@shopify/app-bridge-react\",\"_id\":\"@shopify/app-bridge-react@1.20.2\",\"_inBundle\":false,\"_integrity\":\"sha512-j/pzRILXYRUTMlVcDset9HhqP/uSaJ/kFtluH0iz77chf/V7GQ+YBVcCe+QLNLc+boGJmlk4I7/VVcsWP392fQ==\",\"_location\":\"/@shopify/app-bridge-react\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"tag\",\"registry\":true,\"raw\":\"@shopify/app-bridge-react\",\"name\":\"@shopify/app-bridge-react\",\"escapedName\":\"@shopify%2fapp-bridge-react\",\"scope\":\"@shopify\",\"rawSpec\":\"\",\"saveSpec\":null,\"fetchSpec\":\"latest\"},\"_requiredBy\":[\"#USER\",\"/\"],\"_resolved\":\"https://registry.npmjs.org/@shopify/app-bridge-react/-/app-bridge-react-1.20.2.tgz\",\"_shasum\":\"6373763588d1448b39c662e42bb0375c2a842372\",\"_spec\":\"@shopify/app-bridge-react\",\"_where\":\"/Users/esthersu/Desktop/work/practice\",\"author\":{\"name\":\"Shopify Inc.\"},\"bugs\":{\"url\":\"https://github.com/Shopify/app-bridge/issues\"},\"bundleDependencies\":false,\"dependencies\":{\"@shopify/app-bridge\":\"^1.20.2\"},\"deprecated\":false,\"description\":\"Shopify App Bridge offers React component wrappers for some App Bridge actions. This is a great option if you are already using React and want to follow familiar patterns.\",\"devDependencies\":{\"@types/react\":\"^16.7.3\",\"typescript\":\"3.2.1\"},\"files\":[\"/components/\",\"/context.d.ts\",\"/context.js\",\"/index.d.ts\",\"/index.js\",\"/umd/\",\"/utilities/\",\"/types.d.ts\",\"/types.js\"],\"gitHead\":\"6daa42b659b3f9b9ddfce068e91b852996df2e0d\",\"homepage\":\"https://github.com/Shopify/app-bridge#readme\",\"jsdelivr\":\"umd/index.js\",\"license\":\"MIT\",\"main\":\"index.js\",\"name\":\"@shopify/app-bridge-react\",\"peerDependencies\":{\"react\":\"^16.0.0\"},\"private\":false,\"publishConfig\":{\"access\":\"public\",\"@shopify:registry\":\"https://registry.npmjs.org\"},\"repository\":{\"type\":\"git\",\"url\":\"git+ssh://git@github.com/Shopify/app-bridge.git\"},\"scripts\":{\"build\":\"yarn build:tsc && yarn build:umd\",\"build:tsc\":\"NODE_ENV=production tsc\",\"build:umd\":\"NODE_ENV=production webpack -p\",\"check\":\"tsc --pretty --noEmit\",\"clean\":\"cat package.json | node -pe \\\"JSON.parse(require('fs').readFileSync('/dev/stdin').toString()).files.map(f => './'+f).join(' ')\\\" | xargs rm -rf\",\"pack\":\"yarn pack\",\"size\":\"size-limit\"},\"sideEffects\":false,\"size-limit\":[{\"limit\":\"25 KB\",\"path\":\"index.js\"}],\"types\":\"index.d.ts\",\"unpkg\":\"umd/index.js\",\"version\":\"1.20.2\"}");

/***/ }),

/***/ "./node_modules/@shopify/app-bridge-react/utilities/transformers.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-react/utilities/transformers.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = __webpack_require__(/*! @shopify/app-bridge/actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
function generateRedirect(appBridge, url, target, external) {
    if (target === void 0) { target = 'APP'; }
    if (url == null) {
        return undefined;
    }
    var redirect = actions_1.Redirect.create(appBridge);
    var payload = external === true
        ? {
            url: url,
            newContext: true,
        }
        : url;
    return function () {
        redirect.dispatch(redirectAction(target, external), payload);
    };
}
exports.generateRedirect = generateRedirect;
function redirectAction(target, external) {
    if (external === true) {
        return actions_1.Redirect.Action.REMOTE;
    }
    return actions_1.Redirect.Action[target];
}
function transformActions(appBridge, _a) {
    var primaryAction = _a.primaryAction, secondaryActions = _a.secondaryActions, actionGroups = _a.actionGroups;
    var primary = transformPrimaryAction(appBridge, primaryAction);
    var secondary = transformSecondaryActions(appBridge, secondaryActions).concat(transformActionGroups(appBridge, actionGroups));
    return {
        primary: primary,
        secondary: secondary,
    };
}
exports.transformActions = transformActions;
function transformAction(appBridge, action) {
    var style = action.destructive === true ? actions_1.Button.Style.Danger : undefined;
    var button = actions_1.Button.create(appBridge, {
        label: action.content || '',
        disabled: action.disabled,
        style: style,
    });
    if (action.onAction) {
        button.subscribe(actions_1.Button.Action.CLICK, action.onAction);
    }
    var redirect = generateRedirect(appBridge, action.url, action.target, action.external);
    if (redirect != null) {
        button.subscribe(actions_1.Button.Action.CLICK, redirect);
    }
    return button;
}
function transformPrimaryAction(appBridge, primaryAction) {
    if (primaryAction == null) {
        return undefined;
    }
    var primary = transformAction(appBridge, primaryAction);
    return primary;
}
function transformSecondaryActions(appBridge, secondaryActions) {
    if (secondaryActions === void 0) { secondaryActions = []; }
    var secondary = secondaryActions.map(function (secondaryAction) {
        return transformAction(appBridge, secondaryAction);
    }).slice();
    return secondary;
}
function transformActionGroups(appBridge, actionGroups) {
    if (actionGroups === void 0) { actionGroups = []; }
    var buttonGroups = actionGroups.map(function (group) {
        var buttons = group.actions.map(function (groupAction) {
            return transformAction(appBridge, groupAction);
        });
        return actions_1.ButtonGroup.create(appBridge, { label: group.title, buttons: buttons });
    }).slice();
    return buttonGroups;
}


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shopify/polaris/styles.css */ "./node_modules/@shopify/polaris/styles.css");
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shopify/polaris/locales/en.json */ "./node_modules/@shopify/polaris/locales/en.json");
var _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! @shopify/polaris/locales/en.json */ "./node_modules/@shopify/polaris/locales/en.json", 1);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_13__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var MyApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MyApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {});

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, null, __jsx("title", null, "Practice"), __jsx("meta", {
        charSet: "utf-8"
      })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["AppProvider"], {
        i18n: _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_12__
      }, __jsx(Component, pageProps)));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ })

})
//# sourceMappingURL=_app.js.c9710ebde09377584533.hot-update.js.map