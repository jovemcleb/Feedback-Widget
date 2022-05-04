import { useState } from "react";

import CloseButton from "../CloseButton/CloseButton";
import bugImageUrl from "../../Assets/bug.svg";
import ideaImageUrl from "../../Assets/idea.svg";
import thoughtImageUrl from "../../Assets/thought.svg";
import { FeedBackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedBackContentStep } from "./Steps/FeedBackContentStep";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento',
    },
  },
}
export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu Feedback</span>
        <CloseButton />
      </header>

      {!feedbackType
        ? (
          <FeedBackTypeStep onFeedbackTypeChanged={setFeedbackType} />
        )
        : (
          <FeedBackContentStep />
        )
      }

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pelo <a className="underline underline-offset-2" href="https://www.linkedin.com/in/caleb-lima/">Cleb</a>
      </footer>
    </div >
  )
}