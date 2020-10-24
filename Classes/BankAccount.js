class BankAccount {
    constructor(balance) {
        this.balance = balance;
        this.his = [];
    }

    current() {
        return this.balance;
    }

    append(amount) {
        if (typeof amount !== "number") {
            return this.balance
        }
        if (amount < 0) {
            return this.balance
        }
        if (amount >= 0) {
            this.balance += amount
            this.his.push("+" + amount)
            return this.balance
        }
        return null
    }

    substract(amount) {
        if (typeof amount !== "number") {
            return this.balance
        }
        if (amount < 0) {
            return this.balance
        }
        if (amount >= 0) {
            this.balance -= amount
            this.his.push("-" + amount)
            return this.balance
        }
        return null
    }

    merge(bankAccount) {
        if (!(bankAccount instanceof BankAccount)) {
            return this.balance
        }
        if (!bankAccount) {
            return this.balance
        }

        this.balance += bankAccount.balance
        this.his = [...this.his, ...bankAccount.his]
        return this.balance
    }

    history() {
        return this.his;
    }

}

module.exports = BankAccount;