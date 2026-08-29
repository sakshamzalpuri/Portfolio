import { Code2 } from 'lucide-react';
import './CurrentFocus.css';

export default function CurrentFocus({
  focusText = 'Building interactive frontend web applications & responsive UI components',
}) {
  return (
    <section className="current-focus-section container">
      <div className="current-focus-card">
        <div className="focus-left">
          <span className="focus-indicator-dot"></span>
          <div className="focus-text-block">
            <span className="focus-label">CURRENT FOCUS</span>
            <p className="focus-title">
              <span className="focus-emoji">⚙️</span> {focusText}
            </p>
          </div>
        </div>
        <div className="focus-right">
          <Code2 size={18} className="focus-code-icon" />
        </div>
      </div>
    </section>
  );
}
