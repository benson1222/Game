var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ButtonTouchAnima = (function (_super) {
    __extends(ButtonTouchAnima, _super);
    function ButtonTouchAnima() {
        return _super.call(this) || this;
    }
    ButtonTouchAnima.prototype.addButtonTouchScale = function (button) {
        this.setButtonEvent(button);
    };
    ButtonTouchAnima.prototype.childrenCreated = function () {
    };
    /**
     * 点击按钮
     * Click the button
     */
    ButtonTouchAnima.prototype.onButtonClick = function (e) {
        if (e.type == egret.TouchEvent.TOUCH_BEGIN) {
            e.currentTarget.$setScaleX(0.8);
            e.currentTarget.$setScaleY(0.8);
        }
        if (e.type == egret.TouchEvent.TOUCH_END) {
            e.currentTarget.$setScaleX(1);
            e.currentTarget.$setScaleY(1);
        }
        if (e.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE) {
            e.currentTarget.$setScaleX(1);
            e.currentTarget.$setScaleY(1);
        }
    };
    ButtonTouchAnima.prototype.setButtonEvent = function (button) {
        button.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
        button.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);
        button.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onButtonClick, this);
    };
    return ButtonTouchAnima;
}(eui.Component));
__reflect(ButtonTouchAnima.prototype, "ButtonTouchAnima");
//# sourceMappingURL=ButtonTouchAnima.js.map