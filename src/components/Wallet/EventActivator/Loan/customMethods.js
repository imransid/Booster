import { addLoan } from "./../../../../actions/EventActivator";

export const check_Sumbit = (
  loadingOn,
  dispatch,
  loanTitle,
  paidInstallment,
  selectYear,
  loan_catgory,
  selectBank,
  itemdate,
  amount,
  description,
  interest,
  monthly_amount
) => {
  let dateChecker = parseInt(itemdate.slice(0, -8));
  const error_is = error_checker(
    loanTitle,
    paidInstallment,
    selectYear,
    loan_catgory,
    selectBank,
    itemdate,
    amount,
    description,
    interest,
    monthly_amount,
    dateChecker
  );

  error_is !== undefined ? loadingOn : null;

  error_is !== undefined
    ? Add_Loan_DB(
        dispatch,
        loanTitle,
        paidInstallment,
        selectYear,
        loan_catgory,
        selectBank,
        itemdate,
        amount,
        description,
        interest,
        monthly_amount
      )
    : null;
};

const error_checker = (
  loanTitle,
  paidInstallment,
  selectYear,
  loan_catgory,
  selectBank,
  itemdate,
  amount,
  description,
  interest,
  monthly_amount,
  dateChecker
) => {
  if (
    loanTitle == "" ||
    selectYear == "" ||
    loan_catgory == 0 ||
    selectBank == 0 ||
    itemdate == 0 ||
    amount == 0 ||
    description == 0 ||
    interest == 0 ||
    monthly_amount == 0
  ) {
    alert("! You can't Save Empty Field..");
  } else if (dateChecker > 27) {
    alert("! Please Change Date You Can't set date Gretter then 26..");
  } else {
    return true;
  }
};

const Add_Loan_DB = (
  dispatch,
  loanTitle,
  paidInstallment,
  selectYear,
  loan_catgory,
  selectBank,
  itemdate,
  amount,
  description,
  interest,
  monthly_amount
) => {
  dispatch(
    addLoan(
      loanTitle,
      paidInstallment,
      selectYear,
      loan_catgory,
      selectBank,
      itemdate,
      amount,
      description,
      interest,
      monthly_amount
    )
  );
};

export const _interest_calculation = (Amount, totalduration, totalInterest) => {
  // let monthly_bill, Total_Interest, Total_Payment;
  let time = totalduration.slice(0, -5);
  let totalAmount = parseInt(Amount);
  let interestRate = parseInt(totalInterest);
  let DurationTime = parseInt(time);

  const principal = parseFloat(totalAmount);
  const calculatedInterest = parseFloat(interestRate) / 100 / 12;
  const calculatedPayments = parseFloat(DurationTime) * 12;

  // //complate monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  return monthly.toFixed(3);
};
