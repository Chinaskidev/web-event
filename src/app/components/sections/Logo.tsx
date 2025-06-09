import Image from "next/image"
import { Sparkles } from "lucide-react"

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        {/* Fondo circular con ícono */}
        <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center absolute top-0 left-0 z-10">
          <Sparkles className="h-6 w-6 text-white" />
        </div>

        {/* Imagen del logo */}
        <Image
          src="/lusun.png"
          alt="Lusun Balloons Logo"
          width={40}
          height={40}
          className="w-10 h-10 relative z-20"
        />
      </div>

      <div>
        <h1 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Fredoka, sans-serif' }}>
          Lusun Balloons
        </h1>
        <p className="text-xs text-pink-500 font-medium" style={{ fontFamily: 'Fredoka, sans-serif' }}>
          Eventos Mágicos
        </p>
      </div>
    </div>
  )
}

export default Logo
