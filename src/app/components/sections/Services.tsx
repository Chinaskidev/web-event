// src/components/sections/Services.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  PartyPopper,
  Gift,
  Crown,
  Cake,
  Heart,
  Sparkles,
  ArrowRight
} from "lucide-react"

const Services = () => {
  const services = [
    {
      icon: <PartyPopper className="h-10 w-10 text-pink-500" />,
      title: "Decoración de Fiestas",
      description: "Transformamos tu evento en algo mágico con hermosas decoraciones de globos personalizadas",
      features: ["Arcos de globos", "Columnas decorativas", "Centros de mesa", "Globos personalizados"],
      gradient: "from-pink-50 to-pink-100"
    },
    {
      icon: <Gift className="h-10 w-10 text-yellow-500" />,
      title: "Arcos Espectaculares",
      description: "Arcos impresionantes para bodas, cumpleaños y eventos especiales que marcan la diferencia",
      features: ["Arcos orgánicos", "Arcos clásicos", "Entrada principal", "Foto backdrop"],
      gradient: "from-yellow-50 to-yellow-100"
    },
    {
      icon: <Crown className="h-10 w-10 text-green-500" />,
      title: "Eventos Premium",
      description: "Decoraciones elegantes y sofisticadas para eventos corporativos y celebraciones VIP",
      features: ["Diseño exclusivo", "Globos metálicos", "Iluminación LED", "Servicio premium"],
      gradient: "from-green-50 to-green-100"
    },
    {
      icon: <Cake className="h-10 w-10 text-purple-500" />,
      title: "Celebraciones Especiales",
      description: "Cumpleaños, baby showers, graduaciones y toda ocasión que merece ser celebrada",
      features: ["Temáticas personalizadas", "Números gigantes", "Figuras especiales", "Kit completo"],
      gradient: "from-purple-50 to-purple-100"
    }
  ]

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 px-6 py-3 rounded-full text-sm font-semibold">
            <Sparkles className="h-4 w-4 mr-2" />
            Nuestros Servicios Especializados
          </div>
          
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-800" style={{ fontFamily: 'Fredoka, sans-serif' }}>
            Servicios que Hacen la
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"> Diferencia</span>
          </h3>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Fredoka, sans-serif' }}>
            Ofrecemos una amplia gama de servicios especializados para hacer de tu evento algo verdaderamente memorable y único
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group bg-gradient-to-br ${service.gradient} border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden relative`}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16 transition-transform duration-500 group-hover:scale-150"></div>
              
              <CardHeader className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-white rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <Heart className="h-5 w-5 text-gray-300 group-hover:text-pink-400 transition-colors duration-300" />
                </div>
                
                <CardTitle className="text-2xl font-bold text-gray-800 mb-3" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-gray-600 text-base leading-relaxed" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                      <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="ghost" 
                  className="group-hover:bg-white/80 text-gray-700 hover:text-pink-600 font-semibold transition-all duration-300 p-0"
                >
                  Conocer más
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-2xl mx-auto space-y-6">
            <h4 className="text-3xl font-bold" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              ¿Tienes una idea especial en mente?
            </h4>
            <p className="text-xl opacity-90" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              Trabajamos contigo para crear decoraciones únicas y personalizadas que superen tus expectativas
            </p>
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-pink-600 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Solicitar Cotización Personalizada
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services