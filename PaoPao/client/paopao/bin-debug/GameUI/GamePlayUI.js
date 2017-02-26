var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GamePlayUI = (function (_super) {
    __extends(GamePlayUI, _super);
    function GamePlayUI() {
        var _this = _super.call(this) || this;
        _this.EXML_PATH = "resource/ui_res/game/GamePlayUI.exml";
        _this.skinName = _this.EXML_PATH;
        return _this;
    }
    GamePlayUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GamePlayUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        var _btnScale = new ButtonTouchAnima();
        _btnScale.addButtonTouchScale(this.ButStop);
        this.ButStop.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
    };
    GamePlayUI.prototype.onButtonClick = function (e) {
        if (e.currentTarget == this.ButStop) {
            var gamePause = new GamePauseUI();
            this.addChild(gamePause);
        }
    };
    return GamePlayUI;
}(eui.Component));
__reflect(GamePlayUI.prototype, "GamePlayUI", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GamePlayUI.js.map