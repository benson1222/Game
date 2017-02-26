class GamePauseUI extends eui.Component implements  eui.UIComponent {
	private BtnClose:eui.Button;
	private BtnSound:eui.Button;
	private BtnMusic:eui.Button;
	private BtnReplay:eui.Button;
	private BtnCancel:eui.Button;
	private EXML_PATH:string = "resource/ui_res/game/GamePauseUI.exml";
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
	}
	
	private onButtonClick(e: egret.TouchEvent) {
		if(e.currentTarget == this.BtnClose){
			this.parent.removeChild(this);
		}else if(e.currentTarget == this.BtnSound){
			//this.parent.removeChild(this);
		}else if(e.currentTarget == this.BtnMusic){
			//this.parent.removeChild(this);
		}else if(e.currentTarget == this.BtnReplay){
			
		}else if(e.currentTarget == this.BtnCancel){
			let gameMain:GameMainUI = new GameMainUI();
         	Director.getInstance().repleaceScene(gameMain);
		}
	}
}