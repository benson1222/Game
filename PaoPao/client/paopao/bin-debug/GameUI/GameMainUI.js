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
        this.setButtonEvent(this.BtnStart);
        this.setButtonEvent(this.BtnHelp);
        this.setButtonEvent(this.BtnSound);
        this.setButtonEvent(this.BtnAddGold);
        this.BtnAddHead.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonTapClick, this);
        this.BtnAddDem.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonTapClick, this);
        this.BtnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonTapClick, this);
        this.BtnHelp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonTapClick, this);
        this.BtnSound.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonTapClick, this);
        this.BtnAddGold.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonTapClick, this);
    };
    GameMainUI.prototype.onButtonTapClick = function (e) {
        if (e.currentTarget == this.BtnAddHead) {
        }
        else if (e.currentTarget == this.BtnAddDem) {
        }
        else if (e.currentTarget == this.BtnStart) {
            var gamePlay = new GamePlayUI();
            Director.getInstance().repleaceScene(gamePlay);
        }
        else if (e.currentTarget == this.BtnHelp) {
        }
        else if (e.currentTarget == this.BtnSound) {
        }
        else if (e.currentTarget == this.BtnAddGold) {
        }
        console.log("onButtonTapClick");
    };
    /**
     * 点击按钮
     * Click the button
     */
    GameMainUI.prototype.onButtonClick = function (e) {
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
    GameMainUI.prototype.setButtonEvent = function (button) {
        button.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
        button.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);
        button.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onButtonClick, this);
    };
    return GameMainUI;
}(eui.Component));
__reflect(GameMainUI.prototype, "GameMainUI", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GameMainUI.js.map