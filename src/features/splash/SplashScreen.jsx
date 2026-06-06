import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const SplashScreen = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login")
    }, 3000) // Navigate after 3 seconds

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="min-h-screen bg-app-bg flex items-center justify-center px-6">
      <div className="w-full max-w-sm flex flex-col items-center">
        <h1 className="text-2xl font-bold text-text-main">AssurePay</h1>
        <p className="mt-3 text-sm leading-2 text-text-muted">
          Wallet and escrow payments for trusted deals.
        </p>
      </div>
    </div>
  )
}

export default SplashScreen