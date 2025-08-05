#  JavaScript: Variables, Hoisting, and Scope

## 📦 Variables

A **variable** is a container for storing data values — like a number we might use in a sum, or a string we might use as part of a sentence.

###  Variable Types

| Keyword | Description |
|--------|-------------|
| `let`  | Modern way to declare a variable. Block-scoped and reassignable. |
| `var`  | Old-school declaration. Function-scoped and can lead to bugs due to hoisting. |
| `const` | Like `let`, but once assigned, the value cannot be reassigned. Also block-scoped. |

**Reference**: [JavaScript.info on Variables](https://javascript.info/variables)

---

## 🚀 Hoisting

**Hoisting** is JavaScript's default behavior of moving declarations to the top of the current scope (script or function).

- `var` declarations are hoisted (but not the value).
- `let` and `const` are hoisted but **not initialized**, so accessing them before declaration causes a **ReferenceError**.

 **Best practice:** Always declare variables at the top of their scope using `let` or `const`.

> 📁 Check the file: `Variable.js`

---

## 🌍 Scope

**Scope** answers the question:  
 _“Where are my variables and functions available to me?”_

###  Scope Types:

1. **Global Scope**
2. **Function Scope**
3. **Block Scope**

---

### 1️ Global Scope

A variable declared outside of any function or block is in the **global scope**. These can be accessed from anywhere in your code.

📁 Check files:
- `./Scope/01GlobalScope/Scope.html`
- `./Scope/01GlobalScope/Scope.js`

🧠 In the browser, global variables become properties of the global object: `window`.


---

## 2️ Function Scope

Variables declared inside a **function** can only be accessed within that function.

📁 Check: `./02FunctionScope/`

---

## 3️ Block Scope

Variables declared with let or const inside {} (such as in if, for, or while blocks) can only be accessed within that block.

📁 Check: .`/03BlockScope/`

----

###  DataTypes:

## 1.Primative       
                    
1. **Number**              
2. **String**
3. **Boolean**
4. **Null**
5. **BigInt**
6. **Undefine**
7. **Symbol**

 ## 2.Non-Primative
  1.**Object**

  📁 Check: .`/03DataTypes/`