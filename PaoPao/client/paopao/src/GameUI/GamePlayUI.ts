class GamePlayUI extends eui.Component implements  eui.UIComponent {
	private ButStop:eui.Button;
	private EXML_PATH:string = "resource/ui_res/game/GamePlayUI.exml";
	public constructor() {
		super();
		this.skinName = this.EXML_PATH;
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	protected childrenCreated():void
	{
		super.childrenCreated();

		let _btnScale: ButtonTouchAnima = new ButtonTouchAnima();
		_btnScale.addButtonTouchScale(this.ButStop);
		this.ButStop.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
	}
	
	private onButtonClick(e: egret.TouchEvent) {
		if(e.currentTarget == this.ButStop){
			let gamePause:GamePauseUI = new GamePauseUI();
			this.addChild(gamePause);
		}
	}
}