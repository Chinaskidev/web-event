// src/components/sections/About.tsx
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Heart, Star, Trophy, Users, Clock } from "lucide-react"
import Image from "next/image"

const About = () => {
  const stats = [
    { 
      icon: <Trophy className="h-8 w-8 text-pink-500" />,
      number: "500+", 
      label: "Eventos Realizados", 
      description: "Cada uno único y especial",
      color: "text-pink-500",
      bg: "bg-pink-50"
    },
    { 
      icon: <Heart className="h-8 w-8 text-yellow-500" />,
      number: "100%", 
      label: "Clientes Satisfechos", 
      description: "Sonrisas garantizadas",
      color: "text-yellow-500",
      bg: "bg-yellow-50"
    },
    { 
      icon: <Clock className="h-8 w-8 text-green-500" />,
      number: "5+", 
      label: "Años de Experiencia", 
      description: "Perfeccionando nuestro arte",
      color: "text-green-500",
      bg: "bg-green-50"
    },
    { 
      icon: <Users className="h-8 w-8 text-purple-500" />,
      number: "50+", 
      label: "Empresas Confían", 
      description: "En nuestro servicio",
      color: "text-purple-500",
      bg: "bg-purple-50"
    }
  ]
   
  const values = [
    {
      title: "Creatividad",
      description: "Cada evento es una obra de arte única que refleja tu personalidad y visión",
      icon: <Sparkles className="h-6 w-6 text-pink-500"/>
    
    },
    {
      title: "Calidad",
      description: "Utilizamos los mejores materiales y técnicas para garantizar resultados espectaculares",
      icon: <Star className="h-6 w-6 text-yellow-500" />
    },
    {
      title: "Compromiso",
      description: "Tu satisfacción es nuestra prioridad, trabajamos hasta superar tus expectativas",
      icon: <Heart className="h-6 w-6 text-green-500" />
    }
  ]

  return (
    <section id="sobre-nosotros" className="py-20 bg-white/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 px-6 py-3 rounded-full text-sm font-semibold">
            <Heart className="h-4 w-4 mr-2" />
            Conoce Nuestra Historia
          </div>
          
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-800" style={{ fontFamily: 'Fredoka, sans-serif' }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"> Sobre Nosotros</span>
          </h3>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Fredoka, sans-serif' }}>
            En Lusun Balloons, llevamos más de 5 años creando momentos mágicos con nuestras decoraciones únicas. 
            Cada evento es una oportunidad para expresar creatividad, alegría y hacer realidad los sueños más coloridos de nuestros clientes.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          
          {/* Story Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-4xl lg:text-5xl font-bold text-gray-800" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Nuestra Pasión por los detalles.</span>
              </h3>
          
              
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                Todo comenzó con un sueño: transformar eventos ordinarios en experiencias extraordinarias. 
                Desde nuestros humildes inicios, hemos crecido hasta convertirnos en los especialistas más 
                confiables de Guatemala en decoración con globos.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                Cada proyecto es único, desde íntimas celebraciones familiares hasta grandes eventos corporativos. 
                Nuestra especialidad combina técnicas, creatividad y pasión para crear 
                decoraciones que no solo embellecen, sino que emocionan y crean recuerdos inolvidables.
              </p>
            </div>
          </div>

          {/* Visual Section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-pink-100 via-yellow-100 to-green-100 rounded-3xl p-8 shadow-xl">
              <div className="aspect-square bg-white rounded-2xl flex items-center justify-center relative overflow-hidden">
                
                {/* Placeholder content */}
                <div className="text-center space-y-6 p-8">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                  </div>
                  <div className="space-y-2 justify-center mt-4 mx-auto">
                    <Image
                        src="/garfiel.jpeg"
                        alt="Foto de evento"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-md" 
                      />
                    </div>
                </div>
                
                {/* Background decorations */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <div className="absolute top-4 left-4 w-4 h-4 bg-pink-400 rounded-full"></div>
                  <div className="absolute top-8 right-8 w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="absolute bottom-4 left-8 w-5 h-5 bg-green-400 rounded-full"></div>
                  <div className="absolute bottom-8 right-4 w-2 h-2 bg-purple-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section - Now placed below the image */}
          <div className="lg:col-span-2 space-y-6 mt-8 text-center">
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-800" style={{ fontFamily: 'Fredoka, sans-serif' }}>
             <span className="text-transparent text-center bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Nuestros Valores</span>
            </h3>          
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex flex-col items-center space-y-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 h-full">
                  <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg">
                    {value.icon}
                  </div>
                  <div>
                    <h6 className="font-bold text-gray-800 mb-2 text-lg text-justify-center" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                      {value.title}
                    </h6>
                    <p className="text-gray-600" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className={`text-center p-6 ${stat.bg} border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}>
              <CardContent className="p-0 space-y-4">
                <div className={`inline-flex p-4 ${stat.bg} rounded-full shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div>
                  <div className={`text-4xl font-bold ${stat.color} mb-2`} style={{ fontFamily: 'Fredoka, sans-serif' }}>
                    {stat.number}
                  </div>
                  <div className="text-gray-800 font-bold text-lg mb-1" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                    {stat.label}
                  </div>
                  <div className="text-gray-600 text-sm" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                    {stat.description}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About