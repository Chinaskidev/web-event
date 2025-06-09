// src/components/sections/About.tsx
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Heart, Star, Trophy, Users, Clock } from "lucide-react"

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
      icon: <Sparkles className="h-6 w-6 text-pink-500" />
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
            Sobre
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"> Nosotros</span>
          </h3>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Fredoka, sans-serif' }}>
            En Lusun Balloons, llevamos más de 5 años creando momentos mágicos con nuestras decoraciones únicas. 
            Cada evento es una oportunidad para expresar creatividad, alegría y hacer realidad los sueños más coloridos de nuestros clientes.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          
          {/* Story Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h4 className="text-3xl font-bold text-gray-800" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                Nuestra Pasión por los Detalles
              </h4>
              
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                Todo comenzó con un sueño: transformar eventos ordinarios en experiencias extraordinarias. 
                Desde nuestros humildes inicios, hemos crecido hasta convertirnos en los especialistas más 
                confiables de El Salvador en decoración con globos.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                Cada proyecto es único, desde íntimas celebraciones familiares hasta grandes eventos corporativos. 
                Nuestro equipo de artistas especializados combina técnica, creatividad y pasión para crear 
                decoraciones que no solo embellecen, sino que emocionan y crean recuerdos inolvidables.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h5 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                Nuestros Valores
              </h5>
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg">
                    {value.icon}
                  </div>
                  <div>
                    <h6 className="font-bold text-gray-800 mb-1" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                      {value.title}
                    </h6>
                    <p className="text-gray-600 text-sm" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-pink-100 via-yellow-100 to-green-100 rounded-3xl p-8 shadow-xl">
              <div className="aspect-square bg-white rounded-2xl flex items-center justify-center relative overflow-hidden">
                
                {/* Placeholder content */}
                <div className="text-center space-y-6 p-8">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="w-20 h-20 bg-pink-100 rounded-2xl flex items-center justify-center">
                      <Heart className="h-10 w-10 text-pink-500" />
                    </div>
                    <div className="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center">
                      <Star className="h-10 w-10 text-yellow-500" />
                    </div>
                    <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center">
                      <Sparkles className="h-10 w-10 text-green-500" />
                    </div>
                    <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center">
                      <Trophy className="h-10 w-10 text-purple-500" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-600 font-medium text-lg" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                      🎨 Foto del equipo
                    </p>
                    <p className="text-gray-500 text-sm" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                      o proceso creativo
                    </p>
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