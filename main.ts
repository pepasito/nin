enum ActionKind {
    Walking,
    Idle,
    Jumping
}
let mySprite = sprites.create(img`
    . . . . . . . f f f . . . . . . 
    . . . f f f f 1 1 1 f . . . . . 
    . . . f 1 1 1 1 1 1 1 f f . . . 
    . . f 1 1 6 1 1 6 6 1 1 f . . . 
    . . f f 6 1 6 6 1 1 6 f . . . . 
    . . . f 1 1 1 f 1 f 1 f . . . . 
    . . . f 1 1 1 f 1 f 1 f . . . . 
    . . . . f f f 1 1 f f . . . . . 
    . . . f 6 1 1 f f 1 1 f . . . . 
    . . . f 6 1 1 1 1 1 1 f . . . . 
    . . . f 6 1 1 1 1 1 1 f . . . . 
    . . f f f f 1 1 1 1 1 f f . . . 
    . . f 1 1 f 6 6 6 6 6 f f . . . 
    . . f f f f 1 1 1 1 1 f f . . . 
    . . . f 1 1 6 f f 6 1 f . . . . 
    . . . f f f f . f f f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 60, 60)
let anim = animation.createAnimation(ActionKind.Idle, 125)
anim.addAnimationFrame(img`
    . . . . . . . f f f . . . . . . 
    . . . f f f f 1 1 1 f . . . . . 
    . . . f 1 1 1 1 1 1 1 f f . . . 
    . . f 1 1 6 1 1 6 6 1 1 f . . . 
    . . f f 6 1 6 6 1 1 6 f . . . . 
    . . . f 1 1 1 f 1 f 1 f . . . . 
    . . . f 1 1 1 f 1 f 1 f . . . . 
    . . . . f f f 1 1 f f . . . . . 
    . . . f 6 1 1 f f 1 1 f . . . . 
    . . . f 6 1 1 1 1 1 1 f . . . . 
    . . . f 6 1 1 1 1 1 1 f . . . . 
    . . f f f f 1 1 1 1 1 f f . . . 
    . . f 1 1 f 6 6 6 6 6 f f . . . 
    . . f f f f 1 1 1 1 1 f f . . . 
    . . . f 1 1 6 f f 6 1 f . . . . 
    . . . f f f f . f f f f . . . . 
    `)
anim.addAnimationFrame(img`
    . . . . . . . f f f . . . . . . 
    . . . f f f f 1 1 1 f . . . . . 
    . . . f 1 1 1 1 1 1 1 f f . . . 
    . . f 1 1 6 1 1 6 6 1 1 f . . . 
    . . f f 6 1 6 6 1 1 6 f . . . . 
    . . . f 1 1 1 f 1 f 1 f . . . . 
    . . . f 1 1 1 f 1 f 1 f . . . . 
    . . . . f f f 1 1 f f . . . . . 
    . . . f 6 1 1 f f 1 1 f . . . . 
    . . . f 6 1 1 1 1 1 1 f . . . . 
    . . . f 6 1 1 1 1 1 1 f . . . . 
    . . f f f f 1 1 1 1 1 f f . . . 
    . . f 1 1 f 6 6 6 6 6 f f . . . 
    . . f f f f 1 1 1 1 1 f f . . . 
    . . . f 1 1 6 f f 6 1 f . . . . 
    . . . f f f f . f f f f . . . . 
    `)
anim.addAnimationFrame(assets.image`miImagen`)
anim.addAnimationFrame(assets.image`miImagen0`)
anim.addAnimationFrame(assets.image`miImagen1`)
anim.addAnimationFrame(img`
    . . . . . . . f f f . . . . . . 
    . . . f f f f 1 1 1 f . . . . . 
    . . . f 1 1 1 1 1 1 1 f f . . . 
    . . f 1 1 6 1 1 6 6 1 1 f . . . 
    . . f f 6 1 6 6 1 1 6 f . . . . 
    . . . f 1 1 1 f 1 f 1 f . . . . 
    . . . f 1 1 1 f 1 f 1 f . . . . 
    . . . . f f f 1 1 f f . . . . . 
    . . . f 6 1 1 f f 1 1 f . . . . 
    . . . f 6 1 1 1 1 1 1 f . . . . 
    . . . f 6 1 1 1 1 1 1 f . . . . 
    . . f f f f 1 1 1 1 1 f f . . . 
    . . f 1 1 f 6 6 6 6 6 f f . . . 
    . . f f f f 1 1 1 1 1 f f . . . 
    . . . f 1 1 6 f f 6 1 f . . . . 
    . . . f f f f . f f f f . . . . 
    `)
animation.attachAnimation(mySprite, anim)
animation.setAction(mySprite, ActionKind.Idle)
anim = animation.createAnimation(ActionKind.Idle, 125)
