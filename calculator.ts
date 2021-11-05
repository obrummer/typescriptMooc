type Operation = "multiply" | "add" | "divide";

type Result = number | string;

const calculator = (a: number, b: number, op: Operation): Result => {
  if (op === "multiply") {
    return a * b;
  } else if (op === "add") {
    return a + b;
  } else if (op === "divide") {
    if (b === 0) return "can't divide by 0!";
    return a / b;
  }
};

try {
  console.log(calculator(1, 5, "divide"));
} catch (error: unknown) {
  let errorMessage = "Something went wrong.";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}
