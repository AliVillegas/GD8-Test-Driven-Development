class VectorCalculator {

    sum(a, b) {
        if (!a || !b) {
            return null
        }
        if (typeof a !== "object" || typeof b !== "object") {
            return null
        }
        if (!('x' in a && 'y' in a && 'x' in b && 'y' in b)) {
            return null
        }
        if (typeof a.x !== "number" || typeof a.y !== "number" || typeof b.x !== "number" || typeof b.y !== "number") {
            return null
        }
        return { x: a.x + b.x, y: a.y + b.y }
    }

    sub(a, b) {
        if (!a || !b) {
            return null
        }
        if (typeof a !== "object" || typeof b !== "object") {
            return null
        }
        if (!('x' in a && 'y' in a && 'x' in b && 'y' in b)) {
            return null
        }
        if (typeof a.x !== "number" || typeof a.y !== "number" || typeof b.x !== "number" || typeof b.y !== "number") {
            return null
        }
        return { x: a.x - b.x, y: a.y - b.y }
    }

    scalar(s, v) {
        if (!s || !v) {
            return null
        }
        if (typeof s !== "number" || typeof v !== "object") {
            return null
        }
        if (!('x' in v && 'y' in v)) {
            return null
        }
        if (typeof s !== "number" || typeof v.x !== "number" || typeof v.y !== "number") {
            return null
        }
        return { x: s * v.x, y: s * v.y }
    }

    dot(a, b) {
        if (!a || !b) {
            return null
        }
        if (typeof a !== "object" || typeof b !== "object") {
            return null
        }
        if (!('x' in a && 'y' in a && 'x' in b && 'y' in b)) {
            return null
        }
        if (typeof a.x !== "number" || typeof a.y !== "number" || typeof b.x !== "number" || typeof b.y !== "number") {
            return null
        }
        return a.x * b.x + a.y * b.y
    }
}

module.exports = VectorCalculator;