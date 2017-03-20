"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Vue = require("vue");
var vts = require("vue-typescript-component");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clickCount = 0;
        return _this;
    }
    App.prototype.chickCount = function () {
        this.clickCount++;
    };
    return App;
}(Vue));
App = __decorate([
    vts.component()
], App);
exports.default = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlCQUE0QjtBQUM1Qiw4Q0FBK0M7QUFHL0MsSUFBcUIsR0FBRztJQUFTLHVCQUFHO0lBRHBDO1FBQUEscUVBTUM7UUFKRyxnQkFBVSxHQUFXLENBQUMsQ0FBQzs7SUFJM0IsQ0FBQztJQUhHLHdCQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNMLFVBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBaUMsR0FBRyxHQUtuQztBQUxvQixHQUFHO0lBRHZCLEdBQUcsQ0FBQyxTQUFTLEVBQUU7R0FDSyxHQUFHLENBS3ZCO2tCQUxvQixHQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSA9IHJlcXVpcmUoJ3Z1ZScpO1xuaW1wb3J0ICogYXMgdnRzIGZyb20gJ3Z1ZS10eXBlc2NyaXB0LWNvbXBvbmVudCdcblxuQHZ0cy5jb21wb25lbnQoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgVnVlIHtcbiAgICBjbGlja0NvdW50OiBudW1iZXIgPSAwO1xuICAgIGNoaWNrQ291bnQoKSB7XG4gICAgICAgIHRoaXMuY2xpY2tDb3VudCsrO1xuICAgIH1cbn0iXX0=