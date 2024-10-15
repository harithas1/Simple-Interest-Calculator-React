function App() {
  function calculateSimpleInterest() {
    const principalAmount = document.getElementById("principalAmount").value;
    const interestRate = document.getElementById("interestRate").value;
    const noOfYears = document.getElementById("noOfYears").value;

    const simpleInterest = (principalAmount * interestRate * noOfYears) / 100;
    const totalAmount = Number(principalAmount) + Number(simpleInterest);

    const result = document.getElementById("result");

    if (principalAmount === "" || interestRate === "" || noOfYears === "") {
      result.innerText = "Please enter all the values";
      result.style.color = "red";
      result.style.padding = "10px";
    } else {
      result.innerText = `For a principal amount of ₹${parseFloat(
        principalAmount
      ).toFixed(
        2
      )}, at an interest rate of ${interestRate}% over ${noOfYears} years, the total amount will be ₹${parseFloat(
        totalAmount
      ).toFixed(2)}. This includes ₹${parseFloat(simpleInterest).toFixed(2)} as simple interest`;
      result.style.color = "green"
      result.style.padding = "10px";
    }
  }

  return (
    <div>
      <article className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-600 flex flex-col px-6 py-8 gap-10 items-center justify-center place-content-center">
        <h1 className="text-center text-4xl font-bold text-yellow-500">
          Simple Interest Calculator
        </h1>

        <section className="flex flex-col gap-3 items-center">
          <label htmlFor="principalAmount">Principal Amount(₹): </label>
          <input
            className="p-1 border-2 focus:outline-none focus:border-blue-500"
            autoFocus
            type="number"
            name="principalAmount"
            id="principalAmount"
            placeholder="Enter Principal Amount"
            min={0}
          />
          <label htmlFor="interestRate">Annual Interest Rate(%): </label>
          <input
            className="p-1 border-2 focus:outline-none focus:border-blue-500"
            type="number"
            name="interestRate"
            id="interestRate"
            placeholder="Enter Interest Rate"
            min={0}
          />

          <label htmlFor="noOfYears">Number of Years: </label>
          <input
            className="p-1 border-2 focus:outline-none focus:border-blue-500"
            type="number"
            name="noOfYears"
            id="noOfYears"
            placeholder="Enter number of years"
            min={0}
          />
          <button
            onClick={calculateSimpleInterest}
            className="mt-8 font-bold text-xl p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full"
          >
            Calculate
          </button>
        </section>

        <p id="result" className="text-xl text-center"></p>
      </article>
    </div>
  );
}

export default App;
