import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const Register = () => {
  const [registerMethod, setRegisterMethod] = useState("phone")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const navigate = useNavigate()

  const identifier = registerMethod === "phone" ? phoneNumber.trim() : email.trim()
  const canSubmit = Boolean(identifier && acceptedTerms)

  /* Handle Submit */
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!canSubmit) return

    navigate("/home")
  }

  return (
    <main className="h-dvh overflow-hidden bg-app-bg px-6 py-5 text-text-main">
      <div className="mx-auto flex h-[calc(100dvh-40px)] w-full max-w-sm flex-col">
        <header className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-2xl leading-none text-text-main focus:outline-none"
            aria-label="Go back"
          >
            &larr;
          </button>

          <button
            type="button"
            className="text-sm font-semibold text-brand-primary focus:outline-none"
            aria-label="Get help"
          >
            Help
          </button>
        </header>

        <section className="flex flex-1 flex-col pt-6">
          <div className="mb-9 flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-primary shadow-lg shadow-blue-200">
              <span className="text-3xl font-bold text-white">A</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight">AssurePay</h1>
            <p className="mt-2 text-sm text-text-muted">
              Start protecting payments with escrow.
            </p>
          </div>

          <h2 className="mb-5 text-2xl font-bold">
            Create your account
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col flex-1">
            <div className="mb-5 grid grid-cols-2 rounded-2xl bg-surface-muted p-1">
              <button
                type="button"
                onClick={() => setRegisterMethod("phone")}
                className={`h-11 rounded-xl text-sm font-bold ${
                  registerMethod === "phone"
                    ? "bg-white text-brand-primary shadow-sm"
                    : "text-text-muted"
                }`}
              >
                Phone
              </button>

              <button
                type="button"
                onClick={() => setRegisterMethod("email")}
                className={`h-11 rounded-xl text-sm font-bold ${
                  registerMethod === "email"
                    ? "bg-white text-brand-primary shadow-sm"
                    : "text-text-muted"
                }`}
              >
                Email
              </button>
            </div>

            {registerMethod === "phone" ? (
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="mb-2 block text-sm font-medium text-text-muted"
                >
                  Phone number
                </label>

                <div className="flex h-16 items-center rounded-2xl bg-surface-soft px-4 ring-1 ring-border-soft focus-within:ring-2 focus-within:ring-brand-primary">
                  <span className="mr-3 border-r border-border-muted pr-3 text-base font-semibold">
                    +234
                  </span>

                  <input
                    id="phoneNumber"
                    type="tel"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    placeholder="Enter phone number"
                    className="w-full bg-transparent text-base font-medium text-text-main outline-none placeholder:text-text-soft"
                  />
                </div>
              </div>
            ) : (
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-text-muted"
                >
                  Email address
                </label>

                <div className="flex h-16 items-center rounded-2xl bg-surface-soft px-4 ring-1 ring-border-soft focus-within:ring-2 focus-within:ring-brand-primary">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter email address"
                    className="w-full bg-transparent text-base font-medium text-text-main outline-none placeholder:text-text-soft"
                  />
                </div>
              </div>
            )}

            <label className="mt-5 flex items-start gap-3 text-sm leading-5 text-text-muted">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(event) => setAcceptedTerms(event.target.checked)}
                className="mt-1 h-4 w-4 accent-brand-primary"
              />

              <span>
                I agree to AssurePay&apos;s Terms and Privacy Policy.
              </span>
            </label>

            <div className="mt-auto pt-8 pb-2">
              <button
                type="submit"
                disabled={!canSubmit}
                className="h-16 w-full rounded-full bg-linear-to-r from-brand-primary to-brand-deep text-base font-bold text-white shadow-lg shadow-blue-200 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Continue to verification
              </button>

              <p className="mt-6 text-center text-sm text-text-muted">
                Already have an AssurePay account?
              </p>

              <Link
                to="/login"
                className="mt-1 block text-center text-sm font-bold text-brand-primary"
              >
                Log in
              </Link>
            </div>
          </form>
        </section>
      </div>
    </main>
  )
}

export default Register