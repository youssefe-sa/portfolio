'use client'

import React from 'react'
import Image from 'next/image'
import { translations, Language } from '@/lib/translations'

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  detail: string
  results: string[]
  tags: string[]
  budget: string
  timeline: string
}

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
  language: Language
}

export default function ProjectModal({ project, onClose, language }: ProjectModalProps) {
  if (!project) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in-up">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 right-4 float-right z-10 p-2 hover:bg-secondary rounded-lg transition-colors"
        >
          <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div className="relative h-80 w-full overflow-hidden">
          <Image
            src={project.image || '/placeholder.svg'}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3 border border-primary/20">
              {project.category}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">{project.title}</h2>
            <p className="text-lg text-muted-foreground">{project.description}</p>
          </div>

          {/* Meta Information - Professional Layout */}
          <div className="grid grid-cols-2 gap-4 mb-8 p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/10">
            <div className="flex flex-col">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-2">Budget</p>
              <p className="text-2xl font-bold text-primary">{project.budget}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-2">Timeline</p>
              <p className="text-2xl font-bold text-accent">{project.timeline}</p>
            </div>
          </div>

          {/* Detail - Full Description */}
          <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/10 border border-primary/10">
            <h3 className="text-lg font-bold text-foreground mb-3">Project Overview</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">{project.detail}</p>
          </div>

          {/* Results - Grid Display */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-foreground mb-4">Results Achieved</h3>
            <div className="grid grid-cols-2 gap-4">
              {project.results.map((result, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-primary/15 hover:border-primary/30 transition-colors duration-300">
                  <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <span className="text-sm font-semibold text-foreground leading-relaxed">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies - Professional Display */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-foreground mb-4">Technologies & Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full text-sm font-semibold border border-primary/20 hover:border-primary/40 transition-colors duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border mb-6"></div>

          {/* CTA Button */}
          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-gradient-to-r from-primary to-primary/90 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
          >
            {language === 'fr' ? 'Commencer un projet similaire' : 'Start Similar Project'}
          </button>
        </div>
      </div>
    </div>
  )
}
