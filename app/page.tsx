"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { detectTopic, getMotivationalMessage, getRandomGif } from "@/lib/helpers"
import Image from "next/image"
import { Heart } from "lucide-react"

export default function Home() {
  const [complaint, setComplaint] = useState("")
  const [response, setResponse] = useState<{
    message: string
    topic: string
    gif: string
  } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!complaint.trim()) return

    setIsSubmitting(true)

    // Detect the topic of the complaint
    const topic = detectTopic(complaint)

    // Get a motivational message based on the topic
    const message = getMotivationalMessage(topic)

    // Get a random GIF
    const gif = getRandomGif()

    // Simulate processing time
    setTimeout(() => {
      setResponse({ message, topic, gif })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gray-900/70 border-purple-500 text-white">
        <CardHeader className="text-center border-b border-purple-500/30 pb-4">
          <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
            <Heart className="text-pink-500 fill-pink-500" />
            <span className="bg-gradient-to-r from-pink-500 to-purple-400 text-transparent bg-clip-text">
              Curhat Yuk
            </span>
            <Heart className="text-pink-500 fill-pink-500" />
          </CardTitle>
          <p className="text-gray-300 mt-2 text-sm">
            Kadang kita cuma butuh tempat buat cerita... dan ini web-nya. Cukup tulis unek-unek kamu, dan biarkan sistem
            ini membalas kamu dengan kata-kata penyemangat yang manis & relate~
          </p>
        </CardHeader>
        <CardContent className="pt-6">
          {!response ? (
            <div className="space-y-4">
              <Textarea
                placeholder="Ceritakan apa yang kamu rasakan..."
                className="min-h-[150px] bg-gray-800 border-purple-500/50 focus:border-pink-500 text-white"
                value={complaint}
                onChange={(e) => setComplaint(e.target.value)}
              />
              <Button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                disabled={isSubmitting || !complaint.trim()}
              >
                {isSubmitting ? "Membaca curhatanmu..." : "Kirim Curhatan"}
              </Button>
            </div>
          ) : (
            <div className="space-y-6 text-center">
              <div className="p-4 rounded-lg bg-gray-800/50 border border-purple-500/30">
                <p className="text-lg font-medium text-gray-200">{response.message}</p>
                <p className="text-xs text-gray-400 mt-2">Topik: {response.topic}</p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
                  <Image
                    src={"https://tenor.com/view/b-eat-saber-gif-26237883"}
                    alt="Motivational GIF"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <Button
                onClick={() => setResponse(null)}
                variant="outline"
                className="border-pink-500/50 text-pink-400 hover:bg-pink-500/10"
              >
                Curhat Lagi
              </Button>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center border-t border-purple-500/30 pt-4">
          <p className="text-xs text-gray-400">
            Dibuat dengan cinta oleh Fachri Ahsani •
            <a href="https://github.com/fchrii/curhat" className="text-pink-400 hover:text-pink-300 ml-1">
              GitHub
            </a>
          </p>
        </CardFooter>
      </Card>
    </main>
  )
}
