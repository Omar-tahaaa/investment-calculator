import { formatter } from "../util/investment";
import { calculateInvestmentResults } from "../util/investment";


export default function Result({ inputsValue }) {
  const data = calculateInvestmentResults(inputsValue);
  
  let initialInvestment = 0;
  if (data) {
    initialInvestment =
    data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;
  }
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>investment value</th>
          <th>intereset</th>
          <th>total intereset</th>
          <th>invested capital</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((detail) => {
            const totalInterest =
              detail.valueEndOfYear - detail.annualInvestment * initialInvestment;
              const totalAmountInvestment = detail.valueEndOfYear - totalInterest
            return (
              <tr key={detail.year}>
                <td>{detail.year}</td>
                <td>{formatter.format(detail.valueEndOfYear)}</td>
                <td>{formatter.format(detail.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvestment)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
