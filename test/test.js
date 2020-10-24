// import { VectorCalculator } from '../Classes/VectorCalculator.js'
const assert = require('assert')
const VectorCalculator = require('../Classes/VectorCalculator')
const BankAccount = require('../Classes/BankAccount')

describe(' Tests for VectorCalculator ', () => {
    let vectorCalculator = new VectorCalculator()
    describe('Sum Test', () => {
        it('a + b = c', () => {
            let v1 = { x: 10, y: 10 }
            let v2 = { x: 15, y: 15 }
            assert.deepStrictEqual({ x: 25, y: 25 }, vectorCalculator.sum(v1, v2))
        })

        it('A received parameter is null', () => {
            let v1 = { x: 10, y: 10 }
            let v2 = null
            assert.deepStrictEqual(null, vectorCalculator.sum(v1, v2))
        })

        it('A received parameter is not a vector', () => {
            let v1 = { x: 10, y: 10 }
            let v2 = { x: 100 }
            let v3 = "Saúl"
            assert.deepStrictEqual(null, vectorCalculator.sum(v1, v2))
            assert.deepStrictEqual(null, vectorCalculator.sum(v1, v3))
            assert.deepStrictEqual(null, vectorCalculator.sum(v2, v3))
        })
    })
    describe('Sub Test', () => {
        it('a - b = c', () => {
            let v1 = { x: 10, y: 10 }
            let v2 = { x: 15, y: 15 }
            assert.deepStrictEqual({ x: -5, y: -5 }, vectorCalculator.sub(v1, v2))
        })

        it('A received parameter is null', () => {
            let v1 = { x: 10, y: 10 }
            let v2 = null
            assert.deepStrictEqual(null, vectorCalculator.sub(v1, v2))
            assert.deepStrictEqual(null, vectorCalculator.sub(v2, v1))
        })

        it('A received parameter is not a vector', () => {
            let v1 = { x: 10, y: 10 }
            let v2 = { x: 100 }
            let v3 = "Saúl"
            assert.deepStrictEqual(null, vectorCalculator.sub(v1, v2))
            assert.deepStrictEqual(null, vectorCalculator.sub(v1, v3))
            assert.deepStrictEqual(null, vectorCalculator.sub(v2, v3))
        })
    })
    describe('Scalar Test', () => {
        it('s*v = sv', () => {
            let s = 100
            let v = { x: 15, y: 15 }
            assert.deepStrictEqual({ x: 1500, y: 1500 }, vectorCalculator.scalar(s, v))
        })

        it('Received params in different order', () => {
            let s = 100
            let v = { x: 15, y: 15 }
            assert.deepStrictEqual(null, vectorCalculator.scalar(v, s))
        })

        it('A received parameter is null', () => {
            let s = 100
            let v = null
            assert.deepStrictEqual(null, vectorCalculator.scalar(s, v))
            let s2 = null
            let v2 = { x: 15, y: 15 }
            assert.deepStrictEqual(null, vectorCalculator.scalar(s2, v2))
        })

        it('A received parameter is not a vector', () => {
            let s = "100"
            let v = { x: 15, y: 15 }
            assert.deepStrictEqual(null, vectorCalculator.scalar(s, v))
            let s2 = 100
            let v2 = "{ x: 15, y: 15 }"
            assert.deepStrictEqual(null, vectorCalculator.scalar(s2, v2))
        })
    })
    describe('Dot Product Test', () => {
        it('v1·v2 = x1*x2 + y1*y2', () => {
            let v1 = { x: 10, y: 10 }
            let v2 = { x: 15, y: 15 }
            assert.deepStrictEqual(300, vectorCalculator.dot(v1, v2))
        })

        it('A received parameter is null', () => {
            let v1 = { x: 10, y: 10 }
            let v2 = null
            assert.deepStrictEqual(null, vectorCalculator.dot(v1, v2))
            assert.deepStrictEqual(null, vectorCalculator.dot(v2, v1))

        })

        it('A received parameter is not a vector', () => {
            let v1 = { x: 10, y: 10 }
            let v2 = "{ x: 15, y: 15 }"
            assert.deepStrictEqual(null, vectorCalculator.dot(v1, v2))
            assert.deepStrictEqual(null, vectorCalculator.dot(v2, v1))
        })
    })

})

describe(' Tests for BankAccount ', () => {
    let balance = 100
    describe('Current Amount', () => {
        let bankAccount = new BankAccount(balance)
        it('Current Value', () => {
            assert.deepStrictEqual(100, bankAccount.current())
        })
    })
    describe('Append Test', () => {
        it('Received positive balance', () => {
            let bankAccount = new BankAccount(balance)
            let b1 = 100
            assert.deepStrictEqual(200, bankAccount.append(b1))
        })
        it('Received Negative Balance', () => {
            let bankAccount = new BankAccount(balance)
            let b1 = -100
            assert.deepStrictEqual(100, bankAccount.append(b1))
        })
        it('Received not a number Balance', () => {
            let bankAccount = new BankAccount(balance)
            let b1 = null
            assert.deepStrictEqual(100, bankAccount.append(b1))
        })
    })
    describe('Substract Test', () => {
        it('Receive positive balance', () => {
            let bankAccount = new BankAccount(balance)
            let b1 = 100
            assert.deepStrictEqual(0, bankAccount.substract(b1))
        })
        it('Received Negative Balance', () => {
            let bankAccount = new BankAccount(balance)
            let b1 = -100
            assert.deepStrictEqual(100, bankAccount.substract(b1))
        })
        it('Received not a number Balance', () => {
            let bankAccount = new BankAccount(balance)
            let b1 = null
            assert.deepStrictEqual(100, bankAccount.substract(b1))
        })
    })
    describe('Merge Test', () => {
        let bankAccount1 = new BankAccount(balance)
        let bankAccount2 = new BankAccount(balance)
        it('Correct Merge', () => {
            assert.deepStrictEqual(200, bankAccount1.merge(bankAccount2))
        })
        it('Received something different than BankAccouint', () => {
            assert.deepStrictEqual(200, bankAccount1.merge(null))
            assert.deepStrictEqual(200, bankAccount1.merge({ x: 100, y: 200 }))
            assert.deepStrictEqual(200, bankAccount1.merge("bank account"))
        })
    })
    describe('History Test', () => {
        it('Correct History ', () => {
            let bankAccount = new BankAccount(balance)
            bankAccount.append(30)
            bankAccount.append(80)
            bankAccount.substract(50)
            assert.deepStrictEqual(["+30", "+80", "-50"], bankAccount.history())
        })
        it('Correct History After Merge', () => {
            let bankAccount1 = new BankAccount(balance)
            bankAccount1.append(30)
            bankAccount1.append(80)
            bankAccount1.substract(50)
            let bankAccount2 = new BankAccount(balance)
            bankAccount2.append(30)
            bankAccount2.append(80)
            bankAccount2.substract(50)

            bankAccount1.merge(bankAccount2)
            assert.deepStrictEqual(["+30", "+80", "-50", "+30", "+80", "-50"], bankAccount1.history())
        })

    })

})