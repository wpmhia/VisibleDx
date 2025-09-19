'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { 
  HelpCircle, 
  Search, 
  BookOpen, 
  PlayCircle,
  FileText,
  ExternalLink,
  Lightbulb,
  Video,
  MessageCircle
} from 'lucide-react'
import { useTranslation } from '@/lib/language-context'

interface HelpItem {
  id: string
  title: string
  content: string
  category: 'getting-started' | 'modules' | 'troubleshooting' | 'medical'
  keywords: string[]
  videoUrl?: string
  relatedLinks?: { title: string; url: string }[]
}

interface HelpSystemProps {
  context?: string // Current page/module context
}

export default function HelpSystem({ context }: HelpSystemProps) {
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const helpItems: HelpItem[] = [
    {
      id: 'getting-started',
      title: 'Getting Started with InvisibleDx',
      content: `InvisibleDx is an educational tool for learning ME/CFS, Long COVID, and POTS diagnostic criteria. 

Start with the "Educational Simulation" for a guided experience, or choose individual modules to focus on specific skills.

Remember: This is an educational tool only - NOT for actual patient care.`,
      category: 'getting-started',
      keywords: ['start', 'begin', 'intro', 'first', 'how to'],
      relatedLinks: [
        { title: 'CDC ME/CFS Guidelines', url: 'https://www.cdc.gov/me-cfs/' },
        { title: 'WHO Long COVID Definition', url: 'https://www.who.int/publications/i/item/9789240025035' }
      ]
    },
    {
      id: 'initial-screening',
      title: 'Using the Initial Screening Module',
      content: `The Initial Screening module simulates a chief complaint and symptom review process:

1. Review the 16 assessment questions
2. Select responses as if you were a patient
3. Review the educational risk assessment
4. Follow suggested next steps

This helps you understand symptom patterns and screening efficiency.`,
      category: 'modules',
      keywords: ['screening', 'questions', 'symptoms', 'quick'],
      videoUrl: '#tutorial-screening'
    },
    {
      id: 'orthostatic-vitals',
      title: 'Orthostatic Vitals Training',
      content: `Learn the NASA lean test protocol for POTS assessment:

1. Use either manual or camera-based heart rate monitoring
2. Follow the 10-minute protocol timing
3. Record supine and standing measurements
4. Review POTS diagnostic criteria

This module teaches proper orthostatic vital sign assessment techniques.`,
      category: 'modules',
      keywords: ['stand test', 'pots', 'orthostatic', 'heart rate', 'vitals'],
    },
    {
      id: 'pem-assessment',
      title: 'Post-Exertional Malaise (PEM) Training',
      content: `PEM is the hallmark symptom of ME/CFS. This module teaches:

1. How to identify PEM patterns
2. Activity triggers and thresholds
3. Recovery timeframes
4. Impact on daily functioning

Understanding PEM is crucial for ME/CFS recognition and management education.`,
      category: 'modules',
      keywords: ['pem', 'fatigue', 'malaise', 'mecfs', 'energy'],
    },
    {
      id: 'diagnostic-criteria',
      title: 'Applying Diagnostic Criteria',
      content: `Learn to apply validated diagnostic criteria:

• CDC ME/CFS case definition
• WHO Long COVID clinical definition  
• ESC POTS guidelines
• ICD-10 coding principles

This educational module demonstrates systematic criteria application.`,
      category: 'medical',
      keywords: ['criteria', 'diagnosis', 'cdc', 'who', 'esc', 'guidelines'],
    },
    {
      id: 'troubleshooting-camera',
      title: 'Camera Not Working',
      content: `If the camera heart rate feature isn't working:

1. Check browser permissions for camera access
2. Ensure good lighting conditions
3. Place finger gently over camera lens
4. Keep finger still during measurement
5. Try manual mode if camera continues to fail

Most issues are resolved by checking camera permissions and lighting.`,
      category: 'troubleshooting',
      keywords: ['camera', 'ppg', 'heart rate', 'permission', 'not working'],
    },
    {
      id: 'data-privacy',
      title: 'Data Privacy and Training Use',
      content: `InvisibleDx prioritizes educational privacy:

• No real patient data should ever be entered
• Training data stays in your browser locally
• No data is transmitted to external servers
• This tool is for education only, not patient care

Always use simulated scenarios and educational cases only.`,
      category: 'getting-started',
      keywords: ['privacy', 'data', 'educational', 'local', 'patient'],
    }
  ]

  const categories = [
    { id: 'all', label: 'All Topics' },
    { id: 'getting-started', label: 'Getting Started' },
    { id: 'modules', label: 'Training Modules' },
    { id: 'medical', label: 'Medical Guidelines' },
    { id: 'troubleshooting', label: 'Troubleshooting' }
  ]

  const filteredItems = helpItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return matchesCategory && matchesSearch
  })

  const contextualHelp = context ? helpItems.filter(item => 
    item.keywords.some(keyword => context.toLowerCase().includes(keyword))
  ).slice(0, 2) : []

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <HelpCircle className="h-4 w-4" />
          Help
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Help & Documentation
          </DialogTitle>
          <DialogDescription>
            Find answers and learn how to use InvisibleDx educational modules
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-hidden">
          {/* Search and Filters */}
          <div className="space-y-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search help topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Contextual Help */}
          {contextualHelp.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <Lightbulb className="h-4 w-4" />
                Relevant to Current Page
              </h3>
              <div className="space-y-2">
                {contextualHelp.map(item => (
                  <div key={item.id} className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <h4 className="font-medium text-blue-900 text-sm mb-1">{item.title}</h4>
                    <p className="text-blue-700 text-xs">{item.content.slice(0, 150)}...</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Help Content */}
          <div className="overflow-y-auto flex-1">
            <Accordion type="single" collapsible className="w-full">
              {filteredItems.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        {item.category === 'getting-started' && <PlayCircle className="h-4 w-4 text-green-600" />}
                        {item.category === 'modules' && <FileText className="h-4 w-4 text-blue-600" />}
                        {item.category === 'medical' && <BookOpen className="h-4 w-4 text-purple-600" />}
                        {item.category === 'troubleshooting' && <HelpCircle className="h-4 w-4 text-amber-600" />}
                        <span className="font-medium">{item.title}</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-2">
                      <div className="prose prose-sm max-w-none">
                        {item.content.split('\n').map((paragraph, index) => (
                          <p key={index} className="text-gray-700 mb-2">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      
                      {item.videoUrl && (
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <Video className="h-4 w-4" />
                          Watch Tutorial
                        </Button>
                      )}
                      
                      {item.relatedLinks && item.relatedLinks.length > 0 && (
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-2">Related Resources:</p>
                          <div className="space-y-1">
                            {item.relatedLinks.map((link, index) => (
                              <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
                              >
                                <ExternalLink className="h-3 w-3" />
                                {link.title}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex flex-wrap gap-1">
                        {item.keywords.map((keyword, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Support Contact */}
          <div className="border-t pt-4 mt-6">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Can't find what you're looking for?
              </p>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}