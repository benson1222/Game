class ButtonTouchAnima extends eui.Component{
	public constructor() {
		super();
	}

	public addButtonTouchScale(button:eui.Button){
		this.setButtonEvent(button);
	}
	protected childrenCreated():void
	{
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