import { CgProfile } from "react-icons/cg"
import { LuGift, LuHistory, LuShieldPlus } from "react-icons/lu"
import { RiHome5Line } from "react-icons/ri"

const FooterNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 pt-3 pb-2 shadow-[0_-8px_30px_rgba(6,11,63,0.08)]">
      <div className="mx-auto grid max-w-sm grid-cols-5">
        <button type="button" className="flex flex-col items-center gap-1 text-[10px] font-semibold text-brand-primary">
          <span className="text-[22px]">
            <RiHome5Line />
          </span>
          Home
        </button>

        <button type="button" className="flex flex-col items-center gap-1 text-[10px] font-semibold text-text-muted">
          <span className="text-[22px]">
            <LuShieldPlus />
          </span>
          Protected
        </button>

        <button type="button" className="flex flex-col items-center gap-1 text-[10px] font-semibold text-text-muted">
          <span className="text-[22px]">
            <LuHistory />
          </span>
          Activity
        </button>

        <button type="button" className="flex flex-col items-center gap-1 text-[10px] font-semibold text-text-muted">
          <span className="text-[22px]">
            <LuGift />
          </span>
          Reward
        </button>

        <button type="button" className="flex flex-col items-center gap-1 text-[10px] font-semibold text-text-muted">
          <span className="text-[22px]">
            <CgProfile />
          </span>
          Profile
        </button>
      </div>
    </nav>
  )
}

export default FooterNav