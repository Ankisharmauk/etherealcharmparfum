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
        className={`fixed top-0 right-0 h-full w-full max-w-[420px] z-50 bg-[#FFFCF5] border-l border-[#C9920E]/20 flex flex-col transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#C9920E]/15 bg-[#C8900A]">
          <h2 className="text-[#F5DFA0] tracking-widest uppercase text-xs" style={{ fontFamily: 'var(--font-sans)' }}>
            Your Bag {count > 0 && <span className="text-white">({count})</span>}
          </h2>
          <button onClick={closeCart} className="text-[#F5DFA0]/60 hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <p className="text-[#2C1A06]/35 tracking-wider text-sm" style={{ fontFamily: 'var(--font-sans)' }}>Your bag is empty</p>
              <button onClick={closeCart} className="text-[#C9920E] text-xs tracking-widest uppercase hover:underline" style={{ fontFamily: 'var(--font-sans)' }}>
                Continue shopping
              </button>
            </div>
          ) : (
            items.map(({ product, quantity }) => (
              <div key={product.id} className="flex gap-4 items-start">
                <div className="w-20 h-20 bg-[#F5E8C8] flex items-center justify-center shrink-0 overflow-hidden border border-[#C9920E]/15">
                  <Image src={product.image} alt={product.name} width={64} height={64} className="object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#2C1A06] text-sm font-light truncate" style={{ fontFamily: 'var(--font-display)' }}>{product.name}</p>
                  <p className="text-[#C9920E] text-xs mt-0.5">${product.price.toFixed(2)}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <button onClick={() => updateQty(product.id, quantity - 1)}
                      className="w-6 h-6 border border-[#C9920E]/25 flex items-center justify-center text-[#2C1A06]/50 hover:border-[#C9920E] hover:text-[#C9920E] transition-colors">
                      <Minus size={10} />
                    </button>
                    <span className="text-[#2C1A06] text-sm w-4 text-center">{quantity}</span>
                    <button onClick={() => updateQty(product.id, quantity + 1)}
                      className="w-6 h-6 border border-[#C9920E]/25 flex items-center justify-center text-[#2C1A06]/50 hover:border-[#C9920E] hover:text-[#C9920E] transition-colors">
                      <Plus size={10} />
                    </button>
                    <button onClick={() => remove(product.id)} className="ml-auto text-[#2C1A06]/20 hover:text-red-500 transition-colors">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-[#C9920E]/15 space-y-4 bg-[#FBF4E3]">
            <div className="flex justify-between text-sm">
              <span className="text-[#2C1A06]/50 tracking-wider" style={{ fontFamily: 'var(--font-sans)' }}>Subtotal</span>
              <span className="text-[#2C1A06]" style={{ fontFamily: 'var(--font-display)' }}>${total.toFixed(2)}</span>
            </div>
            <p className="text-[#2C1A06]/30 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>Shipping calculated at checkout</p>
            <button onClick={handleCheckout}
              className="w-full py-4 bg-[#C9920E] text-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#E8A820] transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
