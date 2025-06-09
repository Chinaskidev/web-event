import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import { Heart, Star, Sparkles, Camera, Eye } from "lucide-react"

const Gallery = () => {
  const galleryItems = [
    {
      title: "Boda Elegante",
      description: "Arcos románticos en tonos pastel",
      category: "Bodas",
      gradient: "from-pink-200 via-rose-200 to-red-200"
    },
    {
      title: "Cumpleaños Infantil",
      description: "Decoración colorida y divertida",
      category: "Cumpleaños",
      gradient: "from-yellow-200 via-orange-200 to-red-200"
    },
    {
      title: "Baby Shower",
      description: "Delicada decoración en azul y blanco",
      category: "Baby Shower",
      gradient: "from-blue-200 via-cyan-200 to-teal-200"
    },
    {
      title: "Evento Corporativo",
      description: "Elegancia profesional",
      category: "Corporativo",
      gradient: "from-purple-200 via-indigo-200 to-blue-200"
    },
    {
      title: "Quinceañera",
      description: "Decoración de ensueño",
      category: "Quinceañeras",
      gradient: "from-pink-200 via-purple-200 to-indigo-200"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-6 py-3 rounded-full text-sm font-semibold">
            <Camera className="h-4 w-4 mr-2" />
            Nuestros Trabajos Destacados
          </div>

          <h3 className="text-4xl lg:text-5xl font-bold text-gray-800" style={{ fontFamily: 'Fredoka, sans-serif' }}>
            Galería de
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600"> Momentos Mágicos</span>
          </h3>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Fredoka, sans-serif' }}>
            Descubre algunos de nuestros trabajos más hermosos y déjate inspirar para tu próximo evento especial
          </p>
        </div>

        {/* Main Carousel */}
        <div className="max-w-5xl mx-auto mb-12">
          <Carousel className="w-full">
            <CarouselContent>
              {galleryItems.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-4">
                    <Card className="border-0 shadow-2xl overflow-hidden group">
                      <CardContent className="p-0 relative">
                        <div className={`aspect-[16/9] bg-gradient-to-br ${item.gradient} flex items-center justify-center relative overflow-hidden`}>

                          {/* Background decorations */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-8 left-8 w-6 h-6 bg-white rounded-full animate-pulse"></div>
                            <div className="absolute top-16 right-12 w-4 h-4 bg-white rounded-full animate-bounce"></div>
                            <div className="absolute bottom-12 left-16 w-8 h-8 bg-white rounded-full animate-ping"></div>
                            <div className="absolute bottom-8 right-8 w-5 h-5 bg-white rounded-full animate-pulse"></div>
                          </div>

                          {/* Content */}
                          <div className="text-center space-y-6 p-8 relative z-10">
                            <div className="flex justify-center space-x-4 mb-6">
                              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                                <Heart className="h-10 w-10 text-pink-500" />
                              </div>
                              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 delay-100">
                                <Star className="h-10 w-10 text-yellow-500" />
                              </div>
                              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 delay-200">
                                <Sparkles className="h-10 w-10 text-purple-500" />
                              </div>
                            </div>

                            <div className="space-y-3">
                              <span className="inline-block bg-white/20 text-gray-700 px-4 py-1 rounded-full text-sm font-semibold">
                                {item.category}
                              </span>
                              <h4 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                                {item.title}
                              </h4>
                              <p className="text-gray-700 font-medium" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                                {item.description}
                              </p>
                            </div>
                          </div>

                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="bg-white/90 p-4 rounded-full shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                              <Eye className="h-8 w-8 text-gray-700" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

      </div>
    </section>
  )
}

export default Gallery
