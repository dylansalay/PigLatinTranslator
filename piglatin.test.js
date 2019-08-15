describe("function2", () => {
    test("returns word that starts with vowel plus way", () => {
        expect(function2("apple")).toBe("appleway")
        expect(function2("orange")).toBe("orangeway")
        expect(function2("underwear")).toBe("underwearway")
    })
})

describe("function3", () => {
    test("returns word that starts with consonant plus ay", () => {
        expect(function3("whale")).toBe("alewhay")
        expect(function3("sequel")).toBe("equelsay")
        expect(function3("tree")).toBe("eetray")
    })
})

describe("function4", () => {
    test("qu test", () => {
        expect(function4("question")).toBe("estionquay")
        expect(function4("squeal")).toBe("ealsquay")
        expect(function4("quinoa")).toBe("inoaquay")
    })
})

describe("pigLatin", () => {
    test("Final Test", () => {
        expect(pigLatin("eye")).toBe("eyeway")
        expect(pigLatin("throw")).toBe("owthray")
        expect(pigLatin("quiet")).toBe("ietquay")
        expect(pigLatin("squeal")).toBe("ealsquay")
        expect(pigLatin("yummy")).toBe("ummyyay")
        expect(pigLatin("fry")).toBe("yfray")
        expect(pigLatin("rhythm")).toBe("ythmrhay")
    })
})
