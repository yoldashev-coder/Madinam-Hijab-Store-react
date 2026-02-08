import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, ShoppingCart, User, Search, ChevronDown, X, Menu, Instagram, Facebook, Twitter } from "lucide-react";

const Catalog = () => {
	const [selectedCategories, setSelectedCategories] = useState(["Hijob", "Pareo"]);
	const [selectedBrands, setSelectedBrands] = useState(["Zara", "Sefie", "Puma"]);
	const [selectedSizes, setSelectedSizes] = useState([]);
	const [selectedColors, setSelectedColors] = useState([]);
	const [priceRange, setPriceRange] = useState({ min: "", max: "" });
	const [sortBy, setSortBy] = useState("default");
	const [searchQuery, setSearchQuery] = useState("");
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [favorites, setFavorites] = useState([]);

	const navigate = useNavigate();

	const categories = [
		{ name: "Hijob", count: 31 },
		{ name: "Pareo", count: 32 },
		{ name: "Abaya", count: 17 },
		{ name: "Oyoq kiyimlar", count: 9 },
		{ name: "Aksessuarlar", count: 1 },
	];

	const brands = [
		{ name: "Zara", count: 31 },
		{ name: "Sefie", count: 32 },
		{ name: "Lacoste", count: 17 },
		{ name: "Nike", count: 8 },
		{ name: "Puma", count: 12 },
		{ name: "Adidas", count: 1 },
		{ name: "Under Armour", count: 5 },
	];

	const sizes = ["S", "M", "L", "XL", "XXL"];
	const colors = ["#000000", "#8B4513", "#4B0082", "#006400", "#FF6347", "#FFD700", "#0000FF", "#FF1493", "#00CED1", "#32CD32"];

	const products = [
		{ id: 1, name: "Qora futbolka 100% paxta", price: 1250000, image: "./images/5.png", colors: ["#8B4513", "#4B0082", "#006400"], category: "Hijob", brand: "Zara", size: "M" },
		{ id: 2, name: "Qora futbolka 100% paxta", price: 1250000, image: "./images/6.png", colors: ["#FFD700", "#00CED1", "#FF1493"], category: "Pareo", brand: "Sefie", size: "L" },
		{ id: 3, name: "Qora futbolka 100% paxta", price: 1250000, image: "./images/7.png", colors: ["#006400", "#00CED1", "#FF6347"], category: "Hijob", brand: "Puma", size: "S" },
		{ id: 4, name: "Qora futbolka 100% paxta", price: 1250000, image: "./images/8.png", colors: ["#8B4513", "#4B0082", "#006400"], category: "Abaya", brand: "Nike", size: "XL" },
		{ id: 5, name: "Qora futbolka 100% paxta", price: 1250000, image: "./images/9.png", colors: ["#FFD700", "#00CED1", "#FF1493"], category: "Pareo", brand: "Zara", size: "M" },
		{ id: 6, name: "Qora futbolka 100% paxta", price: 1250000, image: "./images/10.png", colors: ["#006400", "#00CED1", "#FF6347"], category: "Hijob", brand: "Lacoste", size: "L" },
		{ id: 7, name: "Qora futbolka 100% paxta", price: 1250000, image: "./images/11.png", colors: ["#8B4513", "#4B0082", "#006400"], category: "Abaya", brand: "Sefie", size: "S" },
		{ id: 8, name: "Qora futbolka 100% paxta", price: 1250000, image: "./images/12.png", colors: ["#FFD700", "#00CED1", "#FF1493"], category: "Pareo", brand: "Puma", size: "XXL" },
		{ id: 9, name: "Qora futbolka 100% paxta", price: 1250000, image: "./images/13.png", colors: ["#006400", "#00CED1", "#FF6347"], category: "Hijob", brand: "Adidas", size: "M" },
		{ id: 10, name: "Qora futbolka 100% paxta", price: 1250000, image: "./images/13.png", colors: ["#8B4513", "#4B0082", "#006400"], category: "Aksessuarlar", brand: "Zara", size: "L" },
		{ id: 11, name: "Qora futbolka 100% paxta", price: 1250000, image: "./images/15.png", colors: ["#FFD700", "#00CED1", "#FF1493"], category: "Pareo", brand: "Under Armour", size: "S" },
		{ id: 12, name: "Qora futbolka 100% paxta", price: 1250000, image: "./images/16.png", colors: ["#006400", "#00CED1", "#FF6347"], category: "Hijob", brand: "Nike", size: "XL" },
	];

	const filteredProducts = useMemo(() => {
		return products.filter((product) => {
			const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
			const matchBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
			const matchSize = selectedSizes.length === 0 || selectedSizes.includes(product.size);
			const matchColor = selectedColors.length === 0 || product.colors.some((c) => selectedColors.includes(c));
			const matchPrice = (!priceRange.min || product.price >= parseFloat(priceRange.min)) && (!priceRange.max || product.price <= parseFloat(priceRange.max));
			const matchSearch = !searchQuery || product.name.toLowerCase().includes(searchQuery.toLowerCase());

			return matchCategory && matchBrand && matchSize && matchColor && matchPrice && matchSearch;
		});
	}, [selectedCategories, selectedBrands, selectedSizes, selectedColors, priceRange, searchQuery]);

	const sortedProducts = useMemo(() => {
		const sorted = [...filteredProducts];
		if (sortBy === "price-low") sorted.sort((a, b) => a.price - b.price);
		if (sortBy === "price-high") sorted.sort((a, b) => b.price - a.price);
		if (sortBy === "name") sorted.sort((a, b) => a.name.localeCompare(b.name));
		return sorted;
	}, [filteredProducts, sortBy]);

	const toggleCategory = (cat) => {
		setSelectedCategories((prev) => (prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]));
	};

	const toggleBrand = (brand) => {
		setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]));
	};

	const toggleSize = (size) => {
		setSelectedSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]));
	};

	const toggleColor = (color) => {
		setSelectedColors((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]));
	};

	const toggleFavorite = (id) => {
		setFavorites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));
	};

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Promo Banner */}
			<div className="bg-black text-white text-center py-2 px-4 text-sm relative">
				Ro’yxatdan o’ting va birinchi buyurtma uchun 20% chegirma oling. Ro’yxatdan o’tish
				<button className="absolute right-4 top-1/2 -translate-y-1/2">
					<X size={16} />
				</button>
			</div>

			{/* Header */}
			<header className="bg-white shadow-sm sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center gap-6">
							<div className="flex items-center gap-2">
								<div>
									<img className="cursor-pointer" onClick={() => navigate("/")} src="/images/Logo.svg" alt="" />
								</div>
							</div>
							<nav className="hidden md:flex gap-6">
								<a href="#" className="text-gray-700 hover:text-amber-700">
									Katalog
								</a>
								<a href="#" className="text-gray-700 hover:text-amber-700">
									Telegram
								</a>
							</nav>
						</div>

						<div className="hidden md:flex items-center flex-1 max-w-md mx-8">
							<div className="relative w-full">
								<Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
								<input
									type="text"
									placeholder="Qidiruv..."
									className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
								/>
							</div>
						</div>

						<div className="flex items-center gap-4">
							<button className="hidden md:block p-2 hover:bg-gray-100 rounded-lg">
								<img src="./images/shopping.svg" alt="" />
							</button>
							<button className="hidden md:block p-2 hover:bg-gray-100 rounded-lg">
								<img src="./images/Heart.svg" alt="" />
							</button>
							<button className="hidden md:block p-2 hover:bg-gray-100 rounded-lg">
								<img src="./images/User.svg" alt="" />
							</button>
							<button className="bg-amber-700 text-white px-6 py-2 rounded-full hover:bg-amber-800">Kirish</button>
							<button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
								<Menu size={24} />
							</button>
						</div>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="flex flex-col lg:flex-row gap-8">
					{/* Sidebar Filters */}
					<aside className={`lg:w-64 ${mobileMenuOpen ? "block" : "hidden lg:block"}`}>
						<div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
							{/* Categories */}
							<div>
								<h3 className="font-bold mb-4 flex items-center justify-between cursor-pointer">
									Kategoriyalar
									<ChevronDown size={20} />
								</h3>
								<div className="space-y-2">
									{categories.map((cat) => (
										<label key={cat.name} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
											<input
												type="checkbox"
												className="w-4 h-4 text-amber-700 rounded focus:ring-amber-700"
												checked={selectedCategories.includes(cat.name)}
												onChange={() => toggleCategory(cat.name)}
											/>
											<span className="flex-1 text-sm">{cat.name}</span>
											<span className="text-xs text-gray-500">{cat.count}</span>
										</label>
									))}
								</div>
							</div>

							{/* Sizes */}
							<div>
								<h3 className="font-bold mb-4">O'lchami</h3>
								<div className="flex flex-wrap gap-2">
									{sizes.map((size) => (
										<button
											key={size}
											onClick={() => toggleSize(size)}
											className={`px-4 py-2 border rounded-lg text-sm ${selectedSizes.includes(size) ? "bg-amber-700 text-white border-amber-700" : "border-gray-300 hover:border-amber-700"}`}
										>
											{size}
										</button>
									))}
								</div>
							</div>

							{/* Colors */}
							<div>
								<h3 className="font-bold mb-4">Rangi</h3>
								<div className="flex flex-wrap gap-2">
									{colors.map((color) => (
										<button
											key={color}
											onClick={() => toggleColor(color)}
											className={`w-8 h-8 rounded-full border-2 ${selectedColors.includes(color) ? "border-amber-700 ring-2 ring-amber-700" : "border-gray-300"}`}
											style={{ backgroundColor: color }}
										/>
									))}
								</div>
							</div>

							{/* Brands */}
							<div>
								<h3 className="font-bold mb-4 flex items-center justify-between cursor-pointer">
									Brendlar
									<ChevronDown size={20} />
								</h3>
								<div className="space-y-2">
									{brands.map((brand) => (
										<label key={brand.name} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
											<input type="checkbox" className="w-4 h-4 text-amber-700 rounded focus:ring-amber-700" checked={selectedBrands.includes(brand.name)} onChange={() => toggleBrand(brand.name)} />
											<span className="flex-1 text-sm">{brand.name}</span>
											<span className="text-xs text-gray-500">{brand.count}</span>
										</label>
									))}
								</div>
							</div>

							{/* Price Range */}
							<div>
								<h3 className="font-bold mb-4">Narxi</h3>
								<div className="flex gap-2">
									<input
										type="number"
										placeholder="Dan"
										className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
										value={priceRange.min}
										onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
									/>
									<input
										type="number"
										placeholder="Gacha"
										className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
										value={priceRange.max}
										onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
									/>
								</div>
							</div>
						</div>
					</aside>

					{/* Products Grid */}
					<main className="flex-1">
						<div className="flex items-center justify-between mb-6">
							<h1 className="text-3xl font-bold">Katalog</h1>
							<select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
								<option value="default">Narx bo'yicha tartiblab</option>
								<option value="price-low">Narxi: Kamdan ko'pga</option>
								<option value="price-high">Narxi: Ko'pdan kamga</option>
								<option value="name">Nomi bo'yicha</option>
							</select>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{sortedProducts.map((product) => (
								<div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
									<div className="relative">
										<img src={product.image} alt={product.name} className="w-full h-80 object-cover hover:scale-105 duration-300 ease-in-out" />
										<button onClick={() => toggleFavorite(product.id)} className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
											<Heart size={20} className={favorites.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"} />
										</button>
									</div>
									<div className="p-4">
										<div className="flex gap-1 mb-2">
											{product.colors.map((color, idx) => (
												<div key={idx} className="w-4 h-4 rounded-full border border-gray-300" style={{ backgroundColor: color }} />
											))}
										</div>
										<h3 className="font-medium mb-2">{product.name}</h3>
										<p className="text-lg font-bold text-amber-700">{product.price.toLocaleString()} so'm</p>
									</div>
								</div>
							))}
						</div>

						{sortedProducts.length === 0 && (
							<div className="text-center py-16 text-gray-500">
								<p className="text-xl">Hech qanday mahsulot topilmadi</p>
								<p className="mt-2">Filtrlash parametrlarini o'zgartiring</p>
							</div>
						)}

						<div className="mt-8 text-start">
							<button className="px-8 py-3 border-2 border-amber-700 text-amber-700 rounded-full hover:bg-amber-700 hover:text-white transition-colors">Ko'proq ko'rish →</button>
						</div>
					</main>
				</div>

				{/* Reviews Section */}
				<section className="mt-16 bg-white rounded-lg shadow-sm p-8">
					<h2 className="text-2xl font-bold mb-8 text-center">Mijozlarimizdan fikrlar</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="text-center">
							<div className="flex justify-center gap-1 text-yellow-400 mb-4">
								{[...Array(5)].map((_, i) => (
									<span key={i}>★</span>
								))}
							</div>
							<h3 className="font-bold mb-2">Sarah M.</h3>
							<p className="text-sm text-gray-600">
								"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
							</p>
						</div>
						<div className="text-center">
							<div className="flex justify-center gap-1 text-yellow-400 mb-4">
								{[...Array(5)].map((_, i) => (
									<span key={i}>★</span>
								))}
							</div>
							<h3 className="font-bold mb-2">Alex K.</h3>
							<p className="text-sm text-gray-600">
								"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of
								tastes and occasions."
							</p>
						</div>
						<div className="text-center">
							<div className="flex justify-center gap-1 text-yellow-400 mb-4">
								{[...Array(5)].map((_, i) => (
									<span key={i}>★</span>
								))}
							</div>
							<h3 className="font-bold mb-2">James L.</h3>
							<p className="text-sm text-gray-600">
								"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the
								latest trends."
							</p>
						</div>
					</div>
				</section>
			</div>

			{/* Footer */}
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
		</div>
	);
};

export default Catalog;
