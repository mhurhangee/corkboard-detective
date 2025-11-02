import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Search } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>
            <div className='flex items-center gap-2'>
              <Search />Welcome to My App
            </div>
          </CardTitle>
          <CardDescription>
            This is a holding page. More content coming soon!
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button>Get Started</Button>
        </CardContent>
      </Card>
    </main>
  )
}
