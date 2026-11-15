"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  items: FAQItem[]
}

export function FAQSection({ title = "FAQ", items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="w-full px-6 md:px-10 py-16 md:py-24">
      <h2 className="font-heading text-2xl md:text-3xl mb-8">{title}</h2>
      
      <div className="max-w-3xl">
        {items.map((item, index) => (
          <div key={index} className="border-b border-foreground/10">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full py-5 flex items-center justify-between text-left"
            >
              <span className="font-heading text-sm md:text-base pr-4">{item.question}</span>
              <ChevronDown 
                className={`w-5 h-5 flex-shrink-0 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="pb-5">
                <p className="font-body text-sm text-foreground/70 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

// Predefined FAQ items for different pages
export const landingPageFAQ: FAQItem[] = [
  {
    question: "Wie kann ich ein Kunstwerk kaufen?",
    answer: "Sie können Kunstwerke direkt über meinen Online-Shop erwerben. Wählen Sie einfach das gewünschte Werk aus, legen Sie es in den Warenkorb und folgen Sie dem Checkout-Prozess. Bei Fragen stehe ich Ihnen gerne über das Kontaktformular zur Verfügung."
  },
  {
    question: "Nehmen Sie Auftragsarbeiten an?",
    answer: "Ja, ich nehme gerne Auftragsarbeiten an. Kontaktieren Sie mich über das Kontaktformular mit Ihrer Idee und Ihren Vorstellungen. Gemeinsam besprechen wir dann die Details wie Größe, Medium, Stil und Budget."
  },
  {
    question: "Wie läuft eine Zusammenarbeit ab?",
    answer: "Nach einem ersten Gespräch zur Klärung Ihrer Wünsche erstelle ich zunächst Skizzen oder Entwürfe. Nach Ihrer Freigabe beginne ich mit der Umsetzung. Sie erhalten regelmäßige Updates zum Fortschritt. Die Fertigstellung dauert je nach Komplexität zwischen 2-8 Wochen."
  },
  {
    question: "Welche Zahlungsmethoden werden akzeptiert?",
    answer: "Ich akzeptiere Zahlung per Überweisung, PayPal und Kreditkarte. Bei Auftragsarbeiten ist eine Anzahlung von 50% vor Beginn üblich, der Rest wird bei Fertigstellung fällig."
  },
  {
    question: "Wie werden die Kunstwerke versendet?",
    answer: "Alle Kunstwerke werden sorgfältig verpackt und versichert versendet. Originale werden mit säurefreien Materialien geschützt. Sie erhalten eine Tracking-Nummer sobald Ihr Paket verschickt wurde."
  },
]

export const exhibitionFAQ: FAQItem[] = [
  {
    question: "Kann ich Kunstwerke aus der Exhibition kaufen?",
    answer: "Ja, die meisten ausgestellten Werke sind käuflich zu erwerben. Klicken Sie auf ein Kunstwerk, um Details zu sehen und die Option 'Original kaufen' zu nutzen. Einige Werke sind auch als Prints verfügbar."
  },
  {
    question: "In welchen Medien arbeiten Sie?",
    answer: "Ich arbeite hauptsächlich mit Acryl, Aquarell, Kohle und Bleistift. Jedes Medium hat seinen eigenen Charakter und eignet sich für unterschiedliche Ausdrucksformen. In meiner Exhibition können Sie Werke nach Medium filtern."
  },
  {
    question: "Gibt es die Werke auch als Druck?",
    answer: "Viele meiner Werke sind als hochwertige Fine Art Prints erhältlich. Diese werden auf archivfähigem Papier gedruckt und sind in verschiedenen Größen verfügbar. Besuchen Sie den Shop-Bereich für Prints."
  },
  {
    question: "Bieten Sie Ausstellungen für Events an?",
    answer: "Ja, ich bin offen für Ausstellungen bei Events, in Galerien oder Unternehmen. Kontaktieren Sie mich für Details zur Verfügbarkeit und den Konditionen einer Zusammenarbeit."
  },
  {
    question: "Wie kann ich über neue Werke informiert werden?",
    answer: "Folgen Sie mir auf Social Media oder kontaktieren Sie mich, um in meinen Newsletter aufgenommen zu werden. So erfahren Sie als Erstes von neuen Werken und kommenden Ausstellungen."
  },
]

export const shopFAQ: FAQItem[] = [
  {
    question: "Was ist der Unterschied zwischen Originals und Prints?",
    answer: "Originals sind einzigartige, handgefertigte Kunstwerke - jedes existiert nur einmal. Prints sind hochwertige Reproduktionen auf Fine Art Papier, die das Original detailgetreu wiedergeben und in limitierten Auflagen verfügbar sind."
  },
  {
    question: "Welche Größen sind bei Prints verfügbar?",
    answer: "Prints sind in verschiedenen Standardgrößen erhältlich: A4, A3, A2 und A1. Auf Anfrage sind auch Sondergrößen möglich. Die verfügbaren Größen werden bei jedem Produkt angezeigt."
  },
  {
    question: "Wie lange dauert der Versand?",
    answer: "Innerhalb Deutschlands beträgt die Lieferzeit 3-5 Werktage. EU-weit 5-10 Werktage. Prints werden gerollt in stabilen Versandrohren verschickt, Originals werden flach und besonders geschützt verpackt."
  },
  {
    question: "Kann ich Produkte zurückgeben?",
    answer: "Sie haben ein 14-tägiges Widerrufsrecht. Bei Prints ist eine Rückgabe möglich, sofern diese ungeöffnet und unbeschädigt sind. Bei Originalen und personalisierten Produkten kontaktieren Sie mich bitte für individuelle Lösungen."
  },
  {
    question: "Sind die Sticker wasserfest?",
    answer: "Ja, alle Sticker sind auf hochwertigem, wasserfestem Vinyl gedruckt und UV-beständig. Sie eignen sich für den Innen- und Außenbereich sowie für Laptops, Wasserflaschen und mehr."
  },
]
