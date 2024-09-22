function findRoots() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
  
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      document.getElementById("result").innerText = "Please enter valid numbers!";
      return;
    }
  
    const discriminant = b * b - 4 * a * c;
    let resultText = '';
  
    if (discriminant > 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      resultText = `The roots are real and different: Root 1 = ${root1.toFixed(2)}, Root 2 = ${root2.toFixed(2)}`;
    } else if (discriminant === 0) {
      const root = -b / (2 * a);
      resultText = `The roots are real and equal: Root = ${root.toFixed(2)}`;
    } else {
      const realPart = (-b / (2 * a)).toFixed(2);
      const imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
      resultText = `The roots are complex and different: Root 1 = ${realPart} + ${imaginaryPart}i, Root 2 = ${realPart} - ${imaginaryPart}i`;
    }
  
    document.getElementById("result").innerText = resultText;
  }
  
