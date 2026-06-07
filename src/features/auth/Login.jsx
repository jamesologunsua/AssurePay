import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaHeadset } from "react-icons/fa";

export const Login = () => {
  const [identifier, setIdentifier] = useState("")
  const navigate = useNavigate()

  /* Handle Submit */
  const handleSubmit = (event) => {
    // For now, we will just navigate to the home page
    event.preventDefault()
    if (!identifier.trim()) return
    navigate("/home")
  }

  return(
    <main className="min-h-screen bg-app-bg px-6 py-6 text-text-main">
      <div className="mx-auto flex min-h-[calc(100vh-48px)] w-full max-w-sm flex-col">
        <header className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-xl leading-none text-text-main focus:outline-none"
            aria-label="Go back"
          >
            <IoIosArrowRoundBack />
          </button>

          <button
            type="button"
            className="text-[12px] font-semibold text-brand-primary focus:outline-none"
            aria-label="Go back"
          >
            <FaHeadset />
          </button>
        </header>

        <section className="flex flex-1 flex-col pt-4">
          <div className="mb-10 flex flex-col items-center text-center">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-primary shadow-lg shadow-blue-200">
              <span className="text-xl font-bold text-white">A</span>
            </div>

            <h1 className="text-xl font-bold tracking-tight">AssurePay</h1>
            <p className="text-[11px] text-text-muted">
              Manage your wallet and protected payments.
            </p>
          </div>

          {/* <h2 className="mb-4 text-[13px] font-medium">Log in to your account</h2> */}

          {/* FORM */}
          <form onSubmit={handleSubmit} className="flex flex-1 flex-col">
            <label htmlFor="identifier" className="mb-2 block text-sm font-medium text-text-muted">
              Phone number or email
            </label>

            <div className="flex h-12 items-center rounded-2xl bg-surface-soft px-4 ring-1 ring-border-soft focus-within:ring-2 focus-within:ring-brand-primary">
              <input
                id="identifier"
                type="text"
                value={identifier}
                onChange={(event) => setIdentifier(event.target.value)}
                placeholder="Enter phone number or email"
                className="w-full bg-transparent h-5 font-medium text-text-main outline-none placeholder:text-text-soft text-[12px]"
              />

              {identifier && (
                <button
                  type="button"
                  onClick={() => setIdentifier("")}
                  className="ml-3 flex h-7 w-7 items-center justify-center rounded-full bg-surface-muted text-sm font-bold text-text-muted"
                  aria-label="Clear input"
                >
                  &times;
                </button>
              )}
            </div>

            <p className="mt-4 text-[10px] text-text-muted">
              Can't access your phone or email?{" "}
              <button
                type="button"
                className="font-semibold text-brand-primary"
              >
                Contact support
              </button>
            </p>

            <div className="mt-auto pt-8 pb-2">
              <button
                type="submit"
                className="h-12 w-full rounded-full bg-linear-to-r from-brand-primary to-brand-deep text-[13px] font-bold text-white shadow-lg shadow-blue-200 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={!identifier.trim()}
              >
                Continue
              </button>
              
              <p className="mt-6 text-center text-[11px] text-text-muted">
                Don't have an AssurePay account?
              </p>

              <Link
                to="/register"
                className="text-[11px] block text-center text-sm font-bold text-brand-primary"
              >
                Create an account
              </Link>
            </div>

          </form>
        </section>
      </div>
    </main>
  )
}

export default Login