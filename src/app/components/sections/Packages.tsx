// src/components/sections/Packages.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Check, Sparkles, Crown, Gift, PartyPopper } from "lucide-react"

const Packages = () => {
  const packages = [
    {
      name: "Paquete Básico",
      subtitle: "Perfecto para comenzar",
      price: "$150",
      originalPrice: "$200",
      icon: <Gift className="h-8 w-8 text-pink-500" />,
      features: [
        "50 globos de látex premium",
        "1 arco pequeño (2m)",
        "Decoración básica de mesa",
        "Montaje e instalación",
        "Servicio por 4 horas",
        "Colores personalizados"
      ],
      color: "border-pink-200 bg-gradient-to-br from-pink-50 to-pink-100",
      buttonColor: "bg-pink-500 hover:bg-pink-600",
      popular: false
    },
    {
      name: "Paquete Premium",
      subtitle: "El más elegido",
      price: "$350",
      originalPrice: "$450",
      icon: <Crown className="h-8 w-8 text-yellow-500" />,
      features: [
        "100 globos de látex premium",
        "1 arco grande (4m)",
        "15 globos metálicos",
        "3 centros de mesa elegantes",
        "Fotografía profesional (1 hora)",
        "Servicio por 6 horas",
        "Diseño personalizado",
        "Limpieza posterior incluida"
      ],
      color: "border-yellow-300 bg-gradient-to-br from-yellow-50 to-yellow-100",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
      popular: true
    },
    {
      name: "Paquete Deluxe",
      subtitle: "La experiencia completa",
      price: "$650",
      originalPrice: "$800",
      icon: <PartyPopper className="h-8 w-8 text-green-500" />,
      features: [
        "200+ globos premium",
        "Múltiples arcos temáticos",
        "Globos personalizados con logo",
        "Decoración completa del venue",
        "Iluminación LED especializada",
        "Fotografía profesional (3 horas)",
        "Servicio premium todo el día",
        "Coordinator de evento dedicado",
        "Limpieza completa",
        "Garantía de satisfacción"
      ],
      color: "border-green-200 bg-gradient-to-br from-green-50 to-green-100",
      buttonColor: "bg-green-500 hover:bg-green-600",
      popular: false
    }
  ]

  const addOns = [
    { name: "Globos con helio extra", price: "$2 c/u" },
    { name: "Números gigantes", price: "$25" },
    { name: "Backdrop personalizado", price: "$80" },
    { name: "Servicio adicional por hora", price: "$45" }
  ]

  return (
    <section id="paquetes" className="py-20 bg-gradient-to-br from-purple-50/30 to-pink-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-6 py-3 rounded-full text-sm font-semibold">
            <Crown className="h-4 w-4 mr-2" />
            Paquetes Diseñados Para Ti
          </div>
          
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-800" style={{ fontFamily: 'Fredoka, sans-serif' }}>
            Elige Tu Paquete
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600"> Perfecto</span>
          </h3>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Fredoka, sans-serif' }}>
            Desde celebraciones íntimas hasta grandes eventos, tenemos el paquete ideal para hacer realidad tu visión
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative ${pkg.color} border-2 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group overflow-hidden`}>
              
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    <Star className="inline h-4 w-4 mr-1" />
                    Más Popular
                  </div>
                </div>
              )}

              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              
              <CardHeader className="text-center relative pb-6">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {pkg.icon}
                  </div>
                </div>
                
                <CardTitle className="text-2xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  {pkg.name}
                </CardTitle>
                
                <p className="text-gray-600 text-sm mb-4" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  {pkg.subtitle}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-4xl font-bold text-gray-800" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                      {pkg.price}
                    </span>
                    <div className="text-right">
                      <div className="text-gray-500 line-through text-sm">
                        {pkg.originalPrice}
                      </div>
                      <div className="text-green-600 text-xs font-semibold">
                        ¡Ahorra {parseInt(pkg.originalPrice.slice(1)) - parseInt(pkg.price.slice(1))}!
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 relative">
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-700" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${pkg.buttonColor} text-white rounded-full font-semibold py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  Elegir {pkg.name}
                  <Sparkles className="ml-2 h-5 w-5" />
                </Button>
                
                <p className="text-center text-gray-500 text-xs" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  * Aplica Restricciones
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h4 className="text-3xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              Complementos Adicionales
            </h4>
            <p className="text-gray-600" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              Personaliza aún más tu evento con estos extras especiales
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
                <div className="text-lg font-bold text-gray-800 mb-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  {addon.name}
                </div>
                <div className="text-2xl font-bold text-purple-600" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  {addon.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="max-w-2xl mx-auto space-y-6">
              <h4 className="text-3xl font-bold" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                ¿No encuentras lo que buscas?
              </h4>
              <p className="text-xl opacity-90" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                Creamos paquetes personalizados que se adapten perfectamente a tu presupuesto y visión
              </p>
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Solicitar Paquete Personalizado
                <Crown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Packages