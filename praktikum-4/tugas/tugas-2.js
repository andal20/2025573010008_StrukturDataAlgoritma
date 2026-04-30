// ================================================
// TUGAS 2: STACK - CEK KURUNG SEIMBANG
// ================================================

// 2. Class Stack
class Stack {
    constructor() {
        this.data = [];
    }

    push(x) {
        this.data.push(x);
    }

    pop() {
        return this.data.pop();
    }

    isEmpty() {
        return this.data.length === 0;
    }
}


// 3. Function cekKurungSeimbang
function cekKurungSeimbang(ekspresi) {
    const stack = new Stack();

    for (let char of ekspresi) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.isEmpty()) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.isEmpty();
}


// 4–9. Pengujian
const testCases = [
    '(2 + 3) * (4 - 1)',
    '((a + b)',
    ')(',
    '((()))',
    '(a + b) * (c + d)'
];

console.log('\n=== Cek Kurung Seimbang ===');

testCases.forEach(exp => {
    console.log(`'${exp}' → Seimbang: ${cekKurungSeimbang(exp)}`);
});