document.addEventListener("DOMContentLoaded", function () {
  const quantityInputs = document.querySelectorAll(".quantity");
  const totalCells = document.querySelectorAll(".total");
  const cartTotal = document.getElementById("cart-total");

  function updateTotals() {
    let cartSum = 0;

    quantityInputs.forEach((input, index) => {
      const quantity = parseInt(input.value);
      const price = parseFloat(
        totalCells[index].previousElementSibling.textContent.replace("R$ ", "")
      );
      const total = quantity * price;
      totalCells[index].textContent = `R$ ${total.toFixed(2)}`;
      cartSum += total;
    });

    cartTotal.textContent = `R$ ${cartSum.toFixed(2)}`;
  }

  quantityInputs.forEach((input) => {
    input.addEventListener("input", updateTotals);
  });

  updateTotals(); // Initial calculation
});
