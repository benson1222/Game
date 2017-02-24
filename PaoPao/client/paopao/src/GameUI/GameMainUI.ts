class GameMainUI extends eui.Component implements  eui.UIComponent {
	private BtnAddHead:eui.Button ;
	private BtnAddDem:eui.Button;
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
	}
	/**
     * 点击按钮
     * Click the button
     */
    private onButtonBeginClick(e: egret.TouchEvent) {
		
		if(e.currentTarget == this.BtnAddHead){
			(<eui.Button>e.currentTarget).$setScaleX(0.5);
		}else if(e.currentTarget == this.BtnAddDem){
			(<eui.Button>e.currentTarget).$setScaleY(0.5);
		}
        //this.Btn_Login.$setScaleX(0.85);
		//this.Btn_Login.$setScaleY(0.85);
    }
	
	private setButtonEvent(button:eui.Button){
		button.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonBeginClick, this);
	}
}