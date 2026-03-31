import { iconByName, UnknownIcon } from '../../assets/icons'

function CartItem({ product }) {
  const Icon = iconByName[product.icon] ?? UnknownIcon

  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-center gap-3 min-w-0">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
          <Icon className="h-6 w-6" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-900">{product.name}</p>
          <p className="truncate text-xs text-slate-500">/{product.period}</p>
        </div>
      </div>

      <div className="shrink-0">
        <p className="text-sm font-bold text-slate-900">${product.price}</p>
      </div>
    </div>
  )
}

export default CartItem

