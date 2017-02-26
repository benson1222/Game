var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GamePauseUI = (function (_super) {
    __extends(GamePauseUI, _super);
    function GamePauseUI() {
        var _this = _super.call(this) || this;
        _this.EXML_PATH = "resource/ui_res/game/GamePauseUI.exml";
        _this.skinName = _this.EXML_PATH;
        return _this;
    }
    GamePauseUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GamePauseUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        var _btnScale = new ButtonTouchAnima();
        _btnScale.addButtonTouchScale(this.BtnClose);
        _btnScale.addButtonTouchScale(this.BtnSound);
        _btnScale.addButtonTouchScale(this.BtnMusic);
        _btnScale.addButtonTouchScale(this.BtnReplay);
        _btnScale.addButtonTouchScale(this.BtnCancel);
        this.BtnClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
        this.BtnSound.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
        this.BtnMusic.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
        this.BtnReplay.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
        this.BtnCancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    };
    GamePauseUI.prototype.onButtonClick = function (e) {
        if (e.currentTarget == this.BtnClose) {
            this.parent.removeChild(this);
        }
        else if (e.currentTarget == this.BtnSound) {
        }
        else if (e.currentTarget == this.BtnMusic) {
        }
        else if (e.currentTarget == this.BtnReplay) {
        }
        else if (e.currentTarget == this.BtnCancel) {
            var gameMain = new GameMainUI();
            Director.getInstance().repleaceScene(gameMain);
        }
    };
    return GamePauseUI;
}(eui.Component));
__reflect(GamePauseUI.prototype, "GamePauseUI", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GamePauseUI.js.map