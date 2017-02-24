var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameMainUI = (function (_super) {
    __extends(GameMainUI, _super);
    function GameMainUI() {
        var _this = _super.call(this) || this;
        _this.EXML_PATH = "resource/ui_res/main/PPMainUI.exml";
        _this.skinName = _this.EXML_PATH;
        return _this;
    }
    GameMainUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameMainUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.setButtonEvent(this.BtnAddHead);
        this.setButtonEvent(this.BtnAddDem);
    };
    /**
     * 点击按钮
     * Click the button
     */
    GameMainUI.prototype.onButtonBeginClick = function (e) {
        if (e.currentTarget == this.BtnAddHead) {
            e.currentTarget.$setScaleX(0.5);
        }
        else if (e.currentTarget == this.BtnAddDem) {
            e.currentTarget.$setScaleY(0.5);
        }
        //this.Btn_Login.$setScaleX(0.85);
        //this.Btn_Login.$setScaleY(0.85);
    };
    GameMainUI.prototype.setButtonEvent = function (button) {
        button.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonBeginClick, this);
    };
    return GameMainUI;
}(eui.Component));
__reflect(GameMainUI.prototype, "GameMainUI", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GameMainUI.js.map