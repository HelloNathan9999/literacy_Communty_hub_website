
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { toast } from "sonner";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  seller: string;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  checkout: () => void;
  getTotal: () => number;
  getCartItemCount: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      
      addToCart: (item) => set((state) => {
        const existingItemIndex = state.cart.findIndex(
          (cartItem) => cartItem.id === item.id
        );

        if (existingItemIndex !== -1) {
          // Item already exists in cart, update quantity
          const updatedCart = [...state.cart];
          updatedCart[existingItemIndex].quantity += item.quantity;
          
          toast(`${item.name} ditambahkan ke keranjang`, {
            description: `Total: ${updatedCart[existingItemIndex].quantity} barang`
          });
          
          return { cart: updatedCart };
        } else {
          // Add new item to cart
          toast(`${item.name} ditambahkan ke keranjang`, {
            description: `${item.quantity} barang`
          });
          
          return { cart: [...state.cart, item] };
        }
      }),
      
      updateQuantity: (id, quantity) => set((state) => {
        if (quantity <= 0) {
          return {
            cart: state.cart.filter(item => item.id !== id)
          };
        }

        return {
          cart: state.cart.map(item => 
            item.id === id ? { ...item, quantity } : item
          )
        };
      }),
      
      removeFromCart: (id) => set((state) => {
        const itemToRemove = state.cart.find(item => item.id === id);
        if (itemToRemove) {
          toast(`${itemToRemove.name} dihapus dari keranjang`);
        }
        
        return {
          cart: state.cart.filter(item => item.id !== id)
        };
      }),
      
      clearCart: () => set({ cart: [] }),
      
      checkout: () => {
        const total = get().getTotal();
        
        if (get().cart.length === 0) {
          toast.error("Keranjang belanja kosong", {
            description: "Tambahkan produk ke keranjang sebelum checkout."
          });
          return;
        }
        
        // In a real app, you would redirect to payment gateway
        toast.success("Pembayaran berhasil!", {
          description: `Total pembayaran: Rp ${total.toLocaleString('id-ID')}`
        });
        
        // Save order in localStorage for demo purposes
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        orders.push({
          id: `order-${Date.now()}`,
          items: get().cart,
          total: total,
          date: new Date().toISOString(),
          status: "Diproses"
        });
        localStorage.setItem('orders', JSON.stringify(orders));
        
        // Clear cart after successful checkout
        set({ cart: [] });
      },
      
      getTotal: () => {
        return get().cart.reduce(
          (total, item) => total + item.price * item.quantity, 
          0
        );
      },
      
      getCartItemCount: () => {
        return get().cart.reduce(
          (count, item) => count + item.quantity, 
          0
        );
      }
    }),
    {
      name: 'lch-cart-storage',
    }
  )
);
