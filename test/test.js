// import { VectorCalculator } from '../Classes/VectorCalculator.js'
const assert = require('assert')
const VectorCalculator = require('../Classes/VectorCalculator')

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