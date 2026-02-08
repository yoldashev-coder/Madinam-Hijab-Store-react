import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const navigate = useNavigate();

	const formatPhoneNumber = (value) => {
		let number = value.replace(/\D/g, "");

		let formatted = "";
		if (number.length > 0) {
			formatted = "(" + number.substring(0, 3);
		}
		if (number.length > 3) {
			formatted += ") " + number.substring(3, 5);
		}
		if (number.length > 5) {
			formatted += "-" + number.substring(5, 8);
		}
		if (number.length > 8) {
			formatted += "-" + number.substring(8, 10);
		}
		if (number.length > 10) {
			formatted += "-" + number.substring(10, 12);
		}

		setPhone(formatted);
	};

	const onlyNumbers = (e) => {
		if ([8, 9, 13, 27, 46].includes(e.keyCode) || (e.keyCode >= 35 && e.keyCode <= 39) || (e.ctrlKey && [65, 67, 86, 88].includes(e.keyCode))) {
			return true;
		}

		if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
			e.preventDefault();
			return false;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log({
			phone,
			password,
		});
	};

	return (
		<div className="h-screen flex flex-col md:flex-row bg-white">
			<div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 md:p-0">
				<div className="w-full max-w-[350px]">
					<div className="flex justify-center my-8 md:my-12">
						<img className="cursor-pointer" onClick={() => navigate("/")} src="/images/Logo.svg" alt="" />
					</div>

					<h2 className="text-2xl font-bold mb-6 md:mb-8">Kirish</h2>

					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label className="block text-sm text-gray-700 mb-2">Telefon raqam</label>

							<input
								type="tel"
								value={phone}
								onChange={(e) => formatPhoneNumber(e.target.value)}
								onKeyDown={onlyNumbers}
								className="w-full h-[40px] px-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
								placeholder="(998) 00-000-00-00"
								maxLength="19"
								autoComplete="tel"
							/>
						</div>

						<div className="mb-1">
							<label className="block text-sm text-gray-700 mb-2">Parol</label>

							<div className="relative">
								<input
									type={showPassword ? "text" : "password"}
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className="w-full h-[40px] px-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
									placeholder="Parol"
								/>

								<span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
									{showPassword ? <EyeOff size={18} className="text-gray-400" /> : <Eye size={18} className="text-gray-400" />}
								</span>
							</div>
						</div>

						<div className="text-right mb-6">
							<a href="#" className="text-[#2D9CDB] text-[13px] hover:underline">
								Parolni unutdingizmi?
							</a>
						</div>

						<button type="submit" className="w-full h-[40px] bg-[#A67551] text-white rounded-lg font-medium" onClick={() => navigate("/")}>
							Kirish
						</button>
					</form>

					<div className="flex items-center my-5">
						<div className="flex-grow h-[1px] bg-gray-200"></div>
						<span className="px-4 text-gray-500 text-sm">Yoki</span>
						<div className="flex-grow h-[1px] bg-gray-200"></div>
					</div>

					<div id="telegram-login-button" className="w-full flex justify-center"></div>

					<div className="mt-[30px] md:mt-[50px] text-center">
						<span className="text-gray-600 text-sm">Akkountingiz yo'qmi?</span>

						<span onClick={() => navigate("/register")} className="text-[#2D9CDB] ml-1 text-sm hover:underline cursor-pointer">
							Ro'yxatdan o'tish
						</span>
					</div>
				</div>
			</div>

			<div className="hidden md:block md:w-1/2 h-[300px] md:h-full">
				<img src="./images/2.png" alt="Hijab Model" className="w-full h-full object-cover" />
			</div>
		</div>
	);
}
