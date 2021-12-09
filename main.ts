let x = 0
let y = 0
let list: number[] = []
let n = 0
let h = 0
let a = 0
/**
 * 這邊都按照那個網站用的
 */
function 燈數 (num: number) {
    if (num / 5 == 0) {
        x = 4
        y = Math.floor(num / 5) - 1
    } else {
        x = num % 5
        y = Math.floor(num / 5)
    }
    led.plot(x, y)
}
/**
 * 這邊也是按照那個網站用的
 */
/**
 * ↓除了這裡把3換成h
 */
/**
 * 這樣就會變成 
 * 
 *    隨機亮h個燈
 */
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    list = []
    for (let index = 0; index < 25; index++) {
        list.push(0)
    }
    n = 0
    while (n < h) {
        a = randint(0, 24)
        if (list[a] == 0) {
            list[a] = 1
            n += 1
            燈數(a + 1)
        }
    }
})
/**
 * (請展開)
 * 
 * B鍵決定亮幾個燈
 * 
 * →隨機亮3~15個燈
 */
/**
 * 這邊還沒用好
 * 
 * (要用依光線決定那個)
 */
input.onButtonPressed(Button.B, function () {
    if (input.lightLevel() == 0) {
        h = 25
    } else if (input.lightLevel() > 235) {
        h = 2
    } else if (input.lightLevel() > 215) {
        h = 3
    } else if (input.lightLevel() > 195) {
        h = 5
    } else if (input.lightLevel() > 175) {
        h = 7
    } else if (input.lightLevel() > 155) {
        h = 9
    } else if (input.lightLevel() > 135) {
        h = 11
    } else if (input.lightLevel() > 115) {
        h = 13
    } else if (input.lightLevel() > 95) {
        h = 15
    } else if (input.lightLevel() > 75) {
        h = 17
    } else if (input.lightLevel() > 55) {
        h = 19
    } else if (input.lightLevel() < 35) {
        h = 21
    } else if (input.lightLevel() > 15) {
        h = 23
    } else if (input.lightLevel() > 225) {
        h = 1
    }
})
basic.forever(function () {
	
})
