import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronRight, X } from 'lucide-react';

export type CodexResponseItem = {
  title: string;
  copy: string;
};

type CodexResponseModalProps = {
  isOpen: boolean;
  onClose: () => void;
  prompt: string;
  duration?: string;
  intro: string;
  items: CodexResponseItem[];
  ariaLabel?: string;
};

export function CodexResponseModal({
  isOpen,
  onClose,
  prompt,
  duration,
  intro,
  items,
  ariaLabel = 'Codex response demo'
}: CodexResponseModalProps) {
  const [typedCharacters, setTypedCharacters] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const textLength = useMemo(() =>
  intro.length +
  items.reduce((total, item, index) =>
  total + `${index + 1}. `.length + item.title.length + item.copy.length,
  0),
  [intro, items]);

  useEffect(() => {
    if (!isOpen) {
      setTypedCharacters(0);
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    setTypedCharacters(0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    const intervalId = window.setInterval(() => {
      setTypedCharacters((current) => {
        if (current >= textLength) {
          window.clearInterval(intervalId);
          return current;
        }

        return Math.min(current + 2, textLength);
      });
    }, 28);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      window.clearInterval(intervalId);
    };
  }, [isOpen, onClose, textLength]);

  useEffect(() => {
    const scrollElement = scrollRef.current;

    if (!scrollElement) {
      return;
    }

    scrollElement.scrollTop = scrollElement.scrollHeight;
  }, [typedCharacters]);

  const response = useMemo(() => {
    let offset = 0;

    const reveal = (text: string) => {
      const start = offset;
      offset += text.length;

      if (typedCharacters <= start) {
        return '';
      }

      return text.slice(0, Math.min(text.length, typedCharacters - start));
    };

    const visibleIntro = reveal(intro);

    return (
      <div className="retrieve-context-response">
        {visibleIntro ? <p>{visibleIntro}</p> : null}
        <ol>
          {items.map((item, index) => {
            const number = reveal(`${index + 1}. `);
            const title = reveal(item.title);
            const copy = reveal(item.copy);

            if (!number && !title && !copy) {
              return null;
            }

            return (
              <li key={item.title}>
                <p>
                  {number}
                  <strong>{title}</strong>
                </p>
                {copy ? <span>{copy}</span> : null}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }, [intro, items, typedCharacters]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="retrieve-context-overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}>
      <div
        className="retrieve-context-modal"
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}>
        <button
          type="button"
          className="retrieve-context-close"
          aria-label="Close Codex response demo"
          onClick={onClose}>
          <X className="h-5 w-5" />
        </button>
        <div className="codex-chat-window retrieve-context-window">
          <div className="codex-chat-titlebar">
            <div className="codex-chat-dots" aria-hidden="true">
              <span className="bg-[#ff5f57]" />
              <span className="bg-[#ffbd2e]" />
              <span className="bg-[#28c840]" />
            </div>
            <span className="codex-chat-title">Codex</span>
          </div>

          <div className="retrieve-context-thread" ref={scrollRef}>
            <div className="codex-chat-message retrieve-context-prompt">
              {prompt}
            </div>
            {duration ? (
              <div className="codex-chat-duration retrieve-context-duration">
                <span>{duration}</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            ) : null}
            {response}
          </div>
        </div>
      </div>
    </div>
  );
}
