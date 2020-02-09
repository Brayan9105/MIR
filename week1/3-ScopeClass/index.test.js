const {findLongestWordLength, anagram, Circle} = require('./index')

describe('findLongestWordLength Test', () => {
    it('Should expect to findLongestWordLength', () => {
        expect(findLongestWordLength('the vampire serie')).toBe(7)
        
        expect(findLongestWordLength('hi world')).toBe(5)

        expect(findLongestWordLength('The quick brown fox jumped over the lazy dog')).toBe(6)
    })
})

describe('Anagram Test', () => {
    it('Should expect first true and second false', () => {
        expect(anagram("anagram", "nagaram")).toBe(true)
        expect(anagram("hello", "world")).toBeFalsy()
    })
})

describe('Circle Test', () => {
    const circle = new Circle(2)
    it('', () => {
        expect(circle).toMatchObject({radius: 2})
        expect(circle.circunferencia()).toBe(12.566370614359172)
        expect(circle.area()).toBe(12.566370614359172)
    })
})