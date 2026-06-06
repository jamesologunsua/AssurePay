/* import { IoIosNotificationsOutline } from "react-icons/io";
import { CiBank } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { RxDownload } from "react-icons/rx";
 */
import { useEffect, useState } from "react"
import { CiBank } from "react-icons/ci"
import {
  FiArrowRight,
  FiBell,
  FiDownload,
  FiGift,
  FiGrid,
  FiPercent,
  FiSettings,
  FiShield,
  FiSmartphone,
  FiTv,
  FiUpload,
  FiUserPlus,
  FiWifi,
  FiZap,
} from "react-icons/fi"

export const Home = () => {
  const [promotionIndex, setPromotionIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setPromotionIndex((currentIndex) => {
        if (currentIndex === 2) return 0
        return currentIndex + 1
      })
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <main className="min-h-screen bg-app-bg pb-24 text-text-main">
      <div className="mx-auto w-full max-w-sm px-4 pt-4">
        <header className="mb-4 flex items-start justify-between">
          <div className="">
            <p className="text-[10px] font-medium text-text-muted">
              Good morning
            </p>
            <h1 className="text-[12px] font-medium">John</h1>
          </div>

          <button
            type="button"
            className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-white text-base font-bold text-text-main shadow-sm ring-1 ring-border-soft"
            aria-label="View notifications"
          >
            <FiBell />
            <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-status-danger text-[10px] font-bold text-white">
              3
            </span>
          </button>
        </header>

        {/* Wallet Tab */}
        <section className="rounded-2xl bg-linear-to-br from-brand-primary to-brand-deep p-4 text-white shadow-xl shadow-blue-200">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-medium text-white/80">
              Wallet Balance
            </p>

            <button
              type="button"
              className="text-[10px] font-bold text-white/90"
              aria-label="Toggle wallet balance visibility"
            >
              Show
            </button>
          </div>

          <h2 className="mt-1 text-xl font-bold tracking-tight">
            &#8358;172,500.00
          </h2>

          {/* <p className="mt-2 text-xs text-white/75">
            Available for transfers and withdrawals
          </p> */}

          <div className="mt-5 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="h-8 rounded-xl bg-white text-xs font-bold text-brand-primary"
            >
              + Add Money
            </button>

            <button
              type="button"
              className="h-8 rounded-xl bg-white/15 text-xs font-bold text-white ring-1 ring-white/15"
            >
              Withdraw
            </button>
          </div>
        </section>

        <section className="mt-4 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-border-soft">
          <div className="grid grid-cols-4 gap-4">
            <button
              type="button"
              className="flex flex-col items-center gap-2 rounded-xl py-2 text-center"
            >
              <span className="flex h-9 w-12 items-center justify-center rounded-xl bg-surface-muted text-xl font-bold text-brand-primary">
                <CiBank />
              </span>
              <span className="text-[10px] font-medium leading-2.5">
                Transfer to Bank
              </span>
            </button>

            <button
              type="button"
              className="flex flex-col items-center gap-2 rounded-xl py-2 text-center"
            >
              <span className="flex h-9 w-12 items-center justify-center rounded-xl bg-surface-muted text-xl font-bold text-brand-primary">
                <FiArrowRight />
              </span>
              <span className="text-[10px] font-medium leading-2.5">
                Transfer to AssurePay
              </span>
            </button>

            <button
              type="button"
              className="flex flex-col items-center gap-2 rounded-xl py-2 text-center"
            >
              <span className="flex h-9 w-12 items-center justify-center rounded-xl bg-surface-muted text-xl font-bold text-brand-primary">
                <FiUpload />
              </span>
              <span className="text-[10px] font-medium leading-2.5">
                Withdraw
              </span>
            </button>

            <button
              type="button"
              className="flex flex-col items-center gap-2 rounded-xl py-2 text-center"
            >
              <span className="flex h-9 w-12 items-center justify-center rounded-xl bg-surface-muted text-xl font-bold text-brand-primary">
                <FiDownload />
              </span>
              <span className="text-[10px] font-medium leading-2.5">
                Receive Money
              </span>
            </button>
          </div>
        </section>
        
        {/* Escrow Payment Tab */}
        <section className="mt-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-border-soft">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xs font-bold">Protected Payments</h2>
            <button type="button" className="text-[10px] font-bold text-brand-primary">
              View All
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl bg-surface-soft p-3">
              <p className="text-xs text-text-muted">Active</p>
              <p className="text-lg font-bold">7</p>
            </div>

            <div className="rounded-xl bg-surface-soft p-3">
              <p className="text-xs text-text-muted">In Progress</p>
              <p className="text-lg font-bold text-status-success">3</p>
            </div>

            <div className="rounded-xl bg-surface-soft p-3">
              <p className="text-xs text-text-muted">Disputed</p>
              <p className="text-lg font-bold text-status-danger">1</p>
            </div>
          </div>

          <button className="mt-3 h-8 w-full rounded bg-surface-muted text-xs font-medium text-brand-primary">
            + Create Protected Payment
          </button>
        </section>

        <section className="mt-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-border-soft">
          <div className="grid grid-cols-4 gap-2">
            <button type="button" className="rounded-xl py-2 text-center text-[10px] font-medium ring-1 ring-border-soft">
              <span className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-base text-blue-600">
                <FiSmartphone />
              </span>
              Airtime
            </button>

            <button type="button" className="rounded-xl py-2 text-center text-[10px] font-medium ring-1 ring-border-soft">
              <span className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-xl bg-green-50 text-base text-green-600">
                <FiWifi />
              </span>
              Data
            </button>

            <button type="button" className="rounded-xl py-2 text-center text-[10px] font-medium ring-1 ring-border-soft">
              <span className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-xl bg-amber-50 text-base text-amber-500">
                <FiZap />
              </span>
              Electricity
            </button>

            <button type="button" className="rounded-xl py-2 text-center text-[10px] font-medium ring-1 ring-border-soft">
              <span className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-xl bg-purple-50 text-base text-purple-600">
                <FiTv />
              </span>
              Cable TV
            </button>

            <button type="button" className="rounded-xl py-2 text-center text-[10px] font-medium ring-1 ring-border-soft">
              <span className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-xl bg-orange-50 text-base text-orange-600">
                <FiUserPlus />
              </span>
              Invite & Earn
            </button>

            <button type="button" className="rounded-xl py-2 text-center text-[10px] font-medium ring-1 ring-border-soft">
              <span className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-xl bg-pink-50 text-base text-pink-600">
                <FiPercent />
              </span>
              Cashback
            </button>

            <button type="button" className="rounded-xl py-2 text-center text-[10px] font-medium ring-1 ring-border-soft">
              <span className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-base text-blue-600">
                <FiSettings />
              </span>
              Settings
            </button>

            <button type="button" className="rounded-xl py-2 text-center text-[10px] font-medium ring-1 ring-border-soft">
              <span className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-xl bg-gray-100 text-base text-gray-600">
                <FiGrid />
              </span>
              More
            </button>
          </div>
        </section>
        
        {/* Promotions Tab */}
        <section className="mt-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-border-soft">
          {promotionIndex === 0 && (
            <div className="promotion-slide rounded-xl bg-brand-primary p-3 text-white">
              <p className="text-xs font-bold">Invite Friends</p>
              <p className="mt-1 text-[10px] leading-4 text-white/80">
                Earn rewards when friends join AssurePay.
              </p>
            </div>
          )}

          {promotionIndex === 1 && (
            <div className="promotion-slide rounded-xl bg-status-success p-3 text-white">
              <p className="text-xs font-bold">Cashback on Payments</p>
              <p className="mt-1 text-[10px] leading-4 text-white/80">
                Get rewards on selected wallet transactions.
              </p>
            </div>
          )}

          {promotionIndex === 2 && (
            <div className="promotion-slide rounded-xl bg-blue-600 p-3 text-white">
              <p className="text-xs font-bold">Trade with Protection</p>
              <p className="mt-1 text-[10px] leading-4 text-white/80">
                Hold funds safely until delivery is confirmed.
              </p>
            </div>
          )}

          <div className="mt-2 flex justify-center gap-1.5">
            <span className={`h-1.5 w-1.5 rounded-full ${promotionIndex === 0 ? "bg-brand-primary" : "bg-border-muted"}`} />
            <span className={`h-1.5 w-1.5 rounded-full ${promotionIndex === 1 ? "bg-brand-primary" : "bg-border-muted"}`} />
            <span className={`h-1.5 w-1.5 rounded-full ${promotionIndex === 2 ? "bg-brand-primary" : "bg-border-muted"}`} />
          </div>
        </section>

        {/* Recent Activity */}
        <section className="mt-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-border-soft">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-xs font-bold">Recent Activity</h2>
            <button type="button" className="text-[10px] font-bold text-brand-primary">
              View All
            </button>
          </div>

          <button type="button" className="flex w-full items-center gap-3 border-b border-border-soft py-2 text-left">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <FiDownload />
            </span>

            <span className="flex-1">
              <span className="block text-[11px] font-bold">Transfer to Bank</span>
              <span className="block text-[10px] text-text-muted">Access Bank **** 5678</span>
            </span>

            <span className="text-right">
              <span className="block text-[11px] font-bold">- &#8358;15,000</span>
              <span className="block text-[10px] text-text-muted">Today</span>
            </span>
          </button>

          <button type="button" className="flex w-full items-center gap-3 border-b border-border-soft py-2 text-left">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-brand-primary">
              <FiShield />
            </span>

            <span className="flex-1">
              <span className="block text-[11px] font-bold">Protected Payment Created</span>
              <span className="block text-[10px] text-text-muted">To: Michael Ade</span>
            </span>

            <span className="text-right">
              <span className="block text-[11px] font-bold">- &#8358;25,000</span>
              <span className="block text-[10px] text-text-muted">Today</span>
            </span>
          </button>

          <button type="button" className="flex w-full items-center gap-3 py-2 text-left">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <FiDownload />
            </span>

            <span className="flex-1">
              <span className="block text-[11px] font-bold">Money Received</span>
              <span className="block text-[10px] text-text-muted">From: Sarah Johnson</span>
            </span>

            <span className="text-right">
              <span className="block text-[11px] font-bold text-status-success">+ &#8358;10,000</span>
              <span className="block text-[10px] text-text-muted">Yesterday</span>
            </span>
          </button>
        </section>
      </div>
      
      {/* Bottom Navigation Buttons */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 px-5 pb-4 pt-3 shadow-[0_-8px_30px_rgba(6,11,63,0.08)]">
        <div className="mx-auto grid max-w-sm grid-cols-4">
          <button
            type="button"
            className="text-xs font-semibold text-brand-primary"
          >
            Home
          </button>

          <button
            type="button"
            className="text-xs font-semibold text-text-muted"
          >
            Protected
          </button>

          <button
            type="button"
            className="text-xs font-semibold text-text-muted"
          >
            Activity
          </button>

          <button
            type="button"
            className="text-xs font-semibold text-text-muted"
          >
            Profile
          </button>
        </div>
      </nav>
    </main>
  )
}

export default Home