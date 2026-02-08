import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Instagram, Facebook, Twitter, X, Minus, Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Product Data - barcha mahsulotlar bir joyda
const productsData = [
	{
		id: 1,
		image: "./images/5.png",
		color: "./images/colors.svg",
		text: "Qora futbolka 100% paxta",
		price: "1 250 000",
		oldPrice: null,
		description: "Yuqori sifatli 100% paxta materialdan tayyorlangan qora futbolka. Kundalik kiyish uchun ideal tanlov.",
		stock: 45,
		sizes: [
			{ id: 1, name: "S" },
			{ id: 2, name: "M" },
			{ id: 3, name: "L" },
		],
		colors: [{ id: 1, name: "Qora", hex: "#000000" }],
		images: ["./images/5.png", "./images/6.png", "./images/7.png"],
	},
	{
		id: 2,
		image: "./images/6.png",
		color: "./images/colors.svg",
		text: "Qora futbolka 100% paxta",
		price: "1 250 000",
		oldPrice: null,
		description: "Zamonaviy dizayndagi qora futbolka. Har qanday kiyim bilan mos keladi.",
		stock: 32,
		sizes: [
			{ id: 1, name: "S" },
			{ id: 2, name: "M" },
			{ id: 3, name: "L" },
		],
		colors: [{ id: 1, name: "Qora", hex: "#000000" }],
		images: ["./images/6.png", "./images/5.png", "./images/8.png"],
	},
	{
		id: 3,
		image: "./images/7.png",
		color: "./images/colors.svg",
		text: "Qora futbolka 100% paxta",
		price: "1 250 000",
		oldPrice: null,
		description: "Yumshoq va qulay futbolka. Yozgi mavsumga ajoyib tanlov.",
		stock: 28,
		sizes: [
			{ id: 1, name: "S" },
			{ id: 2, name: "M" },
			{ id: 3, name: "L" },
		],
		colors: [{ id: 1, name: "Qora", hex: "#000000" }],
		images: ["./images/7.png", "./images/5.png", "./images/6.png"],
	},
	{
		id: 4,
		image: "./images/8.png",
		color: "./images/colors.svg",
		text: "Qora futbolka 100% paxta",
		price: "1 250 000",
		oldPrice: null,
		description: "Klassik uslubdagi qora futbolka. Premium sifat kafolati.",
		stock: 50,
		sizes: [
			{ id: 1, name: "S" },
			{ id: 2, name: "M" },
			{ id: 3, name: "L" },
		],
		colors: [{ id: 1, name: "Qora", hex: "#000000" }],
		images: ["./images/8.png", "./images/6.png", "./images/7.png"],
	},
	{
		id: 9,
		image: "./images/9.png",
		color: "./images/colors.svg",
		text: "Qora futbolka 100% paxta",
		price: "1 250 000",
		oldPrice: "1 400 000",
		description: "Aksiya! Premium sifatli qora futbolka. Cheklangan miqdorda.",
		stock: 15,
		sizes: [
			{ id: 1, name: "S" },
			{ id: 2, name: "M" },
			{ id: 3, name: "L" },
		],
		colors: [{ id: 1, name: "Qora", hex: "#000000" }],
		images: ["./images/9.png", "./images/10.png", "./images/11.png"],
	},
	{
		id: 10,
		image: "./images/10.png",
		color: "./images/colors.svg",
		text: "Qora futbolka 100% paxta",
		price: "1 250 000",
		oldPrice: "1 350 000",
		description: "Yangi to'plamdan zamonaviy dizaynli futbolka. Chegirmada!",
		stock: 20,
		sizes: [
			{ id: 1, name: "S" },
			{ id: 2, name: "M" },
			{ id: 3, name: "L" },
		],
		colors: [{ id: 1, name: "Qora", hex: "#000000" }],
		images: ["./images/10.png", "./images/9.png", "./images/12.png"],
	},
	{
		id: 11,
		image: "./images/11.png",
		color: "./images/colors.svg",
		text: "Qora futbolka 100% paxta",
		price: "1 250 000",
		oldPrice: null,
		description: "Sportiv uslubdagi qora futbolka. Nafis va qulay.",
		stock: 38,
		sizes: [
			{ id: 1, name: "S" },
			{ id: 2, name: "M" },
			{ id: 3, name: "L" },
		],
		colors: [{ id: 1, name: "Qora", hex: "#000000" }],
		images: ["./images/11.png", "./images/9.png", "./images/10.png"],
	},
	{
		id: 12,
		image: "./images/12.png",
		color: "./images/colors.svg",
		text: "Qora futbolka 100% paxta",
		price: "1 250 000",
		oldPrice: null,
		description: "Keng qolipda qora futbolka. Maksimal qulaylik.",
		stock: 42,
		sizes: [
			{ id: 1, name: "S" },
			{ id: 2, name: "M" },
			{ id: 3, name: "L" },
		],
		colors: [{ id: 1, name: "Qora", hex: "#000000" }],
		images: ["./images/12.png", "./images/10.png", "./images/11.png"],
	},
	{
		id: 13,
		image: "./images/13.png",
		color: "./images/colors.svg",
		text: "Qora futbolka 100% paxta",
		price: "1 250 000",
		oldPrice: null,
		description: "Eng ko'p sotilgan qora futbolka. Mijozlar sevimli modeli.",
		stock: 60,
		sizes: [
			{ id: 1, name: "S" },
			{ id: 2, name: "M" },
			{ id: 3, name: "L" },
		],
		colors: [{ id: 1, name: "Qora", hex: "#000000" }],
		images: ["./images/13.png", "./images/14.png", "./images/15.png"],
	},
	{
		id: 14,
		image: "./images/14.png",
		color: "./images/colors.svg",
		text: "Qora futbolka 100% paxta",
		price: "1 250 000",
		oldPrice: null,
		description: "Klassik va zamonaviy uyg'unlikdagi futbolka.",
		stock: 55,
		sizes: [
			{ id: 1, name: "S" },
			{ id: 2, name: "M" },
			{ id: 3, name: "L" },
		],
		colors: [{ id: 1, name: "Qora", hex: "#000000" }],
		images: ["./images/14.png", "./images/13.png", "./images/16.png"],
	},
	{
		id: 15,
		image: "./images/15.png",
		color: "./images/colors.svg",
		text: "Qora futbolka 100% paxta",
		price: "1 250 000",
		oldPrice: null,
		description: "Premium to'plamdan qora futbolka. Noyob dizayn.",
		stock: 48,
		sizes: [
			{ id: 1, name: "S" },
			{ id: 2, name: "M" },
			{ id: 3, name: "L" },
		],
		colors: [{ id: 1, name: "Qora", hex: "#000000" }],
		images: ["./images/15.png", "./images/13.png", "./images/14.png"],
	},
	{
		id: 16,
		image: "./images/16.png",
		color: "./images/colors.svg",
		text: "Qora futbolka 100% paxta",
		price: "1 250 000",
		oldPrice: null,
		description: "Eng yuqori sifatli qora futbolka. Uzoq muddatli foydalanish.",
		stock: 65,
		sizes: [
			{ id: 1, name: "S" },
			{ id: 2, name: "M" },
			{ id: 3, name: "L" },
		],
		colors: [{ id: 1, name: "Qora", hex: "#000000" }],
		images: ["./images/16.png", "./images/14.png", "./images/15.png"],
	},
];

// Navbar Component
function Navbar({ onFavoriteClick, onCartClick, favoriteCount, cartCount, setCurrentPage }) {
	const navigate = useNavigate();
	return (
		<div className="shadow-sm sticky top-0 bg-white z-50">
			<div className="container mx-auto max-w-7xl">
				<header className="py-4 border-b border-gray-100">
					<div className="container mx-auto flex items-center justify-between px-4">
						<button onClick={() => navigate("/")} className="cursor-pointer">
							<img src="./images/Logo.svg" alt="Madinam Hijab Logo" />
						</button>
						<div className="flex items-center space-x-2 sm:space-x-8">
							<nav className="hidden md:flex items-center space-x-6">
								<button onClick={() => navigate("/catalog")} className="text-gray-800 hover:text-amber-700 transition-colors cursor-pointer">
									Katalog
								</button>
								<a className="text-gray-800 hover:text-amber-700 transition-colors" href="https://t.me/madinam_hijab_store">
									Telegram
								</a>
							</nav>
							<div className="hidden md:flex items-center space-x-5">
								<button onClick={onCartClick} className="text-gray-700 cursor-pointer relative">
									<img src="./images/Shopping.svg" alt="Cart" />
									{cartCount > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{cartCount}</span>}
								</button>
								<button onClick={onFavoriteClick} className="text-gray-700 cursor-pointer relative">
									<img src="./images/Heart.svg" alt="Favorites" />
									{favoriteCount > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{favoriteCount}</span>}
								</button>
								<button onClick={() => navigate("/register")} className="text-gray-700 cursor-pointer">
									<img src="./images/User.svg" alt="User" />
								</button>
							</div>
							<button onClick={() => navigate("/register")} className="px-4 sm:px-6 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition-colors text-sm sm:text-base">
								Kirish
							</button>
						</div>
					</div>
				</header>
			</div>
		</div>
	);
}

// Favorites Sidebar
function FavoritesSidebar({ isOpen, onClose, favorites, onRemove, navigateToProduct }) {
	return (
		<>
			{isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={onClose} />}

			<div className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
				<div className="flex flex-col h-full">
					<div className="flex items-center justify-between p-4 border-b">
						<h2 className="text-xl font-semibold">Sevimlilar</h2>
						<button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
							<X className="w-5 h-5" />
						</button>
					</div>

					<div className="flex-1 overflow-y-auto p-4">
						{favorites.length === 0 ? (
							<div className="text-center py-12">
								<p className="text-gray-500">Sevimlilar ro'yxati bo'sh</p>
							</div>
						) : (
							<div className="space-y-4">
								{favorites.map((product, index) => (
									<div key={product.id} className="flex gap-4 p-3 border rounded-lg hover:shadow-md transition-shadow">
										<img src={product.image} alt={product.text} className="w-20 h-20 object-cover rounded" />
										<div className="flex-1">
											<h3 className="font-medium text-sm mb-1">{product.text}</h3>
											<p className="text-amber-700 font-semibold">{product.price} so'm</p>
										</div>
										<div className="flex flex-col gap-2">
											<button
												onClick={() => {
													navigateToProduct(product.id);
													onClose();
												}}
												className="p-2 text-amber-700 hover:bg-amber-50 rounded"
											>
												Ko'rish
											</button>
											<button onClick={() => onRemove(product.id)} className="p-2 text-red-500 hover:bg-red-50 rounded">
												<Trash2 className="w-4 h-4" />
											</button>
										</div>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

// Cart Sidebar
function CartSidebar({ isOpen, onClose, cartItems, onUpdateQuantity, onRemove }) {
	const total = cartItems.reduce((sum, item) => sum + parseInt(item.price) * item.quantity, 0);

	return (
		<>
			{isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={onClose} />}

			<div className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
				<div className="flex flex-col h-full">
					<div className="flex items-center justify-between p-4 border-b">
						<h2 className="text-xl font-semibold">Savat</h2>
						<button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
							<X className="w-5 h-5" />
						</button>
					</div>

					<div className="flex-1 overflow-y-auto p-4">
						{cartItems.length === 0 ? (
							<div className="text-center py-12">
								<p className="text-gray-500">Savat bo'sh</p>
							</div>
						) : (
							<div className="space-y-4">
								{cartItems.map((item, index) => (
									<div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4 p-3 border rounded-lg">
										<img src={item.image} alt={item.text} className="w-20 h-20 object-cover rounded" />
										<div className="flex-1">
											<h3 className="font-medium text-sm mb-1">{item.text}</h3>
											<p className="text-xs text-gray-500 mb-2">
												O'lchami: {item.selectedSizeName} | Rang: {item.selectedColorName}
											</p>
											<p className="text-amber-700 font-semibold">{item.price} so'm</p>
											<div className="flex items-center gap-2 mt-2">
												<button onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.selectedColor, -1)} className="p-1 border rounded hover:bg-gray-100">
													<Minus className="w-4 h-4" />
												</button>
												<span className="px-3">{item.quantity}</span>
												<button onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.selectedColor, 1)} className="p-1 border rounded hover:bg-gray-100">
													<Plus className="w-4 h-4" />
												</button>
												<button onClick={() => onRemove(item.id, item.selectedSize, item.selectedColor)} className="ml-auto p-1 text-red-500 hover:bg-red-50 rounded">
													<Trash2 className="w-4 h-4" />
												</button>
											</div>
										</div>
									</div>
								))}
							</div>
						)}
					</div>

					{cartItems.length > 0 && (
						<div className="border-t p-4">
							<div className="flex justify-between mb-4">
								<span className="font-semibold">Jami:</span>
								<span className="font-bold text-xl text-amber-700">{total.toLocaleString()} so'm</span>
							</div>
							<button className="w-full bg-amber-700 text-white py-3 rounded-full hover:bg-amber-800 transition-colors">Buyurtma berish</button>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

// Home Page
function Home({ navigateToProduct, favorites, toggleFavorite }) {
	const isFavorite = (productId) => {
		return favorites.some((fav) => fav.id === productId);
	};

	function CategoryCart({ product, index }) {
		const navigate = useNavigate();
		return (
			<div className="flex flex-col">
				<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
				<div className="rounded-2xl overflow-hidden cursor-pointer" onClick={() => navigateToProduct(product.id)}>
					<img className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105" src={product.image} alt={product.text} />
				</div>
				<div className="flex flex-col space-y-2">
					<div className="flex items-center justify-between px-2 py-2">
						<img className="cursor-pointer" src={product.color} alt="" />
						<button
							onClick={(e) => {
								e.stopPropagation();
								toggleFavorite(product);
							}}
							title={isFavorite(product.id) ? "Sevimlilardan o'chirish" : "Sevimlilarga qo'shish"}
							className="bg-white p-1 rounded-full shadow transition-all"
						>
							<span className="material-icons text-lg text-[red] w-4 h-4">{isFavorite(product.id) ? "favorite" : "favorite_border"}</span>
						</button>
					</div>
					<div
						className="text-[rgba(9,_10,_10,_1)] font-medium font-['Inter', sans-serif] transition-all duration-200 text-medium hover:text-primary hover:underline cursor-pointer"
						onClick={() => navigateToProduct(product.id)}
					>
						{product.text}
					</div>
					<div className="text-[rgba(64,_68,_70,_1)] font-normal text-[14px]">{product.price} so'm</div>
					{product.oldPrice && <div className="text-gray-500 line-through text-sm">{product.oldPrice} so'm</div>}
				</div>
			</div>
		);
	}

	return (
		<main className="container mx-auto max-w-7xl">
			<section className="py-6 overflow-hidden">
				<div className="container mx-auto px-2 sm:px-4">
					<div className="grid grid-cols-12 gap-2 sm:hidden">
						<div className="col-span-6 flex flex-col justify-between gap-2 h-auto">
							<div className="relative rounded-2xl overflow-hidden group shadow-sm flex-1 min-h-[80px] max-h-[150px]">
								<img alt="Hijab Fashion" className="w-full h-full object-cover hover:scale-105 duration-400" src="./images/1.png" />
								<div className="absolute inset-0 flex items-start justify-end p-3">
									<a className="bg-white rounded-full p-2 shadow-sm" href="#">
										<img src="./images/Icon.svg" alt="" />
									</a>
								</div>
							</div>
							<div className="relative rounded-2xl overflow-hidden group shadow-sm flex-1 min-h-[80px] max-h-[150px]">
								<img alt="Modest Fashion" className="w-full h-full object-cover hover:scale-105 duration-400" src="./images/2.png" />
								<div className="absolute inset-0 flex items-start justify-end p-3">
									<a className="bg-white rounded-full p-2 shadow-sm" href="#">
										<img src="./images/Icon.svg" alt="" />
									</a>
								</div>
							</div>
						</div>
						<div className="col-span-6 flex flex-col gap-2 h-auto">
							<div className="relative rounded-full overflow-hidden bg-gray-800 h-14 flex items-center justify-between px-3 shadow-sm">
								<h3 className="text-lg font-light font-inter text-white">Katalog</h3>
							</div>
							<div className="rounded-2xl overflow-hidden relative shadow-sm flex-1 min-h-[200px]">
								<img alt="New Collection" className="w-full h-full object-cover hover:scale-105 duration-400" src="./images/3.png" />
							</div>
						</div>
					</div>
					<div className="hidden sm:grid grid-cols-12 gap-4">
						<div className="col-span-3 flex flex-col justify-between gap-4 h-[542px]">
							<div className="relative rounded-2xl overflow-hidden group shadow-sm flex-1 min-h-[100px]">
								<img alt="Hijab Fashion" className="w-full h-full object-cover hover:scale-105 duration-400" src="./images/1.png" />
								<div className="absolute inset-0 flex items-start justify-end p-3">
									<a className="bg-white rounded-full p-2 shadow-sm" href="#">
										<img src="./images/Icon.svg" alt="" />
									</a>
								</div>
							</div>
							<div className="relative rounded-2xl overflow-hidden group shadow-sm flex-1 min-h-[100px]">
								<img alt="Modest Fashion" className="w-full h-full object-cover hover:scale-105 duration-400" src="./images/2.png" />
								<div className="absolute inset-0 flex items-start justify-end p-3">
									<a className="bg-white rounded-full p-2 shadow-sm" href="#">
										<img src="./images/Icon.svg" alt="" />
									</a>
								</div>
							</div>
							<div className="relative rounded-full overflow-hidden bg-gray-700 h-14 flex items-center justify-between px-3 shadow-sm">
								<a className="text-lg font-light text-white" href="#">
									Chegirmalar
								</a>
								<a className="bg-white rounded-full p-2" href="#">
									<img src="./images/Icon.svg" alt="" />
								</a>
							</div>
						</div>
						<div className="col-span-6 rounded-2xl overflow-hidden relative shadow-sm h-[542px]">
							<img alt="New Collection" className="w-full h-full object-cover hover:scale-105 transition-transform" src="./images/3.png" />
						</div>
						<div className="col-span-3 flex flex-col justify-between gap-4 h-[542px]">
							<div className="relative rounded-full overflow-hidden bg-gray-800 h-14 flex items-center justify-between px-3 shadow-sm">
								<h3 className="text-lg font-inter font-light text-white">Katalog</h3>
								<a className="bg-white rounded-full p-2" href="#">
									<img src="./images/Icon.svg" alt="" />
								</a>
							</div>
							<div className="relative rounded-2xl overflow-hidden group shadow-sm flex-1 min-h-[100px]">
								<img alt="Hijab Pattern" className="w-full h-full object-cover hover:scale-105 transition-transform" src="./images/4.png" />
								<div className="absolute inset-0 flex items-start justify-end p-3">
									<a className="bg-white rounded-full p-2 shadow-sm" href="#">
										<img src="./images/Icon.svg" alt="" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="relative">
				<div className="relative z-10 py-16 bg-[rgba(244,_244,_244,_1)]">
					<Marquee gradient={false} speed={60} pauseOnHover={true} direction="left">
						<div className="brands-container overflow-hidden relative">
							<div className="brands-track flex items-center gap-20 bg-[rgba(244,_244,_244,_1)]">
								{[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((num, idx) => (
									<div key={idx} className="brand-item flex-shrink-0 min-w-[120px] flex justify-center">
										<img alt={`Brand ${num}`} className="h-10 opacity-60 hover:opacity-90 transition-all duration-300 filter grayscale hover:grayscale-0" src={`./images/${num}.svg`} />
									</div>
								))}
							</div>
						</div>
					</Marquee>
				</div>
			</section>

			<section className="px-4 mt-10">
				<div className="mb-10">
					<div className="flex justify-between items-center mb-4">
						<h1 className="text-[rgba(113,_67,_41,_1)] text-4xl font-bold font-Inter">Aksiya</h1>
						<button className="border border-[rgba(64,_68,_70,_1)] py-[8px] px-[30px] font-medium font-Inter text-[20px] text-[rgba(32,_35,_37,_1)] rounded-full">Batafsil</button>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						{productsData.slice(4, 8).map((product, index) => (
							<CategoryCart key={product.id} product={product} index={index} />
						))}
					</div>
				</div>

				<div className="mb-10">
					<div className="flex justify-between items-center mb-4">
						<h1 className="text-[rgba(113,_67,_41,_1)] text-4xl font-bold font-Inter">Yangi to'plam</h1>
						<button className="border border-[rgba(64,_68,_70,_1)] py-[8px] px-[30px] font-medium font-Inter text-[20px] text-[rgba(32,_35,_37,_1)] rounded-full">Batafsil</button>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						{productsData.slice(0, 4).map((product, index) => (
							<CategoryCart key={product.id} product={product} index={index + 4} />
						))}
					</div>
				</div>

				<div className="mb-10">
					<div className="flex justify-between items-center mb-4">
						<h1 className="text-[rgba(113,_67,_41,_1)] text-4xl font-bold font-Inter">Eng ko'p sotilganlar</h1>
						<button className="border border-[rgba(64,_68,_70,_1)] py-[8px] px-[30px] font-medium font-Inter text-[20px] text-[rgba(32,_35,_37,_1)] rounded-full">Batafsil</button>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						{productsData.slice(8, 12).map((product, index) => (
							<CategoryCart key={product.id} product={product} index={index + 8} />
						))}
					</div>
				</div>
			</section>

			<section className="py-12">
				<div className="container mx-auto px-4">
					<h2 className="sm:text-3xl sm:font-medium text-2xl font-bold font-inter text-primary-dark mb-8">Siz uchun mos uslublar</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="relative rounded-xl overflow-hidden h-64">
							<img alt="Tantanaviy" className="w-full h-full object-cover hover:scale-105 duration-300" src="./images/1.png" />
							<div className="absolute top-6 left-6">
								<span className="inline-block px-6 py-2 bg-[#b08463e6] text-white rounded-full font-medium cursor-pointer">Tantanaviy</span>
							</div>
						</div>
						<div className="relative rounded-xl overflow-hidden h-64">
							<img alt="Kundalik" className="w-full h-full object-cover hover:scale-105 duration-300" src="./images/2.png" />
							<div className="absolute top-6 left-6">
								<span className="inline-block px-6 py-2 bg-[#b08463e6] text-white rounded-full font-medium cursor-pointer">Kundalik</span>
							</div>
						</div>
						<div className="relative rounded-xl overflow-hidden h-64">
							<img alt="Moda" className="w-full h-full object-cover hover:scale-105 duration-300" src="./images/3.png" />
							<div className="absolute top-6 left-6">
								<span className="inline-block px-6 py-2 bg-[#b08463e6] text-white rounded-full font-medium cursor-pointer">Moda</span>
							</div>
						</div>
						<div className="relative rounded-xl overflow-hidden h-64">
							<img alt="Rasmiy" className="w-full h-full object-cover hover:scale-105 duration-300" src="./images/4.png" />
							<div className="absolute top-6 left-6">
								<span className="inline-block px-6 py-2 bg-[#b08463e6] text-white rounded-full font-medium cursor-pointer">Rasmiy</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

// Detail Page
function Detail({ productId, goBack, addToCart, favorites, toggleFavorite, navigateToProduct }) {
	const [product, setProduct] = useState(null);
	const [selectedSize, setSelectedSize] = useState(null);
	const [selectedColor, setSelectedColor] = useState(null);
	const [mainImage, setMainImage] = useState("");
	const [showFullDescription, setShowFullDescription] = useState(false);
	const [isInCart, setIsInCart] = useState(false);
	const [similarProducts, setSimilarProducts] = useState([]);

	useEffect(() => {
		// Initialize AOS
		const AOS = window.AOS;
		if (AOS) {
			AOS.init({
				duration: 800,
				once: true,
				easing: "ease-in-out",
			});
			AOS.refresh();
		}

		const productData = productsData.find((p) => p.id === parseInt(productId));
		if (productData) {
			setProduct(productData);
			setMainImage(productData.images[0]);
			setSelectedSize(productData.sizes[0].id);
			setSelectedColor(productData.colors[0].id);

			// Check if in cart
			const cart = JSON.parse(localStorage.getItem("cart") || "[]");
			setIsInCart(cart.some((item) => item.id === productData.id));

			// Get similar products
			const similar = productsData.filter((p) => p.id !== productData.id).slice(0, 4);
			setSimilarProducts(similar);
		}
	}, [productId]);

	const isFavorite = (productId) => {
		return favorites.some((fav) => fav.id === productId);
	};

	const handleAddToCart = () => {
		const selectedSizeObj = product.sizes.find((s) => s.id === selectedSize);
		const selectedColorObj = product.colors.find((c) => c.id === selectedColor);

		addToCart({
			...product,
			selectedSize,
			selectedSizeName: selectedSizeObj.name,
			selectedColor,
			selectedColorName: selectedColorObj.name,
			quantity: 1,
		});

		setIsInCart(true);
		showNotification("Savatga qo'shildi!", "success");
	};

	const copyProductLink = () => {
		navigator.clipboard
			.writeText(window.location.href)
			.then(() => showNotification("Havola nusxalandi!", "success"))
			.catch(() => showNotification("Nusxalashda xatolik!", "error"));
	};

	const showNotification = (message, type) => {
		const notification = document.createElement("div");
		notification.className = `fixed top-4 right-4 z-50 px-4 py-3 rounded-lg shadow-lg text-white transform transition-all duration-300 ${type === "success" ? "bg-green-500" : "bg-red-500"}`;
		notification.textContent = message;
		document.body.appendChild(notification);
		setTimeout(() => notification.remove(), 3000);
	};

	if (!product) return <div className="container mx-auto max-w-7xl p-4">Yuklanmoqda...</div>;

	return (
		<main className="container mx-auto max-w-7xl">
			<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-6 space-y-2 md:space-y-0 py-4 px-4">
				<div className="text-sm flex items-center space-x-2">
					<button onClick={goBack} className="text-gray-500 hover:text-amber-800 cursor-pointer">
						Bosh sahifa
					</button>
					<span className="text-gray-500">/</span>
					<button onClick={goBack} className="text-gray-500 hover:text-amber-800 cursor-pointer">
						Katalog
					</button>
					<span className="text-gray-500">/</span>
					<span className="text-gray-700">{product.text}</span>
				</div>

				<div className="flex space-x-2">
					<button onClick={() => toggleFavorite(product)} className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
						{isFavorite(product.id) ? (
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
							</svg>
						) : (
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
								/>
							</svg>
						)}
					</button>
					<button onClick={copyProductLink} className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
							/>
						</svg>
					</button>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12 px-4">
				<div className="flex flex-col-reverse md:flex-row gap-4">
					<div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto">
						{product.images.map((image, index) => (
							<button
								key={index}
								onClick={() => setMainImage(image)}
								className={`w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 ${mainImage === image ? "border-amber-700" : "border-gray-300"}`}
							>
								<img src={image} alt={`${product.text} - ${index + 1}`} className="w-full h-full object-cover" />
							</button>
						))}
					</div>
					<div className="flex-1 rounded-lg overflow-hidden">
						<img src={mainImage} alt={product.text} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
					</div>
				</div>

				<div className="px-2 md:px-0">
					<h1 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4">{product.text}</h1>

					<div className="mb-4 md:mb-6">
						<p className="text-gray-700 mb-2">
							O'lchami: <span className="font-medium">{product.sizes.find((s) => s.id === selectedSize)?.name}</span>
						</p>
						<div className="flex flex-wrap gap-2">
							{product.sizes.map((size, index) => (
								<button
									key={size.id}
									onClick={() => setSelectedSize(size.id)}
									className={`border py-2 px-4 rounded-full text-sm ${selectedSize === size.id ? "bg-gray-900 text-white border-gray-900" : "border-gray-300 hover:border-gray-900"}`}
								>
									{size.name}
								</button>
							))}
						</div>
					</div>

					<div className="mb-4 md:mb-6">
						<p className="text-gray-700 mb-2">
							Rangi: <span className="font-medium">{product.colors.find((c) => c.id === selectedColor)?.name}</span>
						</p>
						<div className="flex flex-wrap gap-3">
							{product.colors.map((color, index) => (
								<button
									key={color.id}
									onClick={() => setSelectedColor(color.id)}
									className={`w-8 h-8 rounded-full border-2 ${selectedColor === color.id ? "ring-2 ring-amber-500" : ""}`}
									style={{ backgroundColor: color.hex }}
									title={color.name}
								/>
							))}
						</div>
					</div>

					<div className="mb-4 md:mb-6">
						<p className="text-xl md:text-2xl font-bold text-gray-900">{product.price} so'm</p>
						{product.oldPrice && <p className="text-base md:text-lg text-gray-500 line-through">{product.oldPrice} so'm</p>}
					</div>

					<div className="flex items-center gap-4 mb-4">
						{product.stock > 0 ? (
							<button onClick={handleAddToCart} className="w-full md:w-auto bg-amber-700 text-white py-3 px-6 rounded-full font-medium hover:bg-amber-800 transition-colors">
								{isInCart ? "Savatga qoʻshilgan" : "Savatga qoʻshish"}
							</button>
						) : (
							<button disabled className="w-full md:w-auto bg-gray-300 text-gray-500 py-3 px-6 rounded-full font-medium cursor-not-allowed">
								Tugagan
							</button>
						)}
					</div>

					<div className="mt-4 md:mt-6">
						<div className="rounded-2xl border p-4">
							<div className="flex items-center gap-2">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
								</svg>
								<p className="text-gray-700">{product.stock}ta mavjud</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mb-8 md:mb-12 p-4 md:p-6 rounded-lg shadow-sm bg-white mx-4">
				<h3 className="text-lg md:text-xl font-medium text-gray-900 mb-4">Mahsulot tavsifi</h3>
				<div className="prose prose-sm max-w-2xl text-gray-700">
					{showFullDescription ? (
						<div>
							{product.description}
							<button className="text-amber-600 hover:text-amber-800 text-sm mt-2 inline-flex items-center">Yashirish</button>
						</div>
					) : (
						<div>
							{product.description.substring(0, 200)}...
							<button className="text-amber-600 hover:text-amber-800 text-sm mt-2 inline-flex items-center">Ko'proq ko'rsatish</button>
						</div>
					)}
				</div>
			</div>

			<section className="mb-12 px-4">
				<div className="flex justify-between items-center mb-8">
					<h2 className="text-2xl font-medium text-gray-900">O'xshash mahsulotlar</h2>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					{similarProducts.map((product, index) => (
						<div key={product.id} className="group cursor-pointer" onClick={() => navigateToProduct(product.id)}>
							<div className="rounded-xl overflow-hidden mb-3">
								<img src={product.image} alt={product.text} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
							</div>
							<h3 className="font-normal text-gray-900 group-hover:text-amber-700">{product.text}</h3>
							<p className="text-gray-700">{product.price} so'm</p>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}

// Footer Component
function Footer() {
	return (
		<div className="bg-gray-100">
			<main className="container mx-auto max-w-7xl">
				<footer className="text-gray-900 pt-16 pb-8">
					<div className="container mx-auto px-6">
						<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
							<div className="lg:col-span-4">
								<img alt="Madinam Hijab Store" className="h-10 mb-6" src="./images/Logo.svg" />
								<p className="text-gray-600 max-w-sm mb-8">Biz sizning uslubingizga mos keladigan va siz kiyishdan mamnun bo'ladigan kiyimlarni taqdim etamiz.</p>
								<div className="flex space-x-3">
									<a className="bg-gray-200 rounded-full p-2" href="#">
										<Instagram width={20} height={20} />
									</a>
									<a className="bg-gray-200 rounded-full p-2" href="#">
										<Facebook width={20} height={20} />
									</a>
									<a className="bg-gray-200 rounded-full p-2" href="#">
										<Twitter width={20} height={20} />
									</a>
								</div>
							</div>
							<div className="lg:col-span-4">
								<h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-6">Tezkor havolalar</h3>
								<div className="grid grid-cols-2 gap-8">
									<div>
										<ul className="space-y-3">
											<li>
												<a className="text-gray-600 hover:text-primary transition-colors text-sm" href="#">
													Biz haqimizda
												</a>
											</li>
											<li>
												<a className="text-gray-600 hover:text-primary transition-colors text-sm" href="#">
													Bog'lanish
												</a>
											</li>
											<li>
												<a className="text-gray-600 hover:text-primary transition-colors text-sm" href="#">
													Yordam
												</a>
											</li>
										</ul>
									</div>
									<div>
										<ul className="space-y-3">
											<li>
												<a className="text-gray-600 hover:text-primary transition-colors text-sm" href="#">
													Yetkazib berish
												</a>
											</li>
											<li>
												<a className="text-gray-600 hover:text-primary transition-colors text-sm" href="#">
													Qaytarish
												</a>
											</li>
											<li>
												<a className="text-gray-600 hover:text-primary transition-colors text-sm" href="#">
													Maxfiylik
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="lg:col-span-4">
								<h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-6">Mobil ilova</h3>
								<p className="text-gray-600 text-sm mb-6">Ilovamizni yuklab oling va eng yaxshi takliflardan birinchi bo'lib xabardor bo'ling</p>
								<div className="space-y-3">
									<a className="flex items-center border border-gray-300 rounded-lg p-3 group" href="#">
										<svg className="w-6 h-6 mr-3 text-gray-600 " fill="currentColor" viewBox="0 0 24 24">
											<path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
										</svg>
										<div>
											<div className="text-xs text-gray-500">Google Play'dan yuklang</div>
											<div className="text-sm font-semibold text-gray-900 ">Google Play</div>
										</div>
									</a>
									<a className="flex items-center border border-gray-300 rounded-lg p-3 group" href="#">
										<svg className="w-6 h-6 mr-3 text-gray-600 " fill="currentColor" viewBox="0 0 24 24">
											<path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
										</svg>
										<div>
											<div className="text-xs text-gray-500">App Store'dan yuklang</div>
											<div className="text-sm font-semibold text-gray-900 ">App Store</div>
										</div>
									</a>
								</div>
							</div>
						</div>
						<div className="border-t border-gray-200 pt-8 text-center">
							<p className="text-gray-500 text-sm">Madinam Hijab Store ©2025, Barcha huquqlar himoyalangan.</p>
						</div>
					</div>
				</footer>
			</main>
		</div>
	);
}

// Main App Component
function App() {
	const [currentPage, setCurrentPage] = useState("home");
	const [selectedProductId, setSelectedProductId] = useState(null);
	const [showFavorites, setShowFavorites] = useState(false);
	const [showCart, setShowCart] = useState(false);
	const [favorites, setFavorites] = useState([]);
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		// Initialize AOS
		const AOS = window.AOS;
		if (AOS) {
			AOS.init({
				duration: 800,
				once: true,
				easing: "ease-in-out",
			});
		}

		// Load from localStorage on initial render
		const savedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
		const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
		setFavorites(savedFavorites);
		setCartItems(savedCart);
	}, []);

	const navigateToProduct = (productId) => {
		setSelectedProductId(productId);
		setCurrentPage("detail");
	};

	const goBack = () => {
		setCurrentPage("home");
		setSelectedProductId(null);
	};

	const toggleFavorite = (product) => {
		const isFavorite = favorites.some((fav) => fav.id === product.id);
		let newFavorites;

		if (isFavorite) {
			newFavorites = favorites.filter((fav) => fav.id !== product.id);
		} else {
			newFavorites = [...favorites, product];
		}

		setFavorites(newFavorites);
		localStorage.setItem("favorites", JSON.stringify(newFavorites));
	};

	const removeFavorite = (productId) => {
		const newFavorites = favorites.filter((fav) => fav.id !== productId);
		setFavorites(newFavorites);
		localStorage.setItem("favorites", JSON.stringify(newFavorites));
	};

	const addToCart = (product) => {
		const cart = JSON.parse(localStorage.getItem("cart") || "[]");
		const existingItemIndex = cart.findIndex((item) => item.id === product.id && item.selectedSize === product.selectedSize && item.selectedColor === product.selectedColor);

		if (existingItemIndex >= 0) {
			cart[existingItemIndex].quantity += 1;
		} else {
			cart.push(product);
		}

		setCartItems(cart);
		localStorage.setItem("cart", JSON.stringify(cart));
	};

	const updateCartQuantity = (productId, sizeId, colorId, change) => {
		const newCart = cartItems.map((item) => {
			if (item.id === productId && item.selectedSize === sizeId && item.selectedColor === colorId) {
				const newQuantity = item.quantity + change;
				return { ...item, quantity: Math.max(1, newQuantity) };
			}
			return item;
		});
		setCartItems(newCart);
		localStorage.setItem("cart", JSON.stringify(newCart));
	};

	const removeFromCart = (productId, sizeId, colorId) => {
		const newCart = cartItems.filter((item) => !(item.id === productId && item.selectedSize === sizeId && item.selectedColor === colorId));
		setCartItems(newCart);
		localStorage.setItem("cart", JSON.stringify(newCart));
	};

	const renderPage = () => {
		switch (currentPage) {
			case "home":
				return <Home navigateToProduct={navigateToProduct} favorites={favorites} toggleFavorite={toggleFavorite} />;
			case "detail":
				return <Detail productId={selectedProductId} goBack={goBack} navigateToProduct={navigateToProduct} addToCart={addToCart} favorites={favorites} toggleFavorite={toggleFavorite} />;
			case "login":
			default:
				return <Home navigateToProduct={navigateToProduct} favorites={favorites} toggleFavorite={toggleFavorite} />;
		}
	};

	return (
		<div className="min-h-screen flex flex-col">
			<Navbar
				onFavoriteClick={() => setShowFavorites(true)}
				onCartClick={() => setShowCart(true)}
				favoriteCount={favorites.length}
				cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
				setCurrentPage={setCurrentPage}
			/>

			<FavoritesSidebar isOpen={showFavorites} onClose={() => setShowFavorites(false)} favorites={favorites} onRemove={removeFavorite} navigateToProduct={navigateToProduct} />

			<CartSidebar isOpen={showCart} onClose={() => setShowCart(false)} cartItems={cartItems} onUpdateQuantity={updateCartQuantity} onRemove={removeFromCart} />

			<div className="flex-1">{renderPage()}</div>

			<Footer />
		</div>
	);
}

export default App;
