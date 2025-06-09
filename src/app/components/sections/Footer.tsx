"use client";
import { Sparkles, Heart, Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <MessageCircle className="h-5 w-5" />, href: "#", label: "WhatsApp" }
  ]

  const quickLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Servicios", href: "#servicios" },
    { name: "Paquetes", href: "#paquetes" },
    { name: "Galería", href: "#galeria" },
    { name: "Contacto", href: "#contacto" }
  ]

  const contactInfo = [
    { icon: <Phone className="h-4 w-4" />, text: "+503 1234-5678" },
    { icon: <Mail className="h-4 w-4" />, text: "info@lusunballoons.com" },
    { icon: <MapPin className="h-4 w-4" />, text: "Santa Tecla, El Salvador" }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-500/5 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full translate-x-48 translate-y-48"></div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                  <Sparkles className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h5 className="text-2xl font-bold" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                    Lusun Balloons
                  </h5>
                  <p className="text-pink-300 text-sm font-medium" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                    Eventos Mágicos
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed max-w-md" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                Especialistas en crear momentos mágicos e inolvidables. Cada evento es una oportunidad para hacer realidad tus sueños más coloridos.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-pink-500 hover:border-pink-500 hover:text-white transition-all duration-300 rounded-full w-10 h-10 p-0"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h6 className="text-lg font-bold text-white" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                Enlaces Rápidos
              </h6>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-pink-300 transition-colors duration-200 text-left"
                      style={{ fontFamily: 'Fredoka, sans-serif' }}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h6 className="text-lg font-bold text-white" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                Contacto
              </h6>
              <ul className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <li key={index} className="flex items-center space-x-3 text-gray-300">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                      {contact.icon}
                    </div>
                    <span style={{ fontFamily: 'Fredoka, sans-serif' }}>
                      {contact.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                onClick={() => scrollToSection('#contacto')}
              >
                ¡Contáctanos Ya!
                <Heart className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  © {currentYear} Lusun Balloons. Todos los derechos reservados.
                </p>
                <p className="text-gray-500 text-sm mt-1" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  Diseñado con amor para hacer tus sueños realidad
                </p>
              </div>

              <div className="flex items-center space-x-2 text-pink-300">
                <span className="text-sm" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                  Haciendo que tus sueños vuelen alto
                </span>
                <Sparkles className="h-4 w-4 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
