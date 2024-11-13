import { useState } from "react";
import img_calculator from "../assets/images/icon-calculator.svg";
import calculator_empty from "../assets/images/illustration-empty.svg";

const Calculate = () => {
  const [mortgageAmount, setMortgageAmount] = useState<any>();
  const [mortgageTerm, setMortgageTerm] = useState<any>();
  const [mortgageInterest, setMortgageInterest] = useState<any>();
  // const [calculating, setCalculating] = useState(false);

  const changeAmount = (e: any) => {
    setMortgageAmount(e.target.value);
  };
  const changeTerm = (e: any) => {
    setMortgageTerm(e.target.value);
  };
  const changeInterest = (e: any) => {
    setMortgageInterest(e.target.value);
  };

  const CalculateMortgage = () => {
    const errorAmount = document.getElementById("error-amount");
    const errorTerm = document.getElementById("error-term");
    const errorRate = document.getElementById("error-interest");
    const repaymentRadio = document.getElementById("repayment");
    const interestRadio = document.getElementById("interest");
    const errorRadio = document.getElementById("error-radio");

    const spanAmount = document.getElementById("span-amount");
    const spanTerm = document.getElementById("span-term");
    const spanRate = document.getElementById("span-rate");

    const priceRepay = document.getElementById("price-repay");
    const totalPay = document.getElementById("total-pay");
    const calculating = document.getElementById("calculating");
    const notCalculating = document.getElementById("not-calculating");

    if (!mortgageAmount) {
      errorAmount!.innerHTML = `This field is required`;
      spanAmount!.style.background = "hsl(4, 69%, 50%)";

      setInterval(() => {
        errorAmount!.innerHTML = ``;
        spanAmount!.style.background = "hsl(202, 86%, 94%)";
      }, 5000);
    } else if (!mortgageTerm) {
      errorTerm!.innerHTML = `This field is required`;
      spanTerm!.style.background = "hsl(4, 69%, 50%)";

      setInterval(() => {
        errorTerm!.innerHTML = ``;
        spanTerm!.style.background = "hsl(202, 86%, 94%)";
      }, 5000);
    } else if (!mortgageInterest) {
      errorRate!.innerHTML = `This field is required`;
      spanRate!.style.background = "hsl(4, 69%, 50%)";

      setInterval(() => {
        errorRate!.innerHTML = ``;
        spanRate!.style.background = "hsl(202, 86%, 94%)";
      }, 5000);
    } else if (!repaymentRadio!.checked && !interestRadio!.checked) {
      errorRadio!.innerHTML = `This field is required`;
      setInterval(() => {
        errorRadio!.innerHTML = ``;
      }, 5000);
    } else {
      // setCalculating(true);
      calculating!.style.display = "block";
      notCalculating!.style.display = "none";
      let monthlyRepayment;
      let totalRepay;
      let p = Number(mortgageAmount);
      let n = Number(mortgageTerm) * 12;
      let r = Number(mortgageInterest) / 12 / 100;
      if (repaymentRadio!.checked) {
        monthlyRepayment = (
          p *
          r *
          (Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1))
        ).toFixed(2);
        totalRepay = (
          Number(p * r * (Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1))) * n
        ).toFixed(2);
      } else {
        monthlyRepayment = (p * r).toFixed(2);
        totalRepay = (p * r * n).toFixed(2);
      }
      priceRepay!.innerHTML = `£${monthlyRepayment}`;
      totalPay!.innerHTML = `£${totalRepay}`;
    }
  };

  const ClearBtn = () => {
    // setCalculating(false);
    setMortgageAmount("");
    setMortgageTerm("");
    setMortgageInterest("");
    const repaymentRadio = document.getElementById("repayment");
    const interestRadio = document.getElementById("interest");
    repaymentRadio!.checked = false;
    interestRadio!.checked = false;
    const calculating = document.getElementById("calculating");
    const notCalculating = document.getElementById("not-calculating");
    calculating!.style.display = "none";
    notCalculating!.style.display = "flex";
  };

  return (
    <div className="home bg-white md:rounded-2xl md:flex md:flex-row flex flex-col md:w-750 w-375 mx-4">
      <div className="calculate p-8 md:min-w-96">
        <div className="head-calculate flex items-center justify-between mb-5">
          <h1 className="text-xl font-semibold text-neutral-slate_900">
            Mortgage Calculator
          </h1>
          <button
            onClick={ClearBtn}
            className="btn-clear text-neutral-slate_700 underline"
          >
            Clear All
          </button>
        </div>
        <div className="mortgage-amount">
          <label htmlFor="amount" className="text-neutral-slate_500">
            Mortgage Amount
          </label>
          <div className="border rounded-md flex items-center justify-between my-2">
            <span
              id="span-amount"
              className=" basis-10 flex w-100 items-center justify-center bg-neutral-slate_100 py-2"
            >
              £
            </span>
            <input
              className="w-full outline-none px-3"
              type="number"
              id="amount"
              value={mortgageAmount}
              onChange={changeAmount}
              min={0}
              required
            />
          </div>
          <div id="error-amount" className={`text-primary-red`}></div>
        </div>
        <div className="md:flex md:items-center md:gap- justify-between my-5">
          <div className="my-4 cal-mor-int">
            <label htmlFor="term" className="text-neutral-slate_500">
              Mortgage Term
            </label>
            <div className="flex items-center justify-between border rounded-lg mt-2">
              <input
                className="md:w-24 w-full outline-none px-3"
                id="term"
                type="number"
                value={mortgageTerm}
                onChange={changeTerm}
                min={0}
                required
              />
              <span id="span-term" className="p-2 px-3 bg-neutral-slate_100">
                years
              </span>
            </div>
            <div id="error-term" className="text-primary-red"></div>
          </div>
          <div className="my-4 cal-mor-int">
            <label htmlFor="rate" className="text-neutral-slate_500">
              Interest Rate
            </label>
            <div className="flex items-center justify-between border mt-2 rounded-lg">
              <input
                className="md:w-20 w-full outline-none px-3"
                id="rate"
                type="number"
                value={mortgageInterest}
                onChange={changeInterest}
                min={0}
                required
              />
              <span id="span-rate" className="p-2 px-3 bg-neutral-slate_100">
                %
              </span>
            </div>
            <div id="error-interest" className="text-primary-red"></div>
          </div>
        </div>
        <div className="flex flex-col my-5">
          <div className="text-neutral-slate_500">Mortage Type</div>
          <div>
            <label
              id="label-repay"
              htmlFor="repayment"
              className="relative mt-2 flex items-center gap-2 border p-1 rounded-md cursor-pointer"
            >
              <input type="radio" name="hi" id="repayment" required />
              <div className="w-5 h-5 border-neutral-slate_300 border rounded-full bg-primar-lime flex items-center justify-center">
                <div className="sec-dev w-3 h-3 rounded-full bg-primary-lim"></div>
              </div>
              <span>Repayment</span>
            </label>
          </div>
          <label
            htmlFor="interest"
            className="relative mt-2 flex items-center gap-2 border p-1 rounded-md cursor-pointer"
          >
            <input type="radio" name="hi" id="interest" required />
            <div className="w-5 h-5 border-neutral-slate_300 border rounded-full bg-primar-lime flex items-center justify-center">
              <div className="sec-dev w-3 h-3 rounded-full bg-primary-lim"></div>
            </div>
            <span>Interest Only</span>
          </label>
          <div id="error-radio" className="text-primary-red"></div>
        </div>

        <div className="mt-7">
          <button
            onClick={CalculateMortgage}
            className="flex items-center justify-between gap-2 border w-100 py-2 px-7 rounded-full bg-primary-lime"
          >
            <img src={img_calculator} alt="calculator" />
            <div>Calculate Repayments</div>
          </button>
        </div>
      </div>

      <div className="display p-7 bg-neutral-slate_900 md:rounded-r-2xl md:rounded-bl-60 h-auto w-full">
        <div id="calculating" className="hidden">
          <h1 className="text-white text-xl mb-2">Your results</h1>
          <p className="text-xs text-neutral-slate_500 leading-5 mb-8">
            Your results are shown below based on the information you provided.
            To adjust the results, edt the form and click "calculate repayment"
            again.{" "}
          </p>
          <div className="bg-neutral-slate_950 p-7 rounded-lg border-t-4 border-primary-lime">
            <span className="text-neutral-400 text-sm">
              Your monthly repayment
            </span>
            <h1
              id="price-repay"
              className="text-primary-lime text-5xl font-bold my-5"
            >
              click again
            </h1>
            <hr className="bg-slate-400 my-8" />
            <span className="text-neutral-500 text-l">
              Total you'll repay over the term
            </span>
            <h2
              id="total-pay"
              className="text-neutral-50 font-semibold text-lg mt-2"
            ></h2>
          </div>
        </div>

        <div
          id="not-calculating"
          className="flex items-center justify-center flex-col h-full"
        >
          <img
            className="size-[130px] mb-3"
            src={calculator_empty}
            alt="empty"
          />
          <h2 className="text-white mb-3">Results shown here</h2>
          <p className="text-xs text-center text-neutral-slate_300">
            Complete the form and click "calculate repayments" to see what you
            monthly repayments would be.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Calculate;
