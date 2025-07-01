'use client';
import { Button } from "@/components/ui/button"
import { Heart, Star, Sparkles } from "lucide-react"
import Image from "next/image"

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-50 animate-bounce"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-200 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-green-200 rounded-full opacity-50 animate-bounce"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold">
                <Sparkles className="h-4 w-4 mr-2" />
                ¡Más de 500 eventos realizados!
              </div>
              
              <h2 className="text-5xl xl:text-6xl font-bold text-gray-800 leading-tight text-justify-rigth" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                <span className="block mt-2">Transformamos</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">tus momentos</span>
                 <span className="block mt-2">en recuerdos inolvidables.</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                Especialistas en decoración con globos para eventos únicos e inolvidables. 
                Transformamos momentos especiales en recuerdos mágicos que perdurarán para siempre.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => scrollToSection('#servicios')}
              >
                Ver Servicios
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-full text-lg font-semibold hover:border-pink-400 transition-all duration-300"
                onClick={() => scrollToSection('#contacto')}
              >
                Contactar Ahora
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { number: "100+", label: "Eventos" },
                { number: "100%", label: "Satisfacción" },
                { number: "5+", label: "Años" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-pink-600 mb-1" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-pink-200 via-yellow-200 to-green-200 rounded-3xl p-8 shadow-2xl">
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-400 rounded-full animate-ping"></div>
              <div className="absolute -top-2 -right-6 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-3 -left-2 w-5 h-5 bg-green-400 rounded-full animate-bounce"></div>
              
              <div className="aspect-square bg-white rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Placeholder content */}
                <div className="text-center space-y-6 p-8">
                  <div className="flex justify-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center animate-bounce">
                      <Heart className="h-8 w-8 text-pink-500" />
                    </div>
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center animate-pulse">
                      <Star className="h-8 w-8 text-yellow-500" />
                    </div>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
                      <Sparkles className="h-8 w-8 text-green-500" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Image
                      src="/luquetzal.jpeg" 
                      alt="Foto de evento"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
                
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 left-4 w-3 h-3 bg-pink-400 rounded-full"></div>
                  <div className="absolute top-8 left-12 w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="absolute top-12 left-6 w-4 h-4 bg-green-400 rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-3 h-3 bg-purple-400 rounded-full"></div>
                  <div className="absolute bottom-8 right-12 w-5 h-5 bg-pink-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero