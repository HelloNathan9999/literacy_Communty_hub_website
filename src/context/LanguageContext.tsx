import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

// Define translation type
type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

// Basic translations
const translations: Translations = {
  id: {
    "home": "Beranda",
    "articles": "Artikel",
    "videos": "Video",
    "community": "Komunitas",
    "subscribe": "Berlangganan",
    "login": "Masuk",
    "signup": "Daftar",
    "dashboard": "Dasbor",
    "logout": "Keluar",
    "language": "Bahasa",
    "theme": "Tema",
    "welcome": "Selamat datang di Literacy Community Hub",
    "email": "Email",
    "password": "Kata Sandi",
    "forgotPassword": "Lupa Kata Sandi?",
    "name": "Nama Lengkap",
    "confirmPassword": "Konfirmasi Kata Sandi",
    "agreeTerms": "Saya setuju dengan syarat dan ketentuan",
    "hasAccount": "Sudah memiliki akun?",
    "noAccount": "Belum memiliki akun?",
    "signupNow": "Daftar sekarang",
    "loginNow": "Masuk sekarang",
    "processing": "Memproses...",
    // Store translations
    "store": "Toko",
    "lchStore": "Toko Literacy Community Hub",
    "searchProducts": "Cari produk...",
    "sortBy": "Urutkan",
    "popularity": "Popularitas",
    "newest": "Terbaru",
    "priceLowToHigh": "Harga: Rendah ke Tinggi",
    "priceHighToLow": "Harga: Tinggi ke Rendah",
    "filters": "Filter",
    "categories": "Kategori",
    "allCategories": "Semua Kategori",
    "clothing": "Pakaian",
    "accessories": "Aksesoris",
    "stationery": "Alat Tulis",
    "housewares": "Peralatan Rumah",
    "shoppingCart": "Keranjang Belanja",
    "subtotal": "Subtotal",
    "checkout": "Bayar",
    "cartEmpty": "Keranjang Kosong",
    "browseProductsToAdd": "Jelajahi produk dan tambahkan ke keranjang",
    "noProductsFound": "Tidak Ada Produk Ditemukan",
    "tryDifferentSearch": "Coba kata kunci lain atau hapus filter",
    "clearFilters": "Hapus Filter",
    "productAddedToCart": "Produk ditambahkan ke keranjang",
  },
  en: {
    "home": "Home",
    "articles": "Articles",
    "videos": "Videos",
    "community": "Community",
    "subscribe": "Subscribe",
    "login": "Login",
    "signup": "Sign Up",
    "dashboard": "Dashboard",
    "logout": "Logout",
    "language": "Language",
    "theme": "Theme",
    "welcome": "Welcome to Literacy Community Hub",
    "email": "Email",
    "password": "Password",
    "forgotPassword": "Forgot Password?",
    "name": "Full Name",
    "confirmPassword": "Confirm Password",
    "agreeTerms": "I agree to the terms and conditions",
    "hasAccount": "Already have an account?",
    "noAccount": "Don't have an account?",
    "signupNow": "Sign up now",
    "loginNow": "Login now",
    "processing": "Processing...",
    // Store translations
    "store": "Store",
    "lchStore": "Literacy Community Hub Store",
    "searchProducts": "Search products...",
    "sortBy": "Sort by",
    "popularity": "Popularity",
    "newest": "Newest",
    "priceLowToHigh": "Price: Low to High",
    "priceHighToLow": "Price: High to Low",
    "filters": "Filters",
    "categories": "Categories",
    "allCategories": "All Categories",
    "clothing": "Clothing",
    "accessories": "Accessories",
    "stationery": "Stationery",
    "housewares": "Housewares",
    "shoppingCart": "Shopping Cart",
    "subtotal": "Subtotal",
    "checkout": "Checkout",
    "cartEmpty": "Cart is Empty",
    "browseProductsToAdd": "Browse products and add them to your cart",
    "noProductsFound": "No Products Found",
    "tryDifferentSearch": "Try a different search term or clear filters",
    "clearFilters": "Clear Filters",
    "productAddedToCart": "Product added to cart",
  },
  zh: {
    "home": "首页",
    "articles": "文章",
    "videos": "视频",
    "community": "社区",
    "subscribe": "订阅",
    "login": "登录",
    "signup": "注册",
    "dashboard": "仪表板",
    "logout": "登出",
    "language": "语言",
    "theme": "主题",
    "welcome": "欢迎来到读写社区中心",
    "email": "电子邮件",
    "password": "密码",
    "forgotPassword": "忘记密码？",
    "name": "全名",
    "confirmPassword": "确认密码",
    "agreeTerms": "我同意条款和条件",
    "hasAccount": "已有账户？",
    "noAccount": "没有账户？",
    "signupNow": "立即注册",
    "loginNow": "立即登录",
    "processing": "处理中...",
    // Store translations
    "store": "商店",
    "lchStore": "读写社区中心商店",
    "searchProducts": "搜索产品...",
    "sortBy": "排序方式",
    "popularity": "人气",
    "newest": "最新",
    "priceLowToHigh": "价格：从低到高",
    "priceHighToLow": "价格：从高到低",
    "filters": "筛选",
    "categories": "分类",
    "allCategories": "所有分类",
    "clothing": "服装",
    "accessories": "配件",
    "stationery": "文具",
    "housewares": "家居用品",
    "shoppingCart": "购物车",
    "subtotal": "小计",
    "checkout": "结账",
    "cartEmpty": "购物车为空",
    "browseProductsToAdd": "浏览产品并添加到购物车",
    "noProductsFound": "未找到产品",
    "tryDifferentSearch": "尝试不同的搜索词或清除过滤器",
    "clearFilters": "清除筛选",
    "productAddedToCart": "产品已添加到购物车",
  },
  ja: {
    "home": "ホーム",
    "articles": "記事",
    "videos": "ビデオ",
    "community": "コミュニティ",
    "subscribe": "購読",
    "login": "ログイン",
    "signup": "登録",
    "dashboard": "ダッシュボード",
    "logout": "ログアウト",
    "language": "言語",
    "theme": "テーマ",
    "welcome": "リテラシーコミュニティハブへようこそ",
    "email": "メール",
    "password": "パスワード",
    "forgotPassword": "パスワードをお忘れですか？",
    "name": "フルネーム",
    "confirmPassword": "パスワードを確認",
    "agreeTerms": "利用規約に同意します",
    "hasAccount": "すでにアカウントをお持ちですか？",
    "noAccount": "アカウントをお持ちではありませんか？",
    "signupNow": "今すぐ登録",
    "loginNow": "今すぐログイン",
    "processing": "処理中...",
    // Store translations
    "store": "ストア",
    "lchStore": "リテラシーコミュニティハブストア",
    "searchProducts": "商品を検索...",
    "sortBy": "並び替え",
    "popularity": "人気",
    "newest": "新着",
    "priceLowToHigh": "価格：安い順",
    "priceHighToLow": "価格：高い順",
    "filters": "フィルター",
    "categories": "カテゴリー",
    "allCategories": "すべてのカテゴリー",
    "clothing": "衣料品",
    "accessories": "アクセサリー",
    "stationery": "文房具",
    "housewares": "家庭用品",
    "shoppingCart": "ショッピングカート",
    "subtotal": "小計",
    "checkout": "チェックアウト",
    "cartEmpty": "カートは空です",
    "browseProductsToAdd": "商品を閲覧してカートに追加してください",
    "noProductsFound": "商品が見つかりません",
    "tryDifferentSearch": "別の検索語を試すかフィルターをクリアしてください",
    "clearFilters": "フィルターをクリア",
    "productAddedToCart": "商品がカートに追加されました",
  },
  // Add more languages as needed
};

// Create context
type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'id',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    return savedLanguage || 'id'; // Default to Indonesian
  });

  useEffect(() => {
    localStorage.setItem('selectedLanguage', language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    if (translations[language] && translations[language][key]) {
      return translations[language][key];
    }
    
    // Fallback to Indonesian if translation not found
    if (translations['id'] && translations['id'][key]) {
      return translations['id'][key];
    }
    
    // Return the key if no translation found
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
