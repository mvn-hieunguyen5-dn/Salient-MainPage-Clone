import React, { useState } from "react";
import FAQ from "./FAQ";

export default function Index() {
  interface FAQ {
    id: number;
    question: String;
    answer: String | JSX.Element;
  }
  const FAQs: FAQ[] = [
    {
      id: 1,
      question: "Was this site built with Salient?",
      answer:
        "Yes, it was built 100% using Salient — All of the exciting micro animations and interactions were created using settings available within the page builder. Each section is also available to import to use as desired via the Salient studio template library.",
    },
    {
      id: 2,
      question: "Where can I purchase Salient?",
      answer:
        "Salient is sold exclusively on ThemeForest, a marketplace by Envato. Downloading a copy from other sources is illegal and likely unsafe.",
    },
    {
      id: 3,
      question: "What is included with my purchase?",
      answer: (
        <ul>
          <li>A copy of the Salient WordPress theme</li>
          <li>Access to import any of the demos shown above</li>
          <li>Bundled in-house and third-party plugins</li>
          <li>6 months free of professional support (can be extended after)</li>
          <li>
            <strong>Access to all future updates for free</strong> — including
            all new features, templates, and fixes!
          </li>
        </ul>
      ),
    },
    {
      id: 4,
      answer:
        "We have a dedicated support forum with a team of agents to assist you located here. We also recommend checking through the documentation to find answers to common questions.",
      question: "How can I get support after purchasing?",
    },
    {
      id: 5,
      question: "Why should I trust ThemeNectar?",
      answer:
        "We’re a passionate team of experienced developers and we care about Salient, a lot. Since its initial release in 2013, Salient has seen consistent evolution and has become one of the most popular WordPress themes available, with over 130,000 licenses sold. People keep coming back to use Salient for more projects because of the quality we bring and the results they are able to achieve.",
    },
  ];

  const [openedLine, setOpenLine] = useState(1);

  return (
    <section className="section-FAQ">
      <div className="FAQ-container">
        <h3 className="tittle">Frequently asked questions  </h3>
        {FAQs.map((F) => (
          <FAQ
            key={F.id}
            id={F.id}
            question={F.question}
            answer={F.answer}
            openedLine={openedLine}
            setOpenLine={(value: number) =>
              setOpenLine(value === openedLine ? 0 : value)
            }
          />
        ))}
      </div>
    </section>
  );
}
