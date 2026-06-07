import { BrowserRouter, Routes, Route } from "react-router-dom"
import SplashScreen from "../features/splash/SplashScreen"
import Login from "../features/auth/Login"
import Register from "../features/auth/Register"
import VerifyOtp from "../features/auth/VerifyOtp"
import ForgotPassword from "../features/auth/ForgotPassword"
import Home from "../features/home/Home"
import AddMoney from "../features/wallet/AddMoney"
import Withdraw from "../features/wallet/Withdraw"
import TransferToBank from "../features/wallet/TransferToBank"
import TransferToAssurePay from "../features/wallet/TransferToAssurePay"
import ReceiveMoney from "../features/wallet/ReceiveMoney"
import TransactionHistory from "../features/wallet/TransactionHistory"
import ProtectedPayments from "../features/protected-payments/ProtectedPayments"
import CreateProtectedPayment from "../features/protected-payments/CreateProtectedPayment"
import ProtectedPaymentDetails from "../features/protected-payments/ProtectedPaymentDetails"
import DeliveryConfirmation from "../features/protected-payments/DeliveryConfirmation"
import DisputeDetails from "../features/protected-payments/DisputeDetails"
import Airtime from "../features/services/Airtime"
import Data from "../features/services/Data"
import Electricity from "../features/services/Electricity"
import CableTv from "../features/services/CableTv"
import InviteEarn from "../features/services/InviteEarn"
import Loan from "../features/services/Loan"
import SaveBox from "../features/services/SaveBox"
import Betting from "../features/services/Betting"
import MoreServices from "../features/services/MoreServices"
import InviteFriends from "../features/promotions/InviteFriends"
import CashbackPromo from "../features/promotions/CashbackPromo"
import ProtectedTradePromo from "../features/promotions/ProtectedTradePromo"
import Activity from "../features/activity/Activity"
import Rewards from "../features/rewards/Rewards"
import Profile from "../features/profile/Profile"
import KycStatus from "../features/profile/KycStatus"
import SecuritySettings from "../features/profile/SecuritySettings"
import BankAccounts from "../features/profile/BankAccounts"

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SplashScreen />} />
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
				<Route path="verify-otp" element={<VerifyOtp />} />
				<Route path="forgot-password" element={<ForgotPassword />} />
				<Route path="home" element={<Home />} />
				<Route path="add-money" element={<AddMoney />} />
				<Route path="withdraw" element={<Withdraw />} />
				<Route path="transfer-bank" element={<TransferToBank />} />
				<Route path="transfer-assurepay" element={<TransferToAssurePay />} />
				<Route path="receive-money" element={<ReceiveMoney />} />
				<Route path="transaction-history" element={<TransactionHistory />} />
				<Route path="protected" element={<ProtectedPayments />} />
				<Route path="protected/create" element={<CreateProtectedPayment />} />
				<Route path="protected/:id" element={<ProtectedPaymentDetails />} />
				<Route path="protected/:id/delivery" element={<DeliveryConfirmation />} />
				<Route path="protected/:id/dispute" element={<DisputeDetails />} />
				<Route path="services/airtime" element={<Airtime />} />
				<Route path="services/data" element={<Data />} />
				<Route path="services/electricity" element={<Electricity />} />
				<Route path="services/cable-tv" element={<CableTv />} />
				<Route path="services/invite-earn" element={<InviteEarn />} />
				<Route path="services/loan" element={<Loan />} />
				<Route path="services/savebox" element={<SaveBox />} />
				<Route path="services/betting" element={<Betting />} />
				<Route path="services/more" element={<MoreServices />} />
				<Route path="promotions/invite-friends" element={<InviteFriends />} />
				<Route path="promotions/cashback" element={<CashbackPromo />} />
				<Route path="promotions/protected-trade" element={<ProtectedTradePromo />} />
				<Route path="activity" element={<Activity />} />
				<Route path="rewards" element={<Rewards />} />
				<Route path="profile" element={<Profile />} />
				<Route path="profile/kyc" element={<KycStatus />} />
				<Route path="profile/security" element={<SecuritySettings />} />
				<Route path="profile/bank-accounts" element={<BankAccounts />} />
			</Routes>
		</BrowserRouter>
	)
}

export default AppRouter
