namespace SpriteKind {
    export const Crystal = SpriteKind.create()
    export const GoldenCrystal = SpriteKind.create()
    export const DizzyCloud = SpriteKind.create()
}
/**
 * ============================
 * 
 * FUNÇÃO: CRIAR CRISTAL
 * 
 * ============================
 */
/**
 * ============================
 * 
 * FUNÇÃO: CRISTAL DOURADO
 * 
 * ============================
 */
/**
 * ============================
 * 
 * FUNÇÃO: NUVEM DE TONTURA
 * 
 * ============================
 */
/**
 * ============================
 * 
 * CONTROLE DO PULO
 * 
 * ============================
 */
/**
 * ============================
 * 
 * PEGAR CRISTAL NORMAL
 * 
 * ============================
 */
/**
 * ============================
 * 
 * PEGAR CRISTAL DOURADO
 * 
 * ============================
 */
/**
 * ============================
 * 
 * NUVEM DE TONTURA
 * 
 * ============================
 */
/**
 * ============================
 * 
 * APAGAR OBJETOS QUE SAÍRAM
 * 
 * ============================
 */
/**
 * ============================
 * 
 * GERADOR DE CRISTAIS
 * 
 * ============================
 */
/**
 * ============================
 * 
 * GERADOR DE NUVENS
 * 
 * ============================
 */
/**
 * ============================
 * 
 * MÚSICA
 * 
 * ============================
 */
/**
 * ============================
 * 
 * FUNDO
 * 
 * ============================
 */
/**
 * ============================
 * 
 * PLACAR
 * 
 * ============================
 */
/**
 * ============================
 * 
 * SPRITES
 * 
 * ============================
 */
/**
 * ============================
 */
/**
 * VARIÁVEIS
 */
/**
 * ============================
 */
sprites.onOverlap(SpriteKind.Player, SpriteKind.DizzyCloud, function (player2, nuvem) {
    nuvem.destroy(effects.disintegrate, 200)
    if (!(girando)) {
        girando = true
        player2.startEffect(effects.spray, 1000)
        // Bailarina fica "tonta"
        player2.vx = 80
        music.playTone(262, music.beat(BeatFraction.Quarter))
        pause(1000)
        player2.vx = 0
        girando = false
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // Só pula se estiver próxima do chão
    if (bailarina.y >= 95) {
        bailarina.vy = -120
        // Pequeno efeito de giro
        bailarina.startEffect(effects.trail, 300)
    }
})
function criarNuvem () {
    nuvem = sprites.create(img`
        . . . . . . . . . . 
        . . 1 1 . . 1 1 . . 
        . 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 
        . 1 1 1 1 1 1 1 1 . 
        . . 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 . . . 
        . . . . . . . . . . 
        `, SpriteKind.DizzyCloud)
    nuvem.setPosition(randint(10, 150), 0)
    nuvem.vy = velocidadeCristal
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.GoldenCrystal, function (player2, cristal) {
    cristal.destroy(effects.starField, 300)
    pontos += 5
    info.setScore(pontos)
    // Grande efeito de brilho
    player2.startEffect(effects.confetti, 700)
    music.playTone(1047, music.beat(BeatFraction.Eighth))
    music.playTone(1319, music.beat(BeatFraction.Eighth))
    game.splash("CRISTAL DOURADO!", "+5 pontos!")
    if (pontos % 10 == 0) {
        velocidadeCristal += 8
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Crystal, function (player2, cristal) {
    cristal.destroy(effects.disintegrate, 200)
    pontos += 1
    info.setScore(pontos)
    // Efeito de brilho
    player2.startEffect(effects.hearts, 300)
    music.playTone(784, music.beat(BeatFraction.Sixteenth))
    // A cada 10 pontos aumenta a velocidade
    if (pontos % 10 == 0) {
        velocidadeCristal += 8
        game.splash("Mais rápido!", "Velocidade: " + velocidadeCristal)
    }
})
function criarCristal () {
    cristal = sprites.create(img`
        . . . . 7 . . . . 
        . . . 7 7 7 . . . 
        . . 7 7 7 7 7 . . 
        . 7 7 7 7 7 7 7 . 
        7 7 7 7 7 7 7 7 7 
        . 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 . . 
        . . . 7 7 7 . . . 
        . . . . 7 . . . . 
        `, SpriteKind.Crystal)
    cristal.setPosition(randint(10, 150), 0)
    cristal.vy = velocidadeCristal
}
function criarCristalDourado () {
    cristal2 = sprites.create(img`
        . . . . 4 . . . . 
        . . . 4 4 4 . . . 
        . . 4 4 4 4 4 . . 
        . 4 4 4 4 4 4 4 . 
        4 4 4 4 4 4 4 4 4 
        . 4 4 4 4 4 4 4 . 
        . . 4 4 4 4 4 . . 
        . . . 4 4 4 . . . 
        . . . . 4 . . . . 
        `, SpriteKind.GoldenCrystal)
    cristal2.setPosition(randint(10, 150), 0)
    cristal2.vy = velocidadeCristal - 5
}
let sorteio = 0
let cristal2: Sprite = null
let cristal: Sprite = null
let pontos = 0
let nuvem: Sprite = null
let girando = false
let bailarina: Sprite = null
let velocidadeCristal = 0
velocidadeCristal = 35
// Bailarina
bailarina = sprites.create(img`
    . . . . . . . 5 5 . . . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . . 5 1 1 5 . . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . 5 5 2 5 5 2 5 5 . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 . 5 5 . 5 5 . . . . 
    . . . . 5 . . 5 5 . . 5 . . . . 
    . . . 5 . . . 5 5 . . . 5 . . . 
    . . . 5 . . 5 5 5 5 . . 5 . . . 
    . . 5 5 . 5 5 . . 5 5 . 5 5 . . 
    . . 5 5 5 5 . . . . 5 5 5 5 . . 
    . . 5 5 . . . . . . . . 5 5 . . 
    `, SpriteKind.Player)
bailarina.setPosition(80, 105)
bailarina.ay = 250
info.setScore(0)
scene.setBackgroundColor(13)
music.setVolume(60)
music.playMelody("C5 B A G A B C5 C5 B A G E G A B", music.PlaybackMode.LoopingInBackground)
game.onUpdate(function () {
    // Cristais normais
    for (let cristal3 of sprites.allOfKind(SpriteKind.Crystal)) {
        if (cristal3.y > 120) {
            cristal3.destroy()
        }
    }
    // Cristais dourados
    for (let cristal4 of sprites.allOfKind(SpriteKind.GoldenCrystal)) {
        if (cristal4.y > 120) {
            cristal4.destroy()
        }
    }
    // Nuvens
    for (let nuvem2 of sprites.allOfKind(SpriteKind.DizzyCloud)) {
        if (nuvem2.y > 120) {
            nuvem2.destroy()
        }
    }
    // Impede a bailarina de cair
    if (bailarina.y > 105) {
        bailarina.y = 105
        bailarina.vy = 0
    }
})
game.onUpdateInterval(1000, function () {
    sorteio = randint(1, 100)
    // 10% de chance de cristal dourado
    if (sorteio <= 10) {
        criarCristalDourado()
    } else {
        criarCristal()
    }
})
game.onUpdateInterval(3500, function () {
    // 40% de chance de criar uma nuvem
    if (randint(1, 100) <= 40) {
        criarNuvem()
    }
})
