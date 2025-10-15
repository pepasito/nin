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
    export const cura = SpriteKind.create()
}
/**
 */
function barradevidas () {
    barradevida = image.create(20, 3)
    ojeto = sprites.create(barradevida, SpriteKind.rsuth)
    ojeto.setPosition(mySprite.x, mySprite.y - 20)
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
    if (atakando == false) {
        animation.setAction(mySprite, ActionKind.walkingder)
    }
})
sprites.onCreated(SpriteKind.embrion, function (sprite) {
    if (morido == false) {
        sprite.setPosition(randint(6, 154), randint(40, 136))
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
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (atakando == false) {
        animation.setAction(mySprite, ActionKind.walkingder)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (atakando == false) {
        animation.setAction(mySprite, ActionKind.walkingizq)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (morido == false) {
        let dash = 0
        if (dash == 0) {
            inservible = true
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
            inservible = false
            animation.setAction(mySprite, ActionKind.Idle)
            mySprite.vx = x * 0
            mySprite.vy = y * 0
            controller.moveSprite(mySprite, 60, 60)
            x = 0
            y = 0
        }
    } else {
        game.reset()
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    inservible = true
    atakando = true
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(img`
        . . . . . . f f f . . . . . . . 
        . . f f f f 1 1 1 f . . . . . . 
        . . f 1 1 1 1 1 1 1 f f . . . . 
        . f 1 1 6 1 1 6 6 1 1 f . . . . 
        . f f 6 1 6 6 1 1 6 f . . . . . 
        . . f 1 1 1 f 1 f 1 f . . . . . 
        . . f 1 1 1 f 1 f 1 f . . . . . 
        . . . f f f 1 1 f f . . . . . . 
        . . f 6 1 1 f f 1 f . . . . f f 
        . f 6 1 1 1 1 1 f . . . . f 7 f 
        . f 6 1 1 1 1 f f f f f f 5 6 f 
        . f 6 1 1 1 1 f 1 1 f 5 4 5 7 f 
        . f 6 1 6 6 6 f f f f f f 5 7 f 
        . f 1 1 1 1 1 1 f f f . . f 6 f 
        . f 1 1 6 f f 6 1 f . . . . f f 
        . f f f f . f f f f . . . . . . 
        `)
    pause(200)
    atakando = false
    inservible = false
    pause(200)
    animation.setAction(mySprite, ActionKind.Idle)
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
    if (atakando == false) {
        animation.setAction(mySprite, ActionKind.walkingder)
    }
})
sprites.onCreated(SpriteKind.cura, function (sprite) {
    if (morido == false) {
        sprite.setPosition(73, 68)
        pause(2000)
        sprites.destroy(sprite)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cura, function (sprite, otherSprite) {
    vida += 20
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (inservible == false) {
        vida += -10
        if (vida <= 0) {
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.embrion)
            sprites.destroyAllSpritesOfKind(SpriteKind.rsuth)
            tiles.setCurrentTilemap(tilemap`nivel2`)
            controller.moveSprite(mySprite, 0, 0)
            textSprite2 = textsprite.create("Presiona \"a\" para renacer.")
            sprites.destroy(mySprite, effects.fire, 500)
            textSprite2.setPosition(76, 83)
            morido = true
        } else {
            pause(500)
        }
    }
})
let cur: Sprite = null
let textSprite2: TextSprite = null
let textSprite: TextSprite = null
let y = 0
let x = 0
let inservible = false
let atakando = false
let enemijod: Sprite = null
let ojeto: Sprite = null
let barradevida: Image = null
let vida = 0
let morido = false
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
morido = false
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
    mySprite.sayText(convertToText(Math.floor(mySprite.x)))
    barradevida.fill(2)
    for (let índice = 0; índice <= vida / 5; índice++) {
        barradevida.drawLine(índice, 0, índice, 3, 7)
    }
})
game.onUpdateInterval(2000, function () {
    if (randint(0, 2) == 1) {
        ohthemisery()
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
forever(function () {
    cur = sprites.create(img`
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . 1 2 2 2 2 1 1 . . . . 
        . . . 1 1 1 2 2 2 2 1 1 1 1 . . 
        . . 1 1 1 1 2 2 2 2 1 1 1 1 1 1 
        1 1 1 1 1 1 2 2 2 2 1 1 1 1 1 1 
        1 1 1 1 1 1 2 2 2 2 1 1 1 1 1 1 
        1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
        1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
        1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
        1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
        1 1 1 1 1 1 2 2 2 2 1 1 1 1 1 1 
        1 1 1 1 1 1 2 2 2 2 1 1 1 1 1 1 
        1 1 1 1 1 1 2 2 2 2 1 1 1 1 1 1 
        1 1 1 1 1 1 2 2 2 2 1 1 1 1 1 1 
        1 1 1 1 1 1 2 2 2 2 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, SpriteKind.cura)
    pause(5000)
})
