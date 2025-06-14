import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import {  Camera, Eye } from "lucide-react"
import Image from "next/image"

const Gallery = () => {
  const galleryItems = [
    {
      imageUrl: "/1.jpeg",
      title: "Trabajo 1"
    },
    {
      imageUrl: "/2.jpeg",
      title: "Trabajo 2",
      gradient: "from-yellow-200 via-orange-200 to-red-200"
    },
    {
      imageUrl: "/3.jpeg",
      title: "Trabajo 3",
      gradient: "from-blue-200 via-cyan-200 to-teal-200"
    },
    {
      imageUrl: "/4.jpeg",
      title: "Trabajo 4",
      gradient: "from-purple-200 via-indigo-200 to-blue-200"
    },
    {
      imageUrl: "/5.jpeg",
      title: "Trabajo 5",
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
                <div className={`aspect-[16/9] flex items-center justify-center relative overflow-hidden`}>
                  
                  {/* Imagen principal */}
                  <Image
                    src={item.imageUrl ?? "/placeholder.jpg"}
                     alt={item.title ?? "Imagen de galería"}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Overlay de texto 
                  <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center p-8 text-center text-white z-10">
                    <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                      {item.category}
                    </span>
                    <h4 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                      {item.title}
                    </h4>
                    <p className="text-white/90 font-medium max-w-2xl" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                      {item.description}
                    </p>
                  </div>*/}
                  
                  {/* Efecto hover */}
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
