import { cx } from 'class-variance-authority';
import { IWebTab } from './Tab.interface';
import { tabClasses, textClasses } from './Tab.classes';

//
//

export const Tab: React.FC<IWebTab> = ({ label, tabId, panelId, active = false, onSelect }) => (
  <button
    type='button'
    onClick={onSelect}
    className={cx(textClasses({ active }), tabClasses({ active }))}
    id={tabId}
    role='tab'
    aria-selected={active ? 'true' : 'false'}
    aria-controls={panelId}
  >
    {label}
  </button>
);
