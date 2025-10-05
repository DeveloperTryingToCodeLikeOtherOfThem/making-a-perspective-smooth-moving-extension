class SmoothMovement {
   constructor() { }

   moveCamera(s: Sprite, cx: number, cy: number) {
       control.eventContext().registerFrameHandler(10, () => scene.centerCameraAt(cx, cy))
       s.setStayInScreen(true)
       this.turnOnCamera(s, true)
   }

   setPlayOutOfScreenCameraRange(s: Sprite, x: number, y: number) {
      if(s.x >= x, s.y >= x || s.x <= x || s.y >= y) {
          this.turnOnCamera(s, false)
          s.setStayInScreen(false)
      }
   }

   protected turnOnCamera(s: Sprite, on: boolean) {
       if(on) scene.cameraFollowSprite(s)
   }
} 
