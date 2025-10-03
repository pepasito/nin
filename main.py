class ActionKind(Enum):
    Walking = 0
    Idle = 1
    Jumping = 2
mySprite = sprites.create(img("""
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
        """),
    SpriteKind.player)
controller.move_sprite(mySprite, 60, 60)
anim = animation.create_animation(ActionKind.Idle, 125)
anim.add_animation_frame(img("""
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
    . . . f 6 1 1 1 1 1 1 f f . . .
    . f f f f 1 1 1 1 1 1 f f . . .
    . f 1 1 f 6 6 6 6 6 6 f f . . .
    . f f f f 1 1 1 1 1 1 f . . . .
    . . . . f 1 1 1 f 6 f . . . . .
    . . . . . f f f f f . . . . . .
    """))
anim.add_animation_frame(img("""
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
    . . . f 1 6 f f f 6 1 f . . . .
    . . . f f f f . . f f . . . . .
    """))
anim.add_animation_frame(assets.image("""
    miImagen
    """))
anim.add_animation_frame(assets.image("""
    miImagen0
    """))
anim.add_animation_frame(assets.image("""
    miImagen1
    """))
anim.add_animation_frame(img("""
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
    """))
animation.attach_animation(mySprite, anim)
animation.set_action(mySprite, ActionKind.Idle)
anim = animation.create_animation(ActionKind.Idle, 125)