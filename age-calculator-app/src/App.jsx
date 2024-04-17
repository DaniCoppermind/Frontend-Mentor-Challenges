import { useState } from "react"
import "./App.css"
import iconArrow from "./assets/images/icon-arrow.svg"
function App() {
  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")

  const [errorD, setErrorD] = useState("")
  const [errorM, setErrorM] = useState("")
  const [errorY, setErrorY] = useState("")

  const [age, setAge] = useState(
    { years: Number, months: Number, days: Number } | (null > null),
  )

  const handleSubmit = () => {
    const actualDate = new Date()
    const birthDate = new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day),
    )

    const birthDay = parseInt(day)
    const birthMonth = parseInt(month)
    const birthYear = parseInt(year)

    isNaN(birthDate) || birthDay > 31
      ? setErrorD("Must be a valid day")
      : setErrorD("")

    isNaN(birthMonth) || birthMonth > 12
      ? setErrorM("Must be a valid month")
      : setErrorM("")

    isNaN(birthYear) || birthYear > actualDate.getFullYear()
      ? setErrorY("Must be a valid year")
      : setErrorY("")

    let years = actualDate.getFullYear() - birthDate.getFullYear()
    let months = actualDate.getMonth() - birthDate.getMonth()
    let days = actualDate.getDate() - birthDate.getDate()

    if (
      months < 0 ||
      (months === 0 && actualDate.getDate() < birthDate.getDate())
    ) {
      months += 12
      years--
    }

    if (days < 0) {
      months--
      const tempDate = new Date(
        actualDate.getFullYear(),
        actualDate.getMonth(),
        0,
      )
      days += tempDate.getDate()
    }

    setAge({ years, months, days })
  }

  return (
    <main className="flex h-screen w-screen items-center justify-center xs:p-5">
      <div className="w-auto rounded-xl rounded-br-[100px] bg-[white] p-10 xs:mx-4 xs:w-full">
        <div className="flex gap-4 xs:justify-center">
          <div className="flex flex-col">
            <label
              className="pb-1 text-[10px] font-bold tracking-widest text-[--smokey-grey]"
              htmlFor="day"
            >
              DAY
            </label>
            <input
              className={`${errorD ? "border-red-400" : "border-2"} ${errorD ? "outline-red-400" : "outline-purple-300"} h-11 w-[100px] rounded-md border-2 border-["--smokey-grey"] pl-3 text-lg font-bold xs:w-16`}
              placeholder="DD"
              type="number"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            />
            {errorD && (
              <p className="py-1 text-[10px] italic text-red-400">{errorD}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              className="pb-1 text-[10px] font-bold tracking-widest text-[--smokey-grey]"
              htmlFor="month"
            >
              MONTH
            </label>
            <input
              className={`${errorM ? "border-red-400" : "border-2"} ${errorM ? "outline-red-400" : "outline-purple-300"} h-11 w-[106px] rounded-md border-2 border-["--smokey-grey"] pl-3 font-["Poppins-bold"] text-lg xs:w-16`}
              placeholder="MM"
              type="number"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
            {errorM && (
              <p className="py-1 text-[10px] italic text-red-400">{errorM}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              className="pb-1 text-[10px] font-bold tracking-widest text-[--smokey-grey]"
              htmlFor="year"
            >
              YEAR
            </label>
            <input
              className={`${errorY ? "border-red-400" : "border-2"} ${errorY ? "outline-red-400" : "outline-purple-300"} h-11 w-[110px] rounded-md border-2 border-["--smokey-grey"] pl-3 font-["Poppins-bold"] text-lg xs:w-16`}
              placeholder="YYYY"
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            {errorY && (
              <p className="py-1 text-[10px] italic text-red-400">{errorY}</p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-start xs:my-8 xs:flex xs:items-center xs:justify-center">
          <hr className="w-[25rem] border xs:w-full" />
          <button onClick={handleSubmit}>
            <img
              className="rounded-full bg-[--purple] p-2 active:bg-black xs:absolute xs:bottom-[330px] xs:right-32 xs:mt-4 xs:p-1"
              src={iconArrow}
              alt="Button Icon"
            />
          </button>
        </div>

        <hgroup className='font-["Poppins-boldItalic"] text-6xl xs:text-3xl'>
          <h1>
            <span className="text-[--purple]">
              {age ? `${age.years}` : "- -"}
            </span>{" "}
            years
          </h1>
          <h1>
            <span className="text-[--purple]">
              {age ? `${age.months}` : "- -"}
            </span>{" "}
            months
          </h1>
          <h1>
            <span className="text-[--purple]">
              {age ? `${age.days}` : "- -"}
            </span>{" "}
            days
          </h1>
        </hgroup>
      </div>
    </main>
  )
}

export default App
