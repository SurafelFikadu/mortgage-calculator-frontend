import calculator_empty from "../assets/images/illustration-empty.svg";

const Display = () => {
  return (
    <>
      <div className="display p-8 bg-neutral-slate_900 md:rounded-r-2xl md:rounded-bl-60 flex flex-col items-center justify-center h-96 md:h-auto">
        <img className="size-[130px] mb-3" src={calculator_empty} alt="empty" />
        <h2 className="text-white mb-3">Results shown here</h2>
        <p className="text-xs text-center text-neutral-slate_300">
          Complete the form and click "calculate repayments" to see what you
          monthly repayments would be.
        </p>
      </div>
    </>
  );
};

export default Display;
