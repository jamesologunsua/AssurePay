/* import { IoIosNotificationsOutline } from "react-icons/io";
import { CiBank } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { RxDownload } from "react-icons/rx";
 */
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  FiBell,
  FiDownload,
  FiGrid,
  FiShield,
  FiSmartphone,
  FiUserPlus,
  FiWifi,
  FiZap,
  FiGift,
} from "react-icons/fi"
import { IoEyeOffOutline, IoEyeOutline, IoFootballOutline } from "react-icons/io5"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { FaPiggyBank, FaUserCircle  } from "react-icons/fa"
import { HiOutlineShieldCheck } from "react-icons/hi"
import { PiHandCoins } from "react-icons/pi"
import { RiBankLine } from "react-icons/ri"
import { FaPlus } from "react-icons/fa6"
import { LuShieldCheck } from "react-icons/lu";
import FooterNav from "../../components/layouts/FooterNav"


export const Home = () => {
  const [promotionIndex, setPromotionIndex] = useState(0)
  const [showBalance, setShowBalance] = useState(false)

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
    <main className="min-h-screen overflow-x-hidden bg-app-bg pb-24 text-text-main">
      <div className="mx-auto w-full max-w-sm px-4 pt-4">
        <header className="mb-3 flex items-start justify-between">
          <div className="flex items-center gap-2">
            <p className="text-[10px] font-bold text-text-muted">
              Hi, <span>James</span>
            </p>
          </div>

          <button
            type="button"
            className="relative flex h-3 w-3 items-center justify-center rounded-xl  font-bold text-text-main t"
            aria-label="View notifications"
          >
            <FiBell />
            <span className="absolute -right-1 -top-0.5 flex h-1 w-1 items-center justify-center rounded-full bg-status-danger text-[10px] font-bold text-white"></span>
          </button>
        </header>

        {/* Wallet Tab */}
        <section className="flex justify-between rounded-xl bg-linear-to-br from-brand-primary to-brand-deep p-4 text-white shadow-xl shadow-blue-200">
          <div className="flex flex-col">
            <div className="flex gap-1">
              <p className=" flex items-center text-[10px] gap-0.5 font-medium text-white/80">
                <span><LuShieldCheck className="font-extrabold" /></span>
                Wallet Balance
              </p>

              <button
                type="button"
                onClick={() => setShowBalance((visible) => !visible)}
                className="text-[12px] font-bold text-white/80 focus:outline-none"
                aria-label="Toggle wallet balance visibility"
              >
                {showBalance ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </button>
            </div>

            <h2 className="mt-1 text-xl font-bold tracking-tight">
              &#8358;0.00
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              to="/transaction-history"
              className="text-[10px] flex items-center"
            >
              Transaction History
              <span><MdOutlineKeyboardArrowRight /></span>
            </Link>
            <Link
              to="/add-money"
              className="flex items-center justify-center gap-1 h-5 rounded-xl bg-white text-[10px] font-bold text-brand-primary"
            >
              <span className="text-[8px]"><FaPlus /></span> Add Money
            </Link>
          </div>
        </section>

        {/* Quick Action Tab */}
        <section className="mt-4 rounded-xl bg-white py-2 px-3 shadow-sm ring-1 ring-border-soft">
          <div className="flex justify-between">
            <Link
              to="/transfer-bank"
              className="flex flex-col items-center gap-2 rounded-xl py-2 text-center"
            >
              <span className="flex h-9 w-12 items-center justify-center rounded-xl bg-surface-muted text-xl font-extrabold text-brand-primary">
                <RiBankLine />
              </span>
              <span className="text-[10px] font-medium leading-2.5">
                To Bank
              </span>
            </Link>

            <Link
              to="/transfer-assurepay"
              className="flex flex-col items-center gap-2 py-2 text-center"
            >
              <span className="flex h-9 w-12 items-center justify-center rounded-xl bg-surface-muted text-xl font-bold text-brand-primary">
                <FaUserCircle />
              </span>
              <span className="text-[10px] font-medium leading-2.5">
                To AssurePay
              </span>
            </Link>

            <Link
              to="/protected/create"
              className="flex flex-col items-center gap-2 rounded-xl py-2 text-center"
            >
              <span className="flex h-9 w-12 items-center justify-center rounded-xl bg-surface-muted text-xl font-bold text-brand-primary">
                <HiOutlineShieldCheck />
              </span>
              <span className="text-[10px] font-medium leading-2.5">
                Escrow
              </span>
            </Link>

            <Link
              to="/services/savebox"
              className="flex flex-col items-center gap-2 rounded-xl py-2 text-center"
            >
              <span className="flex h-9 w-12 items-center justify-center rounded-xl bg-surface-muted text-xl font-bold text-brand-primary">
                <FaPiggyBank />
              </span>
              <span className="text-[10px] font-medium leading-2.5">
                Savings
              </span>
            </Link>
          </div>
        </section>
        
        {/* Escrow Payment Tab */}
        <section className="mt-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-border-soft">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-[10px] font-semibold">Protected Payments</h2>
            <Link to="/protected" className="text-[9.5px] font-semibold text-brand-primary">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl bg-surface-soft p-3">
              <p className="text-[10px] text-text-muted">Active</p>
              <p className="text-sm font-bold">7</p>
            </div>

            <div className="rounded-xl bg-surface-soft p-3">
              <p className="text-[10px] text-text-muted">In Progress</p>
              <p className="text-sm font-bold text-status-success">3</p>
            </div>

            <div className="rounded-xl bg-surface-soft p-3">
              <p className="text-[10px] text-text-muted">Disputed</p>
              <p className="text-sm font-bold text-status-danger">1</p>
            </div>
          </div>

          <Link to="/protected/create" className="mt-3 flex h-8 w-full items-center justify-center rounded bg-surface-muted text-[11px] font-medium text-brand-primary">
            + Create Protected Payment
          </Link>
        </section>

        <section className="mt-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-border-soft">
          <div className="grid grid-cols-4 gap-2">
            <Link to="/services/airtime" className="rounded-xl py-2 text-center text-[10px] font-medium ring-1 ring-border-soft">
              <span className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-base text-blue-600">
                <FiSmartphone />
              </span>
              Airtime
            </Link>

            <Link to="/services/data" className="rounded-xl py-2 text-center text-[10px] font-medium ring-1 ring-border-soft">
              <span className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-xl bg-green-50 text-base text-green-600">
                <FiWifi />
              </span>
              Data
            </Link>

            <Link to="/services/electricity" className="rounded-xl py-2 text-center text-[10px] font-medium ring-1 ring-border-soft">
              <span className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-xl bg-amber-50 text-base text-amber-500">
                <FiZap />
              </span>
              Electricity
            </Link>

            <Link to="/services/savebox" className="rounded-xl py-2 text-center text-[10px] font-medium ring-1 ring-border-soft">
              <span className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-xl bg-purple-50 text-base text-purple-600">
                <FaPiggyBank />
              </span>
              SaveBox
            </Link>

            <Link to="/services/invite-earn" className="rounded-xl py-2 text-center text-[10px] font-medium ring-1 ring-border-soft">
              <span className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-xl bg-orange-50 text-base text-orange-600">
                <FiUserPlus />
              </span>
              Invite & Earn
            </Link>

            <Link to="/services/loan" className="rounded-xl py-2 text-center text-[10px] font-medium ring-1 ring-border-soft">
              <span className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-xl bg-pink-50 text-base text-pink-600">
                <PiHandCoins />
              </span>
              Loan
            </Link>

            <Link to="/services/betting" className="rounded-xl py-2 text-center text-[10px] font-medium ring-1 ring-border-soft">
              <span className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-base text-blue-600">
                <IoFootballOutline />
              </span>
              Betting
            </Link>

            <Link to="/services/more" className="rounded-xl py-2 text-center text-[10px] font-medium ring-1 ring-border-soft">
              <span className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-xl bg-gray-100 text-base text-gray-600">
                <FiGrid />
              </span>
              More
            </Link>
          </div>
        </section>
        
        {/* Promotions Tab */}
        <div className="mt-3 h-[86px] overflow-hidden">
          {promotionIndex === 0 && (
            <Link to="/promotions/invite-friends" className="promotion-slide relative block h-[86px] overflow-hidden rounded-xl bg-linear-to-r from-brand-primary to-brand-deep p-3 pb-5 text-white">
              <div className="relative z-10 max-w-[62%]">
                <p className="text-xs font-bold">Invite Friends</p>
                <p className="mt-1 text-[10px] leading-4 text-white/80">
                  Earn rewards when friends join AssurePay.
                </p>
              </div>

              <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-2xl text-white">
                <FiGift />
              </div>

              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
              </div>
            </Link>
          )}

          {promotionIndex === 1 && (
            <Link to="/promotions/cashback" className="promotion-slide relative block h-[86px] overflow-hidden rounded-xl bg-linear-to-r from-status-success to-green-700 p-3 pb-5 text-white">
              <div className="relative z-10 max-w-[62%]">
                <p className="text-xs font-bold">Cashback on Bills</p>
                <p className="mt-1 text-[10px] leading-4 text-white/80">
                  Get rewards on selected bill payments.
                </p>
              </div>

              <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-2xl text-white">
                <PiHandCoins />
              </div>

              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
              </div>
            </Link>
          )}

          {promotionIndex === 2 && (
            <Link to="/promotions/protected-trade" className="promotion-slide relative block h-[86px] overflow-hidden rounded-xl bg-linear-to-r from-blue-600 to-brand-primary p-3 pb-5 text-white">
              <div className="relative z-10 max-w-[62%]">
                <p className="text-xs font-bold">Trade with Protection</p>
                <p className="mt-1 text-[10px] leading-4 text-white/80">
                  Hold funds safely until delivery is confirmed.
                </p>
              </div>

              <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-2xl text-white">
                <FiShield />
              </div>

              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>
            </Link>
          )}


        </div>

        {/* Recent Activity */}
        <section className="mt-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-border-soft">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-xs font-bold">Recent Activity</h2>
            <Link to="/activity" className="text-[10px] font-bold text-brand-primary">
              View All
            </Link>
          </div>

          <Link to="/transaction-history" className="flex w-full items-center gap-3 border-b border-border-soft py-2 text-left">
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
          </Link>

          <Link to="/protected/1" className="flex w-full items-center gap-3 border-b border-border-soft py-2 text-left">
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
          </Link>

          <Link to="/transaction-history" className="flex w-full items-center gap-3 py-2 text-left">
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
          </Link>
        </section>
      </div>

      <FooterNav />
    </main>
  )
}

export default Home
