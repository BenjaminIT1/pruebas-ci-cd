const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;

function test(nombre, fn) {
  try {
    fn();
    console.log(`✅ ${nombre}`);
  } catch (error) {
    console.error(`❌ ${nombre}`);
    console.error(error.message);
  }
}

test("Suma: 2 + 3 = 5", () => {
  if (suma(2, 3) !== 5) throw new Error("Suma incorrecta");
});

test("Resta: 5 - 2 = 3", () => {
  if (resta(5, 2) !== 3) throw new Error("Resta incorrecta");
});

test("Multiplicación: 4 * 3 = 12", () => {
  if (multiplicacion(4, 3) !== 12) throw new Error("Multiplicación incorrecta");
});