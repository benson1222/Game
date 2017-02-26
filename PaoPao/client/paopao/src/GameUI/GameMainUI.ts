class GameMainUI extends eui.Component implements  eui.UIComponent {
	private BtnAddHead:eui.Button ;
	private BtnAddDem:eui.Button;
	private BtnStart:eui.Button;
	private BtnHelp:eui.Button;
	private BtnSound:eui.Button;
	private BtnAddGold:eui.Button;
	
	private EXML_PATH:string = "resource/ui_res/main/PPMainUI.exml";
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
	}

	private onButtonTapClick(e: egret.TouchEvent) {
		if(e.currentTarget == this.BtnAddHead){
			//
		}else if(e.currentTarget == this.BtnAddDem){

		}
		else if(e.currentTarget == this.BtnStart){
			let gamePlay:GamePlayUI = new GamePlayUI();
         	Director.getInstance().repleaceScene(gamePlay);
		}else if(e.currentTarget == this.BtnHelp){
			
		}else if(e.currentTarget == this.BtnSound){
			
		}else if(e.currentTarget == this.BtnAddGold){
			
		}
		console.log("onButtonTapClick");
	}
	/**
     * 点击按钮
     * Click the button
     */
    private onButtonClick(e: egret.TouchEvent) {
		if(e.type == egret.TouchEvent.TOUCH_BEGIN){
			(<eui.Button>e.currentTarget).$setScaleX(0.8);
			(<eui.Button>e.currentTarget).$setScaleY(0.8);
		}
		if(e.type == egret.TouchEvent.TOUCH_END){
			(<eui.Button>e.currentTarget).$setScaleX(1);
			(<eui.Button>e.currentTarget).$setScaleY(1);
		}
		if(e.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE){
			(<eui.Button>e.currentTarget).$setScaleX(1);
			(<eui.Button>e.currentTarget).$setScaleY(1);
		}
    }
	
	private setButtonEvent(button:eui.Button){
		button.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
		button.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);
		button.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onButtonClick, this);
	}

}