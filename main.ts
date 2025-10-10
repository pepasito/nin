enum ActionKind {
    Walking,
    Idle,
    Jumping,
    walkingder,
    walkingizq
}
enum RadioMessage {
    message1 = 49434
}
namespace SpriteKind {
    export const rsuth = SpriteKind.create()
    export const embrion = SpriteKind.create()
}
function barradevidas () {
    barradevida = image.create(20, 3)
    ojeto = sprites.create(barradevida, SpriteKind.rsuth)
    barradevida.fill(2)
    for (let índice = 0; índice <= vida / 5; índice++) {
        barradevida.drawLine(índice, 0, índice, 3, 7)
    }
}
function ohthemisery () {
    enemijod = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 4 4 4 4 2 . . . . . 
        . . . . . 2 4 4 4 4 2 . . . . . 
        . . . . . 2 4 4 4 4 2 . . . . . 
        . . . . . 2 4 4 4 4 2 . . . . . 
        . . . . . 2 4 4 4 4 2 . . . . . 
        . . . . . 2 4 4 4 4 2 . . . . . 
        . . . . . . 2 4 4 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 4 4 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.embrion)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(mySprite, ActionKind.walkingder)
})
sprites.onCreated(SpriteKind.embrion, function (sprite) {
    tiles.placeOnTile(enemijod, tiles.getTileLocation(1, 0))
    sprites.setDataNumber(sprite, "vida", 20)
    pause(1000)
    sprite.setKind(SpriteKind.Enemy)
    sprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . f f . . . . . . . . . . . 
        . . f 4 f . . . . . . . . . . . 
        . . f 4 4 f . . . . . . . . . . 
        . . f 5 5 f . . . . . . . . . . 
        . . f 5 5 5 f . . . . . . . . . 
        . . f 5 f 5 f f . . . . . . . . 
        . . f 5 f 5 5 f . . . . . . . . 
        . . f f 5 5 5 5 f . . . . . . . 
        . . . f 5 5 f 5 f f . . . . . . 
        . . . f 5 5 f 5 5 f f . . . . . 
        . . . f f f 5 5 5 5 f . . . . . 
        . . . . . f f f f 5 5 f f . . . 
        . . . . . . . . f f f 5 f f . . 
        . . . . . . . . . . f f f f f . 
        . . . . . . . . . . . . . . . . 
        `)
    sprite.follow(mySprite, 50)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(mySprite, ActionKind.walkingder)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(mySprite, ActionKind.walkingizq)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let dash = 0
    if (dash == 0) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 1 1 1 1 1 1 6 . . . . 
            . . . 1 1 1 1 1 1 1 1 6 6 6 . . 
            . . 1 1 1 1 1 1 1 1 1 6 6 6 6 . 
            . . 6 1 1 1 1 1 1 1 1 1 6 6 6 . 
            . 6 6 1 1 1 1 1 1 6 6 1 1 6 6 6 
            . 6 6 1 1 1 1 1 1 6 1 6 6 6 6 6 
            . 6 6 6 1 1 1 1 1 6 1 1 6 6 6 6 
            . 6 6 6 6 1 1 1 6 1 1 1 1 1 6 6 
            . 6 6 6 6 6 6 6 1 1 1 1 1 1 1 6 
            . 6 6 6 6 6 1 1 1 1 1 1 1 1 1 1 
            . 6 6 6 6 1 1 1 1 1 1 1 1 1 1 1 
            . . 6 6 1 1 1 1 1 1 1 1 1 1 1 . 
            . . 6 6 1 1 1 1 1 1 1 1 1 1 1 . 
            . . . 6 6 1 1 1 1 1 1 1 1 1 . . 
            . . . . . 1 1 1 1 1 1 1 . . . . 
            `)
        controller.moveSprite(mySprite, 0, 0)
        if (controller.right.isPressed()) {
            x += 1
        }
        if (controller.left.isPressed()) {
            x += -1
        }
        if (controller.up.isPressed()) {
            y += -1
        }
        if (controller.down.isPressed()) {
            y += 1
        }
        mySprite.vx = x * 100
        mySprite.vy = y * 100
        pause(250)
        animation.setAction(mySprite, ActionKind.Idle)
        mySprite.vx = x * 0
        mySprite.vy = y * 0
        controller.moveSprite(mySprite, 60, 60)
        x = 0
        y = 0
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    atakando = true
    pause(200)
    atakando = false
    pause(200)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    if (atakando == true) {
        sprites.changeDataNumberBy(sprite, "vida", -10)
        if (sprites.readDataNumber(sprite, "vida") == 0) {
            sprites.destroy(sprite, effects.fire, 500)
        } else {
            textSprite = textsprite.create(convertToText(sprites.readDataNumber(sprite, "vida")))
            textSprite.x = sprite.x
            textSprite.y = sprite.y
            pause(200)
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(mySprite, ActionKind.walkingder)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    let inservible = false
    if (inservible == false) {
        vida += -10
        pause(500)
    }
})
let textSprite: TextSprite = null
let atakando = false
let y = 0
let x = 0
let enemijod: Sprite = null
let ojeto: Sprite = null
let barradevida: Image = null
let vida = 0
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`nivel1`)
scene.centerCameraAt(0, -1)
mySprite = sprites.create(img`
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
vida = 100
controller.moveSprite(mySprite, 60, 60)
scene.cameraFollowSprite(mySprite)
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
let anim_dos_sos = animation.createAnimation(ActionKind.walkingder, 125)
anim_dos_sos.addAnimationFrame(img`
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
    . . . f f f f f 1 1 1 f . . . . 
    . . . f f 1 1 f 1 1 1 f . . . . 
    . . . f f f f f 6 6 6 f . . . . 
    . . . f 1 1 1 1 1 1 1 1 f . . . 
    . . . f 1 1 f f f 6 1 f . . . . 
    . . . f f f . . . f f . . . . . 
    `)
anim_dos_sos.addAnimationFrame(img`
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
    . . . f 6 1 1 1 1 1 1 f f f . . 
    . f f f f 1 1 1 1 1 1 f 1 f . . 
    . f 1 1 f 6 6 6 6 6 6 f f f . . 
    . f f f f 1 1 1 1 1 1 f . . . . 
    . . . f 1 1 1 f f 6 f . . . . . 
    . . . . f f f f f f . . . . . . 
    `)
animation.attachAnimation(mySprite, anim_dos_sos)
let anim_tres_big_short = animation.createAnimation(ActionKind.walkingizq, 125)
anim_tres_big_short.addAnimationFrame(img`
    . . . . . . f f f . . . . . . . 
    . . . . . f 1 1 1 f f f f . . . 
    . . . f f 1 1 1 1 1 1 1 f . . . 
    . . . f 1 1 6 6 1 1 6 1 1 f . . 
    . . . . f 6 1 1 6 6 1 6 f f . . 
    . . . . f 1 f 1 f 1 1 1 f . . . 
    . . . . f 1 f 1 f 1 1 1 f . . . 
    . . . . . f f 1 1 f f f . . . . 
    . . . . f 1 1 f f 1 1 6 f . . . 
    . . . . f 1 1 1 1 1 1 6 f . . . 
    . . . . f 1 1 1 f f f f f . . . 
    . . . . f 1 1 1 f 1 1 f f . . . 
    . . . . f 6 6 6 f f f f f . . . 
    . . . f 1 1 1 1 1 1 1 1 f . . . 
    . . . . f 1 6 f f f 1 1 f . . . 
    . . . . . f f . . . f f f . . . 
    `)
anim_tres_big_short.addAnimationFrame(img`
    . . . . . . f f f . . . . . . . 
    . . . . . f 1 1 1 f f f f . . . 
    . . . f f 1 1 1 1 1 1 1 f . . . 
    . . . f 1 1 6 6 1 1 6 1 1 f . . 
    . . . . f 6 1 1 6 6 1 6 f f . . 
    . . . . f 1 f 1 f 1 1 1 f . . . 
    . . . . f 1 f 1 f 1 1 1 f . . . 
    . . . . . f f 1 1 f f f . . . . 
    . . . . f 1 1 f f 1 1 6 f . . . 
    . . . . f 1 1 1 1 1 1 6 f . . . 
    . . f f f 1 1 1 1 1 1 6 f . . . 
    . . f 1 f 1 1 1 1 1 1 f f f f . 
    . . f f f 6 6 6 6 6 6 f 1 1 f . 
    . . . . f 1 1 1 1 1 1 f f f f . 
    . . . . . f 6 f f 1 1 1 f . . . 
    . . . . . . f f f f f f . . . . 
    `)
animation.attachAnimation(mySprite, anim_tres_big_short)
barradevidas()
ohthemisery()
game.onUpdate(function () {
    barradevida.fill(2)
    for (let índice = 0; índice <= vida / 5; índice++) {
        barradevida.drawLine(índice, 0, índice, 3, 7)
    }
})
game.onUpdateInterval(1000, function () {
    sprites.destroy(textSprite)
})
forever(function () {
    if (!(controller.left.isPressed() || controller.right.isPressed() || (controller.down.isPressed() || controller.up.isPressed()))) {
        animation.setAction(mySprite, ActionKind.Idle)
    }
})
forever(function () {
    ojeto.setPosition(mySprite.x, mySprite.y - 20)
})
