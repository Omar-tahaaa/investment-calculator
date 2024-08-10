export default function UserInput({handleInvestment , inputsValue}){
    return(
        <section id="user-input">
        <div className="input-group">
          <p>
            <label>initialInvestment</label>
            <input
              type="number"
              required
              value={inputsValue.initialInvestment}
              onChange={(event) => handleInvestment("initialInvestment" , event.target.value)}
            />
          </p>
          <p>
            <label>annualInvestment</label>
            <input
              type="number"
              required
              value={inputsValue.annualInvestment}
              onChange={(event) => handleInvestment("annualInvestment" , event.target.value)}
            />
          </p>
          <p>
            <label>expectedReturn</label>
            <input
              type="number"
              required
              value={inputsValue.expectedReturn}
              onChange={(event) => handleInvestment("expectedReturn" , event.target.value)}
            />
          </p>
          <p>
            <label>duration</label>
            <input
              type="number"
              required
              value={inputsValue.duration}
              onChange={(event) => handleInvestment("duration" , event.target.value)}
            />
          </p>
        </div>
      </section>
    )
}