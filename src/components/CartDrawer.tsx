'use client'

import { useCart } from '@/context/CartContext'
import { X, Minus, Plus, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function CartDrawer() {
  const { items, isOpen, closeCart, remove, updateQty, total, count } = useCart()
  const router = useRouter()

  const handleCheckout = () => {
    closeCart()
    router.push('/checkout')
  }

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          onClick={closeCart}
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-[420px] z-50 bg-[#111009] border-l border-white/5 flex flex-col transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
          <h2 className="text-[#F5F0E8] tracking-widest uppercase text-xs">
            Your Bag {count > 0 && <span className="text-[#C9A84C]">({count})</span>}
          </h2>
          <button onClick={closeCart} className="text-[#F5F0E8]/40 hover:text-[#F5F0E8] transition-colors">
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <p className="text-[#F5F0E8]/30 tracking-wider text-sm">Your bag is empty</p>
              <button
                onClick={closeCart}
                className="text-[#C9A84C] text-xs tracking-widest uppercase hover:underline"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            items.map(({ product, quantity }) => (
              <div key={product.id} className="flex gap-4 items-start">
                <div className="w-20 h-20 bg-[#1A1712] rounded-lg flex items-center justify-center shrink-0 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#F5F0E8] text-sm font-light truncate">{product.name}</p>
                  <p className="text-[#C9A84C] text-xs mt-0.5">${product.price.toFixed(2)}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => updateQty(product.id, quantity - 1)}
                      className="w-6 h-6 rounded border border-white/10 flex items-center justify-center text-[#F5F0E8]/60 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
                    >
                      <Minus size={10} />
                    </button>
                    <span className="text-[#F5F0E8] text-sm w-4 text-center">{quantity}</span>
                    <button
                      onClick={() => updateQty(product.id, quantity + 1)}
                      className="w-6 h-6 rounded border border-white/10 flex items-center justify-center text-[#F5F0E8]/60 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
                    >
                      <Plus size={10} />
                    </button>
                    <button
                      onClick={() => remove(product.id)}
                      className="ml-auto text-[#F5F0E8]/20 hover:text-red-400 transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-white/5 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-[#F5F0E8]/50 tracking-wider">Subtotal</span>
              <span className="text-[#F5F0E8]">${total.toFixed(2)}</span>
            </div>
            <p className="text-[#F5F0E8]/30 text-xs">Shipping calculated at checkout</p>
            <button
              onClick={handleCheckout}
              className="w-full py-4 bg-[#C9A84C] text-[#0A0806] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#E8C876] transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
